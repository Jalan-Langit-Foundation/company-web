"use client";

import * as React from "react";
import Image from "next/image";
import {
  Play,
  Clock,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FEATURED_VIDEOS_DATA, FeaturedVideo } from "@/lib/data/homepage";

export function FeaturedVideosSection() {
  const [activeModalVideo, setActiveModalVideo] = React.useState<FeaturedVideo | null>(null);
  const sliderRef = React.useRef<HTMLDivElement | null>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="video-pilihan"
      aria-label="Dokumentasi Video Jalan Langit Foundation"
      className="w-full bg-white py-12 sm:py-20 lg:py-24 border-b border-slate-100 relative overflow-hidden transition-colors"
    >
      <Container size="xl" className="relative z-10">
        {/* =========================================================
            1. SECTION HEADER
            ========================================================= */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#2C2C2C] font-['Poppins',sans-serif] leading-tight tracking-tight">
            {FEATURED_VIDEOS_DATA.headline.prefix}
            <br />
            <span className="text-[#3C95C8]">
              {FEATURED_VIDEOS_DATA.headline.highlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#555555] font-['Lato',sans-serif] leading-relaxed mt-3">
            {FEATURED_VIDEOS_DATA.supportingCopy}
          </p>
        </div>

        {/* =========================================================
            2. VIDEO SLIDER WITH FADE OUT EDGES
            ========================================================= */}
        <div className="relative group/slider">
          {/* Slider Horizontal Track */}
          <div
            ref={sliderRef}
            className="flex items-stretch gap-6 overflow-x-auto pt-3 pb-5 no-scrollbar scroll-smooth"
          >
            {FEATURED_VIDEOS_DATA.videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveModalVideo(video)}
                className="w-[300px] sm:w-[350px] md:w-[380px] shrink-0 group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/70 hover:border-slate-300/80 shadow-none hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                {/* 16:9 Thumbnail Box */}
                <div className="relative w-full aspect-video overflow-hidden bg-slate-900">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
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
                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#2C2C2C] group-hover:text-[#3C95C8] transition-colors font-['Poppins',sans-serif] line-clamp-2 leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] font-['Lato',sans-serif] line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#3C95C8] font-semibold font-['Poppins',sans-serif]">
                    <span>Tonton Video</span>
                    <span className="text-sm">→</span>
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

      {/* =========================================================
          3. MODAL VIDEO PLAYER POPUP (PURE VIDEO ONLY)
          ========================================================= */}
      {activeModalVideo && (
        <div
          onClick={() => setActiveModalVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-sm animate-fadeIn cursor-pointer"
        >
          {/* Floating Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveModalVideo(null);
            }}
            aria-label="Tutup Video"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer backdrop-blur-md border border-white/20 shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Pure 16:9 Video Player (No frame/footer) */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black cursor-default"
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeModalVideo.youtubeId}?autoplay=1&rel=0`}
              title={activeModalVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}
