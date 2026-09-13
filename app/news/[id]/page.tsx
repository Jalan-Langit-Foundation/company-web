import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { NewsContent, NewsSidebar } from "@/components/section/news";
import { getNewsById, news } from "@/lib/data/news";
import { SITE_CONFIG } from "@/lib/data";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate static params untuk pre-rendering seluruh rute berita statis
export function generateStaticParams() {
  return news.map((item) => ({
    id: item.id,
  }));
}

// Dynamic SEO metadata per halaman berita
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const detailNews = getNewsById(id);

  if (!detailNews) {
    return {
      title: `Berita Tidak Ditemukan | ${SITE_CONFIG.name}`,
    };
  }

  return {
    title: `${detailNews.title} | ${SITE_CONFIG.name}`,
    description: detailNews.excerpt,
    openGraph: {
      title: detailNews.title,
      description: detailNews.excerpt,
      images: detailNews.image
        ? [
            {
              url: detailNews.image,
              alt: detailNews.title,
            },
          ]
        : [],
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const detailNews = getNewsById(id);

  if (!detailNews) {
    notFound();
  }

  const otherNews = news.filter((item) => item.id !== id);

  return (
    <div className="w-full bg-white py-10 sm:py-14 lg:py-16 border-b border-slate-200/80">
      <Container size="xl" as="main">
        {/* Layout 2 Kolom (~80 : 20) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Kolom Utama: Konten Artikel (~80%) */}
          <div className="lg:col-span-8 xl:col-span-9 w-full">
            <NewsContent news={detailNews} />
          </div>

          {/* Kolom Samping: Sidebar (~20%) */}
          <NewsSidebar otherNews={otherNews} />
        </div>
      </Container>
    </div>
  );
}