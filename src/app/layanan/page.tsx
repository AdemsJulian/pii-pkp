import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Link from "next/link";
import { services } from "../data/home/services";
export default function Page(){
  return (<div><Header /><main className="container py-10">
    <h1 className="text-2xl font-semibold mb-6">Layanan</h1>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map(s => (
        <div key={s.id} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
          <h3 className="text-lg font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
          <div className="mt-4 text-xs text-slate-500">WA: {s.contact.wa} • Email: {s.contact.email}</div>
          <Link href={s.href} className="mt-3 inline-block text-sm text-blue-700 underline underline-offset-4">Detail</Link>
        </div>
      ))}
    </div>
  </main><Footer /></div>);
}
