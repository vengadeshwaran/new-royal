import React, { useState } from 'react';
import { RESOURCES_DATA, TERMINOLOGY_DATA } from '../data/maritimeData';
import { ResourceItem, TerminologyItem } from '../types/maritime';
import { BookOpen, FileText, Download, ArrowUpRight, Search, ChevronRight, Info } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'brochure' | 'terminology' | 'news'>('all');
  const [termSearch, setTermSearch] = useState('');

  const filteredTerminology = TERMINOLOGY_DATA.filter(
    (t) =>
      t.term.toLowerCase().includes(termSearch.toLowerCase()) ||
      t.definition.toLowerCase().includes(termSearch.toLowerCase()) ||
      (t.abbreviation && t.abbreviation.toLowerCase().includes(termSearch.toLowerCase()))
  );

  return (
    <section id="resources" className="py-24 bg-[#F5FAFF] border-t border-[#DCE8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5CAB] mb-3">
              <span className="w-5 h-[2px] bg-[#0B5CAB]" />
              <span>KNOWLEDGE BASE & INDUSTRY INTELLIGENCE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#052B52] tracking-tight text-balance">
              Maritime Resources & Terminology
            </h2>
          </div>

          <p className="text-sm text-[#526777] max-w-md">
            Access our corporate capabilities brochure, technical papers on TSHD dredging physics, project milestone reports, and our essential maritime lexicon.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none border-b border-[#DCE8F2]">
          <button
            onClick={() => setActiveTab('all')}
            className={`cursor-pointer px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
              activeTab === 'all'
                ? 'bg-[#063B73] text-white shadow-2xs'
                : 'bg-white text-[#526777] hover:text-[#063B73] border border-[#DCE8F2]'
            }`}
          >
            All Resources
          </button>
          <button
            onClick={() => setActiveTab('brochure')}
            className={`cursor-pointer px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
              activeTab === 'brochure'
                ? 'bg-[#063B73] text-white shadow-2xs'
                : 'bg-white text-[#526777] hover:text-[#063B73] border border-[#DCE8F2]'
            }`}
          >
            Brochure & Technical Facts
          </button>
          <button
            onClick={() => setActiveTab('terminology')}
            className={`cursor-pointer px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
              activeTab === 'terminology'
                ? 'bg-[#063B73] text-white shadow-2xs'
                : 'bg-white text-[#526777] hover:text-[#063B73] border border-[#DCE8F2]'
            }`}
          >
            Dredging Terminology ({TERMINOLOGY_DATA.length})
          </button>
        </div>

        {/* Resources Grid (Brochures & News) */}
        {activeTab !== 'terminology' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {RESOURCES_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#DCE8F2] hover:border-[#0B5CAB] p-6 sm:p-8 rounded-sm shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#0B5CAB] font-bold uppercase tracking-wider mb-2">
                    <span>{item.type}</span>
                    <span className="text-[#526777]">{item.date}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold uppercase text-[#052B52] tracking-tight group-hover:text-[#063B73] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#526777] leading-relaxed mb-6">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DCE8F2] flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-[#526777]">
                    {item.readTimeOrSize}
                  </span>

                  <a
                    href="#quote"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#063B73] hover:text-[#0B5CAB]"
                  >
                    <span>{item.type === 'Brochure' ? 'Download Dossier' : 'Read Article'}</span>
                    {item.type === 'Brochure' ? <Download className="w-3.5 h-3.5" /> : <ArrowUpRight className="w-3.5 h-3.5" />}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dredging Terminology Lexicon */}
        {(activeTab === 'terminology' || activeTab === 'all') && (
          <div className="bg-white border border-[#DCE8F2] rounded-sm p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#DCE8F2]">
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-[#052B52] tracking-tight">
                  Maritime & Dredging Terminology Lexicon
                </h3>
                <p className="text-xs text-[#526777] mt-0.5">
                  Standard nautical definitions and classification notations used across commercial dredging.
                </p>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter terms (e.g. CSD, IWS)..."
                  value={termSearch}
                  onChange={(e) => setTermSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm text-[#102A43] focus:outline-none focus:border-[#0B5CAB]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredTerminology.map((term) => (
                <div key={term.term} className="p-4 bg-[#F5FAFF] border border-[#DCE8F2] rounded-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-display text-sm font-bold uppercase text-[#063B73]">
                      {term.term}
                    </span>
                    {term.abbreviation && (
                      <span className="font-mono text-xs font-bold text-[#0B5CAB] bg-[#EAF4FC] px-2 py-0.5 rounded-2xs border border-[#B6D8F2]">
                        {term.abbreviation}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-[#526777] uppercase tracking-wider block mb-2">
                    Category: {term.category}
                  </span>
                  <p className="text-xs text-[#526777] leading-relaxed">
                    {term.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
