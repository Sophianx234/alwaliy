"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import WaveSurfer from "wavesurfer.js";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, ListMusic, Shuffle, Repeat, X, Disc } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const PLAYLIST = [
  {
    title: "Yakub Recitation",
    artist: "Beautiful Recitation",
    url: "/audios/yakub-1.mp3",
    image: "/imgs/h-1.jpeg"
  },
  {
    title: "Forgive Me (Vocals Only)",
    artist: "Nasheed",
    url: "/audios/05 - Forgive Me (Vocals Only - No Music).mp3",
    image: "/imgs/h-2.jpeg"
  }
];

export function AudioPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const waveSurferRef = useRef<WaveSurfer | null>(null);
  
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  
  const [isMuted, setIsMuted] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const track = PLAYLIST[currentTrackIndex];

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: 'rgba(255, 255, 255, 0.15)',
      progressColor: '#C88A58',
      barWidth: 3,
      barGap: 2,
      barRadius: 2,
      height: 40,
    });

    waveSurferRef.current = ws;

    ws.on("play", () => setIsPlaying(true));
    ws.on("pause", () => setIsPlaying(false));
    ws.on("audioprocess", () => {
      setCurrentTime(formatTime(ws.getCurrentTime()));
    });
    ws.on("ready", () => {
      setDuration(formatTime(ws.getDuration()));
    });

    return () => {
      ws.destroy();
    };
  }, []);

  useEffect(() => {
    const ws = waveSurferRef.current;
    if (ws) {
      const bypassUrl = `${PLAYLIST[currentTrackIndex].url}?play=1`;
      ws.load(bypassUrl);
      if (isPlaying) {
        ws.once("ready", () => {
          ws.play();
        });
      }
    }
  }, [currentTrackIndex]);

  const handleNext = useCallback(() => {
    if (isShuffle) {
      let nextIndex = Math.floor(Math.random() * PLAYLIST.length);
      if (nextIndex === currentTrackIndex && PLAYLIST.length > 1) {
        nextIndex = (nextIndex + 1) % PLAYLIST.length;
      }
      setCurrentTrackIndex(nextIndex);
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    }
  }, [isShuffle, currentTrackIndex]);

  useEffect(() => {
    const ws = waveSurferRef.current;
    if (!ws) return;

    const onFinish = () => {
      if (isRepeat) {
        ws.play();
      } else {
        handleNext();
        if (!isPlaying) {
          setIsPlaying(true);
        }
      }
    };

    ws.on("finish", onFinish);
    return () => {
      ws.un("finish", onFinish);
    };
  }, [isRepeat, isShuffle, currentTrackIndex, handleNext, isPlaying]);

  const togglePlay = () => {
    waveSurferRef.current?.playPause();
  };

  const handlePrev = useCallback(() => {
    if (waveSurferRef.current && waveSurferRef.current.getCurrentTime() > 3) {
      waveSurferRef.current.seekTo(0);
      return;
    }
    setCurrentTrackIndex((prev) => (prev === 0 ? PLAYLIST.length - 1 : prev - 1));
  }, []);

  const toggleMute = () => {
    const ws = waveSurferRef.current;
    if (ws) {
      ws.setMuted(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  const toggleRepeat = () => setIsRepeat(!isRepeat);
  const toggleShuffle = () => setIsShuffle(!isShuffle);
  const togglePlaylist = () => setShowPlaylist(!showPlaylist);

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setShowPlaylist(false);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none flex items-end">
      
      {/* Floating Mini Player Button (Shows when collapsed) */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.button
            initial={{ opacity: 0, x: -50, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.5 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            onClick={() => setIsExpanded(true)}
            className="pointer-events-auto absolute bottom-6 left-6 p-4 bg-brand-accent text-brand-darkest rounded-full  border border-white/20 hover:scale-105 active:scale-95 transition-transform z-50 group"
            title="Expand Player"
          >
            {isPlaying ? (
              <Disc className="w-4 h-4 animate-[spin_3s_linear_infinite]" />
            ) : (
              <Play className="w-4 h-4 " />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Expanded Player (Uses clipping mask to hide/show without unmounting) */}
      <motion.div
        className="pointer-events-auto w-full relative bg-[#051810]/95 backdrop-blur-3xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]"
        initial={false}
        animate={{
          clipPath: isExpanded ? "inset(-1000px 0px 0px 0px)" : "inset(-1000px 100% 0px 0px)",
          opacity: isExpanded ? 1 : 0,
          paddingTop: isScrolled ? "12px" : "24px",
          paddingBottom: isScrolled ? "12px" : "24px",
        }}
        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
      >
        <div className="w-full px-4 md:px-8">
          
          {/* Close Button */}
          <button 
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 md:right-4 w-7 h-7 bg-white/5 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors z-50"
            title="Collapse Player"
          >
            <X className="w-4 h-4" />
          </button>
          
          {/* Playlist Popover */}
          {showPlaylist && (
            <div className="absolute bottom-[100%] right-4 md:right-8 mb-4 w-72 md:w-80 bg-[#051810]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-40 transform transition-all">
              <div className="p-4 border-b border-white/10">
                <h3 className="text-white font-bold tracking-widest uppercase text-xs">Up Next</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {PLAYLIST.map((item, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => selectTrack(idx)}
                    className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-white/5 transition-colors ${currentTrackIndex === idx ? 'bg-white/5 border-l-2 border-brand-accent' : ''}`}
                  >
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-white/10 flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h4 className={`text-sm font-bold truncate ${currentTrackIndex === idx ? 'text-brand-accent' : 'text-white'}`}>
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-xs truncate">{item.artist}</p>
                    </div>
                    {currentTrackIndex === idx && isPlaying && (
                      <div className="ml-auto">
                        <ListMusic className="w-4 h-4 text-brand-accent animate-pulse" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 md:gap-8">
            <div className="flex items-center gap-4 min-w-[200px] md:min-w-[280px]">
              <motion.div 
                animate={{
                  width: isScrolled ? 48 : 72,
                  height: isScrolled ? 48 : 72
                }}
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                className="rounded-lg overflow-hidden flex-shrink-0 bg-white/10 shadow-lg"
              >
                <img src={track.image} alt={track.title} className="w-full h-full object-cover" />
              </motion.div>
              <div className="flex flex-col justify-center">
                <h4 className="text-white font-bold text-sm md:text-base leading-tight truncate max-w-[150px] md:max-w-[200px]" title={track.title}>{track.title}</h4>
                <p className="text-brand-text-light/60 text-xs md:text-sm truncate max-w-[150px] md:max-w-[200px] mt-0.5">{track.artist}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
              <button onClick={toggleShuffle} className={`transition-colors hidden md:block ${isShuffle ? 'text-brand-accent' : 'text-white/40 hover:text-white'}`}><Shuffle className="w-4 h-4" /></button>
              <button onClick={handlePrev} className="text-white/80 hover:text-white transition-colors"><SkipBack className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" /></button>
              
              <motion.button 
                onClick={togglePlay} 
                animate={{
                  width: isScrolled ? 44 : 56,
                  height: isScrolled ? 44 : 56,
                }}
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                className="flex items-center justify-center bg-white text-brand-darkest rounded-full  group"
              >
                <div className="group-hover:scale-105 group-active:scale-95 transition-transform flex items-center justify-center w-full h-full">
                  {isPlaying ? <Pause className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" /> : <Play className="w-4 h-4 md:w-5 md:h-5 ml-1" fill="currentColor" />}
                </div>
              </motion.button>
              
              <button onClick={handleNext} className="text-white/80 hover:text-white transition-colors"><SkipForward className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" /></button>
              <button onClick={toggleRepeat} className={`transition-colors hidden md:block ${isRepeat ? 'text-brand-accent' : 'text-white/40 hover:text-white'}`}><Repeat className="w-4 h-4" /></button>
            </div>

            <div className="hidden lg:flex flex-grow items-center gap-4 px-6 max-w-2xl mx-auto w-full min-w-[200px]">
              <span className="text-[11px] font-bold tracking-widest text-white/40 tabular-nums">{currentTime}</span>
              <div className="flex-grow cursor-pointer w-full" ref={containerRef}></div>
              <span className="text-[11px] font-bold tracking-widest text-white/40 tabular-nums">{duration}</span>
            </div>

            <div className="hidden md:flex items-center gap-6 flex-shrink-0 min-w-[120px] justify-end text-white/40">
              <button onClick={toggleMute} className="hover:text-white transition-colors">{isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}</button>
              <button onClick={togglePlaylist} className={`transition-colors ${showPlaylist ? 'text-brand-accent' : 'hover:text-white'}`}><ListMusic className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
