import React from 'react';

interface ProgressIndicatorProps {
  currentStep: 1 | 2 | 3;
  totalSteps?: number;
  onStepClick?: (step: 1 | 2 | 3) => void;
  className?: string;
  variant?: 'compact' | 'full';
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps = 3,
  onStepClick,
  className = '',
}) => {
  const steps: (1 | 2 | 3)[] = [1, 2, 3];
  const formattedStep = String(currentStep).padStart(2, '0');
  const formattedTotal = String(totalSteps).padStart(2, '0');

  return (
    <div
      className={`flex items-center gap-3 select-none ${className}`}
      aria-label={`Step ${currentStep} of ${totalSteps}`}
    >

      {/* Stepper with track line and nodes */}
      <div className="flex flex-col items-center">
        <div className="relative flex items-center w-[72px] sm:w-[84px] h-4">
          {/* Horizontal Track line */}
          <div className="absolute left-[4px] right-[4px] h-[1px] bg-white/20" />

          {/* Active fill line */}
          <div
            className="absolute left-[4px] h-[1.5px] bg-gradient-to-r from-[#8a2be2] to-[#c084fc] transition-all duration-500"
            style={{
              width:
                currentStep === 1
                  ? '0%'
                  : currentStep === 2
                  ? '50%'
                  : '100%',
            }}
          />

          {/* Connected Circles */}
          <div className="w-full flex items-center justify-between relative z-10">
            {steps.map((step) => {
              const isActive = step === currentStep;
              const isCompleted = step < currentStep;

              return (
                <div
                  key={step}
                  className={`relative p-1 flex items-center justify-center transition-all cursor-default`}
                >
                  <div
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                      isActive
                        ? 'bg-[#c084fc] ring-4 ring-[#8a2be2]/40 shadow-[0_0_15px_rgba(192,132,252,0.9)] scale-110'
                        : isCompleted
                        ? 'bg-gradient-to-r from-[#8a2be2] to-[#c084fc] shadow-[0_0_8px_rgba(138,43,226,0.5)]'
                        : 'bg-[#010109] border border-white/30'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
