import React from 'react';
import { Star, Shield, CheckCircle, Quote } from 'lucide-react';

export const TestedTrusted: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Trust Rating Metric & Badge */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">
              <span>TESTED &amp; TRUSTED</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Tested &amp; Trusted Architectural Excellence
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We are known for delivering reliable and high-quality projects every time. Our clients trust us for professionalism, durability, and excellence in every detail.
            </p>

            {/* Verified Rating Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? 'fill-amber-400' : 'fill-amber-400/40'}`}
                    />
                  ))}
                </div>
                <span className="text-xs font-mono font-bold text-blue-700">VERIFIED RATING</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-black text-slate-900 font-mono tabular-nums">
                  4.6
                </span>
                <span className="text-base text-blue-700 font-bold">
                  Customer Review
                </span>
              </div>

              <p className="text-xs text-slate-500">
                Consistently rated for transparent pricing, structural durability, and modern architectural vision in Islamabad.
              </p>
            </div>
          </div>

          {/* RIGHT: Testimonial & Reputation Card */}
          <div className="lg:col-span-7">
            <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl overflow-hidden">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-blue-100 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white border border-slate-200 overflow-hidden flex items-center justify-center shadow-sm">
                    <img
                      src="./shaby/testimonial-1.png"
                      alt="Verified Client Testimonial"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Valued Client Partnership</h3>
                    <p className="text-xs text-blue-600 font-mono font-semibold">Bahria Enclave, Islamabad</p>
                  </div>
                </div>

                <blockquote className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed italic">
                  &ldquo;Our work is built on years of experience, proven methods, and satisfied clients. We use high-quality materials and reliable techniques to ensure lasting results. Clients trust us for our professionalism, consistency, and commitment to excellence.&rdquo;
                </blockquote>

                <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span>Rigorous Construction Quality</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span>Transparent Milestone Reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
