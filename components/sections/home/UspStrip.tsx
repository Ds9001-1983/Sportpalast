import { MARQUEE_ITEMS } from "@/lib/content/usps";
import { MarqueeText } from "@/components/ui/MarqueeText";

export function UspStrip() {
  return (
    <section aria-label="Highlights" className="bg-cream-bg py-8 lg:py-12">
      <MarqueeText
        items={MARQUEE_ITEMS}
        speed={50}
        className="border-y-0 text-ink"
        separator={<span className="mx-10 text-[var(--color-accent)]">✱</span>}
      />
    </section>
  );
}
