import Banner from "@/components/banner";
import BannerMosque from "@/components/banner-mosque";
import { FeaturesGrid } from "@/components/features-grid";
import { HeroCarousel } from "@/components/hero-carousel";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
      <main>
      <HeroCarousel/>
      <Banner/>
      <FeaturesGrid/>
      <BannerMosque/>
      <AboutSection/>
      </main>
  );
}
