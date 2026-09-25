import React, { useState } from 'react';
import { CAPABILITIES_DATA } from '../data/maritimeData';
import { ProjectCapability } from '../types/maritime';
import { MaritimeImage } from './MaritimeImage';
import { ArrowUpRight, ChevronRight, Compass } from 'lucide-react';

interface CapabilitiesSectionProps {
  onOpenProjectQuote: (projectCategory: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onOpenProjectQuote }) => {
  const [activeProject, setActiveProject] = useState<ProjectCapability>(CAPABILITIES_DATA[0]);

  return (
    <section id="capabilities" className="py-24 bg-white border-t border-[#DCE8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5CAB] mb-3">
            <span className="w-5 h-[2px] bg-[#0B5CAB]" />
            <span>TRACK RECORD & PROJECT BENCHMARKS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#052B52] tracking-tight text-balance">
            Projects & Capabilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#526777] max-w-2xl">
            Tangible benchmarks of heavy civil maritime delivery across deepwater port corridors, land reclamation bunds, and offshore hydrographic surveys.
          </p>
        </div>

        {/* Interactive Capability Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Project Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {CAPABILITIES_DATA.map((cap) => {
              const isSelected = activeProject.id === cap.id;
              return (
                <div
                  key={cap.id}
                  onClick={() => setActiveProject(cap)}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#EAF4FC] border-[#063B73] shadow-md ring-1 ring-[#063B73]/20'
                      : 'bg-[#F5FAFF] border-[#DCE8F2] hover:border-[#B6D8F2] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#0B5CAB] font-bold uppercase tracking-wider mb-1">
                    <span>{cap.category}</span>
                    <span className="text-[#526777]">{cap.location}</span>
                  </div>
                  <h3 className="font-display text-base font-bold uppercase text-[#052B52] tracking-tight">
                    {cap.title}
                  </h3>
                  <div className="mt-2 text-xs font-bold text-[#063B73] flex items-center justify-between">
                    <span>{cap.volumeOrScale}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-[#063B73]' : 'text-slate-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Project Details with Real Photography */}
          <div className="lg:col-span-7 bg-[#F5FAFF] border border-[#DCE8F2] p-6 sm:p-10 rounded-3xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-[#0B5CAB] font-bold uppercase tracking-widest pb-4 mb-6 border-b border-[#DCE8F2]">
              <span>{activeProject.category}</span>
              <span className="text-[#526777]">{activeProject.location}</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#052B52] tracking-tight mb-4">
              {activeProject.title}
            </h3>

            <p className="text-sm text-[#526777] leading-relaxed mb-6">
              {activeProject.description}
            </p>

            {/* Real Project Maritime Photograph */}
            <MaritimeImage
              src={activeProject.image}
              alt={activeProject.title}
              badge={activeProject.category}
              className="h-64 sm:h-80 w-full mb-6 rounded-2xl border border-[#DCE8F2] shadow-sm"
            />

            {/* Quantified Spec Metrics Table */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-white border border-[#DCE8F2] rounded-2xl mb-6 shadow-2xs">
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-[#526777] font-semibold">Total Scale / Volume</span>
                <span className="font-mono text-sm font-bold text-[#102A43] tabular-nums">{activeProject.volumeOrScale}</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-[#526777] font-semibold">Target Water Depth</span>
                <span className="font-mono text-sm font-bold text-[#0B5CAB]">{activeProject.waterDepth}</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-[#526777] font-semibold">Key Milestone Metric</span>
                <span className="font-mono text-sm font-bold text-emerald-600">{activeProject.keyMetric}</span>
              </div>
            </div>

            <div className="text-xs text-[#526777] mb-6">
              <strong className="text-[#102A43] uppercase tracking-wider block mb-1">Equipment Deployed:</strong>
              <span>{activeProject.equipmentUsed}</span>
            </div>

            <button
              onClick={() => onOpenProjectQuote(activeProject.category)}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#063B73] hover:bg-[#0B5CAB] rounded-full transition-colors shadow-sm"
            >
              <span>Inquire For Similar Scale Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
