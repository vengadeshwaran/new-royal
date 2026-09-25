import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenQuote: (item?: string) => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const videos = [
    '/hero-video.mp4',
    '/hero-video1.mp4',
    '/hero-video2.mp4'
  ];

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(e => console.log('Video play interrupted:', e));
    }
  }, [currentVideoIndex]);

  const handleScrollToNext = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#021526]">
      {/* 1. BACKGROUND VIDEO LAYER (Using the Attached Video File) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#021526]">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          className="absolute inset-0 h-full w-full object-cover object-center scale-100 transition-opacity duration-1000"
          poster="/images/photo-1518241353330-0f7941c2d9b5.jpg"
        >
          {/* Primary attached video paths */}
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>

        {/* 2. CINEMATIC OVERLAY TREATMENT: Subtle dark navy gradient that keeps the vessel crisp and visible */}
        {/* Soft overall darkening to ground contrast */}
        <div className="absolute inset-0 bg-[#021526]/30 mix-blend-multiply pointer-events-none" />

        {/* Left directional gradient providing comfortable readability for foreground typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/90 via-[#021526]/55 to-transparent w-full lg:w-4/5 pointer-events-none" />

        {/* Top subtle vignette for seamless header integration */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#021526]/80 via-[#021526]/30 to-transparent pointer-events-none" />

        {/* Bottom smooth transition gradient into the following section */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#021526] via-[#021526]/40 to-transparent pointer-events-none" />
      </div>

      {/* 3. HERO FOREGROUND CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center pt-32 sm:pt-36 pb-20">
        <div className="max-w-3xl lg:max-w-4xl">
          {/* Eyebrow / Category Tag */}
          <div className="animate-hero-slide-1 inline-flex items-center gap-2.5 mb-5 sm:mb-6">
            <span className="h-px w-8 sm:w-10 bg-[#38BDF8]" />
            <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#38BDF8] uppercase">
              Maritime & Offshore Solutions
            </span>
          </div>

          {/* Main Headline: Clean, Bold, Corporate Marine Engineering Typographic Presence */}
          <h1 className="animate-hero-slide-2 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance mb-6 sm:mb-7 drop-shadow-sm">
            Engineering the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-sky-300">
              Marine Technology
            </span>
          </h1>

          {/* Supporting Text: Concise and Authoritative */}
          <p className="animate-hero-slide-3 text-base sm:text-lg md:text-xl text-slate-200/90 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10 drop-shadow-sm">
            Delivering advanced marine engineering solutions for offshore, energy, and maritime industries worldwide.
          </p>

          {/* CTAs: Premium Corporate Action Buttons */}
          <div className="animate-hero-slide-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreServices}
              className="cursor-pointer group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0B5CAB] hover:bg-[#1677D2] active:scale-95 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#0B5CAB]/30 whitespace-nowrap"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4 text-sky-200 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="#about"
              onClick={handleScrollToNext}
              className="cursor-pointer group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-white/35 hover:border-white hover:bg-white/10 active:scale-95 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-xs transition-all duration-300 whitespace-nowrap"
            >
              <span>Discover More</span>
              <ChevronDown className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* 4. MINIMAL SCROLL INDICATOR */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 sm:pb-10 flex items-center justify-between">
        <a
          href="#about"
          onClick={handleScrollToNext}
          className="group inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors duration-300 cursor-pointer"
          aria-label="Scroll to discover more content"
        >
          <div className="w-5 h-8 rounded-full border border-white/30 group-hover:border-white/60 flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-[#38BDF8] animate-scroll-mouse" />
          </div>
          <span className="font-mono text-[11px] sm:text-xs font-medium tracking-[0.2em] uppercase text-slate-300/80 group-hover:text-white transition-colors">
            Scroll to explore
          </span>
        </a>

        {/* Minimal Corporate Telemetry / Location Stamp */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-slate-400/80">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="tracking-wider uppercase">Global Marine Operations</span>
        </div>
      </div>
    </section>
  );
};
