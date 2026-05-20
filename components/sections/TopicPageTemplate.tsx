import { ArrowRight } from "lucide-react";
import { Asterisk } from "@/components/ui/Asterisk";
import { BentoCard } from "@/components/ui/BentoCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Pill } from "@/components/ui/Pill";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PageHero } from "./PageHero";

interface Props {
  eyebrow: string;
  title: string;
  intro: string;
  highlights?: { title: string; body: string }[];
  body?: string[];
  cta?: { label: string; href: string };
}

export function TopicPageTemplate({
  eyebrow,
  title,
  intro,
  highlights,
  body,
  cta,
}: Props) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} variant="light" />

      {highlights && highlights.length > 0 && (
        <section className="bg-bg pb-20 pt-8">
          <div className="container-grid">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {highlights.map((h, i) => (
                <RevealOnScroll key={h.title} delay={i * 0.05}>
                  <BentoCard variant="dark" className="h-full">
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 text-h4 font-display font-black uppercase leading-tight tracking-tight">
                      {h.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                      {h.body}
                    </p>
                  </BentoCard>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {body && body.length > 0 && (
        <section className="pb-16">
          <div className="container-grid">
            <RevealOnScroll>
              <div className="mx-auto max-w-3xl rounded-[var(--radius-frame)] border border-ink-border bg-cream px-7 py-12 lg:px-14 lg:py-16">
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
              <div className="relative overflow-hidden rounded-[var(--radius-frame)] border border-border bg-bg-elevated p-10 md:p-14">
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
