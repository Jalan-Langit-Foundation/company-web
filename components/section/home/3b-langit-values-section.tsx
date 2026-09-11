"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { VectorBox } from "@/components/ui/vector-box";
import { LangitCard } from "@/components/ui/langit-card";
import { LANGIT_VALUES_DATA } from "@/lib/data/homepage";
import { useAboutValues } from "@/hooks";

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

export function LangitValuesSection() {
  const { isExpanded } = useAboutValues();
  const [isBoxOpen, setIsBoxOpen] = React.useState(false);
  const [animState, setAnimState] = React.useState<
    "idle-open" | "sucking" | "idle-closed" | "popping" | "expanding-space"
  >("idle-closed");
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

  // Update vektor saat inisialisasi & saat window di-resize
  React.useEffect(() => {
    const timer = setTimeout(() => {
      updateVectors();
    }, 60);

    window.addEventListener("resize", updateVectors);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateVectors);
    };
  }, [updateVectors]);

  // Update vektor saat section diperluas/dibuka (di awal & setelah animasi ekspansi selesai)
  React.useEffect(() => {
    if (isExpanded) {
      const timer1 = setTimeout(() => {
        updateVectors();
      }, 150);
      const timer2 = setTimeout(() => {
        updateVectors();
      }, 750);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
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
    <div
      className={`w-full grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isExpanded
          ? "grid-rows-[1fr] opacity-100 border-b border-slate-200/80"
          : "grid-rows-[0fr] opacity-0 pointer-events-none border-b-0"
      }`}
    >
      <div className="min-h-0 overflow-hidden">
        <section
          id="nilai-langit"
          aria-label="Mengenal Nilai L.A.N.G.I.T"
          className="w-full bg-white py-12 sm:py-16 lg:py-20 scroll-mt-20"
        >
          <Container size="xl">
            {/* Section Header */}
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

        {/* Konten Terpadu: 6 Kartu Nilai (Diatas) & Vector Box (Dibawah) */}
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
      </Container>
    </section>
      </div>
    </div>
  );
}
