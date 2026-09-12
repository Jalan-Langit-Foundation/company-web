"use client";

import * as React from "react";
import { LangitValue } from "@/lib/data/homepage";

export interface LangitCardProps {
  value: LangitValue;
  index?: number;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

/**
 * Variasi Posisi & Crop Font per Huruf (Natural Font Typography):
 * Setiap huruf memiliki posisi unik dan sebagian bentuknya terpotong oleh batas kartu:
 *
 * - L: Bergeser ke kiri bawah (-bottom-8 -left-4) -> terpotong di sudut kiri bawah.
 * - A: Bergeser ke atas tengah (-top-10) -> puncak huruf terpotong di batas atas.
 * - N: Bergeser ke kiri (-left-12 -top-4) -> tiang kiri terpotong di kiri, diagonal melintang ke tiang kanan.
 * - G: Bergeser ke kanan bawah (-bottom-10 -right-6) -> lengkungan bawah & kanan terpotong.
 * - I: Bergeser ke kiri tegak (-left-2) -> batang vertikal tebal membentang di sisi kiri.
 * - T: Bergeser ke kanan atas (-top-12 -right-8) -> palang atas kanan terpotong, tiang turun di kanan.
 */
const LETTER_POSITION_CONFIG: Record<string, string> = {
  L: "-bottom-10 -left-6 sm:-bottom-12 sm:-left-8",
  A: "-top-31 sm:-top-36 left-1/2 -translate-x-1/2",
  N: "-top-12 -left-16 sm:-top-16 sm:-left-20",
  G: "-bottom-16 -right-16 sm:-bottom-20 sm:-right-20",
  I: "top-1/2 -translate-y-1/2 -left-8 sm:-left-10",
  T: "-bottom-30 sm:-bottom-34 -right-8 sm:-right-10",
};

/**
 * Komponen Card Nilai L.A.N.G.I.T:
 * - Menggunakan font tipografi asli yang proporsional, mulus, dan tidak terdistorsi.
 * - Posisi bervariasi per huruf dengan efek terpotong asimetris yang dinamis.
 * - Warna solid Primary Blue (#3C95C8) dengan opacity.
 * - Teks foreground: Menampilkan kepanjangan (Keyword) dan arti filosofi secara kontras dan rapi.
 */
export function LangitCard({
  value,
  index = 0,
  className = "",
  isActive = false,
  onClick,
}: LangitCardProps) {
  const posClass = LETTER_POSITION_CONFIG[value.letter] || "-bottom-6 -right-6";

  return (
    <div
      onClick={onClick}
      style={{
        animationDelay: `${(index || 0) * 0.75}s`,
      }}
      className={`group relative flex flex-col items-center justify-center px-2 py-4 sm:px-3 sm:py-5 rounded-2xl overflow-hidden border transition-all duration-300 select-none cursor-pointer min-h-[165px] sm:min-h-[180px] aspect-[4/5] sm:aspect-auto bg-[linear-gradient(110deg,#F6FAFD_0%,#FFFFFF_30%,#EDF7FD_50%,#FFFFFF_70%,#F6FAFD_100%)] animate-gradient-flow ${
        isActive
          ? "border-[#3C95C8] shadow-[0_8px_20px_rgba(0,0,0,0.06)] -translate-y-1 ring-2 ring-[#3C95C8]/20"
          : "border-slate-200/80 hover:border-slate-300/90 shadow-none hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1"
      } ${className}`}
    >
      {/* 1. Huruf Asli Font Besar Terpotong Asimetris (Bervariasi Tiap Huruf) */}
      <div
        aria-hidden="true"
        className={`absolute font-black text-[220px] sm:text-[250px] lg:text-[270px] xl:text-[290px] leading-none font-heading text-[#3C95C8] opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-300 pointer-events-none select-none ${posClass}`}
      >
        {value.letter}
      </div>

      {/* 2. Konten Teks Foreground: Kepanjangan Huruf & Makna Nilai (Sesuai ukuran judul & paragraf video card) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full min-w-0 px-1">
        {/* Kepanjangan Huruf (Keyword) — text-base font-bold */}
        <h5 className="text-base font-bold text-[#2C2C2C] font-heading leading-snug tracking-tight whitespace-nowrap">
          {value.keyword}
        </h5>

        {/* Makna Bahasa Indonesia — text-xs sm:text-sm */}
        <p className="text-xs sm:text-sm font-medium text-[#2C2C2C] font-body mt-1 leading-relaxed tracking-tight whitespace-nowrap">
          {value.meaning}
        </p>
      </div>
    </div>
  );
}
