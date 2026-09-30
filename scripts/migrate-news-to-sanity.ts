import * as fs from "node:fs";
import * as path from "node:path";
import { news } from "../lib/data/news.ts";

/**
 * Konversi tanggal bahasa Indonesia ("10 September 2026") ke format ISO YYYY-MM-DD
 */
function parseIndonesianDateToISO(dateStr: string): string {
  if (!dateStr) return new Date().toISOString().split("T")[0];

  const monthMap: Record<string, string> = {
    januari: "01",
    februari: "02",
    maret: "03",
    april: "04",
    mei: "05",
    juni: "06",
    juli: "07",
    agustus: "08",
    september: "09",
    oktober: "10",
    november: "11",
    desember: "12",
  };

  const parts = dateStr.trim().split(/\s+/);
  if (parts.length >= 3) {
    const day = parts[0].padStart(2, "0");
    const monthName = parts[1].toLowerCase();
    const month = monthMap[monthName] || "01";
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }

  return new Date().toISOString().split("T")[0];
}

/**
 * Konversi NewsItem lokal menjadi struktur Dokumen Sanity
 */
function transformToSanityDocument(item: (typeof news)[0]) {
  return {
    _id: `news-${item.id}`,
    _type: "news",
    title: item.title,
    slug: {
      _type: "slug",
      current: item.id,
    },
    category: item.category,
    program: item.program,
    date: parseIndonesianDateToISO(item.date),
    location: item.location,
    beneficiaries: item.beneficiaries,
    excerpt: item.excerpt,
    content: item.content,
    distributionTable: item.table
      ? {
          totalLabel: item.table.totalLabel || "Total",
          totalValue: item.table.totalValue || "",
          rows: item.table.rows.map((r) => ({
            _key: Math.random().toString(36).substring(2, 9),
            label: r.label,
            value: r.value,
          })),
        }
      : undefined,
    ctaText: item.ctaText,
    ctaButtonLabel: item.ctaButtonLabel,
    imagePlaceholderPath: item.image,
    status: "published",
  };
}

async function main() {
  console.log("==================================================");
  console.log("  MIGRASI DATA BERITA JALAN LANGIT -> SANITY CMS  ");
  console.log("==================================================");

  const outputDir = path.resolve(process.cwd(), "scripts/output");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const sanityDocuments = news.map(transformToSanityDocument);

  // 1. Simpan format JSON (Mudah dibaca)
  const jsonPath = path.join(outputDir, "news-sanity-export.json");
  fs.writeFileSync(jsonPath, JSON.stringify(sanityDocuments, null, 2), "utf-8");
  console.log(`[1/2] Berhasil membuat file JSON: ${jsonPath}`);

  // 2. Simpan format NDJSON (Standar Sanity CLI Import)
  const ndjsonPath = path.join(outputDir, "news-sanity-export.ndjson");
  const ndjsonContent = sanityDocuments.map((doc) => JSON.stringify(doc)).join("\n");
  fs.writeFileSync(ndjsonPath, ndjsonContent, "utf-8");
  console.log(`[2/2] Berhasil membuat file NDJSON: ${ndjsonPath}`);

  console.log(`\nTotal berita berhasil dimigrasikan: ${sanityDocuments.length} artikel.`);
  console.log("--------------------------------------------------");
  console.log("Cara import ke Sanity Cloud:");
  console.log("Opsi A (Sanity CLI):");
  console.log(`  npx sanity dataset import scripts/output/news-sanity-export.ndjson production --replace`);
  console.log("Opsi B (Sanity Vision / REST API Mutation):");
  console.log(`  Gunakan payload dari file: ${jsonPath}`);
  console.log("==================================================");
}

main().catch((err) => {
  console.error("Gagal melakukan export data:", err);
  process.exit(1);
});
