import ProgramHero from "@/components/section/programs/program-hero";
import ProgramList from "@/components/section/programs/program-list";

export default function ProgramsPage() {
  return (
    <main className="flex-1">
      <ProgramHero />
      <ProgramList />
    </main>
  );
}