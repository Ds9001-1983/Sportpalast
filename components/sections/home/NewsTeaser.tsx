import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
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
    <section className="py-32 lg:py-40">
      <div className="container-grid">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow mb-4">News</p>
            <SplitHeading
              as="h2"
              className="text-h1 max-w-[16ch] font-display font-bold"
            >
              Was bei uns passiert.
            </SplitHeading>
          </div>
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-sm text-fg-muted hover:text-brand"
          >
            Alle Neuigkeiten
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {news.map((n, i) => (
            <RevealOnScroll key={n.slug} delay={i * 0.05}>
              <Link
                href={`/news/${n.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-bg-elevated/40 p-6 transition-colors hover:border-brand"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                    {n.date}
                  </p>
                  <h3 className="text-h4 mt-3 font-display font-bold">
                    {n.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {n.excerpt}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-fg-muted transition-colors group-hover:text-brand">
                  Lesen <ArrowUpRight size={12} />
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
