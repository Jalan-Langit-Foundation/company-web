/**
 * Skema dokumen foto untuk section Cerita Dampak.
 * Dipisahkan dari konten teks impactStory agar foto dapat dikelola mandiri.
 */

type ValidationRule = {
  required: () => ValidationRule;
};

export const impactStoryPhotoSchema = {
  name: "impactStoryPhoto",
  title: "Foto Cerita Dampak",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Nama Foto",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required(),
    },
    {
      name: "image",
      title: "Foto Dokumentasi",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: ValidationRule) => Rule.required(),
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text (Deskripsi Gambar)",
          validation: (Rule: ValidationRule) => Rule.required(),
        },
      ],
    },
    {
      name: "order",
      title: "Urutan Tampil",
      type: "number",
      description: "Angka terkecil tampil lebih dulu di marquee foto.",
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
