import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProbetrainingForm } from "@/components/sections/probetraining/ProbetrainingForm";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FaqJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Probetraining vereinbaren",
  description:
    "Probetraining im Sportpalast Lindlar für 10 € — wird bei Abschluss verrechnet. Termin online anfragen: Name, Telefon, Wunschtermin. Wir melden uns.",
};

const steps = [
  {
    n: "01",
    title: "Termin anfragen",
    body: "Name, Telefon, Wunschtermin — mehr brauchen wir nicht. Wir melden uns zur Bestätigung.",
  },
  {
    n: "02",
    title: "Vorbeikommen & kennenlernen",
    body: "Wir nehmen uns Zeit, zeigen dir Studio, Sauna und Kurse — und du trainierst direkt mit.",
  },
  {
    n: "03",
    title: "In Ruhe entscheiden",
    body: "Kein Druck, kein Kleingedrucktes. Wenn es passt, verrechnen wir die 10 € mit deinem Start.",
  },
];

const PROBETRAINING_FAQ = [
  {
    q: "Was kostet das Probetraining?",
    a: "10 € — und wenn du danach Mitglied wirst, verrechnen wir den Betrag vollständig mit deinem Starterpaket.",
  },
  {
    q: "Was muss ich mitbringen?",
    a: "Sportkleidung, saubere Hallenschuhe und ein Handtuch. Alles andere — Getränke inklusive — bekommst du bei uns.",
  },
  {
    q: "Wie lange dauert ein Probetraining?",
    a: "Plane etwa 60 bis 90 Minuten ein: Rundgang, Beratungsgespräch und dein erstes Training mit Einweisung.",
  },
];

export default function ProbetrainingPage() {
  return (
    <>
      <FaqJsonLd items={PROBETRAINING_FAQ} />
      <PageHero
        eyebrow="Probetraining"
        title="Erst testen. Dann entscheiden."
        intro="Lern uns kennen, bevor du dich bindest: Studio, Sauna, Kurse — alles ansehen, einmal mittrainieren, in Ruhe entscheiden."
      />

      <section className="-mt-4 pb-12">
        <div className="container-grid">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-5 py-2.5 text-sm text-fg-muted">
            <span className="font-display font-semibold text-accent-dark">10 €</span>
            Probetraining — wird bei Abschluss vollständig verrechnet.
          </p>
        </div>
      </section>

      <section className="pb-16">
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

      <section className="pb-24">
        <div className="container-grid">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="eyebrow mb-3">Dein Wunschtermin</p>
              <h2 className="text-h2 font-display font-medium">
                Wann sollen wir uns Zeit für dich nehmen?
              </h2>
              <p className="mt-4 text-fg-muted">
                Sag uns, wann es dir passt — wir bestätigen telefonisch und
                stehen dann mit Plan und guter Laune am Empfang. Häufige
                Fragen:
              </p>
              <ul className="mt-6 space-y-4">
                {PROBETRAINING_FAQ.map((f) => (
                  <li
                    key={f.q}
                    className="rounded-2xl border border-border bg-bg-elevated/40 p-5"
                  >
                    <p className="font-display font-medium">{f.q}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                      {f.a}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="self-start rounded-frame border border-border bg-bg-elevated p-8 lg:p-10">
              <ProbetrainingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
