"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Wie lange ist die Mindestlaufzeit?",
    a: "Je nach Tarif: 24, 18 oder 12 Monate. Beim Club-Abo gibt es auch eine monatlich kündbare Variante. Die jeweilige Laufzeit siehst du im Konfigurator transparent vor dem Vertragsabschluss.",
  },
  {
    q: "Was passiert nach Ende der Laufzeit?",
    a: "Der Vertrag verlängert sich automatisch in eine unbefristete Mitgliedschaft mit einem Monat Kündigungsfrist. Wer ihn vorher beendet, kündigt schriftlich einen Monat vor Vertragsende.",
  },
  {
    q: "Was kostet das Starterpaket?",
    a: "Einmalig 79,95 €. Enthalten: Mitgliedsausweis bzw. Transponder, Trinkflasche, Trainingseinweisung, InBody-Körperanalyse und individueller Trainingsplan.",
  },
  {
    q: "Gibt es eine Servicegebühr?",
    a: "Alle sechs Monate fällt eine Servicegebühr von 15 € an, erstmals ab dem sechsten Monat der Mitgliedschaft. Sie deckt Wartung, Hygiene und Verwaltung.",
  },
  {
    q: "Wann wird der Beitrag abgebucht?",
    a: "Am 1. oder 15. des Monats per SEPA-Lastschrift. Den Termin wählst du beim Vertragsabschluss.",
  },
  {
    q: "Kann ich pausieren?",
    a: "Bei medizinischen Gründen mit ärztlichem Attest pausieren wir die Mitgliedschaft auf Antrag. Die Vertragslaufzeit verlängert sich entsprechend.",
  },
  {
    q: "Was muss ich beim ersten Besuch mitbringen?",
    a: "Personalausweis, Sportkleidung, Handtuch, Wasserflasche (wenn du willst — Wasser gibt's bei uns gratis). Mitgliedsausweis und Trinkflasche bekommst du von uns.",
  },
  {
    q: "Brauche ich Termine fürs Training?",
    a: "Nein. Du trainierst, wann du willst, innerhalb der Öffnungszeiten. Für ein paar besonders beliebte Kurse (Jumping, HOT IRON) reservieren wir Plätze auf Anfrage.",
  },
  {
    q: "Was ist mit Sauna und Kursen?",
    a: "Alle Mitgliedschaften enthalten den vollen Zugang zu Geräten, Kursen, EGYM, Sauna & Wellness und der Getränkeflat. Keine Aufpreise.",
  },
  {
    q: "Was, wenn ich umziehe?",
    a: "Bei Umzug außerhalb eines Radius, in dem keine Nutzung mehr zumutbar ist, ermöglichen wir mit Nachweis (Meldebescheinigung) eine vorzeitige Kündigung.",
  },
];

export function Faq() {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="divide-y divide-border rounded-3xl border border-border bg-bg-elevated/40"
    >
      {faqs.map((f, i) => (
        <Accordion.Item key={i} value={`item-${i}`} className="group">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:text-brand md:px-8">
              <span className="text-base font-display font-semibold md:text-lg">
                {f.q}
              </span>
              <ChevronDown
                size={18}
                className="shrink-0 text-fg-muted transition-transform duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:text-brand"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-fg-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="px-6 pb-6 pr-12 text-sm leading-relaxed md:px-8 md:pb-7 md:pr-16">
              {f.a}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
