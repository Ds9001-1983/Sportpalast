"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { NAVIGATION, type NavGroup } from "@/lib/content/navigation";
import { cn } from "@/lib/utils/cn";

export function MegaMenu() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <nav aria-label="Hauptnavigation" className="hidden lg:block">
      <ul
        className="flex items-center gap-1"
        onMouseLeave={() => setOpen(null)}
      >
        {NAVIGATION.map((group) => (
          <li
            key={group.label}
            className="relative"
            onMouseEnter={() => setOpen(group.children ? group.label : null)}
          >
            {group.children ? (
              <button
                aria-expanded={open === group.label}
                aria-haspopup="true"
                className={cn(
                  "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  open === group.label
                    ? "text-brand"
                    : "text-fg-muted hover:text-fg",
                )}
              >
                {group.label}
              </button>
            ) : (
              <Link
                href={group.href ?? "#"}
                className="rounded-full px-4 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
              >
                {group.label}
              </Link>
            )}

            {group.children && (
              <Panel group={group} visible={open === group.label} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Panel({ group, visible }: { group: NavGroup; visible: boolean }) {
  return (
    <div
      role="region"
      aria-hidden={!visible}
      className={cn(
        "absolute left-1/2 top-full z-50 mt-3 w-[min(720px,90vw)] -translate-x-1/2 origin-top rounded-3xl border border-border bg-bg-elevated/95 p-8 shadow-2xl backdrop-blur transition-[opacity,transform] duration-200",
        visible
          ? "pointer-events-auto opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 -translate-y-2",
      )}
    >
      <div className="grid grid-cols-[1fr_2fr] gap-10">
        <div>
          <p className="eyebrow mb-3">{group.label}</p>
          <h3 className="text-h4 mb-4">{group.description}</h3>
          {group.href && (
            <Link
              href={group.href}
              className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:gap-2 transition-all"
            >
              Übersicht <ChevronRight size={14} />
            </Link>
          )}
        </div>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
          {group.children?.map((c) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="group flex items-center justify-between rounded-lg px-2 py-1.5 text-sm text-fg-muted transition-colors hover:bg-ink/5 hover:text-fg"
              >
                <span>{c.label}</span>
                <ChevronRight
                  size={14}
                  className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-brand"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
