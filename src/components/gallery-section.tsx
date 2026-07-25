"use client";

import { useState } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="w-full   md:pt-0  bg-[#fcfbf9] font-sans overflow-hidden">
      {/* Gallery Banner */}
      <div className="bg-brand-accent text-center text-lg relative">
        <div className="w-full relative h-[8rem] flex items-center justify-center overflow-hidden">
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
          {images.map((img, i) => (
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
        
        {/* Mobile View Archive Button */}
        <button className="group flex md:hidden items-center justify-center gap-3 text-brand-darkest font-bold uppercase tracking-widest text-sm hover:text-brand-accent transition-colors pt-4">
          <span>View Full Archive</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>

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
