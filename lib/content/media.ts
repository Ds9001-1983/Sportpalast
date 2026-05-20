// Lokale Platzhalter-Bilder (KI-generiert via RunPod z-image-turbo).
// Liegen unter public/images/gen/. Sobald echte Studio-Fotos vorliegen,
// hier zentral die Pfade austauschen — die Slugs/Keys bleiben gleich.

const GEN = "/images/gen";

export const IMG = {
  hero: {
    src: `${GEN}/hero.jpg`,
    alt: "Sportpalast Lindlar — Glaspalast mit Panoramablick",
    w: 1344,
    h: 768,
  },
  fitness: {
    src: `${GEN}/fitness.jpg`,
    alt: "Trainingsfläche im Sportpalast Lindlar",
    w: 768,
    h: 1344,
  },
  egym: {
    src: `${GEN}/egym.jpg`,
    alt: "EGYM Smart Strength Geräte",
    w: 768,
    h: 1344,
  },
  sauna: {
    src: `${GEN}/sauna.jpg`,
    alt: "Sauna & Wellness im Sportpalast",
    w: 1344,
    h: 768,
  },
  rehasport: {
    src: `${GEN}/rehasport.jpg`,
    alt: "Rehasport im Sportpalast Lindlar",
    w: 1344,
    h: 768,
  },
  physio: {
    src: `${GEN}/physio.jpg`,
    alt: "Physiotherapie im Sportpalast Lindlar",
    w: 1344,
    h: 768,
  },
  studio_outside: {
    src: `${GEN}/studio_outside.jpg`,
    alt: "Sportpalast Lindlar von außen",
    w: 1344,
    h: 768,
  },
  courses: {
    src: `${GEN}/courses.jpg`,
    alt: "Fitnesskurs im Sportpalast",
    w: 1344,
    h: 768,
  },
} as const;

export const GALLERY: { src: string; alt: string }[] = [
  { src: `${GEN}/g01.jpg`, alt: "Glaspalast – Außenansicht" },
  { src: `${GEN}/g02.jpg`, alt: "Trainingsfläche" },
  { src: `${GEN}/g03.jpg`, alt: "Krafttraining" },
  { src: `${GEN}/g04.jpg`, alt: "EGYM Geräte" },
  { src: `${GEN}/g05.jpg`, alt: "Cardio-Bereich" },
  { src: `${GEN}/g06.jpg`, alt: "Lounge & Café" },
  { src: `${GEN}/g07.jpg`, alt: "Sauna Indoor" },
  { src: `${GEN}/g08.jpg`, alt: "Studio-Atmosphäre" },
  { src: `${GEN}/g09.jpg`, alt: "Kursraum" },
  { src: `${GEN}/g10.jpg`, alt: "Wellness-Bereich" },
];

// Team-Portraits — Slug aus lib/content/team.ts → lokales Platzhalter-Portrait
export const TEAM_PHOTOS: Record<string, string> = {
  "uygar-oezcelik": `${GEN}/team/uygar-oezcelik.jpg`,
  "vera-duetting": `${GEN}/team/vera-duetting.jpg`,
  "evelyn-schuette": `${GEN}/team/evelyn-schuette.jpg`,
  "viviane-gerhardt": `${GEN}/team/viviane-gerhardt.jpg`,
  "saskia-klemke": `${GEN}/team/saskia-klemke.jpg`,
  "agnieszka-reese": `${GEN}/team/agnieszka-reese.jpg`,
  "fabian-schuerfeld": `${GEN}/team/fabian-schuerfeld.jpg`,
  "michaela-cordella": `${GEN}/team/michaela-cordella.jpg`,
  "thomas-buergerhausen": `${GEN}/team/thomas-buergerhausen.jpg`,
  "marie-bork": `${GEN}/team/marie-bork.jpg`,
  "jil-kamml": `${GEN}/team/jil-kamml.jpg`,
  "wolfgang-feykens": `${GEN}/team/wolfgang-feykens.jpg`,
};
