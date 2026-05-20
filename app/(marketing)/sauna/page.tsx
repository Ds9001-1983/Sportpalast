import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Asterisk } from "@/components/ui/Asterisk";
import { BentoCard } from "@/components/ui/BentoCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Pill } from "@/components/ui/Pill";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PageHero } from "@/components/sections/PageHero";
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

      {/* Hero-Image */}
      <section className="pb-12">
        <div className="container-grid">
          <RevealOnScroll>
            <div className="relative aspect-21/9 overflow-hidden rounded-frame">
              <Image
                src={IMG.sauna.src}
                alt={IMG.sauna.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Features-Bento */}
      <section className="bg-bg py-16 lg:py-24">
        <div className="container-grid">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <RevealOnScroll key={f.title} delay={i * 0.04}>
                <BentoCard variant="dark" className="h-full">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-h4 mt-4 font-display font-black uppercase leading-tight tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {f.body}
                  </p>
                </BentoCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-16">
        <div className="container-grid">
          <RevealOnScroll>
            <div className="mx-auto max-w-3xl rounded-frame border border-ink-border bg-cream px-7 py-12 lg:px-14 lg:py-16">
              <Pill variant="light">Hintergrund</Pill>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
                {body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Öffnungszeiten Sauna */}
      <section className="py-16 lg:py-24">
        <div className="container-grid grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow mb-3">Öffnungszeiten Sauna</p>
            <h2 className="text-h3 font-display font-black uppercase leading-tight tracking-tight">
              Wann der Wellness-Bereich offen ist.
            </h2>
            <p className="mt-4 text-fg-muted">
              Mittwochs vormittags ist Damensauna — von 11 Uhr bis Mittag
              ausschließlich für Frauen. Außerhalb der genannten Zeiten ist
              das Studio offen, die Sauna jedoch geschlossen.
            </p>
          </div>
          <BentoCard variant="dark" className="p-0">
            <ul className="divide-y divide-border">
              {WEEKDAYS.map((d) => (
                <li
                  key={d}
                  className="flex items-baseline justify-between gap-4 px-6 py-4"
                >
                  <span className="font-display font-bold uppercase tracking-tight">
                    {d}
                  </span>
                  <span className="text-right font-mono text-sm text-fg-muted">
                    {HOURS_SAUNA[d].open} – {HOURS_SAUNA[d].close}
                    {HOURS_SAUNA[d].note && (
                      <span className="ml-2 text-accent">
                        · {HOURS_SAUNA[d].note}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>
      </section>

      {/* Sauna-Etikette */}
      <section className="py-16">
        <div className="container-grid">
          <p className="eyebrow mb-3">Sauna-Etikette</p>
          <h2 className="text-h3 mb-8 max-w-[20ch] font-display font-black uppercase leading-tight tracking-tight">
            Drei kleine Dinge, die den Wellness-Tag besser machen.
          </h2>
          <ul className="grid gap-5 sm:grid-cols-3">
            {[
              "Vor dem Saunagang gründlich duschen — kühl ist effektiver, vermeidet aber Schock-Wirkung.",
              "Auf dem Saunatuch sitzen, nicht direkt auf dem Holz — aus Hygiene und Respekt für die anderen.",
              "Zwischen den Gängen ausreichend trinken und nicht hetzen. Drei kürzere Gänge wirken besser als einer in der Hitzgrenze.",
            ].map((tip) => (
              <li key={tip}>
                <BentoCard variant="dark" className="flex h-full items-start gap-3 p-6 text-sm text-fg-muted">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                  <span>{tip}</span>
                </BentoCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-grid">
          <RevealOnScroll>
            <div className="relative overflow-hidden rounded-frame border border-border bg-bg-elevated p-10 md:p-14">
              <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <p className="eyebrow mb-3">Im Tarif enthalten</p>
                  <p className="text-h3 font-display font-black uppercase leading-tight tracking-tight">
                    Sauna ohne Aufpreis — Teil jeder Mitgliedschaft.
                  </p>
                </div>
                <MagneticButton href="/mitglied-werden" variant="pill-solid">
                  Mitglied werden <ArrowRight size={16} />
                </MagneticButton>
              </div>
              <Asterisk
                size={180}
                spinning
                className="pointer-events-none absolute -right-10 -top-10 opacity-30"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
