import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { news } from "@/lib/data/news";

export default function NewsList() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 border-b border-slate-200/80">
      <Container size="xl">
        <div className="w-full flex flex-col gap-6">
        {news.map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="group border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row"
          >
            <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 bg-brand-soft">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-6 flex flex-col gap-2">
              <p className="text-sm font-semibold text-primary-blue">
                {item.category}
              </p>
              <h3 className="text-lg font-bold text-brand-black group-hover:text-primary-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-dark-gray">{item.date}</p>
              <p className="text-sm text-dark-gray line-clamp-2 mt-1">
                {item.excerpt}
              </p>
            </div>
          </Link>
        ))}
        </div>
      </Container>
    </section>
  );
}