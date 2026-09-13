import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getNewsById, news } from "@/lib/data/news";
import { SITE_CONFIG } from "@/lib/data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Helper untuk memformat penekanan teks (bold: **teks**) dan istilah asing/kutipan (italic: *teks*)
function formatParagraph(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-[#2C2C2C]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="italic text-[#333333]">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

export default async function NewsDetailPage({ params }: PageProps) {
  // Await params terlebih dahulu (wajib di Next.js 15)
  const { id } = await params;

  // Cari data berdasarkan ID yang dikirim
  const detailNews = getNewsById(id);

  // Jika ID tidak ditemukan di lib/data/news.ts
  if (!detailNews) {
    notFound();
  }

  // Ambil daftar berita lain untuk sidebar
  const otherNews = news.filter((item) => item.id !== id);

  return (
    // Margin dan padding outer diselaraskan persis dengan section homepage via Container size="xl"
    <div className="w-full bg-white py-10 sm:py-14 lg:py-16 border-b border-slate-200/80">
      <Container size="xl" as="main">
        {/* Layout 2 Grid (~80 : 20) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* =========================================================
              KOLOM UTAMA: KONTEN ARTIKEL (~80%)
              ========================================================= */}
          <div className="lg:col-span-8 xl:col-span-9 w-full">
            {/* Judul Utama (Selaras Homepage Style) */}
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#2C2C2C] font-['Poppins',sans-serif] leading-tight tracking-tight mb-4">
              {detailNews.title}
            </h1>

            {/* Meta Info: Tanggal | Lokasi */}
            <div className="flex flex-wrap items-center gap-2.5 text-sm sm:text-base text-[#777777] font-['Lato',sans-serif] mb-6 border-b border-slate-100 pb-4">
              <span>{detailNews.date}</span>
              <span className="text-slate-300">|</span>
              <span>{detailNews.location}</span>
            </div>

            {/* Gambar Utama: Murni Gambar Rasio 16:9 dengan Border Radius Selaras Card Video Section */}
            {detailNews.image && (
              <div className="relative w-full aspect-[16/9] mb-8 rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-100 isolate shadow-xs">
                <Image
                  src={detailNews.image}
                  alt={detailNews.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 850px"
                  className="object-cover rounded-2xl"
                />
              </div>
            )}

            {/* Isi Artikel / Paragraf: Disamakan Persis dengan Paragraf About Teaser */}
            <article className="flex flex-col gap-4 text-[#555555] font-['Lato',sans-serif] text-sm sm:text-base leading-relaxed mb-8">
              {detailNews.content.map((paragraph, idx) => (
                <p key={idx}>{formatParagraph(paragraph)}</p>
              ))}
            </article>

            {/* Tabel Penyaluran (Khusus Langit Box) */}
            {detailNews.table && (
              <div className="my-8 border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-3.5 text-sm font-semibold text-slate-700 font-['Poppins',sans-serif]">Pondok / Lembaga</th>
                      <th className="p-3.5 text-sm font-semibold text-slate-700 text-right font-['Poppins',sans-serif]">Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detailNews.table.rows.map((row, index) => (
                      <tr key={index} className="border-b border-slate-100 last:border-none hover:bg-slate-50/50">
                        <td className="p-3.5 text-sm text-slate-600 font-['Lato',sans-serif]">{row.label}</td>
                        <td className="p-3.5 text-sm text-slate-800 font-medium text-right font-['Lato',sans-serif]">{row.value}</td>
                      </tr>
                    ))}
                    <tr className="bg-slate-100/70 font-bold">
                      <td className="p-3.5 text-sm text-slate-800 font-['Poppins',sans-serif]">{detailNews.table.totalLabel}</td>
                      <td className="p-3.5 text-sm text-slate-900 text-right font-['Poppins',sans-serif]">{detailNews.table.totalValue}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* =========================================================
              SIDEBAR: 1 CARD TUNGGAL UNTUK SEMUA ELEMEN (~20%)
              ========================================================= */}
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
                      alt="Logo Yayasan Jalan Langit"
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
        </div>
      </Container>
    </div>
  );
}