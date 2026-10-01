export interface MissionPoint {
  number: string;
  title: string;
  description: string;
}

export const VISION_MISSION_DATA = {
  headline: {
    prefix: "Kebaikan yang Terarah,",
    highlight: "Dampak yang Berkelanjutan",
  },
  description:
    "Setiap langkah JLF berangkat dari satu komitmen: menghadirkan kebaikan yang dikelola dengan amanah, dijalankan secara profesional, dan memberi manfaat yang nyata bagi masyarakat.",
  vision: {
    label: "Visi Lembaga",
    statement:
      "Menjadi lembaga filantropi Muslim global yang terdepan dalam meningkatkan kesejahteraan dan kualitas hidup masyarakat melalui pengelolaan dana sosial yang amanah, profesional, dan berdampak berkelanjutan.",
  },
  mission: {
    label: "Misi Lembaga",
    points: [
      {
        number: "01",
        title: "Pendidikan Inklusif",
        description:
          "Menghadirkan akses dan kesempatan pendidikan yang lebih luas bagi masyarakat.",
      },
      {
        number: "02",
        title: "Kesejahteraan Sosial",
        description:
          "Menghadirkan program yang menjawab kebutuhan sosial dan meningkatkan kualitas hidup masyarakat.",
      },
      {
        number: "03",
        title: "Jejaring Kolaboratif",
        description:
          "Membangun kolaborasi dengan berbagai pihak untuk memperluas jangkauan dan dampak kebaikan.",
      },
      {
        number: "04",
        title: "Inovasi & Teknologi",
        description:
          "Memanfaatkan inovasi dan teknologi untuk meningkatkan efektivitas dan keberlanjutan program.",
      },
    ] as MissionPoint[],
  },
};
