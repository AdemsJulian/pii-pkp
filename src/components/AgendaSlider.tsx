
"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import { agendas } from "../data/home/agendas";
import { formatDateID } from "../data/utils";

export default function AgendaSlider(){
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1.1, spacing: 12 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 3, spacing: 16 } },
    },
  });
  return (
    <section aria-labelledby="agenda-heading" className="py-12 md:py-16">
      <div className="container">
        <div className="mb-6 flex items-end justify-between">
          <h2 id="agenda-heading" className="text-2xl font-semibold">Agenda PII</h2>
          <Link href="/agenda" className="text-blue-700 underline underline-offset-4">Agenda PII Lainnya</Link>
        </div>
        <div ref={ref} className="keen-slider">
          {agendas.map((a) => (
            <div key={a.id} className="keen-slider__slide rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs text-slate-500">{a.category} • {a.mode}</div>
              <div className="mt-1 text-sm font-medium">{formatDateID(a.date)}</div>
              <h3 className="mt-2 font-semibold">{a.title}</h3>
              <div className="mt-1 text-sm text-slate-600">{a.location}</div>
              <Link className="mt-3 inline-block text-sm text-blue-700 underline underline-offset-4" href={a.href ?? "#"}>Detail</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
