import React, { useState, useEffect } from 'react';
import { X, Check, ArrowUpRight, ShieldCheck, Upload } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillItem?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefillItem = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    serviceOrProduct: prefillItem || 'Dredging Operations',
    projectDetails: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefillItem) {
      setFormData(prev => ({ ...prev, serviceOrProduct: prefillItem }));
    }
  }, [prefillItem]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-[#DCE8F2] rounded-sm max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 hover:bg-[#EAF4FC] rounded-sm transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-12 h-12 rounded-full bg-[#EAF4FC] border border-[#0B5CAB] flex items-center justify-center text-[#0B5CAB] mx-auto mb-4">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-bold uppercase text-[#052B52] mb-2">
              Quotation Transmitted
            </h3>
            <p className="text-xs text-[#526777] max-w-md mx-auto leading-relaxed mb-6">
              Thank you, <strong className="text-[#102A43]">{formData.name}</strong>. Your requirement for <strong className="text-[#063B73]">{formData.serviceOrProduct}</strong> has been assigned to our commercial engineering desk. A formal response will be provided within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="cursor-pointer px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#063B73] hover:bg-[#0B5CAB] rounded-sm transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 pb-4 border-b border-[#DCE8F2]">
              <span className="text-[11px] font-mono text-[#0B5CAB] font-bold uppercase tracking-widest block mb-1">
                SWALF GROUP · ROYAL SWALF
              </span>
              <h3 className="font-display text-2xl font-extrabold uppercase text-[#052B52] tracking-tight">
                Request A Quotation
              </h3>
              <p className="text-xs text-[#526777] mt-1">
                Direct estimation for vessel charter, dredger acquisition, marine civil construction, or hydrographic survey.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Organization Name"
                    className="w-full px-3 py-2 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 / International"
                    className="w-full px-3 py-2 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                  Product / Service / Vessel Model *
                </label>
                <input
                  type="text"
                  required
                  value={formData.serviceOrProduct}
                  onChange={(e) => setFormData({ ...formData, serviceOrProduct: e.target.value })}
                  placeholder="e.g. Cutter Suction Dredger, Hydrographic Survey, Quay Wall"
                  className="w-full px-3 py-2 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                  Project Outline & Technical Scope
                </label>
                <textarea
                  rows={3}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  placeholder="Water depth, location, soil characteristics, estimated cubic meters or duration..."
                  className="w-full px-3 py-2 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#063B73] hover:bg-[#0B5CAB] rounded-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>{loading ? 'Processing...' : 'Submit Quotation Request'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
