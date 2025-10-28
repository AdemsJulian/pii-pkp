import Image from "next/image";
import Link from "next/link";
import { news } from "@/data/site-content";

export function NewsGrid() {
  return (
    <section
      id="berita"
      className="section-spacing bg-brand-fog"
      aria-labelledby="berita-heading"
    >
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">
              Berita Terbaru
            </p>
            <h2
              id="berita-heading"
              className="mt-3 text-3xl font-semibold text-brand-midnight sm:text-4xl"
            >
              Kabar terkini ekosistem keteknikan Pangkalpinang
            </h2>
          </div>
          <Link
            href="#"
            className="text-sm font-semibold text-brand-blue transition hover:text-brand-navy"
          >
            Berita Lainnya →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {news.map((item) => (
            <article key={item.id} className="card overflow-hidden">
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-slate/80">
                  <span>{item.category}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  <span>{item.date}</span>
                  {item.views != null && (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      <span>{item.views} views</span>
                    </>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-brand-midnight">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-slate">{item.excerpt}</p>
                <Link
                  href={item.link}
                  className="mt-auto text-sm font-semibold text-brand-blue transition hover:text-brand-navy"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
