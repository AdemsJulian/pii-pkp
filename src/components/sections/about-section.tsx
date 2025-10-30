import Link from "next/link";
import { aboutContent } from "@/data/site-content";

export function AboutSection() {
  const { history, vision, board } = aboutContent;

  return (
    <section
      id="sejarah"
      className="section-spacing bg-white"
      aria-labelledby="sejarah-heading"
    >
      <div className="container space-y-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-blue/80">
              Jejak PII Cabang Pangkalpinang
            </p>
            <h2
              id="sejarah-heading"
              className="text-3xl font-semibold text-brand-midnight sm:text-4xl"
            >
              {history.title}
            </h2>
            <p className="text-lg font-medium text-brand-midnight/80">
              {history.lead}
            </p>
            <div className="grid gap-4 text-base text-brand-slate">
              {history.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href="/tentang/sejarah"
              className="inline-flex w-fit items-center rounded-full border border-brand-slate/20 px-6 py-3 text-sm font-semibold text-brand-midnight transition hover:-translate-y-1 hover:border-brand-blue hover:text-brand-blue"
            >
              Pelajari sejarah lengkap →
            </Link>
          </div>
          <aside className="relative rounded-3xl border border-brand-fog bg-gradient-to-br from-brand-fog via-white to-white p-8 shadow-lg">
            <h3 className="text-lg font-semibold text-brand-midnight">
              Linimasa Perkembangan
            </h3>
            <div className="mt-6 space-y-6">
              {history.timeline.map((item) => (
                <div key={item.period} className="relative pl-8">
                  <span className="absolute left-0 top-1 h-5 w-5 rounded-full border-2 border-brand-blue bg-white" />
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-blue">
                    {item.period}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-brand-midnight">
                    {item.title}
                  </p>
                  <p className="text-sm text-brand-slate/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]" id="visi">
          <div className="rounded-3xl border border-brand-fog bg-brand-fog/60 p-8 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue/80">
              Visi & Misi
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-brand-midnight">
              {vision.title}
            </h3>
            <p className="mt-4 text-base text-brand-slate">{vision.vision}</p>
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-brand-slate/70">
              Misi Kami
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-brand-slate">
              {vision.missions.map((mission) => (
                <li key={mission} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/tentang/visi-misi"
              className="mt-6 inline-flex items-center text-sm font-semibold text-brand-midnight transition hover:text-brand-blue"
            >
              Lihat rumusan visi & misi →
            </Link>
          </div>
          <section
            id="pengurus"
            aria-labelledby="pengurus-heading"
            className="rounded-3xl border border-brand-fog bg-white p-8 shadow-card"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue/80">
              Struktur Organisasi
            </p>
            <h3
              id="pengurus-heading"
              className="mt-3 text-2xl font-semibold text-brand-midnight"
            >
              {board.title}
            </h3>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {board.sections.map((section) => (
                <div key={section.heading} className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-slate/70">
                    {section.heading}
                  </p>
                  <ul className="space-y-2 text-sm text-brand-slate">
                    {section.people.map((person, idx) => (
                      <li
                        key={`${section.heading}-${person.name}-${idx}`}
                        className="rounded-2xl border border-brand-fog bg-brand-fog/60 px-4 py-3"
                      >
                        <p className="font-semibold text-brand-midnight">
                          {person.name || person.role}
                        </p>
                        {person.role && person.name && (
                          <p className="text-xs uppercase tracking-[0.2em] text-brand-slate/70">
                            {person.role}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              href="/tentang/struktur"
              className="mt-6 inline-flex items-center text-sm font-semibold text-brand-midnight transition hover:text-brand-blue"
            >
              Susunan lengkap pengurus →
            </Link>
          </section>
        </div>
      </div>
    </section>
  );
}
