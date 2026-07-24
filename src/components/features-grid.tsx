import Link from "next/link";
import { Wheat, Backpack, BriefcaseMedical, Droplet, HeartHandshake, Tent } from "lucide-react";

// This accent splash creates the duotone/offset aesthetic seen in the reference image
// We use the project's brand-accent color to match the yellow/gold theme from the image
const AccentSplash = () => (
  <svg 
    className="absolute -right-1 -top-1 w-7 h-7 text-brand-accent/90 z-0 transform rotate-12" 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      fill="currentColor" 
      d="M45.7,-76.4C58.9,-69.2,69.2,-55.3,77.4,-40.4C85.6,-25.5,91.7,-9.6,90.4,5.9C89.1,21.4,80.4,36.5,70,49.1C59.6,61.7,47.5,71.8,33.5,78.2C19.5,84.6,3.6,87.3,-11.1,84.5C-25.8,81.7,-39.3,73.4,-51.2,63.1C-63.1,52.8,-73.4,40.5,-79.8,26.2C-86.2,11.9,-88.7,-4.4,-84.6,-19.1C-80.5,-33.8,-69.8,-46.9,-56.6,-54.6C-43.4,-62.3,-27.7,-64.6,-13.2,-68.9C1.3,-73.2,16.8,-79.5,32.5,-83.6C48.2,-87.7,64.1,-89.6,45.7,-76.4Z" 
      transform="translate(50 50)" 
    />
  </svg>
);

const features = [
  {
    icon: <Wheat className="w-9 h-9 text-brand-darkest relative z-10" strokeWidth={1.5} />,
    title: "Healthy Food",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    cta: "Make a donation",
    href: "/donate"
  },
  {
    icon: <Backpack className="w-9 h-9 text-brand-darkest relative z-10" strokeWidth={1.5} />,
    title: "Education",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    cta: "Make a donation",
    href: "/donate"
  },
  {
    icon: <BriefcaseMedical className="w-9 h-9 text-brand-darkest relative z-10" strokeWidth={1.5} />,
    title: "Medical",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    cta: "Make a donation",
    href: "/donate"
  },
  {
    icon: <Droplet className="w-9 h-9 text-brand-darkest relative z-10" strokeWidth={1.5} />,
    title: "Pure Water",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    cta: "Make a donation",
    href: "/donate"
  },
  {
    icon: <HeartHandshake className="w-9 h-9 text-brand-darkest relative z-10" strokeWidth={1.5} />,
    title: "Love & Care",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    cta: "Learn & Participate",
    href: "/participate"
  },
  {
    icon: <Tent className="w-9 h-9 text-brand-darkest relative z-10" strokeWidth={1.5} />,
    title: "Travel Activities",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    cta: "Make a donation",
    href: "/donate"
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
                  <AccentSplash />
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-brand-darkest mb-4 font-serif tracking-tight">
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
