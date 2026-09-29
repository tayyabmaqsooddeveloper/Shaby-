import React from 'react';
import { SHABY_PROCESS } from '../data/shabyData';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono font-bold tracking-widest text-blue-700 uppercase mb-3">
            <span>RIGOROUS METHODOLOGY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Our Architectural &amp; Construction Process
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            From initial sketch to key handover, our transparent six-stage workflow guarantees technical precision, cost control, and design integrity.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {SHABY_PROCESS.map((p) => (
            <div
              key={p.step}
              className="relative p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-white transition-all duration-300 hover:-translate-y-1 group shadow-sm hover:shadow-xl hover:shadow-blue-600/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                  <span className="font-display text-4xl font-black text-blue-600 font-mono">
                    {p.step}
                  </span>
                  <div className="w-3.5 h-3.5 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors border border-blue-200" />
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 mb-3 tracking-wide group-hover:text-blue-700 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono font-bold text-slate-400 group-hover:text-blue-600">
                <span>STAGE {p.step} OF 06</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
