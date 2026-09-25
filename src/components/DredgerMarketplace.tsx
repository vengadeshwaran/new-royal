import React, { useState } from 'react';
import { BUY_SELL_OPTIONS } from '../data/maritimeData';
import { MaritimeImage } from './MaritimeImage';
import { ArrowUpRight, Check, Ship, DollarSign, Calendar, ShieldCheck, Tag } from 'lucide-react';

interface DredgerMarketplaceProps {
  onOpenMarketplaceInquiry: (intent: string) => void;
}

export const DredgerMarketplace: React.FC<DredgerMarketplaceProps> = ({ onOpenMarketplaceInquiry }) => {
  const [activeTabId, setActiveTabId] = useState<string>(BUY_SELL_OPTIONS[0].id);

  const current = BUY_SELL_OPTIONS.find(o => o.id === activeTabId) || BUY_SELL_OPTIONS[0];

  return (
    <section id="marketplace" className="py-24 bg-[#F5FAFF] border-t border-[#DCE8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5CAB] mb-3">
            <span className="w-5 h-[2px] bg-[#0B5CAB]" />
            <span>GLOBAL FLEET TRANSACTIONS & LEASING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#052B52] tracking-tight text-balance">
            Dredger Buy & Sell · Charter & Rental
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#526777] max-w-2xl">
            Acquire high-production cutter suction and trailing hopper dredgers, monetize surplus marine assets, or secure fully crewed wet charter contracts with flexible financing.
          </p>
        </div>

        {/* 4 Transaction Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {BUY_SELL_OPTIONS.map((opt) => {
            const isSelected = activeTabId === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setActiveTabId(opt.id)}
                className={`cursor-pointer p-6 text-left rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#063B73] shadow-md ring-1 ring-[#063B73]/20'
                    : 'bg-white/80 border-[#DCE8F2] hover:border-[#B6D8F2] hover:bg-white'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0B5CAB] block mb-1">
                    {opt.tag}
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase text-[#052B52] tracking-tight">
                    {opt.title}
                  </h3>
                </div>
                <p className="text-xs text-[#526777] mt-2 line-clamp-2">
                  {opt.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Option Deep-Dive Showcase with Real Vessel Photography */}
        <div className="bg-white border border-[#DCE8F2] rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#0B5CAB] font-bold uppercase tracking-widest block mb-1">
                  COMMERCIAL TRANSACTION ROUTE · {current.tag}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#052B52] tracking-tight">
                  {current.title}
                </h3>
                <p className="text-sm font-semibold text-[#063B73] mt-1">
                  {current.subtitle}
                </p>
              </div>

              <p className="text-sm text-[#526777] leading-relaxed">
                {current.desc}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#063B73]">
                  Key Commercial Advantages
                </h4>
                {current.features.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#102A43]">
                    <Check className="w-4 h-4 text-[#0B5CAB] mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Primary Action Button */}
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenMarketplaceInquiry(current.title)}
                  className="cursor-pointer inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#063B73] hover:bg-[#0B5CAB] rounded-full transition-colors shadow-sm"
                >
                  <span>{current.actionText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenMarketplaceInquiry(`Technical Details: ${current.title}`)}
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#063B73] bg-[#EAF4FC] hover:bg-[#DCE8F2] border border-[#B6D8F2] rounded-full transition-colors"
                >
                  <span>Request Dredger Details</span>
                </button>
              </div>
            </div>

            {/* Right Graphic with Real Fleet Photograph */}
            <div className="lg:col-span-5">
              <MaritimeImage
                src={(current as any).image}
                alt={current.title}
                badge={current.tag}
                className="h-64 sm:h-80 w-full rounded-2xl border border-[#DCE8F2] shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
