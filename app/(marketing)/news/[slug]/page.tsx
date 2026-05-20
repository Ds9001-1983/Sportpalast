import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface NewsPost {
  date: string;
  title: string;
  lead: string;
  body: string[];
  cta?: { label: string; href: string };
}

const NEWS: Record<string, NewsPost> = {
  neujahrsaktion: {
    date: "Januar 2026",
    title: "Neujahrsaktion: 6 Monate trainieren zum Sonderpreis",
    lead: "Frisches Jahr, frische Vorsätze. Wir helfen dir, dass sie diesmal bleiben — mit einem Einstiegsangebot, das jeden Vorwand nimmt.",
    body: [
      "Im Januar starten Neumitglieder mit nur 9,95 € pro Monat für die ersten sechs Monate. Das ist deutlich unter unserem regulären Tarif und genau für die gedacht, die diesmal wirklich dranbleiben wollen.",
      "Damit der Einstieg auch wirklich klappt, bekommst du beim Start unser komplettes Starterpaket: eine ausführliche Körperanalyse mit dem InBody, eine persönliche Trainingseinweisung am EGYM-Zirkel und einen individuellen Plan, mit dem du strukturiert vorgehen kannst. Das gehört zu unserem Konzept — niemand soll bei uns ratlos zwischen den Geräten stehen.",
      "Sechs Monate sind genug Zeit, um echte Veränderungen zu spüren: bessere Haltung, mehr Energie, sichtbare Kraftzuwächse. Und Zeit genug, um Training zur Gewohnheit werden zu lassen, die nicht mehr verschwindet.",
      "Termine für die Anmeldung kannst du direkt im Studio oder online buchen. Ruf uns einfach an oder schreib uns über das Kontaktformular — wir reservieren dir einen Termin in der ersten Januarwoche.",
    ],
    cta: { label: "Jetzt Termin anfragen", href: "/kontakt" },
  },

  "renovierung-mai-2026": {
    date: "Mai 2026",
    title: "Renovierungsarbeiten im hinteren Trainingsbereich",
    lead: "Vom 19. bis 21. Mai modernisieren wir den hinteren Trainingsbereich. Das Studio bleibt geöffnet — nur ein Teil ist kurzzeitig eingeschränkt.",
    body: [
      "Wir investieren in den hinteren Cardio-Bereich, der in den letzten Jahren am stärksten frequentiert war. Neue Bodenbeläge, frische Lackierung, optimierte Geräte-Anordnung — damit sich das Training dort wieder genauso gut anfühlt wie auf der Hauptfläche.",
      "An den drei Tagen 19. bis 21. Mai läuft der Hauptbetrieb normal weiter: Kurse finden statt, die Hauptfläche ist offen, EGYM, Sauna und die Physiotherapie sind uneingeschränkt nutzbar. Nur der hintere Cardio-Bereich ist gesperrt.",
      "Falls dein Stammtraining genau dort stattfindet, helfen unsere Trainer dir gerne, eine gute Alternative zu finden — wir haben genug Geräte, sodass niemand ohne Workout nach Hause gehen muss.",
      "Wir bitten um Verständnis für die kurze Einschränkung und freuen uns auf das Ergebnis. Ab dem 22. Mai ist alles wieder offen — und besser als vorher.",
    ],
  },

  "ladies-day": {
    date: "März 2026",
    title: "Ladies Day — der Sportpalast gehört euch",
    lead: "Am 8. März feiern wir den Internationalen Frauentag mit einem Programm, das nur für unsere weiblichen Mitglieder gedacht ist.",
    body: [
      "Der Sportpalast gehört am 8. März ganz euch. Den ganzen Tag über bieten wir spezielle Workouts, Workshops und Wellness-Specials an, die ausschließlich für Frauen reserviert sind.",
      "Auf dem Programm: erweiterte Damensauna-Zeiten, ein Mobility-Workshop mit Fokus auf Schulter und Beckenboden, eine offene Yoga-Stunde, eine kurze Vortrags-Session zum Thema Training in unterschiedlichen Zykluphasen — und natürlich genug Zeit für entspanntes Tratschen in der Lounge.",
      "Die meisten Programmpunkte sind kostenlos für Mitglieder. Für die geführten Workshops bitten wir um Voranmeldung an der Rezeption, damit wir die Gruppengrößen planen können.",
      "Wenn ihr Freundinnen mitbringen wollt, die noch keine Mitglieder sind — gerne. Schnuppern ist an diesem Tag ausdrücklich erlaubt. Sagt nur kurz Bescheid, damit wir vorbereitet sind.",
    ],
    cta: { label: "Anmelden", href: "/kontakt" },
  },

  soundhealing: {
    date: "Januar 2026",
    title: "Soundhealing-Abend mit Kathi",
    lead: "Am 31. Januar von 19:00 bis 20:00 lädt Kathi zu einer Stunde voller Klang — Klangschalen, Gong und Stimme, in der Stille des Studios nach Feierabend.",
    body: [
      "Soundhealing wirkt anders als ein klassischer Wellness-Termin. Du liegst auf einer Matte, schließt die Augen, und der Raum wird von tiefen Schwingungen geflutet — Klangschalen, Gong, manchmal Obertongesang. Was passiert, lässt sich schwer beschreiben: viele Teilnehmer berichten von einem Zustand zwischen Wachen und Schlafen, von körperlicher Tiefenentspannung, manche von emotionaler Klarheit.",
      "Kathi leitet diese Sessions seit Jahren und hat ein Gespür dafür, eine Gruppe sicher in einen tiefen Zustand zu führen. Du brauchst keine Vorerfahrung — bring nur eine bequeme Decke, eventuell ein Kissen und etwas, das dich warm hält. Den Rest stellt sie.",
      "Die Plätze sind begrenzt, weil der Kursraum nur Platz für eine bestimmte Anzahl Liegen hat. Anmeldung über die Rezeption oder per Mail — wir bestätigen dir, sobald dein Platz reserviert ist.",
      "Idealerweise kommst du 10 bis 15 Minuten vorher, damit du in Ruhe ankommen kannst. Smartphones bleiben im Spind — eine Stunde wirklich offline ist Teil der Wirkung.",
    ],
  },

  "boxen-back": {
    date: "Dezember 2025",
    title: "Boxen kehrt zurück — Welcome-Workshop",
    lead: "Mit Franzi und Tobi haben wir zwei erfahrene Coaches für unser neues Boxen-Format. Im Welcome-Workshop lernst du die Grundlagen.",
    body: [
      "Boxen ist eines der effektivsten Cardio-Trainings überhaupt — und gleichzeitig ein erstklassiger Stresslöser. Wer einmal eine ordentliche Schlagkombination am Boxsack gefeuert hat, weiß, was wir meinen.",
      "Wir starten neu mit zwei Coaches: Franzi und Tobi bringen langjährige Box- und Trainingserfahrung mit und legen Wert darauf, dass auch absolute Einsteiger schnell in den Sport reinkommen. Kein Sparring, kein Druck — saubere Technik, Koordination, Beinarbeit, Ausdauer.",
      "Der Welcome-Workshop ist ein gemeinsamer Einstiegstermin: Hier zeigen euch Franzi und Tobi die wichtigsten Grundschläge, wie man die Hände richtig wickelt und wie das Training in den Folgewochen ablaufen wird. Wer mag, bleibt direkt für die erste reguläre Stunde.",
      "Im Anschluss läuft der Kurs als feste Stunde im Wochenplan. Anmelden müsst ihr euch nicht — einfach pünktlich erscheinen, Sportkleidung und Handtuch reichen. Bandagen leihen wir euch in der ersten Stunde aus.",
    ],
    cta: { label: "Zum Kursplan", href: "/fitness/kursplan" },
  },

  "kurs-marathon": {
    date: "November 2025",
    title: "Kurs-Marathon im November",
    lead: "Ein ganzer Tag voller Kurse — vom Morgen-Yoga bis zur Abend-Schwitzeinheit. Dazwischen Wellness-Stationen, Smoothies und Raum für Begegnungen.",
    body: [
      "Einmal im Jahr machen wir aus dem normalen Kursplan ein Event: den Kurs-Marathon. Statt der üblichen zwei bis drei Stunden pro Tag läuft das Programm von 9 Uhr morgens bis spät abends durch. Jeder Kurs ist offen, du kannst kommen und gehen, wie es dir passt.",
      "Auf dem Plan stehen alle Kursformate, die wir regulär haben: Yoga, Pilates, Functional Training, HOT IRON, Zumba, Boxen, Soundhealing, Step Aerobic. Dazu drei oder vier Specials, die nur an diesem Tag laufen — Überraschung.",
      "Zwischen den Kursen haben wir kleine Wellness-Stationen aufgebaut: frisch gepresste Smoothies, eine Mobility-Ecke zum Lockern, eine Faszien-Ecke mit Bällen und Rollen. Und natürlich die Sauna für alle, die zwischendurch komplett abschalten wollen.",
      "Mitglieder dürfen Freunde mitbringen — Schnuppern ist an diesem Tag ausdrücklich erwünscht. Wer einen Freund mitbringt, der hinterher eine Probemitgliedschaft startet, bekommt von uns einen kleinen Dankeschön-Gutschein für die Lounge.",
      "Ein guter Tag, um zu sehen, was bei uns alles los ist — und dabei richtig was zu tun. Wir freuen uns auf euch.",
    ],
  },
};

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
  return { title: post.title, description: post.lead };
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
          className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-accent"
        >
          <ArrowLeft size={14} /> Zurück zu News
        </Link>
        <p className="eyebrow mt-10">{post.date}</p>
        <h1 className="text-h1 mt-4 font-display font-bold">{post.title}</h1>
        <p className="mt-6 text-xl leading-relaxed text-fg">{post.lead}</p>

        <div className="mt-10 space-y-5 text-lg leading-relaxed text-fg-muted">
          {post.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {post.cta && (
          <div className="mt-12 border-t border-border pt-10">
            <MagneticButton href={post.cta.href}>
              {post.cta.label} <ArrowRight size={14} />
            </MagneticButton>
          </div>
        )}
      </div>
    </article>
  );
}
