import { MARQUEE_ITEMS } from "@/lib/content/usps";
import { MarqueeText } from "@/components/ui/MarqueeText";

export function UspStrip() {
  return (
    <section aria-label="Highlights">
      <MarqueeText items={MARQUEE_ITEMS} speed={45} />
    </section>
  );
}
