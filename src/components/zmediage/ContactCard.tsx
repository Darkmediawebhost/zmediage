import React, { useState } from 'react';
import { Mail, Instagram, Globe, Check, ChevronRight } from 'lucide-react';

export interface ContactCardProps {
  type: 'email' | 'instagram' | 'website' | 'whatsapp';
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
      case 'whatsapp':
        return (
          <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        );
      case 'website':
        return <Globe className="w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6" />;
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (type === 'email' || type === 'instagram' || type === 'whatsapp') {
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
