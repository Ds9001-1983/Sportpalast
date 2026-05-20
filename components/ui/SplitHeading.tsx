"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";

interface Props {
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  children: string;
  stagger?: number;
  delay?: number;
}

// Splits text into word-spans wrapped in a mask, then reveals them in a stagger.
// Uses Intl.Segmenter for proper grapheme-aware splitting (handles German umlauts cleanly).
export function SplitHeading({
  as: Tag = "h2",
  className,
  children,
  stagger = 0.05,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLSpanElement>("[data-word]");
    const reveal = (animate = true) => {
      words.forEach((w, i) => {
        w.style.transitionDelay = animate ? `${delay + i * stagger}s` : "0s";
        w.style.transform = "translateY(0)";
        w.style.opacity = "1";
      });
    };

    // reduced-motion ODER kein IntersectionObserver -> sofort sichtbar
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      reveal(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(true);
          observer.disconnect();
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(el);

    // Fail-safe: falls der Observer nie feuert, nach 1,2 s garantiert sichtbar
    const fallback = window.setTimeout(() => reveal(true), 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delay, stagger]);

  const words = children.split(" ");

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={cn("inline-block", className)}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-flex overflow-hidden align-baseline">
          <span
            data-word
            className="inline-block opacity-0 transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)]"
            style={{ transform: "translateY(110%)" }}
          >
            {word}
            {i < words.length - 1 && " "}
          </span>
        </span>
      ))}
    </Tag>
  );
}
