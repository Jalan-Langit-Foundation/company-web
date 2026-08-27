import {
  HeroSection,
  ImpactSnapshotSection,
  AboutTeaserSection,
  ContributionAreasSection,
  ProgramsHighlightSection,
  ImpactStorySection,
  CollaborationSection,
  LatestNewsSection,
  ClosingCtaSection,
} from "@/components/section/home";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      <HeroSection />
      <ImpactSnapshotSection />
      <AboutTeaserSection />
      <ContributionAreasSection />
      <ProgramsHighlightSection />
      <ImpactStorySection />
      <CollaborationSection />
      <LatestNewsSection />
      <ClosingCtaSection />
    </main>
  );
}

