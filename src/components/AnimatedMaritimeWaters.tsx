import React, { useState } from 'react';
import { Anchor, Waves, Radio, Activity, Volume2, Shield } from 'lucide-react';

interface AnimatedMaritimeWatersProps {
  interactive?: boolean;
  className?: string;
  showTelemetry?: boolean;
}

export const AnimatedMaritimeWaters: React.FC<AnimatedMaritimeWatersProps> = ({
  interactive = true,
  className = '',
  showTelemetry = true
}) => {
  const [seaState, setSeaState] = useState<'calm' | 'standard' | 'active'>('standard');
  const [activeVessel, setActiveVessel] = useState<string | null>(null);
  const [hornPlaying, setHornPlaying] = useState(false);

  // Fun interactive maritime fog horn using Web Audio API
  const playShipHorn = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();

      // Deep dual-tone ship horn frequencies (110Hz and 138Hz)
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(110, ctx.currentTime);
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(138, ctx.currentTime);

      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 1.3);
      osc2.stop(ctx.currentTime + 1.3);

      setHornPlaying(true);
      setTimeout(() => setHornPlaying(false), 1300);
    } catch {
      // AudioContext may be blocked before interaction, handled gracefully
    }
  };

  const getWaveSpeedClass = () => {
    switch (seaState) {
      case 'calm': return 'scale-y-[0.75]';
      case 'active': return 'scale-y-[1.25]';
      default: return 'scale-y-100';
    }
  };

  return (
    <div className={`relative w-full h-full overflow-hidden select-none pointer-events-auto ${className}`}>
      {/* Background Bathymetric Sonar Grid */}
      <div className="absolute inset-0 bg-depth-grid-light opacity-50" />

      {/* Underwater Sonar Grid & Depth Rays */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,380 C320,340 640,430 960,370 C1200,320 1360,400 1440,380"
          stroke="#0B5CAB"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <path
          d="M0,450 C360,420 720,490 1080,440 C1280,410 1380,470 1440,450"
          stroke="#1677D2"
          strokeWidth="1"
        />
        <text x="80" y="470" fill="#0B5CAB" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.8">
          SEABED PROFILE: -32.5m LAT
        </text>
        <text x="1100" y="460" fill="#063B73" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.8">
          DREDGED CHANNEL DEPTH: -24.0m CD
        </text>
      </svg>

      {/* HORIZON VESSEL: Trailing Suction Hopper Dredger / Cargo Ship sailing across horizon */}
      <div className="absolute top-[32%] sm:top-[28%] left-0 w-full pointer-events-none z-10">
        <div className="animate-sail-slow flex items-end">
          <div className="relative group cursor-pointer pointer-events-auto" onClick={() => setActiveVessel('TSHD Swalf Explorer')}>
            {/* Distant Vessel SVG */}
            <svg width="140" height="48" viewBox="0 0 140 48" fill="none">
              {/* Ship Wake / Foam behind vessel */}
              <ellipse cx="18" cy="40" rx="16" ry="3" fill="#FFFFFF" opacity="0.6" className="animate-foam" />
              {/* Hull */}
              <path d="M12 32 L30 42 L115 42 L132 30 L128 32 L15 32 Z" fill="#063B73" />
              <path d="M25 42 L115 42 L110 44 L30 44 Z" fill="#D9381E" /> {/* Red bottom paint */}
              {/* Superstructure Bridge */}
              <rect x="85" y="16" width="30" height="16" fill="#F8FBFE" stroke="#063B73" strokeWidth="1" rx="1" />
              <rect x="90" y="20" width="20" height="4" fill="#0B5CAB" />
              {/* Funnel */}
              <rect x="75" y="18" width="6" height="14" fill="#0B5CAB" />
              <rect x="75" y="16" width="6" height="3" fill="#D97706" />
              {/* Dredging Gantries */}
              <line x1="45" y1="24" x2="45" y2="34" stroke="#052B52" strokeWidth="2" />
              <line x1="60" y1="24" x2="60" y2="34" stroke="#052B52" strokeWidth="2" />
              <line x1="40" y1="24" x2="65" y2="24" stroke="#0B5CAB" strokeWidth="1.5" />
              {/* Radar on mast */}
              <line x1="100" y1="8" x2="100" y2="16" stroke="#063B73" strokeWidth="1.5" />
              <g className="animate-radar" style={{ transformOrigin: '100px 9px' }}>
                <line x1="94" y1="9" x2="106" y2="9" stroke="#D97706" strokeWidth="2" />
              </g>
              {/* Water displacement spray */}
              <path d="M125 36 Q135 38 138 42" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
            </svg>
            <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-[#052B52] text-white text-[10px] px-2 py-0.5 rounded font-mono whitespace-nowrap shadow-md">
              TSHD Swalf Carrier · 8.2 knots
            </div>
          </div>
        </div>
      </div>

      {/* CHANNEL NAVIGATION BUOYS (Starboard & Port) */}
      {/* Green Buoy on Left */}
      <div className="absolute top-[48%] sm:top-[44%] left-[6%] sm:left-[8%] z-15 pointer-events-auto">
        <div className="animate-buoy relative group cursor-pointer" onClick={() => setActiveVessel('Starboard Buoy')}>
          <svg width="24" height="42" viewBox="0 0 24 42" fill="none">
            {/* Blinking green top light */}
            <circle cx="12" cy="6" r="3.5" fill="#10B981" className="animate-ping" opacity="0.8" />
            <circle cx="12" cy="6" r="2.5" fill="#34D399" />
            {/* Buoy cage */}
            <path d="M12 7 L8 18 L16 18 Z" stroke="#059669" strokeWidth="1.5" fill="none" />
            {/* Float body */}
            <rect x="6" y="18" width="12" height="14" rx="2" fill="#10B981" stroke="#047857" strokeWidth="1" />
            <rect x="7" y="24" width="10" height="3" fill="#FFFFFF" />
            {/* Waterline */}
            <ellipse cx="12" cy="32" rx="9" ry="2.5" fill="#FFFFFF" opacity="0.6" className="animate-foam" />
          </svg>
          <div className="hidden group-hover:block absolute -top-7 left-1/2 -translate-x-1/2 bg-[#063B73] text-white text-[9px] px-1.5 py-0.5 rounded font-mono whitespace-nowrap">
            Fairway Marker #01
          </div>
        </div>
      </div>

      {/* Red Buoy on Right */}
      <div className="absolute top-[49%] sm:top-[45%] right-[10%] sm:right-[14%] z-15 pointer-events-auto">
        <div className="animate-buoy relative group cursor-pointer" style={{ animationDelay: '1.2s' }} onClick={() => setActiveVessel('Port Buoy')}>
          <svg width="24" height="42" viewBox="0 0 24 42" fill="none">
            {/* Blinking red top light */}
            <circle cx="12" cy="6" r="3.5" fill="#EF4444" className="animate-ping" opacity="0.8" />
            <circle cx="12" cy="6" r="2.5" fill="#F87171" />
            {/* Buoy can cage */}
            <rect x="8" y="9" width="8" height="9" stroke="#DC2626" strokeWidth="1.5" fill="none" />
            {/* Float body */}
            <rect x="6" y="18" width="12" height="14" rx="2" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
            <rect x="7" y="24" width="10" height="3" fill="#FFFFFF" />
            {/* Waterline */}
            <ellipse cx="12" cy="32" rx="9" ry="2.5" fill="#FFFFFF" opacity="0.6" className="animate-foam" />
          </svg>
          <div className="hidden group-hover:block absolute -top-7 left-1/2 -translate-x-1/2 bg-[#063B73] text-white text-[9px] px-1.5 py-0.5 rounded font-mono whitespace-nowrap">
            Harbor Limit #04
          </div>
        </div>
      </div>

      {/* SECONDARY VESSEL: Multi-Cat Tug & Survey Workboat (Center Left) */}
      <div className="absolute top-[44%] sm:top-[42%] left-[22%] sm:left-[26%] z-20 pointer-events-auto">
        <div
          className="animate-boat-gentle relative group cursor-pointer"
          onClick={() => setActiveVessel('Survey Vessel Swalf Sounder')}
        >
          <svg width="90" height="52" viewBox="0 0 90 52" fill="none">
            {/* Foam wake */}
            <ellipse cx="45" cy="42" rx="38" ry="4" fill="#FFFFFF" opacity="0.65" className="animate-foam" />
            {/* Tug Hull */}
            <path d="M12 32 L20 42 L72 42 L84 32 L80 30 L16 30 Z" fill="#D97706" stroke="#B45309" strokeWidth="1" />
            <path d="M18 36 L20 42 L72 42 L76 36 Z" fill="#1E293B" />
            {/* Rubber Fenders around hull */}
            <line x1="20" y1="33" x2="76" y2="33" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
            {/* Wheelhouse Cabin */}
            <rect x="36" y="18" width="26" height="14" rx="2" fill="#FFFFFF" stroke="#063B73" strokeWidth="1.2" />
            <rect x="40" y="21" width="18" height="5" rx="1" fill="#0B5CAB" />
            {/* Exhaust Funnel */}
            <rect x="63" y="19" width="4" height="11" fill="#475569" />
            {/* Navigation Radar Mast */}
            <line x1="48" y1="8" x2="48" y2="18" stroke="#063B73" strokeWidth="1.5" />
            <g className="animate-radar" style={{ transformOrigin: '48px 9px' }}>
              <rect x="42" y="8" width="12" height="2" rx="1" fill="#D97706" />
            </g>
            {/* Nav light green/red */}
            <circle cx="36" cy="22" r="1.5" fill="#EF4444" />
            <circle cx="62" cy="22" r="1.5" fill="#10B981" />
            {/* A-frame survey crane on aft deck */}
            <path d="M22 30 L28 16 L34 30" stroke="#063B73" strokeWidth="1.5" fill="none" />
            <line x1="28" y1="16" x2="28" y2="44" stroke="#D97706" strokeWidth="1" strokeDasharray="2 2" />
            {/* Subsea Sonar Transducer */}
            <circle cx="28" cy="45" r="2.5" fill="#0B5CAB" />
          </svg>
          <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-[#063B73] text-white text-[10px] px-2 py-0.5 rounded font-mono whitespace-nowrap shadow-lg z-30">
            Workboat 'Swalf Sounder' · Multibeam Active
          </div>
        </div>
      </div>

      {/* MAIN VESSEL: Heavy-Duty Cutter Suction Dredger "Royal Swalf CSD-500" */}
      <div className="absolute top-[38%] sm:top-[34%] right-[2%] sm:right-[6%] z-20 pointer-events-auto">
        <div
          className="animate-boat-pitch relative group cursor-pointer"
          onClick={() => setActiveVessel('Royal Swalf CSD-500')}
        >
          <svg width="280" height="180" viewBox="0 0 280 180" fill="none">
            {/* Water displacement foam under hull */}
            <ellipse cx="140" cy="112" rx="105" ry="8" fill="#FFFFFF" opacity="0.75" className="animate-foam" />
            <ellipse cx="120" cy="114" rx="120" ry="11" fill="#E0F2FE" opacity="0.45" />

            {/* Stern Spud Towers (Anchored into seabed) */}
            {/* Spud 1 */}
            <rect x="238" y="24" width="8" height="110" fill="#0B5CAB" stroke="#063B73" strokeWidth="1" rx="1" />
            <polygon points="238,134 246,134 242,148" fill="#063B73" />
            {/* Spud 2 */}
            <rect x="252" y="10" width="8" height="124" fill="#063B73" stroke="#052B52" strokeWidth="1" rx="1" />
            <polygon points="252,134 260,134 256,154" fill="#052B52" />
            {/* Spud gantry truss */}
            <path d="M230 96 L242 40 L256 30 L256 96" stroke="#0B5CAB" strokeWidth="1.5" fill="none" opacity="0.8" />

            {/* Dredger Main Pontoon Hull */}
            <path
              d="M32 96 L50 96 L226 96 L236 102 L230 114 L42 114 L24 104 Z"
              fill="url(#hullGradient)"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            {/* Hull waterline red stripe */}
            <path d="M38 110 L232 110 L230 114 L42 114 Z" fill="#DC2626" />

            {/* Operating Deck Superstructure */}
            <rect x="135" y="72" width="68" height="24" rx="2" fill="#FFFFFF" stroke="#063B73" strokeWidth="1.5" />
            {/* Control Bridge / Wheelhouse with panoramic windows */}
            <rect x="150" y="52" width="46" height="20" rx="3" fill="#F8FBFE" stroke="#063B73" strokeWidth="1.5" />
            <rect x="154" y="56" width="38" height="8" rx="1" fill="#0284C7" />
            {/* Air condition & generator stacks */}
            <rect x="120" y="78" width="12" height="18" fill="#334155" rx="1" />
            <rect x="122" y="74" width="8" height="4" fill="#64748B" />

            {/* Navigation Radar Mast */}
            <line x1="172" y1="36" x2="172" y2="52" stroke="#063B73" strokeWidth="2" />
            <g className="animate-radar" style={{ transformOrigin: '172px 38px' }}>
              <rect x="164" y="37" width="16" height="3" rx="1" fill="#D97706" />
            </g>
            {/* Radio Antennas */}
            <line x1="184" y1="38" x2="184" y2="52" stroke="#94A3B8" strokeWidth="1" />
            <line x1="158" y1="40" x2="158" y2="52" stroke="#94A3B8" strokeWidth="1" />

            {/* Dredge Ladder Gantry & Winch A-Frame */}
            <path d="M85 96 L62 48 L46 96" stroke="#063B73" strokeWidth="2.5" fill="none" />
            <line x1="62" y1="48" x2="20" y2="128" stroke="#D97706" strokeWidth="1.8" /> {/* Suspension wire */}

            {/* CUTTER LADDER SUBMERGED IN WATER */}
            <g className="transition-transform duration-300">
              {/* Heavy Ladder Beam dipping into water */}
              <line x1="68" y1="96" x2="16" y2="138" stroke="#063B73" strokeWidth="6" strokeLinecap="round" />
              {/* Slurry Suction Pipe along ladder */}
              <line x1="70" y1="98" x2="18" y2="140" stroke="#0284C7" strokeWidth="3" />
              
              {/* ROTATING ROCK CUTTER HEAD UNDERWATER */}
              <g transform="translate(14, 142)">
                {/* Underwater sediment plumes & bubbles */}
                <circle cx="0" cy="0" r="14" fill="#64748B" opacity="0.35" className="animate-ping" />
                <circle cx="-6" cy="4" r="9" fill="#0284C7" opacity="0.4" />
                {/* Rotating crown with heavy teeth */}
                <g className="animate-cutter">
                  <circle cx="0" cy="0" r="8" fill="#D97706" stroke="#78350F" strokeWidth="1.5" />
                  <line x1="-8" y1="0" x2="8" y2="0" stroke="#FFFFFF" strokeWidth="2" />
                  <line x1="0" y1="-8" x2="0" y2="8" stroke="#FFFFFF" strokeWidth="2" />
                  <polygon points="0,-11 -3,-7 3,-7" fill="#78350F" />
                  <polygon points="11,0 7,-3 7,3" fill="#78350F" />
                  <polygon points="0,11 -3,7 3,7" fill="#78350F" />
                  <polygon points="-11,0 -7,-3 -7,3" fill="#78350F" />
                </g>
              </g>
            </g>

            {/* FLOATING DISCHARGE PIPELINE AT STERN (Pontoons on water) */}
            <path d="M228 106 C240 108 250 110 270 108" stroke="#0284C7" strokeWidth="3.5" fill="none" />
            {/* Pontoon float collar 1 */}
            <rect x="242" y="104" width="8" height="6" rx="2" fill="#F59E0B" />
            {/* Pontoon float collar 2 */}
            <rect x="260" y="104" width="8" height="6" rx="2" fill="#F59E0B" />

            {/* Royal Swalf Vessel Brand Text */}
            <text x="145" y="88" fill="#063B73" fontSize="8" fontWeight="bold" fontFamily="sans-serif" letterSpacing="0.5">
              ROYAL SWALF
            </text>
            <text x="76" y="108" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="monospace">
              CSD-500 HEAVY DREDGER
            </text>

            {/* Gradient definition */}
            <defs>
              <linearGradient id="hullGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0B5CAB" />
                <stop offset="60%" stopColor="#063B73" />
                <stop offset="100%" stopColor="#052B52" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Live Vessel Badge */}
          <div className="absolute -top-6 right-8 bg-white/95 backdrop-blur-md border border-[#0B5CAB]/30 shadow-xl rounded-full px-3 py-1 flex items-center gap-2 text-[11px] text-[#052B52] font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[#0B5CAB]">CSD-500</span>
            <span className="text-[#526777] hidden sm:inline">· Dredging Depth: -22m</span>
          </div>
        </div>
      </div>

      {/* CONTINUOUS ANIMATED WATER WAVES (3 Synced Oscillating Layers) */}
      <div className={`absolute inset-x-0 bottom-0 pointer-events-none transition-transform duration-500 ${getWaveSpeedClass()}`}>
        {/* Layer 1: Deep Blue Rear Wave */}
        <div className="relative w-[200%] h-24 -mb-1 opacity-70 animate-wave-3 flex">
          <svg className="w-1/2 h-full flex-shrink-0" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,45 C150,75 350,15 500,45 C650,75 850,15 1000,45 C1150,75 1200,45 1200,45 L1200,120 L0,120 Z"
              fill="#063B73"
            />
          </svg>
          <svg className="w-1/2 h-full flex-shrink-0" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,45 C150,75 350,15 500,45 C650,75 850,15 1000,45 C1150,75 1200,45 1200,45 L1200,120 L0,120 Z"
              fill="#063B73"
            />
          </svg>
        </div>

        {/* Layer 2: Royal Blue Mid-Wave with White Crest Highlights */}
        <div className="relative w-[200%] h-20 -mb-2 opacity-85 animate-wave-2 flex -mt-10">
          <svg className="w-1/2 h-full flex-shrink-0" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path
              d="M0,30 C200,60 400,10 600,35 C800,60 1000,10 1200,30 L1200,100 L0,100 Z"
              fill="#0B5CAB"
            />
            {/* White wave foam crest */}
            <path
              d="M0,30 C200,60 400,10 600,35 C800,60 1000,10 1200,30"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              fill="none"
              opacity="0.85"
            />
          </svg>
          <svg className="w-1/2 h-full flex-shrink-0" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path
              d="M0,30 C200,60 400,10 600,35 C800,60 1000,10 1200,30 L1200,100 L0,100 Z"
              fill="#0B5CAB"
            />
            <path
              d="M0,30 C200,60 400,10 600,35 C800,60 1000,10 1200,30"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              fill="none"
              opacity="0.85"
            />
          </svg>
        </div>

        {/* Layer 3: Vibrant Translucent Turquoise/Azure Foreground Water */}
        <div className="relative w-[200%] h-16 animate-wave-1 flex -mt-8">
          <svg className="w-1/2 h-full flex-shrink-0" viewBox="0 0 1200 80" preserveAspectRatio="none">
            <path
              d="M0,20 C180,45 360,5 540,25 C720,45 900,5 1080,25 C1160,35 1200,20 1200,20 L1200,80 L0,80 Z"
              fill="#1677D2"
              fillOpacity="0.8"
            />
            <path
              d="M0,20 C180,45 360,5 540,25 C720,45 900,5 1080,25"
              stroke="#BAE6FD"
              strokeWidth="3"
              fill="none"
              opacity="0.9"
            />
          </svg>
          <svg className="w-1/2 h-full flex-shrink-0" viewBox="0 0 1200 80" preserveAspectRatio="none">
            <path
              d="M0,20 C180,45 360,5 540,25 C720,45 900,5 1080,25 C1160,35 1200,20 1200,20 L1200,80 L0,80 Z"
              fill="#1677D2"
              fillOpacity="0.8"
            />
            <path
              d="M0,20 C180,45 360,5 540,25 C720,45 900,5 1080,25"
              stroke="#BAE6FD"
              strokeWidth="3"
              fill="none"
              opacity="0.9"
            />
          </svg>
        </div>
      </div>

      {/* INTERACTIVE MARITIME WATER CONTROLS & TELEMETRY BAR */}
      {interactive && (
        <div className="absolute bottom-3 right-4 z-30 flex flex-wrap items-center gap-2 bg-white/90 backdrop-blur-md border border-[#DCE8F2] shadow-lg rounded-full px-3 py-1.5 text-xs text-[#052B52]">
          {/* Sound Ship Horn button */}
          <button
            onClick={playShipHorn}
            title="Sound Ship Horn"
            className={`cursor-pointer inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase transition-all duration-200 ${
              hornPlaying
                ? 'bg-amber-500 text-white scale-105 shadow-md shadow-amber-500/30'
                : 'bg-[#EAF4FC] hover:bg-[#DCE8F2] text-[#063B73]'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>{hornPlaying ? 'HOOORN! 🚢' : 'Ship Horn'}</span>
          </button>

          {/* Sea Conditions Selector */}
          <div className="hidden sm:flex items-center gap-1 border-l border-[#DCE8F2] pl-2">
            <span className="text-[10px] text-[#526777] font-semibold uppercase tracking-wider">Sea State:</span>
            {(['calm', 'standard', 'active'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setSeaState(mode)}
                className={`cursor-pointer px-2 py-0.5 rounded-full text-[10px] font-bold uppercase transition-all ${
                  seaState === mode
                    ? 'bg-[#0B5CAB] text-white'
                    : 'text-[#526777] hover:text-[#063B73] hover:bg-[#F5FAFF]'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          {/* Live Vessel Status indicator */}
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#0B5CAB] border-l border-[#DCE8F2] pl-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden md:inline font-sans text-[#526777]">Fleet:</span>
            <span className="font-bold">4 Active</span>
          </div>
        </div>
      )}

      {/* Vessel Detail Tooltip Popup when clicked */}
      {activeVessel && (
        <div className="absolute top-16 right-6 z-40 bg-white/95 backdrop-blur-md border border-[#0B5CAB]/40 shadow-2xl rounded-2xl p-4 max-w-xs animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B5CAB] font-mono">
                FLEET TELEMETRY
              </span>
              <h4 className="font-display font-bold text-sm text-[#052B52]">{activeVessel}</h4>
            </div>
            <button
              onClick={() => setActiveVessel(null)}
              className="text-[#526777] hover:text-[#052B52] text-xs font-bold p-1 rounded-full hover:bg-slate-100"
            >
              ✕
            </button>
          </div>
          <div className="space-y-1.5 text-xs text-[#526777]">
            <div className="flex justify-between border-b border-[#DCE8F2] pb-1">
              <span>Operating Mode:</span>
              <span className="font-semibold text-emerald-600">Active Harbor Dredging</span>
            </div>
            <div className="flex justify-between border-b border-[#DCE8F2] pb-1">
              <span>Current Depth:</span>
              <span className="font-mono font-semibold text-[#0B5CAB]">-22.4m</span>
            </div>
            <div className="flex justify-between">
              <span>Pumping Rate:</span>
              <span className="font-mono font-semibold text-[#052B52]">4,250 m³/h</span>
            </div>
          </div>
          <button
            onClick={() => {
              playShipHorn();
            }}
            className="w-full mt-3 py-1.5 bg-[#0B5CAB] hover:bg-[#063B73] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Sound Vessel Warning Horn</span>
          </button>
        </div>
      )}
    </div>
  );
};
