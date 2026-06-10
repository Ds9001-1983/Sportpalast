"use client";

import { useEffect, useMemo, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { COURSES, COURSE_GOALS, type CourseGoal } from "@/lib/content/courses";
import { SCHEDULE, type ScheduleSlot } from "@/lib/content/schedule";
import { WEEKDAYS, type Weekday } from "@/lib/content/opening-hours";
import { TEAM } from "@/lib/content/team";
import { cn } from "@/lib/utils/cn";

function currentWeekday(): Weekday {
  const d = new Date().getDay();
  return WEEKDAYS[(d + 6) % 7];
}

export function KursplanInteractive() {
  const [goal, setGoal] = useState<CourseGoal | "alle">("alle");
  const [day, setDay] = useState<Weekday | "alle">("alle");
  const [trainer, setTrainer] = useState<string | "alle">("alle");

  // Mobile-Akkordeon: heutiger Tag erst nach Mount öffnen
  // (new Date() beim Render würde den Build-Tag einfrieren).
  const [openDay, setOpenDay] = useState<string>("");
  useEffect(() => setOpenDay(currentWeekday()), []);

  const courseLookup = useMemo(
    () => new Map(COURSES.map((c) => [c.slug, c])),
    [],
  );

  // Trainer:innen-Filter (§9.2) — zeigt nur tatsächlich belegte Zuordnungen.
  const trainers = useMemo(() => {
    const slugs = [...new Set(SCHEDULE.map((s) => s.trainerSlug).filter(Boolean))] as string[];
    const nameOf = new Map(TEAM.map((t) => [t.slug, t.name]));
    return slugs
      .map((slug) => ({ slug, name: nameOf.get(slug) ?? slug }))
      .sort((a, b) => a.name.localeCompare(b.name, "de"));
  }, []);

  const filtered = useMemo(() => {
    return SCHEDULE.filter((s) => {
      if (day !== "alle" && s.day !== day) return false;
      if (trainer !== "alle" && s.trainerSlug !== trainer) return false;
      if (goal !== "alle") {
        const c = courseLookup.get(s.courseSlug);
        if (!c || !c.goals.includes(goal)) return false;
      }
      return true;
    });
  }, [day, goal, trainer, courseLookup]);

  const byDay = useMemo(() => {
    const m = new Map<Weekday, typeof filtered>();
    WEEKDAYS.forEach((d) => m.set(d, []));
    filtered.forEach((s) => m.get(s.day)?.push(s));
    return m;
  }, [filtered]);

  return (
    <section className="py-20">
      <div className="container-grid">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Kursplan</p>
            <h2 className="text-h2 font-display font-medium">
              {filtered.length} Kurse gefunden
            </h2>
          </div>
          <button
            onClick={() => {
              setGoal("alle");
              setDay("alle");
              setTrainer("alle");
            }}
            className="text-sm text-fg-muted underline-offset-4 hover:text-brand hover:underline"
          >
            Filter zurücksetzen
          </button>
        </div>

        <div className="space-y-6">
          <FilterRow label="Tag" allLabel="Alle Tage">
            <FilterChip
              active={day === "alle"}
              onClick={() => setDay("alle")}
              label="Alle"
            />
            {WEEKDAYS.map((d) => (
              <FilterChip
                key={d}
                active={day === d}
                onClick={() => setDay(d)}
                label={d}
              />
            ))}
          </FilterRow>

          <FilterRow label="Trainingsziel" allLabel="Alle Ziele">
            <FilterChip
              active={goal === "alle"}
              onClick={() => setGoal("alle")}
              label="Alle"
            />
            {Object.entries(COURSE_GOALS).map(([k, v]) => (
              <FilterChip
                key={k}
                active={goal === k}
                onClick={() => setGoal(k as CourseGoal)}
                label={v}
              />
            ))}
          </FilterRow>

          {trainers.length > 0 && (
            <FilterRow label="Trainer:in" allLabel="Alle Trainer:innen">
              <FilterChip
                active={trainer === "alle"}
                onClick={() => setTrainer("alle")}
                label="Alle"
              />
              {trainers.map((t) => (
                <FilterChip
                  key={t.slug}
                  active={trainer === t.slug}
                  onClick={() => setTrainer(t.slug)}
                  label={t.name}
                />
              ))}
            </FilterRow>
          )}
        </div>

        {/* Mobile: Akkordeon je Wochentag (§3.5) */}
        <Accordion.Root
          type="single"
          collapsible
          value={openDay}
          onValueChange={setOpenDay}
          className="mt-12 overflow-hidden rounded-3xl border border-border lg:hidden"
        >
          {WEEKDAYS.map((d) => {
            const slots = byDay.get(d) ?? [];
            return (
              <Accordion.Item
                key={d}
                value={d}
                className="border-b border-border bg-bg-elevated/60 last:border-b-0"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between p-4 text-left">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
                      {d}
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="text-xs text-fg-subtle">
                        {slots.length} {slots.length === 1 ? "Kurs" : "Kurse"}
                      </span>
                      <ChevronDown
                        size={16}
                        className="text-fg-subtle transition-transform duration-200 group-data-[state=open]:rotate-180"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.2s_ease-out] data-[state=open]:animate-[accordion-down_0.25s_ease-out]">
                  <div className="px-4 pb-4">
                    {slots.length === 0 ? (
                      <p className="text-xs text-fg-subtle">
                        Keine Kurse für die aktuelle Filterauswahl.
                      </p>
                    ) : (
                      <SlotList slots={slots} courseLookup={courseLookup} day={d} />
                    )}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>

        {/* Desktop: 7-Spalten-Wochenraster */}
        <div className="mt-12 hidden gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid lg:grid-cols-7">
          {WEEKDAYS.map((d) => {
            const slots = byDay.get(d) ?? [];
            return (
              <div
                key={d}
                className="flex flex-col bg-bg-elevated/60 p-4 lg:p-5"
              >
                <p className="mb-4 border-b border-border pb-3 font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
                  {d}
                </p>
                {slots.length === 0 ? (
                  <p className="text-xs text-fg-subtle">—</p>
                ) : (
                  <SlotList slots={slots} courseLookup={courseLookup} day={d} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SlotList({
  slots,
  courseLookup,
  day,
}: {
  slots: ScheduleSlot[];
  courseLookup: Map<string, (typeof COURSES)[number]>;
  day: Weekday;
}) {
  return (
    <ul className="space-y-3">
      {slots.map((s, i) => {
        const c = courseLookup.get(s.courseSlug);
        if (!c) return null;
        return (
          <li
            key={`${day}-${s.start}-${i}`}
            className="rounded-xl border border-border bg-bg/40 p-3 transition-colors hover:border-brand"
          >
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-fg-subtle">
              {s.start} – {s.end}
            </p>
            <p className="mt-1 text-sm font-medium">{c.name}</p>
            <span
              className="mt-1 flex items-center gap-1"
              title={`Intensität ${c.intensity} von 3`}
              aria-label={`Intensität ${c.intensity} von 3`}
            >
              {[1, 2, 3].map((lvl) => (
                <span
                  key={lvl}
                  className={cn(
                    "h-1 w-3 rounded-full",
                    lvl <= c.intensity ? "bg-brand" : "bg-border-strong",
                  )}
                />
              ))}
            </span>
            {s.note && (
              <p className="mt-0.5 text-[0.7rem] text-accent-dark">{s.note}</p>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function FilterRow({
  label,
  children,
  allLabel,
}: {
  label: string;
  children: React.ReactNode;
  allLabel: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-fg-subtle">
        {label}
      </span>
      <div className="flex flex-wrap gap-2" aria-label={allLabel}>
        {children}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.1em] transition-colors",
        active
          ? "border-brand bg-brand/10 text-accent-dark"
          : "border-border text-fg-muted hover:border-border-strong hover:text-fg",
      )}
    >
      {label}
    </button>
  );
}
