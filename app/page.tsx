import {
  HeroSection,
  ImpactSnapshotSection,
  FeaturedVideosSection,
  ProgramsSection,
  CollaborationSection,
  LatestNewsSection,
  FinalCtaSection,
} from "@/components/section/home";
import { Reveal } from "@/components/ui/reveal";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <HeroSection />
      <Reveal>
        <ImpactSnapshotSection />
      </Reveal>
      <Reveal>
        <FeaturedVideosSection />
      </Reveal>
      <Reveal>
        <ProgramsSection />
      </Reveal>
      <Reveal>
        <CollaborationSection />
      </Reveal>
      <Reveal>
        <LatestNewsSection />
      </Reveal>
      <Reveal>
        <FinalCtaSection />
      </Reveal>
    </main>
  );
}
