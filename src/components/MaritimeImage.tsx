import React, { useState } from 'react';
import { Ship, Anchor, Waves } from 'lucide-react';

interface MaritimeImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackIcon?: 'ship' | 'anchor' | 'waves';
  badge?: string;
}

export const MaritimeImage: React.FC<MaritimeImageProps> = ({
  src,
  alt,
  className = '',
  fallbackIcon = 'ship',
  badge
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fallback high-resolution maritime image if src fails or is missing
  const fallbackSrc = '/images/photo-1518241353330-0f7941c2d9b5.jpg';

  const displaySrc = (!src || hasError) ? fallbackSrc : src;

  return (
    <div className={`relative overflow-hidden bg-[#EAF4FC] ${className}`}>
      {/* Loading Shimmer Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#EAF4FC] via-[#DCE8F2] to-[#EAF4FC] animate-pulse" />
      )}

      {/* Main Image */}
      <img
        src={displaySrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (!hasError) {
            setHasError(true);
          }
        }}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Dark Subtle Vignette for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#052B52]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />

      {/* Badge if provided */}
      {badge && (
        <span className="absolute top-2.5 right-2.5 z-10 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#052B52]/80 backdrop-blur-md text-white border border-white/20 shadow-xs">
          {badge}
        </span>
      )}

      {/* Subtle bottom brand watermark */}
      <div className="absolute bottom-2 left-2 z-10 flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
        <span className="w-1.5 h-1.5 rounded-full bg-[#1677D2]" />
        <span className="text-[9px] font-mono tracking-wider uppercase text-white/90 font-semibold drop-shadow-xs">
          SWALF MARITIME
        </span>
      </div>
    </div>
  );
};
