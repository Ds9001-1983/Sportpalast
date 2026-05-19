import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { KursplanInteractive } from "@/components/sections/kursplan/KursplanInteractive";

export const metadata: Metadata = {
  title: "Kursplan",
  description:
    "Über 30 Kurse pro Woche im Sportpalast Lindlar — von Yoga bis HOT IRON. Filtere nach Tag und Trainingsziel.",
};

export default function KursplanPage() {
  return (
    <>
      <PageHero
        eyebrow="Kursplan"
        title="Über 30 Kurse. Jede Woche."
        intro="Filtere nach Tag und Trainingsziel — von ruhigen Yoga-Stunden bis zu intensiven HIIT-Sessions ist alles dabei."
      />
      <KursplanInteractive />
    </>
  );
}
