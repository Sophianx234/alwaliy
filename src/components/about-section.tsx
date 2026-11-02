import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 lg:py-20 px-6 bg-brand-text-light font-sans overflow-hidden scroll-mt-24 relative">
      <span id="profile" className="absolute -top-24 left-0 block invisible" />
      <div className="text-center mb-12 lg:mb-8">
        <h4 className="text-brand-accent font-sans font-bold tracking-[0.2em] uppercase text-lg mb-4">
          About Ya&rsquo;kub
        </h4>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">

          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col space-y-6 lg:pr-4">
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-serif font-semibold text-brand-darkest tracking-tight">
                A Voice from Tamale
              </h3>
              <p className="text-brand-primary/70 text-sm leading-loose">
                Ya&rsquo;kub bin Abdul Rahman, known to many as Alwaliy Yakub, is a prominent reciter from Masjidul Bayaan in Tamale, Ghana. His voice has reached many homes across Tamale, and his recitation is loved by many, alhamdulillah.
              </p>
            </div>
            <p className="text-brand-primary/70 text-sm leading-loose">
              Born and schooled in Tamale, he grew up surrounded by the city&rsquo;s deep tradition of Islamic learning, the same environment that shaped his path as a reciter.
            </p>
          </div>

          {/* Middle Column: Image */}
          <div className="lg:col-span-4 relative flex items-center justify-center py-6 lg:py-0">
            <div className="relative w-full max-w-sm h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl group">
              <Image
                src="/imgs/y-1.jpg"
                alt="Ya'kub, reciter from Masjidul Bayaan, Tamale"
                fill
                className="object-cover transition-transform duration-[2s] ease-out"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col space-y-6 lg:pr-4">
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-serif font-semibold text-brand-darkest tracking-tight">
                Education &amp; Foundation
              </h3>
              <p className="text-brand-primary/70 text-sm leading-loose">
                Ya&rsquo;kub  completed his junior high school education at Nuriyya Islamic JHS in Tamale, where his early years of study laid the groundwork for his life with the Qur&rsquo;an. He then proceeded to Tamale Senior High School, where he served as the Imam of the school’s Muslim community
              </p>
            </div>
            <p className="text-brand-primary/70 text-sm leading-loose">
              Today, he continues to recite at Masjidul Bayaan and to share his recitations with listeners in Tamale and beyond.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}