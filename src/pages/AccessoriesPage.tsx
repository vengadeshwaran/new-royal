import React from 'react';
import { PageBanner } from './PageBanner';
import { AccessoriesCatalog } from '../components/AccessoriesCatalog';

interface AccessoriesPageProps {
  onOpenQuote: (item?: string) => void;
}

export const AccessoriesPage: React.FC<AccessoriesPageProps> = ({ onOpenQuote }) => {
  return (
    <div>
      <PageBanner
        category="OEM SPARES & EQUIPMENT"
        title="DREDGING ACCESSORIES & HIGH-WEAR COMPONENTS"
        badge="Heavy-Duty Alloy Spares"
        accentCode="05"
        subtitle="Industrial-grade dredge pumps, booster pump stations, rock and clay cutter heads, replaceable tungsten carbide teeth, abrasion-resistant steel and HDPE discharge pipes, and real-time slurry flow production instrumentation."
        stats={[
          { label: 'Pump Efficiency', value: 'Up to 88%' },
          { label: 'Tooth Alloys', value: 'High-Chrome White Iron' },
          { label: 'Pipe Pressure', value: 'PN 10 - PN 25' },
          { label: 'Spares Availability', value: 'Immediate Dispatch' }
        ]}
        onPrimaryCta={() => onOpenQuote('Dredging Accessories & Spares')}
        primaryCtaLabel="Request Spares Catalog"
      />

      <AccessoriesCatalog onSelectAccessoryForQuote={(acc) => onOpenQuote(acc)} />
    </div>
  );
};
