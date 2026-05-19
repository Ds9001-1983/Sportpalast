import { Pill } from "@/components/ui/Pill";
import { SplitHeading } from "@/components/ui/SplitHeading";

interface Props {
  eyebrow: string;
  title: string;
  intro?: string;
}

export function PageHero({ eyebrow, title, intro }: Props) {
  return (
    <section className="relative overflow-hidden pt-44 pb-24 lg:pt-52 lg:pb-32">
      <div className="container-grid">
        <Pill dot>{eyebrow}</Pill>
        <div className="mt-6 max-w-4xl">
          <SplitHeading as="h1" className="text-h1 font-display">
            {title}
          </SplitHeading>
        </div>
        {intro && (
          <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-fg-muted">
            {intro}
          </p>
        )}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-[36rem] bg-[radial-gradient(circle_at_50%_30%,rgba(0,172,167,0.18),transparent_60%)]"
      />
    </section>
  );
}
