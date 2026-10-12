/**
 * Skema Dokumen Video Pilihan Sanity
 * Digunakan untuk pemodelan data video showcase di dashboard CMS.
 */

type ValidationRule = {
  required: () => ValidationRule;
  max: (length: number) => ValidationRule;
};

export const featuredVideoSchema = {
  name: "featuredVideo",
  title: "Video Pilihan",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Judul Video",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required().max(120),
    },
    {
      name: "slug",
      title: "Slug (Identifier / URL)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "youtubeId",
      title: "YouTube Video ID",
      type: "string",
      description:
        "ID unik video dari URL YouTube (contoh: '8HODgDfVp5I' dari https://www.youtube.com/watch?v=8HODgDfVp5I)",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "description",
      title: "Deskripsi Video",
      type: "text",
      rows: 3,
      description: "Ringkasan cerita atau penjelasan isi video",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "category",
      title: "Kategori Video",
      type: "string",
      options: {
        list: [
          { title: "Dokumentasi Program", value: "Dokumentasi Program" },
          { title: "Pendidikan Santri", value: "Pendidikan Santri" },
          { title: "Aksi Relawan", value: "Aksi Relawan" },
          { title: "Kisah Nyata", value: "Kisah Nyata" },
        ],
      },
      initialValue: "Dokumentasi Program",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "duration",
      title: "Durasi Video",
      type: "string",
      description: "Format menit:detik, contoh: 02:36 atau 03:20",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "thumbnail",
      title: "Custom Thumbnail (Opsional)",
      type: "image",
      description:
        "Opsional. Jika dikosongkan, sistem otomatis menggunakan thumbnail kualitas tinggi dari YouTube.",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text (Deskripsi Gambar)",
        },
      ],
    },
    {
      name: "publishedDate",
      title: "Bulan & Tahun Publikasi (Opsional)",
      type: "string",
      description: "Contoh: Januari 2026 atau November 2025",
    },
    {
      name: "views",
      title: "Label Tayangan / Views (Opsional)",
      type: "string",
      description: "Contoh: 1.2K, 3.5K",
    },
    {
      name: "order",
      title: "Urutan Tampil",
      type: "number",
      description:
        "Urutan tampilan pada slider (angka terkecil tampil lebih dulu, contoh: 1, 2, 3)",
      initialValue: 1,
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
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "thumbnail",
    },
  },
};
