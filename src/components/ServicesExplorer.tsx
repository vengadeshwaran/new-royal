import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/maritimeData';
import { ServiceId, ServiceItem } from '../types/maritime';
import { MaritimeImage } from './MaritimeImage';
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers, ShieldCheck } from 'lucide-react';

interface ServicesExplorerProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesExplorer: React.FC<ServicesExplorerProps> = ({ onSelectServiceForQuote }) => {
  const [activeServiceId, setActiveServiceId] = useState<ServiceId>('dredging');

  const currentService: ServiceItem =
    SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[1];

  const getGraphicType = (id: ServiceId) => {
    switch (id) {
      case 'survey':
        return 'survey-sonar';
      case 'dredging':
        return 'csd-schematic';
      case 'marine_construction':
        return 'quay-construction';
      case 'diving':
        return 'subsea-diving';
      case 'consultancy':
        return 'bathymetry-map';
      default:
        return 'csd-schematic';
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-t border-[#DCE8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5CAB] mb-3">
              <span className="w-5 h-[2px] bg-[#0B5CAB]" />
              <span>CORE MARITIME SPECIALTIES & ACTIVITIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#052B52] tracking-tight text-balance">
              Services & Activities
            </h2>
          </div>

          <p className="text-sm text-[#526777] max-w-md">
            From hydrographic multibeam charting and rock channel dredging to commercial subsea diving and port EPC consultancy, Swalf Group provides end-to-end maritime execution.
          </p>
        </div>

        {/* Interactive Category Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-2.5 bg-[#F5FAFF] border border-[#DCE8F2] rounded-2xl mb-12 shadow-xs">
          {SERVICES_DATA.map((srv) => {
            const isActive = activeServiceId === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveServiceId(srv.id)}
                className={`cursor-pointer px-4 py-3.5 text-left rounded-xl transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#063B73] text-white shadow-md'
                    : 'bg-white text-[#526777] hover:text-[#063B73] hover:bg-[#EAF4FC] border border-[#DCE8F2]'
                }`}
              >
                <span className={`font-mono text-[11px] font-bold tracking-wider mb-1 block ${isActive ? 'text-[#B6D8F2]' : 'text-[#0B5CAB]'}`}>
                  {srv.code} —
                </span>
                <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-tight line-clamp-1">
                  {srv.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Service Presentation Card (Light Theme) */}
        <div className="bg-[#F5FAFF] border border-[#DCE8F2] rounded-3xl p-6 sm:p-10 shadow-sm transition-all duration-300 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#0B5CAB] uppercase tracking-widest font-bold mb-2">
                  <span>CATEGORY {currentService.code}</span>
                  <span>·</span>
                  <span>{currentService.targetDepths}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#052B52] tracking-tight">
                  {currentService.title}
                </h3>
                <p className="text-sm font-semibold text-[#063B73] mt-1">
                  {currentService.tagline}
                </p>
              </div>

              <p className="text-sm text-[#526777] leading-relaxed">
                {currentService.description}
              </p>

              {/* Sub-services Scope List */}
              <div className="pt-4 border-t border-[#DCE8F2]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#063B73] mb-3">
                  Scope of Activities ({currentService.subservices.length} Specialized Capabilities)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#102A43]">
                  {currentService.subservices.map((sub) => (
                    <div key={sub} className="flex items-start gap-2 bg-white/70 p-2 rounded-xl border border-[#DCE8F2]/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B5CAB] mt-1.5 shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables & Standards */}
              <div className="pt-4 border-t border-[#DCE8F2] grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#526777] mb-2">
                    Key Performance Metrics
                  </h5>
                  <ul className="space-y-1.5 text-xs text-[#102A43]">
                    {currentService.keyDeliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5CAB] mt-0.5 shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#526777] mb-2">
                    Governing Standards & Codes
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {currentService.standards.map((std) => (
                      <span
                        key={std}
                        className="px-3 py-1 text-[11px] font-mono text-[#063B73] bg-white border border-[#DCE8F2] rounded-full font-semibold shadow-2xs"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => onSelectServiceForQuote(currentService.title)}
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#063B73] hover:bg-[#0B5CAB] rounded-full transition-colors shadow-sm"
                >
                  <span>Request Proposal For {currentService.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Graphic Column with Real Relevant Maritime Photography */}
            <div className="lg:col-span-5 space-y-4">
              <MaritimeImage
                src={currentService.image}
                alt={currentService.title}
                badge={currentService.code}
                className="h-64 sm:h-80 w-full rounded-2xl shadow-sm border border-[#DCE8F2]"
              />

              <div className="bg-white border border-[#DCE8F2] p-5 rounded-2xl text-xs text-[#526777] space-y-2 shadow-2xs">
                <div className="flex items-center justify-between text-[#052B52] font-mono text-[11px] font-bold">
                  <span>TECHNICAL COMPLIANCE:</span>
                  <span className="text-[#0B5CAB]">100% REGULATORY AUDITED</span>
                </div>
                <p className="text-[11px] text-[#526777] leading-normal">
                  All marine operations operate under strict International Safety Management (ISM) code, IMCA diving safety guidelines, and ISO 9001:2015 quality assurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
