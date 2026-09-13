import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsItem } from "@/lib/data/news";
import { SITE_CONFIG } from "@/lib/data";

interface NewsSidebarProps {
  otherNews?: NewsItem[];
}

export function NewsSidebar({ otherNews = [] }: NewsSidebarProps) {
  return (
    <aside className="lg:col-span-4 xl:col-span-3 w-full">
      <div className="lg:sticky lg:top-24">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-xs">
          {/* 1. Bagian Atas: Logo & Profil Singkat Jalan Langit */}
          <div className="pb-5 sm:pb-6 space-y-3.5">
            <Link
              href="/"
              className="block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C95C8] rounded-lg"
            >
              <Image
                src="/images/logo-navbar.png"
                alt="Logo Yayatan Jalan Langit"
                width={320}
                height={76}
                priority
                className="w-full h-auto max-h-16 sm:max-h-20 object-contain object-left transition-opacity hover:opacity-90"
              />
            </Link>
            <p className="text-xs sm:text-[13px] text-[#555555] font-['Lato',sans-serif] leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Garis Pemisah 1 (Tepat di Tengah Antara Bagian 1 dan 2) */}
          <hr className="border-t border-slate-200/90" />

          {/* 2. Bagian Tengah: CTA Ajakan Berdonasi */}
          <div className="py-5 sm:py-6 space-y-3.5">
            <h3 className="text-sm font-bold text-[#2C2C2C] font-['Poppins',sans-serif] leading-snug">
              Mari Langitkan Kebaikan
            </h3>

            <p className="text-xs sm:text-[13px] text-[#555555] font-['Lato',sans-serif] leading-relaxed">
              Setiap bantuan Anda menghadirkan kebahagiaan nyata bagi santri dan pejuang kebaikan.
            </p>

            <Button
              variant="primary"
              size="md"
              href={SITE_CONFIG.contact.donationUrl}
              external
              leftIcon={<Heart className="w-4 h-4 fill-white text-white" />}
              className="w-full shadow-sm hover:shadow-md transition-all font-semibold"
            >
              Donasi Sekarang
            </Button>
          </div>

          {/* Garis Pemisah 2 (Tepat di Tengah Antara Bagian 2 dan 3) */}
          {otherNews.length > 0 && <hr className="border-t border-slate-200/90" />}

          {/* 3. Bagian Bawah: Link-Link Berita Lainnya (Judul Saja Tanpa Gambar & Tanpa Lihat Semua) */}
          {otherNews.length > 0 && (
            <div className="pt-5 sm:pt-6 space-y-3">
              <h3 className="text-sm font-bold text-[#2C2C2C] font-['Poppins',sans-serif]">
                Berita Lainnya
              </h3>

              <div className="divide-y divide-slate-100">
                {otherNews.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.id}`}
                    className="group block py-2.5 first:pt-0 last:pb-0 transition-colors"
                  >
                    <h4 className="text-xs sm:text-[13px] font-medium text-[#2C2C2C] font-['Poppins',sans-serif] leading-snug group-hover:text-[#3C95C8] transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#888888] font-['Lato',sans-serif] mt-1">
                      {item.date}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
