import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { RoundIconButton } from "@/components/ui/RoundIconButton";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { GALLERY } from "@/lib/content/media";

// §4.2 Section 9 — "Galerie Mini": sechs Bilder, Link zur vollen Galerie.
const spans = ["sm:col-span-2 sm:row-span-2", "", "", "", "", ""];

export function GalleryMini() {
  const images = GALLERY.slice(0, 6);

  return (
    <section className="bg-bg py-24 lg:py-32">
      <div className="container-grid">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow mb-4">Galerie</p>
            <SplitHeading
              as="h2"
              className="text-h1 max-w-[16ch] font-display font-medium leading-[1.05] tracking-[-0.01em]"
            >
              Sieh dich bei uns um.
            </SplitHeading>
          </div>
          <Link href="/galerie" aria-label="Zur Galerie">
            <RoundIconButton
              direction="up-right"
              variant="solid"
              size="lg"
              ariaLabel="Zur Galerie"
            />
          </Link>
        </div>

        <div className="grid auto-rows-[180px] gap-3 sm:grid-cols-3 lg:auto-rows-[220px] lg:grid-cols-4">
          {images.map((img, i) => (
            <RevealOnScroll
              key={img.src}
              delay={i * 0.03}
              className={spans[i] ?? ""}
            >
              <Link
                href="/galerie"
                className="group relative block h-full overflow-hidden rounded-card border border-border bg-bg-elevated"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {img.alt}
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
