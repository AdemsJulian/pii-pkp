
"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import { formatDateID } from "../data/utils";
import { fromChair } from "../data/home/from-chair";
import { fromEngineers } from "../data/home/from-engineers";

function Cards({ items }: { items: { id:string; title:string; date:string; image:string; href?:string; }[] }){
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1.1, spacing: 12 },
    breakpoints: { "(min-width: 768px)": { slides: { perView: 3, spacing: 16 }}},
  });
  return (
    <div ref={ref} className="keen-slider">
      {items.map((a) => (
        <article key={a.id} className="keen-slider__slide rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="relative h-40">
            <Image src={a.image} alt={a.title} fill className="object-cover" sizes="33vw"/>
          </div>
          <div className="p-4">
            <div className="mb-1 text-xs text-slate-500">{formatDateID(a.date)}</div>
            <h3 className="text-sm font-semibold">{a.title}</h3>
            <Link className="mt-2 inline-block text-sm text-blue-700 underline underline-offset-4" href={a.href ?? "#"}>Baca</Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function FromChair() {
  return (
    <section aria-labelledby="meja-ketum-heading" className="py-8 md:py-12">
      <div className="container">
        <div className="mb-4 flex items-end justify-between">
          <h2 id="meja-ketum-heading" className="text-2xl font-semibold">Dari Meja Ketum</h2>
          <Link href="/kabar/dari-meja-ketum" className="text-blue-700 underline underline-offset-4">Artikel Lainnya</Link>
        </div>
        <Cards items={fromChair} />
      </div>
    </section>
  );
}

export function FromEngineers() {
  return (
    <section aria-labelledby="dari-insinyur-heading" className="py-8 md:py-12">
      <div className="container">
        <div className="mb-4 flex items-end justify-between">
          <h2 id="dari-insinyur-heading" className="text-2xl font-semibold">Dari Insinyur</h2>
          <Link href="/kabar/dari-insinyur" className="text-blue-700 underline underline-offset-4">Artikel Lainnya</Link>
        </div>
        <Cards items={fromEngineers} />
      </div>
    </section>
  );
}
