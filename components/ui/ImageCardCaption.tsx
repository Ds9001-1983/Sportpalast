import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Props = {
  src: string;
  alt: string;
  caption: string;
  eyebrow?: string;
  href?: string;
  aspect?: "portrait" | "landscape" | "square";
  className?: string;
  priority?: boolean;
};

const aspectMap = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
};

export function ImageCardCaption({
  src,
  alt,
  caption,
  eyebrow,
  href,
  aspect = "landscape",
  className,
  priority = false,
}: Props) {
  const wrapperClass = cn(
    "group relative block overflow-hidden rounded-[var(--radius-card)]",
    aspectMap[aspect],
    className,
  );

  const inner = (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width:1024px) 50vw, 100vw"
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-5 bottom-5 flex flex-col gap-1">
        {eyebrow && (
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
            {eyebrow}
          </span>
        )}
        <span className="font-display text-lg font-black uppercase leading-tight tracking-tight text-white lg:text-2xl">
          {caption}
        </span>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={wrapperClass}>
        {inner}
      </Link>
    );
  }
  return <div className={wrapperClass}>{inner}</div>;
}
