"use client";

import * as React from "react";

export interface DoodleArrowHintProps {
  /**
   * Status apakah box terbuka atau tertutup
   */
  isOpen?: boolean;
  /**
   * Status visibilitas hint (fade in / out)
   * @default true
   */
  isVisible?: boolean;
  /**
   * Optional className untuk container
   */
  className?: string;
  /**
   * Handler saat petunjuk diklik
   */
  onClick?: () => void;
}

/**
 * Komponen Petunjuk Panah Coretan Tangan (Hand-drawn Doodle Arrow Hint):
 * - Saat Box Terbuka (Menutup Box): Tampil di KIRI BAWAH menunjuk ke arah atas-kanan ke kotak ("Klik untuk menutup").
 * - Saat Box Tertutup (Membuka Box): Tampil di KANAN menunjuk ke arah kiri-bawah ke kotak ("Coba klik kotaknya").
 * - Efek animasi "ditulis tangan": path SVG digambar progresif dari kosong menjadi utuh.
 * - Saat box diklik, hint fade-out terlebih dahulu sebelum animasi box/kartu dimulai.
 * - Tipografi tulisan tangan alami (Caveat) dengan efek goyangan halus (organic float).
 */
export function DoodleArrowHint({
  isOpen = false,
  isVisible = true,
  className = "",
  onClick,
}: DoodleArrowHintProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = React.useState(false);
  const [animCycle, setAnimCycle] = React.useState(0);

  const textLabel = isOpen ? "Klik untuk menutup" : "Coba klik kotaknya";

  // 1. Deteksi saat elemen masuk/keluar viewport layar pengguna
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Picu animasi menggambar panah saat pengguna scroll ke posisi kotak
          setAnimCycle((c) => c + 1);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);



  // 3. Ulangi animasi goresan secara periodik (setiap 6.5 detik) agar ajakan selalu hidup
  React.useEffect(() => {
    if (!isVisible || !isInView) return;

    const interval = setInterval(() => {
      setAnimCycle((c) => c + 1);
    }, 6500);

    return () => clearInterval(interval);
  }, [isVisible, isInView]);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className={`relative select-none pointer-events-auto cursor-pointer group/hint transition-all duration-300 ease-out ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      } ${className}`}
      aria-label={isOpen ? "Petunjuk klik untuk menutup kotak" : "Petunjuk klik untuk membuka kotak"}
      role="note"
    >
      <div className={`animate-doodle-float flex flex-col transition-transform duration-300 group-hover/hint:scale-105 ${
        isOpen ? "items-start" : "items-start"
      }`}>
        {/* JIKA BOX TERBUKA (Petunjuk Menutup Box di Kiri Bawah) */}
        {isOpen ? (
          <React.Fragment key={`open-${isVisible ? "v" : "h"}-${animCycle}`}>
            {/* Panah Coretan Tangan Mengarah ke Atas-Kanan (Up-Right towards Box) */}
            <svg
              viewBox="0 0 120 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 sm:w-32 h-auto overflow-visible"
              aria-hidden="true"
            >
              {/* Batang Panah Coretan Melingkar (Curly Loop Doodle Path ke Atas-Kanan) */}
              <path
                d="M 18 65 C 24 46, 32 35, 46 40 C 60 46, 62 64, 48 66 C 36 68, 34 48, 52 32 C 70 16, 88 15, 106 12"
                stroke="#3C95C8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw-line"
              />

              {/* Garis Aksen Sketsa Ganda Halus */}
              <path
                d="M 22 64 C 27 48, 35 40, 45 44"
                stroke="#3C95C8"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.5"
                className="animate-draw-line"
              />

              {/* Ujung Kepala Panah Menunjuk ke Arah Kotak (Arrowhead ke Atas-Kanan) */}
              <path
                d="M 88 12 L 106 12 L 98 28"
                stroke="#3C95C8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw-head"
              />
            </svg>

            {/* Teks Catatan Tangan di Kiri Bawah */}
            <div
              className="animate-doodle-text flex items-center gap-1.5 -mt-1 pl-1"
            >
              <span
                className="font-handwriting text-xl sm:text-2xl text-[#3C95C8] font-bold tracking-wide drop-shadow-xs whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-caveat), 'Caveat', cursive, sans-serif",
                  textShadow: "0 1px 2px rgba(255,255,255,0.8)",
                }}
              >
                {textLabel}
              </span>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment key={`closed-${isVisible ? "v" : "h"}-${animCycle}`}>
            {/* JIKA BOX TERTUTUP (Petunjuk Membuka Box di Kanan) */}
            {/* Teks Catatan Tangan */}
            <div
              className="animate-doodle-text flex items-center gap-1.5 pl-4 sm:pl-6"
            >
              <span
                className="font-handwriting text-xl sm:text-2xl text-[#3C95C8] font-bold tracking-wide drop-shadow-xs whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-caveat), 'Caveat', cursive, sans-serif",
                  textShadow: "0 1px 2px rgba(255,255,255,0.8)",
                }}
              >
                {textLabel}
              </span>
            </div>

            {/* Panah Coretan Tangan Gaya 2: Lengkungan Sapuan Busur Dinamis dengan Sketsa Ganda (Sweeping Crescent Arch) */}
            <svg
              viewBox="0 0 120 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 sm:w-32 h-auto overflow-visible -mt-0.5 sm:-mt-1"
              aria-hidden="true"
            >
              {/* Batang Utama: Lengkungan Melengkung Menukik ke Kiri-Bawah (Tanpa Loop - Gaya Berbeda) */}
              <path
                d="M 112 18 C 90 15, 46 25, 14 52"
                stroke="#3C95C8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw-line"
              />

              {/* Garis Aksen Sketsa Ekor Ganda Otentik (Persis Panah Kiri-Atas pada Gambar Referensi) */}
              <path
                d="M 116 26 C 96 22, 64 30, 36 45"
                stroke="#3C95C8"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.55"
                className="animate-draw-line"
              />

              {/* Ujung Kepala Panah Bersayap Lebar Mengarah ke Kotak (Arrowhead) */}
              <path
                d="M 14 36 L 14 53 L 30 52"
                stroke="#3C95C8"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw-head"
              />
            </svg>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
