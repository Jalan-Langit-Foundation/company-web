"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ABOUT_TEASER_DATA } from "@/lib/data/homepage";

export function AboutTeaserSection() {
  return (
    <section
      id="tentang-kami"
      aria-label="Tentang Jalan Langit Foundation"
      className="w-full bg-white py-12 sm:py-20 lg:py-24 border-b border-slate-200/80 transition-colors"
    >
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 xl:gap-16 items-start">
          {/* Kolom Kiri: Quotes Manifesto dengan Quote Biru di Belakang & Card Putih Menimpa */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <div className="relative flex items-center justify-center py-8 sm:py-10 min-h-[300px] sm:min-h-[340px]">
              {/* Vektor Tanda Kutip Ganda Geometris dengan Warna Primary Blue #3C95C8 */}
              <svg
                viewBox="0 0 150 145"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[290px] sm:w-[330px] h-auto text-[#3C95C8] opacity-90 select-none pointer-events-none drop-shadow-xs -rotate-2"
                fill="currentColor"
                aria-hidden="true"
              >
                {/* Tanda Kutip Kiri: Balok Datar Atas & Ekor Melengkung Bawah */}
                <path d="M0,0 L65,0 L65,70 C65,108 50,132 15,145 L2,130 C25,116 35,96 35,70 L0,70 Z" />
                {/* Tanda Kutip Kanan: Balok Datar Atas & Ekor Melengkung Bawah */}
                <path d="M85,0 L150,0 L150,70 C150,108 135,132 100,145 L87,130 C110,116 120,96 120,70 L85,70 Z" />
              </svg>

              {/* Card Putih Mengambang dengan Shadow Halus yang Menimpa */}
              <div className="relative z-10 w-full max-w-[360px] sm:max-w-[400px] rounded-2xl bg-white p-6 sm:p-7 shadow-[0_12px_32px_rgba(0,0,0,0.07)] border border-slate-100 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                {/* Badge Logo Resmi di Sudut Kiri Atas */}
                <div className="absolute -top-4 -left-4 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#3C95C8] shadow-md flex items-center justify-center border-2 border-white overflow-hidden p-1">
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
                  <p className="text-base sm:text-lg lg:text-[19px] font-bold leading-snug tracking-tight">
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

          {/* Kolom Kanan: Headline, Copy Teks & Link CTA */}
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

            {/* Anchor Link CTA: Baca selengkapnya */}
            <div className="pt-1">
              <Link
                href={ABOUT_TEASER_DATA.cta.href}
                className="inline-block font-medium text-[#3C95C8] hover:text-[#2c7ca9] hover:underline font-['Lato',sans-serif] text-sm sm:text-base transition-colors duration-200"
              >
                {ABOUT_TEASER_DATA.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
