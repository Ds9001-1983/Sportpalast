import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "Galerie & Rundgang",
  description:
    "Bilder und virtueller Rundgang durch den Sportpalast Lindlar — Trainingsfläche, Sauna, Lounge.",
};

const tiles = [
  { label: "Glaspalast — Außenansicht", area: "lg:row-span-2 lg:col-span-2" },
  { label: "Trainingsfläche", area: "" },
  { label: "Cardio-Bereich", area: "" },
  { label: "Freihantelbereich", area: "lg:col-span-2" },
  { label: "Kursraum", area: "" },
  { label: "EGYM Geräte", area: "" },
  { label: "Sauna Indoor", area: "" },
  { label: "Sauna Outdoor", area: "lg:col-span-2" },
  { label: "Ruheraum", area: "" },
  { label: "Lounge & Café", area: "" },
];

export default function GaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Schau dich um."
        intro="Lass die Bilder sprechen — und plane danach deinen Besuch."
      />

      <section className="pb-20">
        <div className="container-grid">
          <div className="grid auto-rows-[200px] gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px]">
            {tiles.map((t, i) => (
              <RevealOnScroll key={t.label} delay={i * 0.03} className={t.area}>
                <figure
                  className="group relative h-full overflow-hidden rounded-2xl border border-border bg-bg-elevated"
                  style={{
                    backgroundImage: `radial-gradient(circle at ${
                      30 + (i % 4) * 20
                    }% ${20 + (i % 3) * 20}%, rgba(0,172,167,0.25), transparent 60%), linear-gradient(180deg, #141417, #0a0a0b)`,
                  }}
                >
                  <span aria-hidden className="absolute inset-0 grain" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-xs uppercase tracking-[0.2em] text-fg-subtle transition-colors group-hover:text-brand">
                    <span>{t.label}</span>
                    <span className="font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-dashed border-border bg-bg-elevated/30 p-8 text-center">
            <p className="eyebrow mb-2">Virtueller Rundgang</p>
            <p className="text-fg-muted">
              360°-Tour folgt — Insta360-Aufnahmen sind in Arbeit. Bis dahin:
              Komm einfach vorbei.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
