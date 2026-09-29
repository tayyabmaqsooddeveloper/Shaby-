import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { SHABY_CONTACT } from '../data/shabyData';

interface VideoSectionProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  isOpenModal = false,
  onCloseModal,
}) => {
  const [isPlayingModal, setIsPlayingModal] = useState(isOpenModal);

  // Sync prop changes
  React.useEffect(() => {
    setIsPlayingModal(isOpenModal);
  }, [isOpenModal]);

  const handleClose = () => {
    setIsPlayingModal(false);
    if (onCloseModal) onCloseModal();
  };

  return (
    <section className="relative py-24 overflow-hidden bg-white border-t border-blue-100">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono font-bold tracking-widest text-blue-700 uppercase mb-3">
            <span>CINEMATIC SHOWCASE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Experience the Art of Construction
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Watch our architects, engineers, and master craftsmen bring complex structural concepts to life in Islamabad with unyielding precision.
          </p>
        </div>

        {/* Cinematic Video Card Frame in White & Blue */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-blue-200 bg-slate-950 shadow-2xl p-2 sm:p-3">
          <div className="relative h-[340px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden group">
            <img
              src="./shaby/6283.webp"
              alt="SHABY Architecture Film"
              className="w-full h-full object-cover object-center filter brightness-[0.65] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-blue-950/40" />

            {/* Play Button Trigger */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <button
                onClick={() => setIsPlayingModal(true)}
                className="relative group p-6 sm:p-7 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 transform hover:scale-110 shadow-2xl shadow-blue-600/50 flex items-center justify-center cursor-pointer"
                aria-label="Play SHABY Video"
              >
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-40" />
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
              </button>

              <span className="mt-5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-mono font-bold tracking-widest uppercase text-blue-900 shadow-md">
                PLAY OFFICIAL SHABY FILM
              </span>
            </div>

            {/* Bottom info bar */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-white text-xs font-mono">
              <span className="bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                SHABY Architecture • Interior • Construction
              </span>
              <span className="bg-blue-600/90 px-3 py-1.5 rounded-lg font-bold shadow-md">
                Islamabad, PK
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {isPlayingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-xl p-4 sm:p-6">
          <div className="relative w-full max-w-5xl bg-black rounded-2xl border border-blue-400/30 overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <span className="text-blue-400 font-bold">SHABY</span>
                <span>•</span>
                <span>Official Architecture &amp; Construction Film</span>
              </div>
              <button
                onClick={handleClose}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <video
                src={SHABY_CONTACT.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
                poster="./shaby/6283.webp"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
