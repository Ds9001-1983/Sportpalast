import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PRICES } from "@/lib/content/prices";
import { eur } from "@/lib/utils/format";

export const metadata: Metadata = {
  title: "Mitglied werden",
  description:
    "In drei Schritten zur Mitgliedschaft im Sportpalast Lindlar — online abschließen oder direkt im Studio.",
};

const steps = [
  {
    n: "01",
    title: "Tarif wählen oder Probetraining vereinbaren",
    body: "Schließe online deinen Vertrag ab oder komm vorbei. Bring deinen Personalausweis mit.",
  },
  {
    n: "02",
    title: "Mitgliedskarte abholen",
    body: "Bei deinem ersten Besuch bekommst du Mitgliedsausweis, Trinkflasche und Trainingseinweisung.",
  },
  {
    n: "03",
    title: "Sofort starten",
    body: "Vergiss die Sportsachen nicht — du kannst direkt loslegen. Wir freuen uns auf dich.",
  },
];

export default async function MitgliedWerdenPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; duration?: string }>;
}) {
  const params = await searchParams;
  const preselected = PRICES.find((p) => p.slug === params.plan);

  return (
    <>
      <PageHero
        eyebrow="Mitglied werden"
        title="In drei Schritten dabei."
        intro="Online, vor Ort oder nach einem Probetraining — du entscheidest, wie du startest. Wir machen es so einfach wie möglich."
      />

      {preselected && (
        <section className="-mt-10 pb-10">
          <div className="container-grid">
            <div className="rounded-3xl border border-brand/40 bg-brand/5 p-8">
              <p className="eyebrow mb-2">Dein gewählter Tarif</p>
              <div className="flex flex-wrap items-baseline justify-between gap-6">
                <div>
                  <p className="text-h3 font-display font-bold">
                    {preselected.name}
                  </p>
                  <p className="text-fg-muted">{preselected.tagline}</p>
                </div>
                <p className="font-display text-3xl font-black">
                  ab {eur(Math.min(...preselected.variants.map((v) => v.monthly)))}
                  <span className="ml-1 text-base font-medium text-fg-muted">
                    / Monat
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container-grid">
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <RevealOnScroll key={s.n} delay={i * 0.06}>
                <li className="flex h-full flex-col justify-between rounded-3xl border border-border bg-bg-elevated/40 p-8">
                  <p className="font-display text-7xl font-black text-brand/40">
                    {s.n}
                  </p>
                  <div className="mt-8">
                    <h3 className="text-h4 font-display font-bold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                      {s.body}
                    </p>
                  </div>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </section>

      <section id="probetraining" className="py-20">
        <div className="container-grid">
          <div className="grid gap-10 rounded-3xl border border-border bg-bg-elevated/50 p-10 md:grid-cols-2 md:p-14">
            <div>
              <p className="eyebrow mb-3">Lieber erst testen?</p>
              <h2 className="text-h2 font-display font-bold">
                Buch dir ein Probetraining.
              </h2>
              <p className="mt-4 text-fg-muted">
                Wir nehmen uns Zeit, zeigen dir alles, klären deine Fragen.
                Danach entscheidest du in Ruhe.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
              <MagneticButton href="/kontakt">
                Probetraining anfragen <ArrowRight size={14} />
              </MagneticButton>
              <MagneticButton href="/preise" variant="outline">
                Erst Tarife ansehen
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
