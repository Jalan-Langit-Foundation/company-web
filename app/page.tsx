import {
  HeroSection,
  ImpactSnapshotSection,
  AboutTeaserSection,
  VisionMissionSection,
  LangitValuesSection,
  ProgramsSection,
  FeaturedVideosSection,
  ImpactStorySection,
  CollaborationSection,
  LatestNewsSection,
  FinalCtaSection,
} from "@/components/sections/home";
import { Reveal } from "@/components/ui/reveal";
import {
  getImpactStories,
  getImpactStoryPhotos,
} from "@/lib/services/impact-story.service";
import { getFeaturedVideos } from "@/lib/services/featured-video.service";

export default async function Home() {
  const [impactStories, impactStoryPhotos, featuredVideos] = await Promise.all([
    getImpactStories(),
    getImpactStoryPhotos(),
    getFeaturedVideos(),
  ]);

  return (
    <main className="flex-1 w-full flex flex-col">
      {/* Section 1 — Hero */}
      <HeroSection />

      {/* Section 2 — Impact Snapshot */}
      <Reveal>
        <ImpactSnapshotSection />
      </Reveal>

      {/* Section 3 — Tentang JLF */}
      <Reveal>
        <AboutTeaserSection />
      </Reveal>

      {/* Section 3a & 3b — Visi Misi & Nilai Inti L.A.N.G.I.T (Muncul saat Baca Selengkapnya diklik) */}
      <VisionMissionSection />
      <LangitValuesSection />

      {/* Section 4 — Program JLF */}
      <Reveal>
        <ProgramsSection />
      </Reveal>

      {/* Section 5 — Video Pilihan (Showcase YouTube JLF) */}
      <Reveal>
        <FeaturedVideosSection videos={featuredVideos} />
      </Reveal>

      {/* Section 6 — Impact Story */}
      <Reveal>
        <ImpactStorySection stories={impactStories} photos={impactStoryPhotos} />
      </Reveal>

      {/* Section 7 — Kolaborasi */}
      <Reveal>
        <CollaborationSection />
      </Reveal>

      {/* Section 8 — Update JLF */}
      <Reveal>
        <LatestNewsSection />
      </Reveal>

      {/* Section 9 — Final CTA */}
      <Reveal>
        <FinalCtaSection />
      </Reveal>
    </main>
  );
}
