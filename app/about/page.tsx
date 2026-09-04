import {
  AboutHeroSection,
  WhoWeAreSection,
  JourneySection,
  VisionMissionSection,
  CoreValuesSection,
  FocusImpactSection,
  SdgsSection,
  TrustLegalitySection,
  ClosingCtaSection,
} from "@/components/section/about";

export default function AboutPage() {
  return (
    <main className="flex-1 w-full flex flex-col">
      {/* 1. Hero Section */}
      <AboutHeroSection />

      {/* 2. Siapa Kami? Section */}
      <WhoWeAreSection />

      {/* 3. Perjalanan Kami Section */}
      <JourneySection />

      {/* 4. Visi & Misi Section */}
      <VisionMissionSection />

      {/* 5. Core Values Section */}
      <CoreValuesSection />

      {/* 6. Focus & Impact Section */}
      <FocusImpactSection />

      {/* 7. SDGs Section */}
      <SdgsSection />

      {/* 8. Trust & Legalitas Section */}
      <TrustLegalitySection />

      {/* 9. Closing CTA Section */}
      <ClosingCtaSection />
    </main>
  );
}
