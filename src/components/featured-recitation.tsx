"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RecitationItem {
  id: string;
  title: string;
}

const basePlaylist: RecitationItem[] = [
  {
    id: "ugI4-2Xphz0",
    title: "Surah Ar-Rahman",
  },
  {
    id: "Y2W-18o9sok",
    title: "Surah Al-Kahf",
  },
  {
    id: "WfSPDEwlICc",
    title: "Surah Yaseen",
  },
  ...[
    'xfuG8nqHo7U', 'STrsMqNvyMY', 'xorIoiSyGS4', 'CFwxRPm_HlM',
    '-PI351JuCxM', 'eET3a839dcs', '_HSRHtLSD6U', 'dISRyIsI9QY',
    'Jsj0m7f0ahs', '8on9mAcnvww', 'gFP6gJIS46s', 'I2j-SS_HcnU',
    'XSF6jmhR3Pg', 'ZxOONpOYV2U', 'sSdANoEYGzc', 'rWS3hmSm6tg',
    'uYH8TjwDi9g', '1sMjJos3Rhc'
  ].reverse().map((id, index) => ({
    id,
    title: `Masjidul Bayaan Recitation ${index + 1}`,
  })),
];

export function FeaturedRecitation() {
  const [activePlaylist, setActivePlaylist] = useState<RecitationItem[]>(basePlaylist);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch dynamic playlist updates from YouTube API if available
  useEffect(() => {
    fetch('/api/youtube')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const existingIds = new Set(basePlaylist.map((v) => v.id));
          const newVideos = data.filter((v: RecitationItem) => v.id && !existingIds.has(v.id));
          if (newVideos.length > 0) {
            setActivePlaylist([...newVideos, ...basePlaylist]);
          }
        }
      })
      .catch((err) => console.error("Error fetching recitation feed:", err));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activePlaylist.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activePlaylist.length) % activePlaylist.length);
  };

  const currentVideo = activePlaylist[currentIndex] || activePlaylist[0];

  return (
    <section id="recitations" className="w-full bg-brand-darkest text-brand-text-light py-10 md:py-14 px-4 sm:px-6 lg:px-8 font-sans scroll-mt-24">
      <div className="max-w-3xl mx-auto flex flex-col space-y-5">
        
        {/* Clean, editorial header */}
        <div className="flex flex-col items-center text-center space-y-1.5">
          <span className="text-brand-accent uppercase tracking-[0.22em] text-[11px] font-semibold">
            Masjidul Bayaan • Tamale
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
            Featured Recitation
          </h2>
          <p className="text-brand-text-light/60 text-xs md:text-sm max-w-md leading-relaxed">
            Heart-soothing Quranic recitations and prayer recordings by Ya'kub bin Abdul Rahman.
          </p>
        </div>

        {/* Minimalist 16:9 Video Player (Compact) */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-xl border border-white/10">
          <iframe
            key={currentVideo.id}
            src={`https://www.youtube.com/embed/${currentVideo.id}?rel=0&modestbranding=1`}
            title={currentVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Understated Control Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10">
          {/* Current Track Info */}
          <div className="flex flex-col text-center sm:text-left min-w-0">
            <span className="text-brand-accent text-[11px] font-semibold uppercase tracking-widest mb-0.5">
              Recitation {String(currentIndex + 1).padStart(2, "0")} / {String(activePlaylist.length).padStart(2, "0")}
            </span>
            <h3 className="text-white font-serif text-base md:text-lg font-medium truncate max-w-sm">
              {currentVideo.title}
            </h3>
          </div>

          {/* Quick Select & Prev/Next Controls */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center sm:justify-end">
            {/* Minimal playlist selector dropdown */}
            <select
              value={currentIndex}
              onChange={(e) => setCurrentIndex(Number(e.target.value))}
              aria-label="Select recitation"
              className="bg-white/5 text-white/80 border border-white/10 hover:border-white/20 rounded-lg px-2.5 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-brand-accent transition-colors max-w-[170px] truncate cursor-pointer"
            >
              {activePlaylist.map((item, idx) => (
                <option key={item.id} value={idx} className="bg-brand-darkest text-white">
                  {idx + 1}. {item.title}
                </option>
              ))}
            </select>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Recitation"
              className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all focus:outline-none"
              title="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next Recitation"
              className="p-2 rounded-lg bg-brand-accent hover:bg-[#b0784a] text-[#051810] font-semibold transition-all focus:outline-none shadow-sm"
              title="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
