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
  L: "-bottom-6 -left-4 sm:-bottom-8 sm:-left-6",
  A: "-top-14 sm:-top-18 lg:-top-20 left-1/2 -translate-x-1/2",
  N: "-top-6 -left-8 sm:-top-8 sm:-left-10",
  G: "-bottom-10 -right-8 sm:-bottom-12 sm:-right-10",
  I: "top-1/2 -translate-y-1/2 -left-4 sm:-left-6",
  T: "-bottom-14 sm:-bottom-18 lg:-bottom-20 -right-4 sm:-right-6",
};

/**
 * Komponen Card Nilai L.A.N.G.I.T:
 * - Rasio tepat 1:1 (Square) pada setiap device.
 * - Menggunakan font tipografi asli yang proporsional, mulus, dan tidak terdistorsi.
 * - Watermark huruf asimetris terpotong dinamis.
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
      className={`group relative flex flex-col items-center justify-center p-2 sm:p-2.5 lg:p-3 rounded-2xl overflow-hidden border transition-all duration-300 select-none cursor-pointer aspect-square w-full bg-[linear-gradient(110deg,#F6FAFD_0%,#FFFFFF_30%,#EDF7FD_50%,#FFFFFF_70%,#F6FAFD_100%)] animate-gradient-flow ${
        isActive
          ? "border-[#3C95C8] shadow-[0_10px_24px_rgba(0,0,0,0.07)] -translate-y-1 ring-2 ring-[#3C95C8]/20"
          : "border-slate-200/80 hover:border-slate-300/90 shadow-none hover:shadow-[0_10px_24px_rgba(0,0,0,0.07)] hover:-translate-y-1"
      } ${className}`}
    >
      {/* 1. Huruf Asli Font Besar Terpotong Asimetris (Bervariasi Tiap Huruf) */}
      <div
        aria-hidden="true"
        className={`absolute font-black text-[120px] sm:text-[145px] lg:text-[160px] xl:text-[180px] leading-none font-heading text-[#3C95C8] opacity-[0.08] group-hover:opacity-[0.14] transition-opacity duration-300 pointer-events-none select-none ${posClass}`}
      >
        {value.letter}
      </div>

      {/* 2. Konten Teks Foreground: Kepanjangan Huruf & Makna Nilai */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full min-w-0 px-0.5 sm:px-1">
        {/* Kepanjangan Huruf (Keyword) */}
        <h5 className="text-xs sm:text-sm lg:text-[13px] xl:text-sm font-bold text-[#2C2C2C] font-heading leading-tight tracking-tight">
          {value.keyword}
        </h5>

        {/* Makna Nilai */}
        <p className="text-[10px] sm:text-xs lg:text-[11px] xl:text-xs font-medium text-[#555555] font-body mt-0.5 sm:mt-1 leading-snug tracking-tight text-center">
          {value.meaning}
        </p>
      </div>
    </div>
  );
}
