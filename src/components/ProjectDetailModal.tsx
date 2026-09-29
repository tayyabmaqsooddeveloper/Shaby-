import React from 'react';
import { X, MapPin, ArrowRight, Maximize2, Phone, MessageSquare } from 'lucide-react';
import { ProjectItem } from '../data/shabyData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onDiscussProject: (projectTitle: string) => void;
  onOpenLightbox: (images: string[], initialIndex: number, title: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onDiscussProject,
  onOpenLightbox,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Project Hero Image Header */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0 group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center filter brightness-[0.6]"
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

          {/* Fullscreen zoom action */}
          <button
            onClick={() => onOpenLightbox(project.gallery, 0, project.title)}
            className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black text-xs font-mono text-white border border-white/20 transition-colors z-20 cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
            <span>View Fullscreen</span>
          </button>

          {/* Hero text */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-300 uppercase tracking-widest mb-1.5">
              <span>{project.categoryLabel}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 inline" />
                {project.location}
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Project Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700">
          {/* Metadata Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1">Category</span>
              <span className="font-bold text-slate-900">{project.category}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1">Location</span>
              <span className="font-bold text-slate-900">{project.location}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1">Scope</span>
              <span className="font-bold text-slate-900">{project.scope || 'Design & Build'}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block mb-1">Year</span>
              <span className="font-bold text-blue-600 font-mono">{project.year || '2025'}</span>
            </div>
          </div>

          {/* Project Overview */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-700 mb-2">
              PROJECT OVERVIEW
            </h4>
            <p className="text-base sm:text-lg text-slate-900 font-semibold leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Design Concept */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-2">
              DESIGN CONCEPT &amp; SPATIAL PHILOSOPHY
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {project.concept}
            </p>
          </div>

          {/* Construction / Execution Details */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-2">
              CONSTRUCTION &amp; EXECUTION DETAILS
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {project.execution}
            </p>
          </div>

          {/* Gallery Thumbnails */}
          {project.gallery.length > 0 && (
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-600 mb-3 flex items-center justify-between">
                <span>PROJECT GALLERY</span>
                <span className="text-[10px] text-blue-600 font-semibold">Click to enlarge</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => onOpenLightbox(project.gallery, idx, project.title)}
                    className="relative h-28 sm:h-36 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer group shadow-sm"
                  >
                    <img
                      src={img}
                      alt={`${project.title} view ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2.5 text-xs">
            <a
              href="tel:0309-5010409"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call: 0309-5010409</span>
            </a>

            <a
              href={`https://api.whatsapp.com/send?phone=923095010409&text=${encodeURIComponent(`Salam SHABY team, I am interested in a project similar to: "${project.title}" (${project.categoryLabel}). Please share details and consultation.`)}`}
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
                onDiscussProject(project.title);
              }}
              className="w-2/3 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
