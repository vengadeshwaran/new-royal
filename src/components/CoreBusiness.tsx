import React from 'react';
import { CORE_BUSINESS_ITEMS } from '../data/maritimeData';
import { MaritimeImage } from './MaritimeImage';
import { Waves, Anchor, Ship, Wrench, Compass, Cpu, ArrowUpRight, Check } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Waves: <Waves className="w-5 h-5 text-[#0B5CAB]" />,
  Anchor:                   <svg fill="#0B5CAB" className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 480.156 480.156" xml:space="preserve"><g id="XMLID_187_"><path id="XMLID_190_" d="M297.213,16.538c0-9.13-7.408-16.538-16.538-16.538h-81.191c-9.132,0-16.54,7.408-16.54,16.538v23.557
		h114.27V16.538z"></path><path id="XMLID_189_" d="M251.824,148.937l114.709,45.153v-32.655c0-19.428-15.757-35.178-35.177-35.178h-34.144V72.17h-114.27
		v54.087h-34.143c-19.421,0-35.178,15.749-35.178,35.178v32.655l114.709-45.153C235.881,145.962,244.275,145.962,251.824,148.937z"></path><path id="XMLID_188_" d="M416.603,248.266l-160.487-63.173v136.675c0,8.856-7.174,16.038-16.038,16.038
		c-8.863,0-16.037-7.182-16.037-16.038V185.093L63.553,248.266c-6.657,2.614-10.04,10.03-7.66,16.766l59.705,169.172
		c9.725,27.534,35.756,45.952,64.949,45.952h119.063c29.193,0,55.225-18.418,64.95-45.952l59.704-169.172
		C426.643,258.296,423.262,250.88,416.603,248.266z"></path></g></svg>,
  Ship: <Ship className="w-5 h-5 text-[#0B5CAB]" />,
  Wrench: <Wrench className="w-5 h-5 text-[#0B5CAB]" />,
  Compass: <Compass className="w-5 h-5 text-[#0B5CAB]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#0B5CAB]" />
};

interface CoreBusinessProps {
  onSelectBusinessItem: (title: string) => void;
}

export const CoreBusiness: React.FC<CoreBusinessProps> = ({ onSelectBusinessItem }) => {
  return (
    <section id="core-business" className="py-24 bg-white border-t border-[#DCE8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5CAB] mb-3">
              <span className="w-5 h-[2px] bg-[#0B5CAB]" />
              <span>ENTERPRISE SERVICE SPECTRUM</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#052B52] tracking-tight text-balance">
              Our Core Business
            </h2>
          </div>

          <p className="text-sm text-[#526777] max-w-md">
            Six foundational pillars of integrated marine engineering, heavy dredging operations, custom vessel fabrication, and lifecycle fleet support.
          </p>
        </div>

        {/* 6 Core Business Cards Grid with Real Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_BUSINESS_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#F5FAFF] border border-[#DCE8F2] hover:border-[#0B5CAB] hover:bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 overflow-hidden"
            >
              <div>
                {/* Photo Header */}
                <div className="relative">
                  <MaritimeImage
                    src={item.image}
                    alt={item.title}
                    badge={item.number}
                    className="h-48 w-full"
                  />
                  <div className="absolute top-3 left-3 z-10 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm border border-[#DCE8F2] flex items-center justify-center shadow-xs">
                    {iconMap[item.icon]}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  {/* Heading & Subtitle */}
                  <h3 className="font-display text-xl font-bold uppercase text-[#052B52] tracking-tight group-hover:text-[#063B73] transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-[#0B5CAB] block mb-4">
                    {item.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-[#526777] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 pt-4 border-t border-[#DCE8F2] text-xs text-[#102A43]">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0B5CAB] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => onSelectBusinessItem(item.title)}
                  className="cursor-pointer w-full py-3 px-5 text-xs font-bold uppercase tracking-wider text-[#063B73] group-hover:text-white bg-white group-hover:bg-[#063B73] border border-[#DCE8F2] group-hover:border-[#063B73] rounded-full transition-all duration-200 flex items-center justify-between shadow-2xs"
                >
                  <span>Inquire Solution</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0B5CAB] group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
