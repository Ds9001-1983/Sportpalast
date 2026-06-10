"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Editorial-Bildfläche mit dezentem Scroll-Parallax (§3.4):
 * Bild startet bei scale 1.08 und driftet beim Scrollen auf 1.0 zurück.
 * Respektiert prefers-reduced-motion (dann statisch).
 */
export function ParallaxImage({
  src,
  alt,
  className,
  sizes = "100vw",
  priority = false,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      img,
      { scale: 1.08, yPercent: -4 },
      {
        scale: 1,
        yPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  });

  return (
    <div
      ref={wrapRef}
      className={cn("relative overflow-hidden", className)}
    >
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  );
}
