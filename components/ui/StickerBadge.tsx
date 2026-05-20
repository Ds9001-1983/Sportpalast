import { cn } from "@/lib/utils/cn";

type Props = {
  size?: number;
  className?: string;
  children: React.ReactNode;
  spin?: boolean;
};

export function StickerBadge({ size = 168, className, children, spin = true }: Props) {
  return (
    <div
      className={cn("relative inline-block select-none", className)}
      style={{ width: size, height: size }}
    >
      {/* Pin/Faden oben mittig */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3"
        style={{ width: 4, height: size * 0.18 }}
      >
        <div className="mx-auto h-full w-px bg-ink/40" />
        <div className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-ink" />
      </div>
      {/* Kreis */}
      <div
        className={cn(
          "flex h-full w-full items-center justify-center rounded-full bg-[var(--color-accent)] text-white",
          spin && "motion-safe:animate-[spin_24s_linear_infinite]",
        )}
      >
        <div className="text-center font-display font-black uppercase leading-[1.0] tracking-tight">
          {children}
        </div>
      </div>
    </div>
  );
}
