import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { NewsContent, NewsSidebar } from "@/components/sections/news";
import { getNewsById, getRelatedNews, getAllNewsIds } from "@/lib/services/news.service";
import { SITE_CONFIG } from "@/lib/data";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate static params untuk pre-rendering seluruh rute berita statis / ISR
export async function generateStaticParams() {
  const ids = await getAllNewsIds();
  return ids.map((id) => ({
    id,
  }));
}

// Dynamic SEO metadata per halaman berita
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const detailNews = await getNewsById(id);

  if (!detailNews) {
    return {
      title: `Berita Tidak Ditemukan | ${SITE_CONFIG.name}`,
    };
  }

  const pageUrl = `${SITE_CONFIG.url}/news/${id}`;
  const ogImages = detailNews.image
    ? [
        {
          url: detailNews.image,
          alt: detailNews.imageAlt || detailNews.title,
        },
      ]
    : [];

  return {
    title: detailNews.title,
    description: detailNews.excerpt,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title: detailNews.title,
      description: detailNews.excerpt,
      siteName: SITE_CONFIG.name,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: detailNews.title,
      description: detailNews.excerpt,
      images: detailNews.image ? [detailNews.image] : [],
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const [detailNews, otherNews] = await Promise.all([
    getNewsById(id),
    getRelatedNews(id, 4),
  ]);

  if (!detailNews) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: detailNews.title,
    description: detailNews.excerpt,
    datePublished: detailNews.date,
    dateModified: detailNews.date,
    image: detailNews.image ? [`${SITE_CONFIG.url}${detailNews.image}`] : undefined,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/images/brand/logo-navbar.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/news/${id}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
    </>
  );
}
