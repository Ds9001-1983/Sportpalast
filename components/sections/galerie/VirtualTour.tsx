"use client";

import { useEffect, useRef } from "react";

// Photo-Sphere-Viewer Embed — lädt die Lib + CSS dynamisch beim Mount, damit
// die ~120 kB Pano-Lib nicht im Initial-Bundle aller Pages landen.
export function VirtualTour() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<{ destroy?: () => void } | null>(null);

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
        // Übergangs-Panorama: ein Studio-Foto im 2:1 Format als Mock.
        // Sobald echte 360°-Aufnahmen vorliegen, hier ersetzen.
        panorama:
          "https://www.sportpalast-lindlar.de/wp-content/uploads/770_Hintergrund_1.jpg",
        defaultZoomLvl: 30,
        navbar: ["zoom", "fullscreen"],
        loadingTxt: "Lade Rundgang …",
      });
    })();

    return () => {
      cancelled = true;
      viewerRef.current?.destroy?.();
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border bg-bg-elevated"
      />
      <p className="mt-3 text-center font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
        Demo-Panorama · echte 360°-Aufnahmen folgen
      </p>
    </div>
  );
}
