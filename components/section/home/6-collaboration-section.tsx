"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { COLLABORATION_DATA } from "@/lib/data/homepage";

// Daftar foto slideshow mandiri (berganti otomatis tiap 4 detik)
const COLLABORATION_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop",
    alt: "Kolaborasi Kemitraan & CSR Jalan Langit Foundation",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    alt: "Gerakan Kolaborasi Bersama Komunitas",
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop",
    alt: "Aksi Nyata Relawan Jalan Langit Foundation",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    alt: "Program Magang Berdampak & Talenta Muda",
  },
];

export function CollaborationSection() {
  const [openItem, setOpenItem] = React.useState<string>("");
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  // Slideshow otomatis mandiri berganti setiap 4 detik
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % COLLABORATION_SLIDES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const toggleItem = (id: string) => {
    setOpenItem((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="kolaborasi"
      aria-label="Kolaborasi Kebaikan Jalan Langit Foundation"
      className="w-full bg-[#FAFCFE] py-12 sm:py-20 lg:py-24 border-y border-slate-200/80 relative overflow-hidden"
    >
      <Container size="xl" className="relative z-10">
        {/* =========================================================
            SPLIT LAYOUT: KIRI (HEADING + FOTO + BUTTONS) + KANAN (ACCORDION)
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-14 items-start">
          
          {/* SISI KIRI: HEADING + DESKRIPSI + FOTO TETAP + TOMBOL HORIZONTAL */}
          <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-28">
            {/* 1. Heading 2 Baris & Supporting Copy */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#2C2C2C] font-['Poppins',sans-serif] leading-tight tracking-tight">
                {COLLABORATION_DATA.headline.prefix}
                <br />
                <span className="text-[#3C95C8]">
                  {COLLABORATION_DATA.headline.highlight}
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#555555] font-['Lato',sans-serif] leading-relaxed">
                {COLLABORATION_DATA.supportingCopy}
              </p>
            </div>

            {/* 2. Pure Photo Slideshow Box (Rasio 16:9 di Mobile) */}
            <div className="relative w-full aspect-video lg:aspect-auto lg:h-[220px] rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-900 group shadow-none hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] transition-all duration-300 shrink-0">
              {COLLABORATION_SLIDES.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === activeSlideIndex ? "opacity-100 z-[1]" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>

            {/* 3. Action Buttons di Sisi Kiri (Hanya muncul di Desktop lg+) */}
            <div className="hidden lg:flex items-center gap-2.5 pt-1">
              <Button
                variant="outline"
                size="md"
                href={COLLABORATION_DATA.globalCtas.primary.href}
                external
                className="font-bold border-[#3C95C8] text-[#3C95C8] hover:bg-[#EAF5FB] px-4 sm:px-5 text-xs sm:text-sm whitespace-nowrap"
              >
                Ajak Kolaborasi
              </Button>

              <Button
                variant="outline"
                size="md"
                href={COLLABORATION_DATA.globalCtas.secondary.href}
                external
                className="font-bold border-[#3C95C8] text-[#3C95C8] hover:bg-[#EAF5FB] px-4 sm:px-5 text-xs sm:text-sm whitespace-nowrap"
              >
                Gabung Kebaikan
              </Button>
            </div>
          </div>

          {/* SISI KANAN: ACCORDION LIST */}
          <div className="lg:col-span-7 space-y-3.5">
            {COLLABORATION_DATA.items.map((item) => {
              const isOpen = openItem === item.id;

              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border transition-colors duration-200 overflow-hidden ${
                    isOpen
                      ? "border-slate-300/90 shadow-[0_12px_32px_rgba(0,0,0,0.07)]"
                      : "border-slate-200/80 shadow-none hover:border-slate-300/90"
                  }`}
                >
                  {/* Header Button Accordion */}
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group/btn"
                  >
                    <h3 className={`text-base font-bold font-['Poppins',sans-serif] leading-snug transition-colors ${
                      isOpen ? "text-[#3C95C8]" : "text-[#2C2C2C]"
                    }`}>
                      {item.title}
                    </h3>

                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "text-[#3C95C8] rotate-180"
                          : "text-[#555555] group-hover/btn:text-[#3C95C8]"
                      }`}
                    />
                  </button>

                  {/* Konten Terbuka dengan Animasi Expand Halus dari Atas ke Bawah */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 border-t border-slate-100">
                        <p className="text-xs sm:text-sm text-[#555555] font-['Lato',sans-serif] leading-relaxed">
                          {item.description}
                        </p>

                        <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                          <Link
                            href={item.ctaHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-[#3C95C8] font-semibold font-['Poppins',sans-serif] hover:text-[#25729D] transition-colors"
                          >
                            <span>{item.ctaText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Action Buttons di Bawah Accordion (Hanya muncul di Mobile & Tablet <lg) */}
            <div className="pt-1.5 sm:pt-2 flex flex-wrap items-center justify-center gap-3 w-full lg:hidden">
              <Button
                variant="outline"
                size="md"
                href={COLLABORATION_DATA.globalCtas.primary.href}
                external
                className="font-bold border-[#3C95C8] text-[#3C95C8] hover:bg-[#EAF5FB] px-6"
              >
                Ajak Kolaborasi
              </Button>

              <Button
                variant="outline"
                size="md"
                href={COLLABORATION_DATA.globalCtas.secondary.href}
                external
                className="font-bold border-[#3C95C8] text-[#3C95C8] hover:bg-[#EAF5FB] px-6"
              >
                Gabung Kebaikan
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
