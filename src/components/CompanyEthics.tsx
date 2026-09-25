import React, { useState } from 'react';
import { CORE_ETHICS } from '../data/maritimeData';
import { ShieldCheck, Eye, Anchor, Compass, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#0B5CAB]" />,
  Eye: <Eye className="w-5 h-5 text-[#0B5CAB]" />,
  Anchor: <>                   
  <svg fill="#0B5CAB" className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480.156 480.156" xml:space="preserve"><g id="XMLID_187_"><path id="XMLID_190_" d="M297.213,16.538c0-9.13-7.408-16.538-16.538-16.538h-81.191c-9.132,0-16.54,7.408-16.54,16.538v23.557
		h114.27V16.538z"></path><path id="XMLID_189_" d="M251.824,148.937l114.709,45.153v-32.655c0-19.428-15.757-35.178-35.177-35.178h-34.144V72.17h-114.27
		v54.087h-34.143c-19.421,0-35.178,15.749-35.178,35.178v32.655l114.709-45.153C235.881,145.962,244.275,145.962,251.824,148.937z"></path><path id="XMLID_188_" d="M416.603,248.266l-160.487-63.173v136.675c0,8.856-7.174,16.038-16.038,16.038
		c-8.863,0-16.037-7.182-16.037-16.038V185.093L63.553,248.266c-6.657,2.614-10.04,10.03-7.66,16.766l59.705,169.172
		c9.725,27.534,35.756,45.952,64.949,45.952h119.063c29.193,0,55.225-18.418,64.95-45.952l59.704-169.172
		C426.643,258.296,423.262,250.88,416.603,248.266z"></path></g>
    </svg></>,
  Compass: <Compass className="w-5 h-5 text-[#0B5CAB]" />
};

export const CompanyEthics: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(CORE_ETHICS[0].id);

  return (
    <section id="ethics" className="py-24 bg-[#F5FAFF] border-t border-[#DCE8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5CAB] mb-3">
            <span className="w-5 h-[2px] bg-[#0B5CAB]" />
            <span>VALUES & ETHICAL CHARTER</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#052B52] tracking-tight text-balance">
            Our Core Values & Business Ethics
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#526777] max-w-2xl">
            In an industry where hostile sea conditions and high-capital investments converge, our ethical charter guarantees unyielding technical accountability and client trust.
          </p>
        </div>

        {/* 4 Interactive Architectural Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_ETHICS.map((ethic) => {
            const isActive = activeId === ethic.id;
            return (
              <div
                key={ethic.id}
                onMouseEnter={() => setActiveId(ethic.id)}
                onClick={() => setActiveId(ethic.id)}
                className={`cursor-pointer transition-all duration-300 p-8 rounded-sm relative flex flex-col justify-between group ${isActive
                    ? 'border-[#063B73] bg-white shadow-lg ring-1 ring-[#063B73]/20'
                    : 'border-[#DCE8F2] bg-white/70 hover:border-[#B6D8F2] hover:bg-white'
                  } border`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#0B5CAB] tracking-wider">
                      {ethic.number}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-[#EAF4FC] border border-[#B6D8F2] flex items-center justify-center group-hover:bg-[#063B73] group-hover:text-white transition-colors">
                      {iconMap[ethic.iconName]}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold uppercase text-[#052B52] tracking-tight mb-3 group-hover:text-[#063B73] transition-colors">
                    {ethic.title}
                  </h3>

                  {/* Short Summary */}
                  <p className="text-xs text-[#526777] leading-relaxed mb-4">
                    {ethic.shortDesc}
                  </p>
                </div>

                {/* Expanded text */}
                <div className="pt-4 border-t border-[#DCE8F2] text-xs text-[#526777] leading-relaxed">
                  <p className="line-clamp-4 group-hover:line-clamp-none transition-all">
                    {ethic.fullDesc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#063B73]">
                    <span>Ethical Standard</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
