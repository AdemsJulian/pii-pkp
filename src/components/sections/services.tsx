import Link from "next/link";
import { services } from "@/data/site-content";

export function ServicesSection() {
  return (
    <section
      id="layanan"
      className="section-spacing bg-white"
      aria-labelledby="layanan-heading"
    >
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">
              Layanan PII
            </p>
            <h2
              id="layanan-heading"
              className="mt-3 text-3xl font-semibold text-brand-midnight sm:text-4xl"
            >
              Solusi lengkap untuk karier dan advokasi insinyur Pangkalpinang
            </h2>
          </div>
          <p className="max-w-xl text-base text-brand-slate">
            Setiap layanan dirancang untuk menjawab kebutuhan insinyur di
            Bangka Belitung, mulai dari jaringan profesional, pemenuhan
            regulasi keinsinyuran, hingga pendampingan proyek strategis.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="card p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-brand-midnight">
                  {service.title}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-slate/60">
                  PII Pangkalpinang
                </span>
              </div>
              <p className="mt-5 text-base text-brand-slate">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-brand-midnight/90">
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl bg-brand-fog px-4 py-3"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-blue" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-7 inline-flex items-center text-sm font-semibold text-brand-blue transition hover:text-brand-navy"
              >
                {service.ctaLabel} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
