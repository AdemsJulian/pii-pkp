import { aboutContent } from "@/data/site-content";

export function AboutSection() {
  const { history, vision, board } = aboutContent;

  return (
    <section
      id="tentang"
      className="section-spacing bg-brand-fog"
      aria-labelledby="tentang-heading"
    >
      <div className="container space-y-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">
              Tentang PII Pangkalpinang
            </p>
            <h2
              id="tentang-heading"
              className="mt-3 text-3xl font-semibold text-brand-midnight sm:text-4xl"
            >
              {history.title}
            </h2>
            <div className="mt-5 space-y-4 text-base text-brand-slate">
              {history.text.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="card p-8" id="tentang-sejarah">
            <h3 className="text-lg font-semibold text-brand-midnight">
              Kiprah Strategis
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-brand-slate">
              <li>
                1980-an: Pengawalan pembangunan dermaga dan fasilitas logistik
                Pangkal Balam.
              </li>
              <li>
                2000-an: Penyusunan standar keselamatan tambang timah
                berkelanjutan di pulau-pulau kecil.
              </li>
              <li>
                2020-an: Inisiator roadmap smart city dan transisi energi bersih
                untuk Bangka Belitung.
              </li>
            </ul>
          </div>
        </div>

        <div
          className="grid gap-8 lg:grid-cols-[1.2fr_1fr]"
          id="tentang-visi"
        >
          <div className="card p-8">
            <h3 className="text-lg font-semibold text-brand-midnight">
              Visi
            </h3>
            <p className="mt-4 text-base text-brand-slate">{vision.vision}</p>
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-slate/80">
              Misi
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-brand-slate">
              {vision.missions.map((mission) => (
                <li key={mission} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </div>
          <section
            className="card space-y-6 p-8"
            id="tentang-pengurus"
            aria-labelledby="pengurus-heading"
          >
            <h3
              id="pengurus-heading"
              className="text-lg font-semibold text-brand-midnight"
            >
              {board.title}
            </h3>
            <div className="space-y-6 text-sm text-brand-slate">
              {board.sections.map((section) => (
                <div key={section.heading} className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-slate/70">
                    {section.heading}
                  </p>
                  <ul className="space-y-3">
                    {section.people.map((person, idx) => (
                      <li
                        key={`${section.heading}-${person.name}-${idx}`}
                        className="rounded-2xl bg-brand-fog px-4 py-3"
                      >
                        <p className="font-semibold text-brand-midnight">
                          {person.name || person.role}
                        </p>
                        {person.role && person.name && (
                          <p className="text-xs uppercase tracking-widest text-brand-slate/70">
                            {person.role}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
