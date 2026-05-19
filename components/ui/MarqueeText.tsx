"use client";

import { cn } from "@/lib/utils/cn";

interface Props {
  items: string[];
  speed?: number;
  className?: string;
  separator?: React.ReactNode;
}

export function MarqueeText({
  items,
  speed = 40,
  className,
  separator,
}: Props) {
  const sep = separator ?? <span className="mx-8 text-brand">●</span>;
  const stream = (
    <div className="flex shrink-0 items-center whitespace-nowrap">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center">
          <span>{item}</span>
          {sep}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden border-y border-border py-5 text-[clamp(1rem,1.5vw,1.5rem)] font-display font-semibold uppercase tracking-tight",
        className,
      )}
      aria-hidden
    >
      <div
        className="flex animate-[marquee_linear_infinite] gap-0 will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${speed}s` }}
      >
        {stream}
        {stream}
        {stream}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-33.333%,0,0); }
        }
      `}</style>
    </div>
  );
}
