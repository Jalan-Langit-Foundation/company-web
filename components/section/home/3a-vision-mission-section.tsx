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

            {/* Konten Teks Visi & Misi (Tanpa Card, Tanpa Icon, Gaya Paragraf Bersih) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 xl:gap-16 items-start">
              {/* Kolom Visi */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] font-['Poppins',sans-serif] text-center">
                  {VISION_MISSION_DATA.vision.label}
                </h3>
                <p className="text-[#555555] font-['Lato',sans-serif] text-sm sm:text-base leading-relaxed text-justify">
                  {VISION_MISSION_DATA.vision.statement}
                </p>
              </div>

              {/* Kolom Misi */}
              <div className="lg:col-span-7 flex flex-col gap-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] font-['Poppins',sans-serif] text-center">
                  {VISION_MISSION_DATA.mission.label}
                </h3>
                <div className="flex flex-col gap-0 text-[#555555] font-['Lato',sans-serif] text-sm sm:text-base leading-relaxed text-justify">
                  {VISION_MISSION_DATA.mission.points.map((point: MissionPoint, index: number) => {
                    const desc =
                      point.description.charAt(0).toLowerCase() + point.description.slice(1);
                    return (
                      <div key={point.number} className="flex items-start gap-2">
                        <span className="shrink-0">{index + 1}.</span>
                        <p className="text-justify">
                          {point.title}, {desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
