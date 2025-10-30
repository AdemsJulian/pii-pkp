"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { heroSlides } from "@/data/site-content";
import "keen-slider/keen-slider.min.css";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
      },
      created: () => setCurrentSlide(0),
      slideChanged: (slider) => setCurrentSlide(slider.track.details.rel),
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        const nextSlide = () => {
          timeout = setTimeout(() => {
            slider.next();
          }, 6500);
        };
        slider.on("created", nextSlide);
        slider.on("dragStarted", () => clearTimeout(timeout));
        slider.on("animationEnded", nextSlide);
        slider.on("destroyed", () => clearTimeout(timeout));
      },
    ]
  );

  useEffect(() => {
    if (instanceRef.current) {
      setCurrentSlide(instanceRef.current.track.details.rel);
    }
  }, [instanceRef]);

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-br from-white via-brand-fog/60 to-white"
      aria-label="Sorotan utama"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(57,160,245,0.18),transparent_55%)]" />
      <div ref={sliderRef} className="keen-slider">
        {heroSlides.map((slide) => (
          <article
            key={slide.id}
            className="keen-slider__slide"
            aria-roledescription="slide"
          >
            <div className="container grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full bg-brand-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">
                  {slide.tag}
                </span>
                <h1 className="text-3xl font-semibold leading-tight text-brand-midnight sm:text-5xl">
                  {slide.title}
                </h1>
                <div className="space-y-4 text-base leading-relaxed text-brand-slate sm:text-lg">
                  {slide.summary.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href={slide.link}
                    className="rounded-full bg-brand-midnight px-6 py-3 text-sm font-semibold text-white shadow-floating transition hover:-translate-y-1 hover:bg-brand-blue"
                  >
                    Baca Selengkapnya
                  </Link>
                  <Link
                    href="#agenda"
                    className="inline-flex items-center text-sm font-semibold text-brand-midnight transition hover:text-brand-blue"
                  >
                    Lihat Agenda Terdekat →
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-brand-blue/15 via-brand-sky/10 to-transparent blur-2xl" />
                <div className="overflow-hidden rounded-[32px] border border-white/70 shadow-2xl">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={920}
                    height={620}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-3">
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            className="pointer-events-auto h-2 w-8 rounded-full bg-brand-midnight/25 transition-all hover:bg-brand-midnight/40"
            aria-label={`Slide ${idx + 1}`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            style={{
              backgroundColor:
                currentSlide === idx ? "rgba(3,43,96,0.85)" : "rgba(3,43,96,0.25)",
              width: currentSlide === idx ? "42px" : "26px",
            }}
          />
        ))}
      </div>
    </section>
  );
}
