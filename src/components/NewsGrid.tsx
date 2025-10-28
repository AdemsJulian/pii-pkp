
import Image from "next/image";
import Link from "next/link";
import { latestNews } from "../data/home/news";
import { formatDateID } from "../data/utils";

export default function NewsGrid() {
  return (
    <section aria-labelledby="berita-heading" className="py-12 md:py-16">
      <div className="container">
        <div className="mb-6 flex items-end justify-between">
          <h2 id="berita-heading" className="text-2xl font-semibold">Berita Terbaru</h2>
          <Link href="/kabar/berita" className="text-blue-700 underline underline-offset-4">Berita Lainnya</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latestNews.map((n) => (
            <article key={n.id} className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image src={n.image} alt={n.title} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw"/>
              </div>
              <div className="p-4">
                <div className="mb-2 text-xs text-slate-500">{formatDateID(n.date)} • {n.category} • {n.views} views</div>
                <h3 className="text-base font-semibold">{n.title}</h3>
                <Link className="mt-3 inline-block text-sm text-blue-700 underline underline-offset-4" href={n.href ?? "#"}>Baca</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
