import { PRICES, type PlanSlug, type DurationKey, STARTER_PACKAGE } from "./content/prices";

export interface PriceQuote {
  planName: string;
  durationLabel: string;
  monthly: number;
  totalFirstYear: number;
  totalCommitment: number;
  starterPackage: number;
  cancellable: boolean;
}

export function calculatePrice(
  planSlug: PlanSlug,
  duration: DurationKey,
): PriceQuote | null {
  const plan = PRICES.find((p) => p.slug === planSlug);
  if (!plan) return null;
  const variant = plan.variants.find((v) => v.duration === duration);
  if (!variant) return null;

  const months = duration === 0 ? 12 : duration;
  return {
    planName: plan.name,
    durationLabel: variant.durationLabel,
    monthly: variant.monthly,
    totalFirstYear: variant.monthly * 12 + STARTER_PACKAGE,
    totalCommitment: variant.monthly * months + STARTER_PACKAGE,
    starterPackage: STARTER_PACKAGE,
    cancellable: duration === 0,
  };
}
