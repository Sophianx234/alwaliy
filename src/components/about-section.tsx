import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="w-full py-16 lg:py-20 px-6 bg-brand-text-light font-sans overflow-hidden">
        <div className="text-center mb-12 lg:mb-16">
              <h4 className="text-brand-accent font-sans font-bold tracking-[0.2em] uppercase text-lg mb-4">
                About Ya'kub
              </h4>
              
            </div>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
          
          {/* Left Column (Spans 4) */}
          <div className="lg:col-span-4 flex flex-col space-y-6 lg:pr-4">
            
            
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-serif font-semibold text-brand-darkest tracking-tight">
                A Global Community
              </h3>
              <p className="text-brand-primary/70 text-sm leading-loose">
                Join a thriving network of learners from around the world. We foster an environment of support and mutual growth, ensuring that no student walks their educational journey alone.
              </p>
            </div>

            <p className="text-brand-primary/70 text-sm leading-loose">
              Every step on this path is designed to nurture the soul and sharpen the intellect. Our platform acts as a bridge connecting seekers of knowledge with profound and authentic resources.
            </p>
            <p className="text-brand-primary/70 text-sm leading-loose">
              Every step on this path is designed to nurture the soul and sharpen the intellect. Our platform acts as a bridge connecting seekers of knowledge with profound and authentic resources.
            </p>
          </div>

          {/* Middle Column: Image (Spans 4) */}
          <div className="lg:col-span-4 relative flex items-center justify-center py-6 lg:py-0">
             {/* Architectural Frame */}
             
             <div className="relative w-full max-w-sm h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl group">
               <Image
                  src="/imgs/y-1.jpg"
                  alt="Exploring Knowledge"
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
               />
               {/* Subtle color overlay to integrate image with the brand palette */}
               <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
             </div>
          </div>

          {/* Right Column (Spans 4) */}
          <div className="lg:col-span-4 flex flex-col space-y-6 lg:pr-4">
            
            
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-serif font-semibold text-brand-darkest tracking-tight">
                A Global Community
              </h3>
              <p className="text-brand-primary/70 text-sm leading-loose">
                Join a thriving network of learners from around the world. We foster an environment of support and mutual growth, ensuring that no student walks their educational journey alone.
              </p>
            </div>

            <p className="text-brand-primary/70 text-sm leading-loose">
              Every step on this path is designed to nurture the soul and sharpen the intellect. Our platform acts as a bridge connecting seekers of knowledge with profound and authentic resources.
            </p>
            <p className="text-brand-primary/70 text-sm leading-loose">
              Every step on this path is designed to nurture the soul and sharpen the intellect. Our platform acts as a bridge connecting seekers of knowledge with profound and authentic resources.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
