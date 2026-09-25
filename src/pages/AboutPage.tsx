import React from 'react';
import { PageBanner } from './PageBanner';
import { CompanyIntro } from '../components/CompanyIntro';
import { MissionVision } from '../components/MissionVision';
import { CompanyEthics } from '../components/CompanyEthics';
import { CoreBusiness } from '../components/CoreBusiness';
import { WhySwalf } from '../components/WhySwalf';

interface AboutPageProps {
  onOpenQuote: (item?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote }) => {
  return (
    <div>
      <PageBanner
        category="COMPANY & GOVERNANCE"
        title="ABOUT SWALF GROUP & MARITIME HERITAGE"
        badge="Established 2010 · 15+ Years"
        accentCode="01"
        subtitle="Swalf Group (Royal Swalf) is an integrated maritime engineering and dredging enterprise delivering dredging solutions, marine infrastructure, and fleet operations across India, the Middle East, and Southeast Asia."
        stats={[
          { label: 'Years of Experience', value: '15+' },
          { label: 'Maritime Spread', value: '30+ Vessels' },
          { label: 'Volume Dredged', value: '25M+ m³' },
          { label: 'Global Standard', value: 'ISO 9001:2015' }
        ]}
        onPrimaryCta={() => onOpenQuote('Corporate Maritime Partnership')}
        primaryCtaLabel="Partner With Us"
      />

      <CompanyIntro />
      <MissionVision />
      <CompanyEthics />
      <CoreBusiness onSelectBusinessItem={(title) => onOpenQuote(title)} />
      <WhySwalf />
    </div>
  );
};
