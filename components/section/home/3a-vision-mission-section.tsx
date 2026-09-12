"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { VISION_MISSION_DATA, type MissionPoint } from "@/lib/data/homepage";
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
          className="w-full bg-[#FAFCFE] py-12 sm:py-16 lg:py-20 relative overflow-hidden scroll-mt-20"
        >
          {/* Decorative Background Accents matching Final CTA section */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#EAF5FB] rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#EAF5FB] rounded-full blur-3xl pointer-events-none -z-0" />

          <Container size="xl" className="relative z-10">
            {/* Section Header */}
            <SectionHeader
              headline={VISION_MISSION_DATA.headline}
              multiline={true}
              description="Landasan arah perjuangan dan komitmen jangka panjang Jalan Langit Foundation dalam membangun ekosistem kebaikan yang berdaya guna dan berkelanjutan."
              align="center"
              className="mb-8 sm:mb-12"
            />

            {/* Grid Kartu Visi & Misi 50:50 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
              {/* Kolom Visi */}
              <div className="flex flex-col">
                <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200/80">
                  <div className="p-5 flex flex-col flex-1 justify-between gap-4 bg-white">
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-[#2C2C2C] font-['Poppins',sans-serif] leading-snug">
                        {VISION_MISSION_DATA.vision.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#555555] font-['Lato',sans-serif] leading-relaxed">
                        {VISION_MISSION_DATA.vision.statement}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center text-xs text-[#3C95C8] font-semibold font-['Poppins',sans-serif]">
                      <span>#KomitmenJangkaPanjang</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kolom Misi */}
              <div className="flex flex-col">
                <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200/80">
                  <div className="p-5 flex flex-col flex-1 justify-between gap-4 bg-white">
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-[#2C2C2C] font-['Poppins',sans-serif] leading-snug">
                        {VISION_MISSION_DATA.mission.label}
                      </h3>
                      <div className="space-y-2">
                        {VISION_MISSION_DATA.mission.points.map(
                          (point: MissionPoint, index: number) => {
                            const desc =
                              point.description.charAt(0).toLowerCase() +
                              point.description.slice(1);
                            return (
                              <div
                                key={point.number}
                                className="flex items-start gap-2 text-xs sm:text-sm text-[#555555] font-['Lato',sans-serif] leading-relaxed"
                              >
                                <span className="shrink-0 font-medium text-[#2C2C2C] leading-relaxed">
                                  {index + 1}.
                                </span>
                                <p className="leading-relaxed">
                                  <strong className="font-semibold text-[#2C2C2C]">
                                    {point.title}
                                  </strong>
                                  , {desc}
                                </p>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center text-xs text-[#3C95C8] font-semibold font-['Poppins',sans-serif]">
                      <span>#LangkahNyataBerkelanjutan</span>
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
