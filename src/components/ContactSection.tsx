import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { SHABY_CONTACT } from '../data/shabyData';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProjectType = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: initialProjectType || 'Architecture',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const projectTypes = [
    'Architecture',
    'Interior Design',
    'House Construction',
    'Commercial Construction',
    '2D & 3D Planning',
    'Renovation',
    'Landscape Design',
    'Other'
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone or WhatsApp number.';
    }
    if (!formData.projectType) {
      errs.projectType = 'Please select a project type.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write your query / project requirements.';
    }
    return errs;
  };

  const generateWhatsAppUrl = (data = formData) => {
    const text = 
      `*New Project Query - SHABY Architecture • Interior • Construction*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${data.name.trim()}\n` +
      `📞 *Phone / WhatsApp:* ${data.phone.trim()}\n` +
      `📧 *Email:* ${data.email.trim() || 'Not specified'}\n` +
      `🏗️ *Project Type:* ${data.projectType}\n` +
      `📝 *Query / Details:*\n${data.message.trim()}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `_Sent from SHABY Website (Bahria Enclave, Islamabad)_`;
    
    return `https://api.whatsapp.com/send?phone=923095010409&text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const waUrl = generateWhatsAppUrl();
    setWhatsappUrl(waUrl);

    // Automatically trigger WhatsApp in new tab safely
    try {
      const link = document.createElement('a');
      link.href = waUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.warn('Auto click blocked, user can click button:', err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono font-bold tracking-widest text-blue-700 uppercase mb-3">
            <span>DIRECT WHATSAPP &amp; INQUIRY DESK</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Send Your Query to WhatsApp
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Yahan apni inquiry likhein — submit karte hi ye direct SHABY ke official WhatsApp (<span className="font-bold text-slate-900">0309-5010409</span>) par chali jayegi.
          </p>
        </div>

        {/* Two-Column Grid: Contact Information & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Contact Information & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-8 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <h3 className="font-display text-2xl font-bold text-slate-900 tracking-wide">
                  Direct Assistance
                </h3>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Online
                </span>
              </div>

              {/* UAN & Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-700 block mb-0.5">
                    UAN 24/7 HELPLINE
                  </span>
                  <a
                    href={`tel:${SHABY_CONTACT.uan}`}
                    className="font-display text-xl font-bold text-slate-900 hover:text-blue-700 transition-colors font-mono"
                  >
                    {SHABY_CONTACT.uan}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Instant phone call &amp; architectural consultation</p>
                </div>
              </div>

              {/* Official WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-700 block mb-0.5">
                    OFFICIAL WHATSAPP
                  </span>
                  <a
                    href={SHABY_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl font-bold text-slate-900 hover:text-emerald-600 transition-colors font-mono"
                  >
                    +92 309 5010409
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Fast responses, 2D/3D layouts &amp; quotation files</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-700 block mb-0.5">
                    HEAD OFFICE
                  </span>
                  <p className="font-bold text-slate-900 text-base">
                    {SHABY_CONTACT.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Islamabad, Pakistan</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-700 block mb-0.5">
                    EMAIL INQUIRIES
                  </span>
                  <a
                    href={`mailto:${SHABY_CONTACT.email}`}
                    className="font-semibold text-slate-900 hover:text-blue-700 transition-colors text-base font-mono"
                  >
                    {SHABY_CONTACT.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Detailed architectural blueprints &amp; BOQs</p>
                </div>
              </div>

              {/* Fast Action Buttons: Call Now & WhatsApp side by side */}
              <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-3">
                <a
                  href={`tel:${SHABY_CONTACT.uan}`}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-slate-900 hover:bg-blue-600 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Helpline</span>
                </a>

                <a
                  href={SHABY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Validated Contact Form that sends directly to WhatsApp */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-xl relative">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      Query Prepared for WhatsApp!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                      Aapki inquiry tayyar hai. Agar WhatsApp automatically open nahi hua, to neeche button par click karein:
                    </p>
                  </div>

                  {/* Prominent Direct WhatsApp Open Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-display text-sm font-bold tracking-wider uppercase transition-all shadow-xl shadow-emerald-600/25 active:scale-98"
                    >
                      <MessageSquare className="w-5 h-5 fill-current" />
                      <span>OPEN IN WHATSAPP NOW</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <a
                      href={`tel:${SHABY_CONTACT.uan}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display text-sm font-bold uppercase transition-all shadow-md shadow-blue-600/20"
                    >
                      <Phone className="w-4 h-4 fill-current" />
                      <span>CALL: {SHABY_CONTACT.uan}</span>
                    </a>
                  </div>

                  {/* Message Preview Box */}
                  <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs font-mono text-slate-700 space-y-1">
                    <p className="text-slate-400 font-semibold mb-1">Generated WhatsApp Message Preview:</p>
                    <p className="font-bold text-slate-900">Name: {formData.name}</p>
                    <p>Phone: {formData.phone}</p>
                    {formData.email && <p>Email: {formData.email}</p>}
                    <p>Project: {formData.projectType}</p>
                    <p className="whitespace-pre-wrap text-slate-800 mt-2 bg-white p-2.5 rounded border border-slate-200">
                      {formData.message}
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          projectType: 'Architecture',
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Write Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-xl font-bold text-slate-900">
                        Write Your Query Here
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill details below — will directly open in WhatsApp to discuss with SHABY consultants.
                      </p>
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp Connected</span>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Muhammad Tariq"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-blue-600'
                      } text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3 inline" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Grid: Phone (Required) & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0300-1234567"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                          errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-emerald-600'
                        } text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-all`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3 h-3 inline" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-slate-400">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. tariq@gmail.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Type <span className="text-blue-600">*</span>
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-white text-slate-900">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Query / Message */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Query / Message <span className="text-emerald-600">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Yahan apni query likhein: Plot size, Bahria Enclave / Islamabad location, design style, construction budget, ya timeline..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-emerald-600'
                      } text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3 h-3 inline" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Prominent Action Button: SEND ON WHATSAPP */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-lg bg-slate-900 hover:bg-blue-600 active:scale-[0.99] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:shadow flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending to WhatsApp...</span>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4 text-[#25D366]" />
                        <span>Send Query via WhatsApp (0309-5010409)</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500 font-medium">
                    Query write karein aur button dabayein — message automatically WhatsApp par send ho jayega.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
