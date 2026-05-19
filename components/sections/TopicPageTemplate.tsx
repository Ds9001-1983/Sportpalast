import { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ArrowRight } from "lucide-react";

interface Props {
  eyebrow: string;
  title: string;
  intro: string;
  highlights?: { title: string; body: string }[];
  body?: ReactNode;
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
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />

      {highlights && highlights.length > 0 && (
        <section className="py-20">
          <div className="container-grid grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <RevealOnScroll key={h.title} delay={i * 0.05}>
                <div className="border-t border-border pt-6">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-h4 mt-3 font-display">{h.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {h.body}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      )}

      {body && <section className="py-12">{body}</section>}

      {cta && (
        <section className="py-24">
          <div className="container-grid">
            <RevealOnScroll>
              <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-bg-elevated/50 p-10 md:flex-row md:items-center md:justify-between md:p-14">
                <div>
                  <p className="eyebrow mb-2">Bereit?</p>
                  <p className="text-h3 font-display max-w-xl">
                    Komm vorbei, schau dich um — und finde heraus, ob es passt.
                  </p>
                </div>
                <MagneticButton href={cta.href} variant="primary">
                  {cta.label} <ArrowRight size={16} />
                </MagneticButton>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}
    </>
  );
}
