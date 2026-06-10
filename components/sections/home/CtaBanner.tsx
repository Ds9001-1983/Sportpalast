import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Asterisk } from "@/components/ui/Asterisk";
import { RoundIconButton } from "@/components/ui/RoundIconButton";
import { SplitHeading } from "@/components/ui/SplitHeading";

export function CtaBanner() {
  return (
    <section className="bg-bg py-24 lg:py-32">
      <div className="container-grid">
        <div className="grid items-end gap-10 border-t border-border pt-16 lg:grid-cols-[1fr_auto] lg:pt-24">
          <div className="flex items-start gap-6">
            <Asterisk
              size={92}
              spinning
              className="hidden shrink-0 lg:block"
            />
            <SplitHeading
              as="h2"
              className="text-display max-w-[18ch] font-display font-medium leading-[1.02] tracking-[-0.01em]"
            >
              Hol dir deinen Fit Lifestyle — einfach und gut gelaunt.
            </SplitHeading>
          </div>
          <Link href="/probetraining" aria-label="Probetraining vereinbaren">
            <RoundIconButton
              direction="up-right"
              variant="outline"
              surface="dark"
              size="lg"
              ariaLabel="Probetraining vereinbaren"
              className="size-24 border-dashed hover:border-solid"
            />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-center">
          <p className="max-w-xl text-lg leading-relaxed text-fg-muted">
            Probetraining vereinbaren, durch den Glaspalast laufen, einen Espresso
            in der Lounge trinken. Entscheide danach.
          </p>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Link
              href="/mitgliedschaft"
              className="inline-flex items-center gap-2 rounded-pill bg-accent px-7 py-3.5 font-sans text-sm font-medium uppercase tracking-[0.12em] text-white hover:bg-accent-bright"
            >
              Mitglied werden <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/probetraining"
              className="inline-flex items-center gap-2 rounded-pill border border-border-strong px-7 py-3.5 font-sans text-sm font-medium uppercase tracking-[0.12em] text-fg hover:border-accent hover:text-accent"
            >
              Probetraining buchen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
