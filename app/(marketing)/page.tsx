import { Hero } from "@/components/sections/home/Hero";
import { UspStrip } from "@/components/sections/home/UspStrip";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { EgymFeature } from "@/components/sections/home/EgymFeature";
import { SaunaShowcase } from "@/components/sections/home/SaunaShowcase";
import { KursplanPreview } from "@/components/sections/home/KursplanPreview";
import { PreiseTeaser } from "@/components/sections/home/PreiseTeaser";
import { TestimonialsCarousel } from "@/components/sections/home/TestimonialsCarousel";
import { NewsTeaser } from "@/components/sections/home/NewsTeaser";
import { CtaBanner } from "@/components/sections/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <UspStrip />
      <ServicesGrid />
      <EgymFeature />
      <SaunaShowcase />
      <KursplanPreview />
      <PreiseTeaser />
      <TestimonialsCarousel />
      <NewsTeaser />
      <CtaBanner />
    </>
  );
}
