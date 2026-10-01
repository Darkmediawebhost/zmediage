import React from 'react';
import { Lightbulb, Flame, QrCode, HelpCircle } from 'lucide-react';
import { ScanReasonCard } from './ScanReasonCard.tsx';

export interface ScreenOneProps {
  selectedReason: string | null;
  onSelectReason: (reason: string) => void;
  className?: string;
}

export const ScreenOne: React.FC<ScreenOneProps> = ({
  selectedReason,
  onSelectReason,
  className = '',
}) => {
  const options = [
    {
      id: 'curiosity',
      label: 'Curiosity',
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      id: 'fomo',
      label: 'FOMO',
      icon: <Flame className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      id: 'qrcode',
      label: 'QR Code',
      icon: <QrCode className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      id: 'dont_know',
      label: 'I Don’t Know',
      icon: <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <div
      className={`w-full max-w-xl mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 relative z-10 ${className}`}
    >
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.1] mb-4 sm:mb-5">
        <span className="text-white block">Why did you</span>
        <span className="bg-gradient-to-r from-[#d8b4fe] via-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent block mt-1 drop-shadow-[0_0_25px_rgba(168,85,247,0.45)]">
          scan this?
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base font-medium text-zinc-400 mb-6 sm:mb-8 tracking-wide">
        Choose one:
      </p>

      {/* Selectable Options Stack */}
      <div className="w-full space-y-3 sm:space-y-3.5">
        {options.map((opt) => (
          <ScanReasonCard
            key={opt.id}
            id={opt.id}
            label={opt.label}
            icon={opt.icon}
            isSelected={selectedReason === opt.id}
            onClick={() => onSelectReason(opt.id)}
          />
        ))}
      </div>

      {/* Subtle Hint for Keyboard Users */}
      <div className="mt-8 text-[11px] text-zinc-500 tracking-wider hidden sm:block">
        Click any reason to continue · Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 font-mono text-[10px]">1</kbd>–<kbd className="px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 font-mono text-[10px]">4</kbd>
      </div>
    </div>
  );
};
