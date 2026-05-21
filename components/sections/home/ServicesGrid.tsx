import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Bath,
  Dumbbell,
  Flame,
  GraduationCap,
  HeartPulse,
} from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { RoundIconButton } from "@/components/ui/RoundIconButton";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { IMG } from "@/lib/content/media";

const items = [
  {
    title: "Fitnessstudio",
    body: "140+ moderne Geräte auf 2 000 m². Kraft, Cardio, Free Weights, Functional.",
    href: "/fitness",
    icon: Dumbbell,
    image: IMG.fitness,
  },
  {
    title: "EGYM Smart Strength",
    body: "Digital, adaptiv, bis zu 4× effektiver. Dein Training kennt dich.",
    href: "/fitness/egym",
    icon: Activity,
    highlighted: true,
    image: IMG.egym,
  },
  {
    title: "Fitnesskurse",
    body: "Über 30 Kurse pro Woche — von Yoga bis HOT IRON™.",
    href: "/fitness/fitnesskurse",
    icon: Flame,
    image: IMG.courses,
  },
  {
    title: "Sauna & Wellness",
    body: "250 m² Wellness. Indoor- & Outdoor-Sauna, Ruheraum, Terrasse.",
    href: "/sauna",
    icon: Bath,
    image: IMG.sauna,
  },
  {
    title: "Physiotherapie",
    body: "Komplette Praxis im Haus. Alle gesetzlichen und privaten Kassen.",
    href: "/physiotherapie",
    icon: HeartPulse,
    image: IMG.physio,
  },
  {
    title: "Rehasport",
    body: "Verordneter Rehasport. 100 % Kassenleistung. Sofort starten.",
    href: "/gesundheit/rehasport",
    icon: GraduationCap,
    image: IMG.rehasport,
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-bg py-24 lg:py-32">
      <div className="container-grid">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow mb-4">Was dich erwartet</p>
            <SplitHeading
              as="h2"
              className="text-h1 max-w-[18ch] font-display font-black uppercase leading-[0.92] tracking-[-0.04em]"
            >
              Alles unter einem Dach.
            </SplitHeading>
          </div>
          {/* Dekorative Pfeile rechts oben (wie Rhinos-Carousel) */}
          <div className="flex items-center gap-3">
            <RoundIconButton
              direction="left"
              variant="outline"
              surface="dark"
              size="md"
              ariaLabel="Vorherige Bereiche"
              className="opacity-60"
            />
            <RoundIconButton
              direction="right"
              variant="solid"
              size="lg"
              ariaLabel="Alle Bereiche"
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <RevealOnScroll key={it.title} delay={i * 0.04}>
              <BentoCard
                variant="dark"
                highlighted={it.highlighted}
                className="group relative flex h-full min-h-[280px] flex-col justify-between"
              >
                <Image
                  src={it.image.src}
                  alt={it.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                />
                {/* Dunkler Scrim auf Hover, damit der weiße Text auf dem Foto lesbar bleibt */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <Link href={it.href} className="absolute inset-0" aria-label={it.title} />
                <it.icon
                  size={32}
                  className="relative text-[var(--color-accent)]"
                  strokeWidth={1.4}
                />
                <div className="relative">
                  <h3 className="text-h3 font-display font-black uppercase leading-tight tracking-tight transition-colors duration-300 group-hover:text-white">
                    {it.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-fg-muted transition-colors duration-300 group-hover:text-white/80">
                    {it.body}
                  </p>
                  <span
                    className={
                      "mt-6 inline-flex size-10 items-center justify-center rounded-full transition-colors " +
                      (it.highlighted
                        ? "bg-[var(--color-accent)] text-white"
                        : "border border-border-strong text-fg group-hover:border-white group-hover:text-white")
                    }
                  >
                    <ArrowUpRight size={18} strokeWidth={1.6} />
                  </span>
                </div>
              </BentoCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
