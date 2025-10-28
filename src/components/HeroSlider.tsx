
"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import { heroSlides } from "../data/home/hero";
import { useEffect } from "react";

export default function HeroSlider() {
  const [ref, instance] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    renderMode: "performance",
  });

  useEffect(() => {
    const i = instance.current;
    if (!i) return;
    const timer = setInterval(() => i.next(), 6000);
    return () => clearInterval(timer);
  }, [instance]);

  return (
    <section aria-label="Berita unggulan" className="relative">
      <div ref={ref} className="keen-slider h-[70svh] md:h-[80svh]">
        {heroSlides.map((s, idx) => (
          <div className="keen-slider__slide" key={s.id}>
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover"
              priority={idx === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
            <div className="container relative z-10 flex h-full flex-col justify-end pb-10 text-white">
              <span className="mb-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
                {s.category} • {new Date(s.date).toLocaleDateString("id-ID")}
              </span>
              <h1 className="max-w-3xl text-3xl font-semibold md:text-5xl animate-fade-in-up">{s.title}</h1>
              {s.summary && <p className="mt-4 max-w-3xl text-sm md:text-base opacity-95">{s.summary}</p>}
              <div className="mt-6">
                <Link href={s.href ?? "#"} className="rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
