import { ArrowDown, ArrowRight } from "lucide-react";
import { HeroVideoShader } from "@/components/webgl/HeroVideoShader";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Pill } from "@/components/ui/Pill";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <HeroVideoShader
        src={{ mp4: "/video/hero-loop.mp4", webm: "/video/hero-loop.webm" }}
        poster="/images/hero/hero-poster.jpg"
      />

      <div className="container-grid relative flex min-h-[100svh] flex-col justify-end pb-20 pt-40 lg:pb-28">
        <div className="flex items-center gap-3">
          <Pill dot>Seit 2004 · Lindlar</Pill>
          <span className="hidden font-mono text-xs uppercase tracking-[0.3em] text-fg-subtle sm:inline">
            Training mit Aussicht
          </span>
        </div>

        <SplitHeading
          as="h1"
          className="mt-8 max-w-[18ch] text-[clamp(3rem,9vw,9rem)] font-display font-black leading-[0.9] tracking-tight"
        >
          Dein Weg. Dein Ziel. Unser Support.
        </SplitHeading>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-xl text-balance text-lg leading-relaxed text-fg-muted">
            2 000 m² Glaspalast mit Panoramablick ins Oberbergische. Über 30
            Kurse pro Woche, EGYM Smart Strength, Sauna & Wellness — und eine
            Physiotherapie unter dem gleichen Dach.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton href="/mitglied-werden">
              Mitglied werden <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href="/kontakt" variant="outline">
              Probetraining
            </MagneticButton>
          </div>
        </div>

        <div className="mt-14 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-fg-subtle">
          <ArrowDown size={14} className="animate-bounce text-brand" />
          <span>Scroll für mehr</span>
        </div>
      </div>
    </section>
  );
}
