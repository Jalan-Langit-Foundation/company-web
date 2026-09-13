"use client";

import * as React from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
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
      className="w-full bg-[#FAFCFE] border-b border-slate-200/80 relative overflow-hidden scroll-mt-16"
    >
      {/* Background Soft Ambient Lighting Accent */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-[#EAF5FB]/70 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#EAF5FB]/70 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Container size xl persis sama dengan section lain (Programs, Videos, Collaboration, dll) */}
      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-14 items-start">
          
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

            {/* 2. KHUSUS MOBILE & TABLET (< lg): FOTO BERGERAK HORIZONTAL
                Urutan tampilan di mobile/tab: 1. Header -> 2. Foto -> 3. Card Cerita */}
            <div className="block lg:hidden w-full overflow-hidden py-1">
              <div className="flex items-center gap-3 sm:gap-3.5 animate-marquee-horizontal w-max">
                {marqueeList.map((photo, idx) => (
                  <div
                    key={`mobile-${photo.id}-${idx}`}
                    className="relative w-[calc(100vw-2rem)] sm:w-[calc(100vw-3rem)] aspect-video rounded-2xl overflow-hidden bg-slate-100 shadow-none border border-slate-200/60 shrink-0"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover"
                      priority={idx < 2}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Card Cerita — Mengadopsi Style Card Video Section (Tanpa Hover Behaviour) */}
            <div
              className={cn(
                "p-5 flex flex-col justify-between gap-4 bg-white rounded-2xl border border-slate-200/80 shadow-none transition-opacity duration-200",
                isAnimating ? "opacity-50" : "opacity-100"
              )}
            >
              {/* Judul & Narasi (Ukuran Font Sama dengan Video Section) */}
              <div className="space-y-2">
                <div>
                  <h3 className="text-base font-bold text-[#2C2C2C] font-['Poppins',sans-serif] leading-snug">
                    {activeStory.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] font-medium font-['Lato',sans-serif] leading-relaxed">
                    {activeStory.person} — {activeStory.role}
                  </p>
                </div>

                {/* Kutipan Cerita */}
                <blockquote className="border-l-2 border-[#3C95C8]/70 pl-3">
                  <p className="text-xs sm:text-sm text-slate-700 italic font-['Lato',sans-serif] leading-relaxed">
                    {activeStory.quote}
                  </p>
                </blockquote>

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

                {/* Navigasi Klik untuk Lanjut & Kembali ke Cerita */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Cerita sebelumnya"
                    className="inline-flex h-8 w-8 sm:w-auto items-center justify-center gap-1 rounded-full border border-[#3C95C8] bg-white px-0 sm:px-3 py-1.5 text-[#3C95C8] text-xs font-semibold font-['Poppins',sans-serif] transition-colors cursor-pointer hover:bg-[#EAF5FB]"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Sebelumnya</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Cerita selanjutnya"
                    className="inline-flex h-8 w-8 sm:w-auto items-center justify-center gap-1 rounded-full border border-[#3C95C8] bg-white px-0 sm:px-3 py-1.5 text-[#3C95C8] text-xs font-semibold font-['Poppins',sans-serif] transition-colors cursor-pointer hover:bg-[#EAF5FB]"
                  >
                    <span className="hidden sm:inline">Selanjutnya</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* =========================================================
              SISI KANAN (KHUSUS DESKTOP >= lg): MURNI FOTO 16:9 VERTICAL MARQUEE
              - Horizontally: Terkunci di dalam Container size="xl"
              - Vertically: Membentang penuh setinggi batas section (border-t ke border-b)
              - Bergerak vertikal meluncur ke atas
              ========================================================= */}
          <div className="hidden lg:flex lg:col-span-5 w-full justify-end lg:absolute lg:top-0 lg:bottom-0 lg:right-8 lg:w-[calc((100%-7.5rem)*5/12)] pointer-events-auto">
            <div className="relative w-full h-full overflow-hidden">
              
              {/* Vertical Infinite Marquee Track */}
              <div className="w-full flex flex-col space-y-3.5 animate-marquee-vertical py-1">
                {marqueeList.map((photo, idx) => (
                  <div
                    key={`desktop-${photo.id}-${idx}`}
                    className="relative w-full lg:h-[220px] rounded-2xl overflow-hidden bg-slate-100 shadow-none border border-slate-200/60 shrink-0"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
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
