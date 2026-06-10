import { ArrowRight } from "lucide-react";
import { ImageCardCaption } from "@/components/ui/ImageCardCaption";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Parallax } from "@/components/ui/Parallax";
import { Pill } from "@/components/ui/Pill";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { IMG } from "@/lib/content/media";

// §4.2 Section 3 — "Über uns Mini": Editorial Split, Text links, Bild rechts.
export function AboutMini() {
  return (
    <section className="bg-bg py-24 lg:py-32">
      <div className="container-grid grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Pill dot>Über uns · Seit 2004</Pill>
          <div className="mt-6">
            <SplitHeading
              as="h2"
              className="text-h1 max-w-[16ch] font-display font-medium leading-[1.05] tracking-[-0.01em]"
            >
              Mehr als ein Fitnessstudio.
            </SplitHeading>
          </div>
          <RevealOnScroll>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted">
              Seit 2004 ist der Sportpalast das sportliche Zuhause für Lindlar
              und das Oberbergische — inhabergeführt, familiär und in einem
              Glaspalast, der Training mit Aussicht wörtlich nimmt. Fitness,
              Kurse, Sauna und Physiotherapie unter einem Dach, getragen von
              einem Team, das dich beim Namen kennt.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <MagneticButton href="/ueber-uns" variant="pill-solid">
                Mehr erfahren <ArrowRight size={16} />
              </MagneticButton>
              <span className="font-accent -rotate-2 text-2xl text-accent-dark">
                seit 2004 in Lindlar
              </span>
            </div>
          </RevealOnScroll>
        </div>
        <Parallax offset={-40}>
          <ImageCardCaption
            src={IMG.studio_outside.src}
            alt={IMG.studio_outside.alt}
            caption="Der Glaspalast"
            eyebrow="Schlosserstraße 33"
            aspect="portrait"
            href="/ueber-uns"
          />
        </Parallax>
      </div>
    </section>
  );
}
