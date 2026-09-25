import React from 'react';
import { PageBanner } from './PageBanner';
import { CareersSection } from '../components/CareersSection';

export const CareersPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        category="HUMAN CAPITAL & OPPORTUNITIES"
        title="MARITIME CAREERS & OFFSHORE RECRUITMENT"
        badge="Active Hiring · Global Fleet"
        accentCode="08"
        subtitle="Advance your career with Swalf Group. We are actively recruiting Dredge Masters, Chief Engineers, Hydraulic Specialists, Hydrographic Surveyors, and Marine Civil Project Managers for offshore and coastal deployments."
        stats={[
          { label: 'Active Openings', value: '12 Positions' },
          { label: 'Rotations', value: 'Offshore & Shore' },
          { label: 'Insurance & Welfare', value: 'Full Marine Cover' },
          { label: 'Safety Standard', value: 'STCW & IMCA' }
        ]}
      />

      <CareersSection />
    </div>
  );
};
