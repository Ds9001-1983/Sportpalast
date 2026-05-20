import { cn } from "@/lib/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
  variant?: "dark" | "light";
};

export function Pill({ children, className, dot, variant = "dark" }: Props) {
  const styles =
    variant === "dark"
      ? "border-border-strong bg-bg-elevated/40 text-fg-muted backdrop-blur"
      : "border-ink-border-strong bg-cream-elevated/70 text-ink-muted";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.18em]",
        styles,
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />}
      {children}
    </span>
  );
}
