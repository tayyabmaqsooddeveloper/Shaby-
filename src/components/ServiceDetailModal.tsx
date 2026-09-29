import React from 'react';
import { X, CheckCircle, ArrowRight, Layers, Phone, MessageSquare } from 'lucide-react';
import { ServiceItem, SHABY_CONTACT } from '../data/shabyData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onStartProject: (serviceName?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onStartProject,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header with Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center filter brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors z-20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Info */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-widest mb-1.5">
              <span>SERVICE {service.number}</span>
              <span>•</span>
              <span>TURNKEY SPECIALTY</span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700">
          {/* Introduction */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-700 mb-2">
              EXECUTIVE BRIEF
            </h4>
            <p className="text-lg text-slate-900 font-semibold leading-relaxed">
              {service.intro}
            </p>
          </div>

          {/* Full Description */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-2">
              DETAILED SCOPE
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {service.description}
            </p>
          </div>

          {/* Benefits Grid */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-700 mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              <span>CORE VALUE ADVANTAGES</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5"
                >
                  <span className="text-blue-600 font-bold font-mono">0{idx + 1}.</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Stage Process */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>DELIVERY PROCESS</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {service.process.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-slate-700 flex flex-col justify-between"
                >
                  <span className="text-[10px] font-mono text-blue-700 font-bold mb-1">
                    PHASE 0{idx + 1}
                  </span>
                  <span className="font-semibold text-slate-900">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2.5 text-xs">
            <a
              href={`tel:${SHABY_CONTACT.uan}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call: {SHABY_CONTACT.uan}</span>
            </a>

            <a
              href={`https://api.whatsapp.com/send?phone=923095010409&text=${encodeURIComponent(`Salam SHABY team, I would like to inquire about your ${service.title} service.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366] text-white font-bold hover:bg-[#20ba59] transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Query</span>
            </a>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/3 sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onStartProject(service.title);
              }}
              className="w-2/3 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <span>Inquire Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
