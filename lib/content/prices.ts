export type PlanSlug = "club" | "reha-plus" | "jugend";
export type DurationKey = 24 | 18 | 12 | 0;

export interface PricePlan {
  slug: PlanSlug;
  name: string;
  tagline: string;
  description: string;
  badge?: string;
  variants: { duration: DurationKey; durationLabel: string; monthly: number }[];
  highlights: string[];
  requirements?: string[];
}

export const STARTER_PACKAGE = 79.95;
export const SERVICE_FEE = 15; // alle 6 Monate ab Monat 6

export const PRICES: PricePlan[] = [
  {
    slug: "club",
    name: "Club Abo",
    tagline: "Unser Allrounder. Alles drin.",
    description:
      "Volles Programm: Geräte, Kurse, Sauna, EGYM, Functional Training, Getränkeflat — ohne Limit.",
    badge: "Beliebt",
    variants: [
      { duration: 24, durationLabel: "24 Monate", monthly: 49.95 },
      { duration: 12, durationLabel: "12 Monate", monthly: 59.95 },
      { duration: 0, durationLabel: "monatlich kündbar", monthly: 79.95 },
    ],
    highlights: [
      "Gerätetraining & Freihantelbereich",
      "EGYM Smart Strength inklusive",
      "30+ Fitnesskurse pro Woche",
      "Sauna & Wellness auf 250 m²",
      "Getränkeflat",
      "Functional Training",
    ],
  },
  {
    slug: "reha-plus",
    name: "Reha Plus",
    tagline: "Rehasport mit vollem Studio-Zugang.",
    description:
      "Verordneter Rehasport gepaart mit allem, was das Studio bietet — Geräte, Kurse, Sauna, EGYM.",
    variants: [
      { duration: 18, durationLabel: "18 Monate", monthly: 39.95 },
    ],
    highlights: [
      "Rehasport in der Gruppe",
      "Gerätetraining & EGYM",
      "Alle Fitnesskurse",
      "Sauna & Wellness",
      "Getränkeflat",
    ],
    requirements: [
      "Genehmigte ärztliche Rehasport-Verordnung",
      "Übernommen durch alle gesetzlichen Krankenkassen",
    ],
  },
  {
    slug: "jugend",
    name: "Jugend Abo",
    tagline: "Für 16 – 19-Jährige.",
    description:
      "Voller Trainingszugang zum reduzierten Tarif — perfekt für den Einstieg in ein aktives Leben.",
    variants: [
      { duration: 12, durationLabel: "12 Monate", monthly: 39.95 },
      { duration: 0, durationLabel: "monatlich kündbar", monthly: 49.95 },
    ],
    highlights: [
      "Voller Studio-Zugang",
      "Alle Fitnesskurse",
      "Sauna & Wellness",
      "EGYM Smart Strength",
      "Getränkeflat",
    ],
    requirements: ["Alter: 16 – 19 Jahre"],
  },
];
