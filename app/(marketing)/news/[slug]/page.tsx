import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const NEWS = {
  neujahrsaktion: {
    date: "Januar 2026",
    title: "Neujahrsaktion: 6 Monate trainieren zum Sonderpreis",
    body: [
      "Frisches Jahr, frische Vorsätze. Wir helfen dir, dass sie diesmal bleiben.",
      "Im Januar starten Neumitglieder mit nur 9,95 € pro Monat für die ersten sechs Monate. Inklusive Trainingsplanung, EGYM-Einweisung und Körperanalyse — damit du nicht ins Blaue trainierst, sondern messbar Fortschritte machst.",
      "Termine für die Anmeldung kannst du direkt im Studio oder online buchen.",
    ],
  },
  "renovierung-mai-2026": {
    date: "Mai 2026",
    title: "Renovierungsarbeiten im hinteren Trainingsbereich",
    body: [
      "Vom 19. bis 21. Mai modernisieren wir den hinteren Trainingsbereich.",
      "Kurse, Hauptfläche, Sauna und Physio laufen wie gewohnt — nur der hintere Cardio-Bereich ist temporär eingeschränkt. Wir bitten um Verständnis und freuen uns auf das Ergebnis.",
    ],
  },
  "ladies-day": {
    date: "März 2026",
    title: "Ladies Day — der Sportpalast gehört euch",
    body: [
      "Am 8. März feiern wir den Internationalen Frauentag.",
      "Spezielle Workouts, Workshops, Wellness-Specials und gute Stimmung. Anmeldung über die Rezeption oder das Kontaktformular.",
    ],
  },
  soundhealing: {
    date: "Januar 2026",
    title: "Soundhealing-Abend mit Kathi",
    body: [
      "Am 31. Januar, 19:00 – 20:00, lädt Kathi zu einer Stunde voller Klang.",
      "Klangschalen, Gong, Stimme — eine Reise jenseits des Alltags. Begrenzte Plätze, bitte vorab anmelden.",
    ],
  },
  "boxen-back": {
    date: "Dezember 2025",
    title: "Boxen kehrt zurück — Welcome-Workshop",
    body: [
      "Mit Franzi und Tobi haben wir zwei erfahrene Coaches für unser neues Boxen-Format.",
      "Im Welcome-Workshop lernst du die Grundlagen kennen — Technik, Beinarbeit, Koordination. Danach läuft der Kurs regulär im Wochenplan.",
    ],
  },
  "kurs-marathon": {
    date: "November 2025",
    title: "Kurs-Marathon im November",
    body: [
      "Ein ganzer Tag voller Kurse — vom Morgenyoga bis zur Abend-Schwitzeinheit.",
      "Zwischen den Kursen gibt es kleine Wellness-Stationen, Smoothies und Zeit zum Quatschen. Mitglieder bringen Freunde mit — Schnuppern erlaubt.",
    ],
  },
} as const;

type Slug = keyof typeof NEWS;

export function generateStaticParams() {
  return (Object.keys(NEWS) as Slug[]).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = NEWS[slug as Slug];
  if (!post) return {};
  return { title: post.title, description: post.body[0] };
}

export default async function NewsArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = NEWS[slug as Slug];
  if (!post) notFound();

  return (
    <article className="pt-40 pb-32">
      <div className="container-grid max-w-3xl">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-brand"
        >
          <ArrowLeft size={14} /> Zurück zu News
        </Link>
        <p className="eyebrow mt-10">{post.date}</p>
        <h1 className="text-h1 mt-4 font-display font-bold">{post.title}</h1>
        <div className="prose-content mt-10 space-y-5 text-lg leading-relaxed text-fg-muted">
          {post.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
