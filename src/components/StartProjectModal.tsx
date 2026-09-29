import React, { useState } from 'react';
import { X, MessageSquare, Phone, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { SHABY_CONTACT } from '../data/shabyData';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const StartProjectModal: React.FC<StartProjectModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'House Construction',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || 'House Construction');
  const [location, setLocation] = useState('');
  const [query, setQuery] = useState('');
  const [isSent, setIsSent] = useState(false);

  React.useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = 
      `*New Project Inquiry - SHABY Architecture • Interior • Construction*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Client Name:* ${name.trim() || 'Valued Client'}\n` +
      `📞 *Phone Number:* ${phone.trim() || 'Not specified'}\n` +
      `🏗️ *Project / Service:* ${service}\n` +
      `📍 *Location:* ${location.trim() || 'Islamabad'}\n` +
      `📝 *Query / Details:*\n${query.trim() || 'I would like to discuss this project with SHABY team.'}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent from SHABY Website (Bahria Enclave, Islamabad)_`;

    const waUrl = `https://api.whatsapp.com/send?phone=923095010409&text=${encodeURIComponent(formattedText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsSent(true);
  };

  const handleChipClick = (chipText: string) => {
    setQuery(prev => prev ? `${prev} - ${chipText}` : chipText);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white border-2 border-blue-200 rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-[10px] font-mono font-bold text-blue-700 uppercase">
              DIRECT WHATSAPP QUERY
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Start a Project
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Apni query yahan likhein — submit karte hi direct official WhatsApp (<strong className="text-slate-900">0309-5010409</strong>) par dispatch ho jayegi.
          </p>
        </div>

        {isSent ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-slate-900">Query Sent to WhatsApp!</h4>
              <p className="text-xs text-slate-600 mt-1">
                Aapka message WhatsApp par open kar diya gaya hai. Hamari team jald aapko reply karegi.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <a
                href={SHABY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Open WhatsApp</span>
              </a>
              <a
                href={`tel:${SHABY_CONTACT.uan}`}
                className="flex-1 py-3 px-4 rounded-lg bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm font-mono"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SHABY_CONTACT.uan}</span>
              </a>
            </div>
            <button
              onClick={() => {
                setIsSent(false);
                setQuery('');
              }}
              className="text-xs text-blue-600 font-bold hover:underline cursor-pointer"
            >
              Write Another Query
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                Your Name <span className="text-blue-600">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Tariq Mehmood"
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 text-slate-900"
              />
            </div>

            {/* Grid: Phone & Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone / WhatsApp <span className="text-emerald-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0300-1234567"
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Service / Project
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 text-slate-900 cursor-pointer"
                >
                  <option value="House Construction">House Construction</option>
                  <option value="Architectural Design">Architectural Design</option>
                  <option value="Interior Design">Interior Design</option>
                  <option value="Commercial Construction">Commercial Construction</option>
                  <option value="2D & 3D Planning">2D & 3D Planning</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Landscape Design">Landscape Design</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                Plot Size &amp; Location <span className="text-slate-400">(Optional)</span>
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. 1 Kanal, Bahria Enclave Sector C"
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:outline-none text-slate-900"
              />
            </div>

            {/* Message / Query */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                Your Query / Requirements <span className="text-emerald-600">*</span>
              </label>
              <textarea
                rows={3}
                required
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Yahan apni requirements likhein: Grey structure, turnkey finishing, interior budget, timeline..."
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 text-slate-900 resize-none"
              />
            </div>

            {/* Suggestion Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px]">
              <span className="text-slate-500 font-medium">Add to query:</span>
              <button
                type="button"
                onClick={() => handleChipClick('Need Turnkey Construction Cost')}
                className="px-2 py-0.5 rounded bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-colors"
              >
                + Turnkey Cost
              </button>
              <button
                type="button"
                onClick={() => handleChipClick('Looking for Modern 3D Elevation')}
                className="px-2 py-0.5 rounded bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-colors"
              >
                + 3D Elevation
              </button>
              <button
                type="button"
                onClick={() => handleChipClick('Visit Office Bahria Enclave')}
                className="px-2 py-0.5 rounded bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-colors"
              >
                + Office Visit
              </button>
            </div>

            {/* Action Buttons: Submit on WhatsApp + Call Option */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-slate-900 hover:bg-blue-600 active:scale-[0.99] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Send Query to WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center justify-center gap-2 pt-1 text-xs">
                <span className="text-slate-500">Or talk directly to our engineer:</span>
                <a
                  href={`tel:${SHABY_CONTACT.uan}`}
                  className="font-bold text-slate-900 hover:text-blue-700 hover:underline inline-flex items-center gap-1 font-mono"
                >
                  <Phone className="w-3 h-3 text-blue-600" />
                  <span>Call {SHABY_CONTACT.uan}</span>
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
