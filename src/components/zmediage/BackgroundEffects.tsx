import React from 'react';

interface BackgroundEffectsProps {
  screen?: 1 | 2 | 3;
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ screen = 1 }) => {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Universal Base Canvas Tint */}
      <div className="absolute inset-0 bg-[#010109]" />

      {/* Screen 1: Planetary Horizon Arc in upper left + subtle luminous purple sweep */}
      {screen === 1 && (
        <>
          {/* Subtle cosmic star specs */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ffffff_0.75px,transparent_1px)] [background-size:32px_32px]" />

          {/* Deep Navy/Purple radial glow in upper region */}
          <div className="absolute -top-[25%] -left-[10%] w-[90vw] max-w-[900px] h-[90vw] max-h-[900px] rounded-full bg-gradient-to-br from-[#411484]/45 via-[#060F46]/35 to-transparent blur-[110px] animate-pulse-glow" />

          {/* Planetary glowing rim / celestial curve in upper-left / center */}
          <div className="absolute -top-[35vw] -left-[15vw] w-[110vw] max-w-[1200px] h-[75vw] max-h-[750px] rounded-[100%] border-t-[1.5px] border-l-[1px] border-[#9d4edd]/50 opacity-80 filter drop-shadow-[0_0_40px_rgba(157,78,221,0.6)] transform -rotate-[14deg] animate-wave-float" style={{ animationDuration: '12s' }} />
          <div className="absolute -top-[36vw] -left-[14vw] w-[110vw] max-w-[1200px] h-[75vw] max-h-[750px] rounded-[100%] border-t-[1px] border-[#c084fc]/40 opacity-70 filter drop-shadow-[0_0_15px_rgba(192,132,252,0.8)] transform -rotate-[14deg] animate-wave-float" style={{ animationDuration: '15s', animationDelay: '1s' }} />

          {/* Luminous purple nebular wave streaming from lower left */}
          <div className="absolute -bottom-[20%] -left-[20%] w-[120vw] max-w-[1100px] h-[70vw] max-h-[600px] rounded-full bg-gradient-to-tr from-[#411484]/35 via-[#7928ca]/25 to-transparent blur-[100px] transform rotate-[25deg] animate-pulse-glow" style={{ animationDuration: '8s', animationDelay: '2s' }} />

          {/* Curved ethereal light ribbon (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full opacity-35"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M-100 850 C 300 700, 700 450, 1500 200"
              stroke="url(#screen1Sweep)"
              strokeWidth="2.5"
              strokeOpacity="0.4"
            />
            <path
              d="M-50 920 C 400 750, 850 520, 1550 250"
              stroke="url(#screen1Sweep2)"
              strokeWidth="1.5"
              strokeOpacity="0.25"
            />
            <defs>
              <linearGradient id="screen1Sweep" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#411484" stopOpacity="0" />
                <stop offset="40%" stopColor="#9d4edd" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#060F46" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="screen1Sweep2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7928ca" stopOpacity="0" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#411484" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </>
      )}

      {/* Screen 2: Deep blue/purple lower horizon crescent flare radiating from bottom center */}
      {screen === 2 && (
        <>
          {/* Subtle starfield */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#ffffff_0.75px,transparent_1px)] [background-size:36px_36px]" />

          {/* Central ambient glow behind typography */}
          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gradient-to-r from-[#411484]/30 via-[#7928ca]/25 to-[#060F46]/30 blur-[90px] animate-pulse-glow" style={{ animationDuration: '7s' }} />

          {/* Lower celestial horizon curve */}
          <div className="absolute -bottom-[45vw] md:-bottom-[350px] left-1/2 -translate-x-1/2 w-[140vw] max-w-[1500px] h-[50vw] max-h-[500px] rounded-[50%] border-t-[2px] border-[#60a5fa]/70 opacity-90 filter drop-shadow-[0_0_35px_rgba(96,165,250,0.8)] animate-wave-float" style={{ animationDuration: '14s' }} />
          <div className="absolute -bottom-[46vw] md:-bottom-[355px] left-1/2 -translate-x-1/2 w-[142vw] max-w-[1520px] h-[50vw] max-h-[500px] rounded-[50%] border-t-[1.5px] border-[#c084fc]/50 opacity-70 filter drop-shadow-[0_0_20px_rgba(192,132,252,0.6)] animate-wave-float" style={{ animationDuration: '18s', animationDelay: '2s' }} />

          {/* Luminous corona flare shooting upwards from bottom horizon */}
          <div className="absolute -bottom-[15%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[350px] bg-gradient-to-t from-[#2563eb]/30 via-[#7c3aed]/25 to-transparent blur-[70px] rounded-full animate-pulse-glow" style={{ animationDuration: '5s' }} />
          <div className="absolute -bottom-[5%] left-1/2 -translate-x-1/2 w-[40vw] max-w-[450px] h-[180px] bg-gradient-to-t from-[#93c5fd]/40 via-[#a855f7]/35 to-transparent blur-[50px] rounded-full animate-pulse-glow" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        </>
      )}

      {/* Screen 3: Ethereal flowing ribbons / silk auroral waves */}
      {screen === 3 && (
        <>
          {/* Subtle star dust */}
          <div className="absolute inset-0 opacity-35 bg-[radial-gradient(#ffffff_0.75px,transparent_1px)] [background-size:28px_28px]" />

          {/* Ambient violet aura behind logo */}
          <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full bg-gradient-to-b from-[#7928ca]/30 via-[#411484]/25 to-transparent blur-[85px] animate-pulse-glow" style={{ animationDuration: '6s' }} />

          {/* Silk aurora ribbons across the dark background - with float animation */}
          <div className="absolute inset-0 w-full h-full animate-wave-float" style={{ animationDuration: '20s' }}>
            <svg
              className="absolute inset-0 w-full h-full opacity-45 pointer-events-none"
              viewBox="0 0 1440 900"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Ribbon 1: sweeping from lower-left to upper-right */}
              <path
                d="M-50 650 C 350 780, 800 450, 1500 180"
                stroke="url(#screen3Ribbon1)"
                strokeWidth="4"
                strokeOpacity="0.75"
                filter="url(#ribbonBlur)"
              />
              {/* Ribbon 2: second harmonic */}
              <path
                d="M-100 520 C 400 680, 750 320, 1500 240"
                stroke="url(#screen3Ribbon2)"
                strokeWidth="2.5"
                strokeOpacity="0.6"
                filter="url(#ribbonBlur)"
              />
              {/* Ribbon 3: faint lower accent */}
              <path
                d="M100 850 C 600 800, 950 600, 1450 450"
                stroke="url(#screen3Ribbon1)"
                strokeWidth="1.5"
                strokeOpacity="0.3"
              />
              <defs>
                <filter id="ribbonBlur" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="screen3Ribbon1" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#411484" stopOpacity="0.1" />
                  <stop offset="30%" stopColor="#7928ca" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#c084fc" stopOpacity="0.9" />
                  <stop offset="90%" stopColor="#60a5fa" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#060F46" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="screen3Ribbon2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#060F46" stopOpacity="0" />
                  <stop offset="40%" stopColor="#a855f7" stopOpacity="0.7" />
                  <stop offset="75%" stopColor="#e879f9" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#411484" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Bottom subtle secondary glow */}
          <div className="absolute -bottom-[20%] right-[10%] w-[500px] h-[350px] bg-gradient-to-tl from-[#411484]/30 via-[#060F46]/20 to-transparent blur-[90px] rounded-full animate-pulse-glow" style={{ animationDuration: '9s', animationDelay: '1s' }} />
        </>
      )}
    </div>
  );
};
