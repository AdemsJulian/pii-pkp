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
      className="relative min-h-[720px] overflow-hidden bg-brand-midnight text-white"
      aria-label="Sorotan utama"
    >
      <div ref={sliderRef} className="keen-slider h-full">
        {heroSlides.map((slide) => (
          <article
            key={slide.id}
            className="keen-slider__slide relative h-full"
            aria-roledescription="slide"
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-midnight/90 via-brand-midnight/60 to-brand-midnight/40" />
            </div>

            <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-4 py-24 sm:px-8 md:py-32">
              <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                {slide.tag}
              </span>
              <h1 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {slide.title}
              </h1>
              <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
                {slide.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10 flex items-center gap-4">
                <Link
                  href={slide.link}
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-midnight transition hover:-translate-y-0.5 hover:bg-brand-sky"
                >
                  Baca Selengkapnya
                </Link>
                <Link
                  href="#agenda"
                  className="text-sm font-semibold text-white/80 transition hover:text-white"
                >
                  Lihat Agenda PII Pangkalpinang →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-3">
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            className="pointer-events-auto h-2 w-10 rounded-full transition-all"
            aria-label={`Slide ${idx + 1}`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            style={{
              backgroundColor:
                currentSlide === idx ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)",
              width: currentSlide === idx ? "48px" : "24px",
            }}
          />
        ))}
      </div>
    </section>
  );
}
