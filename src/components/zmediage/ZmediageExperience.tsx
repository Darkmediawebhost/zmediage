import React, { useState, useEffect, useCallback } from 'react';
import { BackgroundEffects } from './BackgroundEffects.tsx';
import { Header } from './Header.tsx';
import { ScreenOne } from './ScreenOne.tsx';
import { ScreenTwo } from './ScreenTwo.tsx';
import { ScreenThree } from './ScreenThree.tsx';
import { ShowcaseView } from './ShowcaseView.tsx';
import { ScreenTransition } from './ScreenTransition.tsx';

export type ScreenNumber = 1 | 2 | 3;
export type ViewMode = 'interactive' | 'showcase';

export const ZmediageExperience: React.FC = () => {
  const [screen, setScreen] = useState<ScreenNumber>(1);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('interactive');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Smooth screen change
  const navigateToScreen = useCallback((targetScreen: ScreenNumber) => {
    setIsTransitioning(true);
    setScreen(targetScreen);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 450);
  }, []);

  // Handle selection on Screen 1
  const handleSelectReason = useCallback(
    (reasonId: string) => {
      setSelectedReason(reasonId);
      // Give visual feedback then transition smoothly to Screen 2
      setTimeout(() => {
        navigateToScreen(2);
      }, 350);
    },
    [navigateToScreen]
  );

  // Reset to beginning
  const handleReset = useCallback(() => {
    setSelectedReason(null);
    navigateToScreen(1);
  }, [navigateToScreen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'interactive') return;

      // Number keys 1-4 on Screen 1
      if (screen === 1) {
        if (e.key === '1') handleSelectReason('curiosity');
        if (e.key === '2') handleSelectReason('fomo');
        if (e.key === '3') handleSelectReason('qrcode');
        if (e.key === '4') handleSelectReason('dont_know');
      }

      // Arrow navigation
      if (e.key === 'ArrowRight') {
        if (screen === 1 && selectedReason) {
          navigateToScreen(2);
        } else if (screen === 2) {
          navigateToScreen(3);
        }
      } else if (e.key === 'ArrowLeft') {
        if (screen === 2) {
          navigateToScreen(1);
        } else if (screen === 3) {
          navigateToScreen(2);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screen, selectedReason, viewMode, handleSelectReason, navigateToScreen]);

  // If in Showcase Mode (matching the reference 3-screen poster layout)
  if (viewMode === 'showcase') {
    return (
      <div className="relative min-h-screen bg-[#010109]">
        <Header
          currentStep={screen}
          viewMode={viewMode}
          onToggleViewMode={() => setViewMode('interactive')}
          onReset={handleReset}
        />
        <ShowcaseView
          selectedReason={selectedReason}
          onSelectReason={(reason) => {
            setSelectedReason(reason);
            setScreen(2);
            setViewMode('interactive');
          }}
          onOpenScreen={(s) => {
            setScreen(s);
            setViewMode('interactive');
          }}
        />
      </div>
    );
  }

  return (
    <main className="relative w-full min-h-[100svh] flex flex-col justify-between bg-[#010109] text-white overflow-hidden pb-[env(safe-area-inset-bottom)]">
      {/* Dynamic Cosmic Background */}
      <BackgroundEffects screen={screen} />

      {/* Top Header */}
      <Header
        currentStep={screen}
        onStepClick={navigateToScreen}
        onReset={handleReset}
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode('showcase')}
      />

      {/* Main Screen Content with Transitions */}
      <div className="flex-1 w-full max-w-7xl mx-auto flex items-center justify-center py-6 sm:py-10 px-4 relative z-10">
        <ScreenTransition screenKey={screen}>
          {screen === 1 && (
            <ScreenOne
              selectedReason={selectedReason}
              onSelectReason={handleSelectReason}
            />
          )}

          {screen === 2 && (
            <ScreenTwo
              selectedReason={selectedReason}
              onNext={() => navigateToScreen(3)}
              onBack={() => navigateToScreen(1)}
            />
          )}

          {screen === 3 && (
            <ScreenThree
              onBack={() => navigateToScreen(2)}
              onRestart={handleReset}
            />
          )}
        </ScreenTransition>
      </div>

      {/* Bottom Floating Quick Navigator & Footer Info */}
      {/* <footer className="w-full max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 z-30 border-t border-white/5 gap-2 select-none">
        <div className="flex items-center gap-4">
          <span className="text-zinc-400 font-medium">Zmediage Creative Agency</span>
          <span className="hidden sm:inline text-zinc-600">·</span>
          <span className="hidden sm:inline text-zinc-500">
            Interactive QR Decision Onboarding
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] text-zinc-500 hidden md:inline">
            Use <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 font-mono text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 font-mono text-[10px]">→</kbd> to navigate
          </span>
          <button
            onClick={() => setViewMode('showcase')}
            className="text-purple-400 hover:text-purple-300 transition-colors font-medium cursor-pointer"
          >
            Showcase Poster View
          </button>
        </div>
      </footer> */}
    </main>
  );
};
