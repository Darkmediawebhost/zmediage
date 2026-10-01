import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ScanReasonCardProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  isSelected?: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export const ScanReasonCard: React.FC<ScanReasonCardProps> = ({
  id,
  label,
  icon,
  isSelected = false,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      id={`reason-${id}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={isSelected}
      className={`group w-full max-w-[560px] mx-auto min-h-[64px] md:min-h-[72px] px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl flex items-center justify-between text-left transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#010109] cursor-pointer ${
        isSelected
          ? 'bg-gradient-to-r from-[#411484]/45 via-[#230c48]/75 to-[#09081a]/90 border border-[#a855f7] shadow-[0_0_30px_rgba(168,85,247,0.35)] scale-[1.01]'
          : 'bg-[#080816]/80 hover:bg-[#100b24]/85 border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(147,51,234,0.2)] hover:-translate-y-0.5'
      }`}
    >
      {/* Left zone: Icon + Text */}
      <div className="flex items-center gap-4 sm:gap-5">
        <div
          className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-colors duration-300 ${
            isSelected
              ? 'text-purple-300'
              : 'text-zinc-300 group-hover:text-purple-300'
          }`}
        >
          {icon}
        </div>
        <span
          className={`text-base sm:text-lg md:text-xl font-semibold tracking-tight transition-colors duration-300 ${
            isSelected ? 'text-white' : 'text-zinc-100 group-hover:text-white'
          }`}
        >
          {label}
        </span>
      </div>

      {/* Right zone: Circular Arrow Affordance */}
      <div
        className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
          isSelected
            ? 'bg-[#8a2be2] text-white shadow-[0_0_15px_rgba(138,43,226,0.8)] scale-105'
            : 'bg-white/5 border border-white/10 text-zinc-400 group-hover:bg-[#411484] group-hover:border-purple-400/60 group-hover:text-white group-hover:shadow-[0_0_10px_rgba(138,43,226,0.5)] group-hover:translate-x-0.5'
        }`}
      >
        <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5]" />
      </div>
    </button>
  );
};
