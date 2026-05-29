"use client";

import { cn } from "@/lib/utils/cn";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

type Direction = "left" | "right" | "up-right";

type Props = {
  direction?: Direction;
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  surface?: "dark" | "light";
  onClick?: () => void;
  ariaLabel: string;
  className?: string;
};

const ICONS: Record<Direction, typeof ArrowLeft> = {
  left: ArrowLeft,
  right: ArrowRight,
  "up-right": ArrowUpRight,
};

const sizeMap = {
  sm: { box: "size-10", icon: 18 },
  md: { box: "size-14", icon: 22 },
  lg: { box: "size-20", icon: 28 },
};

export function RoundIconButton({
  direction = "right",
  variant = "solid",
  size = "md",
  surface = "dark",
  onClick,
  ariaLabel,
  className,
}: Props) {
  const Icon = ICONS[direction];
  const { box, icon } = sizeMap[size];

  const styles =
    variant === "solid"
      ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-bright)]"
      : surface === "dark"
        ? "border border-border-strong text-fg hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]"
        : "border border-ink-border-strong text-ink hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)] hover:text-[var(--color-accent)]";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-all duration-200",
        box,
        styles,
        className,
      )}
    >
      <Icon size={icon} strokeWidth={1.6} />
    </button>
  );
}
