import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HOURS_SAUNA, WEEKDAYS } from "@/lib/content/opening-hours";
import { IMG } from "@/lib/content/media";

export const metadata: Metadata = {
  title: "Sauna & Wellness",
  description:
    "250 m² Sauna und Wellness im Sportpalast Lindlar — Indoor- und Outdoor-Sauna, Ruheraum, Terrasse. Im Tarif enthalten.",
};

const features = [
  {
    title: "Indoor-Sauna",
    body: "Großzügige Kabine mit Platz für 20+ Gäste. Aufgüsse zu festen Zeiten — dazwischen ruhige Stunden für entspanntes Saunieren.",
  },
  {
    title: "Outdoor-Sauna",
    body: "Auf der Terrasse mit Blick ins Oberbergische. Wärme von innen, frische Luft von außen — eine Kombination, die süchtig macht.",
  },
  {
    title: "Ruheraum & Lounges",
    body: "Komfortable Liegen, gedämpftes Licht, leise Akustik. Hier kommst du wirklich an — nicht nur kurz, sondern richtig.",
  },
  {
    title: "Damensauna mittwochs",
    body: "Mittwochs ab 11 Uhr ausschließlich für unsere weiblichen Mitglieder. Eine bewusste Pause vom gemischten Saunabetrieb.",
  },
  {
    title: "Outdoor-Dusche",
    body: "Der ungewöhnlichste Spot des Hauses — eine Dusche unter freiem Himmel. Vor allem im Sommer Kult.",
  },
  {
    title: "Im Tarif enthalten",
    body: "Sauna & Wellness sind Teil aller Mitgliedschaften. Keine Aufpreise, keine extra Zeitfenster.",
  },
];

const body = [
  "Sauna ist mehr als ein Wellness-Add-on. Studien zeigen, dass regelmäßige Saunabesuche das Risiko für Herz-Kreislauf-Erkrankungen senken, das Immunsystem stärken und die Schlafqualität messbar verbessern. Wer zweimal pro Woche schwitzt, lebt nachweislich gesünder.",
  "Wir haben unseren Wellness-Bereich deshalb nicht als Beiwerk gebaut, sondern als gleichwertigen Teil des Studios. 250 Quadratmeter, hochwertige Materialien, eine Architektur, die das Tageslicht hereinlässt, ohne dass du dich exponiert fühlst. Wer einmal nach dem Training in der Outdoor-Sauna stand und ins Grüne geschaut hat, versteht, warum so viele Mitglieder allein wegen der Sauna kommen.",
  "Die Aufgüsse sind ein Highlight: kräftige Klassiker, milde Zitrus-Varianten, gelegentlich auch besondere Themen-Aufgüsse. Den genauen Zeitplan findest du am Empfang — oder du fragst einfach kurz, wenn du kommst.",
];

export default function SaunaPage() {
  return (
    <>
      <PageHero
        eyebrow="Sauna & Wellness"
        title="Wärme, die wirklich abschaltet."
        intro="250 m² Wellness mit Indoor- und Outdoor-Sauna, Ruheraum und Lounges — eingebettet in den Glaspalast mit Blick ins Oberbergische."
      />

      <section className="pb-20">
        <div className="container-grid">
          <RevealOnScroll>
            <div className="relative aspect-21/9 overflow-hidden rounded-3xl border border-border">
              <Image
                src={IMG.sauna.src}
                alt={IMG.sauna.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg/60 via-transparent to-transparent" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20">
        <div className="container-grid grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <RevealOnScroll key={f.title} delay={i * 0.04}>
              <div className="border-t border-border pt-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-h4 mt-3 font-display">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {f.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-grid">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-fg-muted">
              {body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-20">
        <div className="container-grid grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow mb-3">Öffnungszeiten Sauna</p>
            <h2 className="text-h3 font-display font-bold">
              Wann der Wellness-Bereich offen ist.
            </h2>
            <p className="mt-4 text-fg-muted">
              Mittwochs vormittags ist Damensauna — von 11 Uhr bis Mittag
              ausschließlich für Frauen. Außerhalb der genannten Zeiten ist
              das Studio offen, die Sauna jedoch geschlossen.
            </p>
          </div>
          <ul className="divide-y divide-border rounded-3xl border border-border bg-bg-elevated/40">
            {WEEKDAYS.map((d) => (
              <li
                key={d}
                className="flex items-baseline justify-between gap-4 px-6 py-3"
              >
                <span className="font-display font-medium">{d}</span>
                <span className="text-right font-mono text-sm text-fg-muted">
                  {HOURS_SAUNA[d].open} – {HOURS_SAUNA[d].close}
                  {HOURS_SAUNA[d].note && (
                    <span className="ml-2 text-brand">
                      · {HOURS_SAUNA[d].note}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="container-grid">
          <p className="eyebrow mb-3">Sauna-Etikette</p>
          <h2 className="text-h3 mb-8 max-w-[20ch] font-display font-bold">
            Drei kleine Dinge, die den Wellness-Tag besser machen.
          </h2>
          <ul className="grid gap-3 sm:grid-cols-3">
            {[
              "Vor dem Saunagang gründlich duschen — kühl ist effektiver, vermeidet aber Schock-Wirkung.",
              "Auf dem Saunatuch sitzen, nicht direkt auf dem Holz — aus Hygiene und Respekt für die anderen.",
              "Zwischen den Gängen ausreichend trinken und nicht hetzen. Drei kürzere Gänge wirken besser als einer in der Hitzgrenze.",
            ].map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-3 rounded-2xl border border-border bg-bg-elevated/40 p-5 text-sm text-fg-muted"
              >
                <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24">
        <div className="container-grid">
          <RevealOnScroll>
            <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-bg-elevated/50 p-10 md:flex-row md:items-center md:justify-between md:p-14">
              <div>
                <p className="eyebrow mb-2">Im Tarif enthalten</p>
                <p className="text-h3 max-w-xl font-display">
                  Sauna ohne Aufpreis — Teil jeder Mitgliedschaft.
                </p>
              </div>
              <MagneticButton href="/mitglied-werden">
                Mitglied werden <ArrowRight size={16} />
              </MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
