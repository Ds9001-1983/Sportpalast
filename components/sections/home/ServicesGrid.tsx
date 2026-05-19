import Link from "next/link";
import {
  Dumbbell,
  HeartPulse,
  Flame,
  Bath,
  GraduationCap,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SplitHeading } from "@/components/ui/SplitHeading";

const items = [
  {
    title: "Fitnessstudio",
    body: "140+ moderne Geräte auf 2 000 m². Kraft, Cardio, Free Weights, Functional.",
    href: "/fitness",
    icon: Dumbbell,
  },
  {
    title: "EGYM Smart Strength",
    body: "Digital, adaptiv, bis zu 4× effektiver. Dein Training kennt dich.",
    href: "/fitness/egym",
    icon: Activity,
  },
  {
    title: "Fitnesskurse",
    body: "Über 30 Kurse pro Woche — von Yoga bis HOT IRON™.",
    href: "/fitness/fitnesskurse",
    icon: Flame,
  },
  {
    title: "Sauna & Wellness",
    body: "250 m² Wellness. Indoor- & Outdoor-Sauna, Ruheraum, Terrasse.",
    href: "/sauna",
    icon: Bath,
  },
  {
    title: "Physiotherapie",
    body: "Komplette Praxis im Haus. Alle gesetzlichen und privaten Kassen.",
    href: "/physiotherapie",
    icon: HeartPulse,
  },
  {
    title: "Rehasport",
    body: "Verordneter Rehasport. 100 % Kassenleistung. Sofort starten.",
    href: "/gesundheit/rehasport",
    icon: GraduationCap,
  },
];

export function ServicesGrid() {
  return (
    <section className="py-32 lg:py-40">
      <div className="container-grid">
        <div className="mb-16 grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow mb-4">Was dich erwartet</p>
            <SplitHeading
              as="h2"
              className="text-h1 max-w-[18ch] font-display font-bold"
            >
              Alles unter einem Dach. Ein Studio, das mitdenkt.
            </SplitHeading>
          </div>
          <Link
            href="/fitness"
            className="group hidden items-center gap-2 text-sm text-fg-muted md:inline-flex hover:text-brand"
          >
            Alle Bereiche entdecken
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <RevealOnScroll key={it.title} delay={i * 0.04}>
              <Link
                href={it.href}
                className="group relative flex h-full min-h-[260px] flex-col justify-between bg-bg-elevated p-8 transition-colors hover:bg-bg-elevated/60"
              >
                <it.icon size={28} className="text-brand" strokeWidth={1.4} />
                <div>
                  <h3 className="text-h3 font-display font-bold leading-tight">
                    {it.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-fg-muted">
                    {it.body}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-fg-subtle transition-colors group-hover:text-brand">
                    Mehr
                    <ArrowUpRight
                      size={12}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
