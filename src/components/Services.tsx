
import Link from "next/link";
import { services } from "../data/home/services";

export default function Services() {
  return (
    <section aria-labelledby="layanan-heading" className="py-12 md:py-16">
      <div className="container">
        <h2 id="layanan-heading" className="mb-6 text-2xl font-semibold">Layanan PII</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.id} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <div className="mt-4 flex flex-col gap-1 text-xs text-slate-500">
                <span>WA: {s.contact.wa}</span>
                <span>Email: {s.contact.email}</span>
              </div>
              <div className="mt-4">
                <Link href={s.href} className="text-blue-700 underline underline-offset-4">Pelajari</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
