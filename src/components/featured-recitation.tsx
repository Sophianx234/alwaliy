"use client";

import { useState, useEffect, useRef } from "react";
import { 
  SkipForward, SkipBack, Lightbulb, Repeat, Shuffle, 
  BookOpen, Share2, Heart, Maximize, Minimize, Check, X, ListMusic, ChevronDown 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const playlist = [
   ...[
    'xfuG8nqHo7U', 'STrsMqNvyMY', 'xorIoiSyGS4', 'CFwxRPm_HlM',
    '-PI351JuCxM', 'eET3a839dcs', '_HSRHtLSD6U', 'dISRyIsI9QY',
    'Jsj0m7f0ahs', '8on9mAcnvww', 'gFP6gJIS46s', 'I2j-SS_HcnU',
    'XSF6jmhR3Pg', 'ZxOONpOYV2U', 'sSdANoEYGzc', 'rWS3hmSm6tg',
    'uYH8TjwDi9g', '1sMjJos3Rhc'
  ].reverse().map((id, index) => ({
    id,
    title: `Yaqub Alwaliy Recitation ${index + 1}`,
    description: "Experience the profound beauty of this recitation by Yaqub Alwaliy.",
    translation: "A beautiful recitation from the channel of Yaqub Alwaliy. Reflect upon the verses and find peace in the remembrance of Allah."
  })),
  {
    id: "ugI4-2Xphz0", 
    title: "Surah Ar-Rahman",
    description: "The Most Merciful - A heart-soothing recitation that brings peace to the soul.",
    translation: "The Most Merciful. Taught the Qur'an, Created man, [And] taught him eloquence. The sun and the moon [move] by precise calculation, And the stars and trees prostrate..."
  },
  {
    id: "Y2W-18o9sok", 
    title: "Surah Al-Kahf",
    description: "The Cave - Recommended Friday recitation for spiritual protection and light.",
    translation: "All praise is due to Allah, who has sent down upon His Servant the Book and has not made therein any deviance. [He has made it] straight, to warn of severe punishment from Him and to give good tidings to the believers who do righteous deeds that they will have a good reward..."
  },
  {
    id: "WfSPDEwlICc", 
    title: "Surah Yaseen",
    description: "The Heart of the Quran - Profound verses to reflect upon during the evening.",
    translation: "Ya, Seen. By the wise Qur'an. Indeed you, [O Muhammad], are from among the messengers, On a straight path. [This is] a revelation of the Exalted in Might, the Merciful..."
  },
 
];

export function FeaturedRecitation() {
  const [activePlaylist, setActivePlaylist] = useState(playlist);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightOff, setIsLightOff] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showTafsir, setShowTafsir] = useState(false);
  const [showPlaylistPopover, setShowPlaylistPopover] = useState(false);
  const [copied, setCopied] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const playlistRef = useRef<HTMLDivElement>(null);
  const playlistBtnRef = useRef<HTMLButtonElement>(null);

  // Close playlist when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showPlaylistPopover &&
        playlistRef.current &&
        !playlistRef.current.contains(event.target as Node) &&
        playlistBtnRef.current &&
        !playlistBtnRef.current.contains(event.target as Node)
      ) {
        setShowPlaylistPopover(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPlaylistPopover]);

  // Load favorites from local storage to avoid hydration mismatch
  useEffect(() => {
    const saved = localStorage.getItem("alwaliy-favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  // Fetch dynamic playlist updates from the background API
  useEffect(() => {
    fetch('/api/youtube')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          const existingIds = new Set(playlist.map(v => v.id));
          const newVideos = data.filter((v: any) => !existingIds.has(v.id));
          if (newVideos.length > 0) {
            setActivePlaylist([...newVideos, ...playlist]);
          }
        }
      })
      .catch(console.error);
  }, []);

  const toggleFavorite = () => {
    const currentId = activePlaylist[currentIndex].id;
    setFavorites(prev => {
      const next = prev.includes(currentId) ? prev.filter(id => id !== currentId) : [...prev, currentId];
      localStorage.setItem("alwaliy-favorites", JSON.stringify(next));
      return next;
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNext = () => {
    if (isShuffle) {
      let nextIndex = currentIndex;
      while(nextIndex === currentIndex && activePlaylist.length > 1) {
        nextIndex = Math.floor(Math.random() * activePlaylist.length);
      }
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex((prev) => (prev + 1) % activePlaylist.length);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activePlaylist.length) % activePlaylist.length);
  };

  const currentVideo = activePlaylist[currentIndex];
  const isFavorite = favorites.includes(currentVideo.id);
  const loopParams = isLooping ? `&loop=1&playlist=${currentVideo.id}` : "";

  return (
    <section className={`w-full bg-brand-darkest text-brand-text-light py-24 md:pt-32 md:pb-12 px-6 lg:px-24 overflow-hidden relative ${isLightOff || isFullScreen ? 'z-[100]' : ''}`}>
      
      {/* Lights Off Overlay */}
      <AnimatePresence>
        {isLightOff && !isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}
            className="fixed inset-0 bg-black/95 z-[90]"
            onClick={() => setIsLightOff(false)}
          />
        )}
      </AnimatePresence>

      {/* Tafsir / Translation Side Drawer */}
      <AnimatePresence>
        {showTafsir && (
          <motion.div
            data-lenis-prevent="true"
            initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ ease: "easeOut", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] bg-brand-darkest/95 backdrop-blur-2xl z-[150] p-8 md:p-12 border-l border-brand-primary overflow-y-auto shadow-2xl flex flex-col"
          >
            <button onClick={() => setShowTafsir(false)} className="self-end p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors mb-8">
              <X className="w-6 h-6" />
            </button>
            <h4 className="text-brand-accent font-sans font-bold tracking-[0.2em] uppercase text-xs mb-2">Translation</h4>
            <h3 className="text-3xl font-serif font-bold text-white mb-6">{currentVideo.title}</h3>
            <p className="text-brand-primary/80 font-medium text-lg leading-relaxed">{currentVideo.description}</p>
            <div className="w-12 h-px bg-brand-accent/30 my-8" />
            <p className="text-white/80 leading-loose text-lg font-serif italic">"{currentVideo.translation}"</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle cinematic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary opacity-20 blur-[120px] pointer-events-none rounded-full" />

      <div className={`max-w-[1400px] mx-auto flex flex-col space-y-12 relative ${isLightOff || isFullScreen ? 'z-[100]' : 'z-10'}`}>
        
        {/* Header */}
        <div className={`flex flex-col items-center text-center space-y-4 ${isFullScreen ? 'hidden' : ''}`}>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold tracking-tight leading-tight">
            Featured Recitation
          </h2>
        </div>

        {/* Main Video Area */}
        <div className={`${isFullScreen ? "fixed inset-0 z-[200] bg-black" : "relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl transition-all duration-700"}`}>
          
          {isFullScreen && (
            <button onClick={() => setIsFullScreen(false)} className="absolute top-6 right-6 md:top-10 md:right-10 z-[210] p-4 bg-black/40 hover:bg-black text-white rounded-full backdrop-blur-md border border-white/10 transition-all focus:outline-none group">
              <Minimize className="w-6 h-6 group-hover:scale-90 transition-transform" />
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=${isFullScreen ? 1 : 0}&rel=0&showinfo=0&modestbranding=1${loopParams}`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0 relative z-10"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Player Controls */}
        <div className={`flex flex-col xl:flex-row items-center justify-between gap-8 px-2 md:px-6 ${isFullScreen ? 'hidden' : ''}`}>
          
          {/* Left Side Options */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              onClick={() => setIsLightOff(!isLightOff)}
              className="group p-3 md:p-4 rounded-xl flex items-center gap-2 md:gap-3 bg-brand-primary/20 hover:bg-brand-primary/50 border border-brand-primary/40 transition-all focus:outline-none shadow-lg"
              aria-label={isLightOff ? "Turn on lights" : "Turn off lights"}
            >
              <Lightbulb className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${isLightOff ? 'text-brand-accent' : 'text-brand-text-light/80 group-hover:text-white'}`} />
              <span className="font-bold tracking-widest uppercase text-xs md:text-sm whitespace-nowrap">
                {isLightOff ? "Lights On" : "Lights Off"}
              </span>
            </button>

            <div className="flex items-center bg-brand-primary/10 border border-brand-primary/30 rounded-xl p-1 gap-1 shadow-lg relative">
              <button onClick={() => setIsFullScreen(true)} title="Focus Mode" className="p-3 rounded-lg hover:bg-brand-primary/50 text-white/60 hover:text-white transition-all">
                <Maximize className="w-5 h-5" />
              </button>
              <button onClick={() => setShowTafsir(true)} title="Read Translation" className={`p-3 rounded-lg transition-all ${showTafsir ? 'bg-brand-accent/20 text-brand-accent' : 'hover:bg-brand-primary/50 text-white/60 hover:text-white'}`}>
                <BookOpen className="w-5 h-5" />
              </button>
              <button onClick={toggleFavorite} title="Save to Favorites" className="p-3 rounded-lg hover:bg-brand-primary/50 text-white/60 hover:text-white transition-all">
                <Heart className={`w-5 h-5 transition-all ${isFavorite ? 'fill-brand-accent text-brand-accent' : ''}`} />
              </button>
              <button ref={playlistBtnRef} onClick={() => setShowPlaylistPopover(!showPlaylistPopover)} title="Playlist" className={`p-3 rounded-lg transition-all ${showPlaylistPopover ? 'bg-brand-accent/20 text-brand-accent' : 'hover:bg-brand-primary/50 text-white/60 hover:text-white'}`}>
                <ListMusic className="w-5 h-5" />
              </button>
              <button onClick={handleShare} title="Share" className="p-3 rounded-lg hover:bg-brand-primary/50 text-white/60 hover:text-white transition-all">
                {copied ? <Check className="w-5 h-5 text-green-400" /> : <Share2 className="w-5 h-5" />}
              </button>

              {/* Playlist Popover */}
              <AnimatePresence>
                {showPlaylistPopover && (
                  <motion.div 
                    ref={playlistRef as React.RefObject<HTMLDivElement>}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-[100%] left-0 mb-4 w-[320px] bg-[#051810]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[150] flex flex-col"
                  >
                    <div className="p-4 border-b border-white/10 shrink-0 flex items-center justify-between">
                      <h3 className="text-white font-bold tracking-widest uppercase text-xs">Playlist ({activePlaylist.length})</h3>
                      <button onClick={() => setShowPlaylistPopover(false)} className="text-white/50 hover:text-white"><X className="w-4 h-4" /></button>
                    </div>
                    <div data-lenis-prevent="true" className="max-h-64 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                      {activePlaylist.map((item, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => { setCurrentIndex(idx); setShowPlaylistPopover(false); }}
                          className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-white/5 transition-colors ${currentIndex === idx ? 'bg-white/5 border-l-2 border-brand-accent' : ''}`}
                        >
                          <div className="w-16 h-10 rounded-md overflow-hidden bg-black flex-shrink-0 relative">
                            <img src={`https://img.youtube.com/vi/${item.id}/mqdefault.jpg`} alt={item.title} className="w-full h-full object-cover opacity-80" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <h4 className={`text-sm font-bold truncate ${currentIndex === idx ? 'text-brand-accent' : 'text-white'}`}>
                              {item.title}
                            </h4>
                          </div>
                          {currentIndex === idx && (
                            <div className="ml-auto">
                              <ListMusic className="w-4 h-4 text-brand-accent animate-pulse" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="w-full py-1.5 flex justify-center bg-gradient-to-t from-[#051810] to-[#051810]/0 pointer-events-none border-t border-white/5 shrink-0 z-10 shadow-[0_-10px_20px_rgba(5,24,16,0.9)]">
                      <ChevronDown className="w-4 h-4 text-white/40 animate-bounce" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side Playback */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button onClick={() => setIsShuffle(!isShuffle)} title="Shuffle Playlist" className={`p-3 rounded-xl transition-all shadow-lg ${isShuffle ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/30' : 'bg-brand-primary/10 text-white/70 hover:bg-brand-primary/40 hover:text-white border border-brand-primary/30'}`}>
              <Shuffle className="w-5 h-5" />
            </button>
            
            <button onClick={handlePrev} className="group p-3 md:p-4 rounded-xl flex items-center gap-2 bg-brand-primary/20 hover:bg-brand-primary/50 border border-brand-primary/40 transition-all focus:outline-none shadow-lg">
              <SkipBack className="w-5 h-5 text-brand-text-light/80 group-hover:text-white" />
              <span className="hidden md:inline font-bold uppercase tracking-widest text-xs">Prev</span>
            </button>
            
            <button onClick={handleNext} className="group flex items-center rounded-xl gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-brand-accent hover:bg-[#b0784a] text-[#051810] transition-all focus:outline-none ">
              <span className="font-bold tracking-widest uppercase text-xs md:text-sm">Next</span>
              <SkipForward className="w-5 h-5 fill-current" />
            </button>

            <button onClick={() => setIsLooping(!isLooping)} title="Repeat Video" className={`p-3 rounded-xl transition-all shadow-lg ${isLooping ? 'bg-brand-accent/20 text-brand-accent border border-brand-accent/30' : 'bg-brand-primary/10 text-white/70 hover:bg-brand-primary/40 hover:text-white border border-brand-primary/30'}`}>
              <Repeat className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
