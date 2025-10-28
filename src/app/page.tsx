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
import { chairInsights, engineerInsights } from "@/data/site-content";

export default function HomePage() {
  return (
    <div className="space-y-0">
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <BannerHighlight />
      <div id="kabar">
        <NewsGrid />
        <InsightCarousel
          id="dari-ketum"
          eyebrow="Dari Meja Ketum PII"
          title="Arah kebijakan dan pesan strategis dari Ketua PII Cabang Pangkalpinang"
          items={chairInsights}
          ctaLabel="Artikel Lainnya"
          ctaHref="#"
        />
        <InsightCarousel
          id="dari-insinyur"
          eyebrow="Dari Insinyur"
          title="Pandangan insinyur Pangkalpinang terhadap isu strategis daerah"
          items={engineerInsights}
          ctaLabel="Artikel Lainnya"
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
