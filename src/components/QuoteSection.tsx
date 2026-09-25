import React, { useState } from 'react';
import { ArrowUpRight, Check, Upload, ShieldCheck, Anchor, HelpCircle } from 'lucide-react';

interface QuoteSectionProps {
  initialSelection?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialSelection = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'India',
    projectType: 'Capital / Maintenance Dredging',
    requiredEquipment: initialSelection || 'Cutter Suction Dredger',
    projectLocation: '',
    message: '',
    attachmentName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="quote" className="py-24 bg-[#F5FAFF] border-t border-[#DCE8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Proof */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5CAB] mb-3">
                <span className="w-5 h-[2px] bg-[#0B5CAB]" />
                <span>PROJECT ESTIMATION & TENDER DISPATCH</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#052B52] tracking-tight text-balance">
                Your Dredging Project Starts Here
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#526777] leading-relaxed">
              Tell us about your project and our naval architects and dredging engineers will help you calculate dredge slurry logistics, identify the right equipment spread, and provide competitive CapEx / OpEx rate estimates.
            </p>

            <div className="pt-4 space-y-3.5 text-xs text-[#102A43]">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#0B5CAB] mt-0.5 shrink-0" />
                <span>Strict Non-Disclosure Agreement (NDA) on all tender bathymetry and soil logs.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#0B5CAB] mt-0.5 shrink-0" />
                <span>Rapid 24-48 hour tender turnaround for urgent berth deepening mobilizations.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#0B5CAB] mt-0.5 shrink-0" />
                <span>Direct consultation with Master Mariners and Senior Dredging Consultants.</span>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-6 bg-white border border-[#DCE8F2] rounded-sm text-xs shadow-2xs">
              <span className="font-mono text-[11px] text-[#0B5CAB] font-bold uppercase tracking-wider block mb-1">
                DIRECT ESTIMATION DESK
              </span>
              <div className="text-[#052B52] font-bold text-base mb-1">
                info@royalswalf.com
              </div>
              <div className="text-[#526777]">
                Swalf Group Marine Engineering Services · India & Global Operations
              </div>
            </div>
          </div>

          {/* Right Column: Clean Enterprise Form */}
          <div className="lg:col-span-7 bg-white border border-[#DCE8F2] p-6 sm:p-10 rounded-sm shadow-md">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-[#EAF4FC] border border-[#0B5CAB] flex items-center justify-center text-[#0B5CAB] mx-auto mb-5">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-[#052B52] mb-2">
                  Quotation Request Registered
                </h3>
                <p className="text-sm text-[#526777] max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <strong className="text-[#102A43]">{formData.name}</strong> from <strong className="text-[#102A43]">{formData.company || 'your organization'}</strong>. A senior maritime commercial manager has been assigned to your RFQ and will provide technical preliminary scoping within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="cursor-pointer px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#063B73] hover:bg-[#0B5CAB] rounded-sm transition-colors"
                >
                  Submit Another Project Scope
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-xl font-bold uppercase text-[#052B52] tracking-tight mb-2">
                  Request A Quotation
                </h3>

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
                      placeholder="e.g. Rajesh Kumar / John Edwards"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
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
                      placeholder="Port Authority / Marine EPC Contractor"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
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
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 00000"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="India / UAE / Singapore..."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                      Project Location / Port Site
                    </label>
                    <input
                      type="text"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      placeholder="Gujarat Coast / Mumbai Port / International..."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                    >
                      <option value="Capital / Maintenance Dredging">02 Dredging (Capital / Maintenance)</option>
                      <option value="Inland Dredging">Inland Desilting (Rivers / Lakes / Dams)</option>
                      <option value="Land Reclamation">Land Reclamation & Bund Construction</option>
                      <option value="Marine Survey">01 Marine Survey (Hydrographic / Multibeam)</option>
                      <option value="Marine Construction">03 Marine Construction (Quay Wall / Jetty)</option>
                      <option value="Commercial Diving">04 Commercial Diving (Hull / Subsea NDT)</option>
                      <option value="Project Management PMC">05 Project Management Consultancy (PMC)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                      Required Equipment / Fleet Spread
                    </label>
                    <input
                      type="text"
                      value={formData.requiredEquipment}
                      onChange={(e) => setFormData({ ...formData, requiredEquipment: e.target.value })}
                      placeholder="e.g. Cutter Suction Dredger, TSHD, Crane Barge"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                    Message / Project Details (Volume, Target Depth, Soil Strata) *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide estimated dredge volume (e.g. 500,000 m³), current water depth, target draft, soil type (silt/rock/sand), pipeline distance..."
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                  />
                </div>

                {/* Attachment Upload */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                    Bathymetric Chart or Tender Document (Optional)
                  </label>
                  <div className="border border-dashed border-[#B6D8F2] bg-[#F5FAFF] p-3 text-center rounded-sm hover:border-[#063B73] transition-colors relative">
                    <input
                      type="file"
                      accept=".pdf,.dwg,.dxf,.zip,.png,.jpg"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setFormData({ ...formData, attachmentName: file.name });
                        }
                      }}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className="flex items-center justify-center gap-2 text-xs text-[#526777]">
                      <Upload className="w-4 h-4 text-[#0B5CAB]" />
                      <span>{formData.attachmentName ? formData.attachmentName : 'Attach Bathymetry / Tender PDF (Max 25MB)'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="cursor-pointer flex-1 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white bg-[#063B73] hover:bg-[#0B5CAB] rounded-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>{submitting ? 'Transmitting Scope...' : 'Request A Quotation'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="cursor-pointer sm:w-auto px-6 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-[#063B73] hover:text-[#0B5CAB] bg-[#EAF4FC] hover:bg-[#DCE8F2] border border-[#B6D8F2] rounded-sm transition-colors"
                  >
                    <span>Submit Enquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
