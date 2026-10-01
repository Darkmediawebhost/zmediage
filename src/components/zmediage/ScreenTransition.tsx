import React from 'react';

interface ScreenTransitionProps {
  children: React.ReactNode;
  screenKey: string | number;
  className?: string;
}

export const ScreenTransition: React.FC<ScreenTransitionProps> = ({
  children,
  screenKey,
  className = '',
}) => {
  return (
    <div
      key={screenKey}
      className={`w-full h-full flex flex-col items-center justify-center transition-all duration-500 ease-out animate-in fade-in zoom-in-[0.98] slide-in-from-bottom-2 ${className}`}
    >
      {children}
    </div>
  );
};
