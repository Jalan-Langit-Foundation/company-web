"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  PROGRAMS_SECTION_DATA,
  ProgramItem,
} from "@/lib/data/homepage";

export function ProgramsSection() {
  // Default: first program is active
  const [openId, setOpenId] = React.useState<string>(
    PROGRAMS_SECTION_DATA.programs[0]?.id || ""
  );

  const toggleProgram = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="program"
      aria-label="Program Kebaikan Jalan Langit Foundation"
      className="w-full bg-[#FAFCFE] py-16 sm:py-20 lg:py-24 border-b border-slate-100 relative overflow-hidden"
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#EAF5FB] rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#EAF5FB] rounded-full blur-3xl pointer-events-none -z-0" />

      <Container size="xl" className="relative z-10">
        {/* =========================================================
            SECTION HEADER (2-Line Color Title)
            ========================================================= */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#2C2C2C] font-['Poppins',sans-serif] leading-tight tracking-tight">
            {PROGRAMS_SECTION_DATA.headline.prefix}
            <br />
            <span className="text-[#3C95C8]">
              {PROGRAMS_SECTION_DATA.headline.highlight}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#555555] font-['Lato',sans-serif] leading-relaxed mt-3">
            {PROGRAMS_SECTION_DATA.supportingCopy}
          </p>
        </div>

        {/* =========================================================
            ACCORDION CONTAINER (Pure White Background, Seamless Content)
            ========================================================= */}
        <div className="w-full bg-white rounded-2xl border border-slate-200/90 divide-y divide-slate-200 shadow-xs overflow-hidden">
          {PROGRAMS_SECTION_DATA.programs.map((program) => {
            const isOpen = openId === program.id;

            return (
              <div key={program.id} className="w-full bg-white">
                {/* Title Header Row */}
                <button
                  type="button"
                  onClick={() => toggleProgram(program.id)}
                  className="w-full bg-white px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C95C8]"
                  aria-expanded={isOpen}
                >
                  <h3
                    className={`text-base sm:text-lg font-bold font-['Poppins',sans-serif] leading-snug ${
                      isOpen ? "text-[#3C95C8]" : "text-[#2C2C2C]"
                    }`}
                  >
                    {program.title}
                  </h3>

                  {/* Indicator Icon (No Circle Background) */}
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "text-[#3C95C8] rotate-180"
                        : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Expandable Seamless Content (Left-Aligned, No Nested Card) */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden bg-white">
                    <div className="px-6 sm:px-8 pb-7 pt-0 bg-white">
                      <div className="flex flex-col sm:flex-row items-stretch gap-6 sm:gap-8 pt-1">
                        {/* Left Side: Program Visual Image (Stretches to match exact text height on desktop) */}
                        <div className="relative w-full sm:w-64 md:w-72 lg:w-80 shrink-0 aspect-[16/10] sm:aspect-auto min-h-[180px] rounded-xl overflow-hidden bg-slate-900 border border-slate-100">
                          <Image
                            src={program.image}
                            alt={program.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Right Side: Program Details (Spaced evenly to match full height) */}
                        <div className="flex-1 flex flex-col justify-between items-start gap-4 w-full py-0.5">
                          <div className="space-y-3 text-left w-full">
                            {/* Category Badge */}
                            <div className="flex items-center">
                              <span className="px-2.5 py-1 rounded-md bg-[#3C95C8] text-white text-[11px] font-semibold font-['Poppins',sans-serif] shadow-xs">
                                {program.category}
                              </span>
                            </div>

                            {/* Description Text (Concise on Mobile/Tablet, Full Narrative on Desktop) */}
                            <p className="text-xs sm:text-sm text-[#555555] font-['Lato',sans-serif] leading-relaxed line-clamp-2 sm:line-clamp-3 lg:line-clamp-none">
                              {program.description}
                            </p>
                          </div>

                          {/* Footer Link (Anchored at the bottom) */}
                          <div className="pt-3 border-t border-slate-100 flex items-center justify-start w-full text-xs text-[#3C95C8] font-semibold font-['Poppins',sans-serif]">
                            <Link
                              href="/programs"
                              className="hover:text-[#25729D] transition-colors font-semibold"
                            >
                              Lihat Selengkapnya
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
