"use client";

import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import { membershipBenefits } from "@/data/site-content";
import "keen-slider/keen-slider.min.css";

export function BenefitsCarousel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 2.5,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 1.6,
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
      className="section-spacing bg-brand-fog"
      aria-labelledby="benefit-heading"
    >
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">
              Mengapa Perlu Jadi Anggota PII?
            </p>
            <h2
              id="benefit-heading"
              className="mt-3 max-w-2xl text-3xl font-semibold text-brand-midnight sm:text-4xl"
            >
              Lima alasan insinyur Pangkalpinang bergabung dan berkembang
              bersama PII
            </h2>
          </div>
          <Link
            href="https://bit.ly/daftarpiipangkalpinang"
            className="text-sm font-semibold text-brand-blue transition hover:text-brand-navy"
          >
            Gabung PII →
          </Link>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {membershipBenefits.map((benefit) => (
            <article
              key={benefit.id}
              className="keen-slider__slide card flex flex-col overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-xl font-semibold text-brand-midnight">
                  {benefit.title}
                </h3>
                <p className="text-sm text-brand-slate">
                  {benefit.description}
                </p>
                <Link
                  href={benefit.link}
                  className="mt-auto text-sm font-semibold text-brand-blue transition hover:text-brand-navy"
                >
                  Gabung PII →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
