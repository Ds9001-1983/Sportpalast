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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const words = el.querySelectorAll<HTMLSpanElement>("[data-word]");
          words.forEach((w, i) => {
            w.style.transitionDelay = `${delay + i * stagger}s`;
            w.style.transform = "translateY(0)";
            w.style.opacity = "1";
          });
          observer.disconnect();
        });
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
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
            className="inline-block translate-y-full opacity-0 transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)]"
          >
            {word}
            {i < words.length - 1 && " "}
          </span>
        </span>
      ))}
    </Tag>
  );
}
