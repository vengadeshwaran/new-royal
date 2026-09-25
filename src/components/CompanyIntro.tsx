import React from 'react';
import { COMPANY_STATS } from '../data/maritimeData';
import { MaritimeImage } from './MaritimeImage';
import { CheckCircle2, Compass, ShieldCheck, Waves } from 'lucide-react';

export const CompanyIntro: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F5FAFF] border-t border-[#DCE8F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5CAB] mb-3">
            <span className="w-5 h-[2px] bg-[#0B5CAB]" />
            <span>ESTABLISHED 2010 · MARITIME HERITAGE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#052B52] tracking-tight text-balance max-w-4xl">
            About Swalf Group
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#526777] leading-relaxed text-base">
            <p className="text-lg text-[#102A43] font-medium leading-relaxed">
              Established in 2010, <strong className="text-[#063B73] font-bold">Swalf Group (Royal Swalf)</strong> is an international dredging operating company and maritime solutions enterprise providing high-end technology, specialized naval equipment, and comprehensive engineering consultation.
            </p>

            <p>
              Headquartered with strategic maritime bases along India’s extensive coastline and operational deployments across international maritime fairways, Swalf Group has established long-term client relationships with port authorities, government ministries, offshore energy developers, and EPC contractors.
            </p>

            <p>
              Our capabilities span end-to-end dredging and reclamation, deep-water port navigation deepening, coastal protection, custom dredger construction, and subsea diving surveys. Every project is executed with rigorous safety protocols and unyielding environmental responsibility to preserve marine ecosystems and coastal stability.
            </p>

            {/* Core Pillars Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-[#102A43] font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B5CAB] shrink-0" />
                <span>Established 2010 · Indian & Global Heritage</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B5CAB] shrink-0" />
                <span>International Maritime Experience</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B5CAB] shrink-0" />
                <span>Dredging & Reclamation Leadership</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0B5CAB] shrink-0" />
                <span>Turnkey Marine Engineering Solutions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Technical Card with Real Marine Fleet Photography */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#DCE8F2] p-6 rounded-3xl shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#DCE8F2] pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#0B5CAB]" />
                  <span className="font-display font-bold uppercase text-sm tracking-wider text-[#052B52]">
                    Operational Scope
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#0B5CAB] uppercase font-bold tracking-wider">
                  Established 2010
                </span>
              </div>

              {/* Real Shipyard & Fleet Photo */}
              <MaritimeImage
                src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1000&q=80"
                alt="Swalf Group Shipyard and Marine Fleet"
                badge="Naval Engineering"
                className="h-52 w-full rounded-2xl mb-5 border border-[#DCE8F2] shadow-sm"
              />

              <div className="space-y-3 text-xs text-[#526777]">
                <div className="flex items-center justify-between py-1.5 border-b border-[#DCE8F2]/60">
                  <span className="text-[#102A43] font-medium">Corporate Portal</span>
                  <span className="font-mono text-[#063B73] font-bold">royalswalf.com</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-[#DCE8F2]/60">
                  <span className="text-[#102A43] font-medium">Engineering Scope</span>
                  <span className="font-mono text-[#0B5CAB] font-semibold">Dredging & Reclamation</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-[#102A43] font-medium">HQ Base</span>
                  <span className="font-mono text-[#102A43]">India (Global Operations)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Statistics Grid */}
        <div className="mt-16 pt-12 border-t border-[#DCE8F2] grid grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANY_STATS.map((stat) => (
            <div key={stat.label} className="border-l-3 border-[#0B5CAB] pl-4">
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#052B52] tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0B5CAB] mt-1 mb-1">
                {stat.label}
              </div>
              <p className="text-xs text-[#526777] leading-normal">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
