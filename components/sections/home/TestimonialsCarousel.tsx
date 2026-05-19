"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content/testimonials";
import { cn } from "@/lib/utils/cn";

export function TestimonialsCarousel() {
  const [ref, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const update = () => {
      setSelected(embla.selectedScrollSnap());
      setCount(embla.scrollSnapList().length);
    };
    update();
    embla.on("select", update);
    embla.on("reInit", update);
  }, [embla]);

  const scrollTo = useCallback(
    (i: number) => embla && embla.scrollTo(i),
    [embla],
  );

  return (
    <section className="py-32 lg:py-40">
      <div className="container-grid">
        <p className="eyebrow mb-4">Stimmen</p>
        <h2 className="text-h1 mb-12 max-w-[14ch] font-display font-bold">
          Was unsere Mitglieder sagen.
        </h2>

        <div ref={ref} className="overflow-hidden">
          <ul className="flex">
            {TESTIMONIALS.map((t, i) => (
              <li
                key={i}
                className="min-w-0 flex-[0_0_100%] pr-6 lg:flex-[0_0_60%]"
              >
                <figure className="flex h-full flex-col gap-8 rounded-3xl border border-border bg-bg-elevated/40 p-10 lg:p-14">
                  <span className="font-display text-7xl leading-none text-brand">
                    “
                  </span>
                  <blockquote className="text-h3 font-display font-medium leading-snug">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-auto">
                    <p className="font-medium">{t.author}</p>
                    {t.role && (
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                        {t.role}
                      </p>
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Stimme ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === selected
                    ? "w-8 bg-brand"
                    : "w-1.5 bg-border-strong hover:bg-fg-muted",
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => embla?.scrollPrev()}
              aria-label="Vorherige"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong hover:border-brand hover:text-brand"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => embla?.scrollNext()}
              aria-label="Nächste"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong hover:border-brand hover:text-brand"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
