"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Asterisk } from "@/components/ui/Asterisk";
import { RoundIconButton } from "@/components/ui/RoundIconButton";
import { SplitHeading } from "@/components/ui/SplitHeading";
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
    <section className="bg-bg py-24 lg:py-32">
      <div className="container-grid">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow mb-4">Stimmen</p>
            <SplitHeading
              as="h2"
              className="text-h1 max-w-[14ch] font-display font-black uppercase leading-[0.92] tracking-[-0.04em]"
            >
              Was unsere Mitglieder sagen.
            </SplitHeading>
          </div>
          <div className="flex items-center gap-3">
            <RoundIconButton
              direction="left"
              variant="outline"
              surface="dark"
              size="md"
              ariaLabel="Vorherige Stimme"
              onClick={() => embla?.scrollPrev()}
            />
            <RoundIconButton
              direction="right"
              variant="solid"
              size="lg"
              ariaLabel="Nächste Stimme"
              onClick={() => embla?.scrollNext()}
            />
          </div>
        </div>

        <div ref={ref} className="overflow-hidden">
          <ul className="flex">
            {TESTIMONIALS.map((t, i) => (
              <li
                key={i}
                className="min-w-0 flex-[0_0_100%] pr-6 lg:flex-[0_0_70%]"
              >
                <figure className="relative flex h-full flex-col gap-8 overflow-hidden rounded-card border border-border bg-bg-elevated p-10 lg:p-14">
                  <Asterisk
                    size={48}
                    className="absolute right-8 top-8"
                  />
                  <blockquote className="text-h3 mt-6 max-w-3xl font-display font-black uppercase leading-[1.05] tracking-[-0.02em]">
                    „{t.quote}"
                  </blockquote>
                  <figcaption className="mt-auto">
                    <p className="font-display font-black uppercase tracking-tight">
                      {t.author}
                    </p>
                    {t.role && (
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle">
                        {t.role}
                      </p>
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex items-center justify-center gap-1.5">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Stimme ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === selected
                  ? "w-8 bg-[var(--color-accent)]"
                  : "w-1.5 bg-border-strong hover:bg-fg-muted",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
