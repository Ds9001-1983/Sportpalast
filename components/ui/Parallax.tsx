"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  children: React.ReactNode;
  /**
   * Vertikale Verschiebung in px über die Scroll-Distanz.
   * Positiv = driftet nach unten (trailing), negativ = nach oben.
   */
  offset?: number;
  className?: string;
};

/**
 * Dezente, scroll-getriebene Parallax-Verschiebung des Wrapper-Elements.
 * Der Translate liegt bewusst auf diesem Wrapper-<div>, nicht auf den Kindern —
 * so bleiben eigene Transforms der Kinder (z. B. die rotierende Asterisk)
 * erhalten. Respektiert `prefers-reduced-motion` (dann keine Bewegung).
 */
export function Parallax({ children, offset = 100, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.to(el, {
        y: offset,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=520",
          scrub: 0.6,
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
