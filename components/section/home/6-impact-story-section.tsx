"use client";

import * as React from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { IMPACT_STORY_DATA } from "@/lib/data/homepage";
import { cn } from "@/lib/utils";

export function ImpactStorySection() {
  const [currentStoryIndex, setCurrentStoryIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const totalStories = IMPACT_STORY_DATA.stories.length;
  const activeStory = IMPACT_STORY_DATA.stories[currentStoryIndex];

  // Duplikasi foto untuk continuous seamless infinite vertical loop
  const marqueeList = React.useMemo(() => {
    return [
      ...IMPACT_STORY_DATA.marqueePhotos,
      ...IMPACT_STORY_DATA.marqueePhotos,
    ];
  }, []);

  const changeStory = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStoryIndex(newIndex);
      setIsAnimating(false);
    }, 180);
  };

  const handleNext = () => {
    const nextIndex = (currentStoryIndex + 1) % totalStories;
    changeStory(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentStoryIndex - 1 + totalStories) % totalStories;
    changeStory(prevIndex);
  };

  return (
    <section
      id="cerita-dampak"
      aria-label="Cerita di Balik Dampak Jalan Langit Foundation"
      className="w-full bg-[#FAFCFE] border-y border-slate-200/80 relative overflow-hidden"
    >
      {/* Background Soft Ambient Lighting Accent */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#EAF5FB]/70 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#EAF5FB]/70 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Container size xl persis sama dengan section lain (Programs, Videos, Collaboration, dll) */}
      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* =========================================================
              SISI KIRI: HEADLINE 2 BARIS & CARD CERITA
              - Mengatur padding vertikal py-12 sm:py-16 lg:py-20 secara alami
              ========================================================= */}
          <div className="lg:col-span-7 py-12 sm:py-16 lg:py-20 flex flex-col justify-center space-y-5 z-10">
            
            {/* 1. Headline 2 Baris & Deskripsi Standar Section Lain */}
            <SectionHeader
              headline={IMPACT_STORY_DATA.headline}
              description={IMPACT_STORY_DATA.supportingCopy}
              multiline
              align="left"
              className="max-w-xl"
            />

            {/* 2. Card Cerita — Mengadopsi Style Card Video Section (Tanpa Hover Behaviour) */}
            <div
              className={cn(
                "p-5 flex flex-col justify-between gap-4 bg-white rounded-2xl border border-slate-200/80 shadow-none transition-opacity duration-200",
                isAnimating ? "opacity-50" : "opacity-100"
              )}
            >
              {/* Judul & Narasi (Ukuran Font Sama dengan Video Section) */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-base font-bold text-[#2C2C2C] font-['Poppins',sans-serif] leading-snug">
                    {activeStory.title}
                  </h3>
                  <p className="text-xs text-[#555555] font-medium font-['Lato',sans-serif]">
                    {activeStory.person} — {activeStory.role}
                  </p>
                </div>

                {/* Kutipan Cerita */}
                <div className="relative pl-3.5 py-1 border-l-2 border-[#3C95C8] bg-slate-50/60 rounded-r-lg">
                  <Quote className="w-3.5 h-3.5 text-[#3C95C8]/40 absolute top-1 left-1 -scale-x-100" />
                  <p className="text-xs sm:text-sm text-slate-700 italic font-['Lato',sans-serif] leading-relaxed pl-2">
                    {activeStory.quote}
                  </p>
                </div>

                {/* Deskripsi Cerita */}
                <p className="text-xs sm:text-sm text-[#555555] font-['Lato',sans-serif] leading-relaxed">
                  {activeStory.story}
                </p>
              </div>

              {/* Card Footer: Navigasi Indikator & Kontrol Cerita Selanjutnya */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                {/* Indicator Dots Navigasi */}
                <div className="flex items-center gap-1.5">
                  {IMPACT_STORY_DATA.stories.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => changeStory(dotIdx)}
                      aria-label={`Buka Cerita ${dotIdx + 1}`}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                        dotIdx === currentStoryIndex
                          ? "w-6 bg-[#3C95C8]"
                          : "w-1.5 bg-slate-300 hover:bg-slate-400"
                      )}
                    />
                  ))}
                </div>

                {/* Navigasi Klik untuk Lanjut ke Cerita Berikutnya */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Cerita Sebelumnya"
                    className="w-8 h-8 rounded-full border border-slate-200 text-slate-600 hover:text-[#3C95C8] hover:border-[#3C95C8] flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#3C95C8] bg-white hover:bg-[#EAF5FB] text-[#3C95C8] text-xs font-semibold font-['Poppins',sans-serif] transition-colors cursor-pointer"
                  >
                    <span>Cerita Selanjutnya</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* =========================================================
              SISI KANAN: MURNI FOTO 16:9 DALAM VERTICAL INFINITE MARQUEE
              - Horizontally: Terkunci di dalam Container size="xl" (jarak kanan persis sama dengan section lain)
              - Vertically: Membentang penuh setinggi batas section (border-t ke border-b)
              - Tanpa efek gradien fade in/fade out
              - Strictly 16:9 ratio
              ========================================================= */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end pb-8 lg:pb-0 lg:absolute lg:top-0 lg:bottom-0 lg:right-4 sm:lg:right-6 lg:right-8 lg:w-[calc((100%-2rem)*5/12)] xl:w-[360px] pointer-events-auto">
            <div className="relative w-full max-w-[340px] xl:max-w-[360px] h-[460px] sm:h-[500px] lg:h-full overflow-hidden">
              
              {/* Vertical Infinite Marquee Track (Tanpa Gradien Fade, Murni Foto Bersih) */}
              <div className="w-full flex flex-col space-y-3.5 animate-marquee-vertical py-1">
                {marqueeList.map((photo, idx) => (
                  <div
                    key={`${photo.id}-${idx}`}
                    className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 shadow-none border border-slate-200/60 shrink-0"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                      className="object-cover"
                      priority={idx < 2}
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
