import {
  HeroSection,
  ImpactSnapshotSection,
  FeaturedVideosSection,
  ProgramsSection,
  CollaborationSection,
  LatestNewsSection,
  FinalCtaSection,
} from "@/components/section/home";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <HeroSection />
      <ImpactSnapshotSection />
      <FeaturedVideosSection />
      <ProgramsSection />
      <CollaborationSection />
      <LatestNewsSection />
      <FinalCtaSection />
    </main>
  );
}
