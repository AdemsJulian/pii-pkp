
"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";
import { benefits } from "../data/home/benefits";

export default function BenefitsCarousel(){
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1.1, spacing: 12 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2.2, spacing: 14 } },
      "(min-width: 1024px)": { slides: { perView: 2.8, spacing: 16 } },
    },
  });
  return (
    <section aria-labelledby="benefit-heading" className="py-12 md:py-16 bg-slate-50">
      <div className="container">
        <h2 id="benefit-heading" className="mb-6 text-2xl font-semibold">Mengapa Perlu Jadi Anggota PII?</h2>
        <div ref={ref} className="keen-slider">
          {benefits.map((b) => (
            <div key={b.id} className="keen-slider__slide rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
              <Link href="/layanan/keanggotaan#form" className="mt-4 inline-block rounded-full border border-blue-600 px-4 py-2 text-sm text-blue-700">Gabung PII</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
