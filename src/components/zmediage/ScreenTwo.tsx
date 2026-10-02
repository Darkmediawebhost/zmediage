import React from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

export interface ScreenTwoProps {
  selectedReason?: string | null;
  onNext: () => void;
  onBack: () => void;
  className?: string;
}

export const ScreenTwo: React.FC<ScreenTwoProps> = ({
  onNext,
  onBack,
  className = '',
}) => {
  return (
    <div
      className={`w-full max-w-2xl mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 relative z-10 ${className}`}
    >
      {/* Large Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tight mb-8 sm:mb-10 select-none">
        <span className="text-white">Interesting</span>
        <span className="bg-gradient-to-r from-[#d8b4fe] via-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent ml-0.5 drop-shadow-[0_0_25px_rgba(168,85,247,0.45)]">
          ...
        </span>
      </h1>

      {/* Narrative Blocks with strong typographic hierarchy */}
      <div className="space-y-6 sm:space-y-8 max-w-xl mx-auto">
        {/* Block 1 */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed">
          Whether it was curiosity, FOMO,
          <br className="hidden sm:inline" />
          {' '}the QR code itself, or simply not
          <br className="hidden sm:inline" />
          {' '}knowing why...
        </p>

        {/* Block 2 */}
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight">
          You made a decision in seconds.
        </p>

        {/* Block 3 with vibrant purple highlight */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-200 font-normal leading-relaxed">
          Understanding why people make
          <br className="hidden sm:inline" />
          {' '}those decisions is{' '}
          <span className="bg-gradient-to-r from-[#d8b4fe] via-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent font-semibold drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            what marketing 
             <br className="hidden sm:inline" />  is all about.
            
          </span>
        </p>

        {/* Brand Attributed Quote */}
        <div className="pt-2 text-sm sm:text-base font-medium tracking-wide text-zinc-400">
          — Zmediage
        </div>
      </div>

      {/* Navigation Controls: Circular Next Button */}
      <div className="mt-10 sm:mt-14 flex flex-col items-center gap-4">
        <button
          type="button"
          onClick={onNext}
          aria-label="Continue to Welcome screen"
          className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#411484] to-[#7c3aed] hover:from-[#581c87] hover:to-[#9d4edd] border border-[#c084fc]/40 text-white flex items-center justify-center shadow-[0_0_30px_rgba(138,43,226,0.6)] hover:shadow-[0_0_45px_rgba(168,85,247,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {/* Secondary Back Navigation */}
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors py-1 px-2.5 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Change choice</span>
        </button>
      </div>
    </div>
  );
};
