import Image from "next/image";
import Link from "next/link";
import { partners } from "@/data/site-content";

export function PartnersGrid() {
  return (
    <section
      id="mitra"
      className="section-spacing bg-brand-fog"
      aria-labelledby="mitra-heading"
    >
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">
              Mitra PII
            </p>
            <h2
              id="mitra-heading"
              className="mt-3 text-3xl font-semibold text-brand-midnight sm:text-4xl"
            >
              Kolaborasi lintas sektor untuk membangun Bangka Belitung
            </h2>
          </div>
          <p className="max-w-xl text-sm text-brand-slate">
            Kami bermitra dengan pemerintah, BUMN, kampus, serta industri untuk
            mewujudkan proyek keteknikan berstandar global sekaligus
            memberdayakan talenta lokal.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={partner.href}
              className="card flex h-32 items-center justify-center p-6 transition hover:-translate-y-1 hover:shadow-floating"
              aria-label={partner.name}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={88}
                className="h-16 w-auto object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
