import Image from "next/image";
import Link from "next/link";
import { partners } from "@/data/site-content";

export function PartnersGrid() {
  return (
    <section
      id="mitra"
      className="section-spacing bg-brand-fog/70"
      aria-labelledby="mitra-heading"
    >
      <div className="container space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-blue/80">
              Jaringan Mitra
            </p>
            <h2
              id="mitra-heading"
              className="mt-3 text-3xl font-semibold text-brand-midnight sm:text-4xl"
            >
              Kolaborasi lintas sektor untuk mempercepat pembangunan Bangka Belitung
            </h2>
          </div>
          <p className="max-w-xl text-sm text-brand-slate">
            Sinergi dengan pemerintah daerah, perguruan tinggi, BUMN, dan industri strategis
            memastikan setiap program berjalan berdampak dan berkelanjutan.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={partner.href}
              className="group relative flex h-36 items-center justify-center rounded-[28px] border border-brand-fog bg-white shadow-card transition hover:-translate-y-1 hover:shadow-floating"
              aria-label={partner.name}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={240}
                height={120}
                sizes="(max-width: 1024px) 160px, 220px"
                className="max-h-24 w-auto object-contain transition group-hover:scale-110"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
