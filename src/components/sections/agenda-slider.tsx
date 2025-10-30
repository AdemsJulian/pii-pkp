"use client";

import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import { agenda } from "@/data/site-content";
import "keen-slider/keen-slider.min.css";

export function AgendaSlider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1.1,
          spacing: 16,
        },
      },
    },
  });

  return (
    <section
      id="agenda"
      className="section-spacing bg-white"
      aria-labelledby="agenda-heading"
    >
      <div className="container space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-blue/80">
              Agenda PII
            </p>
            <h2
              id="agenda-heading"
              className="mt-3 max-w-xl text-3xl font-semibold text-brand-midnight sm:text-4xl"
            >
              Kegiatan resmi PII Pangkalpinang semester ini
            </h2>
          </div>
          <div className="flex flex-col items-start gap-2 text-sm text-brand-slate">
            <span>
              Agenda lengkap dan update harian kami bagikan melalui Instagram cabang.
            </span>
            <Link
              href="https://www.instagram.com/pii_pangkalpinang/"
              className="inline-flex items-center text-sm font-semibold text-brand-blue transition hover:text-brand-midnight"
            >
              Buka Instagram PII Pangkalpinang ?
            </Link>
          </div>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {agenda.map((item) => (
            <article
              key={item.id}
              className="keen-slider__slide card flex flex-col overflow-hidden"
            >
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-slate">
                  <span>{item.category}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  <span>{item.mode}</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-midnight">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-slate">{item.date}</p>
                <p className="text-sm font-medium text-brand-midnight/80">
                  {item.location}
                </p>
                <Link
                  href={item.link}
                  className="mt-auto inline-flex items-center text-sm font-semibold text-brand-blue transition hover:text-brand-midnight"
                >
                  Detail agenda di Instagram ?
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            className="rounded-full border border-brand-fog bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-blue"
            onClick={() => instanceRef.current?.prev()}
            aria-label="Agenda sebelumnya"
          >
            Sebelumnya
          </button>
          <button
            type="button"
            className="rounded-full border border-brand-fog bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-blue"
            onClick={() => instanceRef.current?.next()}
            aria-label="Agenda selanjutnya"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </section>
  );
}
