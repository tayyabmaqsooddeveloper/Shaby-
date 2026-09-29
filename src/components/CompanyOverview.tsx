import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, Sparkles } from 'lucide-react';

interface CompanyOverviewProps {
  onStartProject: () => void;
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({ onStartProject }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const stages = [
    'Concept',
    'Planning',
    'Design',
    'Construction',
    'Interior',
    'Execution',
    'Finishing'
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background architectural grid texture */}
      <div className="absolute inset-0 bg-arch-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono font-bold tracking-widest text-blue-700 uppercase mb-3">
            <span>COMPANY OVERVIEW</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight max-w-3xl leading-tight">
            Building Excellence with Innovation &amp; Integrity
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Large project image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl group">
              <img
                src="/shaby/download-2-1.jpg"
                alt="SHABY Architectural Residence"
                className="w-full h-[460px] sm:h-[540px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600">SHABY Landmark</p>
                  <p className="text-sm font-bold text-slate-900">Modern Building Residential</p>
                  <p className="text-xs text-slate-500">Bahria Enclave, Islamabad</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Compass className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Subtle blue accent corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-600 pointer-events-none" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-600 pointer-events-none" />
          </div>

          {/* RIGHT: Company Content */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed">
              <strong className="text-blue-700">SHABY Architecture • Construction • Interior</strong> is a full-service design and construction company dedicated to creating exceptional residential and commercial spaces.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We provide complete solutions from initial concept and planning to final execution and finishing. Our team blends creativity, technical expertise, and modern design trends to deliver functional and visually stunning results.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Quality craftsmanship, attention to detail, and premium materials are at the heart of every project. We focus on transparency, timely delivery, and building long-term client trust. Our mission is to turn visions into lasting structures that reflect style, strength, and excellence.
            </p>

            {/* Complete Solution Milestones */}
            <div className="pt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-700 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Complete Solutions From Concept to Finishing:</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {stages.map((stg, i) => (
                  <div
                    key={stg}
                    className="px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 text-xs font-semibold text-slate-700 flex items-center gap-2 transition-colors"
                  >
                    <span className="text-[11px] font-mono font-bold text-blue-600">0{i + 1}</span>
                    <span>{stg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expanded Detailed Company Narrative */}
            {isExpanded && (
              <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200 space-y-4 text-sm text-slate-700 animate-fadeIn">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900">Turnkey Accountability</h5>
                    <p className="text-xs text-slate-600 mt-1">
                      By integrating architectural design, structural engineering, procurement, and interior fit-out under a single experienced roof, we prevent contractor disputes and cost overruns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-slate-900">Islamabad Regional Mastery</h5>
                    <p className="text-xs text-slate-600 mt-1">
                      Extensive on-ground experience navigating CDA, RDA, Bahria Enclave, and DHA regulations, soil conditions, and high-performance climate-responsive building standards.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-50 rounded-lg transition-colors border border-slate-300 hover:border-slate-800 shadow-sm cursor-pointer"
              >
                <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              </button>

              <button
                onClick={onStartProject}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-blue-600 rounded-lg transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Consult With Our Architects</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
