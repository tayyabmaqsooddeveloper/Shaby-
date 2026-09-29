import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { SHABY_CONTACT } from '../data/shabyData';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory?: (category: 'ARCHITECTURE' | 'RESIDENTIAL' | 'INTERIOR' | 'COMMERCIAL') => void;
  onOpenContact: (defaultType?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  onSelectCategory,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
    onNavigate(sectionId);
  };

  const handleCategoryClick = (
    category: 'ARCHITECTURE' | 'RESIDENTIAL' | 'INTERIOR' | 'COMMERCIAL'
  ) => {
    setMobileMenuOpen(false);
    setProjectsDropdownOpen(false);
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    onNavigate('projects');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-md border-b border-blue-100 shadow-md py-2.5 sm:py-3'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: EXTRA PROMINENT SHABY LOGO */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl p-1 -ml-1 cursor-pointer"
              aria-label="SHABY Home"
            >
              <div className="flex items-center">
                <img
                  src="/shaby/cropped-Gemini_Generated_Image_c59rgwc59rgwc59r-copy.png"
                  alt="SHABY Architecture • Interior • Construction"
                  className="h-13 sm:h-15 md:h-17 lg:h-19 w-auto max-w-[260px] sm:max-w-[320px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </button>

            {/* NAVIGATION (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-sm font-semibold">
              <button
                onClick={() => handleNavClick('home')}
                className="text-slate-800 hover:text-blue-700 transition-colors py-2 focus:outline-none cursor-pointer"
              >
                Home
              </button>

              {/* Projects dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProjectsDropdownOpen(true)}
                onMouseLeave={() => setProjectsDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('projects')}
                  className="flex items-center gap-1.5 text-slate-800 hover:text-blue-700 transition-colors py-2 focus:outline-none cursor-pointer"
                >
                  <span>Projects</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      projectsDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {projectsDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-blue-100 rounded-xl shadow-xl p-2 space-y-1 animate-fadeIn">
                    <button
                      onClick={() => handleCategoryClick('COMMERCIAL')}
                      className="w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <span>Commercial Construction</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                    </button>
                    <button
                      onClick={() => handleCategoryClick('RESIDENTIAL')}
                      className="w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <span>House Construction</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                    </button>
                    <button
                      onClick={() => handleCategoryClick('INTERIOR')}
                      className="w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <span>Interior Design</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                    </button>
                    <button
                      onClick={() => handleCategoryClick('ARCHITECTURE')}
                      className="w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <span>Architectural Design</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('services')}
                className="text-slate-800 hover:text-blue-700 transition-colors py-2 focus:outline-none cursor-pointer"
              >
                Services
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className="text-slate-800 hover:text-blue-700 transition-colors py-2 focus:outline-none cursor-pointer"
              >
                About Us
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="text-slate-800 hover:text-blue-700 transition-colors py-2 focus:outline-none cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* RIGHT: PROFESSIONAL DIRECT CONTACT & CTA */}
            <div className="hidden sm:flex items-center gap-1.5 lg:gap-2.5">
              {/* Call Link */}
              <a
                href={`tel:${SHABY_CONTACT.uan}`}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 hover:text-blue-700 hover:bg-slate-100/80 transition-all text-xs font-semibold shrink-0 group"
                title="Call SHABY 0309-5010409"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600 transition-transform group-hover:scale-110" />
                <span className="font-mono tracking-tight text-xs font-bold text-slate-800 group-hover:text-blue-700">
                  {SHABY_CONTACT.uan}
                </span>
              </a>

              {/* WhatsApp Link */}
              <a
                href={SHABY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 transition-all text-xs font-semibold shrink-0 group"
                title="Chat with SHABY on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] transition-transform group-hover:scale-110" />
                <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">WhatsApp</span>
              </a>

              {/* Subtle vertical divider */}
              <div className="h-4 w-px bg-slate-200 mx-1" />

              {/* Primary Architectural CTA */}
              <button
                onClick={() => onOpenContact()}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-blue-600 active:scale-[0.98] transition-all duration-200 rounded-lg shadow-sm hover:shadow-md cursor-pointer shrink-0"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* MOBILE QUICK ACTION + HAMBURGER */}
            <div className="flex items-center gap-1 lg:hidden">
              <a
                href={`tel:${SHABY_CONTACT.uan}`}
                className="p-2 rounded-lg text-slate-700 hover:text-blue-700 hover:bg-slate-100 transition-colors"
                title="Call 0309-5010409"
              >
                <Phone className="w-4 h-4 text-blue-600" />
              </a>

              <a
                href={SHABY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-800 hover:text-slate-950 focus:outline-none rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white border-l border-slate-200 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <img
                  src="/shaby/cropped-Gemini_Generated_Image_c59rgwc59rgwc59r-copy.png"
                  alt="SHABY Architecture • Interior • Construction"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links */}
              <div className="py-6 space-y-3 font-semibold text-slate-700">
                <button
                  onClick={() => handleNavClick('home')}
                  className="w-full text-left py-2 hover:text-blue-700"
                >
                  Home
                </button>

                {/* Mobile Projects accordion */}
                <div className="border-t border-b border-slate-200 py-3">
                  <button
                    onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                    className="w-full flex items-center justify-between text-left hover:text-blue-700"
                  >
                    <span>Projects</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileProjectsOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {mobileProjectsOpen && (
                    <div className="mt-3 pl-3 space-y-2 text-sm text-slate-600 border-l-2 border-blue-500">
                      <button
                        onClick={() => handleCategoryClick('COMMERCIAL')}
                        className="block w-full text-left py-1.5 hover:text-blue-700"
                      >
                        Commercial Construction
                      </button>
                      <button
                        onClick={() => handleCategoryClick('RESIDENTIAL')}
                        className="block w-full text-left py-1.5 hover:text-blue-700"
                      >
                        House Construction
                      </button>
                      <button
                        onClick={() => handleCategoryClick('INTERIOR')}
                        className="block w-full text-left py-1.5 hover:text-blue-700"
                      >
                        Interior Design
                      </button>
                      <button
                        onClick={() => handleCategoryClick('ARCHITECTURE')}
                        className="block w-full text-left py-1.5 hover:text-blue-700"
                      >
                        Architectural Design
                      </button>
                      <button
                        onClick={() => handleNavClick('projects')}
                        className="block w-full text-left py-1.5 text-blue-600 font-bold"
                      >
                        All Portfolio Projects →
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => handleNavClick('services')}
                  className="w-full text-left py-2 hover:text-blue-700"
                >
                  Services
                </button>

                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full text-left py-2 hover:text-blue-700"
                >
                  About Us
                </button>

                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full text-left py-2 hover:text-blue-700"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile Footer CTAs: Call + WhatsApp + Start Project */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25"
              >
                START A PROJECT
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <a
                  href={`tel:${SHABY_CONTACT.uan}`}
                  className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 hover:bg-blue-100"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600 fill-current" />
                  <span>Call Now</span>
                </a>
                <a
                  href={SHABY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-emerald-800 hover:bg-[#25D366]/20"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#25D366] fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
