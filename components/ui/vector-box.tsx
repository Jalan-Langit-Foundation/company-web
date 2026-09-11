"use client";

import * as React from "react";

export interface VectorBoxProps {
  /**
   * Status apakah box terbuka atau tertutup
   * @default true
   */
  isOpen?: boolean;
  /**
   * Durasi animasi buka-tutup dalam milidetik
   * @default 800
   */
  animationDuration?: number;
  /**
   * Ukuran lebar container (CSS class)
   */
  className?: string;
  /**
   * Tampilkan label JLF / Packaging Icon pada dinding box
   * @default true
   */
  showBrandBadge?: boolean;
  /**
   * Layer yang dirender: 'all' (default, memisahkan z-10 dan z-30), 'back', atau 'front'
   */
  layer?: "all" | "back" | "front";
  /**
   * Handler saat box diklik
   */
  onClick?: () => void;
}

// =========================================================================
// GEOMETRI ISOMETRIK 3D SEJATI (SOLID WHITE 100%, ZERO DOUBLE STROKE)
// =========================================================================
const COS30 = Math.cos(Math.PI / 6); // ~0.866025
const SIN30 = 0.5;

const X0 = 200;
const Y0 = 175;
const L = 120;
const W = 120;
const H = 105;
const FLAP_DEPTH = 54; // Kedalaman flap lipatan

function project3D(x: number, y: number, z: number): [number, number] {
  const sx = X0 + (y - x) * COS30;
  const sy = Y0 + (x + y) * SIN30 - z;
  return [Math.round(sx * 10) / 10, Math.round(sy * 10) / 10];
}

