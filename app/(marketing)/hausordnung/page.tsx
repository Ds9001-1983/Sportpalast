import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Hausordnung",
  description:
    "Die Hausordnung des Sportpalast Lindlar — Check-in, Trainingsfläche, Kurse, Sauna, Umkleiden: die Regeln für ein gutes Miteinander.",
};

// Inhalt übernommen von der bisherigen Website (sportpalast-lindlar.de/hausordnung).
const rules: { title: string; items: string[] }[] = [
  {
    title: "Check-in & Mitgliedskarte",
    items: [
      "Der Zutritt zum Studio ist nur nach dem Check-in mit deinem Mitgliedsausweis möglich.",
      "Der Mitgliedsausweis dient zugleich zum Öffnen der Spinde.",
    ],
  },
  {
    title: "Getränke",
    items: [
      "Auf der Trainingsfläche sind ausschließlich Trinkflaschen erlaubt — nutze sie auch für unsere Mineral-Getränkeanlage (Getränkeflat).",
      "Gläser gehören in die Lounge, nicht in den Trainings- oder Kursbereich.",
    ],
  },
  {
    title: "Trainingsbekleidung",
    items: [
      "Trainiere in Sportkleidung und sauberen Sportschuhen.",
      "Flip-Flops und Sandalen sind auf der Trainingsfläche nicht erlaubt.",
      "Lege beim Training an den Geräten immer ein Handtuch unter.",
    ],
  },
  {
    title: "Verhalten auf der Trainingsfläche",
    items: [
      "Gib Geräte während deiner Satzpausen für andere frei.",
      "Behandle das Equipment sorgfältig.",
      "Räume Hanteln und Scheiben nach dem Gebrauch zurück.",
      "Desinfiziere Ausdauergeräte nach der Nutzung.",
    ],
  },
  {
    title: "Kursbereich",
    items: [
      "Erscheine pünktlich zu den Kursen.",
      "Räume das Kurs-Equipment nach der Stunde zurück.",
      "Der Kursraum ist außerhalb der Kurszeiten geschlossen.",
    ],
  },
  {
    title: "Umkleideräume",
    items: [
      "Verstaue persönliche Gegenstände ausschließlich in den Spinden.",
      "Für Verluste übernehmen wir keine Haftung.",
    ],
  },
  {
    title: "Sauna & Ruheraum",
    items: [
      "Im Saunabereich gelten die ausgehängten Saunaregeln.",
      "In der Sauna wird ohne Kleidung sauniert — mit Handtuch als Unterlage.",
    ],
  },
  {
    title: "Duschen",
    items: [
      "Bitte mit Badeschuhen duschen.",
      "Den Bereich trocken betreten und verlassen.",
      "Rasieren ist in den Duschen nicht gestattet.",
    ],
  },
  {
    title: "Sauberkeit",
    items: [
      "Hinterlasse alle Bereiche so ordentlich und sauber, wie du sie vorfinden möchtest.",
    ],
  },
  {
    title: "Allgemeines Verhalten",
    items: [
      "Nimm Rücksicht auf andere Mitglieder.",
      "Den Anweisungen des Personals ist Folge zu leisten.",
    ],
  },
  {
    title: "Kinder",
    items: [
      "Die Trainingsfläche ist für Kinder aus Sicherheitsgründen nicht zugänglich.",
    ],
  },
];

export default function HausordnungPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Hausordnung"
        intro="Damit sich alle wohlfühlen: die wichtigsten Regeln für Training, Kurse, Sauna und Umkleiden — kurz und fair."
      />

      <section className="pb-32">
        <div className="container-grid max-w-3xl space-y-10 text-fg-muted">
          {rules.map((r, i) => (
            <section key={r.title}>
              <h2 className="mb-3 font-display text-xl font-medium text-fg">
                {String(i + 1).padStart(2, "0")} · {r.title}
              </h2>
              <ul className="space-y-1.5">
                {r.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
