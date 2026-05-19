import type { Metadata } from "next";
import { TopicPageTemplate } from "@/components/sections/TopicPageTemplate";

export const metadata: Metadata = {
  title: "Sauna & Wellness",
  description:
    "250 m² Sauna und Wellness im Sportpalast Lindlar — Indoor- und Outdoor-Sauna, Ruheraum, Terrasse.",
};

export default function SaunaPage() {
  return (
    <TopicPageTemplate
      eyebrow="Sauna & Wellness"
      title="Wärme, die wirklich abschaltet."
      intro="250 m² Wellness mit großzügiger Indoor-Sauna, Outdoor-Sauna auf der Terrasse, Ruheraum und Lounges. Nach dem Training oder einfach nur so."
      highlights={[
        {
          title: "Indoor-Sauna",
          body: "Großzügige Kabine für 20+ Gäste — Aufgüsse zu festen Zeiten, dazwischen ruhige Stunden.",
        },
        {
          title: "Outdoor-Sauna",
          body: "Auf der Terrasse mit Blick ins Grüne — Wärme von innen, frische Luft von außen.",
        },
        {
          title: "Ruheraum & Lounges",
          body: "Vollständige Abschaltung in entspannter Atmosphäre — Lesen, Träumen, Nichts.",
        },
        {
          title: "Damensauna mittwochs",
          body: "Mittwochs ab 11 Uhr ausschließlich für unsere weiblichen Mitglieder.",
        },
        {
          title: "Outdoor-Dusche & Duschbereich",
          body: "Klassisch innen, ungewöhnlich draußen — die Outdoor-Dusche ist Kult.",
        },
        {
          title: "Im Tarif enthalten",
          body: "Sauna & Wellness ist Teil aller unserer Mitgliedschaften — keine Aufpreise.",
        },
      ]}
      cta={{ label: "Mitglied werden", href: "/mitglied-werden" }}
    />
  );
}
