import React from 'react';
import { PageBanner } from './PageBanner';
import { CompanyEthics } from '../components/CompanyEthics';
import { MissionVision } from '../components/MissionVision';

export const EthicsPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        category="GOVERNANCE & STANDARDS"
        title="CORE BUSINESS ETHICS & MARITIME GOVERNANCE"
        badge="Integrity · Transparency · Responsibility"
        accentCode="09"
        subtitle="At Swalf Group, our commercial operations and engineering works are anchored in strict ethical codes, transparency, environmental stewardship, and rigorous occupational health and safety across every marine project."
        stats={[
          { label: 'Ethical Compliance', value: '100% Zero Tolerance' },
          { label: 'Audit Standard', value: 'ISO 14001 & 45001' },
          { label: 'Marine Protection', value: 'Eco-Dredging Codes' },
          { label: 'Governance', value: 'Board Supervised' }
        ]}
      />

      <CompanyEthics />
      <MissionVision />
    </div>
  );
};
