import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import {
  HOURS_STUDIO,
  HOURS_SAUNA,
  HOLIDAYS,
  WEEKDAYS,
} from "@/lib/content/opening-hours";

export const metadata: Metadata = {
  title: "Öffnungszeiten",
  description:
    "Öffnungszeiten Fitnessstudio und Sauna im Sportpalast Lindlar. Inklusive Feiertage.",
};

export default function OeffnungszeitenPage() {
  return (
    <>
      <PageHero
        eyebrow="Öffnungszeiten"
        title="Wann du uns besuchen kannst."
        intro="Lange Trainingsfenster, getrennte Zeiten für Sauna und besondere Regelungen an Feiertagen."
      />

      <section className="pb-32">
        <div className="container-grid grid gap-10 lg:grid-cols-2">
          <Card title="Fitnessstudio">
            {WEEKDAYS.map((d) => (
              <Row
                key={d}
                day={d}
                open={`${HOURS_STUDIO[d].open} – ${HOURS_STUDIO[d].close}`}
              />
            ))}
          </Card>
          <Card title="Sauna & Wellness">
            {WEEKDAYS.map((d) => (
              <Row
                key={d}
                day={d}
                open={`${HOURS_SAUNA[d].open} – ${HOURS_SAUNA[d].close}`}
                note={HOURS_SAUNA[d].note}
              />
            ))}
          </Card>

          <div className="lg:col-span-2">
            <Card title="Feiertage">
              {HOLIDAYS.map((h) => (
                <Row key={h.date} day={`${h.date} · ${h.label}`} open={h.hours} />
              ))}
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-frame border border-border bg-bg-elevated p-8 lg:p-10">
      <p className="eyebrow mb-6">{title}</p>
      <ul className="divide-y divide-border">{children}</ul>
    </div>
  );
}

function Row({
  day,
  open,
  note,
}: {
  day: string;
  open: string;
  note?: string;
}) {
  return (
    <li className="flex items-baseline justify-between gap-4 py-3">
      <span className="font-display font-medium">{day}</span>
      <span className="text-right font-mono text-sm text-fg-muted">
        {open}
        {note && <span className="ml-2 text-accent-dark">· {note}</span>}
      </span>
    </li>
  );
}
