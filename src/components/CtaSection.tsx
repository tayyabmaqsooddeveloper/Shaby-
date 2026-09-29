import React from 'react';
import { ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { SHABY_CONTACT } from '../data/shabyData';

interface CtaSectionProps {
  onContactClick: () => void;
  onGetQuoteClick: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onContactClick,
  onGetQuoteClick,
}) => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50/80 border-t border-b border-blue-200">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-60 pointer-events-none" />

      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 border border-blue-300/60 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
          <span>COLLABORATION &amp; CONSULTATION</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-5 max-w-3xl leading-tight">
          Ready to Start Your Project?
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mb-10 font-normal leading-relaxed">
          Get in touch with SHABY Architecture Construction &amp; Interior to discuss your project and turn your ideas into reality. Call us today or message on WhatsApp — our team is ready to guide you with expert advice and professional support.
        </p>

        {/* Buttons: CONTACT US, GET A QUOTE, CALL NOW, WHATSAPP */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full">
          {/* Contact Us */}
          <button
            onClick={onContactClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-blue-600 active:scale-[0.98] transition-all duration-200 rounded-lg shadow-sm hover:shadow cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Get a Quote */}
          <button
            onClick={onGetQuoteClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-800 active:scale-[0.98] transition-all rounded-lg shadow-sm cursor-pointer"
          >
            <span>Get a Quote</span>
          </button>

          {/* Call Now with UAN */}
          <a
            href={`tel:${SHABY_CONTACT.uan}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-lg transition-colors font-mono"
            title="Call SHABY 0309-5010409"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>Call {SHABY_CONTACT.uan}</span>
          </a>

          {/* WhatsApp Us */}
          <a
            href={SHABY_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-lg transition-colors shadow-sm"
            title="Chat with SHABY on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
