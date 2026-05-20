import Image from "next/image";
import { cn } from "@/lib/utils/cn";

type Props = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const dimensions = {
  sm: { box: "1.1em", px: 32 },
  md: { box: "1.4em", px: 48 },
  lg: { box: "1.8em", px: 72 },
};

export function AvatarChip({ src, alt, size = "md", className }: Props) {
  const d = dimensions[size];
  return (
    <span
      className={cn(
        "relative mx-[0.15em] inline-block translate-y-[0.12em] overflow-hidden rounded-full align-baseline ring-2 ring-[var(--color-accent)]/40",
        className,
      )}
      style={{ width: d.box, height: d.box }}
    >
      <Image
        src={src}
        alt={alt}
        width={d.px}
        height={d.px}
        sizes="80px"
        className="h-full w-full object-cover"
      />
    </span>
  );
}
