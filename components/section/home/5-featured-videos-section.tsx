"use client";

import * as React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  Play,
  Clock,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { useHorizontalScroll } from "@/hooks";
import { FEATURED_VIDEOS_DATA, FeaturedVideo } from "@/lib/data/homepage";

const VideoModal = dynamic(
  () => import("@/components/ui/video-modal").then((mod) => mod.VideoModal),
  { ssr: false }
);

export function FeaturedVideosSection() {
  const [activeModalVideo, setActiveModalVideo] = React.useState<FeaturedVideo | null>(null);
  const { scrollRef: sliderRef, scroll: scrollSlider } = useHorizontalScroll();

  return (
    <section
      id="video-pilihan"
      aria-label="Dokumentasi Video Jalan Langit Foundation"
      className="w-full bg-white py-12 sm:py-20 lg:py-24 border-b border-slate-200/80 relative overflow-hidden transition-colors"
    >
      <Container size="xl" className="relative z-10">
        {/* 1. SECTION HEADER */}
        <SectionHeader
          headline={FEATURED_VIDEOS_DATA.headline}
          description={FEATURED_VIDEOS_DATA.supportingCopy}
          multiline
          className="mb-8 sm:mb-12"
        />

        {/* =========================================================
            2. VIDEO SLIDER: EXACT 3 CARDS ON DESKTOP, 2 ON TABLET, 1 ON MOBILE
            ========================================================= */}
        <div className="relative group/slider">
          {/* Slider Horizontal Track */}
          <div
            ref={sliderRef}
            className="flex items-stretch gap-6 lg:gap-8 overflow-x-auto pt-3 pb-5 no-scrollbar scroll-smooth snap-x snap-mandatory"
          >
            {FEATURED_VIDEOS_DATA.videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveModalVideo(video)}
                className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4rem)/3)] shrink-0 snap-start group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-slate-300/90 shadow-none hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                {/* 16:9 Thumbnail Box */}
                <div className="relative w-full aspect-video overflow-hidden bg-slate-900">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Duration Badge */}
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-white text-[11px] font-medium flex items-center gap-1 font-['Lato',sans-serif] z-[2]">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </span>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-[2]">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#3C95C8] shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3C95C8] group-hover:text-white">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                    </div>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-4 bg-white">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#2C2C2C] font-['Poppins',sans-serif] line-clamp-1 leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] font-['Lato',sans-serif] line-clamp-3 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#3C95C8] font-semibold font-['Poppins',sans-serif]">
                    <span>Tonton Video</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            3. BOTTOM CONTROLS: OUTLINE SLIDER BUTTONS & CTA
            ========================================================= */}
        <div className="pt-1 sm:pt-2 flex items-center justify-center">
          <div className="flex items-center gap-3">
            {/* Outline Left Navigation Button */}
            <button
              onClick={() => scrollSlider("left")}
              aria-label="Geser video ke kiri"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#3C95C8] text-[#3C95C8] hover:bg-[#EAF5FB] active:bg-[#d5ecf8] flex items-center justify-center transition-all cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Outline YouTube CTA Button */}
            <Button
              variant="outline"
              size="md"
              href={FEATURED_VIDEOS_DATA.youtubeChannelUrl}
              external
              className="font-bold border-[#3C95C8] text-[#3C95C8] hover:bg-[#EAF5FB] px-6"
            >
              Kunjungi YouTube JLF
            </Button>

            {/* Outline Right Navigation Button */}
            <button
              onClick={() => scrollSlider("right")}
              aria-label="Geser video ke kanan"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#3C95C8] text-[#3C95C8] hover:bg-[#EAF5FB] active:bg-[#d5ecf8] flex items-center justify-center transition-all cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>

      {/* 3. MODAL VIDEO PLAYER POPUP (LAZY LOADED) */}
      <VideoModal
        isOpen={Boolean(activeModalVideo)}
        youtubeId={activeModalVideo?.youtubeId}
        title={activeModalVideo?.title}
        onClose={() => setActiveModalVideo(null)}
      />
    </section>
  );
}
