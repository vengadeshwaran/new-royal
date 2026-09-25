import React, { useState, useMemo } from 'react';
import { ACCESSORIES_DATA } from '../data/maritimeData';
import { AccessoryItem } from '../types/maritime';
import { MaritimeImage } from './MaritimeImage';
import { Search, Wrench, ArrowUpRight, Check, X } from 'lucide-react';

interface AccessoriesCatalogProps {
  onSelectAccessoryForQuote: (accessoryName: string) => void;
}

export const AccessoriesCatalog: React.FC<AccessoriesCatalogProps> = ({ onSelectAccessoryForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Pumps & Hydraulics',
    'Mechanical Assemblies',
    'Discharge Pipeline',
    'Instrumentation & Software',
    'Power & Propulsion',
    'Mooring & Anchoring'
  ];

  const filteredAccessories = useMemo(() => {
    return ACCESSORIES_DATA.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.material.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="accessories" className="py-24 bg-white border-t border-[#DCE8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5CAB] mb-3">
              <span className="w-5 h-[2px] bg-[#0B5CAB]" />
              <span>OEM PARTS & HIGH-WEAR COMPONENTS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#052B52] tracking-tight text-balance">
              Dredging Accessories & Spares
            </h2>
          </div>

          <p className="text-sm text-[#526777] max-w-md">
            Heavy-duty slurry pumps, self-floating discharge lines, cutter crowns, high-pressure hydraulics, and precision telemetry software engineered for high-abrasion environments.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#DCE8F2]">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#063B73] text-white shadow-2xs'
                    : 'bg-[#F5FAFF] text-[#526777] hover:text-[#063B73] border border-[#DCE8F2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search components or spares..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs bg-[#F5FAFF] border border-[#DCE8F2] rounded-xl text-[#102A43] placeholder-slate-400 focus:outline-none focus:border-[#0B5CAB] transition-colors shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Technical Catalog Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAccessories.map((item) => (
            <div
              key={item.id}
              className="bg-[#F5FAFF] border border-[#DCE8F2] hover:border-[#0B5CAB] hover:bg-white rounded-2xl flex flex-col justify-between group transition-all duration-200 shadow-2xs hover:shadow-md overflow-hidden"
            >
              {/* Product Photograph */}
              <div className="relative">
                <MaritimeImage
                  src={item.image}
                  alt={item.name}
                  badge={item.category}
                  className="h-44 w-full"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-base font-bold uppercase text-[#052B52] tracking-tight group-hover:text-[#0B5CAB] transition-colors mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-[#526777] leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="p-3 bg-white border border-[#DCE8F2] rounded-xl space-y-1.5 text-[11px] mb-4">
                  <div>
                    <strong className="block uppercase font-mono text-[10px] text-[#063B73] font-bold">Specification:</strong>
                    <span className="text-[#526777]">{item.specifications}</span>
                  </div>
                  <div className="pt-1 border-t border-[#DCE8F2]">
                    <strong className="block uppercase font-mono text-[10px] text-[#526777] font-bold">Material Standard:</strong>
                    <span className="font-mono text-[#102A43] font-semibold">{item.material}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => onSelectAccessoryForQuote(item.name)}
                  className="cursor-pointer w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#063B73] hover:text-white bg-white hover:bg-[#063B73] border border-[#DCE8F2] hover:border-[#063B73] rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <span>Request Component Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0B5CAB] group-hover:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
