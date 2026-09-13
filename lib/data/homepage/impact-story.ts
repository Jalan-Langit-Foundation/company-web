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
  featuredImage: string;
}

export interface ImpactMarqueePhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  tag: string;
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
      id: "mbah-sarwan",
      title: "Mbah Sarwan",
      category: "Pejuang Nafkah Jalanan",
      badge: "Hadiah Kebahagiaan",
      person: "Mbah Sarwan (68 Tahun)",
      role: "Pedagang & Lansia Dhuafa",
      location: "Bandung, Jawa Barat",
      programName: "Hadiah Kebahagiaan & Zakat",
      quote:
        "“Alhamdulillah nak, paket sembako ini sangat meringankan beban kami di saat jualan sepi. Rasanya seperti doa panjang yang akhirnya dijawab Allah lewat orang-orang baik.”",
      story:
        "Di usianya yang hampir kepala tujuh, Mbah Sarwan masih terus mengayuh sepeda mencari nafkah tanpa kenal lelah. Paket sembako Hadiah Kebahagiaan dari Jalan Langit Foundation menghadirkan ketenangan bagi dapur keluarganya.",
      impactMetric: "Paket Sembako & Santunan Nutrisi Lengkap",
      donationUrl: "https://donasi.jalanlangit.org/campaign/hadiah-kebahagiaan",
      featuredImage: "/images/draft-foto/zakat/zakat-05.webp",
    },
    {
      id: "santriwati-kirani",
      title: "Santri Kirani",
      category: "Generasi Qur'ani",
      badge: "Langit Scholarship",
      person: "Kirani (16 Tahun)",
      role: "Santriwati Penghafal Qur'an",
      location: "Pesantren Pelosok Mitra JLF",
      programName: "Langit Scholarship",
      quote:
        "“Beasiswa ini bukan sekadar bantuan biaya, tapi pemantik semangat bagi saya untuk menyelesaikan hafalan 30 juz dan bertekad mengajarkannya kembali kepada adik-adik di desa.”",
      story:
        "Keterbatasan ekonomi sempat membuat langkah Kirani terancam terhenti. Berkat beasiswa satu tahun penuh dari donatur JLF, kini Kirani fokus memperdalam hafalan dan pembinaan karakter mandiri.",
      impactMetric: "Beasiswa Penuh 1 Tahun + Pembinaan Karakter",
      donationUrl: "https://donasi.jalanlangit.org/campaign/langit-scholarship",
      featuredImage: "/images/draft-foto/ramadhan/ramadhan-01.webp",
    },
    {
      id: "adik-naufal",
      title: "Adik Naufal",
      category: "Nutrisi & Tumbuh Kembang",
      badge: "Langit Box",
      person: "Naufal (9 Tahun)",
      role: "Santri Yatim Penghafal Cilik",
      location: "Madrasah Dhuafa",
      programName: "Langit Box",
      quote:
        "“Paling senang waktu hari Senin dan Kamis saat berbuka puasa, ada buah manis dan susu kotak dari kakak relawan Jalan Langit Foundation. Kami jadi makin semangat puasa sunnah!”",
      story:
        "Langit Box hadir rutin setiap pekan mendistribusikan buah segar dan susu bernutrisi untuk melengkapi asupan makanan anak-anak yatim dan dhuafa pada momen berbuka puasa sunnah.",
      impactMetric: "Distribusi Rutin Buah Segar & Susu Nutrisi",
      donationUrl: "https://donasi.jalanlangit.org/campaign/langit-box",
      featuredImage: "/images/draft-foto/langit-box/langit-box-01.webp",
    },
    {
      id: "santri-serasi",
      title: "Sahabat Santri SERASI",
      category: "Edukasi & Rekreasi Ceria",
      badge: "SERASI",
      person: "Santri Binaan JLF",
      role: "Peserta Sehari Bersama Santri",
      location: "Lembang Park & Zoo",
      programName: "SERASI — Sehari Bersama Santri",
      quote:
        "“Ini pertama kalinya kami jalan-jalan melihat satwa langsung sambil belajar bersama kakak-kakak relawan. Bahagia sekali, rasanya seperti mimpi yang jadi kenyataan.”",
      story:
        "Melalui program SERASI, anak-anak santri dhuafa diajak menikmati rekreasi edukatif yang membuka wawasan baru, menumbuhkan keceriaan, dan melipatgandakan rasa syukur.",
      impactMetric: "1 Hari Penuh Edukasi, Bermain & Bahagia",
      donationUrl: "https://donasi.jalanlangit.org/campaign/serasi",
      featuredImage: "/images/draft-foto/serasi/serasi-07.webp",
    },
    {
      id: "warga-qurban",
      title: "Warga Pelosok",
      category: "Pemberdayaan Kemanusiaan",
      badge: "QURMA Qurban",
      person: "Keluarga Ibu Maryam",
      role: "Penerima Manfaat Qurban",
      location: "Dusun Pelosok Jawa Barat",
      programName: "Jalan Langit Peduli & Qurban",
      quote:
        "“Di tempat kami jarang sekali ada qurban. Kedatangan tim relawan membawa daging segar membuat anak-anak kami makan dengan lahap dan tersenyum gembira sekeluarga.”",
      story:
        "Program QURMA (Qurban untuk Sesama) menembus wilayah pelosok yang jarang tersentuh distribusi daging qurban, mengalirkan kebahagiaan hakiki ke titik-titik yang paling membutuhkan.",
      impactMetric: "Penyaluran Daging Qurban Tepat Sasaran",
      donationUrl: "https://donasi.jalanlangit.org/campaign/jalan-langit-peduli",
      featuredImage: "/images/draft-foto/qurban/qurban-02.webp",
    },
  ] satisfies ImpactStory[],

  /** Foto-foto yang berjalan terus menerus pada animasi vertical infinite loop */
  marqueePhotos: [
    {
      id: "mp-1",
      src: "/images/draft-foto/zakat/zakat-05.webp",
      alt: "Senyum bahagia Mbah penerima bantuan Jalan Langit Foundation",
      caption: "Senyum tulus mustahik penerima amanah zakat",
      tag: "Zakat & Sembako",
    },
    {
      id: "mp-2",
      src: "/images/draft-foto/ramadhan/ramadhan-01.webp",
      alt: "Keceriaan santriwati penerima beasiswa pembinaan",
      caption: "Masa depan cerah generasi Qur'ani Indonesia",
      tag: "Langit Scholarship",
    },
    {
      id: "mp-3",
      src: "/images/draft-foto/serasi/serasi-07.webp",
      alt: "Rombongan santri SERASI di Lembang Park & Zoo",
      caption: "Petualangan ceria santri di Lembang Park & Zoo",
      tag: "SERASI Edukasi",
    },
    {
      id: "mp-4",
      src: "/images/draft-foto/langit-box/langit-box-01.webp",
      alt: "Relawan JLF mengantarkan paket pangan Langit Box",
      caption: "Amanah pangan nutrisi tiba di pintu penerima",
      tag: "Langit Box",
    },
    {
      id: "mp-5",
      src: "/images/draft-foto/qurban/qurban-05.webp",
      alt: "Anak tersenyum menerima paket QURMA Qurban",
      caption: "Kebahagiaan paket qurban untuk anak pelosok",
      tag: "Qurban Berkah",
    },
    {
      id: "mp-6",
      src: "/images/draft-foto/ramadhan/ramadhan-03.webp",
      alt: "Penyerahan bingkisan Ramadhan Bahagia JLF",
      caption: "Bingkisan kado kebaikan di Ramadhan Bahagia",
      tag: "Ramadhan Bahagia",
    },
    {
      id: "mp-7",
      src: "/images/draft-foto/langit-school/langit-school-01.webp",
      alt: "Santri dan mahasiswa beasiswa pembinaan",
      caption: "Pembinaan karakter dan kemandirian santri",
      tag: "Pendidikan Santri",
    },
    {
      id: "mp-8",
      src: "/images/draft-foto/ramadhan/ramadhan-08.webp",
      alt: "Kebersamaan santri cilik tertawa bahagia",
      caption: "Tawa ceria anak-anak penerima manfaat",
      tag: "Senyum Kebaikan",
    },
  ] satisfies ImpactMarqueePhoto[],
};
