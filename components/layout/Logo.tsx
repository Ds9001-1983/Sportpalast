import Link from "next/link";
import { cn } from "@/lib/utils/cn";

// Original brand logo SVG lives in /public/brand/logo-white.svg.
// Embedded via plain <img> (Next/Image is unnecessary for static SVG and
// blocks CSS color overrides).
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
        src="/brand/logo-white.svg"
        alt="Sportpalast"
        className={cn("w-auto", height)}
      />
    </Link>
  );
}
