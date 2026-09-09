import { getNewsById } from "@/lib/data/news";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
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

  return (
    // Margin outer pembungkus disamakan dengan container homepage (max-w-7xl)
    <div className="w-full bg-white py-10 md:py-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Konten artikel dibatasi max-w-3xl agar nyaman dibaca dan di tengah */}
        <div className="max-w-3xl mx-auto">
          
          {/* Category Tag */}
          {detailNews.category && (
            <span className="inline-block bg-sky-50 text-sky-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              {detailNews.category}
            </span>
          )}

          {/* Judul Utama */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
            {detailNews.title}
          </h1>

          {/* Meta Info: Tanggal, Lokasi, Penerima Manfaat */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-8 border-b border-slate-100 pb-4">
            <span>{detailNews.date}</span>
            <span>•</span>
            <span>{detailNews.location}</span>
            {detailNews.beneficiaries && (
              <>
                <span>•</span>
                <span className="font-medium text-slate-700">
                  Penerima Manfaat: {detailNews.beneficiaries}
                </span>
              </>
            )}
          </div>

          {/* Gambar Utama (Utuh, Tidak Terpotong, & Batas Tinggi Pas) */}
          {detailNews.image && (
            <div className="my-8 flex justify-center bg-slate-50 rounded-2xl overflow-hidden p-2 border border-slate-100">
              <img
                src={detailNews.image}
                alt={detailNews.title}
                className="max-h-[480px] w-auto object-contain rounded-xl shadow-sm"
              />
            </div>
          )}

          {/* Isi Artikel / Paragraf */}
          <article className="prose max-w-none text-slate-700 leading-relaxed space-y-5 text-base md:text-lg mb-8">
            {detailNews.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </article>

          {/* Tabel Penyaluran (Khusus Langit Box) */}
          {detailNews.table && (
            <div className="my-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-3.5 text-sm font-semibold text-slate-700">Pondok / Lembaga</th>
                    <th className="p-3.5 text-sm font-semibold text-slate-700 text-right">Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  {detailNews.table.rows.map((row, index) => (
                    <tr key={index} className="border-b border-slate-100 last:border-none hover:bg-slate-50/50">
                      <td className="p-3.5 text-sm text-slate-600">{row.label}</td>
                      <td className="p-3.5 text-sm text-slate-800 font-medium text-right">{row.value}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-100/70 font-bold">
                    <td className="p-3.5 text-sm text-slate-800">{detailNews.table.totalLabel}</td>
                    <td className="p-3.5 text-sm text-slate-900 text-right">{detailNews.table.totalValue}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Section CTA */}
          {detailNews.ctaText && (
            <div className="mt-10 p-6 bg-sky-50/60 rounded-2xl text-center border border-sky-100">
              <p className="text-slate-700 font-medium mb-4">{detailNews.ctaText}</p>
              <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-all shadow-sm">
                {detailNews.ctaButtonLabel}
              </button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}