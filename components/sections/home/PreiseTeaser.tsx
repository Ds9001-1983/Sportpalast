import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRICES } from "@/lib/content/prices";
import { eur } from "@/lib/utils/format";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function PreiseTeaser() {
  return (
    <section className="py-32 lg:py-40">
      <div className="container-grid">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-4">Preise</p>
          <SplitHeading
            as="h2"
            className="text-h1 font-display font-bold"
          >
            Faire Tarife. Keine versteckten Kosten.
          </SplitHeading>
          <p className="mt-6 text-lg leading-relaxed text-fg-muted">
            Alle Tarife enthalten den vollen Studio-Zugang inklusive Geräte,
            Kurse, EGYM, Sauna und Getränkeflat. Starterpaket einmalig{" "}
            {eur(79.95)}.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {PRICES.map((p, i) => {
            const from = Math.min(...p.variants.map((v) => v.monthly));
            return (
              <RevealOnScroll key={p.slug} delay={i * 0.05}>
                <Link
                  href={`/preise?plan=${p.slug}`}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-bg-elevated/40 p-8 transition-colors hover:border-brand"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
                        {p.name}
                      </p>
                      {p.badge && (
                        <span className="rounded-full bg-brand/15 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-brand">
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-h3 mt-4 font-display font-bold">
                      {p.tagline}
                    </h3>
                    <p className="mt-3 text-sm text-fg-muted">{p.description}</p>
                  </div>

                  <div className="mt-10">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                      ab
                    </p>
                    <p className="font-display text-5xl font-black">
                      {eur(from)}
                      <span className="ml-1 text-base font-medium text-fg-muted">
                        / Monat
                      </span>
                    </p>
                  </div>
                </Link>
              </RevealOnScroll>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <MagneticButton href="/preise" variant="outline">
            Tarif-Konfigurator öffnen <ArrowRight size={14} />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
