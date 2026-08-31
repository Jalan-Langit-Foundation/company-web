"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Calendar, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LATEST_NEWS_DATA } from "@/lib/data/homepage";

export function LatestNewsSection() {
  const {
    headline,
    supportingCopy,
    viewAllText,
    viewAllUrl,
    mainFeatured,
    subFeatured,
    recentList,
  } = LATEST_NEWS_DATA;

  return (
    <section
      id="berita"
      aria-label="Kabar & Berita Jalan Langit Foundation"
      className="w-full bg-white py-12 sm:py-16 lg:py-20 border-b border-slate-100 relative overflow-hidden"
    >
      <Container size="xl" className="relative z-10">
        {/* =========================================================
            SECTION HEADER (Centered 2-Line Style)
            ========================================================= */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-extrabold text-[#2C2C2C] font-['Poppins',sans-serif] leading-tight tracking-tight">
            {headline.prefix}
            <br />
            <span className="text-[#3C95C8]">{headline.highlight}</span>
          </h2>

          <p className="text-sm sm:text-base text-[#555555] font-['Lato',sans-serif] leading-relaxed mt-3 max-w-lg mx-auto">
            {supportingCopy}
          </p>
        </div>

        {/* =========================================================
            NEWS GRID: Mathematically Balanced 520px Height on Desktop
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* -------------------------------------------------------
              LEFT COLUMN: 330px + 20px (gap-5) + 170px = 520px
              ------------------------------------------------------- */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-5">
            {/* 1. Main Large Featured Article Card (Height 330px on Desktop) */}
            <Link
              href={`/news/${mainFeatured.slug}`}
              className="group relative w-full aspect-[16/9] lg:aspect-auto lg:h-[330px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xs block shrink-0"
            >
              <Image
                src={mainFeatured.image}
                alt={mainFeatured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

              {/* Top Category Badge */}
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
                <span className="px-2.5 py-1 rounded-md bg-[#3C95C8] text-white text-[11px] font-semibold font-['Poppins',sans-serif] shadow-xs">
                  {mainFeatured.category}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 space-y-2">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white font-['Poppins',sans-serif] leading-snug line-clamp-2">
                  {mainFeatured.title}
                </h3>

                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-300 font-['Lato',sans-serif]">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3 text-[#6EB6D6]" />
                    <span>{mainFeatured.author}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#6EB6D6]" />
                    <span>{mainFeatured.date}</span>
                  </div>

                  {mainFeatured.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#6EB6D6]" />
                      <span>{mainFeatured.readTime}</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>

            {/* 2. Two Sub-Featured Article Cards (Height 170px on Desktop, gap-5) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 shrink-0">
              {subFeatured.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group relative w-full aspect-[16/10] lg:aspect-auto lg:h-[170px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xs block"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#3C95C8] text-white text-[11px] font-semibold font-['Poppins',sans-serif] shadow-xs">
                      {article.category}
                    </span>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10 space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-white font-['Poppins',sans-serif] leading-snug line-clamp-2">
                      {article.title}
                    </h4>

                    {/* Author & Date Meta */}
                    <div className="flex items-center gap-2 text-[10px] text-slate-300 font-['Lato',sans-serif]">
                      <div className="flex items-center gap-1">
                        <User className="w-2.5 h-2.5 text-[#6EB6D6]" />
                        <span>{article.author}</span>
                      </div>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* -------------------------------------------------------
              RIGHT COLUMN: 5 x 88px + 4 x 20px (gap-5) = 520px
              ------------------------------------------------------- */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-5">
            {recentList.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="group flex items-center gap-4 transition-colors lg:h-[88px] shrink-0"
              >
                {/* Thumbnail Image (Height 88px, aspect 16/10) */}
                <div className="relative w-28 sm:w-32 md:w-36 lg:w-[136px] h-[80px] sm:h-[84px] lg:h-[88px] shrink-0 rounded-2xl overflow-hidden bg-slate-900 border border-slate-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 120px, 140px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* News Title & Author / Date (Static Color) */}
                <div className="flex-1 min-w-0 space-y-1 text-left">
                  <h4 className="text-xs sm:text-sm font-bold text-[#2C2C2C] font-['Poppins',sans-serif] leading-snug line-clamp-2">
                    {article.title}
                  </h4>

                  <p className="text-[10px] sm:text-[11px] text-[#777777] font-['Lato',sans-serif]">
                    By <span className="text-[#555555] font-medium">{article.author}</span> / {article.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* =========================================================
            BOTTOM ACTION BUTTON: Lihat Semua Berita (Matching Video CTA Style)
            ========================================================= */}
        <div className="mt-10 sm:mt-12 text-center">
          <Button
            variant="outline"
            size="md"
            href={viewAllUrl}
            className="font-bold border-[#3C95C8] text-[#3C95C8] hover:bg-[#EAF5FB] px-6"
          >
            {viewAllText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
