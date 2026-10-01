import React, { useState } from 'react';
import { ZLogo } from './ZLogo.tsx';
import { ContactCard } from './ContactCard.tsx';
import { PrimaryButton } from './PrimaryButton.tsx';
import { ArrowLeft, Sparkles, Send, X, CheckCircle2 } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const text = `Hi Zmediage,\n\nName: ${formData.name}\nEmail: ${formData.email}\nArea of Focus: ${formData.interest}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    
    // Open WhatsApp link
    window.open(`https://wa.me/918304993869?text=${encodedText}`, '_blank');
    
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
          title="hello@zmediage.com"
          subtitle="Email us"
          href="mailto:hello@zmediage.com?subject=Project%20Inquiry%20from%20QR%20Experience"
        />
        <ContactCard
          type="instagram"
          title="@zmediage"
          subtitle="Instagram"
          href="https://instagram.com/zmediage"
        />
        <ContactCard
          type="website"
          title="www.zmediage.com"
          subtitle="Visit our website"
          href="https://www.zmediage.com"
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

      {/* Interactive Project Inquiry Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-lg bg-[#08081a] border border-[#a855f7]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(138,43,226,0.4)] text-left">
            {/* Close Button */}
            <button
              onClick={resetModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

                <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start a Conversation</span>
                </div>
                <h3 id="modal-title" className="text-2xl font-bold text-white mb-2">
                  Let's Create Something Memorable
                </h3>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Tell us about your brand vision, campaign goals, or interactive experience requirements.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5" htmlFor="client-name">
                      Your Name
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5" htmlFor="client-email">
                      Work Email
                    </label>
                    <input
                      id="client-email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5" htmlFor="client-interest">
                      Area of Focus
                    </label>
                    <select
                      id="client-interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0e0e24] border border-white/10 text-white focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm transition-all"
                    >
                      <option value="BRANDING">BRANDING</option>
                      <option value="WEBSITE DEVELOPMENT">WEBSITE DEVELOPMENT</option>
                      <option value="SOCIAL MEDIA MARKETING">SOCIAL MEDIA MARKETING</option>
                      <option value="PERFORMANCE MARKETING">PERFORMANCE MARKETING</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5" htmlFor="client-message">
                      Project Notes (Optional)
                    </label>
                    <textarea
                      id="client-message"
                      rows={3}
                      placeholder="Share timeline, objectives, or initial thoughts..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-sm transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#411484] via-[#7c3aed] to-[#9d4edd] hover:opacity-95 shadow-[0_0_20px_rgba(138,43,226,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                    >
                      <span>Send Project Request</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
          </div>
        </div>
      )}
    </div>
  );
};
