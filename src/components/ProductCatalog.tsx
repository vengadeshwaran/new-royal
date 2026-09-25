import React, { useState, useMemo } from 'react';
import { PRODUCTS_DATA } from '../data/maritimeData';
import { ProductCategory, ProductItem } from '../types/maritime';
import { MaritimeImage } from './MaritimeImage';
import { ArrowUpRight, Search, X, Check, ExternalLink, Ship } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProductForQuote: (productName: string) => void;
}

const CATEGORIES: { id: ProductCategory | 'all'; label: string; count: number }[] = [
  { id: 'all', label: 'All Equipment', count: PRODUCTS_DATA.length },
  { id: 'hydraulic', label: 'Hydraulic Dredgers', count: PRODUCTS_DATA.filter(p => p.category === 'hydraulic').length },
  { id: 'mechanical', label: 'Mechanical Dredgers', count: PRODUCTS_DATA.filter(p => p.category === 'mechanical').length },
  { id: 'hopper', label: 'Hopper Dredgers (TSHD)', count: PRODUCTS_DATA.filter(p => p.category === 'hopper').length },
  { id: 'ancillary', label: 'Ancillary Equipment', count: PRODUCTS_DATA.filter(p => p.category === 'ancillary').length },
  { id: 'reclamation', label: 'Land Reclamation', count: PRODUCTS_DATA.filter(p => p.category === 'reclamation').length }
];

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProductForQuote }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.vesselType.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-24 bg-[#F5FAFF] border-t border-[#DCE8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5CAB] mb-3">
              <span className="w-5 h-[2px] bg-[#0B5CAB]" />
              <span>HEAVY NAVAL ARMADA & FLEET ASSETS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#052B52] tracking-tight text-balance">
              Maritime Equipment & Dredging Systems
            </h2>
          </div>

          <p className="text-sm text-[#526777] max-w-md">
            Engineered to international classification standards, our heavy-duty dredging armada and earthmoving plants guarantee high productivity in the most demanding seabed conditions.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#DCE8F2]">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`cursor-pointer px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#063B73] text-white shadow-sm'
                      : 'bg-white text-[#526777] hover:text-[#063B73] border border-[#DCE8F2] hover:border-[#B6D8F2]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="ml-1.5 opacity-70 font-mono text-[11px]">({cat.count})</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search dredger or equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-[#DCE8F2] rounded-sm text-[#102A43] placeholder-slate-400 focus:outline-none focus:border-[#0B5CAB] transition-colors shadow-2xs"
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

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const graphicType =
              product.category === 'hopper'
                ? 'tshd-hopper'
                : product.category === 'ancillary'
                ? 'survey-sonar'
                : product.category === 'reclamation'
                ? 'quay-construction'
                : 'csd-schematic';

            return (
              <div
                key={product.id}
                className="bg-white border border-[#DCE8F2] hover:border-[#0B5CAB] rounded-2xl flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                <div>
                  {/* Photo Image Header with Relevant Maritime Vessel Photography */}
                  <div className="relative overflow-hidden bg-[#F5FAFF]">
                    <MaritimeImage
                      src={product.image}
                      alt={product.name}
                      badge={product.availability}
                      className="h-52 w-full"
                    />
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-2 text-[10px] font-mono text-[#063B73] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-sm px-2.5 py-1 border border-[#DCE8F2] rounded-full shadow-xs">
                      <span>{product.categoryLabel}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="text-[11px] font-mono text-[#526777] uppercase tracking-wider mb-1 font-medium">
                      {product.vesselType}
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#052B52] uppercase tracking-tight group-hover:text-[#0B5CAB] transition-colors mb-2.5">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#526777] leading-relaxed mb-4 line-clamp-2">
                      {product.summary}
                    </p>

                    {/* Spec Preview */}
                    <div className="pt-3 border-t border-[#DCE8F2] space-y-1.5 text-[11px]">
                      {product.specs.slice(0, 2).map((s) => (
                        <div key={s.label} className="flex items-center justify-between text-[#526777]">
                          <span>{s.label}:</span>
                          <span className="font-mono text-[#102A43] font-semibold">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Controls with Smooth Rounded Corners */}
                <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="cursor-pointer flex-1 py-2 text-center text-xs font-bold uppercase tracking-wider text-[#063B73] hover:text-white bg-[#EAF4FC] hover:bg-[#063B73] border border-[#B6D8F2] hover:border-[#063B73] rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Details</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#0B5CAB] group-hover:text-white" />
                  </button>

                  <button
                    onClick={() => onSelectProductForQuote(product.name)}
                    className="cursor-pointer px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#063B73] hover:bg-[#0B5CAB] rounded-xl transition-colors flex items-center justify-center gap-1 shadow-2xs"
                    title="Request a quote for this product"
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search Fallback */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white border border-[#DCE8F2] rounded-sm">
            <Ship className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-base font-bold text-[#052B52]">No products found matching &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-xs text-[#526777] mt-1">Try resetting the search or category filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#063B73] rounded-sm hover:bg-[#0B5CAB]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Product Details Modal with Real Maritime Photography */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border border-[#DCE8F2] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="cursor-pointer absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 hover:bg-[#EAF4FC] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-[11px] font-mono text-[#0B5CAB] uppercase tracking-widest font-bold block mb-1">
                {activeModalProduct.categoryLabel} · {activeModalProduct.vesselType}
              </span>
              <h3 className="font-display text-2xl font-extrabold uppercase text-[#052B52] tracking-tight">
                {activeModalProduct.name}
              </h3>
              <p className="text-xs text-[#526777] mt-2 leading-relaxed">
                {activeModalProduct.summary}
              </p>
            </div>

            <MaritimeImage
              src={activeModalProduct.image}
              alt={activeModalProduct.name}
              badge={activeModalProduct.availability}
              className="h-64 sm:h-72 w-full rounded-2xl mb-6 shadow-sm border border-[#DCE8F2]"
            />

            {/* Specifications Table */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#063B73] mb-3">
                Technical Specifications
              </h4>
              <div className="divide-y divide-[#DCE8F2] border border-[#DCE8F2] bg-[#F5FAFF] rounded-xl overflow-hidden">
                {activeModalProduct.specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between p-3 text-xs">
                    <span className="text-[#526777]">{spec.label}</span>
                    <span className="font-mono text-[#102A43] font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications List */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#063B73] mb-3">
                Primary Applications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#102A43]">
                {activeModalProduct.applications.map((app) => (
                  <div key={app} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#0B5CAB] shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#DCE8F2]">
              <button
                onClick={() => {
                  const prodName = activeModalProduct.name;
                  setActiveModalProduct(null);
                  onSelectProductForQuote(prodName);
                }}
                className="cursor-pointer w-full sm:flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#063B73] hover:bg-[#0B5CAB] rounded-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Request Quotation For This Vessel</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="cursor-pointer w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#526777] hover:text-[#102A43] bg-white border border-[#DCE8F2] rounded-sm hover:bg-[#F5FAFF] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
