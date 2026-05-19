import Link from "next/link";
import { cn } from "@/lib/utils/cn";

// Inline SVG re-creation of the brand mark — solid white wordmark
// "SPORTPALAST" with the brand-teal underscore + accented "S".
// Inlining keeps the logo as part of the DOM (animatable via GSAP) and
// avoids an extra HTTP request. Original SVG is preserved at
// /public/brand/logo-white.svg for any external embed needs.
export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  const inner = (
    <span className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 32 32"
        className="h-6 w-6 shrink-0"
        aria-hidden
      >
        <rect width="32" height="32" rx="6" fill="#00ACA7" />
        <path
          d="M11.5 9h8a1.5 1.5 0 0 1 1.5 1.5V12h-3v-1H12v3h6.5A2.5 2.5 0 0 1 21 16.5v5A1.5 1.5 0 0 1 19.5 23h-8A1.5 1.5 0 0 1 10 21.5V20h3v1h6v-3h-6.5A2.5 2.5 0 0 1 10 15.5v-5A1.5 1.5 0 0 1 11.5 9Z"
          fill="#0a0a0b"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-black uppercase tracking-[0.14em] text-fg">
          Sportpalast
        </span>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.32em] text-fg-muted">
          Lindlar
        </span>
      </span>
    </span>
  );

  return (
    <Link
      href={href}
      aria-label="Sportpalast Lindlar — Startseite"
      className={cn("inline-flex items-center", className)}
    >
      {inner}
    </Link>
  );
}
