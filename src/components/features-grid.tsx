import Link from "next/link";
import { Headphones, BookOpen, GraduationCap, Compass, UserCheck, CalendarCheck } from "lucide-react";

// This accent splash creates the duotone/offset aesthetic seen in the reference image
// We use the project's brand-accent color to match the yellow/gold theme from the image
const AccentSplash = ({children}: {children: React.ReactNode}) => (
  <div 
    className="  p-2 px-3 bg-brand-accent/90 flex items-center justify-center"
  >
   {children}
  </div>
);

const features = [
  {
    icon: <Headphones className="w-9 h-9 text-[#2b3b34] relative z-10" strokeWidth={1.5} />,
    title: "Quranic Recitations",
    description: "Listen to soul-stirring Quranic recitations, Friday Khutbahs, and Taraweeh recordings live from Masjidul Bayaan, Tamale.",
    cta: "Listen Now",
    href: "#recitations"
  },
  {
    icon: <BookOpen className="w-8 h-8 text-[#2b3b34] relative z-10" strokeWidth={1.5} />,
    title: "Tajweed Mastery",
    description: "Comprehensive instruction on articulation points (Makharij), characteristics of letters, and rhythm to perfect your recitation.",
    cta: "View Courses",
    href: "#courses"
  },
  {
    icon: <GraduationCap className="w-9 h-9 text-[#2b3b34] relative z-10" strokeWidth={1.5} />,
    title: "Hifdh & Revision",
    description: "Structured Quran memorization schedules, retention techniques, and personalized follow-ups for students of all ages.",
    cta: "Join Program",
    href: "#courses"
  },
  {
    icon: <Compass className="w-9 h-9 text-[#2b3b34] relative z-10" strokeWidth={1.5} />,
    title: "Imam & Taraweeh",
    description: "Leading congregational prayers, Ramadan Taraweeh, and Tahajjud at Masjidul Bayaan with reverence and devotion.",
    cta: "Learn More",
    href: "#about"
  },
  {
    icon: <UserCheck className="w-9 h-9 text-[#2b3b34] relative z-10" strokeWidth={1.5} />,
    title: "One-on-One Mentorship",
    description: "In person mentorship and recitation correction sessions following traditional teacher-to-student oral transmission (Talaqqi).",
    cta: "Book a Session",
    href: "#contact"
  },
  {
    icon: <CalendarCheck className="w-9 h-9 text-[#2b3b34] relative z-10" strokeWidth={1.5} />,
    title: "Event & Ceremony Bookings",
    description: "Available for Quran conferences, graduation ceremonies, inter-school competitions, and Islamic seminars.",
    cta: "Request Booking",
    href: "#contact"
  }
];

export function FeaturesGrid() {
  return (
    <section className="w-full bg-brand-text-light py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto border-t border-brand-primary/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            // Determine responsive borders to perfectly match the grid aesthetic of the image
            let borderClasses = "border-brand-primary/10 ";
            
            // Mobile borders
            if (i < 5) borderClasses += "border-b ";
            
            // Tablet borders
            borderClasses += "md:border-b-0 md:border-r-0 "; // Reset
            if (i < 4) borderClasses += "md:border-b ";
            if (i % 2 === 0) borderClasses += "md:border-r ";
            
            // Desktop borders
            borderClasses += "lg:border-b-0 lg:border-r-0 "; // Reset
            if (i < 3) borderClasses += "lg:border-b ";
            if (i % 3 !== 2) borderClasses += "lg:border-r ";

            return (
              <div 
                key={i} 
                className={`flex flex-col items-center text-center p-12 hover:bg-brand-primary/[0.02] transition-colors ${borderClasses}`}
              >
                {/* Icon Wrapper matching the special internet icons aesthetic */}
                <div className="relative mb-6">
                  <AccentSplash>

                  {feature.icon}
                  </AccentSplash>
                </div>

                <h3 className="text-2xl font-bold text-[#2b3b34] mb-4 font-serif tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-brand-primary/70 mb-6 leading-relaxed text-sm max-w-sm">
                  {feature.description}
                </p>

                <Link 
                  href={feature.href}
                  className="text-brand-primary/60 font-medium text-sm hover:text-brand-accent transition-colors underline underline-offset-4 decoration-brand-primary/20 hover:decoration-brand-accent"
                >
                  {feature.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
