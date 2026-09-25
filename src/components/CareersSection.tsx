import React, { useState } from 'react';
import { CAREER_ROLES } from '../data/maritimeData';
import { CareerRole } from '../types/maritime';
import { Briefcase, ArrowUpRight, X, Check, Upload, FileText } from 'lucide-react';

export const CareersSection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<CareerRole | null>(null);
  const [applicationSuccess, setApplicationSuccess] = useState(false);
  const [applicantForm, setApplicantForm] = useState({
    name: '',
    email: '',
    phone: '',
    experienceYears: '3-5 years',
    certifications: '',
    notes: '',
    fileName: ''
  });

  const handleApply = (role: CareerRole) => {
    setSelectedRole(role);
    setApplicationSuccess(false);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantForm.name || !applicantForm.email) return;
    setApplicationSuccess(true);
  };

  return (
    <section id="careers" className="py-24 bg-white border-t border-[#DCE8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5CAB] mb-3">
              <span className="w-5 h-[2px] bg-[#0B5CAB]" />
              <span>MARITIME TALENT & CREW RECRUITMENT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#052B52] tracking-tight text-balance">
              Build Your Career in the Global Maritime Industry
            </h2>
          </div>

          <p className="text-sm text-[#526777] max-w-md">
            Join one of India’s most dynamic maritime engineering and dredging fleets. We invest in continuous officer training, safety excellence, and competitive international offshore rotation packages.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAREER_ROLES.map((role) => (
            <div
              key={role.id}
              className="bg-[#F5FAFF] border border-[#DCE8F2] hover:border-[#0B5CAB] hover:bg-white p-6 rounded-sm flex flex-col justify-between group transition-all duration-200 shadow-2xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#0B5CAB] font-bold uppercase tracking-wider mb-2">
                  <span>{role.department}</span>
                  <span className="text-[#526777]">{role.type}</span>
                </div>

                <h3 className="font-display text-xl font-bold uppercase text-[#052B52] tracking-tight group-hover:text-[#063B73] transition-colors mb-2">
                  {role.title}
                </h3>

                <p className="text-xs text-[#526777] leading-relaxed mb-4 line-clamp-3">
                  {role.overview}
                </p>

                <div className="space-y-1.5 text-xs text-[#526777] pt-3 border-t border-[#DCE8F2]">
                  <div className="flex items-center justify-between">
                    <span>Experience Req:</span>
                    <span className="font-mono text-[#102A43] font-bold">{role.experience}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Station:</span>
                    <span className="text-[#102A43] truncate max-w-[180px]">{role.location}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => handleApply(role)}
                  className="cursor-pointer w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#063B73] hover:text-white bg-white hover:bg-[#063B73] border border-[#DCE8F2] hover:border-[#063B73] rounded-sm transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <span>Apply For Role</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0B5CAB] group-hover:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* General CV Submission Callout */}
        <div className="mt-12 p-8 bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div>
            <h4 className="font-display text-lg font-bold uppercase text-[#052B52] tracking-tight">
              Don’t See Your Specific Maritime Specialty Listed?
            </h4>
            <p className="text-xs text-[#526777] mt-1 max-w-xl">
              We continually recruit Seamen, Pipeline Helpers, Riggers, Hydrographic Surveyors, and Marine Diesel Technicians for upcoming capital contracts. Submit your CV to our crewing database.
            </p>
          </div>

          <button
            onClick={() =>
              handleApply({
                id: 'general-crew',
                title: 'General Marine Crew / Maritime Specialist',
                department: 'Fleet Crewing',
                location: 'India & International Waters',
                experience: 'Open',
                type: 'Offshore Rotation',
                overview: 'Open roster application for certified marine personnel, dredge deckhands, pipeline helpers, and surveyors.',
                responsibilities: ['Support offshore marine dredging and construction operations.'],
                qualifications: ['Valid STCW 2010 or relevant technical diploma.']
              })
            }
            className="cursor-pointer px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#063B73] hover:bg-[#0B5CAB] rounded-sm transition-colors whitespace-nowrap shadow-sm"
          >
            Submit General CV
          </button>
        </div>
      </div>

      {/* Career Application Modal (Light Theme) */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-[#DCE8F2] rounded-sm max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedRole(null)}
              className="cursor-pointer absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 hover:bg-[#EAF4FC] rounded-sm transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {applicationSuccess ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-[#EAF4FC] border border-[#0B5CAB] flex items-center justify-center text-[#0B5CAB] mx-auto mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase text-[#052B52] mb-2">
                  Application Transmitted
                </h3>
                <p className="text-xs text-[#526777] max-w-md mx-auto leading-relaxed mb-6">
                  Thank you, <strong className="text-[#102A43]">{applicantForm.name}</strong>. Your qualifications for the <strong className="text-[#063B73]">{selectedRole.title}</strong> role have been received by Swalf Group crewing management. Our HR department will review your credentials and contact you directly.
                </p>
                <button
                  onClick={() => setSelectedRole(null)}
                  className="cursor-pointer px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#063B73] hover:bg-[#0B5CAB] rounded-sm transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6 pb-4 border-b border-[#DCE8F2]">
                  <span className="text-[11px] font-mono text-[#0B5CAB] uppercase tracking-widest font-bold block mb-1">
                    {selectedRole.department} · {selectedRole.type}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-[#052B52] tracking-tight">
                    {selectedRole.title}
                  </h3>
                  <p className="text-xs text-[#526777] mt-2">
                    {selectedRole.overview}
                  </p>
                </div>

                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantForm.name}
                        onChange={(e) => setApplicantForm({ ...applicantForm, name: e.target.value })}
                        placeholder="Capt. / Eng. Full Name"
                        className="w-full px-3.5 py-2 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantForm.email}
                        onChange={(e) => setApplicantForm({ ...applicantForm, email: e.target.value })}
                        placeholder="officer@maritime.com"
                        className="w-full px-3.5 py-2 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantForm.phone}
                        onChange={(e) => setApplicantForm({ ...applicantForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                        Maritime Experience
                      </label>
                      <select
                        value={applicantForm.experienceYears}
                        onChange={(e) => setApplicantForm({ ...applicantForm, experienceYears: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                      >
                        <option value="1-2 years">1 – 2 Years</option>
                        <option value="3-5 years">3 – 5 Years</option>
                        <option value="6-10 years">6 – 10 Years</option>
                        <option value="10+ years">10+ Years (Senior / Chief)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                      Certificates Held (STCW / CDC / CoC / BOSIET)
                    </label>
                    <input
                      type="text"
                      value={applicantForm.certifications}
                      onChange={(e) => setApplicantForm({ ...applicantForm, certifications: e.target.value })}
                      placeholder="e.g. Master Mariner Class 1, STCW 2010, HUET"
                      className="w-full px-3.5 py-2 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                      Upload Resume / CV (PDF or DOC)
                    </label>
                    <div className="border border-dashed border-[#B6D8F2] bg-[#F5FAFF] p-4 text-center rounded-sm hover:border-[#063B73] transition-colors relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setApplicantForm({ ...applicantForm, fileName: file.name });
                          }
                        }}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <Upload className="w-5 h-5 text-[#0B5CAB] mx-auto mb-1.5" />
                      <span className="text-xs text-[#102A43] block font-semibold">
                        {applicantForm.fileName ? applicantForm.fileName : 'Click or drag CV here'}
                      </span>
                      <span className="text-[10px] text-[#526777]">Max size 10MB</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#102A43] mb-1">
                      Brief Cover Remarks / Availability
                    </label>
                    <textarea
                      rows={2}
                      value={applicantForm.notes}
                      onChange={(e) => setApplicantForm({ ...applicantForm, notes: e.target.value })}
                      placeholder="Notice period, current vessel status, target salary expectations..."
                      className="w-full px-3.5 py-2 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedRole(null)}
                      className="cursor-pointer px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#526777] hover:text-[#102A43]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="cursor-pointer px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#063B73] hover:bg-[#0B5CAB] rounded-sm transition-colors shadow-sm"
                    >
                      Submit Candidate CV
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
