export default function NewsHero() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-wide uppercase text-primary-blue">
          Berita & Update
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-bold text-brand-black leading-tight">
          Aktivitas
          <br />
          <span className="text-primary-blue">Terkini JLF</span>
        </h1>
        <p className="mt-4 text-dark-gray max-w-2xl mx-auto">
          Ikuti perjalanan dan dampak nyata program JLF yang terus berkembang.
        </p>
      </div>
    </section>
  );
}