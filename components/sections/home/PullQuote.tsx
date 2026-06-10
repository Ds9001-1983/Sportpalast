import { Asterisk } from "@/components/ui/Asterisk";
import { AvatarChip } from "@/components/ui/AvatarChip";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TEAM_PHOTOS } from "@/lib/content/media";

type Token = string | { avatar: string; alt: string };

const TOKENS: Token[] = [
  "Die", "letzten", "drei", "oder", "vier",
  { avatar: "uygar-oezcelik", alt: "Uygar Özcelik" },
  "Wiederholungen", "sind", "das,", "was", "die",
  { avatar: "thomas-buergerhausen", alt: "Thomas Bürgerhausen" },
  "Muskeln", "wachsen", "lässt.", "Dieser",
  { avatar: "fabian-schuerfeld", alt: "Fabian Schürfeld" },
  "Bereich", "des", "Schmerzes", "trennt", "einen", "Champion", "von",
  { avatar: "vera-duetting", alt: "Vera Dütting" },
  "jemandem,", "der", "keiner", "ist.",
];

export function PullQuote() {
  return (
    <section className="relative bg-bg py-24 lg:py-32">
      <div className="container-grid">
        <RevealOnScroll>
          <div className="relative mx-auto max-w-4xl rounded-[var(--radius-frame)] border border-border bg-bg-elevated px-6 py-16 lg:px-16 lg:py-24">
            <Asterisk
              size={64}
              spinning
              className="mx-auto mb-10"
            />
            <blockquote className="mx-auto max-w-[24ch] text-center font-display text-[clamp(1.75rem,4.5vw,4rem)] font-medium italic leading-[1.18] tracking-[-0.01em] text-fg">
              <p>
                {TOKENS.map((t, i) =>
                  typeof t === "string" ? (
                    <span key={i}>{t} </span>
                  ) : TEAM_PHOTOS[t.avatar] ? (
                    <span key={i}>
                      <AvatarChip src={TEAM_PHOTOS[t.avatar]} alt={t.alt} size="lg" />{" "}
                    </span>
                  ) : null,
                )}
              </p>
            </blockquote>
            <p className="font-accent mt-12 -rotate-1 text-center text-2xl text-accent-dark">
              — sinngemäß, Arnold Schwarzenegger
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
