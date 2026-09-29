import React, { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { SHABY_PROJECTS, ProjectItem } from '../data/shabyData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { LightboxModal } from './LightboxModal';

interface LatestProjectProps {
  onDiscussProject: (projectTitle: string) => void;
}

export const LatestProject: React.FC<LatestProjectProps> = ({ onDiscussProject }) => {
  const latest = SHABY_PROJECTS[0]; // 1 Kanal Classic House Front Elevation
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono font-bold tracking-widest text-blue-700 uppercase">
            <span>FEATURED SPOTLIGHT</span>
          </div>
          <span className="text-xs font-mono font-semibold text-blue-600">STATUS: RECENTLY COMPLETED</span>
        </div>

        {/* Large Featured Card */}
        <div className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center group">
          {/* Left: Large Featured Image */}
          <div className="lg:col-span-7 relative h-80 sm:h-[480px] w-full overflow-hidden bg-slate-100">
            <img
              src={latest.image}
              alt={latest.title}
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-white/40" />

            <div className="absolute top-6 left-6 px-3.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-mono font-bold shadow-lg">
              LATEST LANDMARK
            </div>
          </div>

          {/* Right: Content details */}
          <div className="lg:col-span-5 p-8 sm:p-12 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-2">
                <span>{latest.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 inline" />
                  {latest.location}
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                {latest.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                {latest.shortDesc}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Architectural Style:</span>
                <span className="text-slate-900 font-semibold">Neoclassical Manor Residence</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Turnkey Scope:</span>
                <span className="text-slate-900 font-semibold">{latest.scope}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Location:</span>
                <span className="text-slate-900 font-semibold">{latest.location}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setSelectedProject(latest)}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 hover:bg-blue-600 transition-all rounded-lg shadow-sm hover:shadow cursor-pointer"
              >
                <span>View Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setLightboxIndex(0);
                  setLightboxOpen(true);
                }}
                className="px-5 py-3.5 text-xs font-semibold text-slate-800 hover:text-slate-950 bg-white hover:bg-slate-50 rounded-lg border border-slate-300 hover:border-slate-800 transition-colors cursor-pointer"
              >
                View Full Gallery
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscussProject={onDiscussProject}
        onOpenLightbox={(imgs, idx) => {
          setLightboxIndex(idx);
          setLightboxOpen(true);
        }}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        images={latest.gallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        title={latest.title}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % latest.gallery.length)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev - 1 + latest.gallery.length) % latest.gallery.length)
        }
      />
    </section>
  );
};
