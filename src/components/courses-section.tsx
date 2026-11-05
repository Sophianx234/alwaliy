"use client";

import { useState, useEffect } from "react";
import { BookOpen, BarChart2, ArrowRight, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "233550055309";

const courses = [
  {
    category: "Tajweed",
    title: "Tajweed: Beginner Level",
    description: "A comprehensive course on the fundamentals of tajweed, focusing on correct articulation points (Makharij), essential rules, and foundational pronunciation.",
    price: "Open for Enrollment",
    level: "Beginner",
    format: "Core Fundamentals",
    instructor: "Ya'kub bin Abdul Rahman",
    instructorImage: "/imgs/y-1.jpg",
    image: "https://plus.unsplash.com/premium_photo-1678483063222-b9cbc116b371?q=80&w=600&auto=format&fit=crop"
  },
  {
    category: "Tajweed",
    title: "Tajweed: Mastery Level",
    description: "For students who want to deepen their knowledge of tajweed through the memorisation of classical texts (Matn) and an introduction to the different styles of recitation.",
    price: "Open for Enrollment",
    level: "Mastery",
    format: "Classical Texts & Styles",
    instructor: "Ya'kub bin Abdul Rahman",
    instructorImage: "/imgs/y-1.jpg",
    image: "https://plus.unsplash.com/premium_photo-1679952779486-7e1cfaa46fb2?q=80&w=600&auto=format&fit=crop"
  },
  {
    category: "Hifdh",
    title: "Hifdhul Quran",
    description: "Structured Quran memorisation program designed for both beginners starting their journey and continuing students seeking disciplined progression.",
    price: "Open for Enrollment",
    level: "All Levels",
    format: "Beginner & Continuing",
    instructor: "Ya'kub bin Abdul Rahman",
    instructorImage: "/imgs/y-1.jpg",
    image: "https://images.unsplash.com/photo-1631432526080-5abd83dafc8a?q=80&w=600&auto=format&fit=crop"
  },
  {
    category: "Muraaja’ah",
    title: "Muraaja’ah Sessions",
    description: "Dedicated revision sessions for students who have finished memorising and want to firmly maintain and solidify their hifdh through tested and proven retention techniques.",
    price: "Open for Enrollment",
    level: "Huffadh",
    format: "Retention & Solidification",
    instructor: "Ya'kub bin Abdul Rahman",
    instructorImage: "/imgs/y-1.jpg",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=600&auto=format&fit=crop"
  }
];

const categoryColors: Record<string, string> = {
  "Tajweed": "bg-amber-100 text-amber-800 border border-amber-200/60",
  "Hifdh": "bg-emerald-100 text-emerald-800 border border-emerald-200/60",
  "Muraaja’ah": "bg-blue-100 text-blue-800 border border-blue-200/60",
};

const experienceOptions = [
  "Complete Beginner (Learning alphabet & sound articulation)",
  "Basic Reader (Can read Arabic, need foundational Tajweed)",
  "Fluent Reader (Seeking Tajweed Mastery & Classical Matn)",
  "Starting Quran Memorisation (Beginner Hifdh)",
  "Continuing Quran Memorisation (In-progress)",
  "Hafidh / Hafidha (Looking for Muraaja’ah & Retention)"
];

const scheduleOptions = [
  "Morning sessions (Weekdays)",
  "Evening / After Asr (Weekdays)",
  "Weekends only (Saturday - Sunday)",
  "Flexible / Any available slot"
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function CoursesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(courses[0].title);
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState(experienceOptions[0]);
  const [schedule, setSchedule] = useState(scheduleOptions[0]);
  const [note, setNote] = useState("");

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleOpenModal = (courseTitle: string) => {
    setSelectedCourse(courseTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return;

    const message = `As-salamu alaykum Ustadh Ya'kub,

I would like to enroll in your course:

📖 Course: ${selectedCourse}
👤 Name: ${fullName.trim()}
📍 Location: ${location.trim() || "Not specified"}
📊 Background: ${experience}
⏰ Preferred Schedule: ${schedule}${note.trim() ? `\n📝 Note: ${note.trim()}` : ""}

Looking forward to hearing from you. Jazakallahu Khayran!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsModalOpen(false);
  };

  return (
    <section id="courses" className="w-full py-20 lg:py-28 px-6 bg-[#F9FAFB] font-sans relative scroll-mt-24">
      <div className="max-w-[1400px] mx-auto flex flex-col space-y-12">
        
        {/* Header */}
        <div className="flex flex-col text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-brand-accent uppercase tracking-[0.25em] text-xs font-semibold">
            Study with Ya'kub bin Abdul Rahman
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1D1D21] tracking-tight">
            Available Courses
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base leading-relaxed">
            Tailored programs designed to build a strong foundation in Tajweed, guide complete memorisation, and firmly preserve the Book of Allah.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {courses.map((course, i) => {
            const badgeColor = categoryColors[course.category] || "bg-indigo-100 text-indigo-700";

            return (
              <div 
                key={i}
                className="bg-white rounded-[24px] p-5 border border-[#F1F1F3] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full group"
              >
                {/* Top Image Box */}
                <div className="relative w-full h-48 bg-[#F3F4F6] rounded-[16px] overflow-hidden flex items-center justify-center mb-4">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  
                  {/* Category Pill on top of image */}
                  <div className="absolute top-3 left-3">
                    <span className={`${badgeColor} text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wide shadow-sm`}>
                      {course.category}
                    </span>
                  </div>
                </div>

                {/* Status / Enrollment Indicator */}
                <div className="text-brand-accent font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{course.price}</span>
                </div>

                {/* Title */}
                <h3 className="text-[#1D1D21] text-lg font-bold leading-snug mb-2 group-hover:text-brand-accent transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                  {course.description}
                </p>

                {/* Meta Data */}
                <div className="flex flex-wrap items-center gap-4 text-[#808080] text-[13px] pt-3 pb-4 border-t border-[#F1F1F3] font-medium">
                  <div className="flex items-center gap-1.5">
                    <BarChart2 className="w-4 h-4 text-brand-accent" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-brand-accent" />
                    <span className="truncate max-w-[130px]">{course.format}</span>
                  </div>
                </div>

                {/* Footer with Instructor & Action Button */}
                <div className="border-t border-[#F1F1F3] pt-4 mt-auto flex items-center justify-between">
                  {/* Instructor */}
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-[#F3F4F6] border border-[#F1F1F3] shrink-0">
                      <img src={course.instructorImage} alt={course.instructor} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-semibold text-[#1D1D21] text-xs truncate">
                      {course.instructor}
                    </span>
                  </div>
                  
                  {/* Action Button */}
                  <button 
                    onClick={() => handleOpenModal(course.title)}
                    className="text-[#1D1D21] group-hover:text-brand-accent font-bold text-xs flex items-center gap-1 transition-colors shrink-0 ml-2 focus:outline-none"
                    aria-label={`Enroll in ${course.title}`}
                  >
                    Enroll <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Enrollment Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div 
            data-lenis-prevent="true"
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 overscroll-contain"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              data-lenis-prevent="true"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto text-left font-sans border border-gray-100 z-10 overscroll-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-6">
                <span className="text-brand-accent uppercase tracking-widest text-xs font-semibold">
                  Course Registration
                </span>
                <h3 className="text-2xl font-serif font-bold text-brand-darkest mt-1">
                  Enroll with Ustadh Ya'kub
                </h3>
                <p className="text-gray-500 text-xs md:text-sm mt-1">
                  Fill in your details below. You will be redirected to WhatsApp with your pre-filled registration message.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Course Selection */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Selected Course
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all cursor-pointer font-medium"
                  >
                    {courses.map((c) => (
                      <option key={c.title} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Abdul-Rahman Alhassan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                  />
                </div>

                {/* Location / City */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    City / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tamale / Accra / Online"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                  />
                </div>

                {/* Current Experience */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Current Level / Background
                  </label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all cursor-pointer"
                  >
                    {experienceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Schedule */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Preferred Schedule
                  </label>
                  <select
                    value={schedule}
                    onChange={(e) => setSchedule(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all cursor-pointer"
                  >
                    {scheduleOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Optional Note */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Note or Questions (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any specific goals or questions for Ustadh Ya'kub..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all resize-none"
                  />
                </div>

                {/* Submit to WhatsApp */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer text-sm"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                    <span>Proceed to WhatsApp (+233 55 005 5309)</span>
                  </button>
                  <p className="text-center text-[11px] text-gray-400 mt-2">
                    Opens WhatsApp with your pre-filled registration details.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
