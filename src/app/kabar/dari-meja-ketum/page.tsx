import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Link from "next/link";
import Image from "next/image";
import { fromChair } from "../../data/home/from-chair";
import { formatDateID } from "../../data/utils";
export default function Page(){
  return (<div><Header /><main className="container py-10">
    <h1 className="text-2xl font-semibold mb-6">Dari Meja Ketum</h1>
    <div className="grid gap-6 md:grid-cols-3">
      {fromChair.map(a => (
        <article key={a.id} className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="relative h-48">
            <Image src={a.image} alt={a.title} fill className="object-cover" />
          </div>
          <div className="p-4">
            <div className="mb-2 text-xs text-slate-500">{formatDateID(a.date)}</div>
            <h3 className="text-base font-semibold">{a.title}</h3>
            <Link className="mt-3 inline-block text-sm text-blue-700 underline underline-offset-4" href={a.href ?? "#"}>Baca</Link>
          </div>
        </article>
      ))}
    </div>
  </main><Footer /></div>);
}
