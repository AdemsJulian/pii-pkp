import Link from "next/link";
import { documents } from "@/data/site-content";

export function DocumentsSection() {
  return (
    <section
      id="dokumen"
      className="section-spacing bg-white"
      aria-labelledby="dokumen-heading"
    >
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">
              Dokumen
            </p>
            <h2
              id="dokumen-heading"
              className="mt-3 text-3xl font-semibold text-brand-midnight sm:text-4xl"
            >
              Rujukan dan formulir resmi PII Pangkalpinang
            </h2>
          </div>
          <p className="max-w-xl text-sm text-brand-slate">
            Unduh panduan organisasi, blueprint teknis, dan formulir keanggotaan
            terbaru untuk mendukung aktivitas keinsinyuran Anda.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {documents.map((doc) => (
            <article key={doc.title} className="card p-6">
              <h3 className="text-xl font-semibold text-brand-midnight">
                {doc.title}
              </h3>
              <p className="mt-4 text-sm text-brand-slate">{doc.description}</p>
              <Link
                href={doc.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-brand-blue transition hover:text-brand-navy"
              >
                Unduh Dokumen →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
