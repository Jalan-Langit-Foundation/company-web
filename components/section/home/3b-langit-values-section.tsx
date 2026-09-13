"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { VectorBox } from "@/components/ui/vector-box";
import { LangitCard } from "@/components/ui/langit-card";
import { DoodleArrowHint } from "@/components/ui/doodle-arrow-hint";
import { LANGIT_VALUES_DATA } from "@/lib/data/homepage";
import { useAboutValues } from "@/hooks";

interface CardVector {
  dx: number;
  dy: number;
  rot: number;
  skew: number;
  scaleX: number;
  scaleY: number;
}

const DEFAULT_VECTORS: CardVector[] = [
  { dx: 0, dy: 300, rot: -16, skew: -14, scaleX: 0.52, scaleY: 0.44 },
  { dx: 0, dy: 300, rot: -10, skew: -8, scaleX: 0.52, scaleY: 0.44 },
  { dx: 0, dy: 300, rot: -3, skew: -3, scaleX: 0.52, scaleY: 0.44 },
  { dx: 0, dy: 300, rot: 3, skew: 3, scaleX: 0.52, scaleY: 0.44 },
  { dx: 0, dy: 300, rot: 10, skew: 8, scaleX: 0.52, scaleY: 0.44 },
  { dx: 0, dy: 300, rot: 16, skew: 14, scaleX: 0.52, scaleY: 0.44 },
];

