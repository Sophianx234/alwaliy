"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

function BannerMosque() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    // Generate random small dots
    const newDots = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      startX: Math.random() * 100, // Start randomly across the width
      startY: Math.random() * 100, // Start randomly across the height
      endX: (Math.random() - 0.5) * 250, // Drift spontaneously left/right
      endY: -(Math.random() * 250 + 100), // Float upwards out of the banner
      size: Math.random() * 3 + 2, // Size between 2px and 5px (dots)
      duration: Math.random() * 6 + 4, // Animation duration 4s to 10s
      delay: Math.random() * 5, // Stagger the start times
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="w-full relative h-[13rem] bg-brand-accent overflow-hidden">
      {/* Floating Dots Background */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute bg-white/70 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] z-0"
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

      <div className="absolute inset-0 z-10 -bottom-11 pointer-events-none">
        <Image src="/imgs/mosque.png" alt="Banner Mosque" fill className="w-full h-auto opacity-75 object-contain" />
      </div>
    </div>
  );
}

export default BannerMosque;
