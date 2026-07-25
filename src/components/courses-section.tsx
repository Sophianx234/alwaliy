import { BookOpen, Star, Feather, Book, Compass, Languages, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Quran Memorization",
    subtitle: "Hifz Program",
    description: "Embark on a sacred journey to memorize the Holy Quran with precise Tajweed and personalized guidance.",
    icon: BookOpen,
    level: "All Levels",
    duration: "Ongoing",
    image: "/imgs/h-1.jpeg"
  },
  {
    title: "Hadith Studies",
    subtitle: "Prophetic Traditions",
    description: "Delve deep into the sayings and traditions of Prophet Muhammad (ﷺ), understanding their context and application.",
    icon: Feather,
    level: "Intermediate",
    duration: "6 Months",
    image: "/imgs/h-2.jpeg"
  },
  {
    title: "Seerah",
    subtitle: "Prophetic Biography",
    description: "Learn the inspiring life story, struggles, and profound character of the Prophet (ﷺ) to derive timeless lessons.",
    icon: Compass,
    level: "Beginner",
    duration: "12 Weeks",
    image: "/imgs/h-3.jpeg"
  },
  {
    title: "Aqeedah",
    subtitle: "Islamic Creed",
    description: "Strengthen your foundational beliefs and gain a crystal-clear understanding of core Islamic theology.",
    icon: Star,
    level: "Beginner",
    duration: "8 Weeks",
    image: "/imgs/h-4.jpeg"
  },
  {
    title: "Tajweed Mastery",
    subtitle: "Perfect Recitation",
    description: "Refine your recitation through the detailed study of articulation points and pronunciation rules.",
    icon: Book,
    level: "Advanced",
    duration: "10 Weeks",
    image: "/imgs/h-5.jpeg"
  },
  {
    title: "Arabic Language",
    subtitle: "Quranic Arabic",
    description: "Unlock the language of the Quran and deepen your direct connection with classical Islamic texts.",
    icon: Languages,
    level: "All Levels",
    duration: "1 Year",
    image: "/imgs/h-5x.jpeg"
  }
];

export function CoursesSection() {
  return (
    <section className="w-full py-24 lg:py-32 px-6 bg-[#f7f6f2] font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row  md:items-end justify-center gap-8">
          <div className="flex flex-col text-center space-y-4 max-w-2xl">
            {/* <h4 className="text-brand-accent font-sans font-bold tracking-[0.2em] uppercase text-xs">
              Academic Excellence
            </h4> */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-darkest tracking-tight">
              Available Courses
            </h2>
            
          </div>
          
          {/* <button className="hidden md:flex items-center gap-3 px-8 py-4 bg-brand-darkest text-brand-text-light font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-brand-accent hover:text-white transition-colors shadow-xl">
            View Schedule
          </button> */}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => {
            const Icon = course.icon;
            return (
              <div 
                key={i}
                className="group bg-white rounded-lg border border-brand-primary/5   transition-all duration-500  flex flex-col h-full relative overflow-hidden cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative w-full h-56 md:h-64 overflow-hidden bg-brand-primary/5">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out " 
                  />
                  
                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Floating Level Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand-darkest px-4 py-2 bg-white/95 backdrop-blur-md rounded-full shadow-lg">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow bg-white z-0">
                  
                  {/* Top Row: Duration Badge & Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="pt-2">
                       <span className="text-[10px] font-bold tracking-widest uppercase text-brand-accent px-3 py-1 bg-brand-accent/10 rounded-full inline-block">
                         {course.duration}
                       </span>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-lg bg-brand-primary/5 flex items-center justify-center text-brand-primary   transition-colors duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Titles */}
                  <h3 className="text-2xl font-serif font-bold text-brand-darkest mb-1 group-hover:text-brand-accent transition-colors duration-300">
                    {course.title}
                  </h3>
                  <h4 className="text-xs font-sans font-bold text-brand-primary/40 mb-4 uppercase tracking-[0.15em]">
                    {course.subtitle}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-brand-primary/80 leading-relaxed flex-grow text-sm md:text-base">
                    {course.description}
                  </p>

                  {/* Action Link */}
                  <div className="mt-8 pt-6 border-t border-brand-primary/5 flex items-center justify-between text-brand-primary font-bold text-sm tracking-widest uppercase group-hover:text-brand-accent transition-colors">
                    <span>Explore Course</span>
                    <div className="w-10 h-10 rounded-full bg-brand-primary/5 flex items-center justify-center group-hover:bg-brand-accent/10 transition-colors">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <button className="flex md:hidden items-center justify-center gap-3 px-8 py-4 bg-brand-darkest text-brand-text-light font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-brand-accent hover:text-white transition-colors shadow-xl w-full">
          View Schedule
        </button>

      </div>
    </section>
  );
}
