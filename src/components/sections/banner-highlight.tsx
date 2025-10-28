import Image from "next/image";
import Link from "next/link";
import { bannerHighlight } from "@/data/site-content";

export function BannerHighlight() {
  return (
    <section
      className="relative overflow-hidden bg-brand-navy"
      aria-labelledby="banner-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={bannerHighlight.image}
          alt="Gerakan Pangkalpinang Net-Zero 2045"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm" />
      </div>
      <div className="relative container py-20 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
          Kampanye Strategis
        </p>
        <h2
          id="banner-heading"
          className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl"
        >
          {bannerHighlight.title}
        </h2>
        <p className="mt-5 max-w-2xl text-base text-white/75">
          {bannerHighlight.description}
        </p>
        <Link
          href={bannerHighlight.ctaHref}
          className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:-translate-y-0.5 hover:bg-brand-sky hover:text-brand-midnight"
        >
          {bannerHighlight.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
