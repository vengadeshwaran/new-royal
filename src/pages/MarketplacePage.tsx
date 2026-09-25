import React from 'react';
import { PageBanner } from './PageBanner';
import { DredgerMarketplace } from '../components/DredgerMarketplace';

interface MarketplacePageProps {
  onOpenQuote: (item?: string) => void;
}

export const MarketplacePage: React.FC<MarketplacePageProps> = ({ onOpenQuote }) => {
  return (
    <div>
      <PageBanner
        category="FLEET MARKETPLACE"
        title="DREDGER BUY & SELL · CHARTER & LEASING"
        badge="Direct Shipowner & Broker Desk"
        accentCode="04"
        subtitle="Global portal for procuring new and certified pre-owned dredgers, flexible bareboat & wet charter contracts with certified crews, and marine asset divestment with rigorous hull & machinery condition inspection reports."
        stats={[
          { label: 'Available Dredgers', value: '18+ Units' },
          { label: 'Charter Formats', value: 'Wet & Bareboat' },
          { label: 'Condition Reports', value: 'Class Certified' },
          { label: 'Global Delivery', value: 'Worldwide Mobilization' }
        ]}
        onPrimaryCta={() => onOpenQuote('Dredger Charter or Purchase')}
        primaryCtaLabel="Submit Vessel Inquiry"
      />

      <DredgerMarketplace onOpenMarketplaceInquiry={(intent) => onOpenQuote(intent)} />
    </div>
  );
};
