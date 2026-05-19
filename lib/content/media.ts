// Image-URL-Mapping zu den existierenden Studio-Fotos auf der Live-Seite.
// Wird via next.config.mjs `remotePatterns` per `next/image` geladen.
// Sobald HiRes-Pack vorliegt, hier zentral austauschen.

const CDN = "https://www.sportpalast-lindlar.de/wp-content/uploads";

export const IMG = {
  hero: {
    src: `${CDN}/1-6.webp`,
    alt: "Sportpalast Lindlar — Glaspalast mit Panoramablick",
    w: 1920,
    h: 1080,
  },
  fitness: {
    src: `${CDN}/770_Hintergrund_1.jpg`,
    alt: "Trainingsfläche im Sportpalast Lindlar",
    w: 1920,
    h: 1102,
  },
  egym: {
    src: `${CDN}/IMG_7731.jpg`,
    alt: "EGYM Smart Strength Geräte",
    w: 2048,
    h: 1536,
  },
  sauna: {
    src: `${CDN}/SWK_Sauna-Wellness-Kontor_Privat-Saunabau-Ocean-Spa-2.jpg`,
    alt: "Sauna & Wellness im Sportpalast",
    w: 2048,
    h: 1536,
  },
  rehasport: {
    src: `${CDN}/Rehasport.webp`,
    alt: "Rehasport im Sportpalast Lindlar",
    w: 1920,
    h: 1280,
  },
  physio: {
    src: `${CDN}/physiotherapie-krankengymnastik.jpeg`,
    alt: "Physiotherapie im Sportpalast Lindlar",
    w: 1920,
    h: 1280,
  },
  studio_outside: {
    src: `${CDN}/Lindlar-125-2024-11-13T08_04_25.600.jpg`,
    alt: "Sportpalast Lindlar von außen",
    w: 1920,
    h: 1280,
  },
  app_lounge: {
    src: `${CDN}/IMG_7725.jpg`,
    alt: "Lounge & Café im Sportpalast",
    w: 2048,
    h: 854,
  },
  courses: {
    src: `${CDN}/bodycross-kurs.jpg`,
    alt: "Fitnesskurs im Sportpalast",
    w: 1920,
    h: 1280,
  },
} as const;

export const GALLERY: { src: string; alt: string }[] = [
  { src: `${CDN}/1-6.webp`, alt: "Glaspalast – Außenansicht" },
  { src: `${CDN}/770_Hintergrund_1.jpg`, alt: "Trainingsfläche" },
  { src: `${CDN}/IMG_7745.jpg`, alt: "Krafttraining" },
  { src: `${CDN}/IMG_7731.jpg`, alt: "EGYM Geräte" },
  { src: `${CDN}/IMG_7736.jpg`, alt: "Cardio-Bereich" },
  { src: `${CDN}/IMG_7725.jpg`, alt: "Lounge & Café" },
  { src: `${CDN}/SWK_Sauna-Wellness-Kontor_Privat-Saunabau-Ocean-Spa-2.jpg`, alt: "Sauna Indoor" },
  { src: `${CDN}/IMG_7771.jpg`, alt: "Studio-Atmosphäre" },
  { src: `${CDN}/IMG_7751.jpg`, alt: "Kursraum" },
  { src: `${CDN}/IMG_7760.jpg`, alt: "Wellness-Bereich" },
];

// Team-Portraits — Slug aus lib/content/team.ts → Live-Bild-URL
export const TEAM_PHOTOS: Record<string, string> = {
  "uygar-oezcelik": `${CDN}/uygar-oezcelik04.jpg`,
  "vera-duetting": `${CDN}/vera-duetting03.jpg`,
  "evelyn-schuette": `${CDN}/Evelyn-Schuett-neu.jpg`,
  "viviane-gerhardt": `${CDN}/Viviane-Neu.jpg`,
  "saskia-klemke": `${CDN}/Saskia-Physio-Lindlar.jpg`,
  "agnieszka-reese": `${CDN}/aggi-reese.jpg`,
  "fabian-schuerfeld": `${CDN}/fabian-schuerfeld.jpeg`,
  "michaela-cordella": `${CDN}/michaela-cordella-.jpg`,
  "thomas-buergerhausen": `${CDN}/thomas-buergerhausen.jpeg`,
  "marie-bork": `${CDN}/marie02.jpg`,
  "jil-kamml": `${CDN}/Jill.jpg`,
  "wolfgang-feykens": `${CDN}/Henry-2-.jpg`,
};
