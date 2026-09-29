import React from 'react';
import { Star, ShieldCheck, Clock, Layers } from 'lucide-react';

export const CompanyStats: React.FC = () => {
  const verifiedStats = [
    {
      value: '4.6',
      unit: '/ 5.0',
      label: 'Customer Review Rating',
      subtext: 'Verified client reviews & feedback',
      icon: Star,
      iconColor: 'text-amber-500 bg-amber-50 border-amber-200'
    },
    {
      value: '100%',
      unit: '',
      label: 'Client Satisfaction',
      subtext: 'Guaranteed quality & transparency',
      icon: ShieldCheck,
      iconColor: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      value: '24/7',
      unit: '',
      label: 'UAN Assistance',
      subtext: '0309-5010409 Direct consultation',
      icon: Clock,
      iconColor: 'text-blue-700 bg-blue-50 border-blue-200'
    },
    {
      value: '08',
      unit: 'Disciplines',
      label: 'Integrated Services',
      subtext: 'From concept to turnkey delivery',
      icon: Layers,
      iconColor: 'text-sky-600 bg-sky-50 border-sky-200'
    }
  ];

  return (
    <section className="py-14 bg-slate-50 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {verifiedStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Verified Metric
                  </span>
                  <div className={`p-2 rounded-lg border ${stat.iconColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-blue-900 font-mono tabular-nums">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-sm sm:text-base font-bold text-blue-600 font-mono">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-slate-800">{stat.label}</h3>
                  <p className="text-xs text-slate-500 mt-1">{stat.subtext}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
