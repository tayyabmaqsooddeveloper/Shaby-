import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { SHABY_PROJECTS, ProjectItem } from '../data/shabyData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { LightboxModal } from './LightboxModal';

type CategoryFilter = 'ALL' | 'ARCHITECTURE' | 'RESIDENTIAL' | 'INTERIOR' | 'COMMERCIAL';

interface PortfolioSectionProps {
  initialCategory?: CategoryFilter;
  onDiscussProject: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  initialCategory = 'ALL',
  onDiscussProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>(initialCategory);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Lightbox state
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: 'ALL PROJECTS', value: 'ALL' },
    { label: 'ARCHITECTURE', value: 'ARCHITECTURE' },
    { label: 'RESIDENTIAL', value: 'RESIDENTIAL' },
    { label: 'INTERIOR', value: 'INTERIOR' },
    { label: 'COMMERCIAL', value: 'COMMERCIAL' },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'ALL') return SHABY_PROJECTS;
    return SHABY_PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const handleOpenLightbox = (images: string[], initialIndex: number, title: string) => {
    setLightboxImages(images);
    setLightboxIndex(initialIndex);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono font-bold tracking-widest text-blue-700 uppercase mb-3">
              <span>CURATED ARCHITECTURAL WORKS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Full Project Portfolio
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal leading-relaxed">
            Explore our recently completed projects that showcase creativity, precision, and modern design excellence across Islamabad.
          </p>
        </div>

        {/* Filter Controls (Segmented Bar) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 w-fit mb-12 shadow-inner">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 focus:outline-none cursor-pointer ${
                activeFilter === cat.value
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-white border border-slate-200 hover:border-blue-500 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl hover:shadow-blue-600/10 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-blue-600 text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-md">
                  {project.category}
                </div>

                {/* Quick Lightbox Action Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenLightbox(project.gallery, 0, project.title);
                  }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-slate-800 transition-colors shadow-md cursor-pointer opacity-0 group-hover:opacity-100"
                  aria-label="Enlarge image"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
                </button>
              </div>

              {/* Information Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-semibold text-blue-600 block mb-1">
                    {project.location}
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 group-hover:text-blue-800 transition-colors cursor-pointer"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight className="w-4 h-4 text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <button
                    onClick={() => handleOpenLightbox(project.gallery, 0, project.title)}
                    className="text-xs font-mono text-slate-400 hover:text-blue-600 cursor-pointer"
                  >
                    {project.gallery.length} Photos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscussProject={onDiscussProject}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        title={lightboxTitle}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)
        }
      />
    </section>
  );
};
