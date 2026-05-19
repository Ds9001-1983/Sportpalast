import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TEAM } from "@/lib/content/team";
import { TEAM_PHOTOS } from "@/lib/content/media";

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
                  {members.map((m, i) => {
                    const photo = TEAM_PHOTOS[m.slug];
                    return (
                      <RevealOnScroll key={m.slug} delay={i * 0.03}>
                        <figure className="group relative aspect-4/5 overflow-hidden rounded-2xl border border-border bg-bg-elevated/60">
                          {photo ? (
                            <Image
                              src={photo}
                              alt={`${m.name} — ${m.role}`}
                              fill
                              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                          ) : (
                            <div
                              aria-hidden
                              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(0,172,167,0.35),transparent_60%)]"
                            />
                          )}
                          <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-transparent" />
                          <figcaption className="absolute inset-x-0 bottom-0 p-5">
                            <p className="font-display text-lg font-bold leading-tight">
                              {m.name}
                            </p>
                            <p className="mt-1 text-xs uppercase tracking-[0.15em] text-fg-muted">
                              {m.role}
                            </p>
                          </figcaption>
                        </figure>
                      </RevealOnScroll>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
