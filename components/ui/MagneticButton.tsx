"use client";

import { forwardRef, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { useSound } from "@/components/providers/SoundProvider";

type Variant = "primary" | "ghost" | "outline" | "pill-solid" | "pill-ink";

interface Props extends React.HTMLAttributes<HTMLElement> {
  href?: string;
  variant?: Variant;
  strength?: number;
  children: React.ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-fg text-bg hover:bg-brand hover:text-bg before:bg-brand",
  ghost: "text-fg hover:text-brand",
  outline:
    "border border-border-strong text-fg hover:border-brand hover:text-brand",
  "pill-solid":
    "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-bright)]",
  "pill-ink":
    "bg-ink text-cream hover:bg-[var(--color-accent-dark)]",
};

export const MagneticButton = forwardRef<HTMLElement, Props>(function MagneticButton(
  { href, variant = "primary", strength = 0.35, className, children, ...rest },
  forwardedRef,
) {
  const localRef = useRef<HTMLElement>(null);
  const ref = (forwardedRef as React.RefObject<HTMLElement>) ?? localRef;
  const { play } = useSound();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId = 0;
    let targetX = 0,
      targetY = 0,
      x = 0,
      y = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      targetX = (e.clientX - (r.left + r.width / 2)) * strength;
      targetY = (e.clientY - (r.top + r.height / 2)) * strength;
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };
    const tick = () => {
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      rafId = requestAnimationFrame(tick);
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref, strength]);

  const handleEnter = () => play("hover");
  const handleClick = () => play("click");

  const base = cn(
    "relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-300 ease-out will-change-transform",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        className={base}
        onMouseEnter={handleEnter}
        onClick={handleClick}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      className={base}
      onMouseEnter={handleEnter}
      onClick={handleClick}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
});
