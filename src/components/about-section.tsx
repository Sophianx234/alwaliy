import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section className="w-full py-24 px-6 bg-brand-text-light font-sans overflow-hidden border-t border-brand-primary/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Image with Decorative Offset */}
        <div className="relative w-full h-[450px] lg:h-[650px] rounded-2xl group">
           {/* Subtle decorative background element that matches the brand-accent color */}
           <div className="absolute inset-0 bg-brand-accent rounded-2xl transform translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 opacity-30 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
           
           <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10">
             <Image
                src="/imgs/y-1.jpg"
                alt="About Us - Exploring Knowledge"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
             />
           </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col space-y-8">
           <div>
             <h4 className="text-brand-accent font-semibold tracking-widest uppercase text-sm md:text-base mb-3 flex items-center gap-3">
               <span className="w-8 h-px bg-brand-accent/50" />
               About Us
             </h4>
             <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-darkest leading-tight tracking-tight">
               Empowering minds through profound knowledge.
             </h2>
           </div>
           
           <p className="text-brand-primary/80 text-lg md:text-xl leading-relaxed">
             We are deeply committed to cultivating a transformative educational experience. By blending timeless traditions with accessible, modern learning, we guide our students toward true intellectual and spiritual growth.
           </p>

           {/* Beautifully styled feature list */}
           <ul className="space-y-5 pt-2">
             {[
               "Expert-led curriculum with personalized guidance",
               "A thriving, supportive global community of learners",
               "Comprehensive resources crafted for all learning levels"
             ].map((item, i) => (
               <li key={i} className="flex items-start space-x-4">
                 <div className="mt-1 bg-brand-accent/10 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0" />
                 </div>
                 <span className="text-brand-primary font-medium text-lg">{item}</span>
               </li>
             ))}
           </ul>

           <div className="pt-6">
             <Link 
                href="/about" 
                className="inline-flex items-center justify-center bg-brand-primary text-brand-text-light px-8 py-4 rounded-lg font-semibold hover:bg-brand-secondary transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
             >
               Discover Our Story
             </Link>
           </div>
        </div>

      </div>
    </section>
  );
}
