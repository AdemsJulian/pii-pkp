import { HeroSlider } from "@/components/sections/hero-slider";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services";
import { BannerHighlight } from "@/components/sections/banner-highlight";
import { NewsGrid } from "@/components/sections/news-grid";
import { InsightCarousel } from "@/components/sections/insight-carousel";
import { BenefitsCarousel } from "@/components/sections/benefits-carousel";
import { AgendaSlider } from "@/components/sections/agenda-slider";
import { PartnersGrid } from "@/components/sections/partners-grid";
import { DocumentsSection } from "@/components/sections/documents";
import { engineerInsights } from "@/data/site-content";

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <BannerHighlight />
      <div id="kabar" className="space-y-16 bg-brand-fog py-20">
        <NewsGrid />
        <InsightCarousel
          id="dari-insinyur"
          eyebrow="Sorotan Insinyur"
          title="Kisah dan pembelajaran dari insinyur Pangkalpinang"
          items={engineerInsights}
          ctaLabel="Baca Artikel Lainnya"
          ctaHref="#"
        />
      </div>
      <BenefitsCarousel />
      <AgendaSlider />
      <PartnersGrid />
      <DocumentsSection />
    </div>
  );
}
