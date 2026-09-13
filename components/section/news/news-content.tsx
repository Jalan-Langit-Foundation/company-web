import * as React from "react";
import Image from "next/image";
import { NewsItem } from "@/lib/data/news";

interface NewsContentProps {
  news: NewsItem;
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

export function NewsContent({ news }: NewsContentProps) {
  return (
    <div className="w-full">
      {/* Judul Utama (Selaras Homepage Style) */}
      <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#2C2C2C] font-['Poppins',sans-serif] leading-tight tracking-tight mb-4">
        {news.title}
      </h1>

      {/* Meta Info: Tanggal | Lokasi */}
      <div className="flex flex-wrap items-center gap-2.5 text-sm sm:text-base text-[#777777] font-['Lato',sans-serif] mb-6 border-b border-slate-100 pb-4">
        <span>{news.date}</span>
        <span className="text-slate-300">|</span>
        <span>{news.location}</span>
      </div>

      {/* Gambar Utama: Murni Gambar Rasio 16:9 dengan Border Radius Selaras Card Video Section */}
      {news.image && (
        <div className="relative w-full aspect-[16/9] mb-8 rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-100 isolate shadow-xs">
          <Image
            src={news.image}
            alt={news.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 850px"
            className="object-cover rounded-2xl"
          />
        </div>
      )}

      {/* Isi Artikel / Paragraf: Disamakan Persis dengan Paragraf About Teaser */}
      <article className="flex flex-col gap-4 text-[#555555] font-['Lato',sans-serif] text-sm sm:text-base leading-relaxed mb-8">
        {news.content.map((paragraph, idx) => (
          <p key={idx}>{formatParagraph(paragraph)}</p>
        ))}
      </article>

      {/* Tabel Penyaluran (Khusus Langit Box atau berita dengan data tabel) */}
      {news.table && (
        <div className="my-8 border border-slate-200 rounded-xl overflow-hidden shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-3.5 text-sm font-semibold text-slate-700 font-['Poppins',sans-serif]">
                  Pondok / Lembaga
                </th>
                <th className="p-3.5 text-sm font-semibold text-slate-700 text-right font-['Poppins',sans-serif]">
                  Jumlah
                </th>
              </tr>
            </thead>
            <tbody>
              {news.table.rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 last:border-none hover:bg-slate-50/50"
                >
                  <td className="p-3.5 text-sm text-slate-600 font-['Lato',sans-serif]">
                    {row.label}
                  </td>
                  <td className="p-3.5 text-sm text-slate-800 font-medium text-right font-['Lato',sans-serif]">
                    {row.value}
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-100/70 font-bold">
                <td className="p-3.5 text-sm text-slate-800 font-['Poppins',sans-serif]">
                  {news.table.totalLabel}
                </td>
                <td className="p-3.5 text-sm text-slate-900 text-right font-['Poppins',sans-serif]">
                  {news.table.totalValue}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
