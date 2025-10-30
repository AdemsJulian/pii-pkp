
import Image from "next/image";
import Link from "next/link";
import { partners } from "../data/home/partners";

export default function PartnersGrid(){
  return (
    <section aria-labelledby="mitra-heading" className="py-12 md:py-16 bg-slate-50">
      <div className="container">
        <h2 id="mitra-heading" className="mb-6 text-2xl font-semibold">Mitra PII</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {partners.map((p) => {
            const logoClass = p.logoClassName
              ? `w-auto object-contain ${p.logoClassName}`
              : "w-auto object-contain h-12 md:h-14";

            return (
              <Link
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <Image src={p.logo} alt={p.name} width={200} height={100} className={logoClass} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
