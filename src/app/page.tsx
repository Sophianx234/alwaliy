import Banner from "@/components/banner";
import BannerMosque from "@/components/banner-mosque";
import { FeaturesGrid } from "@/components/features-grid";
import { HeroCarousel } from "@/components/hero-carousel";
import { AboutSection } from "@/components/about-section";
import { SecondaryBanner } from "@/components/secondary-banner";
import { FeaturedRecitation } from "@/components/featured-recitation";
import { GallerySection } from "@/components/gallery-section";
import { CoursesSection } from "@/components/courses-section";
import { TestimonialSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";
import { AudioPlayer } from "@/components/audio-player";

export default function Home() {
  return (
      <main className="pb-[90px]">
      <HeroCarousel/>
      <Banner/>
      <FeaturesGrid/>
      <BannerMosque/>
      <AboutSection/>
      <SecondaryBanner/>
      <FeaturedRecitation/>
      <GallerySection/>
      <CoursesSection/>
      <TestimonialSection/>
      <Footer/>
      <AudioPlayer/>
      </main>
  );
}
