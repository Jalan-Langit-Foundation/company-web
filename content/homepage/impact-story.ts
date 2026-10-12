export interface ImpactStory {
  id: string;
  title: string;
  category: string;
  badge: string;
  person: string;
  role: string;
  location: string;
  programName: string;
  quote: string;
  story: string;
  impactMetric: string;
  donationUrl: string;
  hashtag: string;
}

export const IMPACT_STORY_DATA = {
  eyebrow: "CERITA DI BALIK DAMPAK",
  verticalLabel: "SECTION 06 · IMPACT STORIES",
  headline: {
    prefix: "Karena Setiap Angka,",
    highlight: "Ada Cerita Nyata",
  },
  supportingCopy:
    "Di balik ribuan angka penerima manfaat, ada air mata haru, perjuangan tanpa lelah, dan harapan yang kembali tumbuh. Ikuti bagaimana titipan kebaikan Anda menjelma menjadi senyum nyata di wajah mereka.",
  stories: [
    {
      id: "langit-box-nutrisi",
      title: "Ketika Satu Kotak Makanan Memberi Ruang untuk Menghafal",
      category: "Pangan & Nutrisi",
      badge: "Langit Box Nutrisi",
      person: "Santri Penghafal Al-Qur'an",
      role: "Penerima Manfaat Langit Box Nutrisi",
      location: "Pondok Pesantren Tahfidz Mitra JLF",
      programName: "Langit Box Nutrisi",
      quote:
        "“Dengan adanya makanan yang sudah disiapkan, kami tidak perlu lagi membagi waktu untuk menyiapkan makanan berbuka. Waktu santri bisa lebih fokus untuk menghafal dan belajar.”",
      story:
        "Di balik ratusan nasi box yang disalurkan melalui Langit Box Nutrisi, ada waktu belajar dan menghafal yang menjadi lebih lapang bagi para santri. Tersedianya makanan berbuka pada hari puasa sunnah Senin dan Kamis meringankan beban pondok, sehingga santri dapat lebih tenang mendalami Al-Qur'an dan beristirahat.",
      impactMetric: "Ratusan Paket Nutrisi Rutin untuk Santri Tahfidz",
      donationUrl: "https://donasi.jalanlangit.org/campaign/langit-box",
      hashtag: "#LangitBox",
    },
    {
      id: "hadiah-kebahagiaan",
      title: "Satu Paket Sembako, Satu Senyum yang Tidak Terlupakan",
      category: "Pejuang Nafkah Jalanan",
      badge: "Hadiah Kebahagiaan",
      person: "Pejuang Nafkah Jalanan",
      role: "Penerima Manfaat Hadiah Kebahagiaan",
      location: "Lengkong, Sumbersari & Cihampit, Bandung",
      programName: "Hadiah Kebahagiaan",
      quote:
        "“Ayah saya sangat bahagia menerima bantuannya. Terima kasih sudah membuat ayah saya tersenyum hari itu.”",
      story:
        "Menyusuri jalanan kawasan Lengkong, Sumbersari, dan Cihampit, tim JLF menyapa para pejuang nafkah jalanan—mulai dari driver ojek online, penjaga parkir, penjual balon, penjual es tebu, kurir, hingga pemulung. Pertemuan ini menjadi pengingat bahwa kepedulian tepat waktu sudah cukup untuk membuat seseorang merasa tidak sendirian.",
      impactMetric: "Paket Sembako Apresiasi Pejuang Jalanan",
      donationUrl: "https://donasi.jalanlangit.org/campaign/hadiah-kebahagiaan",
      hashtag: "#HadiahKebahagiaan",
    },
    {
      id: "jalan-langit-scholarship",
      title: "Ketika Dukungan Membuat Langkah Belajar Terasa Lebih Ringan",
      category: "Pendidikan & Santri",
      badge: "Jalan Langit Scholarship",
      person: "Santri Jalan Langit Scholarship",
      role: "Penerima Manfaat Program JLS",
      location: "Pesantren Pelosok Mitra JLF",
      programName: "Jalan Langit Scholarship",
      quote:
        "“Dukungan yang diberikan membuat saya lebih semangat untuk terus belajar dan mengembangkan kemampuan.”",
      story:
        "Melalui Jalan Langit Scholarship, santri mendapatkan dukungan kelancaran belajar dengan rata-rata skor dampak 4,89 dari 5. Program ini diperluas dengan Training Public Speaking dan Multimedia yang melatih keberanian santri memimpin forum, kultum, hingga 89% santri aktif terlibat dalam dokumentasi dan media pondok.",
      impactMetric: "Beasiswa Penuh & Pembinaan Kapasitas Mandiri",
      donationUrl: "https://donasi.jalanlangit.org/campaign/langit-scholarship",
      hashtag: "#LangitScholarship",
    },
    {
      id: "serasi",
      title: "Hari Ketika Bermain Menjadi Sebuah Kenangan",
      category: "Pure Joy & Edukasi",
      badge: "SERASI",
      person: "Aqil",
      role: "Santri PAUD — Peserta SERASI",
      location: "Event Rekreasi Sehari Bersama Santri",
      programName: "SERASI — Sehari Bersama Santri",
      quote:
        "“Alhamdulillah, senang banget bisa main dan belanja.”",
      story:
        "Melalui SERASI (Sehari Bersama Santri), JLF menghadirkan ruang bagi anak-anak santri untuk bermain, berbelanja, dan menikmati masa kecil bersama teman di luar rutinitas pesantren. Kebahagiaan seorang anak tidak membutuhkan hal rumit—hanya kesempatan merasakan bahwa hari itu adalah hari yang istimewa untuk mereka.",
      impactMetric: "1 Hari Penuh Pengalaman & Kebahagiaan Anak",
      donationUrl: "https://donasi.jalanlangit.org/campaign/serasi",
      hashtag: "#SERASI",
    },
    {
      id: "zakat",
      title: "Kebaikan yang Sampai di Waktu yang Tepat",
      category: "Zakat Berdaya",
      badge: "Zakat JLF",
      person: "Asatidz Penerima Manfaat",
      role: "Penerima Penyaluran Zakat JLF",
      location: "Lembaga Pendidikan & Dakwah Mitra JLF",
      programName: "Zakat JLF",
      quote:
        "“Alhamdulillah, makasih ya, De. Bantuannya sangat berarti. Semoga Allah balas kebaikannya.”",
      story:
        "Ada kebaikan yang hadir di waktu yang tepat. Sebuah bantuan zakat sederhana menjadi penguat bagi para guru dan asatidz untuk terus menjalankan amanah dakwah sehari-hari. Di balik satu ucapan terima kasih, mengalir doa tulus dari para penerima manfaat kepada setiap muzakki yang menitipkan kebaikannya.",
      impactMetric: "Penyaluran Amanah Zakat bagi Asnaf Prioritas",
      donationUrl: "https://donasi.jalanlangit.org/campaign/zakat",
      hashtag: "#ZakatJLF",
    },
  ] satisfies ImpactStory[],

};
