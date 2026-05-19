export interface PhysioService {
  slug: string;
  name: string;
  category: "manuell" | "physikalisch" | "spezial" | "training";
  description: string;
}

export const PHYSIO_SERVICES: PhysioService[] = [
  {
    slug: "klassische-massage",
    name: "Klassische Massage",
    category: "manuell",
    description:
      "Löst Verspannungen, fördert die Durchblutung und reduziert Stress nachhaltig.",
  },
  {
    slug: "manuelle-lymphdrainage",
    name: "Manuelle Lymphdrainage",
    category: "manuell",
    description:
      "Sanfte Grifftechnik zur Anregung des Lymphabflusses bei Schwellungen und Stauungen.",
  },
  {
    slug: "waermetherapie",
    name: "Wärmetherapie",
    category: "physikalisch",
    description:
      "Tiefenwärme entspannt die Muskulatur und bereitet auf weitere Behandlungen vor.",
  },
  {
    slug: "kaeltetherapie-cryojet",
    name: "Kältetherapie (Cryojet)",
    category: "physikalisch",
    description:
      "Gezielte Kälteanwendung gegen akute Schmerzen, Entzündungen und Schwellungen.",
  },
  {
    slug: "fango-naturmoor",
    name: "Fango & Naturmoor",
    category: "physikalisch",
    description:
      "Tiefwirkende Wärmepackungen bei chronischen Verspannungen und Gelenkbeschwerden.",
  },
  {
    slug: "kinesiotape",
    name: "Kinesiotape",
    category: "spezial",
    description:
      "Elastische Tapes unterstützen Muskeln und Gelenke ohne Bewegungseinschränkung.",
  },
  {
    slug: "schlingentisch",
    name: "Schlingentischtherapie",
    category: "spezial",
    description:
      "Schwerelose Lagerung zur gezielten Mobilisation einzelner Körperregionen.",
  },
  {
    slug: "krankengymnastik",
    name: "Krankengymnastik (KG / KGG)",
    category: "training",
    description:
      "Aktive und passive Übungstherapie — auch gerätegestützt — nach Verordnung.",
  },
  {
    slug: "trx-functional",
    name: "TRX & Funktionelles Training",
    category: "training",
    description:
      "Therapeutisches Training mit Schlingentrainer und Eigengewicht — alltagsnah und effektiv.",
  },
];
