"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Video, Camera, Tv, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 bg-brand-primary text-brand-text-light font-sans w-full z-50 shadow-md">
      
      {/* --- Desktop Navigation --- */}
      <div className="hidden lg:flex w-full justify-between items-center">
        
        {/* Left Side Container */}
        {/* Using flex-1 and justify-between pushes socials to the extreme left and inner links towards the center */}
        <div className="flex flex-1 justify-between items-center pr-24">
          
          {/* Extreme Left: Socials */}
          <div className="flex space-x-5">
            <Link href="#" aria-label="TikTok" className="hover:text-brand-accent transition-colors">
              {/* Using Video as placeholder for TikTok per request */}
              <Video className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-brand-accent transition-colors">
              <Camera className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-brand-accent transition-colors">
              <Tv className="w-5 h-5" />
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          {/* pointer-events-none on wrapper to allow clicks to pass through if needed, re-enable on Link */}
          <Link href="/" className="pointer-events-auto block bg-brand-primary p-2 rounded-full">
            <Image 
              src="/imgs/logo.png" 
              alt="Logo" 
              width={100} 
              height={100} 
              className="w-20 h-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right Side Container */}
        {/* Using flex-1 and justify-between pushes inner links to the center and register button to extreme right */}
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
              <Video className="w-6 h-6" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-brand-accent transition-colors">
              <Camera className="w-6 h-6" />
            </Link>
            <Link href="#" aria-label="YouTube" className="hover:text-brand-accent transition-colors">
              <Tv className="w-6 h-6" />
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
