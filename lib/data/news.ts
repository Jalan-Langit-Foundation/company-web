export interface NewsTableRow {
  label: string;
  value: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  beneficiaries: string;
  program: string;
  excerpt: string;
  content: string[]; // tiap elemen array = 1 paragraf
  table?: {
    rows: NewsTableRow[];
    totalLabel: string;
    totalValue: string;
  };
  ctaText: string;
  ctaButtonLabel: string;
  image: string;
}

export const news: NewsItem[] = [
  {
    id: "langit-box-196",
    title: "Langit Box Seri 196 Salurkan 192 Nasi Box untuk Santri di 5 Pondok Bandung",
    category: "Kebutuhan Pangan",
    date: "10 September 2026",
    location: "Bandung",
    beneficiaries: "192 santri",
    program: "Langit Box",
    excerpt:
      "Langit Box Seri 196 kembali menyalurkan 192 nasi box kepada santri di lima pondok di Bandung. Tim juga menerima doa, pesan, dan masukan langsung dari para pengurus pondok terkait kebutuhan para santri.",
    content: [
      "**Bandung, 10 September 2026** — **Jalan Langit Foundation (JLF)** kembali melanjutkan penyaluran bantuan pangan melalui **Langit Box Seri 196** pada 10 September 2026 di Bandung. Sebanyak **192 nasi box** disalurkan kepada para santri di lima pondok pesantren sebagai dukungan untuk kebutuhan berbuka puasa sunnah Senin.",
      "Penyaluran dilakukan menggunakan kendaraan operasional motor dan mobil, diawali dengan pengambilan kebutuhan pendukung di kawasan Arcamanik sebelum tim melanjutkan perjalanan menuju pondok-pondok penerima manfaat.",
      "Di setiap titik distribusi, tim melakukan penyerahan Langit Box secara langsung sekaligus berinteraksi akrab dengan para santri dan pengurus pondok.",
      "Di RTQ Madinatul Husaini, tim mendapatkan pesan sederhana namun bermakna dari pengurus pondok: *“Tetap jadi orang yang bermanfaat.”* Sementara dari Daarul Adzkar Uber, pengurus menyampaikan untaian doa tulus agar para donatur dan tim Langit Box senantiasa mendapatkan rahmat, kesehatan, kemudahan dalam setiap urusan, serta balasan pahala berlipat ganda.",
      "Pada distribusi kali ini, tim juga menerima masukan langsung dari pondok mengenai preferensi konsumsi santri, seperti pilihan susu kemasan yang praktis disimpan. Masukan berharga ini menjadi catatan penting agar bantuan yang disalurkan semakin sesuai dengan kebutuhan lapangan.",
      "Meski perjalanan sempat diguyur hujan, semangat tim tidak surut hingga seluruh bantuan berhasil diterima dengan baik oleh adik-adik santri di PTQ Maqdis, Daarul Adzkar Bubat, dan Pondok Madinatul Ulum.",
      "Bagi JLF, setiap doa dan senyuman yang menyambut menjadi pengingat bahwa kebaikan ini terus mengalir dan mempertemukan keikhlasan para donatur dengan mereka yang membutuhkan.",
      "“Setiap dukungan membantu menghadirkan manfaat yang lebih dekat dengan kebutuhan para santri dan lingkungan pesantren.”",
    ],
    table: {
      rows: [
        { label: "PTQ Maqdis", value: "49 pax" },
        { label: "Daarul Adzkar Uber", value: "33 pax" },
        { label: "Daarul Adzkar Bubat", value: "27 pax" },
        { label: "Pondok Madinatul Ulum", value: "57 pax" },
        { label: "RTQ Madinatul Husaini", value: "26 pax" },
      ],
      totalLabel: "Total",
      totalValue: "192 pax",
    },
    ctaText: "Terus Langitkan Kebaikan melalui Langit Box. Setiap dukungan membantu menghadirkan manfaat yang lebih dekat dengan kebutuhan para santri.",
    ctaButtonLabel: "Dukung Langit Box",
    image: "/images/news/langit-box-196.jpg",
  },
  {
    id: "mentoring-jls-2",
    title: "Mentoring JLS ke-2 Bekali Santri dengan Keterampilan Produksi Konten Digital",
    category: "Pendidikan",
    date: "6 September 2026",
    location: "Bandung",
    beneficiaries: "9 santri",
    program: "Jalan Langit Scholarship",
    excerpt:
      "Melanjutkan proses pengembangan keterampilan multimedia, 9 santri Jalan Langit Scholarship mengikuti mentoring kedua yang berfokus pada penulisan skrip, pemanfaatan AI, perencanaan visual, dan production planning.",
    content: [
      "**Bandung, 6 September 2026** — **Jalan Langit Scholarship (JLS)** kembali melanjutkan rangkaian pengembangan kapasitas santri penerima manfaat melalui **Mentoring JLS ke-2** pada 6 September 2026 di Bandung. Kegiatan ini diikuti oleh **9 santri** dalam rangkaian modul HO 2 Multimedia.",
      "Setelah pada sesi sebelumnya santri diajak mendalami proses berpikir kreatif dan *storytelling*, mentoring kedua ini mengarahkan mereka pada tahap perencanaan produksi konten agar ide yang telah dirancang dapat diterjemahkan menjadi karya digital yang terstruktur dan berkualitas.",
      "Dalam sesi intensif ini, santri mempelajari empat pilar keterampilan utama: *script writing*, *prompt engineering*, *shot list*, dan *production plan*.",
      "Melalui materi *script writing*, santri dilatih menuangkan ide cerita ke dalam naskah yang siap dieksekusi. Sementara materi *prompt engineering* memperkenalkan cara memberikan instruksi yang presisi kepada teknologi AI agar menghasilkan luaran kreatif yang sesuai kebutuhan.",
      "Santri juga dibekali pemahaman *shot list* untuk mengenali variasi sudut pandang dan teknik pengambilan gambar video, serta menyusun *production plan* agar seluruh proses produksi dari pra-produksi hingga pasca-produksi berjalan terarah dan terkelola dengan baik.",
      "Sebagai tindak lanjut pembelajaran, setiap peserta menerima penugasan mandiri untuk memproduksi karya video berbasis *content brief* yang telah mereka susun.",
      "Melalui pendampingan yang bertahap ini, JLS berkomitmen membuka ruang seluas-luasnya bagi santri untuk mengasah potensi diri dan menjadi kreator muda yang mampu menyebarkan konten positif bagi masyarakat.",
      "“Bersama, kita dapat membuka lebih banyak ruang bagi santri untuk belajar, berkarya, dan mengembangkan potensi mereka di era digital.”",
    ],
    ctaText: "Dukung Perjalanan Belajar Santri melalui Jalan Langit Scholarship. Bersama, kita wujudkan generasi muda yang berdaya dan adaptif.",
    ctaButtonLabel: "Dukung Beasiswa Santri",
    image: "/images/news/mentoring-jls-2.jpg",
  },
  {
    id: "hadiah-kebahagiaan-pejuang-nafkah-2",
    title: "Hadiah Kebahagiaan Kembali Hadir untuk Pejuang Nafkah di Bandung",
    category: "Kebutuhan Pangan",
    date: "28 Agustus 2026",
    location: "Bandung",
    beneficiaries: "40 pejuang nafkah",
    program: "Hadiah Kebahagiaan",
    excerpt:
      "Melalui Program Hadiah Kebahagiaan, Jalan Langit Foundation kembali menyapa para pejuang nafkah di kawasan Cihapit, Lengkong, dan sekitarnya dengan membagikan 40 paket sembako sebagai bentuk apresiasi dan kepedulian.",
    content: [
      "**Bandung, 28 Agustus 2026** — **Jalan Langit Foundation (JLF)** kembali melanjutkan aksi kepedulian melalui **Program Hadiah Kebahagiaan**, menyapa langsung para pejuang nafkah yang berikhtiar di jalanan Kota Bandung.",
      "Pada Jumat, 28 Agustus 2026, tim JLF yang terdiri dari staf program, peserta magang, relawan (*volunteer*), dan tim media mendistribusikan paket sembako di kawasan Cihapit, Lengkong, dan sekitarnya. Bantuan menyasar para pengemudi ojek online, pedagang keliling, serta pekerja sektor informal lainnya.",
      "Setiap paket sembako berisi kebutuhan pokok pangan sehari-hari, meliputi beras 2 kg, minyak goreng 800 ml, sarden 1 kaleng, teh celup 1 box, mi instan 3 bungkus, dan gula pasir.",
      "Kegiatan berlangsung sejak pukul 13.00 hingga 17.00 WIB. Selain menyalurkan bantuan, tim meluangkan waktu untuk berdialog dan mendengarkan kisah perjuangan para penerima manfaat di tengah dinamika mencari nafkah.",
      "Salah satu momen haru tercipta saat tim menjumpai seorang kakek pengatur lalu lintas jalanan yang masih setia membantu penyeberang jalan meski di usia senja. Penghormatan dan apresiasi tulus disampaikan tim dengan menyerahkan paket sembako kepadanya.",
      "Tim juga menyapa sejumlah pedagang keliling, termasuk penjual balon yang berjuang menjemput rezeki seharian. Rasa syukur, senyum kelegaan, dan doa yang mereka haturkan menjadi pengingat berharga bagi kita semua.",
      "Bagi JLF, sebuah kepedulian tidak selalu harus bernilai besar. Sapaan hangat dan perhatian tulus yang hadir tepat waktu sudah sangat cukup untuk membuat seseorang merasa dihargai dan tidak berjuang sendirian.",
      "“Bersama, kita dapat berbagi manfaat sekaligus menghadirkan perhatian bagi mereka yang terus berjuang memenuhi kebutuhan keluarga setiap harinya.”",
    ],
    ctaText: "Mari Hadirkan Hadiah Kebahagiaan. Bersama, kita kuatkan langkah para pejuang nafkah dalam memenuhi kebutuhan keluarganya.",
    ctaButtonLabel: "Dukung Pejuang Nafkah",
    image: "/images/news/hadiah-kebahagiaan-2.jpg",
  },
  {
    id: "langit-box-195",
    title: "Langit Box Seri 195 Kembali Salurkan 284 Nasi Box untuk Santri di 8 Pondok Bandung",
    category: "Kebutuhan Pangan",
    date: "27 Agustus 2026",
    location: "Bandung",
    beneficiaries: "284 santri",
    program: "Langit Box",
    excerpt:
      "Melanjutkan rangkaian penyaluran sebelumnya, Langit Box Seri 195 kembali menghadirkan dukungan pangan bagi 284 santri di 8 pondok di Bandung untuk kebutuhan berbuka puasa sunnah.",
    content: [
      "**Bandung, 27 Agustus 2026** — **Jalan Langit Foundation (JLF)** kembali melanjutkan ikhtiar kebaikan melalui penyaluran **Langit Box Seri 195** di Bandung. Sebanyak **284 nasi box** disalurkan kepada para santri di delapan pondok pesantren untuk mendukung santap berbuka puasa sunnah.",
      "Penyaluran ini merupakan kelanjutan dari komitmen berkelanjutan JLF dalam memastikan para santri penghafal Al-Qur’an dapat menjalankan aktivitas ibadah dan belajarnya dengan tenang tanpa kekhawatiran akan asupan berbuka.",
      "Bantuan konsumsi ini didistribusikan secara terarah berkat kekompakan tim program dan relawan yang menyusuri pondok-pondok mitra di berbagai penjuru Bandung.",
      "Bagi santri, kehadiran nasi box dengan menu bernutrisi ini bukan hanya mengenyangkan, melainkan menjadi penanda bahwa ada banyak hati yang mendoakan dan mendampingi perjuangan menuntut ilmu mereka.",
      "Seri ke-195 ini membuktikan konsistensi Langit Box sebagai jembatan kebaikan yang menghubungkan kepedulian para donatur langsung ke tangan para santri.",
      "“Bersama donatur dan para relawan, setiap kotak kebaikan dapat terus sampai kepada mereka yang membutuhkan.”",
    ],
    table: {
      rows: [
        { label: "PTQ Maqdis", value: "49 pax" },
        { label: "Daarul Adzkar Uber", value: "33 pax" },
        { label: "Daarul Adzkar Bubat", value: "27 pax" },
        { label: "PTQ Al Qolam", value: "27 pax" },
        { label: "Nurul Ilmi", value: "50 pax" },
        { label: "Pondok Madinatul Ulum Metro", value: "57 pax" },
        { label: "RTQ Madinatul Husaini", value: "26 pax" },
        { label: "Al-Qomariyah", value: "15 pax" },
      ],
      totalLabel: "Total",
      totalValue: "284 pax",
    },
    ctaText: "Terus Langitkan Kebaikan melalui Langit Box. Bersama donatur dan para relawan, setiap kotak kebaikan dapat terus sampai kepada mereka yang membutuhkan.",
    ctaButtonLabel: "Dukung Langit Box",
    image: "/images/news/langit-box-195.jpg",
  },
  {
    id: "hadiah-kebahagiaan-pejuang-nafkah-1",
    title: "Hadiah Kebahagiaan Hadir untuk 44 Pejuang Nafkah di Bandung",
    category: "Kebutuhan Pangan",
    date: "26 Agustus 2026",
    location: "Bandung",
    beneficiaries: "44 pejuang nafkah",
    program: "Hadiah Kebahagiaan",
    excerpt:
      "Melalui distribusi perdana Program Hadiah Kebahagiaan, Jalan Langit Foundation menyalurkan 44 paket sembako kepada para pejuang nafkah, mulai dari pengemudi ojek online hingga pedagang keliling di kawasan Bandung.",
    content: [
      "**Bandung, 26 Agustus 2026** — **Jalan Langit Foundation (JLF)** meluncurkan distribusi perdana **Program Hadiah Kebahagiaan**, sebuah inisiatif sosial yang ditujukan untuk mengapresiasi dan meringankan beban para pejuang nafkah di jalanan Kota Bandung.",
      "Pada penyaluran perdana ini, sebanyak **44 paket sembako** diserahkan secara langsung kepada para pengemudi ojek online dan pedagang keliling yang ditemui di sekitar kawasan Lengkong, Sumbersari, dan titik-titik sekitarnya.",
      "Program ini lahir dari rasa empati mendalam terhadap perjuangan keras para pekerja sektor informal yang terus gigih menafkahi keluarga di tengah tantangan ekonomi sehari-hari.",
      "Distribusi dijalankan secara langsung oleh tim kolaborasi yang terdiri dari tim program JLF, peserta magang, relawan, dan tim dokumentasi mulai pukul 10.00 hingga 17.00 WIB. Interaksi langsung ini memungkinkan tim mendengarkan kisah dan dinamika perjuangan para pejuang nafkah.",
      "Sebanyak 44 paket sembako berhasil didistribusikan dengan tuntas, dan program ini dirancang untuk terus berlanjut secara berkala menyasar titik-titik lainnya di Bandung.",
      "Lebih dari sekadar membagikan bahan makanan pokok, Hadiah Kebahagiaan ingin mengabarkan pesan hangat: bahwa setiap peluh dan ikhtiar halal mereka senantiasa diperhatikan dan dihargai oleh sesama.",
      "“Mari Hadirkan Hadiah Kebahagiaan. Bersama, kita dapat menguatkan langkah para pejuang nafkah melalui bantuan yang tepat dan bermakna.”",
    ],
    ctaText: "Mari Hadirkan Hadiah Kebahagiaan. Bersama, kita kuatkan langkah para pejuang nafkah melalui bantuan yang tepat dan bermakna.",
    ctaButtonLabel: "Dukung Hadiah Kebahagiaan",
    image: "/images/news/hadiah-kebahagiaan-1.jpg",
  },
  {
    id: "langit-box-194",
    title: "Langit Box Seri 194 Salurkan 285 Nasi Box untuk Santri di 8 Pondok Bandung",
    category: "Kebutuhan Pangan",
    date: "24 Agustus 2026",
    location: "Bandung",
    beneficiaries: "285 penerima",
    program: "Langit Box",
    excerpt:
      "Melalui Langit Box Seri 194, Jalan Langit Foundation menyalurkan 285 nasi box untuk mendukung santri dan satu penerima lainnya dalam menjalankan puasa sunnah Senin.",
    content: [
      "**Bandung, 24 Agustus 2026** — **Jalan Langit Foundation (JLF)** kembali menyalurkan bantuan pangan melalui **Langit Box Seri 194** pada 24 Agustus 2026 di Bandung. Sebanyak **285 nasi box** disalurkan untuk mendukung kebutuhan berbuka puasa bagi santri yang menjalankan puasa sunnah Senin.",
      "Penyaluran kali ini menjangkau delapan pondok pesantren dan satu penerima individu, mencakup total 284 santri serta 1 penerima manfaat lainnya yang tersebar di wilayah Kota Bandung dan sekitarnya.",
      "Bantuan nasi box ini menjadi wujud kepedulian nyata JLF untuk menyediakan santapan bergizi yang langsung dapat dinikmati para santri setelah seharian menunaikan ibadah puasa dan tadarus Al-Qur’an.",
      "Memasuki seri ke-194, program Langit Box terus membuktikan konsistensinya sebagai jembatan kebaikan antara para muzaki, donatur, dan santri yang membutuhkan asupan nutrisi seimbang di pondok.",
      "JLF berterima kasih atas amanah para donatur yang telah mempercayakan sedekah makannya melalui program ini. Semoga setiap suapan nasi menjadi pahala jariyah yang senantiasa mengalir.",
      "“Setiap nasi box yang disalurkan adalah bagian dari ikhtiar untuk menghadirkan manfaat yang sederhana, tetapi nyata.”",
    ],
    table: {
      rows: [
        { label: "PTQ Maqdis", value: "49 pax" },
        { label: "Daarul Adzkar Uber", value: "33 pax" },
        { label: "Daarul Adzkar Bubat", value: "27 pax" },
        { label: "PTQ Al Qolam", value: "27 pax" },
        { label: "Nurul Ilmi", value: "50 pax" },
        { label: "Pondok Madinatul Ulum Metro", value: "57 pax" },
        { label: "RTQ Madinatul Husaini", value: "26 pax" },
        { label: "Al-Qomariyah", value: "15 pax" },
        { label: "Hamba Allah", value: "1 pax" },
      ],
      totalLabel: "Total",
      totalValue: "285 pax",
    },
    ctaText: "Terus Langitkan Kebaikan melalui Langit Box. Bersama kita jaga nutrisi santri penghafal Al-Qur'an.",
    ctaButtonLabel: "Dukung Langit Box",
    image: "/images/news/langit-box-194.jpg",
  },
  {
    id: "langit-box-disabilitas",
    title: "Langit Box Dukung Perayaan Kemerdekaan Bersama Komunitas Disabilitas",
    category: "Kolaborasi",
    date: "23 Agustus 2026",
    location: "Bandung",
    beneficiaries: "100 peserta",
    program: "Langit Box",
    excerpt:
      "Jalan Langit Foundation mendukung peringatan Hari Kemerdekaan yang diselenggarakan oleh Komunitas Sahabat Disabilitas Indonesia melalui penyaluran 100 nasi box Langit Box.",
    content: [
      "**Bandung, 23 Agustus 2026** — Semangat kemerdekaan menjadi semakin bermakna ketika dirayakan bersama dan dapat dinikmati secara inklusif oleh seluruh lapisan masyarakat.",
      "**Jalan Langit Foundation (JLF)** berkolaborasi dengan **Komunitas Sahabat Disabilitas Indonesia** dalam menyemarakkan peringatan Hari Kemerdekaan melalui program **Langit Box**. Dalam acara ini, JLF menyalurkan **100 nasi box** untuk mendukung konsumsi para peserta, pendamping, dan panitia penyelenggara.",
      "Kemeriahan acara diisi dengan berbagai perlombaan khas agustusan yang melibatkan anak-anak disabilitas bersama orang tua mereka. Suasana hangat tercipta saat anak-anak berkompetisi dengan penuh keceriaan, tertawa lepas, dan saling mendukung satu sama lain.",
      "Dukungan konsumsi Langit Box ini dihadirkan agar seluruh peserta dapat menikmati rangkaian acara dengan nyaman tanpa terbebani kebutuhan logistik.",
      "Bagi JLF, keikutsertaan ini melampaui sekadar penyediaan pangan. Ini adalah ikhtiar nyata untuk menciptakan ruang kebersamaan yang ramah, hangat, dan inklusif bagi saudara-saudara kita penyandang disabilitas.",
      "Melalui kolaborasi lintas komunitas, JLF terus berkomitmen memperluas jangkauan manfaat Langit Box agar senantiasa hadir merangkul keberagaman dan menghadirkan senyuman bagi sesama.",
      "“Sebab semangat kemerdekaan akan semakin berarti ketika setiap orang memiliki ruang untuk merayakannya bersama.”",
    ],
    ctaText: "Mari bersama perluas kepedulian dan hadirkan ruang inklusif yang membahagiakan bagi semua melalui Langit Box.",
    ctaButtonLabel: "Dukung Langit Box",
    image: "/images/news/langit-box-disabilitas.jpg",
  },
  {
    id: "mentoring-jls-1",
    title: "Mentoring Perdana Jalan Langit Scholarship Dorong Santri Mengembangkan Kreativitas Konten Digital",
    category: "Pendidikan",
    date: "23 Agustus 2026",
    location: "Bandung",
    beneficiaries: "8 santri",
    program: "Jalan Langit Scholarship",
    excerpt:
      "Memasuki rangkaian pengembangan kapasitas penerima manfaat Jalan Langit Scholarship, sebanyak 8 santri mengikuti mentoring perdana yang berfokus pada pengembangan kreativitas dan kemampuan storytelling dalam produksi konten digital.",
    content: [
      "**Bandung, 23 Agustus 2026** — **Jalan Langit Scholarship (JLS)** memulai tahapan pendampingan intensif bagi para santri binaan melalui **Mentoring JLS ke-1** yang diselenggarakan pada 23 Agustus 2026 di Bandung. Kegiatan ini diikuti oleh **8 santri** pilihan sebagai bagian dari upaya peningkatan literasi dan keterampilan digital kreatif.",
      "Pada sesi perdana ini, para santri diajak untuk tidak hanya terpaku pada teknis pembuatan konten, melainkan diajak memahami seni merangkai ide cerita agar memiliki makna dan pesan yang menggugah audiens.",
      "Materi diawali dengan latihan berpikir kreatif, melatih para santri untuk melihat sudut pandang baru dari kehidupan sehari-hari di pesantren sebagai inspirasi cerita digital yang autentik.",
      "Selanjutnya, santri mempelajari teknik *storytelling* guna memperkuat substansi pesan. Pendekatan ini memastikan konten yang dihasilkan tidak sekadar memikat secara visual, tetapi juga membawa nilai kebaikan dan edukasi yang relevan.",
      "Sebagai penugasan aplikatif, para santri diminta menyusun rancangan konsep (*content brief*) tentang potret kehidupan santri yang nantinya akan dieksekusi menjadi karya media sosial.",
      "Melalui mentoring terarah ini, JLS ingin melahirkan santri yang mandiri, berkarakter, dan berdaya saing tinggi dalam era komunikasi digital.",
      "“Melalui proses mentoring yang berkelanjutan, JLS mendorong santri untuk mengenali potensi diri, mengembangkan keterampilan, dan menghasilkan karya yang memberi nilai bagi lingkungan.”",
    ],
    ctaText: "Dukung perjalanan santri dalam mengasah potensi dan keterampilan digital bersama Jalan Langit Scholarship.",
    ctaButtonLabel: "Dukung Program Beasiswa",
    image: "/images/news/mentoring-jls-1.jpg",
  },
  {
    id: "langit-box-193",
    title: "Langit Box Seri 193: Menemani Santri Menjalani Puasa Sunnah",
    category: "Kebutuhan Pangan",
    date: "20 Agustus 2026",
    location: "Bandung",
    beneficiaries: "329 santri + 10 penerima lainnya",
    program: "Langit Box",
    excerpt:
      "Melalui Langit Box Seri 193, Jalan Langit Foundation kembali menghadirkan 339 nasi box untuk berbuka puasa sunnah Kamis bagi santri di 8 pondok pesantren di Bandung dan penerima manfaat lainnya.",
    content: [
      "**Bandung, 20 Agustus 2026** — Bagi para santri penghafal Al-Qur’an di pesantren, hari-hari dipenuhi dengan kesungguhan menuntut ilmu, menghafal firman-Nya, dan beribadah. Menjaga puasa sunnah hari Kamis menjadi salah satu rutinitas mulia yang senantiasa dihidupkan.",
      "Mendampingi amalan tersebut, **Jalan Langit Foundation (JLF)** menyalurkan bantuan santap berbuka melalui **Langit Box Seri 193** kepada **329 santri** di 8 pondok pesantren di Bandung, ditambah 10 paket bagi penerima manfaat lainnya.",
      "Sebanyak 339 paket nasi box higienis dan bergizi didistribusikan tepat menjelang kumandang azan magrib, memberikan kemudahan bagi pondok untuk menyediakan hidangan berbuka bersama.",
      "Lebih dari sekadar hidangan makanan, Langit Box hadir sebagai suntikan energi dan wujud cinta kasih masyarakat kepada para penghafal Al-Qur'an agar mereka senantiasa bersemangat menapaki jalan dakwah dan kebaikan.",
      "Setiap nasi box yang tersalurkan menjadi bukti nyata bahwa doa dan sedekah dari para dermawan sampai langsung ke meja makan para santri.",
      "“Karena terkadang, dukungan sederhana berupa satu kotak makanan dapat menjadi energi bagi seseorang untuk terus melangkah dalam kebaikan.”",
    ],
    table: {
      rows: [
        { label: "PTQ Maqdis", value: "49 pax" },
        { label: "Daarul Adzkar Uber", value: "33 pax" },
        { label: "Daarul Adzkar Bubat", value: "27 pax" },
        { label: "PTQ Al Qolam", value: "27 pax" },
        { label: "Nurul Ilmi", value: "50 pax" },
        { label: "Pondok Madinatul Ulum Metro", value: "57 pax" },
        { label: "RTQ Madinatul Husaini", value: "26 pax" },
        { label: "Hamalatul", value: "50 pax" },
        { label: "Hamba Allah", value: "10 pax" },
      ],
      totalLabel: "Total",
      totalValue: "339 pax",
    },
    ctaText: "Mari temani ikhtiar para santri penghafal Al-Qur'an dengan sedekah berbuka terbaik melalui Langit Box.",
    ctaButtonLabel: "Dukung Langit Box",
    image: "/images/news/langit-box-193.jpg",
  },
  {
    id: "serasi-merdeka",
    title: "SERASI Merdeka: Berbagi Kebahagiaan Bersama Santri di Kabupaten Bandung Barat",
    category: "Kolaborasi",
    date: "18 Agustus 2026",
    location: "Kabupaten Bandung Barat",
    beneficiaries: "160 santri",
    program: "SERASI Merdeka",
    excerpt:
      "Momentum peringatan kemerdekaan dirayakan Jalan Langit Foundation dengan menyalurkan paket kebahagiaan untuk 160 santri di tiga pondok pesantren di Kabupaten Bandung Barat.",
    content: [
      "**Kabupaten Bandung Barat, 18 Agustus 2026** — Momentum hari kemerdekaan menjadi kesempatan istimewa bagi **Jalan Langit Foundation (JLF)** untuk mengalirkan kebahagiaan kepada generasi muda melalui program **SERASI Merdeka**.",
      "Pada 18 Agustus 2026, tim JLF bersama para mitra menyambangi tiga pondok pesantren di Kabupaten Bandung Barat, yaitu **Pondok Pesantren Alam Maroko**, **Pondok Pesantren Baitul Zuhri**, dan **Pondok Pesantren Modern Daarul Maiyyah**.",
      "Sebanyak **160 santri** menyambut hangat kedatangan rombongan dan menerima paket kebahagiaan yang terdiri dari aneka snack, perlengkapan alat tulis baru, serta santapan burger lezat.",
      "Bagi para santri, kehadiran tim relawan menghadirkan warna tersendiri dalam keseharian pondok. Momen berkumpul, menikmati makanan favorit, dan memperoleh peralatan belajar baru menjadi pengalaman membahagiakan yang akan mereka kenang dengan indah.",
      "Melalui SERASI Merdeka, JLF ingin menegaskan bahwa perjuangan para santri dalam menuntut ilmu senantiasa mendapat tempat istimewa dan apresiasi di hati masyarakat.",
      "“Kemerdekaan bukan hanya tentang mengenang perjuangan masa lampau, melainkan juga tentang menghadirkan kebahagiaan dan kesempatan terbaik bagi generasi penerus peradaban bangsa.”",
    ],
    ctaText: "Mari terus dukung program SERASI untuk menghadirkan lebih banyak senyuman dan kebahagiaan bagi santri nusantara.",
    ctaButtonLabel: "Dukung Program SERASI",
    image: "/images/news/serasi-merdeka.jpg",
  },
  {
    id: "penyaluran-zakat-guru-ngaji",
    title: "Penyaluran Zakat: Menguatkan Pengabdian Guru Ngaji di Kabupaten Bandung Barat",
    category: "Zakat",
    date: "18 Agustus 2026",
    location: "Kabupaten Bandung Barat",
    beneficiaries: "Guru ngaji / Asnaf Fi Sabilillah",
    program: "Penyaluran Zakat",
    excerpt:
      "Jalan Langit Foundation menyalurkan dana zakat Fi Sabilillah kepada para guru ngaji di tiga pondok pesantren di Kabupaten Bandung Barat guna menguatkan ketulusan pengabdian mereka.",
    content: [
      "**Kabupaten Bandung Barat, 18 Agustus 2026** — Di balik keteguhan para santri menghafal huruf demi huruf Al-Qur’an, ada ketulusan para guru ngaji yang senantiasa mendampingi dengan sabar dan ikhlas tanpa pamrih.",
      "Dalam rangkaian kunjungan ke Kabupaten Bandung Barat, **Jalan Langit Foundation (JLF)** menyalurkan dana zakat kepada penerima manfaat asnaf **Fi Sabilillah**, dengan fokus utama kepada para guru ngaji yang mengabdikan seluruh waktunya di pesantren.",
      "Penyaluran dilakukan di tiga institusi mitra, yaitu **Pondok Pesantren Alam Maroko**, **Pondok Pesantren Baitul Zuhri**, dan **Pondok Pesantren Modern Daarul Maiyyah**.",
      "Para guru ngaji ini menetap di pondok dan mendidik santri secara penuh waktu. Kendati memikul tanggung jawab besar mencetak generasi Qur’ani, insentif bulanan yang mereka terima relatif terbatas, rata-rata hanya berkisar Rp150.000 hingga Rp250.000.",
      "Melalui penyaluran zakat produktif dan apresiatif ini, JLF berikhtiar memberikan dukungan moril dan materiil agar para asatidz dapat terus menjalankan tugas mulianya dengan tenang dan bermartabat.",
      "Bantuan zakat ini diharapkan menjadi penyemangat, sekaligus membuka pintu keberkahan yang pahalanya terus mengalir dari setiap ayat yang diajarkan kepada generasi penerus.",
      "JLF menyampaikan rasa terima kasih mendalam kepada para muzaki atas kepercayaan yang diberikan. Semoga menjadi amal jariyah yang kekal di sisi Allah SWT.",
      "“Menjaga guru yang mengajarkan kebaikan, berarti ikut menjaga keberlanjutan kebaikan itu sendiri.”",
    ],
    ctaText: "Salurkan zakat Anda melalui Jalan Langit Foundation untuk memuliakan para guru ngaji dan asnaf yang berhak.",
    ctaButtonLabel: "Salurkan Zakat Sekarang",
    image: "",
  },
  {
    id: "langit-box-192",
    title: "Langit Box Salurkan 265 Nasi Box untuk Santri di 7 Pondok di Bandung",
    category: "Kebutuhan Pangan",
    date: "13 Agustus 2026",
    location: "Bandung",
    beneficiaries: "265 santri",
    program: "Langit Box",
    excerpt:
      "Melalui program Langit Box, sebanyak 265 nasi box disalurkan kepada santri di tujuh pondok di Bandung untuk mendukung kebutuhan berbuka puasa sunnah Kamis.",
    content: [
      "**Bandung, 13 Agustus 2026** — **Jalan Langit Foundation** kembali menyalurkan bantuan pangan melalui program **Langit Box**. Pada penyaluran kali ini, sebanyak **265 nasi box** diberikan kepada para santri yang tersebar di tujuh pondok di wilayah Bandung.",
      "Bantuan ini ditujukan untuk mendukung kebutuhan konsumsi para santri dalam kegiatan berbuka puasa sunnah Kamis. Melalui **Langit Box**, JLF berupaya menghadirkan bantuan pangan yang sederhana namun dapat dirasakan secara langsung oleh penerima manfaat.",
      "Penyaluran dilakukan sebagai bagian dari komitmen JLF untuk terus mendukung kebutuhan para santri melalui bantuan yang dekat dengan keseharian mereka.",
      "Bagi sebagian orang, satu kotak makanan mungkin terlihat sederhana. Namun bagi penerimanya, bantuan tersebut dapat menjadi bentuk perhatian yang nyata, terlebih ketika diberikan pada waktu yang tepat dan dibutuhkan.",
      "Melalui **Langit Box**, JLF ingin terus mempertemukan kebaikan dari para donatur dengan kebutuhan masyarakat secara langsung. Setiap nasi box yang tersalurkan bukan hanya tentang makanan, tetapi juga tentang pesan bahwa masih ada kepedulian yang hadir dan berbagi bersama mereka.",
      "JLF mengucapkan terima kasih kepada seluruh pihak yang telah mengambil bagian dalam penyaluran ini. Semoga setiap kebaikan yang diberikan dapat terus melahirkan manfaat dan menjadi bagian dari keberlanjutan gerakan kebaikan bersama.",
      "“Satu kotak kebaikan, satu bentuk kepedulian yang sampai kepada mereka yang membutuhkan.”",
    ],
    table: {
      rows: [
        { label: "PTQ Maqdis", value: "49 pax" },
        { label: "Daarul Adzkar Uber", value: "33 pax" },
        { label: "Daarul Adzkar Bubat", value: "27 pax" },
        { label: "PTQ Al Qolam", value: "23 pax" },
        { label: "Nurul Ilmi", value: "50 pax" },
        { label: "Pondok Madinatul Ulum Metro", value: "57 pax" },
        { label: "RTQ Madinatul Husaini", value: "26 pax" },
      ],
      totalLabel: "Total",
      totalValue: "265 pax",
    },
    ctaText: "Mari terus berbagi melalui Langit Box dan hadirkan manfaat dari hal sederhana.",
    ctaButtonLabel: "Dukung Langit Box",
    image: "/images/news/langit-box-192.jpg",
  },
  {
    id: "serasi-dufan",
    title: "Sehari Bersama Santri: Menghadirkan Kebahagiaan dan Pengalaman Baru melalui Program SERASI",
    category: "Kolaborasi",
    date: "6 Agustus 2026",
    location: "Jakarta",
    beneficiaries: "80 santri",
    program: "SERASI — Sehari Bersama Santri",
    excerpt:
      "Sebanyak 80 santri mengikuti Program SERASI di Dunia Fantasi dan SeaWorld Jakarta, menikmati pengalaman rekreatif, edukatif, dan kebersamaan yang menjadi kenangan berharga bagi mereka.",
    content: [
      "**Jakarta, 6 Agustus 2026** — Program **SERASI (Sehari Bersama Santri)** kembali menghadirkan ruang kebahagiaan bagi para santri melalui pengalaman yang berbeda dari keseharian mereka di lingkungan pesantren.",
      "Bagi **Jalan Langit Foundation (JLF)**, program SERASI bukan sekadar perjalanan wisata atau agenda rekreasi. Program ini dirancang untuk memberikan kesempatan kepada para santri untuk mendapatkan pengalaman baru, memperluas wawasan di luar lingkungan pesantren, sekaligus menciptakan kenangan indah yang dapat mereka bawa pulang.",
      "Sebanyak **80 santri** mengikuti kegiatan yang dilaksanakan di Dunia Fantasi (Dufan) dan SeaWorld Jakarta. Sejak pagi, antusiasme telah terasa dalam perjalanan menuju lokasi. Keceriaan semakin terlihat ketika para santri mulai mengeksplorasi berbagai wahana dalam kelompok-kelompok kecil.",
      "Berbagai pengalaman menjadi bagian dari perjalanan tersebut. Mulai dari keberanian mencoba wahana permainan untuk pertama kalinya, berbagi tawa dan kegembiraan bersama teman-teman, hingga menikmati pengalaman edukatif dengan melihat beragam biota laut di SeaWorld.",
      "Lebih dari sekadar hiburan, momen-momen tersebut menjadi kesempatan bagi para santri untuk menikmati masa muda mereka dalam suasana yang penuh kebersamaan dan kepedulian.",
      "Selama kegiatan berlangsung, para santri mendapatkan pendampingan dari tim JLF bersama para mitra yang turut mendukung pelaksanaan program. Kebersamaan kemudian ditutup dengan makan bersama dan pembagian bingkisan sederhana sebagai merchandise kenang-kenangan.",
      "Senyum lebar dan rasa terima kasih yang disampaikan para santri menjadi salah satu momen paling berkesan dari perjalanan ini. Bagi JLF, pengalaman tersebut menjadi pengingat bahwa kebahagiaan sederhana dapat menghadirkan dampak yang mendalam, terutama ketika diberikan melalui kepedulian dan kebersamaan.",
      "Melalui SERASI, JLF berharap dapat terus menghadirkan ruang bagi para santri untuk belajar, bermain, dan menikmati pengalaman baru, sekaligus merasakan bahwa ada banyak pihak yang peduli dan berjalan bersama mereka.",
      "“Karena setiap anak berhak memiliki cerita indah untuk dikenang.”",
    ],
    ctaText: "Mari terus bergandengan tangan untuk menghadirkan lebih banyak pengalaman bermakna bagi para santri.",
    ctaButtonLabel: "Dukung Program SERASI",
    image: "/images/news/serasi-dufan.JPG",
  },
];

export function getNewsById(id: string): NewsItem | undefined {
  return news.find((n) => n.id === id);
}