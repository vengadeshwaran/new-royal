import React from 'react';
import { MaritimeImage } from './MaritimeImage';
import { ShieldCheck, CheckCircle2, Award, Globe, Leaf, Zap, Anchor } from 'lucide-react';

export const WhySwalf: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: '15+ Years of International Dredging Experience',
      desc: 'Since 2010, Swalf Group has successfully moved tens of millions of cubic meters of dense alluvial marine silt, clay, and fractured basalt across India and international waters.'
    },
    {
      num: '02',
      title: 'End-to-End Dredging & Marine Engineering Solutions',
      desc: 'Eliminate subcontracting friction. We manage the entire marine pipeline in-house: from initial multibeam bathymetric charting to heavy dredging, quay piling, and final class certification.'
    },
    {
      num: '03',
      title: 'Modern Equipment & Customized Technical Solutions',
      desc: 'Our vessels operate with real-time slurry density gauges, velocity flowmeters, and 3D GPS cutting visualization that maximize solid production while minimizing bunker fuel consumption.'
    },
    {
      num: '04',
      title: 'Environmental Responsibility & Coastal Remediation',
      desc: 'Active deployment of geotextile silt screens, acoustic marine mammal deterrents, and bio-friendly hydraulic fluids ensuring full compliance with Coastal Regulation Zone (CRZ) clearances.'
    }
  ];

  return (
    <section className="py-24 bg-[#F5FAFF] border-t border-[#DCE8F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5CAB] mb-3">
              <span className="w-5 h-[2px] bg-[#0B5CAB]" />
              <span>THE SWALF ADVANTAGE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[#052B52] tracking-tight leading-[1.08] text-balance">
              Why Swalf Group?
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-[#526777] leading-relaxed">
              We do not treat dredging as mere excavation. We treat it as precision naval civil engineering where millions of dollars and critical commercial ship navigation rely on sub-decimeter accuracy.
            </p>
          </div>
        </div>

        {/* 2-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Visual Schematic with Quality Markers */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-[#DCE8F2] p-6 sm:p-8 rounded-3xl shadow-sm overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#DCE8F2]">
                <span className="font-mono text-xs text-[#063B73] uppercase font-bold tracking-wider">
                  QHSE SAFETY & MARITIME STANDARDS
                </span>
                <span className="text-[11px] font-mono text-[#526777] font-semibold">
                  ISO 9001 / ISM
                </span>
              </div>

              {/* Real Operational Photo */}
              <MaritimeImage
                src="/images/photo-1569154941061-e231b4725ef1.jpg"
                alt="Swalf Group High Precision Marine Operations"
                badge="ISO 9001 / ISM"
                className="mb-6 h-56 w-full rounded-2xl border border-[#DCE8F2] shadow-sm"
              />

              <div className="space-y-3 text-xs text-[#102A43]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0B5CAB] shrink-0" />
                  <span>IACS Classification Society survey compliance on all heavy hulls</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0B5CAB] shrink-0" />
                  <span>Zero-LTI safety protocols enforced on all 24/7 offshore shifts</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0B5CAB] shrink-0" />
                  <span>Comprehensive rapid mobilization parts cache at key Indian ports</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DCE8F2] flex items-center justify-between text-xs font-mono text-[#526777]">
              <span>ESTABLISHED 2010</span>
              <span className="text-[#063B73] font-bold">ROYAL SWALF MARITIME</span>
            </div>
          </div>

          {/* Right Column: Numbered Editorial Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="divide-y divide-[#DCE8F2] border-t border-b border-[#DCE8F2]">
              {pillars.map((pillar) => (
                <div key={pillar.num} className="py-6 group hover:pl-2 transition-all duration-200">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-base font-bold text-[#0B5CAB] mt-0.5">
                      {pillar.num}
                    </span>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-[#052B52] tracking-tight mb-2 group-hover:text-[#063B73] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#526777] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF4FC] flex items-center justify-center text-[#0B5CAB] shrink-0 shadow-2xs">
                                  <svg fill="#ffffffff" className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480.156 480.156" xml:space="preserve"><g id="XMLID_187_"><path id="XMLID_190_" d="M297.213,16.538c0-9.13-7.408-16.538-16.538-16.538h-81.191c-9.132,0-16.54,7.408-16.54,16.538v23.557
		h114.27V16.538z"></path><path id="XMLID_189_" d="M251.824,148.937l114.709,45.153v-32.655c0-19.428-15.757-35.178-35.177-35.178h-34.144V72.17h-114.27
		v54.087h-34.143c-19.421,0-35.178,15.749-35.178,35.178v32.655l114.709-45.153C235.881,145.962,244.275,145.962,251.824,148.937z"></path><path id="XMLID_188_" d="M416.603,248.266l-160.487-63.173v136.675c0,8.856-7.174,16.038-16.038,16.038
		c-8.863,0-16.037-7.182-16.037-16.038V185.093L63.553,248.266c-6.657,2.614-10.04,10.03-7.66,16.766l59.705,169.172
		c9.725,27.534,35.756,45.952,64.949,45.952h119.063c29.193,0,55.225-18.418,64.95-45.952l59.704-169.172
		C426.643,258.296,423.262,250.88,416.603,248.266z"></path></g></svg>
              </div>
              <p className="text-xs text-[#526777] leading-relaxed">
                Operating with comprehensive Marine Hull & Machinery (H&M) and Protection & Indemnity (P&I) club insurance coverage across all international territories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
