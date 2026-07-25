import { ArrowUpRight } from "lucide-react";

const images = [
  { src: "/imgs/h-1.jpeg", alt: "Gathering and recitation" },
  { src: "/imgs/h-2.jpeg", alt: "Community engagement" },
  { src: "/imgs/y-1.jpg", alt: "Study session" },
  { src: "/imgs/h-4.jpeg", alt: "Focus and learning" },
  { src: "/imgs/h-5.jpeg", alt: "Spiritual reflection" },
  { src: "/imgs/h-3.jpeg", alt: "Discussion" },
  { src: "/imgs/h-5x.jpeg", alt: "Togetherness" },
];

export function GallerySection() {
  return (
    <section className="w-full  lg:pb-16 md:pt-0  bg-[#fcfbf9] font-sans overflow-hidden">
      <div className="bg-brand-accent text-center text-lg mb-6 py-8">
        Gallery
      </div>
      <div className="max-w-[1400px] mx-auto flex px-6 flex-col space-y-16">
        
        {/* Header */}
        

        {/* Unsplash-style Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-2">
          {images.map((img, i) => (
            <div 
              key={i} 
              className="relative break-inside-avoid group rounded-lg overflow-hidden cursor-zoom-in bg-brand-primary/5"
            >
              {/* 
                Using a standard img tag here is the best practice for a true masonry layout 
                when the source images have unpredictable, varying aspect ratios. 
                This allows the browser to naturally render their heights without forced warping. 
              */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out "
              />
              
              {/* Cinematic Unsplash Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
             
            </div>
          ))}
        </div>
        
        {/* Mobile View Archive Button */}
        <button className="group flex md:hidden items-center justify-center gap-3 text-brand-darkest font-bold uppercase tracking-widest text-sm hover:text-brand-accent transition-colors pt-4">
          <span>View Full Archive</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </section>
  );
}
