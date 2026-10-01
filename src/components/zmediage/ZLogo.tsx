import React from 'react';
import logoImg from '../../imgs/Logo Z.png';

interface ZLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  className?: string;
}

export const ZLogo: React.FC<ZLogoProps> = ({
  size = 'lg',
  showWordmark = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { box: 'w-10 h-10', text: 'text-[9px] tracking-[0.25em]' },
    md: { box: 'w-16 h-16', text: 'text-[11px] tracking-[0.3em]' },
    lg: { box: 'w-24 h-24 md:w-28 md:h-28', text: 'text-xs md:text-sm tracking-[0.38em]' },
    xl: { box: 'w-32 h-32 md:w-36 md:h-36', text: 'text-sm md:text-base tracking-[0.42em]' },
  };

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* PNG Logo */}
      <div className={`relative ${sizeMap[size].box} filter drop-shadow-[0_0_24px_rgba(138,43,226,0.6)]`}>
        <img
          src={logoImg}
          alt="Zmediage Monogram"
          className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Brand Name with wide editorial tracking */}
      {/* {showWordmark && (
        <span
          className={`mt-4 font-bold text-white font-sans uppercase ${sizeMap[size].text} select-text text-center`}
        >
          Z M E D I A G E
        </span>
      )} */}
    </div>
  );
};
