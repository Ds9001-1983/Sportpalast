import { ArrowRight, Smile } from "lucide-react";
import { Asterisk } from "@/components/ui/Asterisk";
import { ImageCardCaption } from "@/components/ui/ImageCardCaption";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Parallax } from "@/components/ui/Parallax";
import { Pill } from "@/components/ui/Pill";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { IMG } from "@/lib/content/media";

export function Hero() {
  return (
    <section className="relative pt-28 pb-12 lg:pt-32 lg:pb-16">
      <div className="container-grid">
        <div className="relative overflow-hidden rounded-[var(--radius-frame)] border border-ink-border bg-cream px-6 py-12 text-ink lg:px-14 lg:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <Pill dot variant="light">
              Seit 2004 · Lindlar
            </Pill>
            <span className="hidden font-mono text-xs uppercase tracking-[0.3em] text-ink-subtle sm:inline">
              Training mit Aussicht
            </span>
          </div>

          {/* Pre-Headline */}
          <p className="mt-10 font-display text-sm font-bold uppercase tracking-[0.18em] text-ink-muted lg:text-base">
            Dein Weg. Dein Ziel. Unser Support.
          </p>
          <div className="mt-2 border-t border-ink-border" />

          {/* Headline + Asterisk */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <SplitHeading
              as="h1"
              className="max-w-[14ch] font-display text-[clamp(2.75rem,9vw,8rem)] font-black uppercase leading-[0.93] tracking-[-0.04em]"
            >
              Training mit Aussicht — für deine beste Form.
            </SplitHeading>
            <div className="flex shrink-0 items-start justify-end gap-4 lg:flex-col lg:items-end">
              <Parallax offset={90}>
                <Asterisk size={88} spinning />
              </Parallax>
            </div>
          </div>

          {/* Body + CTA Row */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_auto_auto] lg:items-end">
            <p className="max-w-md text-balance text-base leading-relaxed text-ink-muted lg:text-lg">
              2 000 m² Glaspalast mit Panoramablick ins Oberbergische. Über 30
              Kurse pro Woche, EGYM Smart Strength, Sauna & Wellness — und eine
              Physiotherapie unter dem gleichen Dach.
            </p>
            <MagneticButton href="/mitglied-werden" variant="pill-solid">
              Probetraining <ArrowRight size={16} />
            </MagneticButton>
          </div>

          {/* Image Cards Row */}
          <div className="mt-12 grid gap-4 sm:grid-cols-[1fr_2fr] lg:gap-6">
            <ImageCardCaption
              src={IMG.fitness.src}
              alt={IMG.fitness.alt}
              caption="Trainingsfläche"
              eyebrow="Glaspalast"
              aspect="portrait"
              priority
            />
            <ImageCardCaption
              src={IMG.hero.src}
              alt={IMG.hero.alt}
              caption="Dein neues Lieblingsstudio"
              eyebrow="Sportpalast Lindlar"
              aspect="landscape"
              priority
            />
          </div>

          {/* Stats-Chips */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <div className="inline-flex size-10 items-center justify-center rounded-full bg-ink text-cream">
              <Smile size={20} strokeWidth={1.6} />
            </div>
            <span className="inline-flex items-center rounded-full bg-[var(--color-accent)] px-5 py-2 font-display text-sm font-black uppercase tracking-tight text-white">
              950+ Mitglieder
            </span>
            <span className="inline-flex items-center rounded-full bg-ink px-5 py-2 font-display text-sm font-black uppercase tracking-tight text-cream">
              Glückliche Gesichter
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
