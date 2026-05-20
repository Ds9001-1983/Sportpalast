import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";
import { RoundIconButton } from "@/components/ui/RoundIconButton";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { COURSES } from "@/lib/content/courses";
import { WEEKDAYS, type Weekday } from "@/lib/content/opening-hours";
import { SCHEDULE } from "@/lib/content/schedule";

function currentWeekday(): Weekday {
  const d = new Date().getDay();
  return WEEKDAYS[(d + 6) % 7];
}

export function KursplanPreview() {
  const today = currentWeekday();
  const slots = SCHEDULE.filter((s) => s.day === today).slice(0, 6);
  const lookup = new Map(COURSES.map((c) => [c.slug, c]));

  return (
    <section className="bg-bg py-24 lg:py-32">
      <div className="container-grid">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow mb-4">Heute · {today}</p>
            <SplitHeading
              as="h2"
              className="text-h1 max-w-[16ch] font-display font-black uppercase leading-[0.92] tracking-[-0.04em]"
            >
              Heute schon einen Platz?
            </SplitHeading>
          </div>
          <Link href="/fitness/kursplan" aria-label="Vollständiger Kursplan">
            <RoundIconButton
              direction="up-right"
              variant="solid"
              size="lg"
              ariaLabel="Vollständiger Kursplan"
            />
          </Link>
        </div>

        {slots.length === 0 ? (
          <BentoCard variant="dark">
            <p className="text-fg-muted">
              Heute finden keine Kurse statt. Schau in den{" "}
              <Link href="/fitness/kursplan" className="text-[var(--color-accent)] underline">
                Wochenplan
              </Link>{" "}
              für die nächsten Termine.
            </p>
          </BentoCard>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {slots.map((s, i) => {
              const c = lookup.get(s.courseSlug);
              if (!c) return null;
              const highlighted = i === 0;
              return (
                <BentoCard
                  key={`${s.day}-${s.start}-${i}`}
                  variant="dark"
                  highlighted={highlighted}
                  as="article"
                  className="group h-full"
                >
                  <Link
                    href={`/fitness/kursplan?tag=${s.day.toLowerCase()}`}
                    className="absolute inset-0"
                    aria-label={`${c.name} ${s.start}`}
                  />
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                    <span>
                      {s.start} – {s.end}
                    </span>
                    {s.note && (
                      <span className="rounded-full bg-[var(--color-accent-soft)] px-2 py-0.5 text-[var(--color-accent)]">
                        {s.note}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 text-h4 font-display font-black uppercase leading-tight tracking-tight">
                    {c.name}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm text-fg-muted">
                    {c.description}
                  </p>
                  <span
                    className={
                      "mt-6 inline-flex size-9 items-center justify-center rounded-full transition-colors " +
                      (highlighted
                        ? "bg-[var(--color-accent)] text-white"
                        : "border border-border-strong text-fg group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]")
                    }
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </BentoCard>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
