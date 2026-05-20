import { cn } from "@/lib/utils/cn";

type Props = {
  size?: number | string;
  className?: string;
  spinning?: boolean;
};

// 8-strahliger Stern wie im Rhinos-Vorbild — Strahlen verjüngen zur Mitte,
// gebildet aus 8 spitzen Tropfen-Pfaden rund um einen Mittelpunkt.
export function Asterisk({ size = 64, className, spinning = false }: Props) {
  // Ein einzelner Strahl als Pfad (von Center nach außen)
  const ray =
    "M50 50 C 48 36, 47 24, 50 4 C 53 24, 52 36, 50 50 Z";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden
      className={cn(
        "text-accent",
        spinning && "motion-safe:animate-[spin_18s_linear_infinite]",
        className,
      )}
    >
      <g fill="currentColor">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <path key={deg} d={ray} transform={`rotate(${deg} 50 50)`} />
        ))}
      </g>
    </svg>
  );
}
