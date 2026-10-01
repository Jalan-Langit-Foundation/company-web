export interface LangitValue {
  id: string;
  letter: string;
  keyword: string;
  meaning: string;
  tagline: string;
  description: string;
  colorScheme: {
    gradient: string;
    accent: string;
    badgeBg: string;
    badgeText: string;
  };
}

export const LANGIT_VALUES_DATA: LangitValue[] = [
  {
    id: "learning",
    letter: "L",
    keyword: "Learning",
    meaning: "Semangat Belajar",
    tagline: "Pilar 01 • Belajar & Berkembang",
    description: "Terus belajar dan berkembang demi menghadirkan solusi filantropi yang relevan, adaptif, dan berdampak bagi masyarakat.",
    colorScheme: {
      gradient: "from-[#0F3C5C] via-[#1E6B9B] to-[#3C95C8]",
      accent: "#3C95C8",
      badgeBg: "bg-[#3C95C8]/15",
      badgeText: "text-[#3C95C8]",
    },
  },
  {
    id: "accountability",
    letter: "A",
    keyword: "Accountability",
    meaning: "Amanah & Integritas",
    tagline: "Pilar 02 • Transparansi Penuh",
    description: "Menjaga amanah donatur, mitra, dan penerima manfaat dengan prinsip tata kelola profesional, transparansi, dan integritas penuh.",
    colorScheme: {
      gradient: "from-[#10466A] via-[#247BA0] to-[#4EA5D9]",
      accent: "#247BA0",
      badgeBg: "bg-[#247BA0]/15",
      badgeText: "text-[#247BA0]",
    },
  },
  {
    id: "noble-purpose",
    letter: "N",
    keyword: "Noble Purpose",
    meaning: "Tujuan Mulia",
    tagline: "Pilar 03 • Niat & Visi Luhur",
    description: "Mengutamakan niat luhur dan keberkahan dalam setiap inisiatif kebaikan untuk memuliakan kemanusiaan demi ridha-Nya.",
    colorScheme: {
      gradient: "from-[#0D3B66] via-[#1E5F8A] to-[#3891BD]",
      accent: "#3891BD",
      badgeBg: "bg-[#3891BD]/15",
      badgeText: "text-[#3891BD]",
    },
  },
  {
    id: "great-sincerity",
    letter: "G",
    keyword: "Great Sincerity",
    meaning: "Keikhlasan",
    tagline: "Pilar 04 • Pelayanan Tulus",
    description: "Bekerja dengan keikhlasan tulus sebagai fondasi utama pelayanan umat, menghadirkan kehangatan di setiap sentuhan bantuan.",
    colorScheme: {
      gradient: "from-[#144A74] via-[#2D7DAE] to-[#54ACDF]",
      accent: "#2D7DAE",
      badgeBg: "bg-[#2D7DAE]/15",
      badgeText: "text-[#2D7DAE]",
    },
  },
  {
    id: "initiate-synergy",
    letter: "I",
    keyword: "Initiate Synergy",
    meaning: "Kolaborasi Strategis",
    tagline: "Pilar 05 • Melipatgandakan Dampak",
    description: "Membangun jejaring kemitraan strategis lintas sektor untuk melipatgandakan dampak kebaikan secara inklusif dan berkelanjutan.",
    colorScheme: {
      gradient: "from-[#0F3859] via-[#216894] to-[#3FA0D3]",
      accent: "#216894",
      badgeBg: "bg-[#216894]/15",
      badgeText: "text-[#216894]",
    },
  },
  {
    id: "total-action",
    letter: "T",
    keyword: "Total Action",
    meaning: "Ikhtiar Optimal",
    tagline: "Pilar 06 • Eksekusi Terukur",
    description: "Berikhtiar secara profesional, terukur, dan berkesinambungan demi hasil optimal yang memberikan manfaat jangka panjang.",
    colorScheme: {
      gradient: "from-[#0A3250] via-[#1A5C85] to-[#3C95C8]",
      accent: "#1A5C85",
      badgeBg: "bg-[#1A5C85]/15",
      badgeText: "text-[#1A5C85]",
    },
  },
];
