export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  description?: string;
  children?: NavLink[];
}

export const NAVIGATION: NavGroup[] = [
  {
    label: "Fitness",
    href: "/fitness",
    description: "2 000 m² Glaspalast voller Möglichkeiten.",
    children: [
      { label: "Gerätetraining", href: "/fitness/geraetetraining" },
      { label: "Freihanteltraining", href: "/fitness/freihantel" },
      { label: "Ausdauertraining", href: "/fitness/ausdauer" },
      { label: "Functional Training", href: "/fitness/functional" },
      { label: "EGYM Smart Strength", href: "/fitness/egym" },
      { label: "Personal Training", href: "/fitness/personal-training" },
      { label: "Vibrafit Training", href: "/fitness/vibrafit" },
      { label: "InBody Körperanalyse", href: "/fitness/inbody" },
      { label: "Sportpalast App", href: "/fitness/app" },
      { label: "Lounge & Café", href: "/fitness/lounge-cafe" },
    ],
  },
  {
    label: "Kurse",
    href: "/kurse",
    description: "Über 30 Kurse pro Woche — von Yoga bis HOT IRON.",
    children: [
      { label: "Alle Kurse", href: "/kurse" },
      { label: "Kursplan", href: "/kursplan" },
    ],
  },
  {
    label: "Gesundheit",
    href: "/gesundheitsziele",
    description: "Ganzheitlich — vom Training bis zur Therapie.",
    children: [
      { label: "Muskelaufbau", href: "/gesundheitsziele/muskelaufbau" },
      { label: "Kondition", href: "/gesundheitsziele/kondition" },
      { label: "Rückentraining", href: "/gesundheitsziele/ruecken" },
      { label: "Fitness im Alter", href: "/gesundheitsziele/fit-im-alter" },
      { label: "Gesundheitsförderung", href: "/gesundheitsziele/gesundheit-foerdern" },
      { label: "Stressabbau", href: "/gesundheitsziele/stressabbau" },
      { label: "Abnehmen", href: "/gesundheitsziele/abnehmen" },
      { label: "Präventionskurse", href: "/gesundheitsziele/praeventionskurse" },
      { label: "Rehasport", href: "/rehasport" },
      { label: "Firmenfitness", href: "/firmenfitness" },
    ],
  },
  { label: "Sauna", href: "/sauna-wellness" },
  { label: "Physiotherapie", href: "/physiotherapie" },
  { label: "Mitgliedschaft", href: "/mitgliedschaft" },
  { label: "Über uns", href: "/ueber-uns" },
];

export const NAV_CTA = { label: "Probetraining", href: "/probetraining" };

export const FOOTER_GROUPS: NavGroup[] = [
  {
    label: "Leistungen",
    children: [
      { label: "Fitnessstudio", href: "/fitness" },
      { label: "Kurse", href: "/kurse" },
      { label: "Kursplan", href: "/kursplan" },
      { label: "Physiotherapie", href: "/physiotherapie" },
      { label: "Rehasport", href: "/rehasport" },
      { label: "Sauna & Wellness", href: "/sauna-wellness" },
      { label: "Firmenfitness", href: "/firmenfitness" },
    ],
  },
  {
    label: "Mitglied werden",
    children: [
      { label: "Probetraining", href: "/probetraining" },
      { label: "Mitgliedschaft & Preise", href: "/mitgliedschaft" },
    ],
  },
  {
    label: "Unternehmen",
    children: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Team", href: "/team" },
      { label: "Karriere", href: "/karriere" },
      { label: "News", href: "/news" },
      { label: "Galerie", href: "/galerie" },
      { label: "Öffnungszeiten", href: "/oeffnungszeiten" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  {
    label: "Rechtliches",
    children: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Hausordnung", href: "/hausordnung" },
      { label: "AGB", href: "/agb" },
    ],
  },
];
