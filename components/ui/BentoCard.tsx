import { cn } from "@/lib/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light" | "cream";
  highlighted?: boolean;
  as?: "div" | "article" | "section" | "li";
};

export function BentoCard({
  children,
  className,
  variant = "dark",
  highlighted = false,
  as = "div",
}: Props) {
  const Tag = as;
  const styles = {
    dark: "bg-bg-elevated text-fg border-border",
    light: "bg-cream-elevated text-ink border-ink-border",
    cream: "bg-cream text-ink border-ink-border",
  }[variant];

  return (
    <Tag
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-card)] border p-8 lg:p-10 transition-all duration-300",
        styles,
        highlighted
          ? "border-2 border-accent shadow-(--shadow-lg)"
          : "hover:border-border-strong",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
