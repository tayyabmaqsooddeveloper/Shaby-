import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SHABY_SERVICES, ServiceItem } from '../data/shabyData';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onStartProject: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartProject }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono font-bold tracking-widest text-blue-700 uppercase mb-3">
              <span>COMPREHENSIVE CAPABILITIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Our Services
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
            At SHABY Architecture Construction &amp; Interior, we provide complete architectural design, construction, and interior solutions tailored to your vision.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SHABY_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative rounded-2xl bg-white border border-slate-200 hover:border-blue-500 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl hover:shadow-blue-600/10 flex flex-col justify-between"
            >
              {/* Image Thumbnail Container */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Number Badge */}
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md bg-blue-600 text-white text-xs font-mono font-bold shadow-md">
                  {service.number}
                </div>

                {/* Arrow Action Icon */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 text-blue-700 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md transform group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                    Explore Details
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-600">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onStartProject={onStartProject}
      />
    </section>
  );
};
