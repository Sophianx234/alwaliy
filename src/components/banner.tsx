"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const hadiths = [
  {
    quote: "Whoever travels a path in search of knowledge, Allah will make easy for him a path to Paradise.",
    source: "Sahih Muslim 2699"
  },
  {
    quote: "Seeking knowledge is an obligation upon every Muslim.",
    source: "Sunan Ibn Majah 224"
  },
  {
    quote: "When a man dies, his deeds come to an end except for three things: ceaseless charity; a knowledge which is beneficial, or a virtuous descendant who prays for him.",
    source: "Sahih Muslim 1631"
  },
  {
    quote: "He who goes forth in search of knowledge is in the way of Allah till he returns.",
    source: "Jami` at-Tirmidhi 2647"
  },
  {
    quote: "The superiority of the learned man over the devout worshipper is like that of the full moon to the rest of the stars.",
    source: "Sunan Abi Dawud 3641"
  }
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % hadiths.length);
    }, 8000); // Transitions every 8 seconds

    // Including 'index' in the dependency array ensures the 8-second timer 
    // resets if the user manually clicks an indicator dot!
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="text-center flex flex-col items-center justify-center p-6 md:p-12 bg-brand-primary shadow-inner h-[380px] md:h-[350px]  w-full relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center w-full pb-8"
        >
          <span className="text-2xl md:text-4xl  font-serif font-medium text-brand-text-light leading-relaxed md:leading-tight max-w-4xl mb-6">
            "{hadiths[index].quote}"
          </span>
          <span className="text-xs md:text-sm text-brand-accent font-sans font-bold tracking-[0.2em] uppercase">
            {hadiths[index].source}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Interactive Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 items-center">
        {hadiths.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-primary ${
              index === i 
                ? "bg-brand-accent w-8 " 
                : "bg-brand-text-light/30 w-2 hover:bg-brand-text-light/60 hover:scale-125"
            }`}
            aria-label={`View quote ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
