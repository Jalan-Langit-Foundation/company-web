"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { IMPACT_STATS, ImpactStat } from "@/lib/data/homepage";
import { cn } from "@/lib/utils";

function CounterCard({ stat, isVisible }: { stat: ImpactStat; isVisible: boolean }) {
  const [currentValue, setCurrentValue] = React.useState(0);

  React.useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 1800; // Durasi animasi 1.8 detik
    const target = stat.targetValue;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out cubic / expo) untuk animasi cepat di awal dan melambat halus di akhir
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(easeOut * target);

      setCurrentValue(val);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCurrentValue(target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isVisible, stat.targetValue]);

  // Format angka: gunakan pemisah titik ribuan kecuali jika useGrouping diset false (misal untuk tahun)
  const formattedNumber =
    stat.useGrouping === false
      ? currentValue.toString()
      : currentValue.toLocaleString("id-ID");

  return (
    <div className="flex flex-col items-center justify-center text-center px-2 sm:px-4 lg:px-6 group overflow-hidden">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3C95C8] font-['Poppins',sans-serif] tracking-tight drop-shadow-xs transition-transform duration-300 group-hover:scale-105 tabular-nums">
        {stat.prefix || ""}
        {formattedNumber}
        {stat.suffix || ""}
      </div>
      <p className="text-[11px] sm:text-xs lg:text-sm font-medium text-[#555555] font-['Lato',sans-serif] mt-1.5 sm:mt-2 whitespace-nowrap tracking-tight">
        {stat.label}
      </p>
    </div>
  );
}

export function ImpactSnapshotSection() {
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Jalankan animasi sekali saat terlihat
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact-snapshot"
      aria-label="Ringkasan Dampak Kebaikan"
      className={cn(
        "relative w-full overflow-hidden py-8 sm:py-10 lg:py-14",
        "bg-[linear-gradient(110deg,#F6FAFD_0%,#FFFFFF_30%,#EDF7FD_50%,#FFFFFF_70%,#F6FAFD_100%)]",
        "animate-gradient-flow",
        "border-y border-slate-100 shadow-[0_2px_12px_rgba(60,149,200,0.03)]"
      )}
    >
      {/* Tampilan Desktop: 4 Kolom Pas 1 Baris */}
      <div className="hidden lg:block">
        <Container size="xl" className="relative z-10">
          <div className="grid grid-cols-4 divide-x divide-slate-200/70">
            {IMPACT_STATS.map((stat, index) => (
              <CounterCard
                key={stat.id || index}
                stat={stat}
                isVisible={isVisible}
              />
            ))}
          </div>
        </Container>
      </div>

      {/* Tampilan Mobile & Tablet: 1 Baris Penuh dengan Animasi Looping Kanan ke Kiri */}
      <div className="block lg:hidden w-full overflow-hidden relative z-10">
        <div className="animate-marquee flex items-center">
          {/* Looping Loop 1 */}
          <div className="flex items-center flex-shrink-0">
            {IMPACT_STATS.map((stat, index) => (
              <div
                key={`loop1-${stat.id || index}`}
                className="w-[240px] sm:w-[280px] px-4 flex-shrink-0 flex items-center justify-center border-r border-slate-200/70"
              >
                <CounterCard stat={stat} isVisible={isVisible} />
              </div>
            ))}
          </div>

          {/* Looping Loop 2 (Duplikasi untuk Seamless Infinite Loop) */}
          <div className="flex items-center flex-shrink-0">
            {IMPACT_STATS.map((stat, index) => (
              <div
                key={`loop2-${stat.id || index}`}
                className="w-[240px] sm:w-[280px] px-4 flex-shrink-0 flex items-center justify-center border-r border-slate-200/70"
              >
                <CounterCard stat={stat} isVisible={isVisible} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

