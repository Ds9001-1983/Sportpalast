import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TEAM } from "@/lib/content/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Unser Team — Trainer, Therapeuten und Kursleitung, die dich mit Erfahrung und Herzblut begleiten.",
};

const groupOrder = [
  { key: "leitung", label: "Geschäftsführung" },
  { key: "trainer", label: "Trainer & Kursleitung" },
  { key: "physio", label: "Physiotherapie" },
  { key: "team", label: "Team" },
] as const;

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Menschen, die wissen, was sie tun."
        intro="Über 20 Trainer, Therapeuten und Kursleitungen. Jeder mit eigener Spezialisierung — gemeinsam für deinen Weg."
      />

      <section className="pb-32">
        <div className="container-grid space-y-20">
          {groupOrder.map((g) => {
            const members = TEAM.filter((t) => t.group === g.key);
            if (members.length === 0) return null;
            return (
              <div key={g.key}>
                <p className="eyebrow mb-6">{g.label}</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {members.map((m, i) => (
                    <RevealOnScroll key={m.slug} delay={i * 0.03}>
                      <div className="group aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-bg-elevated/40 p-6 transition-colors hover:border-brand">
                        <div className="flex h-full flex-col justify-between">
                          <div
                            aria-hidden
                            className="h-16 w-16 rounded-full bg-[radial-gradient(circle,rgba(0,172,167,0.3),transparent_70%)] transition-transform group-hover:scale-110"
                          />
                          <div>
                            <p className="font-display text-lg font-bold leading-tight">
                              {m.name}
                            </p>
                            <p className="mt-1 text-sm text-fg-muted">
                              {m.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
