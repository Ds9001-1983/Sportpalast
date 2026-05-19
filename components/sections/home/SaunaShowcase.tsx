import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { IMG } from "@/lib/content/media";

export function SaunaShowcase() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-40">
      <div className="container-grid">
        <div className="relative grid overflow-hidden rounded-3xl border border-border bg-bg-elevated lg:grid-cols-[1.2fr_1fr]">
          <div className="relative min-h-[340px] overflow-hidden lg:min-h-[560px]">
            <Image
              src={IMG.sauna.src}
              alt={IMG.sauna.alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg/70 via-bg/20 to-transparent" />
            <p className="absolute bottom-8 left-8 font-mono text-xs uppercase tracking-[0.3em] text-fg">
              Wellness 250 m²
            </p>
          </div>

          <div className="flex flex-col justify-center p-10 lg:p-14">
            <RevealOnScroll>
              <p className="eyebrow mb-4">Sauna & Wellness</p>
              <SplitHeading
                as="h2"
                className="text-h2 max-w-[14ch] font-display font-bold"
              >
                Wärme, die abschaltet.
              </SplitHeading>
              <p className="mt-6 max-w-md text-fg-muted">
                Indoor-Sauna für 20+ Gäste, Outdoor-Sauna auf der Terrasse,
                Ruheraum mit Lounges. Nach dem Training oder einfach nur so.
              </p>
              <div className="mt-8">
                <MagneticButton href="/sauna" variant="outline">
                  Sauna entdecken <ArrowRight size={14} />
                </MagneticButton>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
