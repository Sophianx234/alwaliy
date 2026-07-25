import Banner from "@/components/banner";
import BannerMosque from "@/components/banner-mosque";
import { FeaturesGrid } from "@/components/features-grid";
import { HeroCarousel } from "@/components/hero-carousel";
import { AboutSection } from "@/components/about-section";
import { SecondaryBanner } from "@/components/secondary-banner";
import { FeaturedRecitation } from "@/components/featured-recitation";
import { GallerySection } from "@/components/gallery-section";
import { CoursesSection } from "@/components/courses-section";

export default function Home() {
  return (
      <main>
      <HeroCarousel/>
      <Banner/>
      <FeaturesGrid/>
      <BannerMosque/>
      <AboutSection/>
      <SecondaryBanner/>
      <FeaturedRecitation/>
      <GallerySection/>
      <CoursesSection/>
      </main>
  );
}
