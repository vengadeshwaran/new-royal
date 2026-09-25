import React from 'react';
import { Target, Lightbulb, Compass, Waves } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section id="mission-vision" className="py-24 bg-white border-t border-[#DCE8F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0B5CAB] mb-3">
            <span className="w-5 h-[2px] bg-[#0B5CAB]" />
            <span>PURPOSE & STEWARDSHIP</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-[#052B52] tracking-tight text-balance">
            Mission & Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#DCE8F2] border border-[#DCE8F2] bg-[#F5FAFF] rounded-sm shadow-sm">
          {/* Left: MISSION */}
          <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative group hover:bg-white transition-colors">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest text-[#0B5CAB] uppercase mb-6">
                <Target className="w-4 h-4 text-[#0B5CAB]" />
                <span>OUR MISSION</span>
              </div>

              <blockquote className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#052B52] leading-snug mb-8">
                &ldquo;Connect the Global Maritime industry through Dredging and make it universally accessible.&rdquo;
              </blockquote>

              <p className="text-sm text-[#526777] leading-relaxed">
                By innovating dismountable dredging platforms, expanding equipment leasing frameworks, and deploying cross-disciplinary marine surveying, Swalf Group dismantles technical and capital bottlenecks for ports, rivers, and coastal authorities worldwide.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-[#DCE8F2] flex items-center justify-between text-xs text-[#526777]">
              <span className="font-mono text-[#063B73] font-bold">01 / PILLAR</span>
              <span>Universal Maritime Access</span>
            </div>
          </div>

          {/* Right: VISION */}
          <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-between relative group hover:bg-white transition-colors">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest text-[#0B5CAB] uppercase mb-6">
                <Lightbulb className="w-4 h-4 text-[#0B5CAB]" />
                <span>OUR VISION</span>
              </div>

              <blockquote className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#052B52] leading-snug mb-8">
                &ldquo;To create more Land for future Generation and save Ecosystem and Environmental Remediation.&rdquo;
              </blockquote>

              <p className="text-sm text-[#526777] leading-relaxed">
                We envision a future where high-efficiency dredging technology harmonizes with coastal ecology: creating resilient seawalls, reclaiming sustainable industrial ground, and enabling clean water remediation for future generations.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-[#DCE8F2] flex items-center justify-between text-xs text-[#526777]">
              <span className="font-mono text-[#063B73] font-bold">02 / PILLAR</span>
              <span>Ecosystem Restoration & Land Creation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
