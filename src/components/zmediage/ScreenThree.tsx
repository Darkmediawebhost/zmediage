import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ZLogo } from './ZLogo.tsx';
import { ContactCard } from './ContactCard.tsx';
import { PrimaryButton } from './PrimaryButton.tsx';
import { ArrowLeft, Sparkles, Send, X } from 'lucide-react';

export interface ScreenThreeProps {
  onBack?: () => void;
  onRestart?: () => void;
  className?: string;
}

export const ScreenThree: React.FC<ScreenThreeProps> = ({
  onBack,
  className = '',
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'BRANDING',
    message: '',
  });

  // Lock body scroll and handle Escape key when modal is open on mobile and desktop
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') resetModal();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const text = `Hi Zmediage,\n\nName: ${formData.name}\nEmail: ${formData.email}\nArea of Focus: ${formData.interest}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    
    // Open WhatsApp link
    window.open(`https://wa.me/919526840020?text=${encodedText}`, '_blank');
    
    resetModal();
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        interest: 'BRANDING',
        message: '',
      });
    }, 300);
  };

  return (
    <div
      className={`w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 relative z-10 ${className}`}
    >
      {/* 3D Geometric Faceted Z Logo with Z M E D I A G E */}
      {/* <div className="mb-6 sm:mb-8">
        <ZLogo size="lg" showWordmark={true} />
      </div> */}

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.1] mb-3 sm:mb-4 select-none">
        <span className="text-white block">Welcome to</span>
        <span className="bg-gradient-to-r from-[#d8b4fe] via-[#a855f7] to-[#7c3aed] bg-clip-text text-transparent block mt-1 drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]">
          Zmediage
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal mb-8 sm:mb-10 max-w-lg leading-relaxed">
        We create experiences that
        <br />
        people <span className="text-purple-300 font-medium">remember.</span>
      </p>

      {/* Three Contact Cards Grid */}
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-8 sm:mb-10">
        <ContactCard
          type="email"
          title="info@zmediage.com"
          subtitle="Email us"
          href="mailto:info@zmediage.com?subject=Project%20Inquiry%20from%20QR%20Experience"
        />
        <ContactCard
          type="instagram"
          title="@zmediage"
          subtitle="Instagram"
          href="https://instagram.com/zmediage"
        />
        <ContactCard
          type="whatsapp"
          title="+91 83049 93869"
          subtitle="Connect on WhatsApp"
          href="https://wa.me/918304993869"
        />
      </div>

      {/* Final CTA Button */}
      <div className="w-full flex flex-col items-center gap-3">
        <PrimaryButton onClick={() => setIsModalOpen(true)}>
          Let's Create Something Memorable
        </PrimaryButton>

        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors py-1 px-3 mt-2 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to screen 2</span>
          </button>
        )}
      </div>

      {/* Interactive Project Inquiry Modal - Mounted to body via Portal to avoid stacking context overlap */}
      {isModalOpen && typeof document !== 'undefined' && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) resetModal();
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center pt-[calc(1.5rem+env(safe-area-inset-top,0px))] pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] px-3.5 sm:px-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg my-auto bg-[#08081a]/98 backdrop-blur-2xl border border-[#a855f7]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-[0_0_70px_rgba(138,43,226,0.45)] text-left max-h-[calc(100dvh-2.5rem)] sm:max-h-[90vh] overflow-y-auto modal-scrollbar overscroll-contain flex flex-col"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={resetModal}
              className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-zinc-300 hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 z-10"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2 text-purple-400 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-1.5 sm:mb-2">
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Start a Conversation</span>
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 pr-7 leading-tight">
              Let's Create Something Memorable
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed">
              Tell us about your brand vision, campaign goals, or interactive experience requirements.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block text-[11px] sm:text-xs font-medium text-zinc-300 mb-1 sm:mb-1.5" htmlFor="client-name">
                  Your Name
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-base sm:text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-medium text-zinc-300 mb-1 sm:mb-1.5" htmlFor="client-email">
                  Work Email
                </label>
                <input
                  id="client-email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-base sm:text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-medium text-zinc-300 mb-1 sm:mb-1.5" htmlFor="client-interest">
                  Area of Focus
                </label>
                <select
                  id="client-interest"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-[#0e0e24] border border-white/10 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-base sm:text-sm transition-all"
                >
                  <option value="BRANDING">BRANDING</option>
                  <option value="WEBSITE DEVELOPMENT">WEBSITE DEVELOPMENT</option>
                  <option value="SOCIAL MEDIA MARKETING">SOCIAL MEDIA MARKETING</option>
                  <option value="PERFORMANCE MARKETING">PERFORMANCE MARKETING</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-medium text-zinc-300 mb-1 sm:mb-1.5" htmlFor="client-message">
                  Project Notes (Optional)
                </label>
                <textarea
                  id="client-message"
                  rows={2}
                  placeholder="Share timeline, objectives, or initial thoughts..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-base sm:text-sm transition-all resize-none min-h-[58px] sm:min-h-[72px]"
                />
              </div>

              <div className="pt-1.5 sm:pt-2">
                <button
                  type="submit"
                  className="w-full py-3 sm:py-3.5 px-5 sm:px-6 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-[#411484] via-[#7c3aed] to-[#9d4edd] hover:opacity-95 active:scale-[0.99] shadow-[0_0_20px_rgba(138,43,226,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                  <span>Send Project Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
