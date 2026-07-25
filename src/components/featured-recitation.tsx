"use client";

import { useState } from "react";
import { SkipForward, SkipBack, ListVideo } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Placeholder playlist data. Users can swap out the YouTube IDs with actual recitation videos.
const playlist = [
  {
    id: "ugI4-2Xphz0", // Lofi/Study beats placeholder - replace with actual recitation ID
    title: "Surah Ar-Rahman",
    description: "The Most Merciful - A heart-soothing recitation that brings peace to the soul."
  },
  {
    id: "dQw4w9WgXcQ", // Replace
    title: "Surah Al-Kahf",
    description: "The Cave - Recommended Friday recitation for spiritual protection and light."
  },
  {
    id: "3JZ_D3ELwOQ", // Replace
    title: "Surah Yaseen",
    description: "The Heart of the Quran - Profound verses to reflect upon during the evening."
  }
];

export function FeaturedRecitation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <section className="w-full bg-brand-darkest text-brand-text-light py-24 md:pt-32 md:pb-12 px-24 overflow-hidden relative">
      
      {/* Subtle cinematic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary opacity-20 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto flex flex-col space-y-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold tracking-tight leading-tight">
            Featured Recitation
          </h2>
        </div>

        {/* Cinematic Player Container */}
          
          {/* Main Video Area */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black ">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${playlist[currentIndex].id}?autoplay=0&rel=0&showinfo=0&modestbranding=1`}
                  title={playlist[currentIndex].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Player Controls (Glassmorphism Bar) */}
          <div className=" -mt-5 flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-8">
            
          <div></div>

            <div className="flex items-center space-x-6">
              <button 
                onClick={handlePrev}
                className="group p-4 rounded-lg flex items-center gap-3  bg-brand-primary/30 hover:bg-brand-primary/60 border border-brand-primary/50 transition-all focus:outline-none"
                aria-label="Previous Recitation"
              >
                <SkipBack className="w-6 h-6 text-brand-text-light/80 group-hover:text-white transition-colors" />
                Previous
              </button>
              
              <button 
                onClick={handleNext}
                className="group flex items-center rounded-lg gap-3 px-8 py-4  bg-brand-accent hover:bg-[#b0784a] text-[#051810] transition-all  focus:outline-none"
                aria-label="Next Recitation"
              >
                <span className="font-bold tracking-widest uppercase text-sm">Next</span>
                <SkipForward className="w-5 h-5 fill-current" />
              </button>
            </div>

          </div>
        </div>
    </section>
  );
}
