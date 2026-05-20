"use client";

import { cn } from "@/lib/utils/cn";

export type TabItem = {
  id: string;
  label: string;
};

type Props = {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  variant?: "dark" | "light";
};

export function TabNav({ items, activeId, onChange, className, variant = "dark" }: Props) {
  const inactive = variant === "dark" ? "text-fg-subtle hover:text-fg" : "text-ink-subtle hover:text-ink";
  return (
    <div
      role="tablist"
      className={cn(
        "flex flex-wrap items-end gap-x-8 gap-y-3 border-b font-display text-h4 font-bold uppercase tracking-tight",
        variant === "dark" ? "border-border" : "border-ink-border",
        className,
      )}
    >
      {items.map((t) => {
        const active = t.id === activeId;
        return (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(t.id)}
            className={cn(
              "relative -mb-px pb-3 transition-colors",
              active
                ? "text-[var(--color-accent)]"
                : inactive,
            )}
          >
            {t.label}
            {active && (
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-px h-0.5 bg-[var(--color-accent)]"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
