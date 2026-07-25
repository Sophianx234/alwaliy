import { Play, PlayCircle, Clock, BarChart2, ArrowRight } from "lucide-react";

const courses = [
  {
    category: "Quranic Studies",
    title: "Basic Fundamentals of Quran Memorization",
    price: "$25.00",
    lessons: "5 Lessons",
    hours: "3h 30m",
    level: "Beginner",
    instructor: "Imam Ahmad",
    instructorImage: "/imgs/h-2.jpeg",
    image: "/imgs/h-1.jpeg"
  },
  {
    category: "Prophetic Traditions",
    title: "Understanding Context in Hadith Studies",
    price: "Free",
    lessons: "12 Lessons",
    hours: "8h 15m",
    level: "Intermediate",
    instructor: "Dr. Fatima S.",
    instructorImage: "/imgs/h-3.jpeg",
    image: "/imgs/h-2.jpeg"
  },
  {
    category: "History",
    title: "Life and Struggles of the Prophet (ﷺ)",
    price: "$45.00",
    lessons: "24 Lessons",
    hours: "16h 00m",
    level: "Beginner",
    instructor: "Imam Omar K.",
    instructorImage: "/imgs/h-4.jpeg",
    image: "/imgs/h-3.jpeg"
  },
  {
    category: "Theology",
    title: "Foundations of Islamic Creed (Aqeedah)",
    price: "Free",
    lessons: "8 Lessons",
    hours: "4h 30m",
    level: "Beginner",
    instructor: "Shaykh Zaid T.",
    instructorImage: "/imgs/h-5.jpeg",
    image: "/imgs/h-4.jpeg"
  },
  {
    category: "Quranic Studies",
    title: "Advanced Rules of Tajweed Mastery",
    price: "$60.00",
    lessons: "32 Lessons",
    hours: "24h 00m",
    level: "Advanced",
    instructor: "Shaykh Ahmad",
    instructorImage: "/imgs/h-2.jpeg",
    image: "/imgs/h-5.jpeg"
  },
  {
    category: "Language",
    title: "Comprehensive Classical Arabic Grammar",
    price: "$85.00",
    lessons: "40 Lessons",
    hours: "30h 45m",
    level: "All Levels",
    instructor: "Dr. Aisha M.",
    instructorImage: "/imgs/h-3.jpeg",
    image: "/imgs/h-5x.jpeg"
  }
];

export function CoursesSection() {
  return (
    <section className="w-full py-24 lg:py-32 px-6 bg-[#f7f6f2] font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col space-y-16">
        
        {/* Header */}
        <div className="flex flex-col text-center space-y-4 max-w-2xl mx-auto mb-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1D1D21] tracking-tight">
            Available Courses
          </h2>
          
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => {
            return (
              <div 
                key={i}
                className="bg-white rounded-[24px] p-5 border border-[#F1F1F3] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col cursor-pointer group"
              >
                {/* Top Image Box */}
                <div className="relative w-full h-56 bg-[#F3F4F6] rounded-[16px] overflow-hidden flex items-center justify-center mb-5">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-[#1D1D21] ml-1.5" fill="currentColor" />
                    </div>
                  </div>

                  
                </div>

                {/* Price */}
                <div className="text-black font-bold text-[22px] mb-3">
                  {course.price}
                </div>

                {/* Title */}
                <h3 className="text-[#1D1D21] text-lg font-bold leading-[1.3] mb-5">
                  {course.title}
                </h3>

                {/* Meta Data */}
                <div className="flex flex-wrap items-center gap-5 text-[#808080] text-[14px] mb-6 font-medium">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-500 h-32 text-[12px] font-bold px-3 py-1.5 rounded-lg tracking-wide">
                      {course.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PlayCircle className="w-[18px] h-[18px]" />
                    <span>{course.lessons}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-[18px] h-[18px]" />
                    <span>{course.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart2 className="w-[18px] h-[18px]" />
                    <span>{course.level}</span>
                  </div>
                </div>
                

                {/* Divider */}
                <div className="border-t border-[#F1F1F3] w-full mt-auto mb-5"></div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  {/* Instructor */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-[#F3F4F6] border border-[#F1F1F3]">
                      <img src={course.instructorImage} alt={course.instructor} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-[#1D1D21] text-[15px]">
                      {course.instructor}
                    </span>
                  </div>
                  
                  {/* Action */}
                  <div className="text-[#1D1D21] font-bold text-[15px] flex items-center gap-1.5  transition-colors">
                    Enroll Now <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
