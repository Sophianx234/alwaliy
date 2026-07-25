"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const captions = [
  "Nourishing lives with the words of the Creator.",
  "Illuminating hearts through timeless divine wisdom.",
  "A sanctuary for spiritual growth and profound understanding.",
  "Guiding every step with the light of eternal knowledge."
];

export function SecondaryBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % captions.length);
    }, 6000); // Transitions every 6 seconds

    // Include index in dependency array to reset timer on manual click
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="w-full bg-brand-accent text-brand-text-light flex flex-col items-center justify-center p-6  relative overflow-hidden">
      
      {/* Subtle decorative accent lines */}
      <div className="absolute top-0 w-px h-16 bg-gradient-to-b from-brand-accent/50 to-transparent" />
      <div className="absolute bottom-0 w-px h-16 bg-gradient-to-t from-brand-accent/50 to-transparent" />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -40, filter: "blur(4px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full max-w-5xl z-10"
        >
          <h2 className="text-3xl  font-serif font-medium leading-[1.2] text-center tracking-wide text-brand-text-light px-4">
            {captions[index]}
          </h2>
        </motion.div>
      </AnimatePresence>

      {/* Interactive Dot Indicators */}
     
    </div>
  );
}
