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
    image: "https://plus.unsplash.com/premium_photo-1678483063222-b9cbc116b371?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    image: "https://plus.unsplash.com/premium_photo-1677587536653-0d02efbb70ee?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    image: "https://images.unsplash.com/photo-1631432526080-5abd83dafc8a?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80"
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
    image: "https://images.unsplash.com/photo-1574246604907-db69e30ddb97?q=80&w=373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    image: "https://plus.unsplash.com/premium_photo-1679952779486-7e1cfaa46fb2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // image: "https://images.unsplash.com/photo-1579294970425-4c070f44da60?auto=format&fit=crop&w=800&q=80"
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
    image: "https://plus.unsplash.com/premium_photo-1678563876224-dbb520ffef17?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const categoryColors: Record<string, string> = {
  "Quranic Studies": "bg-purple-100 text-purple-700",
  "Prophetic Traditions": "bg-blue-100 text-blue-700",
  "History": "bg-indigo-100 text-indigo-700",
  "Theology": "bg-sky-100 text-sky-700",
  "Language": "bg-violet-100 text-violet-700",
};

export function CoursesSection() {
  return (
    <section className="w-full py-24 lg:py-32 px-6 bg-[#F9FAFB] font-sans">
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
            const badgeColor = categoryColors[course.category] || "bg-indigo-100 text-indigo-700";

            return (
              <div 
                key={i}
                className="bg-white rounded-[24px] p-5 border border-[#F1F1F3] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full cursor-pointer group"
              >
                {/* Top Image Box */}
                <div className="relative w-full h-56 bg-[#F3F4F6] rounded-[16px] overflow-hidden flex items-center justify-center mb-5">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover  transition-transform duration-700 ease-out" 
                  />
                  
                  {/* Play Button Overlay */}
                  
                </div>

                {/* Price */}
                <div className="text-black font-bold text-[22px] mb-3">
                  {course.price}
                </div>

                {/* Title */}
                <h3 className="text-[#1D1D21] text-lg md:text-[20px] font-bold leading-[1.3] mb-5 line-clamp-2 min-h-[46px] md:min-h-[52px]">
                  {course.title}
                </h3>

                <div className="flex flex-col flex-grow justify-end">
                  {/* Meta Data */}
                  <div className="flex flex-wrap items-center gap-5 text-[#808080] text-[14px] mb-4 font-medium">
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

                  {/* Category Badge (Moved below metadata) */}
                  <div className="mb-5 flex items-start">
                    <span className={`${badgeColor} text-[12px] font-bold px-3 py-1.5 rounded-lg tracking-wide `}>
                      {course.category}
                    </span>
                  </div>
                  
                  {/* Divider */}
                  <div className="border-t border-[#F1F1F3] w-full mb-5"></div>

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
                    <div className="text-[#1D1D21] font-bold text-[15px] flex items-center gap-1.5 transition-colors">
                      Enroll Now <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                    </div>
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
