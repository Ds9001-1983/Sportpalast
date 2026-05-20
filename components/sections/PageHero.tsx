import { Asterisk } from "@/components/ui/Asterisk";
import { Pill } from "@/components/ui/Pill";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { cn } from "@/lib/utils/cn";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  variant?: "light" | "dark";
};

export function PageHero({ eyebrow, title, intro, variant = "light" }: Props) {
  const isLight = variant === "light";

  return (
    <section className="relative pt-28 pb-12 lg:pt-32 lg:pb-16">
      <div className="container-grid">
        <div
          className={cn(
            "relative overflow-hidden rounded-[var(--radius-frame)] border px-7 py-14 lg:px-16 lg:py-24",
            isLight
              ? "border-ink-border bg-cream text-ink"
              : "border-border bg-bg-elevated text-fg",
          )}
        >
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-4xl flex-1">
              <Pill dot variant={isLight ? "light" : "dark"}>
                {eyebrow}
              </Pill>
              <div className="mt-6">
                <SplitHeading
                  as="h1"
                  className="text-h1 font-display font-black uppercase leading-[0.92] tracking-[-0.04em]"
                >
                  {title}
                </SplitHeading>
              </div>
              {intro && (
                <p
                  className={cn(
                    "mt-8 max-w-2xl text-balance text-lg leading-relaxed",
                    isLight ? "text-ink-muted" : "text-fg-muted",
                  )}
                >
                  {intro}
                </p>
              )}
            </div>
            <Asterisk
              size={92}
              spinning
              className="shrink-0 self-end lg:self-start"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
