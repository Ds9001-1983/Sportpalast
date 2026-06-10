import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { BentoCard } from "@/components/ui/BentoCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Pill } from "@/components/ui/Pill";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CONTACT } from "@/lib/content/contact";
import { APPLICATION_CONTACT, JOBS } from "@/lib/content/jobs";

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Jobs im Sportpalast Lindlar: Ausbildung, duales Studium, Trainingsbetreuung, Service. Arbeiten im Glaspalast — bewirb dich bei Vera Dütting.",
};

const benefits = [
  {
    title: "Arbeitsplatz Glaspalast",
    body: "2 000 m² Tageslicht, Panoramablick ins Oberbergische — schöner ist kein Büro.",
  },
  {
    title: "Familiäres Team",
    body: "Inhabergeführt seit 2004. Kurze Wege, echte Wertschätzung, Du-Kultur.",
  },
  {
    title: "Weiterbildung",
    body: "Lizenzen, interne Schulungen, EGYM-Zertifizierungen — wir investieren in dich.",
  },
  {
    title: "Training inklusive",
    body: "Studio, Kurse und Sauna stehen dir als Teil des Teams offen.",
  },
];

export default function KarrierePage() {
  return (
    <>
      <PageHero
        eyebrow="Karriere"
        title="Arbeiten, wo andere trainieren."
        intro="Wir suchen Menschen, die Bewegung lieben und Menschen mögen — von der Ausbildung bis zum dualen Studium."
      />

      <section className="pb-20">
        <div className="container-grid">
          <p className="eyebrow mb-6">Warum Sportpalast</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <RevealOnScroll key={b.title} delay={i * 0.05}>
                <BentoCard variant="dark" className="h-full">
                  <h3 className="text-h4 font-display font-medium leading-tight">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {b.body}
                  </p>
                </BentoCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-grid">
          <p className="eyebrow mb-6">Offene Stellen</p>
          <div className="grid gap-6 md:grid-cols-2">
            {JOBS.map((job, i) => (
              <RevealOnScroll key={job.title} delay={i * 0.05}>
                <BentoCard variant="cream" className="h-full">
                  <Pill variant="light">{job.type}</Pill>
                  <h3 className="text-h4 mt-4 font-display font-medium leading-tight">
                    {job.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {job.description}
                  </p>
                </BentoCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-grid">
          <RevealOnScroll>
            <div className="grid gap-10 rounded-frame border border-border bg-bg-elevated p-10 md:grid-cols-2 md:p-14">
              <div>
                <p className="eyebrow mb-3">Bewerbung</p>
                <h2 className="text-h2 font-display font-medium">
                  Nichts Passendes dabei? Bewirb dich trotzdem.
                </h2>
                <p className="mt-4 text-fg-muted">
                  Schick deine Bewerbung — gern formlos mit Lebenslauf — an{" "}
                  {APPLICATION_CONTACT.person}. Wir melden uns schnell, versprochen.
                </p>
                <p className="mt-4 text-sm text-fg-muted">
                  {CONTACT.studio.name} · {CONTACT.studio.street},{" "}
                  {CONTACT.studio.zip} {CONTACT.studio.city} ·{" "}
                  {CONTACT.studio.phoneDisplay}
                </p>
              </div>
              <div className="flex items-center justify-start md:justify-end">
                <MagneticButton
                  href={`mailto:${APPLICATION_CONTACT.email}?subject=Bewerbung`}
                >
                  {APPLICATION_CONTACT.email} <ArrowRight size={14} />
                </MagneticButton>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