function easeOutBack(t: number): number {
  const c1 = 1.35;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Komponen Vektor Box Isometrik Presisi Tinggi:
 * - Menggunakan arsitektur dua-layer (Layer Belakang z-10 & Layer Depan z-30)
 *   sehingga kartu (z-20) dapat masuk SECARA NYATA KE DALAM RONGGA KOTAK:
 *   - Bagian bawah kartu tertutupi oleh bibir depan & flap depan box (z-30).
 *   - Bagian atas kartu tampak meluncur di depan dinding interior dalam box (z-10).
 * - Saat Tertutup: Bersih, solid putih, tertutup rapat dengan garis selang-seling presisi.
 * - Saat Terbuka: Dinding dalam memiliki kedalaman pencahayaan halus, flap solid putih 6px.
 */
export function VectorBox({
  isOpen = true,
  animationDuration = 800,
  className = "w-full max-w-[340px] h-auto",
  showBrandBadge = true,
  layer = "all",
  onClick,
}: VectorBoxProps) {
  const [progress, setProgress] = React.useState<number>(isOpen ? 1 : 0);
  const animRef = React.useRef<number | null>(null);
  const startTimeRef = React.useRef<number | null>(null);
  const startValRef = React.useRef<number>(isOpen ? 1 : 0);

  React.useEffect(() => {
    const targetVal = isOpen ? 1 : 0;
    startTimeRef.current = null;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const t = Math.min(elapsed / animationDuration, 1);
      const easedT = isOpen ? easeOutBack(t) : easeInOutCubic(t);

      const current = startValRef.current + (targetVal - startValRef.current) * easedT;
      setProgress(current);

      if (t < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setProgress(targetVal);
        startValRef.current = targetVal;
      }
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isOpen, animationDuration]);

  const p = Math.max(0, Math.min(1.15, progress));

  // Sudut rotasi lipatan 3D: 0 rad (tertutup) sampai ~215° (terlipat ke bawah)
  const radOpen = (215 * Math.PI) / 180;
  const angle = p * radOpen;

  // -------------------------------------------------------------------------
  // 1. Titik Rusuk Kerangka Kotak (3D -> 2D)
  // -------------------------------------------------------------------------
  const topBack = project3D(0, 0, H);        // (200, 70)
  const topLeft = project3D(L, 0, H);        // (96.1, 130)
  const topRight = project3D(0, W, H);       // (303.9, 130)
  const topFront = project3D(L, W, H);       // (200, 190)

  const botBack = project3D(0, 0, 0);        // (200, 175) - sudut lantai dalam belakang
  const botLeft = project3D(L, 0, 0);        // (96.1, 235)
  const botRight = project3D(0, W, 0);       // (303.9, 235)
  const botFront = project3D(L, W, 0);       // (200, 295)

  // -------------------------------------------------------------------------
  // 2. Titik Tengah Sisi Penutup (Midpoints)
  // -------------------------------------------------------------------------
  const midFrontLeft = [
    (topLeft[0] + topFront[0]) / 2,
    (topLeft[1] + topFront[1]) / 2,
  ]; // (148.1, 160)

  const midBackRight = [
    (topBack[0] + topRight[0]) / 2,
    (topBack[1] + topRight[1]) / 2,
  ]; // (252.0, 100)

  const midBackLeft = [
    (topBack[0] + topLeft[0]) / 2,
    (topBack[1] + topLeft[1]) / 2,
  ]; // (148.1, 100)

  const centerLid = [200, 130];

  // -------------------------------------------------------------------------
  // 3. Flap Depan Kiri (Rotasi 3D)
  // -------------------------------------------------------------------------
  const flX_outer = L - FLAP_DEPTH * Math.cos(angle);
  const flZ_outer = H + FLAP_DEPTH * Math.sin(angle);
  const flH1 = topLeft;
  const flH2 = topFront;
  const flC1 = project3D(flX_outer, 0, flZ_outer);
  const flC2 = project3D(flX_outer, W, flZ_outer);

  // -------------------------------------------------------------------------
  // 4. Flap Depan Kanan (Rotasi 3D)
  // -------------------------------------------------------------------------
  const frY_outer = W - FLAP_DEPTH * Math.cos(angle);
  const frZ_outer = H + FLAP_DEPTH * Math.sin(angle);
  const frH1 = topFront;
  const frH2 = topRight;
  const frC1 = project3D(L, frY_outer, frZ_outer);
  const frC2 = project3D(0, frY_outer, frZ_outer);

  // -------------------------------------------------------------------------
  // 5. Flap Belakang Kiri & Kanan (Rotasi 3D)
  // -------------------------------------------------------------------------
  const blY_outer = FLAP_DEPTH * Math.cos(angle);
  const blZ_outer = H + FLAP_DEPTH * Math.sin(angle);
  const blH1 = topLeft;
  const blH2 = topBack;
  const blC1 = project3D(L, blY_outer, blZ_outer);
  const blC2 = project3D(0, blY_outer, blZ_outer);

  const brX_outer = FLAP_DEPTH * Math.cos(angle);
  const brZ_outer = H + FLAP_DEPTH * Math.sin(angle);
  const brH1 = topBack;
  const brH2 = topRight;
  const brC1 = project3D(brX_outer, 0, brZ_outer);
  const brC2 = project3D(brX_outer, W, brZ_outer);

  // Parameter Visual Seragam: SELURUH STROKE = 6px, FILL SOLID PUTIH
  const STROKE_COLOR = "#0F172A"; // Slate-900 tebal seragam
  const STROKE_WIDTH = 6;         // Ketebalan seragam 6px
  const SOLID_WHITE = "#FFFFFF";  // Solid putih bersih 100%
  const CLOSED_OPACITY = Math.max(0, 1 - p * 3.5); // Opacity garis lipatan saat tertutup

  const renderBack = layer === "all" || layer === "back";
  const renderFront = layer === "all" || layer === "front";

  return (
    <div
      onClick={onClick}
      className={`group/box relative select-none cursor-pointer aspect-[400/380] ${className}`}
    >
      {/* ========================================================================= */}
      {/* LAYER 1: BACK SVG (Z-INDEX 10)                                            */}
      {/* Merender: Bayangan Lantai, Flap Belakang, & Dinding Interior Rongga Box   */}
      {/* ========================================================================= */}
      {renderBack && (
        <svg
          viewBox="0 0 400 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full absolute inset-0 z-10 overflow-visible"
          role="img"
          aria-label="Vektor Kotak Interior Jalan Langit"
        >
          <defs>
            {/* Filter Gaussian Blur untuk bayangan lantai */}
            <filter id="boxFloorBlurSoft" x="-40%" y="-60%" width="180%" height="220%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="7" />
            </filter>
            <filter id="boxFloorBlurCore" x="-30%" y="-50%" width="160%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" />
            </filter>

            {/* Gradasi Ambient Diffused Halus */}
            <radialGradient id="shadowAmbient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0F172A" stopOpacity="0.20" />
              <stop offset="35%" stopColor="#0F172A" stopOpacity="0.12" />
              <stop offset="65%" stopColor="#3C95C8" stopOpacity="0.04" />
              <stop offset="85%" stopColor="#3C95C8" stopOpacity="0.01" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
            </radialGradient>

            {/* Gradasi Contact Core Tepat di Bawah Dasar Kotak */}
            <radialGradient id="shadowCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0F172A" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#0F172A" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. Bayangan Lantai Halus & Difusi (Multi-layer Gaussian Blur) */}
          <g className="transition-all duration-300 ease-out group-hover:scale-[0.85] group-hover:opacity-55 origin-[200px_325px]">
            <ellipse
              cx="200"
              cy="325"
              rx={115 + p * 15}
              ry={18 + p * 3}
              fill="url(#shadowAmbient)"
              filter="url(#boxFloorBlurSoft)"
            />
            <ellipse
              cx="200"
              cy="321"
              rx={70 + p * 10}
              ry={10 + p * 2}
              fill="url(#shadowCore)"
              filter="url(#boxFloorBlurCore)"
            />
          </g>

          {/* Badan Box Belakang (Terangkat saat Hover) */}
          <g className="transition-transform duration-300 ease-out group-hover:-translate-y-2.5">
            {/* Flap Belakang Kiri & Kanan (Saat Terbuka) */}
            {p > 0.02 && (
              <g>
                {/* Flap Belakang Kiri */}
                <polygon
                  points={`${blH1[0]},${blH1[1]} ${blC1[0]},${blC1[1]} ${blC2[0]},${blC2[1]} ${blH2[0]},${blH2[1]}`}
                  fill={SOLID_WHITE}
                />
                <polyline
                  points={`${blH1[0]},${blH1[1]} ${blC1[0]},${blC1[1]} ${blC2[0]},${blC2[1]} ${blH2[0]},${blH2[1]}`}
                  stroke={STROKE_COLOR}
                  strokeWidth={STROKE_WIDTH}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Flap Belakang Kanan */}
                <polygon
                  points={`${brH1[0]},${brH1[1]} ${brC1[0]},${brC1[1]} ${brC2[0]},${brC2[1]} ${brH2[0]},${brH2[1]}`}
                  fill={SOLID_WHITE}
                />
                <polyline
                  points={`${brH1[0]},${brH1[1]} ${brC1[0]},${brC1[1]} ${brC2[0]},${brC2[1]} ${brH2[0]},${brH2[1]}`}
                  stroke={STROKE_COLOR}
                  strokeWidth={STROKE_WIDTH}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            )}

            {/* Dinding Interior Rongga Box (Duduk di Belakang Kartu) */}
            {p > 0.02 && (
              <g>
                {/* Dinding Dalam Belakang-Kiri (Shaded Slate-100) */}
                <polygon
                  points={`${topBack[0]},${topBack[1]} ${topLeft[0]},${topLeft[1]} ${botLeft[0]},${botLeft[1]} ${botBack[0]},${botBack[1]}`}
                  fill="#F1F5F9"
                />
                {/* Dinding Dalam Belakang-Kanan (Shaded Slate-200) */}
                <polygon
                  points={`${topBack[0]},${topBack[1]} ${topRight[0]},${topRight[1]} ${botRight[0]},${botRight[1]} ${botBack[0]},${botBack[1]}`}
                  fill="#E2E8F0"
                />
                {/* Lantai Dasar Dalam Kotak (Shaded Slate-300) */}
                <polygon
                  points={`${botBack[0]},${botBack[1]} ${botLeft[0]},${botLeft[1]} ${botFront[0]},${botFront[1]} ${botRight[0]},${botRight[1]}`}
                  fill="#CBD5E1"
                />

                {/* Rusuk Vertikal Sudut Dalam Belakang */}
                <line
                  x1={topBack[0]}
                  y1={topBack[1]}
                  x2={botBack[0]}
                  y2={botBack[1]}
                  stroke={STROKE_COLOR}
                  strokeWidth={STROKE_WIDTH}
                  strokeLinecap="round"
                />

                {/* Rusuk Bibir Belakang Atas */}
                <polyline
                  points={`${topLeft[0]},${topLeft[1]} ${topBack[0]},${topBack[1]} ${topRight[0]},${topRight[1]}`}
                  stroke={STROKE_COLOR}
                  strokeWidth={STROKE_WIDTH}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            )}
          </g>
        </svg>
      )}

      {/* ========================================================================= */}
      {/* LAYER 2: FRONT SVG (Z-INDEX 30, ABSOLUTE INSET-0)                         */}
      {/* Merender: Dinding Depan, Stempel JLF, Flap Depan, & Bibir Depan Kotak     */}
      {/* Berada DI ATAS kartu (z-20) sehingga kartu masuk SECARA FISIK KE DALAM    */}
      {/* ========================================================================= */}
      {renderFront && (
        <svg
          viewBox="0 0 400 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible absolute inset-0 z-30 pointer-events-none"
          aria-hidden="true"
        >
          {/* Badan Box Depan (Terangkat secara sinkron saat Hover) */}
          <g className="transition-transform duration-300 ease-out group-hover:-translate-y-2.5">
            {/* Dinding Kiri Depan (Solid Putih 100%) */}
            <polygon
              points={`${topLeft[0]},${topLeft[1]} ${topFront[0]},${topFront[1]} ${botFront[0]},${botFront[1]} ${botLeft[0]},${botLeft[1]}`}
              fill={SOLID_WHITE}
            />
            {/* Dinding Kanan Depan (Solid Putih 100%) */}
            <polygon
              points={`${topFront[0]},${topFront[1]} ${topRight[0]},${topRight[1]} ${botRight[0]},${botRight[1]} ${botFront[0]},${botFront[1]}`}
              fill={SOLID_WHITE}
            />

            {/* Detail Stempel JLF pada Dinding Luar Depan */}
            {showBrandBadge && (
              <g>
                {/* Sisi Kiri: Logo Bulat Jalan Langit */}
                <g transform="matrix(0.866 0.5 0 1 96.1 130)">
                  <image
                    href="/images/Master%20Logo%20JLF/Logo%20Jalan%20Langit/Transparan/Bulat/Logo%20bulat%20putih.png"
                    xlinkHref="/images/Master%20Logo%20JLF/Logo%20Jalan%20Langit/Transparan/Bulat/Logo%20bulat%20putih.png"
                    x="36"
                    y="24"
                    width="48"
                    height="48"
                    preserveAspectRatio="xMidYMid meet"
                  />
                  <text
                    x="60"
                    y="81"
                    textAnchor="middle"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="7.5"
                    fontWeight="800"
                    fill="#3C95C8"
                    letterSpacing="1.5"
                  >
                    JALAN LANGIT
                  </text>
                </g>

                {/* Sisi Kanan: Simbol Penanganan (Panah Atas & Payung) */}
                <g transform="matrix(0.866 -0.5 0 1 200 190)">
                  <path
                    d="M38,54 L38,36 M33,41 L38,36 L43,41"
                    stroke="#3C95C8"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M52,54 L52,36 M47,41 L52,36 L57,41"
                    stroke="#3C95C8"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M66,46 C66,38 78,38 78,46 Z M72,46 L72,53 C72,55 70,55 69.5,54"
                    stroke="#3C95C8"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="62"
                    x2="84"
                    y2="62"
                    stroke="#3C95C8"
                    strokeWidth="2"
                    strokeDasharray="5 2 2 2 6 2 3 2"
                    opacity="0.75"
                  />
                  <text
                    x="57"
                    y="73"
                    textAnchor="middle"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontSize="6"
                    fontWeight="700"
                    fill="#3C95C8"
                    letterSpacing="1.2"
                    opacity="0.85"
                  >
                    HANDLE WITH CARE
                  </text>
                </g>
              </g>
            )}

            {/* Garis Rusuk Dinding Depan & Sisi Samping (6px Seragam) */}
            <g stroke={STROKE_COLOR} strokeWidth={STROKE_WIDTH} strokeLinejoin="round" strokeLinecap="round" fill="none">
              {/* Rusuk Samping Kiri & Kanan Luar */}
              <line x1={botLeft[0]} y1={botLeft[1]} x2={topLeft[0]} y2={topLeft[1]} />
              <line x1={botRight[0]} y1={botRight[1]} x2={topRight[0]} y2={topRight[1]} />

              {/* Rusuk Bawah V */}
              <polyline
                points={`${botLeft[0]},${botLeft[1]} ${botFront[0]},${botFront[1]} ${botRight[0]},${botRight[1]}`}
              />

              {/* Rusuk Vertikal Depan Tengah */}
              <line x1={topFront[0]} y1={topFront[1]} x2={botFront[0]} y2={botFront[1]} />
            </g>

            {/* Flap Depan Kiri & Kanan (Saat Terbuka) - Solid Putih Menutupi Sisi Samping */}
            {p > 0.02 && (
              <g>
                {/* Flap Depan Kiri */}
                <polygon
                  points={`${flH1[0]},${flH1[1]} ${flC1[0]},${flC1[1]} ${flC2[0]},${flC2[1]} ${flH2[0]},${flH2[1]}`}
                  fill={SOLID_WHITE}
                />
                <polyline
                  points={`${flH1[0]},${flH1[1]} ${flC1[0]},${flC1[1]} ${flC2[0]},${flC2[1]} ${flH2[0]},${flH2[1]}`}
                  stroke={STROKE_COLOR}
                  strokeWidth={STROKE_WIDTH}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Flap Depan Kanan */}
                <polygon
                  points={`${frH1[0]},${frH1[1]} ${frC1[0]},${frC1[1]} ${frC2[0]},${frC2[1]} ${frH2[0]},${frH2[1]}`}
                  fill={SOLID_WHITE}
                />
                <polyline
                  points={`${frH1[0]},${frH1[1]} ${frC1[0]},${frC1[1]} ${frC2[0]},${frC2[1]} ${frH2[0]},${frH2[1]}`}
                  stroke={STROKE_COLOR}
                  strokeWidth={STROKE_WIDTH}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                />
              </g>
            )}

            {/* Garis Rusuk Bibir Depan Atas (Engsel Flap Depan - Menutupi Kartu Saat Masuk) */}
            <polyline
              points={`${topLeft[0]},${topLeft[1]} ${topFront[0]},${topFront[1]} ${topRight[0]},${topRight[1]}`}
              stroke={STROKE_COLOR}
              strokeWidth={STROKE_WIDTH}
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
            />

            {/* Saat Tertutup: Permukaan Penutup Atas Solid Putih & Garis Lipatan Selang-Seling */}
            {CLOSED_OPACITY > 0.01 && (
              <g opacity={CLOSED_OPACITY}>
                {/* Permukaan Atas Menutup Rapat Seluruh Lubang Rongga */}
                <polygon
                  points={`${topBack[0]},${topBack[1]} ${topRight[0]},${topRight[1]} ${topFront[0]},${topFront[1]} ${topLeft[0]},${topLeft[1]}`}
                  fill={SOLID_WHITE}
                  stroke={STROKE_COLOR}
                  strokeWidth={STROKE_WIDTH}
                  strokeLinejoin="round"
                />
                {/* Garis Penuh Diagonal: Depan-Kiri ke Belakang-Kanan */}
                <line
                  x1={midFrontLeft[0]}
                  y1={midFrontLeft[1]}
                  x2={midBackRight[0]}
                  y2={midBackRight[1]}
                  stroke={STROKE_COLOR}
                  strokeWidth={STROKE_WIDTH}
                  strokeLinecap="round"
                />
                {/* Garis Setengah Diagonal: Belakang-Kiri ke Pusat Lid */}
                <line
                  x1={midBackLeft[0]}
                  y1={midBackLeft[1]}
                  x2={centerLid[0]}
                  y2={centerLid[1]}
                  stroke={STROKE_COLOR}
                  strokeWidth={STROKE_WIDTH}
                  strokeLinecap="round"
                />
              </g>
            )}
          </g>
        </svg>
      )}
    </div>
  );
}
