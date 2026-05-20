import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { StickerBadge } from "@/components/ui/StickerBadge";
import { PRICES } from "@/lib/content/prices";
import { eur } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";

export function PreiseTeaser() {
  // erster Plan ist „aktiv" und bekommt den StickerBadge
  return (
    <section className="bg-cream-bg py-24 text-ink lg:py-32">
      <div className="container-grid">
        <div className="rounded-frame bg-cream-elevated px-6 py-12 lg:px-14 lg:py-16">
          <div className="text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-subtle">
              Wähle deinen
            </p>
            <SplitHeading
              as="h2"
              className="text-h1 mx-auto font-display font-black uppercase leading-[0.92] tracking-[-0.04em]"
            >
              Besten Tarif.
            </SplitHeading>
            <p className="mx-auto mt-4 max-w-xl text-ink-muted">
              Alle Tarife enthalten Studio, EGYM, Kurse, Sauna und Getränkeflat.
            </p>
          </div>

          <div className="mt-12 rounded-card bg-ink p-2 text-cream lg:mt-16 lg:p-4">
            <ul className="divide-y divide-white/8">
              {PRICES.map((p, i) => {
                const from = Math.min(...p.variants.map((v) => v.monthly));
                const active = i === 0;
                return (
                  <RevealOnScroll key={p.slug} delay={i * 0.05}>
                    <li className="relative">
                      <Link
                        href={`/preise?plan=${p.slug}`}
                        className={cn(
                          "grid items-center gap-6 px-6 py-8 transition-opacity lg:grid-cols-[1.6fr_auto_auto] lg:px-10 lg:py-10",
                          active ? "opacity-100" : "opacity-55 hover:opacity-90",
                        )}
                      >
                        <div>
                          {p.badge && (
                            <span className="mb-2 inline-flex items-center rounded-full bg-accent px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white">
                              {p.badge}
                            </span>
                          )}
                          <h3
                            className={cn(
                              "font-display font-black uppercase leading-[0.95] tracking-[-0.02em]",
                              active ? "text-[clamp(1.75rem,3.5vw,3rem)]" : "text-[clamp(1.5rem,3vw,2.5rem)] text-cream/70",
                            )}
                          >
                            {p.tagline}
                          </h3>
                          <ul className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-xs uppercase tracking-[0.16em] text-cream/60">
                            {p.highlights.slice(0, 4).map((f) => (
                              <li key={f} className="flex items-center gap-2">
                                <span className="size-1 rounded-full bg-cream/40" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {active && (
                          <div className="flex items-start justify-center">
                            <StickerBadge size={148}>
                              <div className="text-[10px] tracking-[0.2em]">ab</div>
                              <div className="text-3xl">{eur(from).replace(/[  \s]/g, "")}</div>
                              <div className="mt-1 text-[10px] tracking-[0.2em]">/ Monat</div>
                            </StickerBadge>
                          </div>
                        )}

                        <div className="text-right font-mono text-xs uppercase tracking-[0.2em] text-cream/50">
                          {p.name}
                        </div>
                      </Link>
                    </li>
                  </RevealOnScroll>
                );
              })}
            </ul>
          </div>

          <div className="mt-10 flex justify-center">
            <MagneticButton href="/preise" variant="pill-ink">
              Tarif-Konfigurator öffnen <ArrowRight size={14} />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
