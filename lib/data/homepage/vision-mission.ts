export interface MissionPoint {
  number: string;
  title: string;
  description: string;
}

export const VISION_MISSION_DATA = {
  eyebrow: "ARAH & TUJUAN",
  headline: {
    prefix: "Visi &",
    highlight: "Misi Lembaga",
  },
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
          "Meningkatkan kualitas pendidikan melalui program edukasi dan pelatihan Islami yang inklusif serta mudah diakses.",
      },
      {
        number: "02",
        title: "Kesejahteraan Sosial",
        description:
          "Meningkatkan kesejahteraan taraf hidup masyarakat melalui program sosial dan pemberdayaan ekonomi.",
      },
      {
        number: "03",
        title: "Jejaring Kolaboratif",
        description:
          "Membangun jejaring kolaboratif multipihak dengan optimalisasi infak, sedekah, dan wakaf.",
      },
      {
        number: "04",
        title: "Inovasi & Teknologi",
        description:
          "Mendorong inovasi dan pemanfaatan teknologi demi transparansi tata kelola serta edukasi kebaikan massal.",
      },
    ] as MissionPoint[],
  },
};
