export interface ImpactStat {
  id: string;
  targetValue: number;
  suffix?: string;
  prefix?: string;
  useGrouping?: boolean;
  label: string;
}

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: "beneficiaries",
    targetValue: 14000,
    suffix: "+",
    label: "Penerima Manfaat 2025",
  },
  {
    id: "packages",
    targetValue: 13691,
    suffix: "",
    label: "Hadiah Kebahagiaan Tersalurkan",
  },
  {
    id: "programs",
    targetValue: 6,
    suffix: "",
    label: "Program Identitas Aktif",
  },
  {
    id: "established",
    targetValue: 2022,
    suffix: "",
    useGrouping: false,
    label: "Tahun Berdiri",
  },
];
