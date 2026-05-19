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
      { label: "Trainingsfläche", href: "/fitness/trainingsflaeche" },
      { label: "EGYM Smart Strength", href: "/fitness/egym" },
      { label: "Athletic Box", href: "/fitness/athletic-box" },
      { label: "Lady Fitness", href: "/fitness/lady-fitness" },
      { label: "InBody Körperanalyse", href: "/fitness/inbody" },
      { label: "Vibrafit Training", href: "/fitness/vibrafit" },
      { label: "Fitnesskurse", href: "/fitness/fitnesskurse" },
      { label: "Kursplan", href: "/fitness/kursplan" },
      { label: "Sportpalast App", href: "/fitness/app" },
      { label: "Lounge & Café", href: "/fitness/lounge-cafe" },
    ],
  },
  {
    label: "Gesundheit",
    href: "/gesundheit",
    description: "Ganzheitlich — vom Training bis zur Therapie.",
    children: [
      { label: "Muskelaufbau", href: "/gesundheit/muskelaufbau" },
      { label: "Kondition", href: "/gesundheit/kondition" },
      { label: "Rückentraining", href: "/gesundheit/rueckentraining" },
      { label: "Fitness im Alter", href: "/gesundheit/fitness-im-alter" },
      { label: "Gesundheitsförderung", href: "/gesundheit/gesundheitsfoerderung" },
      { label: "Stressabbau", href: "/gesundheit/stressabbau" },
      { label: "Abnehmen", href: "/gesundheit/abnehmen" },
      { label: "Präventionskurse", href: "/gesundheit/praeventionskurse" },
      { label: "Rehasport", href: "/gesundheit/rehasport" },
      { label: "Firmenfitness", href: "/gesundheit/firmenfitness" },
    ],
  },
  { label: "Sauna", href: "/sauna" },
  { label: "Physiotherapie", href: "/physiotherapie" },
  { label: "Preise", href: "/preise" },
  { label: "Über uns", href: "/ueber-uns" },
];

export const NAV_CTA = { label: "Mitglied werden", href: "/mitglied-werden" };

export const FOOTER_GROUPS: NavGroup[] = [
  {
    label: "Leistungen",
    children: [
      { label: "Fitnessstudio", href: "/fitness" },
      { label: "Physiotherapie", href: "/physiotherapie" },
      { label: "Rehasport", href: "/gesundheit/rehasport" },
      { label: "Sauna & Wellness", href: "/sauna" },
      { label: "Firmenfitness", href: "/gesundheit/firmenfitness" },
    ],
  },
  {
    label: "Mitglied werden",
    children: [
      { label: "Probetraining", href: "/mitglied-werden#probetraining" },
      { label: "Tarife & Preise", href: "/preise" },
      { label: "Online anmelden", href: "/mitglied-werden" },
    ],
  },
  {
    label: "Unternehmen",
    children: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Team", href: "/ueber-uns/team" },
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
    ],
  },
];
