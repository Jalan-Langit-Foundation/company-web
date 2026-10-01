# Jalan Langit Foundation - Website Profil & Portal Berita

[![Next.js](https://img.shields.io/badge/Next.js-16.3.2-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sanity](https://img.shields.io/badge/CMS-Sanity-F03E2F?logo=sanity&logoColor=white)](https://www.sanity.io/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS%204-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-jalanlangitfoundation.id-brightgreen?logo=vercel&logoColor=white)](https://jalanlangitfoundation.id/)

**Live Demo:** [jalanlangitfoundation.id](https://jalanlangitfoundation.id/)

**Jalan Langit Foundation** adalah website profil organisasi dan portal berita untuk Yayasan Jalan Langit. Website ini memperkenalkan identitas yayasan, program sosial, pendidikan, kemanusiaan, dan pemberdayaan, sekaligus menyediakan ruang bagi tim media untuk mengelola berita secara mandiri melalui **Sanity Headless CMS**.

Konten berita yang diterbitkan di Sanity ditampilkan di homepage dan halaman detail tanpa perlu mengubah kode atau deploy ulang. Gambar berita diambil dari Sanity CDN, dilengkapi alternative text, dan halaman diperbarui melalui on-demand revalidation.

---

## Fitur Utama

- **Profil Yayasan** - Informasi organisasi, visi misi, nilai L.A.N.G.I.T, legalitas, kontak, dan kanal sosial.
- **Program Sosial** - Langit Box, Langit Scholarship, Jalan Langit Peduli, Qurban, Ramadhan, Zakat, dan program lainnya.
- **Portal Berita Dinamis** - Berita homepage dan detail diambil dari Sanity berdasarkan tanggal publikasi.
- **Sanity Headless CMS** - Tim dapat mengelola judul, slug, tanggal, kategori, lokasi, ringkasan, foto, alternative text, isi artikel, tabel distribusi, dan CTA.
- **Optimasi Pengambilan Data** - Homepage memakai query kartu ringan dan tetap menampilkan 8 berita sesuai layout.
- **Related News** - Halaman detail mengambil berita terkait secara terpisah dan paralel.
- **Optimasi Gambar** - Asset Sanity CDN memakai ukuran dan kualitas sesuai konteks tampilan.
- **On-Demand Revalidation** - Webhook Sanity memperbarui cache setelah berita diterbitkan atau diperbarui.
- **SEO & Accessibility** - Metadata, canonical URL, Open Graph, sitemap, robots, structured data, alt text, dan focus state.
- **Reveal Animation** - Section homepage muncul saat memasuki viewport dengan animasi fade-in.

---

## Tech Stack & Arsitektur

Project menggunakan Next.js App Router dengan pemisahan UI, konten statis, domain model, service layer, dan integrasi CMS.

### Frontend

| Teknologi | Kegunaan |
| :--- | :--- |
| **Next.js 16** | App Router, metadata, sitemap, image optimization, dan server rendering. |
| **React 19** | Komponen UI interaktif dan halaman website. |
| **TypeScript** | Static typing antar layer aplikasi. |
| **Tailwind CSS 4** | Utility-first styling untuk layout responsif. |
| **Lucide React** | Icon library untuk navigasi dan komponen UI. |
| **next/image** | Optimasi loading, ukuran, dan format gambar. |

### Content & Data

| Teknologi | Kegunaan |
| :--- | :--- |
| **Sanity Studio** | Interface untuk membuat dan mengelola berita. |
| **Sanity Client** | Mengambil dokumen melalui GROQ query. |
| **Sanity CDN** | Transformasi ukuran dan kualitas asset gambar. |
| **Next.js Data Cache** | Cache hasil query dengan revalidation dan tags. |
| **On-Demand Revalidation** | Memperbarui cache setelah webhook Sanity diterima. |

### Alur Data Berita

~~~mermaid
flowchart LR
    A[Sanity Studio] -->|Publish / Update| B[Sanity Dataset]
    B --> C[Sanity CDN & GROQ API]
    C --> D[lib/cms/sanity]
    D --> E[lib/services/news.service.ts]
    E --> F[Homepage]
    E --> G[News Detail]
    A -->|Webhook + Secret| H[/api/revalidate]
    H --> I[Revalidate news tags & routes]
~~~

---

## Content Model Berita

Dokumen **news** di Sanity mendukung:

| Field | Fungsi |
| :--- | :--- |
| **title** | Judul berita. |
| **slug** | Identifier URL **/news/[id]**. |
| **date** | Tanggal berita. |
| **category**, **program** | Kategori dan program terkait. |
| **location**, **beneficiaries** | Lokasi dan penerima manfaat. |
| **excerpt** | Ringkasan berita. |
| **coverImage** | Foto utama beserta alternative text. |
| **content** | Isi artikel Portable Text atau paragraf. |
| **distributionTable** | Data distribusi bantuan jika diperlukan. |
| **ctaText**, **ctaButtonLabel**, **ctaButtonUrl** | Ajakan dan tombol aksi. |
| **status** | Status publikasi, termasuk **published**. |

Homepage menggunakan projection ringan. Isi lengkap, tabel distribusi, dan CTA hanya diambil pada halaman detail.

---

## Struktur Folder Project

~~~text
company-web/
├── app/                              # Next.js App Router
│   ├── api/revalidate/               # Webhook on-demand revalidation
│   ├── news/[id]/                    # Halaman detail berita
│   ├── layout.tsx                    # Root layout dan metadata
│   ├── page.tsx                      # Homepage
│   ├── robots.ts                     # Robots metadata
│   └── sitemap.ts                    # Sitemap dinamis
├── components/
│   ├── layout/                       # Navbar, footer, CTA, scroll behavior
│   ├── sections/home/                # Section homepage
│   ├── sections/news/                # Konten dan sidebar berita
│   └── ui/                           # Komponen UI reusable
├── content/homepage/                 # Konten statis homepage
├── lib/
│   ├── cms/sanity/                   # Client, config, query, mapper, image, schema
│   ├── data/                         # Site config dan navigasi
│   ├── domain/                       # Domain model seperti NewsItem
│   └── services/                     # Service layer berita
├── public/images/                    # Asset brand, hero, news, dan programs
├── sanity.config.ts                  # Konfigurasi Sanity Studio
├── sanity.cli.ts                     # Konfigurasi CLI dan deployment Studio
├── next.config.ts                    # Remote image patterns
├── .env.example                      # Template environment variable
├── CONTRIBUTING.md                   # Aturan kontribusi dan workflow PR
└── README.md                         # Dokumentasi project
~~~

---

## Instalasi & Setup

### Prasyarat

- [Node.js](https://nodejs.org/) versi LTS.
- npm versi yang kompatibel dengan project.
- Akun [Sanity](https://www.sanity.io/) dan akses ke dataset.
- Akses repository jika ingin berkontribusi.

### 1. Clone dan install

~~~bash
git clone https://github.com/Jalan-Langit-Foundation/company-web.git
cd company-web
npm install
~~~

### 2. Konfigurasi environment

~~~bash
cp .env.example .env.local
~~~

Isi nilai yang sesuai:

~~~env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_USE_CDN=true

# Opsional untuk dataset private atau draft content
# SANITY_API_READ_TOKEN=your_read_token

# Opsional untuk proses upload/admin
# SANITY_API_WRITE_TOKEN=your_write_token

# Secret webhook Sanity untuk /api/revalidate
SANITY_REVALIDATE_SECRET=your_revalidation_secret
~~~

**NEXT_PUBLIC_SANITY_PROJECT_ID** wajib diisi agar berita dapat ditampilkan. **SANITY_USE_CDN=true** direkomendasikan untuk konten published. Jangan commit **.env.local** atau token ke repository.

### 3. Jalankan website

~~~bash
npm run dev
~~~

Website tersedia di [http://localhost:3000](http://localhost:3000).

### 4. Jalankan Sanity Studio

Pada terminal lain:

~~~bash
npx sanity dev
~~~

Sanity Studio biasanya tersedia di [http://localhost:3333](http://localhost:3333).

### 5. Build dan production

~~~bash
npm run lint
npx tsc --noEmit
npm run build
npm run start
~~~

---

## Sanity Studio & Revalidation

### Membuat atau mengubah berita

1. Buka Sanity Studio.
2. Pilih tipe dokumen **News**.
3. Isi judul, slug, tanggal, konten, cover image, dan alternative text.
4. Pastikan status berita sesuai kebutuhan publikasi.
5. Publish dokumen.

Webhook Sanity dapat memanggil:

~~~text
POST /api/revalidate
Authorization: Bearer <SANITY_REVALIDATE_SECRET>
~~~

Endpoint tersebut merevalidasi tag **news**, berita terkait, homepage, dan halaman detail. Jika secret belum tersedia, endpoint menolak request dengan status **503**.

---

## Route Utama

| Route | Keterangan |
| :--- | :--- |
| **/** | Homepage profil yayasan dan berita terbaru. |
| **/news/[id]** | Detail berita berdasarkan slug atau ID Sanity. |
| **/api/revalidate** | Endpoint internal cache revalidation. |
| **/sitemap.xml** | Sitemap website dan berita published. |
| **/robots.txt** | Konfigurasi crawling search engine. |

---

## Workflow Kontribusi

Project mengikuti [CONTRIBUTING.md](CONTRIBUTING.md):

- Satu issue menggunakan satu branch.
- Branch fitur: **feat/[nomor-issue]-[slug-singkat]**.
- Gunakan Conventional Commits.
- Pull Request diarahkan ke **staging**, bukan langsung ke **main**.
- Jalankan lint, type-check, dan build sebelum review.
- Sertakan referensi issue dan preview deployment pada Pull Request.

~~~bash
git switch -c feat/32-update-news-content
git add .
git commit -m "feat(news): update news content"
git push -u origin feat/32-update-news-content
~~~

---

## Lisensi

Lisensi project mengikuti ketentuan repository dan organisasi Jalan Langit Foundation. Untuk penggunaan ulang aset brand, foto kegiatan, dan konten berita, hubungi pihak Jalan Langit Foundation terlebih dahulu.

---

*Dibuat untuk mendukung Jalan Langit Foundation dalam menyebarkan kebaikan dan menghadirkan manfaat nyata bagi masyarakat.*
