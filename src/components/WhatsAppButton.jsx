import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BAKERY_CONFIG } from '../data/config';
import { createWhatsAppLink } from '../utils/whatsapp';

export const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="WhatsApp Quick Contact"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip Label */}
      <span
        className={`hidden md:block mr-3 px-3.5 py-1.5 rounded-full bg-white text-espresso text-xs font-serif font-semibold shadow-nouveau border border-gold-500/40 transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat on WhatsApp 💬
      </span>

      {/* Floating Button */}
      <a
        href={createWhatsAppLink(BAKERY_CONFIG.whatsappDefaultGreeting)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Direct WhatsApp Chat with ${BAKERY_CONFIG.brandName}`}
        className="relative group p-3.5 sm:p-4 rounded-full bg-[#25D366] text-white shadow-nouveau-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center min-w-[50px] min-h-[50px]"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-0" />
        <MessageCircle className="w-6 h-6 fill-current relative z-10" />
      </a>
    </aside>
  );
};
