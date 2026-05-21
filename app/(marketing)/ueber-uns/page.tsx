import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NumberCounter } from "@/components/ui/NumberCounter";
import { TEAM } from "@/lib/content/team";
import { TEAM_PHOTOS, IMG } from "@/lib/content/media";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Sportpalast Lindlar — seit 2004 ein Fitnessstudio mit Herz und Aussicht. Lerne uns kennen.",
};

const founders = TEAM.filter((t) => t.group === "leitung");

const timeline = [
  {
    year: "2004",
    title: "Gründung",
    body: "Mit der Vision eines Fitnessstudios, das mehr ist als nur ein Raum voller Geräte — sondern ein Ort für ganzheitliche Gesundheit im Oberbergischen.",
  },
  {
    year: "2010",
    title: "Wachstum",
    body: "Ausbau des Kursangebots auf über 25 Stunden pro Woche, Etablierung als feste Adresse für Fitness und Rehasport in Lindlar.",
  },
  {
    year: "2016",
    title: "Sauna & Wellness",
    body: "Eröffnung des 250 m² großen Wellness-Bereichs mit Indoor- und Outdoor-Sauna — Training und Erholung unter einem Dach.",
  },
  {
    year: "2019",
    title: "Physiotherapie integriert",
    body: "Volle Praxis im Haus mit eigenem Therapeuten-Team. Wege zwischen Training, Reha und Therapie werden kurz.",
  },
  {
    year: "2022",
    title: "EGYM Smart Strength",
    body: "Investition in die adaptive Smart-Strength-Linie. Krafttraining wird digital, individueller und messbar effizienter.",
  },
  {
    year: "2025",
    title: "Heute",
    body: "Über 20 Mitarbeiter, drei Inhaber, ein Standort in Lindlar plus Schwesterstudio Meinerzhagen. Das Konzept bleibt: Herz, Aussicht, Substanz.",
  },
];

const values = [
  {
    title: "Persönlich, nicht anonym",
    body: "Wir kennen unsere Mitglieder beim Namen. Auch nach Jahren. Das ist kein Marketingsatz, das ist Kultur.",
  },
  {
    title: "Ganzheitlich denken",
    body: "Training ohne Erholung bringt nichts. Erholung ohne Therapie auch nicht. Wir denken Gesundheit als System.",
  },
  {
    title: "Qualität vor Größe",
    body: "Lieber 140 perfekt gewartete Geräte und 20 erfahrene Trainer als doppelt so viele, aber halb so gut.",
  },
  {
    title: "Echte Beratung",
    body: "Wir verkaufen keine Trainings­pakete. Wir helfen dir, das zu erreichen, was du erreichen willst.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Fitnessstudio mit Herz und Aussicht."
        intro="Seit 2004 stehen wir für ganzheitliche Fitness, Wellness und Gesundheit im Oberbergischen — getragen von einem Team, das tut, was es liebt."
      />

      <section className="py-20">
        <div className="container-grid grid gap-16 lg:grid-cols-2">
          <RevealOnScroll>
            <div>
              <p className="eyebrow mb-4">Unser Anspruch</p>
              <h2 className="text-h2 max-w-[16ch] font-display font-bold">
                Mehr als ein Fitnessstudio.
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-fg-muted">
                <p>
                  Der Sportpalast ist ein Glaspalast mit Panoramablick — und
                  ein Ort, an dem du dich gut aufgehoben fühlst. Wir
                  kombinieren modernste Technik mit echter Beratung und
                  Räumen, die so durchdacht sind, dass Training Freude macht.
                </p>
                <p>
                  Fitness, Physiotherapie, Rehasport, Sauna und Wellness —
                  alles unter einem Dach, alles mit dem gleichen Anspruch.
                  Wer bei uns trainiert, soll spüren: hier denkt jemand
                  weiter als bis zur nächsten Vertragsverlängerung.
                </p>
                <p>
                  Wir lieben, was wir tun. Das ist nicht selbstverständlich
                  in einer Branche, in der vieles auf Skalierung und
                  Standardisierung optimiert ist. Bei uns ist es Programm.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border">
              {[
                { value: 20, suffix: "+", label: "Jahre Erfahrung" },
                { value: 2000, suffix: " m²", label: "Trainingsfläche" },
                { value: 30, suffix: "+", label: "Kurse pro Woche" },
                { value: 20, suffix: "+", label: "Team-Mitglieder" },
              ].map((s) => (
                <li key={s.label} className="bg-bg-elevated p-8">
                  <p className="font-display text-5xl font-black">
                    <NumberCounter to={s.value} />
                    {s.suffix}
                  </p>
                  <p className="mt-2 text-sm text-fg-muted">{s.label}</p>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="container-grid">
          <p className="eyebrow mb-4">Werte</p>
          <h2 className="text-h2 mb-12 max-w-[20ch] font-display font-bold">
            Vier Sätze, an denen wir uns festhalten lassen.
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 0.05}>
                <div className="rounded-card border border-border bg-bg-elevated p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-h4 mt-3 font-display font-bold">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-fg-muted">{v.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container-grid">
          <p className="eyebrow mb-4">Unsere Geschichte</p>
          <h2 className="text-h2 mb-16 max-w-[18ch] font-display font-bold">
            Über 20 Jahre Sportpalast — in sechs Stationen.
          </h2>
          <ol className="relative space-y-12 border-l border-border-strong pl-8">
            {timeline.map((t, i) => (
              <RevealOnScroll key={t.year} delay={i * 0.04}>
                <li className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-9.25 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand"
                  />
                  <p className="font-mono text-sm uppercase tracking-[0.2em] text-brand">
                    {t.year}
                  </p>
                  <h3 className="text-h4 mt-2 font-display font-bold">
                    {t.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-fg-muted">{t.body}</p>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24">
        <div className="container-grid">
          <p className="eyebrow mb-4">Geschäftsführung</p>
          <h2 className="text-h2 mb-12 max-w-[18ch] font-display font-bold">
            Die Köpfe hinter dem Sportpalast.
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {founders.map((f, i) => {
              const photo = TEAM_PHOTOS[f.slug];
              return (
                <RevealOnScroll key={f.slug} delay={i * 0.05}>
                  <figure className="group relative aspect-3/4 overflow-hidden rounded-3xl border border-border bg-bg-elevated/60">
                    {photo ? (
                      <Image
                        src={photo}
                        alt={`${f.name} — ${f.role}`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(194,97,63,0.35),transparent_60%)]"
                      />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-6">
                      <p className="font-display text-2xl font-bold">
                        {f.name}
                      </p>
                      <p className="mt-1 text-sm text-fg-muted">{f.role}</p>
                    </figcaption>
                  </figure>
                </RevealOnScroll>
              );
            })}
          </div>
          <div className="mt-12">
            <Link
              href="/ueber-uns/team"
              className="group inline-flex items-center gap-2 text-sm text-fg-muted hover:text-accent"
            >
              Gesamtes Team kennenlernen
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src={IMG.studio_outside.src}
            alt={IMG.studio_outside.alt}
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/80 to-bg/60" />
        </div>
        <div className="container-grid">
          <RevealOnScroll>
            <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-bg-elevated/70 p-10 backdrop-blur md:flex-row md:items-center md:justify-between md:p-14">
              <div>
                <p className="eyebrow mb-2">Komm vorbei</p>
                <p className="text-h3 max-w-xl font-display">
                  Schau dir den Sportpalast mit eigenen Augen an.
                </p>
              </div>
              <MagneticButton href="/kontakt">
                Probetraining buchen <ArrowRight size={16} />
              </MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
