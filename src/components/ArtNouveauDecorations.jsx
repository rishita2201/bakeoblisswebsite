import React from 'react';

/**
 * Art Nouveau Botanical Horizontal Divider
 * Features sinuous whiplash vines with a central blossoming motif.
 */
export const NouveauFloralDivider = ({ className = "w-48 sm:w-64 h-6 text-gold-500 my-4 mx-auto" }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <svg viewBox="0 0 300 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Left Whiplash Vine */}
      <path 
        d="M10 12 C 50 12, 70 4, 110 12 C 125 15, 135 12, 142 8" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
      <path 
        d="M60 10 C 65 6, 75 5, 80 8 C 75 12, 68 11, 60 10 Z" 
        fill="currentColor" 
        opacity="0.85" 
      />
      <circle cx="20" cy="12" r="2" fill="currentColor" />

      {/* Central Floral Lily / Lotus Motif */}
      <circle cx="150" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.2" />
      <path 
        d="M150 4 C 147 8, 145 11, 147 13 C 149 14, 151 14, 153 13 C 155 11, 153 8, 150 4 Z" 
        fill="currentColor" 
      />
      <path 
        d="M142 12 C 145 10, 148 10, 150 12 C 148 14, 145 14, 142 12 Z" 
        fill="currentColor" 
      />
      <path 
        d="M158 12 C 155 10, 152 10, 150 12 C 152 14, 155 14, 158 12 Z" 
        fill="currentColor" 
      />

      {/* Right Whiplash Vine */}
      <path 
        d="M290 12 C 250 12, 230 4, 190 12 C 175 15, 165 12, 158 8" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
      <path 
        d="M240 10 C 235 6, 225 5, 220 8 C 225 12, 232 11, 240 10 Z" 
        fill="currentColor" 
        opacity="0.85" 
      />
      <circle cx="280" cy="12" r="2" fill="currentColor" />
    </svg>
  </div>
);

/**
 * Art Nouveau Corner Flourish
 * Elegant organic bracket with whiplash scrollwork.
 */
export const NouveauCorner = ({ position = "top-left", className = "w-8 h-8 text-gold-500/80" }) => {
  const getTransform = () => {
    switch (position) {
      case "top-right": return "scale-x-[-1]";
      case "bottom-left": return "scale-y-[-1]";
      case "bottom-right": return "scale-[-1]";
      default: return "";
    }
  };

  return (
    <div className={`pointer-events-none select-none ${className} ${getTransform()}`}>
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer border curve */}
        <path 
          d="M2 48 L2 18 C2 9, 9 2, 18 2 L48 2" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        {/* Inner whiplash vine */}
        <path 
          d="M6 35 C6 18, 18 6, 35 6 C28 10, 20 18, 16 26" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round"
        />
        {/* Stylized leaf */}
        <path 
          d="M12 12 C 14 7, 20 6, 22 9 C 19 14, 14 14, 12 12 Z" 
          fill="currentColor" 
          opacity="0.9"
        />
        <circle cx="6" cy="40" r="1.5" fill="currentColor" />
        <circle cx="40" cy="6" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
};

/**
 * Art Nouveau Pure Vegetarian Cameo Seal
 * Features an organic gilded cameo rim with emerald leaf icon.
 */
export const NouveauVegCameo = ({ size = "normal" }) => {
  const isSmall = size === "small";

  return (
    <div className={`inline-flex items-center gap-2 ${isSmall ? 'py-0.5 px-2.5 text-[10px]' : 'py-1 px-3.5 text-xs'} rounded-full bg-parchment-50 border border-gold-500/70 shadow-xs font-serif font-medium text-espresso tracking-wide`}>
      {/* Traditional Indian Vegetarian Dot inside Square with Art Nouveau Gilded Rim */}
      <span className="relative flex items-center justify-center w-3.5 h-3.5 border border-emerald-700 bg-emerald-50 rounded-xs flex-shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
      </span>
      <span className="text-gold-700 font-semibold tracking-wider uppercase text-[10px]">
        100% Pure Veg
      </span>
      <span className="text-espresso/50 hidden sm:inline">•</span>
      <span className="text-espresso/80 italic font-serif hidden sm:inline text-[11px]">
        Eggless Patisserie
      </span>
    </div>
  );
};

/**
 * Art Nouveau Arch Crest
 * Semicircular peacock/botanical crest for framing section titles.
 */
export const NouveauArchCrest = ({ className = "w-16 h-8 text-gold-500 mx-auto" }) => (
  <div className={className}>
    <svg viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path 
        d="M10 48 C 10 20, 90 20, 90 48" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
      <path 
        d="M20 48 C 20 28, 80 28, 80 48" 
        stroke="currentColor" 
        strokeWidth="0.8" 
        strokeDasharray="2 3" 
      />
      {/* Petals radiating */}
      <line x1="50" y1="20" x2="50" y2="4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="38" y1="23" x2="30" y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="62" y1="23" x2="70" y2="9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="28" y1="31" x2="16" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="72" y1="31" x2="84" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="50" cy="4" r="2" fill="currentColor" />
    </svg>
  </div>
);
