import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompanyOverview } from './components/CompanyOverview';
import { CompanyStats } from './components/CompanyStats';
import { WhyChooseUs } from './components/WhyChooseUs';
import { VisionMission } from './components/VisionMission';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { LatestProject } from './components/LatestProject';
import { ProcessSection } from './components/ProcessSection';
import { VideoSection } from './components/VideoSection';
import { TestedTrusted } from './components/TestedTrusted';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StartProjectModal } from './components/StartProjectModal';
import { MessageSquare, Phone } from 'lucide-react';
import { SHABY_CONTACT } from './data/shabyData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<
    'ALL' | 'ARCHITECTURE' | 'RESIDENTIAL' | 'INTERIOR' | 'COMMERCIAL'
  >('ALL');
  const [inquiryType, setInquiryType] = useState('House Construction');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleStartProject = (serviceOrProjectName?: string) => {
    if (serviceOrProjectName) {
      if (serviceOrProjectName.toLowerCase().includes('interior')) {
        setInquiryType('Interior Design');
      } else if (serviceOrProjectName.toLowerCase().includes('house') || serviceOrProjectName.toLowerCase().includes('residential')) {
        setInquiryType('House Construction');
      } else if (serviceOrProjectName.toLowerCase().includes('commercial')) {
        setInquiryType('Commercial Construction');
      } else if (serviceOrProjectName.toLowerCase().includes('floor') || serviceOrProjectName.toLowerCase().includes('planning')) {
        setInquiryType('2D & 3D Planning');
      } else if (serviceOrProjectName.toLowerCase().includes('renovation')) {
        setInquiryType('Renovation');
      } else if (serviceOrProjectName.toLowerCase().includes('landscape')) {
        setInquiryType('Landscape Design');
      } else {
        setInquiryType('Architecture');
      }
    }
    setIsStartModalOpen(true);
  };

  const handleCategorySelect = (
    cat: 'ARCHITECTURE' | 'RESIDENTIAL' | 'INTERIOR' | 'COMMERCIAL'
  ) => {
    setSelectedCategory(cat);
    scrollToSection('projects');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Premium Sticky Header in White & Blue */}
      <Header
        onNavigate={scrollToSection}
        onSelectCategory={handleCategorySelect}
        onOpenContact={handleStartProject}
      />

      <main className="flex-grow">
        {/* Cinematic White & Blue Hero */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onStartProject={() => handleStartProject('House Construction')}
          onPlayVideo={() => setIsVideoModalOpen(true)}
        />

        {/* Company Overview (Two-column layout with 7-milestones) */}
        <CompanyOverview onStartProject={() => handleStartProject('Turnkey Construction')} />

        {/* Company Statistics (Verified Real Numbers) */}
        <CompanyStats />

        {/* Why Choose Us (6 Feature Blocks) */}
        <WhyChooseUs />

        {/* Vision & Mission (Split editorial in White & Blue) */}
        <VisionMission />

        {/* All 8 Services with Detail Modals */}
        <ServicesSection onStartProject={handleStartProject} />

        {/* Full Project Portfolio with Filter Tabs & Lightbox */}
        <PortfolioSection
          initialCategory={selectedCategory}
          onDiscussProject={handleStartProject}
        />

        {/* Latest Project Spotlight */}
        <LatestProject onDiscussProject={handleStartProject} />

        {/* 6-Stage Architectural Process Timeline */}
        <ProcessSection />

        {/* Full-width Video Section in White & Blue */}
        <VideoSection
          isOpenModal={isVideoModalOpen}
          onCloseModal={() => setIsVideoModalOpen(false)}
        />

        {/* Tested & Trusted (4.6 Customer Rating & Reputation) */}
        <TestedTrusted />

        {/* Large White & Blue CTA */}
        <CtaSection
          onContactClick={() => scrollToSection('contact')}
          onGetQuoteClick={() => handleStartProject('Turnkey Quote')}
        />

        {/* Validated Contact Section & Direct WhatsApp Form */}
        <ContactSection initialProjectType={inquiryType} />
      </main>

      {/* Footer with White & Blue theme and Digital Advertisers attribution */}
      <Footer
        onNavigate={scrollToSection}
        onSelectCategory={handleCategorySelect}
      />

      {/* Start a Project / Direct WhatsApp Query Modal */}
      <StartProjectModal
        isOpen={isStartModalOpen}
        onClose={() => setIsStartModalOpen(false)}
        defaultService={inquiryType}
      />

      {/* FLOATING ACTION DOCK: SLEEK EXECUTIVE ARCHITECTURAL BAR */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 pointer-events-auto">
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/95 backdrop-blur-md rounded-full shadow-2xl border border-slate-800">
          {/* Call Action */}
          <a
            href={`tel:${SHABY_CONTACT.uan}`}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full text-slate-200 hover:text-white hover:bg-white/10 transition-colors text-xs font-semibold font-mono"
            title="Call Helpline: 0309-5010409"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">{SHABY_CONTACT.uan}</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* Vertical divider */}
          <div className="h-3.5 w-px bg-slate-700/80" />

          {/* WhatsApp Action */}
          <button
            onClick={() => setIsStartModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
            title="Send Direct Query on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
