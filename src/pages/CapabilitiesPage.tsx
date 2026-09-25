import React from 'react';
import { PageBanner } from './PageBanner';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { WhySwalf } from '../components/WhySwalf';

interface CapabilitiesPageProps {
  onOpenQuote: (item?: string) => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({ onOpenQuote }) => {
  return (
    <div>
      <PageBanner
        category="TRACK RECORD & CAPABILITIES"
        title="INFRASTRUCTURE CAPABILITIES & PROJECT PORTFOLIO"
        badge="Over 25 Million m³ Delivered"
        accentCode="06"
        subtitle="Review our operational footprint across commercial port deepening, coastal land reclamation, beach nourishment, revetments, subsea pipelines, and specialized marine civil structures executed to international maritime standards."
        stats={[
          { label: 'Completed Projects', value: '45+' },
          { label: 'Major Ports Served', value: '12 Ports' },
          { label: 'Deepening Depths', value: 'Up to -18.5m CD' },
          { label: 'QHSE Record', value: 'Zero LTI' }
        ]}
        onPrimaryCta={() => onOpenQuote('Harbor Dredging or Reclamation Project')}
        primaryCtaLabel="Submit Tender Notice"
      />

      <CapabilitiesSection onOpenProjectQuote={(cat) => onOpenQuote(cat)} />
      <WhySwalf />
    </div>
  );
};
