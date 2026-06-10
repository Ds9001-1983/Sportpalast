// Offene Stellen — Quelle: sportpalast-lindlar.de/karriere (Stand der Übernahme).
// Bei Änderungen mit dem Studio abgleichen.

export interface JobListing {
  title: string;
  type: string;
  description: string;
}

export const JOBS: JobListing[] = [
  {
    title: "Ausbildung Sport- und Fitnessbetriebswirt/in (IST)",
    type: "Ausbildung",
    description:
      "Komplette Ausbildung im laufenden Studiobetrieb — Training, Beratung, Organisation. Mit IST-Studieninstitut als Bildungspartner.",
  },
  {
    title: "Duales Studium B.A. Fitnesswissenschaft & Fitnessökonomie",
    type: "Duales Studium · 36 Monate",
    description:
      "Theorie an der Hochschule, Praxis bei uns auf 2 000 m² — in drei Jahren zum Bachelor mit echtem Studio-Know-how.",
  },
  {
    title: "Trainingsbetreuung (m/w/d)",
    type: "Minijob · flexible Stunden",
    description:
      "Du betreust Mitglieder auf der Trainingsfläche, gibst Einweisungen und hast ein offenes Ohr — Erfahrung im Training hilft, Persönlichkeit zählt.",
  },
  {
    title: "Servicekraft (m/w/d)",
    type: "Stundenbasis · flexible Arbeitszeiten",
    description:
      "Empfang, Lounge & Café, gute Stimmung am Tresen — du bist das erste Gesicht, das unsere Mitglieder sehen.",
  },
];

export const APPLICATION_CONTACT = {
  person: "Vera Dütting",
  email: "bewerbung@sportpalast-lindlar.de",
};
