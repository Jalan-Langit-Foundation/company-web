import { programs } from "@/lib/data/programs";
import ProgramGallery from "@/components/section/programs/program-gallery";

export default function ProgramList() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        {programs.map((program, index) => (
          <div
            key={program.id}
            id={program.id}
            className="scroll-mt-24 flex flex-col gap-6"
          >
            <div>
              <p className="text-sm font-semibold text-primary-blue uppercase">
                Program {index + 1}
              </p>
              <h3 className="text-2xl font-bold text-brand-black mt-1">
                {program.title}
              </h3>
            </div>

            <ProgramGallery images={program.images} />

            <p className="text-dark-gray leading-relaxed">
              {program.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}