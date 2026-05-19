// OpenStreetMap-Embed via iframe — DSGVO-konform, kein Cookie, kein API-Key.
// Bounding-Box passt eng auf Schlosserstraße 33, 51789 Lindlar.
export function MapEmbed() {
  const bbox = "7.3686,51.0205,7.3756,51.0245";
  const marker = "51.0225,7.3721";
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${marker}`;
  const link = `https://www.openstreetmap.org/?mlat=51.0225&mlon=7.3721#map=17/51.0225/7.3721`;

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-bg-elevated">
      <iframe
        title="Karte: Sportpalast Lindlar, Schlosserstraße 33"
        src={src}
        loading="lazy"
        className="aspect-video w-full grayscale-[15%]"
        style={{ colorScheme: "dark" }}
      />
      <div className="flex items-center justify-between gap-4 border-t border-border p-4 text-xs text-fg-muted">
        <span className="font-mono uppercase tracking-[0.2em]">
          Schlosserstraße 33 · 51789 Lindlar
        </span>
        <a
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="underline-offset-4 hover:text-brand hover:underline"
        >
          Größere Karte öffnen ↗
        </a>
      </div>
    </div>
  );
}
