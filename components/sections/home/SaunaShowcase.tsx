import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Asterisk } from "@/components/ui/Asterisk";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { VerticalSideTab } from "@/components/ui/VerticalSideTab";
import { IMG } from "@/lib/content/media";

export function SaunaShowcase() {
  return (
    <section className="bg-bg py-24 lg:py-32">
      <div className="container-grid">
        <div className="grid items-stretch gap-5 lg:grid-cols-[auto_1.4fr_1fr]">
          {/* Vertical Side-Tab */}
          <VerticalSideTab label="Sauna · Wellness" className="hidden lg:flex" />

          {/* Großes Bild mit Caption */}
          <RevealOnScroll>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] lg:aspect-auto">
              <Image
                src={IMG.sauna.src}
                alt={IMG.sauna.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
                  Wellness · 250 m²
                </span>
                <span className="font-display text-2xl font-black uppercase leading-tight tracking-tight text-white lg:text-3xl">
                  Wärme, die abschaltet
                </span>
              </div>
            </div>
          </RevealOnScroll>

          {/* Detail-Block */}
          <div className="relative flex flex-col justify-between rounded-[var(--radius-card)] border border-border bg-bg-elevated p-8 lg:p-10">
            <div>
              <Asterisk size={56} spinning />
              <p className="eyebrow mt-8">Sauna & Wellness</p>
              <SplitHeading
                as="h2"
                className="text-h3 mt-4 font-display font-black uppercase leading-[0.95] tracking-[-0.03em]"
              >
                Indoor, Outdoor & Ruheraum.
              </SplitHeading>
              <p className="mt-6 text-sm leading-relaxed text-fg-muted">
                Indoor-Sauna für 20+ Gäste, Outdoor-Sauna auf der Terrasse,
                Ruheraum mit Lounges. Nach dem Training oder einfach nur so.
              </p>
            </div>
            <div className="mt-10">
              <MagneticButton href="/sauna" variant="pill-solid">
                Sauna entdecken <ArrowRight size={14} />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
