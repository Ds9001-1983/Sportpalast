import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Faq } from "@/components/sections/mitgliedschaft/Faq";
import { TarifKonfigurator } from "@/components/sections/mitgliedschaft/TarifKonfigurator";
import { STARTER_PACKAGE } from "@/lib/content/prices";
import type { PlanSlug } from "@/lib/content/prices";
import { MEMBERSHIP_FAQ } from "@/lib/content/faq";
import { FaqJsonLd } from "@/lib/schema";
import { eur } from "@/lib/utils/format";

export const metadata: Metadata = {
  title: "Mitgliedschaft & Preise",
  description:
    "Mitgliedschaft im Sportpalast Lindlar ab 39,95 € / Monat. Club Abo, Reha Plus, Jugend Abo — alles inklusive Geräte, Kurse, EGYM, Sauna. Online abschließen oder erst Probetraining.",
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

export default async function MitgliedschaftPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const params = await searchParams;
  const initial = (
    ["club", "reha-plus", "jugend"].includes(params.plan ?? "")
      ? params.plan
      : "club"
  ) as PlanSlug;

  return (
    <>
      <FaqJsonLd items={MEMBERSHIP_FAQ} />
      <PageHero
        eyebrow="Mitgliedschaft"
        title="Faire Tarife. Alles drin."
        intro="Drei Tarife für jede Lebenslage — Klartext-Preise, keine versteckten Kosten. Starterpaket einmalig 79,95 €, danach kein Aufpreis für Kurse, EGYM oder Sauna."
      />

      <TarifKonfigurator initialPlan={initial} />

      <section className="py-16">
        <div className="container-grid">
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <RevealOnScroll key={s.n} delay={i * 0.06}>
                <li className="flex h-full flex-col justify-between rounded-frame border border-border bg-bg-elevated p-8">
                  <p className="font-display text-7xl font-semibold text-accent/40">
                    {s.n}
                  </p>
                  <div className="mt-8">
                    <h3 className="text-h4 font-display font-medium">{s.title}</h3>
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

      <section className="py-20">
        <div className="container-grid">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="eyebrow mb-3">Starterpaket</p>
              <h2 className="text-h2 font-display font-medium">
                {eur(STARTER_PACKAGE)} einmalig — das steckt drin.
              </h2>
              <p className="mt-4 text-fg-muted">
                Damit du nicht ins kalte Wasser springen musst, bekommst du
                beim Start einmalig alles, was du für die ersten Wochen
                brauchst — Beratung, Plan, Material.
              </p>
            </div>
            <ul className="grid gap-3 self-start rounded-frame border border-border bg-bg-elevated p-8">
              {[
                "Mitgliedsausweis & Transponder-Chip",
                "Trinkflasche",
                "Persönliche Trainingseinweisung",
                "InBody/SECA-Körperanalyse",
                "Individueller Trainingsplan",
                "Beratung zur Tarifwahl",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-fg-muted"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand text-brand">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container-grid">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow mb-3">Häufige Fragen</p>
            <h2 className="text-h2 font-display font-medium">
              Alles Wichtige zur Mitgliedschaft.
            </h2>
            <p className="mt-4 text-fg-muted">
              Laufzeit, Kündigung, Beitrag, Pausierung — die Antworten, die
              die meisten vorher wissen wollen.
            </p>
          </div>
          <Faq />
        </div>
      </section>

      <section id="probetraining" className="py-20">
        <div className="container-grid">
          <div className="grid gap-10 rounded-frame border border-border bg-bg-elevated p-10 md:grid-cols-2 md:p-14">
            <div>
              <p className="eyebrow mb-3">Lieber erst testen?</p>
              <h2 className="text-h2 font-display font-medium">
                Buch dir ein Probetraining.
              </h2>
              <p className="mt-4 text-fg-muted">
                Wir nehmen uns Zeit, zeigen dir alles, klären deine Fragen.
                Danach entscheidest du in Ruhe.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg px-4 py-2 text-sm text-fg-muted">
                <span className="font-display font-semibold text-accent-dark">
                  10 €
                </span>
                Probetraining — wird bei Abschluss verrechnet.
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-4">
              <MagneticButton href="/probetraining">
                Probetraining buchen <ArrowRight size={14} />
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
