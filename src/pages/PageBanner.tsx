import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

interface PageBannerProps {
  category: string;
  title: string;
  badge?: string;
  subtitle: string;
  accentCode?: string;
  stats?: { label: string; value: string }[];
  onPrimaryCta?: () => void;
  primaryCtaLabel?: string;
  bgImage?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  category,
  title,
  badge,
  subtitle,
  accentCode,
  stats,
  onPrimaryCta,
  primaryCtaLabel = 'Request Project Quotation',
  bgImage = 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1920&q=80'
}) => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-[#052B52] text-white overflow-hidden border-b border-[#DCE8F2]/20">
      {/* Background Maritime Photography Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052B52] via-[#052B52]/90 to-[#0A4A8A]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#052B52] via-transparent to-black/20" />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#0B5CAB]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Bar */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#DCE8F2]/80 uppercase tracking-widest mb-6">
          <Link to="/" className="hover:text-white transition-colors">
            HOME
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#0B5CAB]" />
          <span className="text-white font-semibold">{category}</span>
          {accentCode && (
            <>
              <span className="text-[#0B5CAB]">/</span>
              <span className="text-[#0B5CAB] font-bold">{accentCode}</span>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B5CAB]/40 border border-[#0B5CAB]/60 text-[#EAF4FC] text-xs font-mono tracking-wider uppercase font-semibold backdrop-blur-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>{badge}</span>
              </div>
            )}

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-[1.1]">
              {title}
            </h1>

            <p className="text-[#E2EEF8] text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end">
            {onPrimaryCta && (
              <button
                onClick={onPrimaryCta}
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-[#052B52] hover:bg-[#EAF4FC] hover:text-[#063B73] font-bold text-xs uppercase tracking-wider rounded-full transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>{primaryCtaLabel}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#0B5CAB]" />
              </button>
            )}

            <div className="flex items-center gap-2 text-[11px] font-mono text-[#DCE8F2]/75">
              <Compass className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>OFFICIAL ROYAL SWALF MARITIME DIVISION</span>
            </div>
          </div>
        </div>

        {/* Optional Stats Strip */}
        {stats && stats.length > 0 && (
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="border-l-2 border-[#0B5CAB] pl-4">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                  {stat.value}
                </div>
                <div className="text-xs font-mono uppercase text-[#DCE8F2]/75 tracking-wider mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
