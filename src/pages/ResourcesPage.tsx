import React from 'react';
import { PageBanner } from './PageBanner';
import { ResourcesSection } from '../components/ResourcesSection';

export const ResourcesPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        category="TECHNICAL KNOWLEDGE BASE"
        title="DREDGING TERMINOLOGY & MARITIME RESOURCES"
        badge="Maritime Lexicon & Standards"
        accentCode="07"
        subtitle="A comprehensive maritime glossary and technical reference library defining critical dredging concepts, hydraulic slurry calculations, soil classification, soil shear strengths, and international QHSE compliance standards."
        stats={[
          { label: 'Technical Terms', value: '100+ Definitions' },
          { label: 'Compliance Standards', value: 'IHO, PIANC, IMCA' },
          { label: 'Whitepapers', value: 'Engineering Guides' },
          { label: 'Access', value: 'Open Technical Repository' }
        ]}
      />

      <ResourcesSection />
    </div>
  );
};
