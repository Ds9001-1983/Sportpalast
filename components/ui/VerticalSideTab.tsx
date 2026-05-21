import { cn } from "@/lib/utils/cn";

type Props = {
  label: string;
  className?: string;
  variant?: "dark" | "light";
};

export function VerticalSideTab({ label, className, variant = "dark" }: Props) {
  const surface = variant === "dark"
    ? "bg-bg-elevated text-fg-muted border-border"
    : "bg-cream-elevated text-ink-muted border-ink-border";
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-[var(--radius-card)] border px-4 py-8",
        surface,
        className,
      )}
    >
      <span
        className="font-display text-h4 font-black uppercase tracking-tight"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {label}
      </span>
    </div>
  );
}
