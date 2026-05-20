import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { AvatarChip } from "@/components/ui/AvatarChip";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { IMG, TEAM_PHOTOS } from "@/lib/content/media";

const features = [
  "3D-Kameratechnologie analysiert dich in 2 Minuten",
  "Geräte stellen sich per RFID-Chip automatisch auf dich ein",
  "Personalisierter Plan, App, BioAge — alles synchron",
  "Komplettes Workout in unter 30 Minuten",
];

const tabs = [
  { label: "Alle", active: false },
  { label: "Kurse", active: false },
  { label: "EGYM Smart Strength", active: true },
  { label: "Personal Training", active: false },
  { label: "Rehasport", active: false },
];

export function EgymFeature() {
  return (
    <section className="bg-bg py-24 lg:py-32">
      <div className="container-grid">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="eyebrow mb-4">Unsere Trainings-Spotlights</p>
          <SplitHeading
            as="h2"
            className="text-h1 mx-auto max-w-[18ch] font-display font-black uppercase leading-[0.9] tracking-[-0.04em]"
          >
            Training, das sich anpasst.
          </SplitHeading>
        </div>

        {/* Tab-Nav (rein visuell active = EGYM) */}
        <ul
          className="flex flex-wrap items-end justify-center gap-x-8 gap-y-3 border-b border-border pb-0 font-display font-bold uppercase tracking-tight"
          aria-label="Trainings-Kategorien"
        >
          {tabs.map((t) => (
            <li
              key={t.label}
              className={
                "relative -mb-px pb-3 text-sm lg:text-base " +
                (t.active ? "text-[var(--color-accent)]" : "text-fg-subtle")
              }
            >
              {t.label}
              {t.active && (
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-[var(--color-accent)]"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Active Tab Content */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <RevealOnScroll>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-card)]">
              <Image
                src={IMG.egym.src}
                alt={IMG.egym.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent" />
            </div>
          </RevealOnScroll>

          <div>
            <h3 className="text-h2 max-w-[14ch] font-display font-black uppercase leading-[0.92] tracking-[-0.03em]">
              EGYM Smart Strength
            </h3>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-fg-muted">
              Statt sich anstrengend an Geräte zu erinnern, erinnern sich die
              Geräte an dich. Setz dich hin — alles ist bereits eingestellt.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--color-accent)] text-[var(--color-accent)]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-fg-muted">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                Deine Coaches
              </span>
              <div className="flex -space-x-3">
                <AvatarChip
                  src={TEAM_PHOTOS["uygar-oezcelik"]}
                  alt="Uygar Özcelik"
                  size="lg"
                />
                <AvatarChip
                  src={TEAM_PHOTOS["thomas-buergerhausen"]}
                  alt="Thomas Bürgerhausen"
                  size="lg"
                />
                <AvatarChip
                  src={TEAM_PHOTOS["fabian-schuerfeld"]}
                  alt="Fabian Schürfeld"
                  size="lg"
                />
              </div>
            </div>

            <div className="mt-10">
              <MagneticButton href="/fitness/egym" variant="pill-solid">
                EGYM entdecken <ArrowRight size={14} />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
