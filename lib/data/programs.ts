export interface Program {
  id: string;
  title: string;
  summary: string;
  detail: string;
  images: string[];
}

export const programs: Program[] = [
  {
    id: "langit-box",
    title: "Langit Box",
    summary:
      "Distribusi pangan dan nutrisi tambahan bagi anak sekolah, yatim, dan dhuafa.",
    detail:
      "Program distribusi pangan dan nutrisi tambahan berupa buah dan susu yang diperuntukkan bagi anak sekolah, yatim, dhuafa, dan hamba pilihan Allah. Penyaluran dilakukan rutin pada momen buka puasa sunnah Senin dan Kamis.",
    images: [
      "/images/programs/langit-box-1.jpg",
      "/images/programs/langit-box-2.jpg",
      "/images/programs/langit-box-3.jpg",
    ],
  },
  {
    id: "langit-scholarship",
    title: "Langit Scholarship",
    summary: "Beasiswa dan pembinaan terpadu untuk membentuk generasi Qur'ani.",
    detail:
      "Program beasiswa dan pembinaan terpadu selama satu tahun bagi pelajar untuk membentuk generasi Qur'ani yang kuat dalam hafalan, unggul dalam akhlak, terampil dalam soft skill, dan memiliki kemandirian ekonomi.",
    images: [
      "/images/programs/scholarship-1.jpg",
      "/images/programs/scholarship-2.jpg",
      "/images/programs/scholarship-3.jpg",
    ],
  },
  {
    id: "serasi",
    title: "SERASI — Sehari Bersama Santri",
    summary: "Event kebahagiaan dan pengalaman edukatif untuk anak dan pelajar.",
    detail:
      "Program berbasis event yang bertujuan menghadirkan kebahagiaan dan pengalaman edukatif kepada anak dan pelajar melalui kegiatan menyenangkan seperti games, nonton bersama, dan rekreasi edukatif.",
    images: [
      "/images/programs/serasi-1.jpg",
      "/images/programs/serasi-2.jpg",
      "/images/programs/serasi-3.jpg",
    ],
  },
  {
    id: "hadiah-kebahagiaan",
    title: "Hadiah Kebahagiaan",
    summary: "Apresiasi berupa paket sembako bagi para pejuang nafkah jalanan.",
    detail:
      "Wujud apresiasi bagi para pejuang nafkah di jalanan. Hadiah Kebahagiaan menghadirkan paket sembako untuk menguatkan langkah para driver ojek online, pedagang kecil, dan keluarga prasejahtera yang terus berjuang tanpa menyerah.",
    images: [
      "/images/programs/hadiahkebahagiaan-1.jpg",
      "/images/programs/hadiahkebahagiaan-2.jpg",
      "/images/programs/hadiahkebahagiaan-3.jpg",
    ],
  },
  {
    id: "zakat",
    title: "Zakat",
    summary: "Penyaluran dana zakat tepat sasaran untuk keberdayaan sesama.",
    detail:
      "Menyalurkan dana zakat secara tepat sasaran untuk menghadirkan perubahan nyata dan keberdayaan bagi sesama yang membutuhkan. Program penyaluran zakat sebagai bagian dari ikhtiar JLF dalam menghadirkan kebermanfaatan bagi masyarakat.",
    images: [
      "/images/programs/zakat-1.jpg",
      "/images/programs/zakat-2.jpg",
      "/images/programs/zakat-3.jpg",
    ],
  },
  {
    id: "jalan-langit-peduli",
    title: "Jalan Langit Peduli",
    summary: "Aksi kemanusiaan untuk saudara yang tertimpa krisis dan bencana.",
    detail:
      "Jalan Langit Peduli hadir sebagai jembatan kebaikan untuk merangkul saudara kita yang tertimpa krisis kemanusiaan, mulai dari duka di Palestina hingga bencana alam di tanah air. Sebab di setiap ujian mereka, ada panggilan bagi kita untuk saling menguatkan dan mengukir kembali harapan.",
    images: [
      "/images/programs/jalanlangitpeduli-1.jpg",
      "/images/programs/jalanlangitpeduli-2.jpg",
      "/images/programs/jalanlangitpeduli-3.jpg",
    ],
  },
];

export function getProgramById(id: string): Program | undefined {
  return programs.find((p) => p.id === id);
}