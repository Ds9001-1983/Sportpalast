import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PHYSIO_SERVICES } from "@/lib/content/services";
import { CONTACT } from "@/lib/content/contact";
import { IMG } from "@/lib/content/media";

export const metadata: Metadata = {
  title: "Physiotherapie",
  description:
    "Physiotherapie direkt im Studio — Manuelle Therapie, KG, Massage, Cryojet, Kinesiotape und mehr. Alle Krankenkassen.",
};

const categoryLabels: Record<string, string> = {
  manuell: "Manuelle Therapien",
  physikalisch: "Physikalische Therapien",
  spezial: "Spezialbehandlungen",
  training: "Trainingstherapien",
};

const philosophie = [
  "Wir behandeln nicht Symptome, sondern suchen nach den Ursachen. Ein verspannter Nacken kommt selten aus dem Nacken; ein schmerzender Knöchel oft aus der Hüfte. Wer nur dort behandelt, wo es weh tut, verpasst meistens, woher das Problem wirklich kommt.",
  "Deshalb beginnt jede Behandlung mit einem ausführlichen Befund — Anamnese, Bewegungsscreening, manuelle Tests. Erst dann entscheiden wir gemeinsam, welche Methode zu dir passt: manuelle Therapie, gerätegestützte Krankengymnastik, Wärme, Kälte, Tape oder eine Kombination daraus.",
  "Genauso wichtig wie die Sitzung selbst sind die Übungen, die du zwischen den Terminen machst. Wir geben dir konkrete Hausaufgaben, die zum Alltag passen, und passen sie an, je nachdem, wie dein Körper reagiert. Aktive Genesung wirkt nachhaltiger als passive.",
];

const ablauf = [
  {
    n: "01",
    title: "Termin vereinbaren",
    body: "Telefonisch oder über WhatsApp. Wir nehmen uns Zeit für deine Anliegen und planen den ersten Termin zeitnah.",
  },
  {
    n: "02",
    title: "Befund & Anamnese",
    body: "Im ersten Termin nehmen wir uns Zeit, deine Geschichte zu verstehen. Wann ist es aufgetreten? Was hilft? Was verschlimmert es?",
  },
  {
    n: "03",
    title: "Behandlungsplan",
    body: "Wir besprechen, welche Methoden sinnvoll sind, wie viele Einheiten du brauchst und was du selbst tun kannst.",
  },
  {
    n: "04",
    title: "Therapie & Übungen",
    body: "Behandlung in der Praxis plus angeleitete Eigenübungen für zu Hause. Fortschritt wird regelmäßig überprüft.",
  },
];

export default function PhysioPage() {
  const grouped = PHYSIO_SERVICES.reduce<
    Record<string, typeof PHYSIO_SERVICES>
  >((acc, s) => {
    (acc[s.category] ??= []).push(s);
    return acc;
  }, {});

  return (
    <>
      <PageHero
        eyebrow="Physiotherapie"
        title="Wir behandeln nicht Symptome. Wir finden die Ursache."
        intro="Vollständige Physiotherapie direkt im Studio — alle gesetzlichen und privaten Krankenkassen. Mit individuellen Eigenübungen für aktive Genesung."
      />

      <section className="pb-12">
        <div className="container-grid">
          <RevealOnScroll>
            <div className="relative aspect-21/9 overflow-hidden rounded-3xl border border-border">
              <Image
                src={IMG.physio.src}
                alt={IMG.physio.alt}
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

      <section className="py-12">
        <div className="container-grid">
          <div className="rounded-frame border border-accent/40 bg-accent-soft p-8 lg:p-10">
            <p className="eyebrow mb-3">Terminvereinbarung</p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={`tel:${CONTACT.physio.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 text-h4 font-display font-semibold hover:text-accent"
              >
                <Phone size={18} />
                {CONTACT.physio.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${CONTACT.physio.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-h4 font-display font-semibold hover:text-accent"
              >
                <MessageCircle size={18} />
                WhatsApp {CONTACT.physio.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-grid">
          <p className="eyebrow mb-4">Unsere Philosophie</p>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
            <h2 className="text-h2 max-w-[18ch] font-display font-bold">
              Wir nehmen uns Zeit, weil dein Körper sie verdient hat.
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-fg-muted">
              {philosophie.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-grid">
          <p className="eyebrow mb-4">So läuft es ab</p>
          <h2 className="text-h2 mb-12 max-w-[18ch] font-display font-bold">
            Vom ersten Anruf bis zur letzten Übung.
          </h2>
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {ablauf.map((s, i) => (
              <RevealOnScroll key={s.n} delay={i * 0.05}>
                <li className="flex h-full flex-col justify-between rounded-card border border-border bg-bg-elevated p-6">
                  <p className="font-display text-5xl font-black text-accent/40">
                    {s.n}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-h4 font-display font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                      {s.body}
                    </p>
                  </div>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="container-grid space-y-16">
          <div>
            <p className="eyebrow mb-4">Unsere Leistungen</p>
            <h2 className="text-h2 max-w-[20ch] font-display font-bold">
              Neun Methoden, kombiniert zu deinem Behandlungsplan.
            </h2>
          </div>
          {Object.entries(grouped).map(([key, services]) => (
            <div key={key}>
              <p className="eyebrow mb-6">{categoryLabels[key]}</p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {services.map((s, i) => (
                  <RevealOnScroll key={s.slug} delay={i * 0.04}>
                    <article className="h-full rounded-card border border-border bg-bg-elevated p-6 transition-colors hover:border-accent">
                      <h3 className="text-h4 font-display font-bold">
                        {s.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                        {s.description}
                      </p>
                    </article>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-grid grid gap-10 rounded-frame border border-border bg-bg-elevated p-10 md:grid-cols-2 lg:p-14">
          <div>
            <p className="eyebrow mb-3">Kassenleistung</p>
            <h2 className="text-h3 max-w-[20ch] font-display font-bold">
              Alle Kassen, alle Rezepte — wir machen den Papierkram.
            </h2>
          </div>
          <div className="space-y-4 text-fg-muted">
            <p>
              Wir rechnen mit allen gesetzlichen und privaten Krankenkassen
              ab. Du bringst dein Rezept (Heilmittelverordnung) mit — den
              Rest übernehmen wir.
            </p>
            <p>
              Bei Selbstzahler-Anliegen wie Sportphysiotherapie,
              Wellness-Massagen oder reinen Vorsorge-Behandlungen erstellen
              wir dir ein transparentes Angebot. Frag einfach kurz nach.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-grid">
          <RevealOnScroll>
            <div className="flex flex-col items-start gap-6 rounded-frame border border-border bg-bg-elevated p-10 md:flex-row md:items-center md:justify-between md:p-14">
              <div>
                <p className="eyebrow mb-2">Direkt buchen</p>
                <p className="text-h3 max-w-xl font-display">
                  Ruf an, schreib uns auf WhatsApp — wir finden einen Termin.
                </p>
              </div>
              <MagneticButton href="/kontakt" variant="pill-solid">
                Kontakt aufnehmen <ArrowRight size={16} />
              </MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
