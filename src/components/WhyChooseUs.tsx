import React from 'react';
import { Award, Compass, Eye, Clock, DollarSign, HeartHandshake } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/shabyData';

const ICONS = [
  Award,
  Compass,
  Eye,
  Clock,
  DollarSign,
  HeartHandshake
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background architectural dots */}
      <div className="absolute inset-0 bg-arch-dots opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono font-bold tracking-widest text-blue-700 uppercase mb-3">
            <span>THE SHABY STANDARD</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            We deliver complete Architecture, Interior &amp; Construction solutions from concept to completion.
          </p>
        </div>

        {/* 6 Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={item.title}
                className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-white transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl hover:shadow-blue-600/10 flex flex-col justify-between"
              >
                <div>
                  {/* Top row with icon & index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 group-hover:border-blue-500 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono font-semibold text-slate-400 group-hover:text-blue-600">
                  <span>SHABY GUARANTEE</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
