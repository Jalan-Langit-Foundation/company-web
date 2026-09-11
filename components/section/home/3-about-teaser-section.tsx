"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { VectorBox } from "@/components/ui/vector-box";
import { LangitCard } from "@/components/ui/langit-card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ABOUT_TEASER_DATA, LANGIT_VALUES_DATA } from "@/lib/data/homepage";

interface CardVector {
  dx: number;
  dy: number;
  rot: number;
  skew: number;
}

const DEFAULT_VECTORS: CardVector[] = [
  { dx: 0, dy: 300, rot: -16, skew: -14 },
  { dx: 0, dy: 300, rot: -10, skew: -8 },
  { dx: 0, dy: 300, rot: -3, skew: -3 },
  { dx: 0, dy: 300, rot: 3, skew: 3 },
  { dx: 0, dy: 300, rot: 10, skew: 8 },
  { dx: 0, dy: 300, rot: 16, skew: 14 },
];

export function AboutTeaserSection() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isBoxOpen, setIsBoxOpen] = React.useState(true);
  const [animState, setAnimState] = React.useState<
    "idle-open" | "sucking" | "idle-closed" | "popping" | "expanding-space"
  >("idle-open");
  const [vectors, setVectors] = React.useState<CardVector[]>(DEFAULT_VECTORS);

  const boxRef = React.useRef<HTMLDivElement | null>(null);
  const cardSlotRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const cardWrapperRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const isAnimatingRef = React.useRef(false);

  // Hitung vektor relatif (dx, dy, rotasi, skew) dari setiap kartu ke mulut rongga 3D VectorBox
  const updateVectors = React.useCallback(() => {
    if (!boxRef.current) return;
    const boxRect = boxRef.current.getBoundingClientRect();
    const mouthX = boxRect.left + boxRect.width / 2;
    const mouthY = boxRect.top + boxRect.height * 0.36; // Pusat rongga bukaan mulut atas kotak

    const newVectors: CardVector[] = [];

    cardSlotRefs.current.forEach((slot, idx) => {
      if (!slot) {
        newVectors.push(DEFAULT_VECTORS[idx] || { dx: 0, dy: 300, rot: 0, skew: 0 });
        return;
      }

      const slotRect = slot.getBoundingClientRect();
      // Bila kontainer sedang collapse (tinggi 0), gunakan nilai default / nilai yang sudah ada
      if (slotRect.height === 0) {
        newVectors.push(vectors[idx] || DEFAULT_VECTORS[idx] || { dx: 0, dy: 300, rot: 0, skew: 0 });
        return;
      }

      const cardCenterX = slotRect.left + slotRect.width / 2;
      const cardCenterY = slotRect.top + slotRect.height / 2;

      const dx = mouthX - cardCenterX;
      const dy = mouthY - cardCenterY; // Nilai dy positif karena kartu di atas kotak (tersedot ke bawah)

      // Lengkungan & distorsi kurva Genie (macOS minimize effect ke bawah)
      // Kartu di kiri meliuk ke arah kanan bawah, kartu di kanan meliuk ke kiri bawah
      const factor = Math.max(-1, Math.min(1, (cardCenterX - mouthX) / 380));
      const rot = factor * 16;
      const skew = factor * 14;

      newVectors.push({
        dx: Math.round(dx),
        dy: Math.round(dy),
        rot: Math.round(rot * 10) / 10,
        skew: Math.round(skew * 10) / 10,
      });
    });

    setVectors(newVectors);
  }, [vectors]);

  // Update vektor saat section diekspansi & saat window di-resize
  React.useEffect(() => {
    if (!isExpanded) return;

    const timer = setTimeout(() => {
      updateVectors();
    }, 60);

    window.addEventListener("resize", updateVectors);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateVectors);
    };
  }, [isExpanded, updateVectors]);

  // Durasi transisi geser simetris saat box naik (menutup) dan turun (membuka)
  const BOX_SLIDE_MS = 600;

  // Handler interaktif klik box untuk efek hisap / lontar Genie dengan sekuens pergerakan box yang simetris dan butter-smooth
  const handleToggleBox = React.useCallback(() => {
    if (isAnimatingRef.current) return;

    if (isBoxOpen) {
      // =========================================================================
      // FLOW MENUTUP:
      // 1. Kartu tersedot ke bawah masuk ke rongga box (0 - 780ms)
      // 2. Flap box menutup rapat (780ms - 1250ms)
      // 3. Setelah box tertutup rapat, box meluncur NAIK ke atas (selama 600ms)
      // =========================================================================
      isAnimatingRef.current = true;
      updateVectors();
      setAnimState("sucking");

      // Tunggu hingga semua 6 kartu selesai masuk sempurna ke mulut box
      setTimeout(() => {
        setIsBoxOpen(false);
      }, 780);

      // Setelah flap box selesai menutup rapat (~470ms setelah mulai tutup),
      // hilangkan space kartu sehingga box meluncur naik ke atas secara mulus
      setTimeout(() => {
        setAnimState("idle-closed");
      }, 1250);

      // Selesai seluruh siklus menutup setelah box mendarat di atas
      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 1250 + BOX_SLIDE_MS);
    } else {
      // =========================================================================
      // FLOW MEMBUKA:
      // 1. Box meluncur TURUN ke bawah (selama 600ms - waktu yang SAMA PERSIS dengan saat naik)
      // 2. Box mendarat sempurna -> flap box membuka (250ms)
      // 3. Flap terbuka -> kartu meluncur keluar melontar ke atas dari dalam box
      // =========================================================================
      isAnimatingRef.current = true;

      // Langkah 1: Buka space kartu di atas sehingga box meluncur turun ke posisi bawah selama 600ms
      setAnimState("expanding-space");

      // Langkah 2: Setelah box selesai turun sempurna (600ms), buka flap box
      setTimeout(() => {
        setIsBoxOpen(true);
      }, BOX_SLIDE_MS);

      // Langkah 3: Flap box sudah terbuka (~250ms), slot kartu settled -> lontar kartu ke atas
      setTimeout(() => {
        updateVectors();
        setAnimState("popping");
      }, BOX_SLIDE_MS + 250);

      // Selesai seluruh sekuens lontar dan kartu mendarat di grid
      setTimeout(() => {
        setAnimState("idle-open");
        isAnimatingRef.current = false;
        updateVectors();
      }, BOX_SLIDE_MS + 250 + 1150);
    }
  }, [isBoxOpen, updateVectors]);

  const isSpaceCollapsed = animState === "idle-closed";
  const isContentClipped = animState === "idle-closed" || animState === "expanding-space";

  return (
    <section
      id="tentang-kami"
      aria-label="Tentang Jalan Langit Foundation"
      className="w-full bg-white py-12 sm:py-20 lg:py-24 border-b border-slate-200/80"
    >
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* Kolom Kiri: Quotes Manifesto dengan Quote Biru di Belakang & Card Putih Menimpa */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <div className="relative flex items-center justify-center py-6 sm:py-10 min-h-[240px] sm:min-h-[340px]">
              {/* Vektor Tanda Kutip Ganda Geometris dengan Warna Primary Blue #3C95C8 */}
              <svg
                viewBox="0 0 150 145"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] sm:w-[330px] h-auto text-[#3C95C8] opacity-90 select-none pointer-events-none drop-shadow-xs -rotate-2"
                fill="currentColor"
                aria-hidden="true"
              >
                {/* Tanda Kutip Kiri: Balok Datar Atas & Ekor Melengkung Bawah */}
                <path d="M0,0 L65,0 L65,70 C65,108 50,132 15,145 L2,130 C25,116 35,96 35,70 L0,70 Z" />
                {/* Tanda Kutip Kanan: Balok Datar Atas & Ekor Melengkung Bawah */}
                <path d="M85,0 L150,0 L150,70 C150,108 135,132 100,145 L87,130 C110,116 120,96 120,70 L85,70 Z" />
              </svg>

              {/* Card Putih Mengambang dengan Shadow Halus yang Menimpa */}
              <div className="relative z-10 w-full max-w-[270px] sm:max-w-[380px] lg:max-w-[400px] rounded-2xl bg-white p-4 sm:p-7 shadow-[0_12px_32px_rgba(0,0,0,0.07)] border border-slate-100 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                {/* Badge Logo Resmi di Sudut Kiri Atas */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8.5 h-8.5 sm:w-11 sm:h-11 rounded-full bg-[#3C95C8] shadow-md flex items-center justify-center border-2 border-white overflow-hidden p-1">
                  <Image
                    src="/images/Master%20Logo%20JLF/Logo%20Jalan%20Langit/Transparan/Bulat/Logo%20Only%20white.png"
                    alt="Logo Yayasan Jalan Langit"
                    width={64}
                    height={64}
                    unoptimized
                    priority
                    className="w-full h-full object-contain scale-[1.2] drop-shadow-xs"
                  />
                </div>

                <blockquote className="text-center font-['Poppins',sans-serif]">
                  <p className="text-sm sm:text-lg lg:text-[19px] font-bold leading-snug tracking-tight">
                    <span className="text-[#2C2C2C]">
                      {ABOUT_TEASER_DATA.quote.line1}
                    </span>{" "}
                    <span className="text-[#3C95C8]">
                      {ABOUT_TEASER_DATA.quote.line2}
                    </span>
                  </p>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Headline, Copy Teks & Tombol Ekspansi Nilai */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Headline Sesuai Referensi Gambar */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#2C2C2C] font-['Poppins',sans-serif] leading-tight tracking-tight">
              {ABOUT_TEASER_DATA.headline.prefix}
              <br />
              <span className="text-[#3C95C8]">
                {ABOUT_TEASER_DATA.headline.highlight}
              </span>
            </h2>

            {/* Paragraf Copy */}
            <div className="flex flex-col gap-4 text-[#555555] font-['Lato',sans-serif] text-sm sm:text-base leading-relaxed">
              {ABOUT_TEASER_DATA.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Tombol CTA: Baca selengkapnya untuk ekspansi */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                className="inline-flex items-center gap-1.5 font-normal text-[#3C95C8] hover:text-[#2c7ca9] font-['Lato',sans-serif] text-sm sm:text-base cursor-pointer transition-colors"
                aria-expanded={isExpanded}
              >
                <span className="leading-none">{isExpanded ? "Tutup ringkasan" : ABOUT_TEASER_DATA.cta.label}</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 shrink-0" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* KONTEN TERPADU: Card Nilai L.A.N.G.I.T (Diatas) & Vector Box (Dibawah) */}
        {isExpanded && (
          <div className="mt-12 sm:mt-16 pt-10 sm:pt-14 border-t border-slate-200/80 animate-in fade-in slide-in-from-top-4 duration-500">
            {/* 1. SECTION HEADER (Dengan multiline agar L.A.N.G.I.T berada di baris kedua) */}
            <SectionHeader
              headline={{
                prefix: "Mengenal Nilai",
                highlight: "L.A.N.G.I.T",
              }}
              multiline={true}
              description="Enam pilar nilai utama yang melandasi setiap langkah dan program kebaikan Jalan Langit Foundation."
              align="center"
              className="mb-8 sm:mb-10"
            />

            {/* 2. PENYATUAN 6 KARTU NILAI (DIATAS) & VECTOR BOX (DIBAWAH) */}
            <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
              {/* Grid 6 Kartu Nilai L.A.N.G.I.T (Diatas Box, Space Kosong Menyesuaikan Tanpa Patahan) */}
              <div
                className={`w-full grid transition-[grid-template-rows,opacity] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] relative z-20 ${
                  isSpaceCollapsed
                    ? "grid-rows-[0fr] opacity-0 pointer-events-none"
                    : "grid-rows-[1fr] opacity-100"
                }`}
              >
                <div className={`min-h-0 ${isContentClipped ? "overflow-hidden" : "overflow-visible"}`}>
                  <div className="pb-8 sm:pb-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-3.5">
                      {LANGIT_VALUES_DATA.map((val, idx) => {
                        const isSucking = animState === "sucking";
                        const isPopping = animState === "popping";
                        const isClosed = animState === "idle-closed" || animState === "expanding-space";

                        let animClass = "";
                        if (isSucking) {
                          animClass = "animate-genie-suck";
                        } else if (isPopping) {
                          animClass = "animate-genie-pop";
                        } else if (isClosed) {
                          animClass = "opacity-0 pointer-events-none invisible";
                        }

                        const vec = vectors[idx] || DEFAULT_VECTORS[idx] || { dx: 0, dy: 300, rot: 0, skew: 0 };

                        const animStyle: React.CSSProperties = {
                          ["--dx" as string]: `${vec.dx}px`,
                          ["--dy" as string]: `${vec.dy}px`,
                          ["--rot" as string]: `${vec.rot}deg`,
                          ["--skew" as string]: `${vec.skew}deg`,
                          ...(isSucking
                            ? { animationDelay: `${(5 - idx) * 45}ms` }
                            : isPopping
                              ? { animationDelay: `${idx * 70}ms` }
                              : {}),
                        } as React.CSSProperties;

                        return (
                          <div
                            key={val.id}
                            ref={(el) => {
                              cardSlotRefs.current[idx] = el;
                            }}
                            className="w-full relative [perspective:1000px]"
                          >
                            <div
                              ref={(el) => {
                                cardWrapperRefs.current[idx] = el;
                              }}
                              style={animStyle}
                              className={`w-full h-full [transform-style:preserve-3d] ${animClass}`}
                            >
                              <LangitCard
                                value={val}
                                index={idx}
                                className="w-full h-full"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Box Kebaikan Interaktif (Dibawah Kartu) */}
              <div
                ref={boxRef}
                onClick={handleToggleBox}
                className="relative z-10 flex flex-col items-center cursor-pointer group select-none"
                title={isBoxOpen ? "Klik box untuk menyedot kartu ke dalam box" : "Klik box untuk membuka & mengeluarkan kartu"}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleToggleBox();
                  }
                }}
                aria-label={isBoxOpen ? "Tutup kardus nilai LANGIT" : "Buka kardus nilai LANGIT"}
              >
                <VectorBox
                  isOpen={isBoxOpen}
                  animationDuration={500}
                  className="w-[240px] sm:w-[280px]"
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}




