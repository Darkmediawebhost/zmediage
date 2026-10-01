import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PrimaryButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children = "Let's Create Something Memorable",
  onClick,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full font-semibold text-base sm:text-lg text-white bg-gradient-to-r from-[#411484] via-[#6d28d9] to-[#8a2be2] hover:from-[#581c87] hover:via-[#7c3aed] hover:to-[#9d4edd] shadow-[0_0_35px_rgba(138,43,226,0.55)] hover:shadow-[0_0_55px_rgba(168,85,247,0.75)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out border border-[#c084fc]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#010109] cursor-pointer select-none ${className}`}
    >
      <span className="tracking-tight">{children}</span>
      <ArrowRight className="w-5 h-5 stroke-[2.5] transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
    </button>
  );
};
