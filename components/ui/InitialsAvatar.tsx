import { cn } from "@/lib/utils/cn";

const SURFACES = [
  "bg-[var(--color-sage)]",
  "bg-[var(--color-sky)]",
  "bg-[var(--color-accent)]",
] as const;

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function surfaceFor(seed: string) {
  let sum = 0;
  for (let i = 0; i < seed.length; i++) sum += seed.charCodeAt(i);
  return SURFACES[sum % SURFACES.length];
}

/**
 * Gestalteter Platzhalter für Teammitglieder ohne Foto: Initialen in Fraunces
 * auf rotierender Markenfläche (sage/sky/terracotta) — statt leerem Gradient.
 */
export function InitialsAvatar({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-0 flex items-center justify-center",
        surfaceFor(name),
        className,
      )}
    >
      <span className="font-display text-6xl font-medium text-white/85">
        {initials(name)}
      </span>
    </div>
  );
}
