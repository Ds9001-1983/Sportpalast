import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { RoundIconButton } from "@/components/ui/RoundIconButton";
import { SplitHeading } from "@/components/ui/SplitHeading";

const news = [
  {
    slug: "neujahrsaktion",
    date: "Jan 2026",
    title: "Neujahrsaktion: 6 Monate trainieren zum Sonderpreis",
    excerpt:
      "Einstieg ab 9,95 € / Monat. Mit persönlicher Begleitung und individuellem Trainingsplan.",
  },
  {
    slug: "soundhealing",
    date: "Jan 2026",
    title: "Soundhealing-Abend mit Kathi",
    excerpt:
      "Eine Stunde in der Klangwelt — tiefe Entspannung jenseits des Alltags.",
  },
  {
    slug: "boxen-back",
    date: "Dez 2025",
    title: "Boxen kehrt zurück — Welcome-Workshop",
    excerpt:
      "Mit Franzi und Tobi: Einsteiger-Workshop für unser neues Boxen-Format.",
  },
];

export function NewsTeaser() {
  return (
    <section className="bg-bg py-24 lg:py-32">
      <div className="container-grid">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow mb-4">News</p>
            <SplitHeading
              as="h2"
              className="text-h1 max-w-[16ch] font-display font-black uppercase leading-[0.92] tracking-[-0.04em]"
            >
              Was bei uns passiert.
            </SplitHeading>
          </div>
          <Link href="/news" aria-label="Alle Neuigkeiten">
            <RoundIconButton
              direction="up-right"
              variant="solid"
              size="lg"
              ariaLabel="Alle Neuigkeiten"
            />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {news.map((n, i) => {
            const highlighted = i === 1;
            return (
              <RevealOnScroll key={n.slug} delay={i * 0.05}>
                <BentoCard
                  variant="dark"
                  highlighted={highlighted}
                  as="article"
                  className="group h-full"
                >
                  <Link
                    href={`/news/${n.slug}`}
                    className="absolute inset-0"
                    aria-label={n.title}
                  />
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                    {n.date}
                  </p>
                  <h3 className="mt-4 text-h4 font-display font-black uppercase leading-tight tracking-tight">
                    {n.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {n.excerpt}
                  </p>
                  <span
                    className={
                      "mt-6 inline-flex size-9 items-center justify-center rounded-full transition-colors " +
                      (highlighted
                        ? "bg-accent text-white"
                        : "border border-border-strong text-fg group-hover:border-accent group-hover:text-accent")
                    }
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </BentoCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
