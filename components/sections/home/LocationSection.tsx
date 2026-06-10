"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { MapEmbed } from "@/components/sections/kontakt/MapEmbed";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { CONTACT } from "@/lib/content/contact";
import { HOURS_STUDIO, WEEKDAYS } from "@/lib/content/opening-hours";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// §4.2 Section 10 — "Standort": Karte links, Adresse + Öffnungszeiten rechts.
export function LocationSection() {
  const pinRef = useRef<HTMLDivElement>(null);

  // Map-Pin "drop" laut §3.4 — y:-40 → 0 mit Bounce beim Reveal.
  useGSAP(() => {
    const pin = pinRef.current;
    if (!pin) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(pin, {
      y: -40,
      opacity: 0,
      duration: 0.9,
      ease: "bounce.out",
      scrollTrigger: { trigger: pin, start: "top 85%", once: true },
    });
  });

  return (
    <section className="bg-bg-alt py-24 lg:py-32">
      <div className="container-grid">
        <div className="mb-12">
          <p className="eyebrow mb-4">Standort & Anfahrt</p>
          <SplitHeading
            as="h2"
            className="text-h1 max-w-[18ch] font-display font-medium leading-[1.05] tracking-[-0.01em]"
          >
            Mitten in Lindlar. Leicht zu finden.
          </SplitHeading>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="relative">
            <MapEmbed className="h-full" marker={false} />
            <div
              ref={pinRef}
              className="pointer-events-none absolute left-1/2 top-[40%] -translate-x-1/2"
              aria-hidden
            >
              <MapPin
                size={44}
                strokeWidth={2.2}
                className="fill-[var(--color-accent)] text-white drop-shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <RevealOnScroll>
              <div className="rounded-3xl border border-border bg-bg-elevated p-7">
                <p className="eyebrow mb-3">Adresse</p>
                <p className="font-display text-xl font-medium">
                  {CONTACT.studio.name}
                </p>
                <p className="mt-1 text-fg-muted">
                  {CONTACT.studio.street}, {CONTACT.studio.zip}{" "}
                  {CONTACT.studio.city}
                </p>
                <a
                  href={`tel:${CONTACT.studio.phone.replace(/\s/g, "")}`}
                  className="mt-3 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-brand"
                >
                  <Phone size={14} /> {CONTACT.studio.phoneDisplay}
                </a>
                <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                  Über 130 kostenfreie Parkplätze direkt am Haus, Aufzug und
                  digitales Ein- und Auschecken — ankommen, einchecken,
                  loslegen.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.06}>
              <div className="rounded-3xl border border-border bg-bg-elevated p-7">
                <p className="eyebrow mb-4">Öffnungszeiten Fitness</p>
                <ul className="space-y-1.5 text-sm">
                  {WEEKDAYS.map((d) => (
                    <li key={d} className="flex justify-between gap-4">
                      <span className="text-fg-muted">{d}</span>
                      <span className="font-mono">
                        {HOURS_STUDIO[d].open} – {HOURS_STUDIO[d].close}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-4 text-sm">
                  <Link
                    href="/oeffnungszeiten"
                    className="inline-flex items-center gap-1 text-fg-muted transition-colors hover:text-brand"
                  >
                    Alle Zeiten inkl. Sauna <ArrowRight size={13} />
                  </Link>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-1 text-fg-muted transition-colors hover:text-brand"
                  >
                    Kontakt & Anfahrt <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
