import { CtaBanner } from "@/components/sections/home/CtaBanner";
import { EgymFeature } from "@/components/sections/home/EgymFeature";
import { Hero } from "@/components/sections/home/Hero";
import { KursplanPreview } from "@/components/sections/home/KursplanPreview";
import { NewsTeaser } from "@/components/sections/home/NewsTeaser";
import { PreiseTeaser } from "@/components/sections/home/PreiseTeaser";
import { PullQuote } from "@/components/sections/home/PullQuote";
import { SaunaShowcase } from "@/components/sections/home/SaunaShowcase";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { TestimonialsCarousel } from "@/components/sections/home/TestimonialsCarousel";
import { TrainerBento } from "@/components/sections/home/TrainerBento";
import { UspStrip } from "@/components/sections/home/UspStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <UspStrip />
      <ServicesGrid />
      <EgymFeature />
      <PullQuote />
      <TrainerBento />
      <SaunaShowcase />
      <KursplanPreview />
      <PreiseTeaser />
      <TestimonialsCarousel />
      <NewsTeaser />
      <CtaBanner />
    </>
  );
}
