"use client";

import { useEffect, useRef, useState } from "react";

type Scene = {
  id: string;
  label: string;
  src: string;
};

const SCENES: Scene[] = [
  { id: "training", label: "Trainingsfläche", src: "/images/360/training.jpg" },
  { id: "sauna", label: "Sauna & Wellness", src: "/images/360/sauna.jpg" },
  { id: "kursraum", label: "Kursraum", src: "/images/360/kursraum.jpg" },
];

// Cropped-Equirectangular: Die 21:9-Bilder (2560×1080) werden zentriert in eine
// volle 360°-Sphäre (5120×2560) gesetzt. Der Viewer rendert beim Drehen den
// Bildbereich + leeren Raum drumherum — Pano-Effekt ohne echte 360°-Aufnahme.
const PANO_DATA = {
  fullWidth: 5120,
  fullHeight: 2560,
  croppedWidth: 2560,
  croppedHeight: 1080,
  croppedX: 1280,
  croppedY: 740,
};

export function VirtualTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<{
    setPanorama: (src: string, opts: { panoData: typeof PANO_DATA }) => Promise<void>;
    destroy: () => void;
  } | null>(null);
  const [activeId, setActiveId] = useState(SCENES[0].id);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let cancelled = false;

    (async () => {
      const [{ Viewer }] = await Promise.all([
        import("@photo-sphere-viewer/core"),
        import("@photo-sphere-viewer/core/index.css"),
      ]);
      if (cancelled) return;

      viewerRef.current = new Viewer({
        container: el,
        panorama: SCENES[0].src,
        panoData: PANO_DATA,
        defaultZoomLvl: 20,
        navbar: ["zoom", "fullscreen"],
        loadingTxt: "Lade Rundgang …",
      }) as unknown as typeof viewerRef.current;
    })();

    return () => {
      cancelled = true;
      viewerRef.current?.destroy?.();
    };
  }, []);

  const switchScene = (scene: Scene) => {
    if (!viewerRef.current || scene.id === activeId) return;
    setActiveId(scene.id);
    viewerRef.current.setPanorama(scene.src, { panoData: PANO_DATA });
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border bg-bg-elevated"
      />
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {SCENES.map((s) => {
          const active = s.id === activeId;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => switchScene(s)}
              aria-pressed={active}
              className={
                "rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] transition " +
                (active
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-fg-subtle hover:border-accent/50 hover:text-fg")
              }
            >
              {s.label}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-center font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
        Demo-Rundgang · KI-generierte Panoramen (echte 360°-Aufnahmen folgen)
      </p>
    </div>
  );
}
