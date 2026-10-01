import * as fs from "node:fs";
import * as path from "node:path";
import { createClient } from "@sanity/client";
import { news } from "../lib/data/news.ts";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  throw new Error(
    "NEXT_PUBLIC_SANITY_PROJECT_ID dan SANITY_API_WRITE_TOKEN wajib diisi sebelum import."
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  token,
  useCdn: false,
});

function parseDate(dateStr: string): string {
  const months: Record<string, string> = {
    januari: "01", februari: "02", maret: "03", april: "04", mei: "05", juni: "06",
    juli: "07", agustus: "08", september: "09", oktober: "10", november: "11", desember: "12",
  };
  const [day, month, year] = dateStr.trim().split(/\s+/);
  return `${year}-${months[month.toLowerCase()] || "01"}-${day.padStart(2, "0")}`;
}

function toPortableText(content: string[]) {
  return content.map((text, index) => ({
    _type: "block",
    _key: `paragraph-${index + 1}`,
    style: "normal",
    children: [{ _type: "span", _key: `span-${index + 1}`, text, marks: [] }],
    markDefs: [],
  }));
}

async function uploadCoverImage(item: (typeof news)[number]) {
  const relativePath = item.image || "/images/draft-foto/zakat/zakat-07.webp";
  const filePath = path.join(process.cwd(), "public", relativePath.replace(/^\//, ""));

  if (!fs.existsSync(filePath)) {
    throw new Error(`Foto tidak ditemukan untuk ${item.id}: ${filePath}`);
  }

  const asset = await client.assets.upload("image", fs.createReadStream(filePath), {
    filename: path.basename(filePath),
  });

  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
    // Data lokal memasangkan satu foto dengan satu judul berita.
    // Judul dipakai sebagai alt agar pasangan foto/judul konsisten di Sanity.
    alt: item.title,
  };
}

async function main() {
  console.log(`Mengimpor ${news.length} berita ke dataset ${dataset}...`);

  for (const item of news) {
    const coverImage = await uploadCoverImage(item);
    const document = {
      _id: `news-${item.id}`,
      _type: "news",
      title: item.title,
      slug: { _type: "slug", current: item.id },
      category: item.category,
      program: item.program,
      date: parseDate(item.date),
      location: item.location,
      beneficiaries: item.beneficiaries,
      excerpt: item.excerpt,
      content: toPortableText(item.content),
      distributionTable: item.table
        ? {
            totalLabel: item.table.totalLabel || "Total",
            totalValue: item.table.totalValue || "",
            rows: item.table.rows.map((row, index) => ({
              _key: `row-${index + 1}`,
              label: row.label,
              value: row.value,
            })),
          }
        : undefined,
      ctaText: item.ctaText,
      ctaButtonLabel: item.ctaButtonLabel,
      coverImage,
      status: "published",
    };

    await client.createOrReplace(document);
    console.log(`✓ ${item.id}`);
  }

  console.log("Import selesai. Semua coverImage memiliki asset dan alternative text.");
}

main().catch((error) => {
  console.error("Import gagal:", error);
  process.exitCode = 1;
});
