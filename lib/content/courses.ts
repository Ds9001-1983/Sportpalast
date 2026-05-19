export const COURSE_GOALS = {
  kraeftigung: "Kräftigung",
  ausdauer: "Ausdauer",
  fettverbrennung: "Fettverbrennung",
  entspannung: "Entspannung",
  koordination: "Koordination",
  rehabilitation: "Rehabilitation",
} as const;

export type CourseGoal = keyof typeof COURSE_GOALS;

export interface Course {
  slug: string;
  name: string;
  description: string;
  goals: CourseGoal[];
  intensity: 1 | 2 | 3;
}

export const COURSES: Course[] = [
  {
    slug: "ashtanga-yoga",
    name: "Ashtanga Yoga",
    description:
      "Dynamische Yoga-Praxis mit festen Asana-Serien für Kraft, Atem und mentale Klarheit.",
    goals: ["entspannung", "kraeftigung", "koordination"],
    intensity: 2,
  },
  {
    slug: "body-workout",
    name: "Body Workout",
    description:
      "Ganzkörper-Workout mit Kleingeräten — kräftigt, strafft und verbessert die Haltung.",
    goals: ["kraeftigung", "fettverbrennung"],
    intensity: 2,
  },
  {
    slug: "boxen",
    name: "Boxen & Kickboxen",
    description:
      "Powerndes Cardio-Training mit echter Box-Technik. Stresslöser und Kreislauf-Booster.",
    goals: ["ausdauer", "fettverbrennung", "koordination"],
    intensity: 3,
  },
  {
    slug: "dance-aerobic",
    name: "Dance Aerobic Choreo",
    description:
      "Schweißtreibendes Aerobic mit Choreografie — perfekt für Rhythmusgefühl und Ausdauer.",
    goals: ["ausdauer", "fettverbrennung", "koordination"],
    intensity: 2,
  },
  {
    slug: "deepwork",
    name: "Deepwork",
    description:
      "High-Intensity-Konzept mit fließenden Elementen aus Yoga, Kampfsport und Functional Training.",
    goals: ["kraeftigung", "ausdauer", "entspannung"],
    intensity: 3,
  },
  {
    slug: "energetic-flow-yoga",
    name: "Energetic Flow Yoga",
    description:
      "Fließende Yoga-Sequenzen, die Energie freisetzen und den ganzen Körper geschmeidig machen.",
    goals: ["entspannung", "kraeftigung"],
    intensity: 2,
  },
  {
    slug: "fatburner",
    name: "Fatburner Workout",
    description:
      "Intervallbasiertes Training, das den Stoffwechsel anheizt und Fett gezielt verbrennt.",
    goals: ["fettverbrennung", "ausdauer"],
    intensity: 3,
  },
  {
    slug: "functional-training",
    name: "Functional Training",
    description:
      "Alltagsnahe Bewegungsmuster mit eigenem Körpergewicht und Tools — kräftigt funktional.",
    goals: ["kraeftigung", "koordination"],
    intensity: 2,
  },
  {
    slug: "hotiron",
    name: "HOT IRON™",
    description:
      "Langhantel-Workout mit Musik — wissenschaftlich aufgebautes Kraftausdauertraining.",
    goals: ["kraeftigung", "fettverbrennung"],
    intensity: 3,
  },
  {
    slug: "intervall-mix",
    name: "Intervall Mix",
    description:
      "Wechsel aus Cardio und Kraft im Intervall — bringt deinen Puls in Wellen nach oben.",
    goals: ["ausdauer", "fettverbrennung", "kraeftigung"],
    intensity: 3,
  },
  {
    slug: "jumping-fitness",
    name: "Jumping Fitness",
    description:
      "Trampolin-Workout zu Musik — gelenkschonend und enorm effizient für Cardio und Beine.",
    goals: ["ausdauer", "fettverbrennung"],
    intensity: 3,
  },
  {
    slug: "pilates",
    name: "Pilates",
    description:
      "Kontrollierte Übungen für eine starke Körpermitte, bessere Haltung und mehr Mobilität.",
    goals: ["kraeftigung", "entspannung"],
    intensity: 1,
  },
  {
    slug: "rehasport",
    name: "Rehasport",
    description:
      "Verordnetes Gruppentraining zur Wiederherstellung der körperlichen Leistungsfähigkeit.",
    goals: ["rehabilitation", "kraeftigung"],
    intensity: 1,
  },
  {
    slug: "rehasport-soft",
    name: "Rehasport Soft",
    description: "Sanftere Variante für besonders schonende Wiederherstellung.",
    goals: ["rehabilitation"],
    intensity: 1,
  },
  {
    slug: "ruecken-relax",
    name: "Rücken & Relax",
    description:
      "Gezielte Rückenkräftigung gepaart mit Mobilisation und Entspannung.",
    goals: ["kraeftigung", "entspannung"],
    intensity: 1,
  },
  {
    slug: "rueckenfit",
    name: "Rückenfit",
    description: "Funktionelles Training für einen kräftigen, beschwerdefreien Rücken.",
    goals: ["kraeftigung", "rehabilitation"],
    intensity: 2,
  },
  {
    slug: "step-aerobic",
    name: "Step Aerobic",
    description:
      "Klassisches Step-Workout mit Choreografie für Bein-, Po-Kraft und Ausdauer.",
    goals: ["ausdauer", "koordination", "fettverbrennung"],
    intensity: 2,
  },
  {
    slug: "wingtsun",
    name: "WingTsun",
    description:
      "Kampfkunst für Kinder, Jugendliche und Erwachsene — Selbstverteidigung, Körperkontrolle und Fokus.",
    goals: ["koordination", "kraeftigung"],
    intensity: 2,
  },
  {
    slug: "yin-yoga",
    name: "Yin Yoga",
    description:
      "Lange gehaltene Positionen für tiefe Faszienarbeit und mentale Ruhe.",
    goals: ["entspannung"],
    intensity: 1,
  },
  {
    slug: "yoga",
    name: "Yoga",
    description:
      "Klassische Yoga-Praxis — Atem, Bewegung und Achtsamkeit in einem.",
    goals: ["entspannung", "kraeftigung"],
    intensity: 1,
  },
  {
    slug: "zirkel-training",
    name: "Zirkel Training",
    description:
      "Stationen-Training, das alle großen Muskelgruppen effizient anspricht.",
    goals: ["kraeftigung", "ausdauer", "fettverbrennung"],
    intensity: 2,
  },
  {
    slug: "zumba",
    name: "Zumba",
    description:
      "Fitness-Party mit lateinamerikanischen Rhythmen — Cardio, das nach Tanz aussieht.",
    goals: ["ausdauer", "fettverbrennung", "koordination"],
    intensity: 2,
  },
];
