import { AboutMini } from "@/components/sections/home/AboutMini";
import { CtaBanner } from "@/components/sections/home/CtaBanner";
import { EgymFeature } from "@/components/sections/home/EgymFeature";
import { GalleryMini } from "@/components/sections/home/GalleryMini";
import { Hero } from "@/components/sections/home/Hero";
import { KursplanPreview } from "@/components/sections/home/KursplanPreview";
import { LocationSection } from "@/components/sections/home/LocationSection";
import { NewsTeaser } from "@/components/sections/home/NewsTeaser";
import { PreiseTeaser } from "@/components/sections/home/PreiseTeaser";
import { PullQuote } from "@/components/sections/home/PullQuote";
import { SaunaShowcase } from "@/components/sections/home/SaunaShowcase";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { TestimonialsCarousel } from "@/components/sections/home/TestimonialsCarousel";
import { TrainerBento } from "@/components/sections/home/TrainerBento";
import { UspStrip } from "@/components/sections/home/UspStrip";

// Section-Reihenfolge nach Referenz §4.2 — die vier Zusatz-Sections
// (EgymFeature, PullQuote, SaunaShowcase, NewsTeaser) sind bewusst erhalten
// und an dramaturgisch passender Stelle eingeordnet.
export default function HomePage() {
  return (
    <>
      <Hero />
      <UspStrip />
      <AboutMini />
      <ServicesGrid />
      <EgymFeature />
      <KursplanPreview />
      <PullQuote />
      <TrainerBento />
      <SaunaShowcase />
      <PreiseTeaser />
      <TestimonialsCarousel />
      <GalleryMini />
      <NewsTeaser />
      <LocationSection />
      <CtaBanner />
    </>
  );
}
