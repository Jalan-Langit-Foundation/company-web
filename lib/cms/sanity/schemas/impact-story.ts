/**
 * Skema Dokumen Cerita Dampak Sanity
 * Digunakan untuk pemodelan data cerita dampak di dashboard CMS.
 */

type ValidationRule = {
  required: () => ValidationRule;
  max: (length: number) => ValidationRule;
};

export const impactStorySchema = {
  name: "impactStory",
  title: "Cerita Dampak",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Judul Cerita",
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
      name: "person",
      title: "Nama Tokoh / Penerima Manfaat",
      type: "string",
      description: "Contoh: Santri Penghafal Al-Qur'an, Aqil, Pejuang Nafkah Jalanan",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "role",
      title: "Profil / Peran Penerima Manfaat",
      type: "string",
      description: "Contoh: Penerima Manfaat Langit Box Nutrisi, Santri PAUD",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "programName",
      title: "Nama Program Terkait",
      type: "string",
      description: "Contoh: Langit Box Nutrisi, SERASI, Jalan Langit Scholarship",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "category",
      title: "Kategori Program",
      type: "string",
      description: "Contoh: Pangan & Nutrisi, Pendidikan & Santri, Pejuang Nafkah Jalanan",
    },
    {
      name: "badge",
      title: "Badge Label (Opsional)",
      type: "string",
      description: "Contoh: Langit Box Nutrisi, SERASI",
    },
    {
      name: "location",
      title: "Lokasi",
      type: "string",
      description: "Contoh: Bandung, Lembang, Pesantren Pelosok Mitra JLF",
    },
    {
      name: "quote",
      title: "Kutipan Langsung (Quote)",
      type: "text",
      rows: 3,
      description: "Kutipan kata-kata dari penerima manfaat",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "story",
      title: "Narasi Cerita Dampak",
      type: "text",
      rows: 5,
      description: "Cerita di balik program dan dampak nyata yang dirasakan",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "hashtag",
      title: "Tagar (#)",
      type: "string",
      description: "Contoh: #LangitBox, #SERASI, #HadiahKebahagiaan",
    },
    {
      name: "impactMetric",
      title: "Metrik / Ringkasan Dampak (Opsional)",
      type: "string",
      description: "Contoh: Ratusan Paket Nutrisi Rutin untuk Santri Tahfidz",
    },
    {
      name: "donationUrl",
      title: "URL Donasi / Campaign (Opsional)",
      type: "string",
      description: "Link donasi program terkait",
    },
    {
      name: "featuredImage",
      title: "Foto Dokumentasi",
      type: "image",
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
      name: "order",
      title: "Urutan Tampil",
      type: "number",
      description: "Urutan tampilan pada slider/carousel (angka terkecil tampil lebih dulu, contoh: 1, 2, 3)",
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
};
