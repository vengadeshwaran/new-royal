import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, Send, Upload, ShieldCheck, Globe, Clock, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [contactData, setContactData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    remarks: '',
    source: 'Search Engine',
    attachmentName: '',
    captchaAnswer: ''
  });

  const [captchaChallenge] = useState({ q: '4 + 3 = ?', expected: '7' });
  const [captchaError, setCaptchaError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactData.captchaAnswer.trim() !== captchaChallenge.expected) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-[#DCE8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Maritime Dispatch */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5CAB] mb-3">
                <span className="w-5 h-[2px] bg-[#0B5CAB]" />
                <span>DIRECT MARITIME COMMUNICATIONS</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#052B52] tracking-tight text-balance">
                Contact Us
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#526777] leading-relaxed">
              Reach out to our corporate headquarters or coastal fleet operations offices. Our technical coordinators are available to answer equipment inquiries, vessel availability, or tender submissions.
            </p>

            {/* Direct Communication Channels */}
            <div className="space-y-4 pt-2">
              <div className="p-4 bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#0B5CAB] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#526777] font-semibold">
                    Official Inquiries & Tenders
                  </span>
                  <a
                    href="mailto:info@royalswalf.com"
                    className="text-[#063B73] font-bold hover:text-[#0B5CAB] transition-colors text-sm"
                  >
                    info@royalswalf.com
                  </a>
                  <span className="block text-[11px] text-[#526777] mt-0.5">
                    Central dispatch for domestic & international maritime ventures
                  </span>
                </div>
              </div>

              <div className="p-4 bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm flex items-start gap-3.5">
                <Globe className="w-5 h-5 text-[#0B5CAB] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#526777] font-semibold">
                    Registered Maritime Portal
                  </span>
                  <span className="text-[#052B52] font-bold text-sm">
                    https://royalswalf.com
                  </span>
                  <span className="block text-[11px] text-[#526777] mt-0.5">
                    Official corporate portal of Swalf Group
                  </span>
                </div>
              </div>

              <div className="p-4 bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#0B5CAB] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#526777] font-semibold">
                    Headquarters & Operational Bases
                  </span>
                  <span className="text-[#052B52] font-bold text-sm">
                    India (Western & Eastern Maritime Coasts)
                  </span>
                  <span className="block text-[11px] text-[#526777] mt-0.5">
                    Rapid deployment network across Indian Major Ports, GCC & Southeast Asia
                  </span>
                </div>
              </div>

              <div className="p-4 bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#0B5CAB] mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-[#526777] font-semibold">
                    Operations Readiness
                  </span>
                  <span className="text-[#052B52] font-bold text-sm">
                    24/7 Marine Fleet Support & Emergency Dispatch
                  </span>
                  <span className="block text-[11px] text-[#526777] mt-0.5">
                    Continuous marine coordination center
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7 bg-[#F5FAFF] border border-[#DCE8F2] p-6 sm:p-10 rounded-sm shadow-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-[#EAF4FC] border border-[#0B5CAB] flex items-center justify-center text-[#0B5CAB] mx-auto mb-5">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-[#052B52] mb-2">
                  Message Dispatched
                </h3>
                <p className="text-sm text-[#526777] max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <strong className="text-[#102A43]">{contactData.name}</strong>. Your communication has been routed to our corporate relations desk. A team member will respond to <strong className="text-[#063B73]">{contactData.email}</strong> promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setContactData({
                      company: '',
                      name: '',
                      email: '',
                      phone: '',
                      remarks: '',
                      source: 'Search Engine',
                      attachmentName: '',
                      captchaAnswer: ''
                    });
                  }}
                  className="cursor-pointer px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#063B73] hover:bg-[#0B5CAB] rounded-sm transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-xl font-bold uppercase text-[#052B52] tracking-tight mb-2">
                  Send An Enterprise Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactData.company}
                      onChange={(e) => setContactData({ ...contactData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      placeholder="Contact Person"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
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
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      placeholder="email@company.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      placeholder="+91 / International"
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                    Question / Remarks *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={contactData.remarks}
                    onChange={(e) => setContactData({ ...contactData, remarks: e.target.value })}
                    placeholder="Describe how Swalf Group can assist with your equipment, survey, or marine construction requirements..."
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                      How Did You Find Us?
                    </label>
                    <select
                      value={contactData.source}
                      onChange={(e) => setContactData({ ...contactData, source: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                    >
                      <option value="Search Engine">Search Engine (Google / Maritime Portal)</option>
                      <option value="Industry Conference">Maritime Trade Show / Exhibition</option>
                      <option value="Port Authority Referral">Port Authority / Client Referral</option>
                      <option value="Direct Outreach">Direct Industry Outreach</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                      Human Verification ({captchaChallenge.q}) *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactData.captchaAnswer}
                      onChange={(e) => setContactData({ ...contactData, captchaAnswer: e.target.value })}
                      placeholder="Enter number"
                      className={`w-full px-3.5 py-2.5 text-xs bg-white border rounded-sm text-[#102A43] focus:outline-none ${
                        captchaError ? 'border-rose-500' : 'border-[#DCE8F2] focus:border-[#0B5CAB]'
                      }`}
                    />
                    {captchaError && (
                      <span className="text-[10px] text-rose-500 mt-1 block">
                        Incorrect verification answer. Please enter {captchaChallenge.expected}.
                      </span>
                    )}
                  </div>
                </div>

                {/* File Attachment */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                    Attachment (Optional Document)
                  </label>
                  <div className="border border-dashed border-[#B6D8F2] bg-white p-2.5 text-center rounded-sm hover:border-[#063B73] transition-colors relative">
                    <input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setContactData({ ...contactData, attachmentName: file.name });
                        }
                      }}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div className="flex items-center justify-center gap-2 text-xs text-[#526777]">
                      <Upload className="w-3.5 h-3.5 text-[#0B5CAB]" />
                      <span>{contactData.attachmentName ? contactData.attachmentName : 'Attach specification or document (Max 15MB)'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="cursor-pointer w-full py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white bg-[#063B73] hover:bg-[#0B5CAB] rounded-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4" />
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
