import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitHeading } from "@/components/ui/SplitHeading";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-48">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,172,167,0.18),transparent_70%)]"
      />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-brand/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-brand/40 to-transparent" />

      <div className="container-grid text-center">
        <p className="eyebrow mb-6">Komm vorbei</p>
        <SplitHeading
          as="h2"
          className="text-display mx-auto max-w-[16ch] font-display font-black leading-[0.95]"
        >
          Probiere uns aus. Bleib, wenn's passt.
        </SplitHeading>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-fg-muted">
          Probetraining vereinbaren, durch den Glaspalast laufen, einen Espresso
          in der Lounge trinken. Entscheide danach.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="/mitglied-werden">
            Mitglied werden <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton href="/kontakt" variant="outline">
            Probetraining buchen
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
