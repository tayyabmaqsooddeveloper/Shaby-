import React from 'react';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50 border-t border-blue-100">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-arch-grid opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/70 border border-blue-200 text-xs font-mono font-bold tracking-widest text-blue-700 uppercase mb-3">
            <span>OUR CORE PHILOSOPHY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Vision &amp; Mission
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Guiding principles that define our commitment to architectural brilliance and engineering integrity.
          </p>
        </div>

        {/* Split Section: Two Editorial Pillars in White & Blue */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* LEFT: VISION */}
          <div className="relative p-8 sm:p-12 rounded-3xl bg-white text-slate-900 border-2 border-blue-100 shadow-xl flex flex-col justify-between group hover:border-blue-500 hover:shadow-blue-600/10 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shadow-sm">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-blue-600 block">Direction &amp; Future</span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black tracking-wider text-slate-900">VISION</h3>
                  </div>
                </div>
                <span className="text-4xl font-display font-black text-blue-100 group-hover:text-blue-600 transition-colors">01</span>
              </div>

              <div className="space-y-4 text-slate-700 font-normal text-base leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p>
                    To become a leading name in <strong className="text-blue-800 font-bold">Architecture, Interior &amp; Construction</strong> by delivering innovative and timeless designs.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p>
                    To transform ideas into inspiring spaces that reflect quality, creativity, and excellence.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p>
                    To build trust through commitment, professionalism, and outstanding project delivery across residential and commercial sectors.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-blue-700">
              <span>INNOVATION • TIMELESS DESIGN</span>
              <span className="text-slate-400">ISLAMABAD</span>
            </div>
          </div>

          {/* RIGHT: MISSION */}
          <div className="relative p-8 sm:p-12 rounded-3xl bg-white text-slate-900 border-2 border-blue-100 shadow-xl flex flex-col justify-between group hover:border-blue-500 hover:shadow-blue-600/10 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shadow-sm">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-blue-600 block">Commitment &amp; Execution</span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black tracking-wider text-slate-900">MISSION</h3>
                  </div>
                </div>
                <span className="text-4xl font-display font-black text-blue-100 group-hover:text-blue-600 transition-colors">02</span>
              </div>

              <div className="space-y-4 text-slate-700 font-normal text-base leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p>
                    To provide high-quality architectural design, durable construction, and elegant interior solutions under one trusted roof.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p>
                    To combine modern engineering standards with aesthetic beauty to create functional and enduring spaces.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p>
                    To prioritize client satisfaction through honest communication, attention to detail, and timely completion.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-blue-700">
              <span>QUALITY • INTEGRITY • EXECUTION</span>
              <span className="text-slate-400">TURNKEY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
