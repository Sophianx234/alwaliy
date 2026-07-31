"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[10000] bg-[#051810] flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center justify-center"
      >
        {/* Floating Logo */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-36 h-36 md:w-48 md:h-48 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
        >
          <Image
            src="/imgs/logo.png"
            alt="Loading..."
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Elegant Bouncing Dots */}
        <motion.div 
          className="mt-12 flex space-x-3"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2.5 h-2.5 md:w-3 md:h-3 bg-brand-accent rounded-full shadow-[0_0_12px_rgba(200,138,88,0.8)]"
              variants={{
                initial: { y: 0, opacity: 0.2 },
                animate: { 
                  y: [0, -12, 0],
                  opacity: [0.2, 1, 0.2],
                }
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
