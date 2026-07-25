"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import WaveSurfer from "wavesurfer.js";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, ListMusic, Shuffle, Repeat } from "lucide-react";

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
      url: PLAYLIST[currentTrackIndex].url,
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

  // Load new track when index changes
  useEffect(() => {
    const ws = waveSurferRef.current;
    if (ws) {
      ws.load(PLAYLIST[currentTrackIndex].url);
      if (isPlaying) {
        ws.once("ready", () => {
          ws.play();
        });
      }
    }
  }, [currentTrackIndex]);

  // Handle track finish
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

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-[#051810]/80 backdrop-blur-2xl border-t border-white/5 py-3 px-4 md:px-8 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4 md:gap-8">
        
        {/* Left: Info */}
        <div className="flex items-center gap-4 min-w-[200px] md:min-w-[280px]">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden flex-shrink-0 bg-white/10 shadow-lg">
             <img src={track.image} alt={track.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-white font-bold text-sm md:text-base leading-tight truncate max-w-[150px] md:max-w-[200px]" title={track.title}>
              {track.title}
            </h4>
            <p className="text-brand-text-light/60 text-xs md:text-sm truncate max-w-[150px] md:max-w-[200px] mt-0.5" title={track.artist}>
              {track.artist}
            </p>
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
          <button 
            onClick={toggleShuffle} 
            className={`transition-colors hidden md:block ${isShuffle ? 'text-brand-accent' : 'text-white/40 hover:text-white'}`}
          >
            <Shuffle className="w-4 h-4" />
          </button>
          
          <button onClick={handlePrev} className="text-white/80 hover:text-white transition-colors">
            <SkipBack className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
          </button>
          
          <button 
            onClick={togglePlay}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-brand-darkest rounded-full hover:scale-105 transition-transform shadow-[0_4px_15px_rgba(255,255,255,0.15)]"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
            ) : (
              <Play className="w-4 h-4 md:w-5 md:h-5 ml-1" fill="currentColor" />
            )}
          </button>
          
          <button onClick={handleNext} className="text-white/80 hover:text-white transition-colors">
            <SkipForward className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
          </button>
          
          <button 
            onClick={toggleRepeat} 
            className={`transition-colors hidden md:block ${isRepeat ? 'text-brand-accent' : 'text-white/40 hover:text-white'}`}
          >
            <Repeat className="w-4 h-4" />
          </button>
        </div>

        {/* Right Center: Waveform */}
        <div className="hidden lg:flex flex-grow items-center gap-4 px-6 max-w-2xl mx-auto">
           <span className="text-[11px] font-bold tracking-widest text-white/40 tabular-nums">{currentTime}</span>
           <div className="flex-grow cursor-pointer" ref={containerRef}></div>
           <span className="text-[11px] font-bold tracking-widest text-white/40 tabular-nums">{duration}</span>
        </div>

        {/* Right End: Volume & Misc */}
        <div className="hidden md:flex items-center gap-6 flex-shrink-0 min-w-[120px] justify-end text-white/40">
          <button onClick={toggleMute} className="hover:text-white transition-colors">
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <button className="hover:text-white transition-colors">
            <ListMusic className="w-5 h-5" />
          </button>
        </div>
        
      </div>
    </div>
  );
}
