import NewsHero from "@/components/section/news/news-hero";
import NewsList from "@/components/section/news/news-list";

export default function NewsPage() {
  return (
    <main className="flex-1">
      <NewsHero />
      <NewsList />
    </main>
  );
}