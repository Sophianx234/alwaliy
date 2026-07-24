import Banner from "@/components/banner";
import { FeaturesGrid } from "@/components/features-grid";
import { HeroCarousel } from "@/components/hero-carousel";

export default function Home() {
  return (
      <main>
      <HeroCarousel/>
      <Banner/>
      <FeaturesGrid/>
      </main>
  );
}
