"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { VISION_MISSION_DATA, type MissionPoint } from "@/lib/data/homepage";
import { Compass, Target, CheckCircle2 } from "lucide-react";
import { useAboutValues } from "@/hooks";

export function VisionMissionSection() {
  const { isExpanded } = useAboutValues();

  return (
    <div
      className={`w-full grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isExpanded
          ? "grid-rows-[1fr] opacity-100 border-b border-slate-200/80"
          : "grid-rows-[0fr] opacity-0 pointer-events-none border-b-0"
      }`}
    >
      <div className="min-h-0 overflow-hidden">
        <section
          id="visi-misi"
          aria-label="Visi dan Misi Jalan Langit Foundation"
          className="w-full bg-[#FAFCFE] py-12 sm:py-20 lg:py-24 relative overflow-hidden scroll-mt-20"
        >
      {/* Decorative Background Accents matching Final CTA section */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#EAF5FB] rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#EAF5FB] rounded-full blur-3xl pointer-events-none -z-0" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow={VISION_MISSION_DATA.eyebrow}
          headline={VISION_MISSION_DATA.headline}
          multiline={true}
          description="Landasan arah perjuangan dan komitmen jangka panjang Jalan Langit Foundation dalam membangun ekosistem kebaikan yang berdaya guna dan berkelanjutan."
          align="center"
          className="mb-10 sm:mb-14"
        />

        {/* Two-Column Grid: Visi (Kiri) & Misi (Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {/* Card Visi (5 Kolom di Desktop) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:border-[#3C95C8]/30 transition-all duration-300">
              {/* Subtle top brand accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#6EB6D6] to-[#3C95C8]" />

              <div className="flex flex-col gap-6">
                {/* Header Icon + Label */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF5FB] text-[#3C95C8] flex items-center justify-center border border-[#3C95C8]/20 shadow-2xs">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#3C95C8] font-['Poppins',sans-serif]">
                      Komitmen Utama
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C2C2C] font-['Poppins',sans-serif]">
                      {VISION_MISSION_DATA.vision.label}
                    </h3>
                  </div>
                </div>

                {/* Visi Statement */}
                <blockquote className="text-[#2C2C2C] font-['Poppins',sans-serif] text-base sm:text-lg font-semibold leading-relaxed">
                  &ldquo;{VISION_MISSION_DATA.vision.statement}&rdquo;
                </blockquote>
              </div>

              {/* Footer Trust Note */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-['Lato',sans-serif]">
                <CheckCircle2 className="w-4 h-4 text-[#3C95C8] shrink-0" />
                <span>Menjadi pedoman arah setiap gerakan dan inisiatif JLF</span>
              </div>
            </div>
          </div>

          {/* Card Misi (7 Kolom di Desktop) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 p-7 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:border-[#3C95C8]/30 transition-all duration-300">
              {/* Subtle top brand accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-[#3C95C8] to-[#6EB6D6]" />

              <div>
                {/* Header Icon + Label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF5FB] text-[#3C95C8] flex items-center justify-center border border-[#3C95C8]/20 shadow-2xs">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#3C95C8] font-['Poppins',sans-serif]">
                      Langkah Strategis
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C2C2C] font-['Poppins',sans-serif]">
                      {VISION_MISSION_DATA.mission.label}
                    </h3>
                  </div>
                </div>

                {/* List 4 Poin Misi */}
                <div className="flex flex-col divide-y divide-slate-100">
                  {VISION_MISSION_DATA.mission.points.map((point: MissionPoint) => (
                    <div
                      key={point.number}
                      className="py-4 first:pt-0 last:pb-0 flex items-start gap-4 group/point"
                    >
                      <span className="w-8 h-8 rounded-full bg-[#EAF5FB] text-[#3C95C8] font-bold text-xs flex items-center justify-center shrink-0 font-['Poppins',sans-serif] group-hover/point:bg-[#3C95C8] group-hover/point:text-white transition-colors">
                        {point.number}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-bold text-[#2C2C2C] font-['Poppins',sans-serif] mb-1 group-hover/point:text-[#3C95C8] transition-colors">
                          {point.title}
                        </h4>
                        <p className="text-slate-600 font-['Lato',sans-serif] text-xs sm:text-sm leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
        </section>
      </div>
    </div>
  );
}
