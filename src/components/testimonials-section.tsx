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
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ahmad R.",
    role: "Hifz Student",
    quote: "The Hifz program completely transformed my relationship with the Quran. The teachers are incredibly patient, and the structured approach made memorization feel beautiful and achievable."
  },
  {
    name: "Fatima S.",
    role: "Community Member",
    quote: "Learning Seerah here wasn't just about historical facts; it was about connecting with the Prophet (ﷺ) on a deeply emotional and spiritual level. Truly life-changing."
  },
  {
    name: "Omar K.",
    role: "Tajweed Student",
    quote: "The Tajweed mastery course is exceptional. For years I struggled with my pronunciation, but the personalized guidance here helped me recite with confidence and peace."
  },
  {
    name: "Aisha M.",
    role: "Arabic Student",
    quote: "I never thought I could understand classical Arabic. The curriculum is brilliantly designed, making the language of the Quran accessible to everyone."
  },
  {
    name: "Zaid T.",
    role: "Youth Program",
    quote: "This community is exactly what I was looking for. A beautiful environment where we learn our deen while building lifelong, righteous friendships."
  }
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
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

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getPosition = (index: number) => {
    if (index === currentIndex) return 0;
    if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) return -1;
    if (index === (currentIndex + 1) % testimonials.length) return 1;
    return 2; // hidden
  };

  return (
    <>
    {/* Testimonial Banner */}
     <div className="w-full relative h-[13rem] overflow-x-hidden bg-brand-accent ">
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
       <Image src="/imgs/bi-2.png" alt="Banner Mosque" fill className="w-full h-auto opacity-75 object-contain pointer-events-none z-10" />
     </div>
    <section className="w-full py-12 md:py-16 px-4 bg-brand-darkest font-sans relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
      {/* Header Area */}
      <div className="relative flex flex-col items-center justify-center text-center w-full mb-12 mt-4">
        
       

        <div className="relative z-10 flex flex-col items-center space-y-2 mt-2">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Testimonials
          </h2>
        </div>
      </div>

      {/* Carousel Area */}
      <div className="relative w-full max-w-[1100px] h-[320px] flex items-center justify-center">
        
        {/* Left Arrow */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 md:-left-8 lg:-left-12 z-30 p-2 text-white/30 hover:text-white transition-colors focus:outline-none hidden md:block"
        >
          <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
        </button>

        <div className="relative w-full max-w-3xl h-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            {testimonials.map((t, i) => {
               const pos = getPosition(i);
               if (pos === 2) return null;
               
               const isCenter = pos === 0;
               const xOffset = isCenter ? "0%" : pos === -1 ? "-105%" : "105%";
               const scale = isCenter ? 1 : 0.85;
               const opacity = isCenter ? 1 : 0.3;
               const zIndex = isCenter ? 20 : 10;
               
               return (
                 <motion.div
                   key={i}
                   custom={direction}
                   initial={{ 
                     opacity: 0, 
                     scale: 0.8, 
                     x: direction > 0 ? "150%" : "-150%" 
                   }}
                   animate={{ 
                     opacity, 
                     scale, 
                     x: xOffset, 
                     zIndex 
                    }}
                   exit={{ 
                     opacity: 0, 
                     scale: 0.8, 
                     x: direction < 0 ? "150%" : "-150%",
                     zIndex: 0 
                   }}
                   transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                   className={`absolute w-[90%] md:w-[420px] bg-white/5 backdrop-blur-md p-8 rounded-xl flex flex-col items-center text-center border border-white/10 ${
                     isCenter ? 'shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'shadow-none'
                   }`}
                 >
                   {/* Avatar and Name row */}
                   <div className="flex items-center justify-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-white/20">
                       <img src="/imgs/h-2.jpeg" alt="Avatar" className="w-full h-full object-cover" />
                     </div>
                     <div className="flex flex-col items-start">
                       <h4 className="text-white font-bold text-[15px] leading-tight">{t.name}</h4>
                       <span className="text-brand-accent/80 text-[13px]">{t.role}</span>
                     </div>
                   </div>

                   {/* Quote */}
                   <p className="text-white/80 text-[15px] leading-relaxed">
                     {t.quote}
                   </p>
                 </motion.div>
               );
              })}
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNext}
          className="absolute right-0 md:-right-8 lg:-right-12 z-30 p-2 text-white/30 hover:text-white transition-colors focus:outline-none hidden md:block"
        >
          <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
        </button>

      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-6 z-20">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-2.5 h-2.5 bg-brand-accent' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
      
      {/* Mobile Swipe Indicators */}
      <div className="flex md:hidden items-center justify-between w-full max-w-[200px] mt-4 z-20">
        <button onClick={handlePrev} className="p-2 text-white/30 hover:text-white"><ChevronLeft className="w-6 h-6" /></button>
        <button onClick={handleNext} className="p-2 text-white/30 hover:text-white"><ChevronRight className="w-6 h-6" /></button>
      </div>

    </section>
    </>
  );
}
