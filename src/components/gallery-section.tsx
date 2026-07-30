"use client";

import { useState, useEffect } from "react";

interface Dot {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
  duration: number;
  delay: number;
}
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/imgs/stock/y-1.jpeg", alt: "Gallery image 1" },
  { src: "/imgs/stock/y-2.jpeg", alt: "Gallery image 2" },
  { src: "/imgs/stock/y-3.jpeg", alt: "Gallery image 3" },
  { src: "/imgs/stock/y-4.jpeg", alt: "Gallery image 4" },
  { src: "/imgs/stock/y-5.jpeg", alt: "Gallery image 5" },
  { src: "/imgs/stock/y-6.jpeg", alt: "Gallery image 6" },
  { src: "/imgs/stock/y-7.jpeg", alt: "Gallery image 7" },
  { src: "/imgs/stock/y-8.jpeg", alt: "Gallery image 8" },
  { src: "/imgs/stock/y-9.jpeg", alt: "Gallery image 9" },
  { src: "/imgs/stock/y-10.jpg", alt: "Gallery image 10" },
  { src: "/imgs/stock/y-11.jpg", alt: "Gallery image 11" },
  { src: "/imgs/stock/y-12.jpg", alt: "Gallery image 12" },
  { src: "/imgs/stock/y-13.jpg", alt: "Gallery image 13" },
  { src: "/imgs/stock/y-14.jpg", alt: "Gallery image 14" },
  { src: "/imgs/stock/y-15.jpg", alt: "Gallery image 15" },
  { src: "/imgs/stock/y-16.jpg", alt: "Gallery image 16" },
  { src: "/imgs/stock/y-17.jpg", alt: "Gallery image 17" },
  { src: "/imgs/stock/y-18.jpg", alt: "Gallery image 18" },
  { src: "/imgs/stock/y-19.jpg", alt: "Gallery image 19" },
  { src: "/imgs/stock/y-20.jpg", alt: "Gallery image 20" },
];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const [bannerDots, setBannerDots] = useState<Dot[]>([]);

  useEffect(() => {
    const newDots = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      endX: (Math.random() - 0.5) * 250,
      endY: -(Math.random() * 250 + 100),
      size: Math.random() * 3 + 2,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 5,
    }));
    setBannerDots(newDots);
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 12, images.length));
  };

  return (
    <section className="w-full   md:pt-0  bg-[#fcfbf9] font-sans overflow-hidden">
      {/* Gallery Banner */}
      <div className="bg-brand-accent text-center text-lg relative">
        <div className="w-full relative h-[8rem] flex items-center justify-center">
          {/* Floating Dots Background */}
          {bannerDots.map((dot) => (
            <motion.div
              key={dot.id}
              className="absolute bg-white/70 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] z-0 pointer-events-none"
              style={{
                left: `${dot.startX}%`,
                top: `${dot.startY}%`,
                width: dot.size,
                height: dot.size,
              }}
              animate={{
                x: [0, dot.endX],
                y: [0, dot.endY],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: dot.duration,
                repeat: Infinity,
                delay: dot.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Ensure the text stays above the image */}
          
          <Image 
            src="/imgs/bi.png" 
            alt="Banner Mosque" 
            fill 
            className="object-cover object-[center_93%]  opacity-75 pointer-events-none" 
          />
          <div className="absolute bottom-5 z-10   font-serif text-2xl font-bold">Gallery</div>

        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-4 flex px-6 flex-col space-y-16">
        
        {/* Header */}
        

        {/* Unsplash-style Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-2">
          {images.slice(0, visibleCount).map((img, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedIndex(i)}
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
        
        {/* Load More Button */}
        {visibleCount < images.length && (
          <div className="flex justify-center pt-8">
            <button 
              onClick={loadMore}
              className="group flex items-center justify-center gap-3 bg-brand-accent text-brand-darkest font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-lg shadow-md hover:shadow-lg  active:scale-95 transition-all"
            >
              <span>Load More</span>
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[310] p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
              }}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-[310] p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all focus:outline-none group"
            >
              <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((prev) => (prev! + 1) % images.length);
              }}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-[310] p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all focus:outline-none group"
            >
              <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="relative max-w-full max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl cursor-default"
                />
              </AnimatePresence>

              {/* Progress Indicator */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/50 font-sans tracking-[0.2em] text-xs">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
