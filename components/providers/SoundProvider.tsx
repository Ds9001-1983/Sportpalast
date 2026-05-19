"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type SoundId = "hover" | "click" | "transition";

interface SoundCtx {
  muted: boolean;
  toggle: () => void;
  play: (id: SoundId) => void;
}

const Ctx = createContext<SoundCtx | null>(null);

// Sounds werden zur Laufzeit per WebAudio synthetisiert — kein externes
// Asset-File, keine Bytes im Initial-Load, sofortige Reaktion. Subtile,
// kurze Tones, die wie ein hochwertiger UI-Tick wirken statt aufdringlich.
const TONES: Record<SoundId, { freq: number; duration: number; gain: number }> = {
  hover: { freq: 1800, duration: 0.04, gain: 0.04 },
  click: { freq: 900, duration: 0.09, gain: 0.08 },
  transition: { freq: 320, duration: 0.45, gain: 0.06 },
};

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [muted, setMuted] = useState(true);
  const ctxRef = useRef<AudioContext | null>(null);
  const lastPlayedRef = useRef<Record<SoundId, number>>({
    hover: 0,
    click: 0,
    transition: 0,
  });

  useEffect(() => {
    const stored = localStorage.getItem("sp-sound-muted");
    if (stored !== null) setMuted(stored === "1");
  }, []);

  useEffect(() => {
    localStorage.setItem("sp-sound-muted", muted ? "1" : "0");
  }, [muted]);

  const play = useCallback(
    (id: SoundId) => {
      if (muted) return;
      if (typeof window === "undefined") return;
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return;

      // Throttle: nicht öfter als alle 80 ms denselben Sound abspielen.
      const now = performance.now();
      if (now - lastPlayedRef.current[id] < 80) return;
      lastPlayedRef.current[id] = now;

      try {
        if (!ctxRef.current) {
          const AC =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext })
              .webkitAudioContext;
          ctxRef.current = new AC();
        }
        const ctx = ctxRef.current!;
        if (ctx.state === "suspended") ctx.resume();

        const { freq, duration, gain } = TONES[id];
        const osc = ctx.createOscillator();
        const env = ctx.createGain();

        osc.type = id === "transition" ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        if (id === "transition") {
          osc.frequency.exponentialRampToValueAtTime(
            freq * 0.55,
            ctx.currentTime + duration,
          );
        }

        // Sanfter Attack + Release (Klick-Pop vermeiden)
        env.gain.setValueAtTime(0, ctx.currentTime);
        env.gain.linearRampToValueAtTime(gain, ctx.currentTime + 0.005);
        env.gain.exponentialRampToValueAtTime(
          0.0001,
          ctx.currentTime + duration,
        );

        osc.connect(env).connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration + 0.02);
      } catch {
        // WebAudio nicht verfügbar – stillschweigend ignorieren.
      }
    },
    [muted],
  );

  const value = useMemo(
    () => ({ muted, toggle: () => setMuted((m) => !m), play }),
    [muted, play],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useSound = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSound must be used inside SoundProvider");
  return ctx;
};
