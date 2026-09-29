import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, MessageSquare } from 'lucide-react';
import { SHABY_CONTACT, SHABY_SERVICES } from '../data/shabyData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory?: (category: 'ARCHITECTURE' | 'RESIDENTIAL' | 'INTERIOR' | 'COMMERCIAL') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-700 border-t-4 border-blue-600 relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-arch-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-200">
          
          {/* Brand & Narrative with EXTRA PROMINENT LOGO */}
          <div className="lg:col-span-4 space-y-6">
            {/* Prominent Logo */}
            <div className="bg-white rounded-2xl p-3.5 inline-block shadow-sm border border-slate-200">
              <img
                src="/shaby/cropped-Gemini_Generated_Image_c59rgwc59rgwc59r-copy.png"
                alt="SHABY Architecture • Interior • Construction"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              SHABY Architecture • Construction • Interior is a full-service design and construction company dedicated to creating exceptional residential and commercial spaces across Islamabad.
            </p>

            {/* Quick Action Buttons: Call & WhatsApp */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={`tel:${SHABY_CONTACT.uan}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold font-mono transition-colors"
                title="Call SHABY 0309-5010409"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call {SHABY_CONTACT.uan}</span>
              </a>

              <a
                href={SHABY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold transition-colors shadow-sm"
                title="WhatsApp SHABY"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Social profiles */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SHABY_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-blue-500 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-colors shadow-sm"
                aria-label="SHABY Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href={SHABY_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-pink-500 text-slate-600 hover:text-pink-600 flex items-center justify-center transition-colors shadow-sm"
                aria-label="SHABY Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-700 block">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Projects Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-700 block">
              SERVICES
            </span>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-600">
              {SHABY_SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-700 block">
              HEAD OFFICE
            </span>
            
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">
                  {SHABY_CONTACT.address}, {SHABY_CONTACT.city}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <a
                  href={`tel:${SHABY_CONTACT.uan}`}
                  className="text-slate-900 font-bold hover:text-blue-600 transition-colors font-mono"
                >
                  {SHABY_CONTACT.uan}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a
                  href={`mailto:${SHABY_CONTACT.email}`}
                  className="text-slate-700 hover:text-blue-600 transition-colors font-mono"
                >
                  {SHABY_CONTACT.email}
                </a>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available 24/7 for Inquiries
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL & DEVELOPER ATTRIBUTION */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <strong className="text-slate-800">SHABY Architecture • Construction • Interior</strong>. All rights reserved.
          </p>

          <p className="font-semibold text-slate-700">
            Developed by <span className="text-blue-700 font-bold">Digital Advertisers</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 font-mono transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
