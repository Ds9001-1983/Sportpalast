import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata: Metadata = {
  title: "News",
  description: "Aktuelles aus dem Sportpalast Lindlar — Aktionen, Events, Workshops.",
};

const NEWS = [
  {
    slug: "neujahrsaktion",
    date: "Januar 2026",
    title: "Neujahrsaktion: 6 Monate trainieren zum Sonderpreis",
    excerpt:
      "Einstieg ab 9,95 € / Monat. Mit persönlicher Begleitung und individuellem Trainingsplan.",
  },
  {
    slug: "renovierung-mai-2026",
    date: "Mai 2026",
    title: "Renovierungsarbeiten im hinteren Trainingsbereich",
    excerpt:
      "Vom 19. bis 21. Mai modernisieren wir den hinteren Bereich. Kurse und Hauptfläche laufen normal.",
  },
  {
    slug: "ladies-day",
    date: "März 2026",
    title: "Ladies Day — der Sportpalast gehört euch",
    excerpt:
      "Am 8. März feiern wir den Internationalen Frauentag mit Workouts, Workshops und Wellness.",
  },
  {
    slug: "soundhealing",
    date: "Januar 2026",
    title: "Soundhealing-Abend mit Kathi",
    excerpt:
      "Eine Stunde in der Klangwelt — tiefe Entspannung jenseits des Alltags. Anmeldung empfohlen.",
  },
  {
    slug: "boxen-back",
    date: "Dezember 2025",
    title: "Boxen kehrt zurück — Welcome-Workshop",
    excerpt:
      "Mit Franzi und Tobi: Einsteiger-Workshop für unser neues Boxen-Format.",
  },
  {
    slug: "kurs-marathon",
    date: "November 2025",
    title: "Kurs-Marathon im November",
    excerpt:
      "All-Day Event mit mehreren Kursen, Wellness-Stationen und kleinen Überraschungen.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Was bei uns passiert."
        intro="Aktionen, Events, Workshops und alles, was den Sportpalast gerade bewegt."
      />

      <section className="pb-32">
        <div className="container-grid">
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {NEWS.map((n, i) => (
              <RevealOnScroll key={n.slug} delay={i * 0.04}>
                <li>
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
                </li>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
