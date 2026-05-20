import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Asterisk } from "@/components/ui/Asterisk";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { TEAM_PHOTOS } from "@/lib/content/media";
import { TEAM } from "@/lib/content/team";
import { cn } from "@/lib/utils/cn";

const FEATURED_SLUGS = [
  "uygar-oezcelik",
  "vera-duetting",
  "wolfgang-feykens",
  "thomas-buergerhausen",
];

const HIGHLIGHT_SLUG = "wolfgang-feykens";

export function TrainerBento() {
  const members = FEATURED_SLUGS.map((slug) => TEAM.find((m) => m.slug === slug)).filter(
    (m): m is (typeof TEAM)[number] => !!m,
  );

  return (
    <section className="bg-bg py-24 lg:py-32">
      <div className="container-grid">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow mb-4 flex items-center gap-3">
              <Asterisk size={20} />
              Dein Team
            </p>
            <SplitHeading
              as="h2"
              className="text-h1 max-w-[18ch] font-display font-black uppercase leading-[0.92] tracking-[-0.04em]"
            >
              Die Köpfe hinter deinem Training.
            </SplitHeading>
          </div>
          <Link
            href="/ueber-uns/team"
            className="group inline-flex items-center gap-2 self-end font-mono text-xs uppercase tracking-[0.2em] text-fg-muted hover:text-[var(--color-accent)]"
          >
            Ganzes Team
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Bento-Grid: unregelmäßige Größen */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[repeat(8,minmax(40px,1fr))]">
          {members.map((m, i) => {
            const photo = TEAM_PHOTOS[m.slug];
            const highlighted = m.slug === HIGHLIGHT_SLUG;
            // Bento-Span-Pattern
            const span = [
              "lg:col-span-5 lg:row-span-5", // 0 — groß
              "lg:col-span-7 lg:row-span-3", // 1 — breit
              "lg:col-span-7 lg:row-span-5", // 2 — Hauptkarte (highlighted)
              "lg:col-span-5 lg:row-span-3", // 3 — breit
            ][i];
            return (
              <RevealOnScroll key={m.slug} delay={i * 0.05}>
                <article
                  className={cn(
                    "group relative aspect-[4/5] w-full overflow-hidden rounded-card border lg:aspect-auto lg:h-full",
                    highlighted
                      ? "border-2 border-[var(--color-accent)]"
                      : "border-ink-border bg-cream-elevated",
                    span,
                  )}
                >
                  {photo && (
                    <Image
                      src={photo}
                      alt={m.name}
                      fill
                      sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5">
                    <h3 className="font-display text-xl font-black uppercase leading-tight tracking-tight text-white lg:text-2xl">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">
                      {m.role}
                    </p>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
