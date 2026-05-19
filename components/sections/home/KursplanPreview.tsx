import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SCHEDULE } from "@/lib/content/schedule";
import { COURSES } from "@/lib/content/courses";
import { WEEKDAYS, type Weekday } from "@/lib/content/opening-hours";
import { SplitHeading } from "@/components/ui/SplitHeading";

function currentWeekday(): Weekday {
  const d = new Date().getDay(); // 0=Sonntag
  return WEEKDAYS[(d + 6) % 7];
}

export function KursplanPreview() {
  const today = currentWeekday();
  const slots = SCHEDULE.filter((s) => s.day === today).slice(0, 6);
  const lookup = new Map(COURSES.map((c) => [c.slug, c]));

  return (
    <section className="py-32 lg:py-40">
      <div className="container-grid">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow mb-4">Heute · {today}</p>
            <SplitHeading
              as="h2"
              className="text-h1 max-w-[16ch] font-display font-bold"
            >
              Heute schon einen Platz?
            </SplitHeading>
          </div>
          <Link
            href="/fitness/kursplan"
            className="group inline-flex items-center gap-2 text-sm text-fg-muted hover:text-brand"
          >
            Vollständiger Kursplan
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {slots.length === 0 ? (
          <p className="rounded-2xl border border-border bg-bg-elevated/40 p-10 text-fg-muted">
            Heute finden keine Kurse statt. Schau in den{" "}
            <Link href="/fitness/kursplan" className="text-brand underline">
              Wochenplan
            </Link>{" "}
            für die nächsten Termine.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {slots.map((s, i) => {
              const c = lookup.get(s.courseSlug);
              if (!c) return null;
              return (
                <Link
                  key={`${s.day}-${s.start}-${i}`}
                  href={`/fitness/kursplan?tag=${s.day.toLowerCase()}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-bg-elevated/40 p-6 transition-colors hover:border-brand"
                >
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                    <span>
                      {s.start} – {s.end}
                    </span>
                    {s.note && (
                      <span className="rounded-full bg-brand/10 px-2 py-0.5 text-brand">
                        {s.note}
                      </span>
                    )}
                  </div>
                  <h3 className="text-h4 mt-4 font-display font-bold">
                    {c.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-fg-muted">
                    {c.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-fg-muted transition-colors group-hover:text-brand">
                    Im Plan ansehen
                    <ArrowUpRight size={12} />
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
