import { cn } from "@/lib/utils/cn";

export function Pill({
  children,
  className,
  dot,
}: {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-elevated/40 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-muted backdrop-blur",
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-brand" />}
      {children}
    </span>
  );
}
