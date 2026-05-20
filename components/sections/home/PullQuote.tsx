"use client";

import { useEffect, useRef } from "react";
import { Asterisk } from "@/components/ui/Asterisk";
import { AvatarChip } from "@/components/ui/AvatarChip";
import { TEAM_PHOTOS } from "@/lib/content/media";

type Token = string | { avatar: string; alt: string };

// Quote als Token-Folge — Wörter + inline-Avatare. Ermöglicht den
// scroll-getriebenen Wort-für-Wort-Aufhell-Effekt.
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

const DIM = 0.18;

export function PullQuote() {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>("[data-qw]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      words.forEach((w) => (w.style.opacity = "1"));
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85; // Reveal beginnt, wenn Quote-Oberkante hier ist
      const end = vh * 0.35; // …und ist hier abgeschlossen
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
      const head = progress * (words.length + 4); // +4 = sanfter Vorlauf
      words.forEach((w, i) => {
        const o = Math.min(1, Math.max(DIM, head - i));
        w.style.opacity = o.toFixed(3);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    // Initial gedimmt + erstes Update
    words.forEach((w) => (w.style.opacity = String(DIM)));
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative bg-bg py-24 lg:py-32">
      <div className="container-grid">
        <div className="relative">
          <Asterisk
            size={120}
            spinning
            className="pointer-events-none absolute -right-2 -top-8 lg:right-12 lg:-top-4 lg:size-44"
          />
          <blockquote
            ref={ref}
            className="mx-auto max-w-[22ch] text-center font-display text-[clamp(2rem,5.5vw,5rem)] font-black uppercase leading-[1.05] tracking-[-0.03em] text-fg"
          >
            <p>
              {TOKENS.map((t, i) =>
                typeof t === "string" ? (
                  <span
                    key={i}
                    data-qw
                    className="transition-opacity duration-300 ease-out"
                  >
                    {t}{" "}
                  </span>
                ) : (
                  <span
                    key={i}
                    data-qw
                    className="transition-opacity duration-300 ease-out"
                  >
                    <AvatarChip
                      src={TEAM_PHOTOS[t.avatar]}
                      alt={t.alt}
                      size="lg"
                    />{" "}
                  </span>
                ),
              )}
            </p>
          </blockquote>
          <p className="mt-12 text-center font-mono text-xs uppercase tracking-[0.22em] text-fg-subtle">
            — Sinngemäß, Arnold Schwarzenegger
          </p>
        </div>
      </div>
    </section>
  );
}
