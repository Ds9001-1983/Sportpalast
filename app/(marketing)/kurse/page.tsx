import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { KurseGrid } from "@/components/sections/kurse/KurseGrid";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TOPIC_PAGES } from "@/lib/content/topic-pages";

const data = TOPIC_PAGES["kurse"];

export const metadata: Metadata = {
  title: data.eyebrow,
  description: data.intro,
};

export default function KursePage() {
  return (
    <>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        intro={data.intro}
      />

      <KurseGrid />

      <section className="pb-24">
        <div className="container-grid">
          <RevealOnScroll>
            <div className="grid gap-10 rounded-frame border border-border bg-bg-elevated p-10 md:grid-cols-2 md:p-14">
              <div>
                <p className="eyebrow mb-3">Wann läuft was?</p>
                <h2 className="text-h2 font-display font-medium">
                  Der komplette Wochenplan.
                </h2>
                <p className="mt-4 text-fg-muted">
                  Alle Kurse mit Tag, Uhrzeit und Filter — du brauchst dich
                  für die meisten Stunden nicht anzumelden. Komm einfach zehn
                  Minuten früher.
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-4">
                <MagneticButton href="/kursplan">
                  Zum Kursplan <ArrowRight size={14} />
                </MagneticButton>
                <MagneticButton href="/probetraining" variant="outline">
                  Erst Probetraining
                </MagneticButton>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
