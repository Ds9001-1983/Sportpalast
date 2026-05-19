import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { NumberCounter } from "@/components/ui/NumberCounter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { IMG } from "@/lib/content/media";

const features = [
  "3D-Kameratechnologie analysiert dich in 2 Minuten",
  "Geräte stellen sich per RFID-Chip automatisch auf dich ein",
  "Personalisierter Plan, App, BioAge — alles synchron",
  "Komplettes Workout in unter 30 Minuten",
];

export function EgymFeature() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-40">
      <div className="container-grid grid items-center gap-16 lg:grid-cols-2">
        <RevealOnScroll>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-bg-elevated">
            <Image
              src={IMG.egym.src}
              alt={IMG.egym.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/70 to-bg/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,172,167,0.25),transparent_60%)]" />
            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
                Smart Strength
              </p>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-[8rem] font-black leading-none">
                  <NumberCounter to={4} />×
                </span>
                <span className="text-fg-muted">effektiver</span>
              </div>
              <p className="mt-2 max-w-sm text-sm text-fg-muted">
                Wissenschaftlich validiert. Adaptive Last, sofortiges Feedback,
                messbare Fortschritte.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <div>
          <p className="eyebrow mb-4">EGYM</p>
          <SplitHeading
            as="h2"
            className="text-h2 max-w-[14ch] font-display font-bold"
          >
            Training, das sich an dich anpasst.
          </SplitHeading>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-fg-muted">
            Statt sich anstrengend an Geräte zu erinnern, erinnern sich die
            Geräte an dich. Setz dich hin — alles ist bereits eingestellt.
          </p>

          <ul className="mt-10 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand text-brand">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="text-fg-muted">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <MagneticButton href="/fitness/egym" variant="outline">
              EGYM entdecken <ArrowRight size={14} />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
