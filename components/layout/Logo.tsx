import Link from "next/link";
import { cn } from "@/lib/utils/cn";

// Ink-Logo-Variante (/public/brand/logo-ink.svg) für die helle Palette —
// Schrift in Warm-Black (#1F1A14), Monogramm in Terracotta. Die weiße
// Original-Variante (logo-white.svg) bleibt für dunkle Flächen erhalten.
// Embedded via plain <img> (Next/Image ist für statische SVGs unnötig).
export function Logo({
  className,
  href = "/",
  size = "md",
}: {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
}) {
  const height = size === "sm" ? "h-7" : size === "lg" ? "h-12" : "h-9";

  return (
    <Link
      href={href}
      aria-label="Sportpalast Lindlar — Startseite"
      className={cn("inline-flex items-center", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-ink.svg"
        alt="Sportpalast"
        className={cn("w-auto", height)}
      />
    </Link>
  );
}
