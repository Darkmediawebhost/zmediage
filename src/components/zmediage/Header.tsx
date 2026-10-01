import React from 'react';
import { ProgressIndicator } from './ProgressIndicator.tsx';
import { RotateCcw, LayoutGrid, Smartphone } from 'lucide-react';
import logoImg from '../../imgs/Logo Z.png';

interface HeaderProps {
  currentStep: 1 | 2 | 3;
  onStepClick?: (step: 1 | 2 | 3) => void;
  onReset?: () => void;
  viewMode?: 'interactive' | 'showcase';
  onToggleViewMode?: () => void;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentStep,
  onStepClick,
  onReset,
  viewMode = 'interactive',
  onToggleViewMode,
  className = '',
}) => {
  return (
    <header
      className={`w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-5 md:py-7 flex items-center justify-between z-40 relative select-none ${className} md:-mb-40`}
    >
      {/* Brand Logo - Left Aligned */}
      <div className="flex items-center">
        <button
          onClick={onReset}
          className="group transition-transform cursor-pointer flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-sm"
          aria-label="Zmediage Home / Restart"
        >
          {/* Big, Crisp, Clear Logo */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0 filter drop-shadow-[0_0_15px_rgba(138,43,226,0.6)] group-hover:scale-110 group-hover:drop-shadow-[0_0_35px_rgba(157,78,221,0.9)] transition-all duration-300">
            <img 
              src={logoImg} 
              alt="Zmediage" 
              className="w-full h-full object-contain"
            />
          </div>
        </button>
      </div>

      {/* Right Controls: Progress Indicator */}
      <div className="flex items-center gap-4 sm:gap-6">
        <ProgressIndicator
          currentStep={currentStep}
          totalSteps={3}
          onStepClick={onStepClick}
        />
      </div>
    </header>
  );
};
