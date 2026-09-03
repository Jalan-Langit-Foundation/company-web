import {
  HeroSection,
  ImpactSnapshotSection,
  AboutTeaserSection,
  ProgramsSection,
  FeaturedVideosSection,
  CollaborationSection,
  LatestNewsSection,
  FinalCtaSection,
} from "@/components/section/home";
import { Reveal } from "@/components/ui/reveal";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Impact Snapshot Section (Gradient Flow) */}
      <Reveal>
        <ImpactSnapshotSection />
      </Reveal>

      {/* 3. About Teaser Section (Solid White) */}
      <Reveal>
        <AboutTeaserSection />
      </Reveal>

      {/* 4. Programs Section (Soft Blue Accent) */}
      <Reveal>
        <ProgramsSection />
      </Reveal>

      {/* 5. Featured Videos Section (Solid White) */}
      <Reveal>
        <FeaturedVideosSection />
      </Reveal>

      {/* 6. Collaboration Section (Soft Blue Accent) */}
      <Reveal>
        <CollaborationSection />
      </Reveal>

      {/* 7. Latest News Section (Solid White) */}
      <Reveal>
        <LatestNewsSection />
      </Reveal>

      {/* 8. Final CTA Section (Soft Blue Accent) */}
      <Reveal>
        <FinalCtaSection />
      </Reveal>
    </main>
  );
}
