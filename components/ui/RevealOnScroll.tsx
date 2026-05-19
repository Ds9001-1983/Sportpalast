"use client";

import { useEffect, useRef, type ElementType, type CSSProperties } from "react";
import { cn } from "@/lib/utils/cn";

interface Props {
  as?: ElementType;
  className?: string;
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  threshold?: number;
  style?: CSSProperties;
}

export function RevealOnScroll({
  as: Tag = "div",
  className,
  children,
  delay = 0,
  direction = "up",
  threshold = 0.15,
  style,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          el.style.transitionDelay = `${delay}s`;
          el.style.opacity = "1";
          el.style.transform = "translate3d(0,0,0)";
          observer.disconnect();
        });
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const initial =
    direction === "up"
      ? "translate3d(0,40px,0)"
      : direction === "left"
        ? "translate3d(40px,0,0)"
        : direction === "right"
          ? "translate3d(-40px,0,0)"
          : "none";

  return (
    <Tag
      ref={ref}
      className={cn(
        "opacity-0 transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] will-change-[opacity,transform]",
        className,
      )}
      style={{ transform: initial, ...style }}
    >
      {children}
    </Tag>
  );
}
