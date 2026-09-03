"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
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
      className="w-full bg-white py-12 sm:py-20 lg:py-24 border-b border-slate-200/80 relative overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* -------------------------------------------------------
              LEFT COLUMN: 16:9 Main Card + 20px gap + 16:9 Sub Cards
              ------------------------------------------------------- */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-5 justify-between">
            {/* 1. Main Large Featured Article Card (Rasio 16:9 di semua ukuran) */}
            <Link
              href={`/news/${mainFeatured.slug}`}
              className="group relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xs block shrink-0"
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

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 space-y-2">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white font-['Poppins',sans-serif] leading-snug line-clamp-2">
                  {mainFeatured.title}
                </h3>

                {/* Meta Row: penulis / tanggal */}
                <p className="text-[11px] sm:text-xs text-slate-300 font-['Lato',sans-serif]">
                  {mainFeatured.author} / {mainFeatured.date}
                </p>
              </div>
            </Link>

            {/* 2. Two Sub-Featured Article Cards (Rasio 16:9 di semua ukuran) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 shrink-0">
              {subFeatured.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group flex sm:block items-center gap-4 sm:gap-0 relative w-full sm:aspect-[16/9] rounded-2xl overflow-hidden bg-transparent sm:bg-slate-900 sm:border sm:border-slate-200/80 shadow-none sm:shadow-xs transition-colors"
                >
                  {/* Thumbnail Container: Rasio 16:9 */}
                  <div className="relative w-28 sm:w-full aspect-[16/9] sm:h-full shrink-0 rounded-2xl sm:rounded-none overflow-hidden bg-slate-900 border border-slate-100 sm:border-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 120px, 320px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Dark Gradient Overlay (Only on Tablet & Desktop) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none hidden sm:block" />

                  {/* Content Area */}
                  <div className="sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:p-3.5 sm:p-4 z-10 space-y-1 flex-1 min-w-0 text-left">
                    <h4 className="text-sm sm:text-[15px] font-bold text-[#2C2C2C] sm:text-white font-['Poppins',sans-serif] leading-snug line-clamp-2">
                      {article.title}
                    </h4>

                    {/* Meta: penulis / tanggal */}
                    <p className="text-[11px] sm:text-xs text-[#777777] sm:text-slate-300 font-['Lato',sans-serif]">
                      {article.author} / {article.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* -------------------------------------------------------
              RIGHT COLUMN: Recent News List (Sejajar dengan Kolom Kiri, Gap Konsisten 20px)
              ------------------------------------------------------- */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between h-full gap-5">
            {recentList.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.slug}`}
                className="group flex items-center gap-4 transition-colors shrink-0"
              >
                {/* Thumbnail Image: Rasio 16:9 (160x90 di desktop) */}
                <div className="relative w-28 sm:w-32 lg:w-[160px] aspect-[16/9] shrink-0 rounded-2xl overflow-hidden bg-slate-900 border border-slate-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 120px, 150px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* News Title & Author / Date (penulis / tanggal) */}
                <div className="flex-1 min-w-0 space-y-1 text-left">
                  <h4 className="text-sm sm:text-[15px] font-bold text-[#2C2C2C] font-['Poppins',sans-serif] leading-snug line-clamp-2">
                    {article.title}
                  </h4>

                  <p className="text-[11px] sm:text-xs text-[#777777] font-['Lato',sans-serif]">
                    {article.author} / {article.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* =========================================================
            BOTTOM ACTION BUTTON: Lihat Semua Berita (Matching Video CTA Style & Spacing)
            ========================================================= */}
        <div className="pt-5 sm:pt-6 text-center">
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
