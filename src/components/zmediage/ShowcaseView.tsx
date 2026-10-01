import React from 'react';
import { ScreenOne } from './ScreenOne.tsx';
import { ScreenTwo } from './ScreenTwo.tsx';
import { ScreenThree } from './ScreenThree.tsx';
import { BackgroundEffects } from './BackgroundEffects.tsx';
import { Header } from './Header.tsx';
import { Maximize2 } from 'lucide-react';

interface ShowcaseViewProps {
  selectedReason: string | null;
  onSelectReason: (reason: string) => void;
  onOpenScreen: (screen: 1 | 2 | 3) => void;
}

export const ShowcaseView: React.FC<ShowcaseViewProps> = ({
  selectedReason,
  onSelectReason,
  onOpenScreen,
}) => {
  return (
    <div className="w-full min-h-screen bg-[#010109] text-white p-4 sm:p-6 md:p-8 flex flex-col items-center">
      {/* Top Banner */}
      <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between pb-6 mb-6 border-b border-white/10 gap-3">
        <div>
          <span className="text-xs uppercase tracking-widest text-purple-400 font-bold">
            Zmediage Brand System
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Reference Showcase · All 3 Screens (Desktop & Mobile)
          </h2>
        </div>
        <div className="text-xs text-zinc-400 flex items-center gap-2">
          <span>Click any screen card or phone to launch full-screen interactive mode</span>
        </div>
      </div>

      {/* Row 1: Desktop 3-Screen Layout (Side-by-Side) */}
      <div className="w-full max-w-[1720px] grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Screen 1 Desktop Card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#010109] flex flex-col min-h-[640px] shadow-[0_0_40px_rgba(0,0,0,0.8)] group">
          <BackgroundEffects screen={1} />
          <Header currentStep={1} />
          <div className="flex-1 flex items-center justify-center p-4">
            <ScreenOne
              selectedReason={selectedReason || 'curiosity'}
              onSelectReason={onSelectReason}
            />
          </div>
          <button
            onClick={() => onOpenScreen(1)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-purple-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            title="Open Screen 1 Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Screen 2 Desktop Card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#010109] flex flex-col min-h-[640px] shadow-[0_0_40px_rgba(0,0,0,0.8)] group">
          <BackgroundEffects screen={2} />
          <Header currentStep={2} />
          <div className="flex-1 flex items-center justify-center p-4">
            <ScreenTwo
              selectedReason={selectedReason}
              onNext={() => onOpenScreen(3)}
              onBack={() => onOpenScreen(1)}
            />
          </div>
          <button
            onClick={() => onOpenScreen(2)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-purple-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            title="Open Screen 2 Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Screen 3 Desktop Card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#010109] flex flex-col min-h-[640px] shadow-[0_0_40px_rgba(0,0,0,0.8)] group">
          <BackgroundEffects screen={3} />
          <Header currentStep={3} />
          <div className="flex-1 flex items-center justify-center p-4">
            <ScreenThree onBack={() => onOpenScreen(2)} />
          </div>
          <button
            onClick={() => onOpenScreen(3)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-purple-600 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            title="Open Screen 3 Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Row 2: Mobile Triad Mockups (Matching the bottom half of reference image!) */}
      <div className="w-full max-w-[1300px]">
        <div className="text-center mb-6">
          <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase">
            Mobile Device Viewports (Simulated Native App Onboarding)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Phone 1: Screen 1 */}
          <div
            onClick={() => onOpenScreen(1)}
            className="w-[320px] sm:w-[350px] h-[690px] rounded-[48px] p-3.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(138,43,226,0.25)] border-[3px] border-zinc-700/80 cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Phone Screen Area */}
            <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-[#010109] flex flex-col">
              {/* Phone Speaker & Dynamic Island */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-950 rounded-full z-40" />

              <BackgroundEffects screen={1} />
              <div className="pt-6 px-4">
                <Header currentStep={1} className="!px-0 !py-2 text-xs" />
              </div>
              <div className="flex-1 flex items-center justify-center p-3 transform scale-90 origin-center">
                <ScreenOne
                  selectedReason={selectedReason || 'curiosity'}
                  onSelectReason={onSelectReason}
                />
              </div>
              {/* Bottom Home Indicator */}
              <div className="w-28 h-1 bg-white/30 rounded-full mx-auto mb-2" />
            </div>
          </div>

          {/* Phone 2: Screen 2 */}
          <div
            onClick={() => onOpenScreen(2)}
            className="w-[320px] sm:w-[350px] h-[690px] rounded-[48px] p-3.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(138,43,226,0.25)] border-[3px] border-zinc-700/80 cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Phone Screen Area */}
            <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-[#010109] flex flex-col">
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-950 rounded-full z-40" />

              <BackgroundEffects screen={2} />
              <div className="pt-6 px-4">
                <Header currentStep={2} className="!px-0 !py-2 text-xs" />
              </div>
              <div className="flex-1 flex items-center justify-center p-3 transform scale-90 origin-center">
                <ScreenTwo
                  selectedReason={selectedReason}
                  onNext={() => onOpenScreen(3)}
                  onBack={() => onOpenScreen(1)}
                />
              </div>
              <div className="w-28 h-1 bg-white/30 rounded-full mx-auto mb-2" />
            </div>
          </div>

          {/* Phone 3: Screen 3 */}
          <div
            onClick={() => onOpenScreen(3)}
            className="w-[320px] sm:w-[350px] h-[690px] rounded-[48px] p-3.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(138,43,226,0.25)] border-[3px] border-zinc-700/80 cursor-pointer group hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Phone Screen Area */}
            <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-[#010109] flex flex-col">
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-950 rounded-full z-40" />

              <BackgroundEffects screen={3} />
              <div className="pt-6 px-4">
                <Header currentStep={3} className="!px-0 !py-2 text-xs" />
              </div>
              <div className="flex-1 flex items-center justify-center p-2 transform scale-[0.82] origin-center">
                <ScreenThree onBack={() => onOpenScreen(2)} />
              </div>
              <div className="w-28 h-1 bg-white/30 rounded-full mx-auto mb-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
