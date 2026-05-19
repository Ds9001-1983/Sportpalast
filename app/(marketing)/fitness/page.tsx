import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { NAVIGATION } from "@/lib/content/navigation";

export const metadata: Metadata = {
  title: "Fitness",
  description:
    "2 000 m² Trainingsfläche, 140+ Geräte, EGYM, Functional Training, Lady Fitness, InBody, Kurse. Alles im Sportpalast Lindlar.",
};

const fitnessGroup = NAVIGATION.find((g) => g.label === "Fitness");

export default function FitnessOverviewPage() {
  return (
    <>
      <PageHero
        eyebrow="Fitness"
        title="2 000 m² Glaspalast. 140+ Geräte. Eine Aussicht zum Verlieben."
        intro="Vom adaptiven EGYM-Zirkel über Functional Training bis zum klassischen Krafttraining — alles unter einem hellen Dach."
      />

      <section className="pb-32">
        <div className="container-grid">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {fitnessGroup?.children?.map((c, i) => (
              <RevealOnScroll key={c.href} delay={i * 0.03}>
                <Link
                  href={c.href}
                  className="group flex h-full min-h-[220px] flex-col justify-between bg-bg-elevated p-8 transition-colors hover:bg-bg-elevated/60"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="text-h4 font-display font-bold leading-tight">
                      {c.label}
                    </h3>
                    <span className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-fg-muted transition-colors group-hover:text-brand">
                      Mehr <ArrowUpRight size={12} />
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
