import React from 'react';

interface MaritimeGraphicProps {
  type: 
    | 'hero-vessel'
    | 'csd-schematic'
    | 'tshd-hopper'
    | 'survey-sonar'
    | 'quay-construction'
    | 'subsea-diving'
    | 'cutter-head'
    | 'slurry-pump'
    | 'bathymetry-map';
  className?: string;
}

export const MaritimeGraphic: React.FC<MaritimeGraphicProps> = ({
  type,
  className = ''
}) => {
  if (type === 'hero-vessel') {
    return (
      <div className={`relative w-full h-full overflow-hidden select-none bg-gradient-to-br from-[#F5FAFF] via-[#EAF4FC] to-[#DCE8F2]/60 ${className}`}>
        {/* Engineering grid lines */}
        <div className="absolute inset-0 bg-depth-grid-light opacity-60 pointer-events-none" />

        {/* Bathymetric contour depth lines in light blue */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50,620 C220,590 480,680 780,640 C1080,600 1260,700 1500,670"
            stroke="#0B5CAB"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="M-50,560 C260,530 520,620 840,580 C1160,540 1340,630 1500,600"
            stroke="#1677D2"
            strokeWidth="1.2"
          />
          <path
            d="M-50,500 C300,470 560,550 900,520 C1220,490 1380,560 1500,540"
            stroke="#063B73"
            strokeWidth="1"
          />
          {/* Depth sounding labels */}
          <text x="180" y="555" fill="#063B73" fontSize="11" fontFamily="monospace" fontWeight="600" opacity="0.75">-14.5m CD</text>
          <text x="680" y="615" fill="#0B5CAB" fontSize="11" fontFamily="monospace" fontWeight="600" opacity="0.85">-18.2m CD (PORT FAIRWAY)</text>
          <text x="1140" y="575" fill="#063B73" fontSize="11" fontFamily="monospace" fontWeight="600" opacity="0.75">-22.0m CD</text>
        </svg>

        {/* Technical Naval Blueprint of Cutter Suction Dredger */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            className="w-[95%] max-w-[1100px] max-h-[80%] opacity-95 transition-transform duration-700"
            viewBox="0 0 1000 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lightHullGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0B5CAB" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#063B73" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#052B52" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#B6D8F2" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#EAF4FC" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Waterline indicator */}
            <line x1="20" y1="280" x2="980" y2="280" stroke="#0B5CAB" strokeWidth="1.5" strokeDasharray="12 4" opacity="0.7" />
            <text x="40" y="272" fill="#063B73" fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="2">WATERLINE LEVEL 0.00m CD</text>

            {/* Spud Carrier Towers at Stern (Left) */}
            <rect x="140" y="60" width="14" height="290" fill="#0B5CAB" rx="2" />
            <rect x="175" y="40" width="14" height="310" fill="#063B73" rx="2" />
            {/* Spud lifting gantry framework */}
            <path d="M125 280 L140 100 L160 280 M165 280 L180 80 L200 280" stroke="#0B5CAB" strokeWidth="2" opacity="0.7" />
            {/* Spud points penetrating seabed */}
            <polygon points="140,350 154,350 147,380" fill="#0B5CAB" />
            <polygon points="175,350 189,350 182,390" fill="#063B73" />

            {/* Main Dredger Pontoon / Hull */}
            <path
              d="M130 240 L190 240 L720 240 L760 260 L780 295 L140 295 L130 260 Z"
              fill="url(#lightHullGrad)"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            {/* Draft markings */}
            <line x1="140" y1="260" x2="155" y2="260" stroke="#FFF" strokeWidth="1.5" />
            <line x1="140" y1="275" x2="155" y2="275" stroke="#FFF" strokeWidth="1.5" />
            <line x1="140" y1="290" x2="155" y2="290" stroke="#FFF" strokeWidth="1.5" />

            {/* Deck Superstructure & Operations Bridge */}
            <rect x="230" y="160" width="130" height="80" fill="#FFFFFF" stroke="#063B73" strokeWidth="2" />
            {/* Bridge Windows */}
            <rect x="280" y="170" width="70" height="24" fill="#0B5CAB" opacity="0.85" rx="1" />
            <line x1="300" y1="170" x2="300" y2="194" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="320" y1="170" x2="320" y2="194" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="340" y1="170" x2="340" y2="194" stroke="#FFFFFF" strokeWidth="1.5" />

            {/* Radar Mast & Navigation Antennas */}
            <line x1="315" y1="160" x2="315" y2="105" stroke="#063B73" strokeWidth="2" />
            <line x1="300" y1="120" x2="330" y2="120" stroke="#0B5CAB" strokeWidth="1.5" />
            <circle cx="315" cy="100" r="5" fill="#0B5CAB" />
            <line x1="305" y1="100" x2="325" y2="100" stroke="#063B73" strokeWidth="2" />

            {/* Engine Room Exhaust & Silencers */}
            <rect x="240" y="130" width="22" height="30" fill="#0B5CAB" stroke="#063B73" strokeWidth="1" />
            <line x1="247" y1="130" x2="247" y2="115" stroke="#526777" strokeWidth="3" />
            <line x1="255" y1="130" x2="255" y2="115" stroke="#526777" strokeWidth="3" />

            {/* Heavy Discharge Pipe running across deck to Stern Swivel */}
            <path
              d="M480 230 L160 230 L110 245 L70 245"
              stroke="#063B73"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
            {/* Flanged pipe couplings */}
            <circle cx="210" cy="230" r="5" fill="#1677D2" />
            <circle cx="370" cy="230" r="5" fill="#1677D2" />
            <circle cx="480" cy="230" r="6" fill="#052B52" />

            {/* Ladder A-Frame / Hoisting Gantry at Bow (Right) */}
            <polygon points="680,240 730,90 770,240" fill="none" stroke="#063B73" strokeWidth="3" />
            <line x1="730" y1="90" x2="730" y2="240" stroke="#0B5CAB" strokeWidth="1.5" />
            {/* Hoisting Sheaves & Heavy Steel Wire */}
            <circle cx="730" cy="90" r="7" fill="#0B5CAB" />
            <path d="M730 90 L880 340" stroke="#063B73" strokeWidth="2" strokeDasharray="3 2" />

            {/* Dredging Ladder Submerged at Angle */}
            <path
              d="M710 270 L910 390 L925 365 L725 245 Z"
              fill="#063B73"
              stroke="#0B5CAB"
              strokeWidth="2"
            />
            {/* Ladder internal suction pipe */}
            <line x1="718" y1="258" x2="918" y2="378" stroke="#1677D2" strokeWidth="4" />

            {/* Rotating Cutter Head with Chisel Teeth */}
            <g transform="translate(930, 395)">
              <circle cx="0" cy="0" r="28" fill="#FFFFFF" stroke="#063B73" strokeWidth="2.5" />
              {/* Cutter teeth crowns */}
              <path d="M0 -28 L14 -16 L8 -8 Z" fill="#0B5CAB" />
              <path d="M28 0 L16 14 L8 8 Z" fill="#0B5CAB" />
              <path d="M0 28 L-14 16 L-8 8 Z" fill="#0B5CAB" />
              <path d="M-28 0 L-16 -14 L-8 -8 Z" fill="#0B5CAB" />
              <circle cx="0" cy="0" r="8" fill="#052B52" />
              {/* Cutting swirl indicator */}
              <circle cx="0" cy="0" r="42" stroke="#0B5CAB" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.7" className="animate-spin" />
            </g>

            {/* Seabed Bathymetry Floor */}
            <path
              d="M20 440 Q300 420 550 440 T920 425 T990 445 L1000 480 L0 480 Z"
              fill="url(#waterGrad)"
              stroke="#B6D8F2"
              strokeWidth="1.5"
            />

            {/* Technical Annotations & Callouts */}
            <g opacity="0.95">
              {/* Spud Callout */}
              <line x1="180" y1="50" x2="220" y2="20" stroke="#063B73" strokeWidth="1" />
              <line x1="220" y1="20" x2="310" y2="20" stroke="#063B73" strokeWidth="1" />
              <text x="225" y="15" fill="#052B52" fontSize="10" fontFamily="monospace" fontWeight="bold">HYDRAULIC SPUD CARRIER</text>

              {/* Dredge Pump Callout */}
              <line x1="480" y1="235" x2="520" y2="180" stroke="#063B73" strokeWidth="1" />
              <line x1="520" y1="180" x2="630" y2="180" stroke="#063B73" strokeWidth="1" />
              <text x="525" y="175" fill="#052B52" fontSize="10" fontFamily="monospace" fontWeight="bold">HIGH-CHROME PUMP 3500kW</text>

              {/* Ladder Callout */}
              <line x1="820" y1="330" x2="860" y2="270" stroke="#063B73" strokeWidth="1" />
              <line x1="860" y1="270" x2="980" y2="270" stroke="#063B73" strokeWidth="1" />
              <text x="865" y="265" fill="#052B52" fontSize="10" fontFamily="monospace" fontWeight="bold">HEAVY ROCK CUTTER LADDER</text>
            </g>
          </svg>
        </div>

        {/* Marine navigation compass rose in bottom right */}
        <div className="absolute right-4 bottom-4 w-36 h-36 pointer-events-none opacity-25">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" stroke="#063B73" strokeWidth="1" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="#0B5CAB" strokeWidth="0.8" fill="none" />
            <line x1="50" y1="5" x2="50" y2="95" stroke="#063B73" strokeWidth="0.8" />
            <line x1="5" y1="50" x2="95" y2="50" stroke="#063B73" strokeWidth="0.8" />
            <polygon points="50,15 54,46 50,42 46,46" fill="#063B73" />
            <text x="50" y="12" textAnchor="middle" fill="#063B73" fontSize="8" fontFamily="monospace" fontWeight="bold">N</text>
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'csd-schematic') {
    return (
      <div className={`relative w-full h-52 bg-[#F5FAFF] border border-[#DCE8F2] overflow-hidden rounded-sm flex items-center justify-center ${className}`}>
        <div className="absolute inset-0 bg-maritime-pattern opacity-40 pointer-events-none" />
        <svg viewBox="0 0 450 180" className="w-full h-full p-3" fill="none">
          <rect x="60" y="80" width="240" height="40" fill="#0B5CAB" stroke="#063B73" strokeWidth="1.5" />
          <rect x="100" y="45" width="60" height="35" fill="#FFFFFF" stroke="#063B73" strokeWidth="1.5" />
          <line x1="50" y1="10" x2="50" y2="140" stroke="#063B73" strokeWidth="4" />
          <line x1="70" y1="20" x2="70" y2="150" stroke="#0B5CAB" strokeWidth="4" />
          {/* Ladder */}
          <line x1="280" y1="95" x2="410" y2="155" stroke="#063B73" strokeWidth="6" strokeLinecap="round" />
          <circle cx="415" cy="158" r="16" fill="#FFFFFF" stroke="#0B5CAB" strokeWidth="2.5" />
          <path d="M405 150 L425 166 M425 150 L405 166" stroke="#063B73" strokeWidth="2.5" />
          {/* Waterline */}
          <line x1="20" y1="100" x2="430" y2="100" stroke="#1677D2" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
          <text x="310" y="30" fill="#063B73" fontSize="10" fontFamily="monospace" fontWeight="bold">CUTTER SUCTION VESSEL</text>
          <text x="310" y="45" fill="#526777" fontSize="8" fontFamily="monospace">DEPTH RANGE: UP TO 25.0M</text>
        </svg>
      </div>
    );
  }

  if (type === 'tshd-hopper') {
    return (
      <div className={`relative w-full h-52 bg-[#F5FAFF] border border-[#DCE8F2] overflow-hidden rounded-sm flex items-center justify-center ${className}`}>
        <div className="absolute inset-0 bg-maritime-pattern opacity-40 pointer-events-none" />
        <svg viewBox="0 0 450 180" className="w-full h-full p-3" fill="none">
          {/* Ship hull */}
          <path d="M30 70 L350 70 L390 100 L370 125 L60 125 L40 100 Z" fill="#0B5CAB" stroke="#063B73" strokeWidth="1.5" />
          {/* Hopper Hold */}
          <polygon points="120,75 290,75 270,115 140,115" fill="#EAF4FC" stroke="#063B73" strokeWidth="1.2" />
          {/* Trailing Suction Arm */}
          <path d="M320 85 L260 110 L180 155 L160 155" stroke="#063B73" strokeWidth="3" fill="none" />
          <rect x="145" y="150" width="22" height="12" fill="#052B52" rx="2" />
          <text x="30" y="35" fill="#063B73" fontSize="10" fontFamily="monospace" fontWeight="bold">OCEAN HOPPER CARRIER (TSHD)</text>
          <text x="30" y="50" fill="#526777" fontSize="8" fontFamily="monospace">CAPACITY: UP TO 18,000 m³</text>
        </svg>
      </div>
    );
  }

  if (type === 'survey-sonar') {
    return (
      <div className={`relative w-full h-52 bg-[#F5FAFF] border border-[#DCE8F2] overflow-hidden rounded-sm flex items-center justify-center ${className}`}>
        <div className="absolute inset-0 bg-depth-grid-light opacity-50 pointer-events-none" />
        <svg viewBox="0 0 450 180" className="w-full h-full p-3" fill="none">
          {/* Survey boat */}
          <path d="M180 40 L260 40 L275 60 L175 60 Z" fill="#0B5CAB" />
          <rect x="210" y="25" width="30" height="15" fill="#FFFFFF" stroke="#063B73" strokeWidth="1" />
          {/* Sonar swath beams */}
          <polygon points="225,60 80,160 370,160" fill="#EAF4FC" opacity="0.8" />
          <path d="M225 60 L80 160 M225 60 L140 160 M225 60 L225 160 M225 60 L310 160 M225 60 L370 160" stroke="#0B5CAB" strokeWidth="1" strokeDasharray="3 3" />
          {/* Seabed contour */}
          <path d="M40 160 Q150 145 230 155 T410 150" stroke="#063B73" strokeWidth="2.5" />
          <text x="30" y="25" fill="#063B73" fontSize="10" fontFamily="monospace" fontWeight="bold">MULTIBEAM HYDROGRAPHIC SWATH</text>
          <text x="30" y="40" fill="#526777" fontSize="8" fontFamily="monospace">IHO S-44 ORDER 1A ACCURACY</text>
        </svg>
      </div>
    );
  }

  if (type === 'quay-construction') {
    return (
      <div className={`relative w-full h-52 bg-[#F5FAFF] border border-[#DCE8F2] overflow-hidden rounded-sm flex items-center justify-center ${className}`}>
        <div className="absolute inset-0 bg-maritime-pattern opacity-40 pointer-events-none" />
        <svg viewBox="0 0 450 180" className="w-full h-full p-3" fill="none">
          {/* Quay Wall Cross Section */}
          <rect x="60" y="30" width="130" height="35" fill="#EAF4FC" stroke="#063B73" strokeWidth="2" />
          <line x1="190" y1="30" x2="190" y2="165" stroke="#063B73" strokeWidth="6" />
          {/* Piles */}
          <line x1="240" y1="65" x2="240" y2="170" stroke="#0B5CAB" strokeWidth="5" />
          {/* Tie rod */}
          <line x1="190" y1="65" x2="90" y2="65" stroke="#052B52" strokeWidth="2.5" />
          <rect x="75" y="55" width="18" height="40" fill="#0B5CAB" />
          {/* Seabed & Rock Armour */}
          <polygon points="190,120 280,120 340,165 190,165" fill="#B6D8F2" stroke="#063B73" strokeWidth="1" />
          <text x="210" y="25" fill="#063B73" fontSize="10" fontFamily="monospace" fontWeight="bold">HEAVY QUAY COMBI-WALL</text>
          <text x="210" y="40" fill="#526777" fontSize="8" fontFamily="monospace">POST-PANAMAX CONTAINER BERTH</text>
        </svg>
      </div>
    );
  }

  if (type === 'subsea-diving') {
    return (
      <div className={`relative w-full h-52 bg-[#F5FAFF] border border-[#DCE8F2] overflow-hidden rounded-sm flex items-center justify-center ${className}`}>
        <div className="absolute inset-0 bg-maritime-pattern opacity-40 pointer-events-none" />
        <svg viewBox="0 0 450 180" className="w-full h-full p-3" fill="none">
          {/* Ship hull curve */}
          <path d="M20 20 Q180 50 430 30" stroke="#063B73" strokeWidth="4" />
          {/* Propeller */}
          <circle cx="360" cy="90" r="14" fill="#063B73" stroke="#052B52" strokeWidth="2" />
          <ellipse cx="360" cy="50" rx="10" ry="24" fill="#0B5CAB" stroke="#063B73" strokeWidth="1.5" />
          <ellipse cx="360" cy="130" rx="10" ry="24" fill="#0B5CAB" stroke="#063B73" strokeWidth="1.5" />
          <ellipse cx="320" cy="90" rx="24" ry="10" fill="#0B5CAB" stroke="#063B73" strokeWidth="1.5" />
          <ellipse cx="400" cy="90" rx="24" ry="10" fill="#0B5CAB" stroke="#063B73" strokeWidth="1.5" />
          {/* Diver silhouette */}
          <circle cx="210" cy="95" r="9" fill="#063B73" />
          <rect x="200" y="105" width="20" height="25" fill="#0B5CAB" stroke="#063B73" strokeWidth="1" />
          <line x1="210" y1="80" x2="210" y2="20" stroke="#063B73" strokeWidth="1" strokeDasharray="3 3" />
          <text x="30" y="145" fill="#063B73" fontSize="10" fontFamily="monospace" fontWeight="bold">IN-WATER HULL & PROPELLER NDT</text>
          <text x="30" y="160" fill="#526777" fontSize="8" fontFamily="monospace">CLASS APPROVED AIR / NITROX DIVE</text>
        </svg>
      </div>
    );
  }

  // Default Bathymetry Map view
  return (
    <div className={`relative w-full h-52 bg-[#F5FAFF] border border-[#DCE8F2] overflow-hidden rounded-sm flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-maritime-pattern opacity-40 pointer-events-none" />
      <svg viewBox="0 0 400 180" className="w-full h-full p-4" fill="none">
        <path d="M10 40 Q120 20 200 60 T390 40" stroke="#0B5CAB" strokeWidth="1.5" />
        <path d="M10 80 Q140 60 210 100 T390 80" stroke="#1677D2" strokeWidth="1.5" />
        <path d="M10 120 Q160 100 230 140 T390 120" stroke="#063B73" strokeWidth="1.5" />
        <circle cx="200" cy="90" r="6" fill="#063B73" />
        <text x="215" y="93" fill="#063B73" fontSize="10" fontFamily="monospace" fontWeight="bold">DATUM 0.00m CD</text>
      </svg>
    </div>
  );
};
