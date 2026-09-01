"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PROGRAMS_SECTION_DATA, SITE_CONFIG } from "@/lib/data";

export function ProgramsSection() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isCollapsing, setIsCollapsing] = React.useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsCollapsing(true);
    setTimeout(() => {
      setIsExpanded(false);
      setIsCollapsing(false);
    }, 320);
  };

  return (
    <section
      id="program"
      aria-label="Program Kebaikan Jalan Langit Foundation"
      className="w-full bg-[#FAFCFE] py-12 sm:py-20 lg:py-24 border-b border-slate-100 relative overflow-hidden"
    >
      {/* Subtle Background Lighting Accent */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#EAF5FB]/60 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-[#EAF5FB]/60 rounded-full blur-3xl pointer-events-none -z-0" />

      <Container size="xl" className="relative z-10">
        {/* =========================================================
            1. SECTION HEADER (Matching Video Section Style)
            ========================================================= */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#2C2C2C] font-['Poppins',sans-serif] leading-tight tracking-tight">
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
            2. RESPONSIVE PROGRAM CARDS GRID
               - Mobile: 1 Card per row (Matching Video Section)
               - Tablet (sm/md): 2 Cards per row
               - Desktop (lg): 3 Cards per row
               - Default: 1 row on all devices (1 on mobile, 2 on tablet, 3 on desktop)
               - Expanded: Shows all program cards with smooth animations
            ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROGRAMS_SECTION_DATA.programs.map((program, idx) => {
            // Visibility logic for 1-row default across devices:
            // Mobile (<640px): idx 0 is visible (1 card)
            // Tablet (640px - 1023px): idx 0, 1 are visible (2 cards)
            // Desktop (>=1024px): idx 0, 1, 2 are visible (3 cards)
            // idx >= 3: hidden until expanded
            const isInitiallyHidden = idx >= 1;
            const isVisible = isExpanded || isCollapsing;

            const animationClass =
              isCollapsing && isInitiallyHidden
                ? "animate-slide-up"
                : isExpanded && isInitiallyHidden
                ? "animate-slide-down"
                : "";

            const visibilityClass = isVisible
              ? `flex ${animationClass}`
              : idx === 0
              ? "flex"
              : idx === 1
              ? "hidden sm:flex"
              : idx === 2
              ? "hidden lg:flex"
              : "hidden";

            const animationStyle =
              isCollapsing && isInitiallyHidden
                ? { animationDelay: `${Math.max(0, 5 - idx) * 30}ms` }
                : isExpanded && isInitiallyHidden
                ? { animationDelay: `${(idx - 1) * 60}ms` }
                : undefined;

            return (
              <div
                key={program.id}
                style={animationStyle}
                className={`group flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-slate-300/90 shadow-none hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 ${visibilityClass}`}
              >
                {/* 16:9 Thumbnail Box */}
                <div className="relative w-full aspect-video overflow-hidden bg-slate-900">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                  {/* Single Blue Category Badge on Top-Left */}
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md bg-[#3C95C8] text-white text-[11px] font-semibold font-['Poppins',sans-serif] shadow-xs z-[2]">
                    {program.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1 justify-between gap-4 bg-white">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#2C2C2C] font-['Poppins',sans-serif] line-clamp-1 leading-snug">
                      {program.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] font-['Lato',sans-serif] line-clamp-3 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Card Action Link (Matching Video Section Style without Arrow) */}
                  <div className="pt-3 border-t border-slate-100 flex items-center text-xs text-[#3C95C8] font-semibold font-['Poppins',sans-serif]">
                    <Link
                      href={SITE_CONFIG.contact.donationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#25729D] transition-colors"
                    >
                      Donasi Sekarang
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            3. ACTION BUTTONS:
               - Default: "Lihat Lebih Banyak"
               - Expanded: "Lihat Lebih Sedikit" & "Lihat Selengkapnya" (/programs)
            ========================================================= */}
        <div className="pt-5 sm:pt-6 flex flex-wrap items-center justify-center gap-3">
          {isExpanded ? (
            <>
              <Button
                variant="outline"
                size="md"
                onClick={handleCollapse}
                rightIcon={<ChevronUp className="w-4 h-4" />}
                className="font-bold border-[#3C95C8] text-[#3C95C8] hover:bg-[#EAF5FB] px-6"
              >
                Lihat Lebih Sedikit
              </Button>

              <Button
                variant="outline"
                size="md"
                href="/programs"
                className="font-bold border-[#3C95C8] text-[#3C95C8] hover:bg-[#EAF5FB] px-6"
              >
                Lihat Selengkapnya
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              size="md"
              onClick={handleExpand}
              rightIcon={<ChevronDown className="w-4 h-4" />}
              className="font-bold border-[#3C95C8] text-[#3C95C8] hover:bg-[#EAF5FB] px-6"
            >
              Lihat Lebih Banyak
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
