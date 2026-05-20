"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  PRICES,
  SERVICE_FEE,
  type PlanSlug,
  type DurationKey,
} from "@/lib/content/prices";
import { calculatePrice } from "@/lib/pricing";
import { eur } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NumberCounter } from "@/components/ui/NumberCounter";
import { Pill } from "@/components/ui/Pill";

export function TarifKonfigurator({
  initialPlan = "club",
}: {
  initialPlan?: PlanSlug;
}) {
  const [planSlug, setPlanSlug] = useState<PlanSlug>(initialPlan);
  const plan = PRICES.find((p) => p.slug === planSlug)!;
  const [duration, setDuration] = useState<DurationKey>(
    plan.variants[0].duration,
  );

  const quote = useMemo(
    () => calculatePrice(planSlug, duration),
    [planSlug, duration],
  );

  function selectPlan(slug: PlanSlug) {
    setPlanSlug(slug);
    const next = PRICES.find((p) => p.slug === slug)!;
    setDuration(next.variants[0].duration);
  }

  return (
    <section className="py-20">
      <div className="container-grid">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Konfigurator</p>
          <h2 className="text-h2 font-display font-bold">
            Finde deinen Tarif.
          </h2>
          <p className="mt-4 text-fg-muted">
            Wähle Tarif und Laufzeit — wir rechnen dir den Beitrag und die
            Gesamtkosten transparent vor.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-10">
            <div>
              <p className="eyebrow mb-4">1 · Tarif wählen</p>
              <div className="grid gap-3">
                {PRICES.map((p) => (
                  <button
                    key={p.slug}
                    onClick={() => selectPlan(p.slug)}
                    aria-pressed={p.slug === planSlug}
                    className={cn(
                      "group flex items-center justify-between rounded-2xl border p-5 text-left transition-colors",
                      p.slug === planSlug
                        ? "border-brand bg-brand/5"
                        : "border-border bg-bg-elevated/30 hover:border-border-strong",
                    )}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-display text-xl font-bold">{p.name}</p>
                        {p.badge && (
                          <Pill className="border-brand/40 text-brand">
                            {p.badge}
                          </Pill>
                        )}
                      </div>
                      <p className="text-sm text-fg-muted">{p.tagline}</p>
                    </div>
                    <div
                      className={cn(
                        "h-3 w-3 rounded-full border",
                        p.slug === planSlug
                          ? "border-brand bg-brand"
                          : "border-border-strong",
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="eyebrow mb-4">2 · Laufzeit wählen</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {plan.variants.map((v) => (
                  <button
                    key={v.duration}
                    onClick={() => setDuration(v.duration)}
                    aria-pressed={v.duration === duration}
                    className={cn(
                      "rounded-2xl border p-5 text-left transition-colors",
                      v.duration === duration
                        ? "border-brand bg-brand/5"
                        : "border-border bg-bg-elevated/30 hover:border-border-strong",
                    )}
                  >
                    <p className="font-display text-lg font-bold">
                      {v.durationLabel}
                    </p>
                    <p className="mt-1 text-sm text-fg-muted">
                      ab {eur(v.monthly)} / Monat
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {plan.requirements && (
              <div className="rounded-2xl border border-border bg-bg-elevated/30 p-5 text-sm text-fg-muted">
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                  Voraussetzungen
                </p>
                <ul className="space-y-1">
                  {plan.requirements.map((r) => (
                    <li key={r}>· {r}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {quote && (
            <aside className="sticky top-28 h-fit rounded-3xl border border-border bg-bg-elevated/60 p-8 lg:p-10">
              <p className="eyebrow mb-3">Dein Beitrag</p>
              <p className="font-display text-7xl font-black leading-none">
                <NumberCounter
                  to={quote.monthly}
                  format={(v) =>
                    new Intl.NumberFormat("de-DE", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(v)
                  }
                />{" "}
                <span className="text-xl font-medium text-fg-muted">
                  € / Mon.
                </span>
              </p>
              <p className="mt-2 text-sm text-fg-muted">
                Tarif: {quote.planName} · {quote.durationLabel}
              </p>

              <dl className="mt-8 space-y-2 border-t border-border pt-6 text-sm">
                <Row label="Starterpaket einmalig">
                  {eur(quote.starterPackage)}
                </Row>
                <Row label="Beitrag erstes Jahr">{eur(quote.totalFirstYear)}</Row>
                <Row label="Gesamt Laufzeit">{eur(quote.totalCommitment)}</Row>
              </dl>

              <p className="mt-4 text-xs text-fg-subtle">
                Zzgl. {eur(SERVICE_FEE)} Servicepauschale alle 6 Monate (ab dem
                6. Monat).
              </p>

              <div className="mt-8">
                <MagneticButton
                  href={`/mitglied-werden?plan=${planSlug}&duration=${duration}`}
                  className="w-full justify-center"
                >
                  Diesen Tarif wählen <ArrowRight size={14} />
                </MagneticButton>
              </div>

              <p className="mt-4 text-center text-xs text-fg-subtle">
                Inkl. Geräte, Kurse, EGYM, Sauna, Getränkeflat.
              </p>
            </aside>
          )}
        </div>

        <div className="mt-16">
          <p className="eyebrow mb-4">Im Tarif enthalten</p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {plan.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 rounded-xl border border-border bg-bg-elevated/30 px-4 py-3 text-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between">
      <dt className="text-fg-muted">{label}</dt>
      <dd className="font-mono">{children}</dd>
    </div>
  );
}
