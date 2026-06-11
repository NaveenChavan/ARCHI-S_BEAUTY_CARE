import { HeroSection } from "@/sections/HeroSection";
import { AboutClinicSection } from "@/sections/AboutClinicSection";
import { FeaturedServicesSection } from "@/sections/FeaturedServicesSection";
import { WhyChooseUsSection } from "@/sections/WhyChooseUsSection";
import { TransformationGallerySection } from "@/sections/TransformationGallerySection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { FinalCTASection } from "@/sections/FinalCTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutClinicSection />
      <FeaturedServicesSection />
      <WhyChooseUsSection />
      <TransformationGallerySection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}
