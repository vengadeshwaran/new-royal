import React from 'react';
import { PageBanner } from './PageBanner';
import { ServicesExplorer } from '../components/ServicesExplorer';

interface ServicesPageProps {
  onOpenQuote: (item?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote }) => {
  return (
    <div>
      <PageBanner
        category="OPERATIONS & ENGINEERING"
        title="SPECIALIZED DREDGING & MARINE SERVICES"
        badge="Full Turnkey Execution"
        accentCode="03"
        subtitle="End-to-end maritime capabilities spanning Hydrographic & Geophysical Surveys, Capital & Maintenance Dredging, Marine Civil Construction & Quay Walls, Commercial Diving with Class NDT, and Project Management Consultancy (PMC)."
        stats={[
          { label: 'Survey Accuracy', value: 'IHO Special Order' },
          { label: 'Diving Certification', value: 'IMCA Compliant' },
          { label: 'PMC Track Record', value: '100% On-Time' },
          { label: 'Marine Civil Spread', value: 'Quay & Jetties' }
        ]}
        onPrimaryCta={() => onOpenQuote('Dredging & Marine Services')}
        primaryCtaLabel="Scope Your Project"
      />

      <ServicesExplorer onSelectServiceForQuote={(srv) => onOpenQuote(srv)} />
    </div>
  );
};
