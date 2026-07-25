"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 448 512" fill="currentColor">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 bg-brand-primary text-brand-text-light font-sans w-full z-50 shadow-md">
      
      {/* --- Desktop Navigation --- */}
      <div className="hidden lg:flex w-full justify-between items-center">
        
        {/* Left Side Container */}
        <div className="flex flex-1 justify-between items-center pr-24">
          
          {/* Extreme Left: Socials */}
          <div className="flex space-x-5">
           
            <Link href="#" aria-label="YouTube" className="hover:text-brand-accent transition-colors">
              <YoutubeIcon className="w-[22px] h-[22px]" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-brand-accent transition-colors">
              <InstagramIcon className="w-5 h-5" />
            </Link>
             <Link href="#" aria-label="TikTok" className="hover:text-brand-accent transition-colors">
              <TiktokIcon className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Left Inner: Navigation Links */}
          <div className="flex space-x-8 font-medium">
            <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <Link href="/profile" className="hover:text-brand-accent transition-colors">Profile</Link>
            <Link href="/recitations" className="hover:text-brand-accent transition-colors">Recitations</Link>
          </div>
        </div>

        {/* Center: Absolutely Positioned Logo */}
        <div className="absolute bg-transparent left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <Link href="/" className="pointer-events-auto block p-2 rounded-full">
            <Image 
              src="/imgs/logo.png" 
              alt="Logo" 
              width={100} 
              height={100} 
              className="w-30 h-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right Side Container */}
        <div className="flex flex-1 justify-between items-center pl-24">
          
          {/* Right Inner: Navigation Links */}
          <div className="flex space-x-8 font-medium">
            <Link href="/courses" className="hover:text-brand-accent transition-colors">Courses</Link>
            <Link href="/contact" className="hover:text-brand-accent transition-colors">Contact</Link>
            <Link href="/connections" className="hover:text-brand-accent transition-colors">Connections</Link>
          </div>

          {/* Extreme Right: CTA */}
          <button className="bg-brand-accent text-brand-darkest font-semibold px-7 py-2.5 rounded-md hover:bg-opacity-90 hover:scale-[1.02] active:scale-95 transition-all">
            Register
          </button>
        </div>
      </div>

      {/* --- Mobile Navigation Header (Hidden on lg) --- */}
      <div className="flex lg:hidden w-full justify-between items-center">
        {/* Mobile Logo on the left */}
        <Link href="/" className="z-10">
          <Image 
            src="/imgs/logo.png" 
            alt="Logo" 
            width={80} 
            height={80} 
            className="w-16 h-auto object-contain"
          />
        </Link>
        
        {/* Hamburger Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-brand-text-light hover:text-brand-accent z-50 p-2 focus:outline-none"
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* --- Mobile Menu Dropdown --- */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-primary border-t border-brand-secondary lg:hidden flex flex-col px-6 py-6 space-y-6 shadow-xl z-40">
          
          {/* Mobile Links */}
          <div className="flex flex-col space-y-5 font-medium text-lg">
            <Link href="/" className="hover:text-brand-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/profile" className="hover:text-brand-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Profile</Link>
            <Link href="/recitations" className="hover:text-brand-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Recitations</Link>
            <Link href="/courses" className="hover:text-brand-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Courses</Link>
            <Link href="/contact" className="hover:text-brand-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link href="/connections" className="hover:text-brand-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Connections</Link>
          </div>
          
          <hr className="border-brand-secondary border-t-2 opacity-50" />
          
          {/* Mobile Socials */}
          <div className="flex items-center space-x-6 justify-center">
            <Link href="#" aria-label="TikTok" className="hover:text-brand-accent transition-colors">
              <TiktokIcon className="w-6 h-6" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-brand-accent transition-colors">
              <InstagramIcon className="w-6 h-6" />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-brand-accent transition-colors">
              <YoutubeIcon className="w-[26px] h-[26px]" />
            </Link>
          </div>

          {/* Mobile CTA */}
          <button className="bg-brand-accent text-brand-darkest font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition-all w-full mt-4 text-center">
            Register
          </button>
        </div>
      )}
    </nav>
  );
}
