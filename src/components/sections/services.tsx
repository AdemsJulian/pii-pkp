import Link from "next/link";
import { services } from "@/data/site-content";

export function ServicesSection() {
  return (
    <section
      id="layanan"
      className="section-spacing bg-brand-fog/40"
      aria-labelledby="layanan-heading"
    >
      <div className="container space-y-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-blue/80">
              Layanan PII Pangkalpinang
            </p>
            <h2
              id="layanan-heading"
              className="text-3xl font-semibold text-brand-midnight sm:text-4xl"
            >
              Platform kolaborasi, peningkatan kompetensi, dan perlindungan
              profesi insinyur kepulauan
            </h2>
          </div>
          <p className="max-w-xl text-base text-brand-slate">
            Kami mengemas layanan organisasi agar selaras dengan dinamika
            industri timah, pengembangan kota pesisir, dan proyek infrastruktur
            strategis di Bangka Belitung.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[28px] border border-brand-fog bg-gradient-to-br from-white via-white to-brand-fog/50 p-7 shadow-card transition hover:-translate-y-1"
            >
              <div className="absolute right-6 top-6 h-12 w-12 rounded-2xl bg-brand-blue/10" />
              <span className="relative text-xs font-semibold uppercase tracking-[0.3em] text-brand-slate/60">
                #{index + 1}
              </span>
              <h3 className="relative mt-4 text-2xl font-semibold text-brand-midnight">
                {service.title}
              </h3>
              <p className="relative mt-4 text-sm text-brand-slate">
                {service.description}
              </p>
              <ul className="relative mt-6 space-y-3 text-sm text-brand-midnight/90">
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl bg-white/70 px-4 py-3 shadow-sm ring-1 ring-brand-fog"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="relative mt-7 inline-flex items-center text-sm font-semibold text-brand-blue transition group-hover:text-brand-midnight"
              >
                {service.ctaLabel} ?
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
