import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Pill } from "@/components/ui/Pill";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { NAVIGATION } from "@/lib/content/navigation";

export const metadata: Metadata = {
  title: "Fitness",
  description:
    "2 000 m² Trainingsfläche, 140+ Geräte, EGYM, Functional Training, Personal Training, InBody. Alles im Sportpalast Lindlar.",
};

const fitnessGroup = NAVIGATION.find((g) => g.label === "Fitness");

// Prosa der ehemaligen Trainingsflächen-Seite — beschreibt die gesamte Fläche
// und gehört deshalb auf die Übersicht.
const flaechenProsa = [
  "Wir haben unsere Trainingsfläche so geplant, dass sich kein Bereich wie ein Engpass anfühlt. Zwischen den Geräte-Inseln bleibt Platz zum Atmen, die Wegeführung ist klar, und die deckenhohen Glasfronten halten den Raum hell — selbst im November.",
  "Ob du dich am Hantelrack auspowerst oder im Functional-Bereich mit dem TRX arbeitest: du teilst dir die Fläche mit Menschen, die genauso ernsthaft trainieren wie du, ohne dass es nach Industriehalle riecht. Holz, Pflanzen, warmes Licht — wir glauben, dass die Atmosphäre Teil des Trainings ist.",
  "Wenn du noch nie in einem Studio warst, kein Problem: ein Trainer geht beim ersten Termin mit dir durch die Stationen, zeigt dir die wichtigsten Geräte und beantwortet alle Fragen. Danach trainierst du frei — mit der Sicherheit, immer jemanden ansprechen zu können.",
];

export default function FitnessOverviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Fitness"
        title="2 000 m² Glaspalast. 140+ Geräte. Eine Aussicht zum Verlieben."
        intro="Vom adaptiven EGYM-Zirkel über Functional Training bis zum klassischen Krafttraining — alles unter einem hellen Dach."
      />

      <section className="pb-20">
        <div className="container-grid">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {fitnessGroup?.children?.map((c, i) => (
              <RevealOnScroll key={c.href} delay={i * 0.03}>
                <Link
                  href={c.href}
                  className="group flex h-full min-h-[220px] flex-col justify-between bg-bg-elevated p-8 transition-colors hover:bg-bg-elevated/60"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="text-h4 font-display font-medium leading-tight">
                      {c.label}
                    </h3>
                    <span className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-fg-muted transition-colors group-hover:text-accent">
                      Mehr <ArrowUpRight size={12} />
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-grid">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl rounded-frame border border-ink-border bg-cream px-7 py-12 lg:px-14 lg:py-16">
              <Pill variant="light">Die Fläche</Pill>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
                {flaechenProsa.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
