"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Mock data for the carousel using the available images in the public/imgs folder.
const slides = [
  {
    id: 1,
    image: "/imgs/h-1.jpeg",
  },
  {
    id: 2,
    image: "/imgs/h-1.jpeg",
  },
  {
    id: 3,
    image: "/imgs/h-4.jpeg",
  },
  {
    id: 4,
    image: "/imgs/h-2.jpeg",
  },
  
  /* 
  title: "Elevate Your Journey",
  description: "Discover a curated collection of courses and profound recitations designed to enrich your mind and soul.",
  cta: "Start Learning",
  href: "/courses",
   {
    id: 2,
    image: "/imgs/Make_it_flat_instead_2K_202607232201 (1).jpeg",
    title: "Master the Fundamentals",
    description: "Join a thriving community of learners. Build your foundation with expert-led guidance and comprehensive resources.",
    cta: "View Curriculum",
    href: "/profile",
  },
  {
    id: 3,
    // Using one of the other images as a fallback for the 3rd slide
    image: "/imgs/Make_logo_perfect_transparent_2K_202607232156.jpeg",
    title: "Connect & Grow",
    description: "Become part of an expansive network. Engage, discuss, and evolve alongside dedicated peers.",
    cta: "Join Community",
    href: "/connections",
  }, */
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, [nextSlide, currentSlide]);

  return (
    <div className="relative w-full h-[600px] lg:h-[350px] overflow-hidden  font-sans">
      {/* Slides Container */}
      <div 
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0} // Only prioritize the first image for LCP
                className="object-cover object-center"
                sizes="100vw"
                quality={75} // Abiding by Next.js defaults mentioned in skill.md
              />
              {/* Dark Overlay for better text readability */}
              {/* <div className="absolute inset-0 bg-brand-darkest/60" /> */}
            </div>

         
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-brand-primary/50 text-brand-text-light hover:bg-brand-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-brand-primary/50 text-brand-text-light hover:bg-brand-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3 items-center">
        {slides.map((_, index) => {
          const isActive = currentSlide === index;
          return (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative w-6 h-2 rounded-full overflow-hidden transition-colors focus:outline-none ${
                isActive ? "bg-white/30" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {isActive && (
                <motion.div
                  key={currentSlide} // Reset animation when slide changes
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute left-0 top-0 h-full bg-brand-accent rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
