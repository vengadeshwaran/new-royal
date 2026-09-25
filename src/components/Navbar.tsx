import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Anchor,
  ArrowUpRight,
  Menu,
  PhoneCall
} from 'lucide-react';
import { CorporateSideDrawer } from './CorporateSideDrawer';

interface NavbarProps {
  onOpenQuote: (prefillProductOrService?: string) => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
            ? 'bg-[#021526]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl text-white'
            : 'bg-[#021526]/40 backdrop-blur-xs border-b border-white/10 py-4 sm:py-5 text-white'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left Zone: Corporate Side Menu Trigger & Brand Identity */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Left Side Menu Pop-up Trigger Button */}
              <button
                onClick={() => setSideMenuOpen(true)}
                className="flex items-center gap-2.5 px-3.5 py-2 text-xs font-mono font-bold tracking-wider rounded-xl transition-all duration-200 cursor-pointer shadow-xs group text-white hover:text-sky-300 bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20"
                aria-label="Open corporate side navigation menu"
                title="Open Corporate Navigation Drawer"
              >
                <div className="flex flex-col gap-1 w-4 shrink-0">
                  <span className="h-0.5 w-4 bg-white group-hover:bg-sky-300 transition-colors rounded-full" />
                  <span className="h-0.5 w-2.5 bg-[#38BDF8] group-hover:w-4 transition-all duration-200 rounded-full" />
                  <span className="h-0.5 w-4 bg-white group-hover:bg-sky-300 transition-colors rounded-full" />
                </div>
                <span className="font-bold text-[11px] sm:text-xs uppercase tracking-wider text-white group-hover:text-sky-300">
                  MENU
                </span>
              </button>

              {/* Logo Wordmark */}
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2.5 group select-none"
                aria-label="Swalf Group Home"
              >
                <div className="w-9 h-9 rounded-xl bg-transparent flex items-center justify-center text-white transition-colors group-hover:bg-[#1677D2] shadow-sm shrink-0">
                  <svg fill="#ffffffff" className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480.156 480.156" xml:space="preserve"><g id="XMLID_187_"><path id="XMLID_190_" d="M297.213,16.538c0-9.13-7.408-16.538-16.538-16.538h-81.191c-9.132,0-16.54,7.408-16.54,16.538v23.557
		h114.27V16.538z"></path><path id="XMLID_189_" d="M251.824,148.937l114.709,45.153v-32.655c0-19.428-15.757-35.178-35.177-35.178h-34.144V72.17h-114.27
		v54.087h-34.143c-19.421,0-35.178,15.749-35.178,35.178v32.655l114.709-45.153C235.881,145.962,244.275,145.962,251.824,148.937z"></path><path id="XMLID_188_" d="M416.603,248.266l-160.487-63.173v136.675c0,8.856-7.174,16.038-16.038,16.038
		c-8.863,0-16.037-7.182-16.037-16.038V185.093L63.553,248.266c-6.657,2.614-10.04,10.03-7.66,16.766l59.705,169.172
		c9.725,27.534,35.756,45.952,64.949,45.952h119.063c29.193,0,55.225-18.418,64.95-45.952l59.704-169.172
		C426.643,258.296,423.262,250.88,416.603,248.266z"></path></g></svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold tracking-tight text-lg sm:text-xl leading-none uppercase text-white">
                    ROYAL SWALF
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Zone: Hotline & Primary Action */}
            <div className="flex items-center gap-2.5 sm:gap-4">
              <a
                href="tel:+971501234567"
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-slate-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20 transition-all"
                title="Direct Operations Hotline"
              >
                <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-[11px] font-semibold">+971 4 234 5678</span>
              </a>

              <Link
                to="/quote"
                className="cursor-pointer inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0B5CAB] to-[#1677D2] hover:from-[#1677D2] hover:to-[#0B5CAB] active:scale-95 rounded-full transition-all duration-200 shadow-md whitespace-nowrap"
              >
                <span>Request Quotation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Extra Side Menu Trigger Button on smaller viewports if needed */}
              <button
                onClick={() => setSideMenuOpen(true)}
                className="p-2 text-white hover:bg-white/15 rounded-xl transition-colors cursor-pointer border border-white/20 sm:hidden"
                aria-label="Open navigation drawer"
                title="Open Corporate Navigation Drawer"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Corporate Side Pop-Up Drawer (Left-to-Right placement on the left side) */}
      <CorporateSideDrawer
        isOpen={sideMenuOpen}
        onClose={() => setSideMenuOpen(false)}
        onOpenQuote={onOpenQuote}
      />
    </>
  );
};
