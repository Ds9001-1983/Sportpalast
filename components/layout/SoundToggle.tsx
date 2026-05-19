"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "@/components/providers/SoundProvider";

export function SoundToggle() {
  const { muted, toggle } = useSound();
  return (
    <button
      onClick={toggle}
      aria-label={muted ? "Sound einschalten" : "Sound ausschalten"}
      aria-pressed={!muted}
      className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-elevated/80 text-fg-muted backdrop-blur transition-colors hover:border-brand hover:text-brand"
    >
      {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
    </button>
  );
}
