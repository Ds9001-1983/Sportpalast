import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NumberCounter } from "@/components/ui/NumberCounter";
import { TEAM } from "@/lib/content/team";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Sportpalast Lindlar — seit 2004 ein Fitnessstudio mit Herz und Aussicht. Lerne uns kennen.",
};

const founders = TEAM.filter((t) => t.group === "leitung");

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
              <p className="mt-6 text-fg-muted">
                Der Sportpalast ist ein Glaspalast mit Panoramablick — und ein
                Ort, an dem du dich gut aufgehoben fühlst. Wir kombinieren
                modernste Technik mit echter Beratung und Räumen, die so
                durchdacht sind, dass Training Freude macht.
              </p>
              <p className="mt-4 text-fg-muted">
                Fitness, Physiotherapie, Rehasport, Sauna und Wellness — alles
                unter einem Dach, alles mit dem gleichen Anspruch.
              </p>
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
                <li
                  key={s.label}
                  className="bg-bg-elevated p-8"
                >
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

      <section className="py-20">
        <div className="container-grid">
          <p className="eyebrow mb-4">Geschäftsführung</p>
          <h2 className="text-h2 mb-12 max-w-[18ch] font-display font-bold">
            Die Köpfe hinter dem Sportpalast.
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {founders.map((f, i) => (
              <RevealOnScroll key={f.slug} delay={i * 0.05}>
                <div className="aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-bg-elevated/40 p-8">
                  <div className="flex h-full flex-col justify-between">
                    <div
                      aria-hidden
                      className="h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(0,172,167,0.3),transparent_70%)]"
                    />
                    <div>
                      <p className="font-display text-2xl font-bold">
                        {f.name}
                      </p>
                      <p className="mt-1 text-sm text-fg-muted">{f.role}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/ueber-uns/team"
              className="group inline-flex items-center gap-2 text-sm text-fg-muted hover:text-brand"
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

      <section className="py-24">
        <div className="container-grid">
          <RevealOnScroll>
            <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-bg-elevated/50 p-10 md:flex-row md:items-center md:justify-between md:p-14">
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
