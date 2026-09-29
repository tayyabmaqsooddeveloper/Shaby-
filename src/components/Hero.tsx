import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronRight, Play, Phone, MessageSquare, Send, Sparkles } from 'lucide-react';
import { SHABY_CONTACT } from '../data/shabyData';

interface HeroProps {
  onExploreProjects: () => void;
  onStartProject: () => void;
  onPlayVideo: () => void;
}

const HERO_SLIDES = [
  {
    image: '/shaby/6283.webp',
    title: 'Architectural Excellence',
    tag: 'Turnkey Design & Build',
    location: 'Bahria Enclave, Islamabad'
  },
  {
    image: '/shaby/download-1-1.jpg',
    title: 'Commercial Stature',
    tag: 'Corporate Plazas & Facades',
    location: 'Commercial Hub, Islamabad'
  },
  {
    image: '/shaby/1-kanal-classic-house-front-elevation.jpg',
    title: 'Luxury Residences',
    tag: '1 Kanal Classical Architecture',
    location: 'DHA / Bahria, Islamabad'
  },
  {
    image: '/shaby/download-2-1.jpg',
    title: 'Modern Minimalist Living',
    tag: 'Cantilevered Glass Architecture',
    location: 'Sector G, Islamabad'
  }
];

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onStartProject,
  onPlayVideo,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [quickQuery, setQuickQuery] = useState('');

  // Typing animation for "Building Excellence with Innovation & Integrity"
  const fullHeadline = 'Building Excellence with Innovation & Integrity';
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedLength < fullHeadline.length) {
      timeout = setTimeout(() => {
        setDisplayedLength((prev) => prev + 1);
      }, 55); // smooth typing speed
    } else if (!isDeleting && displayedLength === fullHeadline.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3500); // pause after typing complete
    } else if (isDeleting && displayedLength > 0) {
      timeout = setTimeout(() => {
        setDisplayedLength((prev) => prev - 1);
      }, 25); // quick backspace
    } else if (isDeleting && displayedLength === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 600); // pause before retyping
    }

    return () => clearTimeout(timeout);
  }, [displayedLength, isDeleting, fullHeadline.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const renderTypedHeadline = () => {
    const part1 = fullHeadline.slice(0, Math.min(displayedLength, 25));
    const part2 = displayedLength > 25 ? fullHeadline.slice(25, Math.min(displayedLength, 35)) : '';
    const part3 = displayedLength > 35 ? fullHeadline.slice(35, Math.min(displayedLength, 38)) : '';
    const part4 = displayedLength > 38 ? fullHeadline.slice(38, Math.min(displayedLength, 47)) : '';

    return (
      <>
        <span>{part1}</span>
        {part2 && (
          <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2">
            {part2}
          </span>
        )}
        {part3 && <span>{part3}</span>}
        {part4 && (
          <span className="text-slate-800">
            {part4}
          </span>
        )}
        <span
          className="inline-block w-[3px] sm:w-[4px] h-[0.82em] ml-1 bg-blue-600 align-middle animate-pulse"
          aria-hidden="true"
        />
      </>
    );
  };

  const handleSendQuickQuery = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const queryText = quickQuery.trim() || 'Salam SHABY team, I would like to get a quote and consultation for my project.';
    const text = 
      `*Project Inquiry - SHABY Architecture • Interior • Construction*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `📝 *Query / Requirement:*\n${queryText}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent from SHABY Website Quick Inquiry_`;
    const waUrl = `https://api.whatsapp.com/send?phone=923095010409&text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleQuickChip = (chipText: string) => {
    setQuickQuery(chipText);
    const text = 
      `*Project Inquiry - SHABY Architecture • Interior • Construction*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `📝 *Inquiry Topic:*\n${chipText}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent from SHABY Website Quick Inquiry_`;
    const waUrl = `https://api.whatsapp.com/send?phone=923095010409&text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative w-full bg-white pt-32 pb-20 overflow-hidden border-b border-blue-100">
      {/* Background Architectural Blueprint Grid Texture in crisp light blue */}
      <div className="absolute inset-0 bg-arch-grid opacity-75 pointer-events-none" />
      
      {/* Soft Ambient Blue architectural gradient glow */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Brand Stature, Headline, Actions & Quick WhatsApp Input */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Subheading Kicker */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>ARCHITECTURE • INTERIOR • CONSTRUCTION</span>
              </span>
            </div>

            {/* Main Headline with Dynamic Typing Animation */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] min-h-[5.5rem] sm:min-h-[7rem] lg:min-h-[8.5rem]">
              {renderTypedHeadline()}
            </h1>

            {/* Professional Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              SHABY Architecture • Construction • Interior is a full-service design and construction company dedicated to creating exceptional residential and commercial spaces from concept to turnkey completion in Islamabad.
            </p>

            {/* CALL TO ACTION BUTTONS: ONLY 2 BUTTONS AS REQUESTED */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <button
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-blue-600 active:scale-[0.98] transition-all duration-200 rounded-lg shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-800 active:scale-[0.98] transition-all rounded-lg shadow-sm cursor-pointer"
              >
                <span>Explore Projects</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-800" />
              </button>
            </div>

            {/* DIRECT WHATSAPP QUERY BOX */}
            <div className="pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/90 border border-slate-200/90 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>Direct WhatsApp Query Box</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 font-medium">
                    To official 0309-5010409
                  </span>
                </div>

                <form onSubmit={handleSendQuickQuery} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={quickQuery}
                    onChange={(e) => setQuickQuery(e.target.value)}
                    placeholder="Apni query yahan likhein (e.g. 1 Kanal house cost, interior quote, 2D plan)..."
                    className="flex-grow px-4 py-2.5 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 text-slate-900 placeholder-slate-400"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer shrink-0"
                  >
                    <span>Send Query</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>

                {/* Quick Chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-xs">
                  <span className="text-slate-400 text-[11px]">Quick Topics:</span>
                  <button
                    type="button"
                    onClick={() => handleQuickChip('House Construction Cost & Turnkey Consultation')}
                    className="px-2.5 py-1 text-xs text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors cursor-pointer"
                  >
                    House Construction
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickChip('Interior Design Consultation & Quotation')}
                    className="px-2.5 py-1 text-xs text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors cursor-pointer"
                  >
                    Interior Design
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickChip('Commercial Plaza & Facade Planning')}
                    className="px-2.5 py-1 text-xs text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors cursor-pointer"
                  >
                    Commercial Plaza
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickChip('2D & 3D Floor Planning Drawings')}
                    className="px-2.5 py-1 text-xs text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors cursor-pointer"
                  >
                    2D/3D Floor Plan
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Architectural Showcase Image Slider */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-200 bg-white shadow-2xl p-2">
              <div className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden group">
                {HERO_SLIDES.map((slide, idx) => (
                  <div
                    key={slide.image}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      idx === activeSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
                    } transform transition-transform duration-7000`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  </div>
                ))}

                {/* Floating Information Overlay on Image */}
                <div className="absolute bottom-5 left-5 right-5 z-20 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-blue-100 shadow-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 block">
                      {HERO_SLIDES[activeSlide].tag}
                    </span>
                    <p className="text-sm font-bold text-slate-900">
                      {HERO_SLIDES[activeSlide].title}
                    </p>
                    <p className="text-xs text-slate-500">
                      {HERO_SLIDES[activeSlide].location}
                    </p>
                  </div>
                  
                  {/* Watch Film Button */}
                  <button
                    onClick={onPlayVideo}
                    className="w-11 h-11 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer shrink-0"
                    title="Watch SHABY Film"
                  >
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </button>
                </div>
              </div>

              {/* Slider Dots */}
              <div className="flex items-center justify-center gap-2 pt-3 pb-1">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.title}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-2 transition-all duration-300 rounded-full focus:outline-none ${
                      idx === activeSlide ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-blue-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 z-30 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-blue-200 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-bold font-mono">
                4.6★
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">Client Satisfaction</p>
                <p className="text-[11px] text-slate-500 font-mono">Bahria Enclave, Islamabad</p>
              </div>
            </div>

            {/* Quick Call Out Badge */}
            <div className="absolute -top-4 -right-4 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-600 text-white shadow-xl text-xs font-bold">
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>UAN: {SHABY_CONTACT.uan}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
