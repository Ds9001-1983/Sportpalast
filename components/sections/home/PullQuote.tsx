import { Asterisk } from "@/components/ui/Asterisk";
import { AvatarChip } from "@/components/ui/AvatarChip";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TEAM_PHOTOS } from "@/lib/content/media";

export function PullQuote() {
  return (
    <section className="relative bg-bg py-24 lg:py-32">
      <div className="container-grid">
        <RevealOnScroll>
          <div className="relative">
            <Asterisk
              size={120}
              spinning
              className="pointer-events-none absolute -right-2 -top-8 lg:right-12 lg:-top-4 lg:size-44"
            />
            <blockquote className="mx-auto max-w-[22ch] text-center font-display text-[clamp(2rem,5.5vw,5rem)] font-black uppercase leading-[1.05] tracking-[-0.03em] text-fg">
              <p>
                Die letzten drei oder vier{" "}
                <AvatarChip
                  src={TEAM_PHOTOS["uygar-oezcelik"]}
                  alt="Uygar Özcelik"
                  size="lg"
                />{" "}
                Wiederholungen sind das, was die{" "}
                <AvatarChip
                  src={TEAM_PHOTOS["thomas-buergerhausen"]}
                  alt="Thomas Bürgerhausen"
                  size="lg"
                />{" "}
                Muskeln wachsen lässt. Dieser{" "}
                <AvatarChip
                  src={TEAM_PHOTOS["fabian-schuerfeld"]}
                  alt="Fabian Schürfeld"
                  size="lg"
                />{" "}
                Bereich des Schmerzes trennt einen Champion von{" "}
                <AvatarChip
                  src={TEAM_PHOTOS["vera-duetting"]}
                  alt="Vera Dütting"
                  size="lg"
                />{" "}
                jemandem, der keiner ist.
              </p>
            </blockquote>
            <p className="mt-12 text-center font-mono text-xs uppercase tracking-[0.22em] text-fg-subtle">
              — Sinngemäß, Arnold Schwarzenegger
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
