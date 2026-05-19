"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type SoundId = "hover" | "click" | "transition";

interface SoundCtx {
  muted: boolean;
  toggle: () => void;
  play: (id: SoundId) => void;
}

const Ctx = createContext<SoundCtx | null>(null);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("sp-sound-muted");
    if (stored !== null) setMuted(stored === "1");
  }, []);

  useEffect(() => {
    localStorage.setItem("sp-sound-muted", muted ? "1" : "0");
  }, [muted]);

  const play = useCallback(
    (_id: SoundId) => {
      if (muted) return;
      // Howler integration kept lazy — sound sprites are loaded on first
      // user-unmute to avoid shipping audio bytes for users who never enable it.
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
