import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { VirtualTour } from "@/components/sections/galerie/VirtualTour";
import { GALLERY } from "@/lib/content/media";

export const metadata: Metadata = {
  title: "Galerie & Rundgang",
  description:
    "Bilder und virtueller Rundgang durch den Sportpalast Lindlar — Trainingsfläche, Sauna, Lounge.",
};

const spans = [
  "lg:row-span-2 lg:col-span-2",
  "",
  "",
  "lg:col-span-2",
  "",
  "",
  "",
  "lg:col-span-2",
  "",
  "",
];

export default function GaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Schau dich um."
        intro="Lass die Bilder sprechen — und plane danach deinen Besuch im Sportpalast."
      />

      <section className="pb-20">
        <div className="container-grid">
          <div className="grid auto-rows-[220px] gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[280px]">
            {GALLERY.map((img, i) => (
              <RevealOnScroll
                key={img.src}
                delay={i * 0.03}
                className={spans[i] ?? ""}
              >
                <figure className="group relative h-full overflow-hidden rounded-card border border-border bg-bg-elevated">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-xs uppercase tracking-[0.2em] text-white transition-colors">
                    <span className="font-display font-black tracking-tight">{img.alt}</span>
                    <span className="font-mono text-white/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </figure>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-grid">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-3">Virtueller Rundgang</p>
              <h2 className="text-h2 max-w-[18ch] font-display font-black uppercase leading-[0.92] tracking-[-0.04em]">
                Lauf durch den Glaspalast — von zu Hause.
              </h2>
            </div>
            <p className="hidden max-w-xs text-sm text-fg-muted md:block">
              Klicken und ziehen, um dich umzuschauen. 360°-Aufnahmen vom Studio
              folgen in voller Auflösung.
            </p>
          </div>
          <VirtualTour />
        </div>
      </section>
    </>
  );
}
