"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SITE_CONFIG } from "@/lib/data";
import { HERO_CONFIG } from "@/lib/data/homepage";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  // Auto-play slideshow dengan animasi crossfade halus
  React.useEffect(() => {
    if (!HERO_CONFIG.slides || HERO_CONFIG.slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_CONFIG.slides.length);
    }, HERO_CONFIG.intervalMs || 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero Utama"
      className="relative w-full overflow-hidden bg-[#3C95C8] py-12 sm:py-16 lg:py-20 text-white transition-colors duration-300 min-h-[calc(100vh-4rem)] min-h-[calc(100dvh-4rem)] flex items-center"
    >
      {/* Background Slideshow with Crossfade Fade In / Fade Out */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_CONFIG.slides.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          return (
            <div
              key={slide.id || index}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              )}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover object-right-top lg:object-center brightness-95"
                sizes="100vw"
              />
            </div>
          );
        })}

        {/* Lapisan Desktop (sm+): Horizontal Left-to-Right Fade */}
        <div className="hero-overlay-desktop absolute inset-0 hidden sm:block z-20 pointer-events-none" />

        {/* Lapisan Mobile (<sm): Vertical Top-to-Bottom Fade Lebih Transparan */}
        <div className="hero-overlay-mobile absolute inset-0 sm:hidden z-20 pointer-events-none" />

        {/* Soft Ambient Top Glow Accent */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#6EB6D6]/35 rounded-full blur-3xl pointer-events-none z-20" />
      </div>

      <Container size="xl" className="relative z-10">
        <div className="max-w-lg lg:max-w-[500px] xl:max-w-[540px] mx-auto sm:mx-0">
          <Reveal>
            {/* Kolom Konten: Eyebrow, Headline, Supporting Copy, Dual CTA */}
            <div className="flex flex-col items-center sm:items-start gap-6 text-center sm:text-left">
              {/* Header Block: Badge & Headline/Copy */}
              <div className="flex flex-col items-center sm:items-start gap-3 sm:gap-3.5 w-full">
                {/* Eyebrow Badge (Pita Putih / Rope Ribbon) */}
                <div className="flex items-center justify-center sm:justify-start sm:-ml-1">
                  <Badge variant="rope" size="md">
                    NGO Muslim Indonesia · Est. 2022
                  </Badge>
                </div>

                {/* Headline & Copy Sesuai HOMEPAGE.md */}
                <div className="flex flex-col items-center sm:items-start gap-4">
                  <h1 className="text-fluid-3xl font-bold tracking-tight text-white font-['Poppins',sans-serif] leading-tight drop-shadow-sm">
                    Bergandengan,
                    <br />
                    Langitkan
                    <br />
                    Kebaikan
                  </h1>
                  <p className="text-fluid-base leading-relaxed text-white/95 font-['Lato',sans-serif] max-w-[340px] sm:max-w-[440px] lg:max-w-[480px] drop-shadow-xs mx-auto sm:mx-0">
                    {SITE_CONFIG.description}
                  </p>
                </div>
              </div>

              {/* Dual CTA Button */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 pt-0.5 w-full sm:w-auto">
                <Button
                  variant="white"
                  size="lg"
                  href="/programs"
                  rightIcon={<ArrowRight className="w-4 h-4 text-[#3C95C8]" />}
                  className="shadow-lg hover:shadow-xl transition-all font-bold text-[#3C95C8] hover:bg-[#EAF5FB]"
                >
                  Lihat Program
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/contact"
                  leftIcon={<Handshake className="w-4 h-4 text-white" />}
                  className="font-semibold text-white border-white/70 hover:bg-white/15 hover:border-white hover:text-white"
                >
                  Berkolaborasi
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
