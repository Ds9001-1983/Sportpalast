import { ArrowRight } from "lucide-react";
import { Asterisk } from "@/components/ui/Asterisk";
import { BentoCard } from "@/components/ui/BentoCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Pill } from "@/components/ui/Pill";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils/cn";
import { PageHero } from "./PageHero";

interface Highlight {
  title: string;
  body: string;
}

interface Props {
  eyebrow: string;
  title: string;
  intro: string;
  highlights?: Highlight[];
  body?: string[];
  cta?: { label: string; href: string };
}

/**
 * Deterministische Layout-Variante aus einem stabilen Seed (Titel).
 * Gleicher Titel → gleiche Variante (SSR-sicher, kein Math.random/Date).
 * Bricht die Monotonie der ~20 Topic-Seiten, ohne sie einzeln anzufassen.
 */
function pickVariant(seed: string, count: number): number {
  let sum = 0;
  for (let i = 0; i < seed.length; i++) sum += seed.charCodeAt(i);
  return sum % count;
}

function indexLabel(i: number) {
  return String(i + 1).padStart(2, "0");
}

export function TopicPageTemplate({
  eyebrow,
  title,
  intro,
  highlights,
  body,
  cta,
}: Props) {
  const variant = pickVariant(title, 3);

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} variant="light" />

      {highlights && highlights.length > 0 && (
        <section
          className={cn(
            "pb-20 pt-10",
            variant === 1 ? "bg-bg-alt" : "bg-bg",
          )}
        >
          <div className="container-grid">
            <Highlights items={highlights} variant={variant} />
          </div>
        </section>
      )}

      {body && body.length > 0 && (
        <section className="pb-16">
          <div className="container-grid">
            <RevealOnScroll>
              <div className="mx-auto max-w-3xl rounded-frame border border-ink-border bg-cream px-7 py-12 lg:px-14 lg:py-16">
                <Pill variant="light">Hintergrund</Pill>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
                  {body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {cta && (
        <section className="pb-24">
          <div className="container-grid">
            <RevealOnScroll>
              <div className="relative overflow-hidden rounded-frame border border-border bg-bg-elevated p-10 md:p-14">
                <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-xl">
                    <p className="eyebrow mb-3">Bereit?</p>
                    <p className="text-h3 font-display font-black uppercase leading-[0.95] tracking-tight">
                      Komm vorbei, schau dich um — und finde heraus, ob es passt.
                    </p>
                  </div>
                  <MagneticButton href={cta.href} variant="pill-solid">
                    {cta.label} <ArrowRight size={16} />
                  </MagneticButton>
                </div>
                <Asterisk
                  size={180}
                  spinning
                  className="pointer-events-none absolute -right-10 -top-10 opacity-30"
                />
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}
    </>
  );
}

function Highlights({
  items,
  variant,
}: {
  items: Highlight[];
  variant: number;
}) {
  // Variante 2 — editoriale, nummerierte Liste (keine Karten, mehr Whitespace)
  if (variant === 2) {
    return (
      <div className="grid gap-x-12 md:grid-cols-2">
        {items.map((h, i) => (
          <RevealOnScroll key={h.title} delay={i * 0.04}>
            <div className="flex gap-5 border-t border-border py-7">
              <span className="font-display text-3xl font-black leading-none text-accent-dark/80 lg:text-4xl">
                {indexLabel(i)}
              </span>
              <div>
                <h3 className="text-h4 font-display font-black uppercase leading-tight tracking-tight">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {h.body}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    );
  }

  // Variante 1 — Feature-Bento: erstes Highlight groß & hervorgehoben
  const featuredFirst = variant === 1;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((h, i) => {
        const featured = featuredFirst && i === 0;
        return (
          <RevealOnScroll
            key={h.title}
            delay={i * 0.05}
            className={cn("h-full", featured && "md:col-span-2")}
          >
            <BentoCard
              variant={featured ? "cream" : "dark"}
              highlighted={featured}
              className="h-full"
            >
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-dark">
                {indexLabel(i)}
              </p>
              <h3
                className={cn(
                  "mt-4 font-display font-black uppercase leading-tight tracking-tight",
                  featured ? "text-h3" : "text-h4",
                )}
              >
                {h.title}
              </h3>
              <p
                className={cn(
                  "mt-3 leading-relaxed",
                  featured
                    ? "text-base text-ink-muted lg:max-w-xl"
                    : "text-sm text-fg-muted",
                )}
              >
                {h.body}
              </p>
            </BentoCard>
          </RevealOnScroll>
        );
      })}
    </div>
  );
}
