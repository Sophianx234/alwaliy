"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

const Facebook = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Youtube = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export function Footer() {
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

  return (
    <div className="">
    {/* Footer Banner */}
    <div className="w-full relative h-[13rem] bg-brand-accent overflow-hidden">
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
      <div className="absolute  inset-0 z-10 -bottom-15.5 pointer-events-none">
        <Image src="/imgs/bi-3.png" alt="Banner Mosque" fill className="w-full h-auto opacity-75 object-contain" />
      </div>
    </div>
    <footer className="w-full bg-brand-darkest font-sans pt-20 m pb-6 px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col">
        
        {/* Call to Action / Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 pb-16 border-b border-white/10">
          <div className="flex flex-col max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Begin your sacred journey with us.
            </h2>
            <p className="text-brand-text-light/60 font-sans text-lg">
              Stay updated with our latest courses, events, and community news.
            </p>
          </div>
          
          <div className="w-full lg:w-auto flex items-center bg-white/5 backdrop-blur-md rounded-lg p-2 border border-white/10 ">
            <div className="pl-5 text-brand-text-light/40">
              <Mail className="w-5 h-5" />
            </div>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-none outline-none px-4 py-3 text-white w-full lg:w-72 placeholder:text-brand-text-light/30 focus:ring-0"
            />
            <button className="bg-brand-accent hover:bg-white hover:text-brand-darkest text-white px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-xs transition-all duration-300 h-full flex items-center">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 py-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start space-y-8 text-center md:text-left">
            <Link href="/" className="inline-block">
              <Image 
                src="/imgs/logo.png" 
                alt="Al Waliy Logo" 
                width={200} 
                height={80} 
                className="h-auto w-48 object-contain drop-shadow-xl"
              />
            </Link>
            <p className="text-brand-text-light/60 leading-relaxed max-w-sm">
              Nurturing hearts and illuminating minds through authentic Islamic knowledge, deeply rooted in tradition and accessible for the modern seeker.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 flex flex-col space-y-6 items-center md:items-start">
            <h4 className="font-bold text-white uppercase tracking-widest text-sm">Explore</h4>
            <ul className="flex flex-col space-y-4 text-center md:text-left">
              {['About Us', 'Our Courses', 'Instructors', 'Testimonials', 'Gallery'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-brand-text-light/60 hover:text-brand-accent transition-colors font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2 flex flex-col space-y-6 items-center md:items-start">
            <h4 className="font-bold text-white uppercase tracking-widest text-sm">Resources</h4>
            <ul className="flex flex-col space-y-4 text-center md:text-left">
              {['Articles & Insights', 'Upcoming Events', 'FAQ', 'Privacy Policy', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-brand-text-light/60 hover:text-brand-accent transition-colors font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 flex flex-col space-y-6 items-center lg:items-start text-center lg:text-left">
            <h4 className="font-bold text-white uppercase tracking-widest text-sm">Get in Touch</h4>
            <div className="flex flex-col space-y-4 text-brand-text-light/60 font-medium">
              <p>123 Sacred Knowledge Ave, <br /> Learning District, NY 10001</p>
              <p className="hover:text-white transition-colors cursor-pointer">info@alwaliy.org</p>
              <p className="hover:text-white transition-colors cursor-pointer">+1 (555) 123-4567</p>
            </div>
            
            {/* Socials */}
            <div className="flex items-center gap-4 pt-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-brand-text-light/40 text-sm font-medium">
          <p>© {new Date().getFullYear()} Al Waliy. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
    </div>

  );
}
