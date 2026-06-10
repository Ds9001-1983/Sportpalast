"use client";

import { useMemo, useState } from "react";
import { COURSES, COURSE_GOALS, type CourseGoal } from "@/lib/content/courses";
import { BentoCard } from "@/components/ui/BentoCard";
import { Pill } from "@/components/ui/Pill";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils/cn";

type GoalFilter = CourseGoal | "alle";

export function KurseGrid() {
  const [goal, setGoal] = useState<GoalFilter>("alle");

  const filtered = useMemo(
    () =>
      goal === "alle"
        ? COURSES
        : COURSES.filter((c) => c.goals.includes(goal)),
    [goal],
  );

  return (
    <section className="pb-20">
      <div className="container-grid">
        <div className="mb-10 flex flex-wrap items-center gap-2">
          <FilterChip
            active={goal === "alle"}
            onClick={() => setGoal("alle")}
            label={`Alle (${COURSES.length})`}
          />
          {Object.entries(COURSE_GOALS).map(([k, v]) => (
            <FilterChip
              key={k}
              active={goal === k}
              onClick={() => setGoal(k as CourseGoal)}
              label={v}
            />
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c, i) => (
            <RevealOnScroll key={c.slug} delay={Math.min(i, 6) * 0.03}>
              <BentoCard variant="dark" as="article" className="h-full">
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle"
                    aria-label={`Intensität ${c.intensity} von 3`}
                  >
                    {"●".repeat(c.intensity)}
                    {"○".repeat(3 - c.intensity)}
                  </span>
                </div>
                <h3 className="text-h4 mt-4 font-display font-medium leading-tight">
                  {c.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {c.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {c.goals.map((g) => (
                    <Pill key={g}>{COURSE_GOALS[g]}</Pill>
                  ))}
                </div>
              </BentoCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
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
        "rounded-full border px-4 py-2 text-sm transition-colors",
        active
          ? "border-brand bg-brand text-bg"
          : "border-border text-fg-muted hover:border-border-strong hover:text-fg",
      )}
    >
      {label}
    </button>
  );
}
