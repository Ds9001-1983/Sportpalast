"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAVIGATION, NAV_CTA } from "@/lib/content/navigation";
import { cn } from "@/lib/utils/cn";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Menü öffnen"
        className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-fg"
      >
        <Menu size={18} />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-[80] bg-bg/95 backdrop-blur-xl transition-opacity duration-500",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col">
          <div className="container-grid flex items-center justify-between py-6">
            <span className="font-display text-lg font-black uppercase tracking-[0.14em]">
              Sportpalast
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Menü schließen"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="container-grid flex flex-1 flex-col gap-1 overflow-y-auto py-6">
            {NAVIGATION.map((g) => (
              <div key={g.label} className="border-b border-border">
                <div className="flex items-stretch">
                  <Link
                    href={g.href ?? "#"}
                    onClick={() => setOpen(false)}
                    className="flex-1 py-4 font-display text-2xl font-bold uppercase tracking-tight transition-colors hover:text-brand"
                  >
                    {g.label}
                  </Link>
                  {g.children && (
                    <button
                      onClick={() =>
                        setExpanded(expanded === g.label ? null : g.label)
                      }
                      aria-label={`${g.label} Unterpunkte`}
                      className="flex w-12 items-center justify-center"
                    >
                      <ChevronDown
                        size={20}
                        className={cn(
                          "transition-transform",
                          expanded === g.label && "rotate-180",
                        )}
                      />
                    </button>
                  )}
                </div>
                {g.children && expanded === g.label && (
                  <ul className="flex flex-col gap-1 pb-4 pl-2">
                    {g.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block py-1.5 text-sm text-fg-muted hover:text-brand"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          <div className="container-grid py-6">
            <Link
              href={NAV_CTA.href}
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-fg py-4 text-center text-sm font-medium uppercase tracking-[0.12em] text-bg"
            >
              {NAV_CTA.label}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
