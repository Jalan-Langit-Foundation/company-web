import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { LATEST_NEWS_DATA } from "@/lib/data/homepage";
import { news } from "@/lib/data/news";

export function LatestNewsSection() {
  const { headline, supportingCopy } = LATEST_NEWS_DATA;

  // Menampilkan berita berdasarkan urutan paling terbaru
  const mainFeatured = news[0];
  const subFeatured = news.slice(1, 3);
  const recentList = news.slice(3, 8);

  return (
    <section
      id="berita"
      aria-label="Kabar & Berita Jalan Langit Foundation"
      className="w-full bg-white py-12 sm:py-20 lg:py-24 border-b border-slate-200/80 relative overflow-hidden scroll-mt-16"
    >
      <Container size="xl" className="relative z-10">
        {/* SECTION HEADER (Centered 2-Line Style) */}
        <SectionHeader
          headline={headline}
          description={supportingCopy}
          align="center"
          multiline
          className="mb-8 sm:mb-12"
        />

        {/* =========================================================================
            LAYOUT MULTI-BERITA (GRID LENGKAP KRONOLOGIS TERBARU)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Kolom Kiri: 1 Berita Utama Paling Baru (Besar 16:9) & 2 Sub-Featured */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-5 justify-between">
            {mainFeatured && (
              <Link
                href={`/news/${mainFeatured.id}`}
                className="group relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xs block shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C95C8]"
              >
                {mainFeatured.image ? (
                  <Image
                    src={mainFeatured.image}
                    alt={mainFeatured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 650px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-2.5 border border-white/10">
                      <span className="text-[#3C95C8] text-lg font-black font-['Poppins',sans-serif]">
                        JL
                      </span>
                    </div>
                    <span className="text-white/80 font-bold font-['Poppins',sans-serif] text-sm sm:text-base">
                      Jalan Langit Foundation
                    </span>
                    <span className="text-xs text-[#3C95C8] font-medium font-['Lato',sans-serif] mt-0.5">
                      {mainFeatured.category}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10 space-y-2 text-left">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white font-['Poppins',sans-serif] leading-snug line-clamp-2 group-hover:text-sky-200 transition-colors">
                    {mainFeatured.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-['Lato',sans-serif]">
                    {mainFeatured.date} | {mainFeatured.location}
                  </p>
                </div>
              </Link>
            )}

            {/* Sub-Featured (2 Berita Terbaru Selanjutnya) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 shrink-0">
              {subFeatured.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.id}`}
                  className="group flex sm:block items-center gap-4 sm:gap-0 relative w-full sm:aspect-[16/9] rounded-2xl overflow-hidden bg-transparent sm:bg-slate-900 sm:border sm:border-slate-200/80 shadow-none sm:shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C95C8]"
                >
                  <div className="relative w-28 sm:w-full aspect-[16/9] sm:h-full shrink-0 rounded-2xl sm:rounded-none overflow-hidden bg-slate-900 border border-slate-100 sm:border-0">
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 640px) 120px, 320px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center justify-center p-3 text-center">
                        <span className="text-[#3C95C8] text-xs font-black font-['Poppins',sans-serif] mb-0.5">
                          JL
                        </span>
                        <span className="text-white/70 font-semibold text-[11px] font-['Poppins',sans-serif]">
                          Jalan Langit
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none hidden sm:block" />
                  <div className="sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:p-3.5 sm:p-4 z-10 space-y-1 flex-1 min-w-0 text-left">
                    <h4 className="text-sm sm:text-[15px] font-bold text-[#2C2C2C] sm:text-white font-['Poppins',sans-serif] leading-snug line-clamp-2 group-hover:text-[#3C95C8] sm:group-hover:text-sky-200 transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-[#777777] sm:text-slate-300 font-['Lato',sans-serif]">
                      {article.date} | {article.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: 5 Berita Terkini Lainnya */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between h-full gap-5">
            {recentList.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.id}`}
                className="group flex items-center gap-4 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C95C8] rounded-xl"
              >
                <div className="relative w-28 sm:w-32 lg:w-[160px] aspect-[16/9] shrink-0 rounded-2xl overflow-hidden bg-slate-900 border border-slate-100">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 120px, 150px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex flex-col items-center justify-center p-2 text-center">
                      <span className="text-[#3C95C8] text-[11px] font-black font-['Poppins',sans-serif]">
                        JL
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 space-y-1 text-left">
                  <h4 className="text-sm sm:text-[15px] font-bold text-[#2C2C2C] font-['Poppins',sans-serif] leading-snug line-clamp-2 group-hover:text-[#3C95C8] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#777777] font-['Lato',sans-serif]">
                    {article.date} | {article.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