export function LangitValuesSection() {
  const { isExpanded } = useAboutValues();
  const [isBoxOpen, setIsBoxOpen] = React.useState(false);
  const [animState, setAnimState] = React.useState<
    "idle-open" | "sucking" | "idle-closed" | "popping" | "expanding-space"
  >("idle-closed");
  const [vectors, setVectors] = React.useState<CardVector[]>(DEFAULT_VECTORS);
  const [isHintVisible, setIsHintVisible] = React.useState(true);
  const [isBoxBouncing, setIsBoxBouncing] = React.useState(false);

  const boxRef = React.useRef<HTMLDivElement | null>(null);
  const cardSlotRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const cardWrapperRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const isAnimatingRef = React.useRef(false);

  // Hitung vektor relatif (dx, dy, rotasi, skew, skala belah ketupat) dari setiap kartu ke mulut rongga 3D VectorBox
  const updateVectors = React.useCallback(() => {
    if (!boxRef.current) return;
    const boxRect = boxRef.current.getBoundingClientRect();
    const mouthX = boxRect.left + boxRect.width / 2;
    // Pusat bukaan mulut belah ketupat VectorBox (y = 130 dalam viewBox 380 = ~0.3421)
    const mouthY = boxRect.top + boxRect.height * 0.342;

    // Lebar mulut rongga kotak dalam screen pixels (207.8px pada viewBox 400x380)
    const mouthWidth = boxRect.width * (207.8 / 400);
    // Target lebar belah ketupat kartu dibuat ~94% dari lebar bukaan agar pas masuk rongga
    const targetRhombusWidth = mouthWidth * 0.94;
    const targetSide = targetRhombusWidth / Math.SQRT2;

    const newVectors: CardVector[] = [];

    cardSlotRefs.current.forEach((slot, idx) => {
      if (!slot) {
        newVectors.push(DEFAULT_VECTORS[idx] || { dx: 0, dy: 300, rot: 0, skew: 0, scaleX: 0.52, scaleY: 0.44 });
        return;
      }

      const slotRect = slot.getBoundingClientRect();
      // Bila kontainer sedang collapse (tinggi 0), gunakan nilai default / nilai yang sudah ada
      if (slotRect.height === 0 || slotRect.width === 0) {
        newVectors.push(vectors[idx] || DEFAULT_VECTORS[idx] || { dx: 0, dy: 300, rot: 0, skew: 0, scaleX: 0.52, scaleY: 0.44 });
        return;
      }

      const cardCenterX = slotRect.left + slotRect.width / 2;
      const cardCenterY = slotRect.top + slotRect.height / 2;

      const dx = mouthX - cardCenterX;
      const dy = mouthY - cardCenterY; // Nilai dy positif karena kartu di atas kotak (tersedot ke bawah)

      const factor = Math.max(-1, Math.min(1, (cardCenterX - mouthX) / 380));
      const rot = factor * 16;
      const skew = factor * 14;

      // Hitung skala kompresi agar kartu persegi tepat menjadi belah ketupat bersisi sama (30 deg)
      const scaleX = targetSide / slotRect.width;
      const scaleY = targetSide / slotRect.height;

      newVectors.push({
        dx: Math.round(dx),
        dy: Math.round(dy),
        rot: Math.round(rot * 10) / 10,
        skew: Math.round(skew * 10) / 10,
        scaleX: Math.round(scaleX * 10000) / 10000,
        scaleY: Math.round(scaleY * 10000) / 10000,
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

  // Durasi fade-out petunjuk sebelum animasi kardus/kartu dimulai
  const HINT_FADE_MS = 280;
  // Durasi transisi geser simetris saat box naik (menutup) dan turun (membuka)
  const BOX_SLIDE_MS = 600;

  // Handler interaktif klik box untuk efek tumpukan 3D isometrik masuk & keluar rongga kardus
  const handleToggleBox = React.useCallback(() => {
    if (isAnimatingRef.current) return;

    if (isBoxOpen) {
      // =========================================================================
      // FLOW MENUTUP:
      // 1. Arrow dan teks ajakan HILANG DULU (fade out selama 280ms)
      // 2. BARU kartu mulai meluncur masuk ke dalam kardus (980ms)
      // 3. Flap box menutup rapat (980ms - 1500ms)
      // 4. Box meluncur NAIK ke atas (selama 600ms)
      // 5. Box mendarat di atas -> arrow & teks ajakan baru muncul ditulis tangan
      // =========================================================================
      isAnimatingRef.current = true;
      setIsHintVisible(false); // 1. Arrow hilang dulu

      // 2. Setelah arrow hilang, BARU kartu mulai masuk
      setTimeout(() => {
        updateVectors();
        setAnimState("sucking");
      }, HINT_FADE_MS);

      // 3. Saat kartu-kartu menghujam ke dasar rongga kardus (~780ms setelah kartu meluncur):
      //    EFEK HENTAKAN BEBAN BERAT (HEAVY IMPACT BOUNCE) seolah ada benda masuk cukup berat
      setTimeout(() => {
        setIsBoxBouncing(true);
        setIsBoxOpen(false); // Flap mulai menutup rapat saat hentakan beban terjadi
      }, HINT_FADE_MS + 780);

      // 4. Setelah getaran pantulan beban berat mereda (680ms)
      setTimeout(() => {
        setIsBoxBouncing(false);
      }, HINT_FADE_MS + 780 + 680);

      // 5. Box sudah stabil & tertutup rapat -> BARU box meluncur NAIK ke atas
      setTimeout(() => {
        setAnimState("idle-closed");
      }, HINT_FADE_MS + 780 + 680 + 100);

      // 6. Selesai seluruh siklus menutup setelah box mendarat di atas
      setTimeout(() => {
        isAnimatingRef.current = false;
        setIsHintVisible(true); // Munculkan arrow ajakan baru ("Coba klik kotaknya" di kanan)
      }, HINT_FADE_MS + 780 + 680 + 100 + BOX_SLIDE_MS);
    } else {
      // =========================================================================
      // FLOW MEMBUKA:
      // 1. Arrow dan teks ajakan HILANG DULU (fade out selama 280ms)
      // 2. BARU box meluncur TURUN ke bawah (selama 600ms)
      // 3. Box mendarat sempurna -> flap box membuka (250ms)
      // 4. Tumpukan kartu meluncur naik dari dalam kardus ke grid slot (1250ms)
      // 5. Kartu mendarat di grid -> arrow & teks ajakan baru muncul ditulis tangan
      // =========================================================================
      isAnimatingRef.current = true;
      setIsHintVisible(false); // 1. Arrow hilang dulu

      // 2. Setelah arrow hilang, BARU box mulai meluncur turun
      setTimeout(() => {
        setAnimState("expanding-space");
      }, HINT_FADE_MS);

      // 3. Setelah box selesai turun sempurna (600ms), buka flap box
      setTimeout(() => {
        setIsBoxOpen(true);
      }, HINT_FADE_MS + BOX_SLIDE_MS);

      // 4. Flap box sudah terbuka (~250ms) -> tumpukan kartu meluncur naik dan membuka
      setTimeout(() => {
        updateVectors();
        setAnimState("popping");
      }, HINT_FADE_MS + BOX_SLIDE_MS + 250);

      // 5. Selesai seluruh sekuens lontar dan kartu mendarat di grid
      setTimeout(() => {
        setAnimState("idle-open");
        isAnimatingRef.current = false;
        updateVectors();
        setIsHintVisible(true); // Munculkan arrow ajakan baru ("Klik untuk menutup" di kiri bawah)
      }, HINT_FADE_MS + BOX_SLIDE_MS + 250 + 1250);
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
                prefix: "Core Values",
                highlight: "Jalan Langit Foundation",
              }}
              multiline={true}
              description="Enam pilar nilai utama yang melandasi setiap langkah dan program kebaikan Jalan Langit Foundation."
              align="center"
              className="mb-8 sm:mb-10"
            />

        {/* Konten Terpadu: 6 Kartu Nilai (Diatas) & Vector Box (Dibawah) */}
        <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
          {/* Grid 6 Kartu Nilai L.A.N.G.I.T (Diatas Box pada Desktop, Langsung Tampil pada Mobile & Tablet) */}
          <div
            className={`w-full grid transition-[grid-template-rows,opacity] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] relative z-20 grid-rows-[1fr] opacity-100 ${
              isSpaceCollapsed
                ? "lg:grid-rows-[0fr] lg:opacity-0 lg:pointer-events-none"
                : "lg:grid-rows-[1fr] lg:opacity-100"
            }`}
          >
            <div className={`min-h-0 ${isContentClipped ? "overflow-visible lg:overflow-hidden" : "overflow-visible"}`}>
              <div className="pb-2 sm:pb-4 lg:pb-10">
                {/* Mobile: 3 kolom x 2 baris (LAN / GIT) ukuran kompak; Tablet: 3 kolom; Desktop: 6 kolom */}
                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-3.5 max-w-sm sm:max-w-xl lg:max-w-none mx-auto">
                  {LANGIT_VALUES_DATA.map((val, idx) => {
                    const isSucking = animState === "sucking";
                    const isPopping = animState === "popping";
                    const isClosed = animState === "idle-closed" || animState === "expanding-space";

                    let animClass = "";
                    if (isSucking) {
                      animClass = "animate-card-stack-suck max-lg:!transform-none max-lg:!opacity-100";
                    } else if (isPopping) {
                      animClass = "animate-card-stack-pop max-lg:!transform-none max-lg:!opacity-100";
                    } else if (isClosed) {
                      animClass = "max-lg:!opacity-100 max-lg:!pointer-events-auto max-lg:!visible max-lg:!block lg:opacity-0 lg:pointer-events-none lg:invisible";
                    }

                    const vec = vectors[idx] || DEFAULT_VECTORS[idx] || { dx: 0, dy: 300, rot: 0, skew: 0, scaleX: 0.52, scaleY: 0.44 };

                    const animStyle: React.CSSProperties = {
                      ["--dx" as string]: `${vec.dx}px`,
                      ["--dy" as string]: `${vec.dy}px`,
                      ["--scale-x" as string]: `${vec.scaleX || 0.52}`,
                      ["--scale-y" as string]: `${vec.scaleY || 0.44}`,
                      ["--stack-y" as string]: `${(5 - idx) * -5}px`,
                      ["--stack-z" as string]: `${idx * 4}px`,
                      zIndex: isSucking || isPopping ? 20 + idx : undefined,
                      ...(isSucking
                        ? { animationDelay: `${idx * 28}ms` }
                        : isPopping
                          ? { animationDelay: `${(5 - idx) * 32}ms` }
                          : {}),
                    } as React.CSSProperties;

                    return (
                      <div
                        key={val.id}
                        ref={(el) => {
                          cardSlotRefs.current[idx] = el;
                        }}
                        className="w-full relative"
                      >
                        <div
                          ref={(el) => {
                            cardWrapperRefs.current[idx] = el;
                          }}
                          style={animStyle}
                          className={`w-full h-full max-lg:!transform-none max-lg:!opacity-100 ${animClass}`}
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

          {/* Box Kebaikan Interaktif (Khusus Tampil di Desktop, Hidden di Mobile & Tablet) */}
          <div
            ref={boxRef}
            onClick={handleToggleBox}
            className="hidden lg:flex relative flex-col items-center cursor-pointer group select-none"
            title={isBoxOpen ? "Klik box untuk menyedot kartu ke dalam box" : "Klik box untuk membuka & mengeluarkan kartu"}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleToggleBox();
              }
            }}
            aria-label={isBoxOpen ? "Tutup kotak nilai LANGIT" : "Buka kotak nilai LANGIT"}
          >
            <div className="relative w-[240px] sm:w-[280px]">
              {/* Layer Belakang: Dinding Dalam & Flap Belakang (z-10, berada di belakang kartu z-20) */}
              <VectorBox
                isOpen={isBoxOpen}
                isBouncing={isBoxBouncing}
                animationDuration={500}
                layer="back"
                className="w-full h-auto"
              />

              {/* Layer Depan: Dinding Depan, Flap Depan & Bibir Depan (z-30, berada di depan kartu z-20) */}
              <div className="absolute inset-0 z-30 pointer-events-none">
                <VectorBox
                  isOpen={isBoxOpen}
                  isBouncing={isBoxBouncing}
                  animationDuration={500}
                  layer="front"
                  className="w-full h-auto"
                />
              </div>

              {/* Petunjuk Panah Coretan Tangan (Hand-drawn Doodle Arrow Hint) */}
              {/* Saat Box Terbuka (Menutup Box): Tampil di KIRI BAWAH menunjuk ke box */}
              {/* Saat Box Tertutup (Membuka Box): Tampil di KANAN menunjuk ke box */}
              <div
                className={`absolute z-40 animate-box-body-float transition-all duration-500 ease-out ${
                  isBoxOpen
                    ? "right-[72%] sm:right-full sm:mr-3 bottom-1 sm:bottom-4"
                    : "left-[75%] sm:left-full sm:ml-3 -top-2 sm:top-2"
                }`}
              >
                <DoodleArrowHint
                  isOpen={isBoxOpen}
                  isVisible={isHintVisible}
                  onClick={handleToggleBox}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
      </div>
    </div>
  );
}
