import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Image from "next/image";
import Link from "next/link";
import { latestNews } from "../../data/home/news";
import { formatDateID } from "../../data/utils";

export default function Page(){
  return (<div><Header /><main className="container py-10">
    <h1 className="text-2xl font-semibold mb-6">Berita</h1>
    <div className="grid gap-6 md:grid-cols-3">
      {latestNews.map(n => (
        <article key={n.id} className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="relative h-48">
            <Image src={n.image} alt={n.title} fill className="object-cover" />
          </div>
          <div className="p-4">
            <div className="mb-2 text-xs text-slate-500">{formatDateID(n.date)} • {n.category}</div>
            <h3 className="text-base font-semibold">{n.title}</h3>
            <Link className="mt-3 inline-block text-sm text-blue-700 underline underline-offset-4" href={n.href ?? "#"}>Baca</Link>
          </div>
        </article>
      ))}
    </div>
  </main><Footer /></div>);
}
