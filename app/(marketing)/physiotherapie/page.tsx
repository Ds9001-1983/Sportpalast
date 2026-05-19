import type { Metadata } from "next";
import { Phone, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PHYSIO_SERVICES } from "@/lib/content/services";
import { CONTACT } from "@/lib/content/contact";

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

      <section className="py-12">
        <div className="container-grid">
          <div className="rounded-3xl border border-brand/40 bg-brand/5 p-8 lg:p-10">
            <p className="eyebrow mb-3">Terminvereinbarung</p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={`tel:${CONTACT.physio.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-3 text-h4 font-display font-semibold hover:text-brand"
              >
                <Phone size={18} />
                {CONTACT.physio.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${CONTACT.physio.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-h4 font-display font-semibold hover:text-brand"
              >
                <MessageCircle size={18} />
                WhatsApp {CONTACT.physio.whatsappDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-grid space-y-16">
          {Object.entries(grouped).map(([key, services]) => (
            <div key={key}>
              <p className="eyebrow mb-6">{categoryLabels[key]}</p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {services.map((s, i) => (
                  <RevealOnScroll key={s.slug} delay={i * 0.04}>
                    <article className="h-full rounded-2xl border border-border bg-bg-elevated/40 p-6 transition-colors hover:border-brand">
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

      <section className="py-24">
        <div className="container-grid">
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-bg-elevated/50 p-10 md:flex-row md:items-center md:justify-between md:p-14">
            <div>
              <p className="eyebrow mb-2">Direkt buchen</p>
              <p className="text-h3 max-w-xl font-display">
                Ruf an, schreib uns auf WhatsApp — wir finden einen Termin.
              </p>
            </div>
            <MagneticButton href="/kontakt">Kontakt aufnehmen</MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
