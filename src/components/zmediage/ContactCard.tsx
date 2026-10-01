import React, { useState } from 'react';
import { Mail, Instagram, Globe, Check, ChevronRight } from 'lucide-react';

export interface ContactCardProps {
  type: 'email' | 'instagram' | 'website';
  title: string;
  subtitle: string;
  href: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  type,
  title,
  subtitle,
  href,
}) => {
  const [copied, setCopied] = useState(false);

  const getIcon = () => {
    switch (type) {
      case 'email':
        return <Mail className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6" />;
      case 'instagram':
        return <Instagram className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6" />;
      case 'website':
        return <Globe className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6" />;
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (type === 'email' || type === 'instagram') {
      // Still open link or copy
      navigator.clipboard.writeText(title);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <a
      href={href}
      target={type === 'email' ? '_self' : '_blank'}
      rel={type === 'email' ? undefined : 'noopener noreferrer'}
      onClick={handleClick}
      className="group relative w-full p-3.5 sm:p-5 md:p-6 rounded-2xl bg-[#090919]/80 hover:bg-[#120b29]/85 border border-white/10 hover:border-purple-500/60 transition-all duration-300 ease-out flex flex-row sm:flex-col items-center justify-between sm:justify-center text-left sm:text-center hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(138,43,226,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
    >
      {/* Mobile Layout Left & Desktop Top: Icon */}
      <div className="flex items-center gap-3.5 sm:flex-col sm:gap-0">
        <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 group-hover:border-purple-500/50 group-hover:bg-[#411484]/40 flex items-center justify-center text-purple-300 group-hover:text-purple-200 transition-all duration-300 sm:mb-3 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] flex-shrink-0">
          {copied ? <Check className="w-4.5 h-4.5 text-emerald-400" /> : getIcon()}
        </div>

        {/* Text Container */}
        <div className="flex flex-col sm:items-center">
          <div className="text-sm sm:text-base font-semibold text-white tracking-tight break-all line-clamp-1 group-hover:text-purple-100 transition-colors">
            {title}
          </div>
          <div className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
            {copied ? 'Copied!' : subtitle}
          </div>
        </div>
      </div>

      {/* Mobile Arrow on Right (matching the mobile mockup) */}
      <div className="sm:hidden w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white">
        <ChevronRight className="w-3.5 h-3.5" />
      </div>
    </a>
  );
};
