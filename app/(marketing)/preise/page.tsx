import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TarifKonfigurator } from "@/components/sections/preise/TarifKonfigurator";
import type { PlanSlug } from "@/lib/content/prices";

export const metadata: Metadata = {
  title: "Preise & Tarife",
  description:
    "Mitgliedschaft im Sportpalast Lindlar ab 39,95 € / Monat. Club Abo, Reha Plus, Jugend Abo — alles inklusive Geräte, Kurse, EGYM, Sauna.",
};

export default async function PreisePage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const params = await searchParams;
  const initial = (
    ["club", "reha-plus", "jugend"].includes(params.plan ?? "")
      ? params.plan
      : "club"
  ) as PlanSlug;

  return (
    <>
      <PageHero
        eyebrow="Preise"
        title="Faire Tarife. Alles drin."
        intro="Drei Tarife für jede Lebenslage. Starterpaket einmalig 79,95 € — danach kein Aufpreis für Kurse, EGYM oder Sauna."
      />
      <TarifKonfigurator initialPlan={initial} />
    </>
  );
}
