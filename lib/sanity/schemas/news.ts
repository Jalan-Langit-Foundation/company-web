/**
 * Skema Dokumen Berita Sanity (DYNAMIC.md Section 3.1 & 3.2)
 * Digunakan untuk pemodelan data di dashboard CMS dan validasi input.
 */

type ValidationRule = {
  required: () => ValidationRule;
  max: (length: number) => ValidationRule;
};

export const newsSchema = {
  name: "news",
  title: "Berita & Dokumentasi",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Judul Berita",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required().max(120),
    },
    {
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "category",
      title: "Kategori Program",
      type: "string",
      options: {
        list: [
          { title: "Kebutuhan Pangan", value: "Kebutuhan Pangan" },
          { title: "Pendidikan", value: "Pendidikan" },
          { title: "Kolaborasi", value: "Kolaborasi" },
          { title: "Kesehatan", value: "Kesehatan" },
          { title: "Tanggap Bencana", value: "Tanggap Bencana" },
          { title: "Ekonomi & Usaha", value: "Ekonomi & Usaha" },
        ],
      },
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "program",
      title: "Nama Program",
      type: "string",
      description: "Contoh: Langit Box, Jalan Langit Scholarship, SERASI",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "date",
      title: "Tanggal Kegiatan / Publikasi",
      type: "date",
      options: {
        dateFormat: "DD MMMM YYYY",
      },
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "location",
      title: "Lokasi Penyaluran",
      type: "string",
      description: "Contoh: Bandung, Cimahi, Jakarta",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "beneficiaries",
      title: "Penerima Manfaat",
      type: "string",
      description: "Contoh: 192 santri, 80 santri",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Ringkasan (Excerpt)",
      type: "text",
      rows: 3,
      description: "Ringkasan 1-2 kalimat untuk kartu berita di homepage",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "coverImage",
      title: "Foto Utama Berita",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text (Deskripsi Gambar)",
          validation: (Rule: ValidationRule) => Rule.required(),
        },
      ],
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "content",
      title: "Isi Paragraf Berita",
      type: "array",
      // Sanity tidak mengizinkan primitive `text` dicampur dengan object `block`
      // dalam satu array. Portable Text block juga menyediakan editor paragraf
      // yang dibutuhkan oleh form berita.
      of: [{ type: "block" }],
      description: "Isi berita menggunakan editor paragraf dan rich text",
    },
    {
      name: "distributionTable",
      title: "Tabel Penyaluran (Opsional)",
      type: "object",
      fields: [
        {
          name: "totalLabel",
          title: "Label Total",
          type: "string",
          initialValue: "Total",
        },
        {
          name: "totalValue",
          title: "Nilai Total",
          type: "string",
          description: "Contoh: 192 pax",
        },
        {
          name: "rows",
          title: "Rincian Titik Penyaluran",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", title: "Nama Lokasi / Pondok", type: "string" },
                { name: "value", title: "Jumlah Paket", type: "string" },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "ctaText",
      title: "Teks Ajakan Donasi (CTA)",
      type: "text",
      rows: 2,
    },
    {
      name: "ctaButtonLabel",
      title: "Label Tombol CTA",
      type: "string",
      initialValue: "Dukung Program Ini",
    },
    {
      name: "ctaButtonUrl",
      title: "URL Tombol CTA",
      type: "string",
      description: "Link WhatsApp atau halaman donasi",
    },
    {
      name: "status",
      title: "Status Publikasi",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
          { title: "Archived", value: "archived" },
        ],
        layout: "radio",
      },
      initialValue: "published",
    },
  ],
};
