import React from 'react';
import { PageBanner } from './PageBanner';
import { QuoteSection } from '../components/QuoteSection';

export const QuotePage: React.FC = () => {
  return (
    <div>
      <PageBanner
        category="TENDERS & COMMERCIAL INQUIRIES"
        title="REQUEST PROJECT QUOTATION & RFP SUBMISSION"
        badge="Official Tender Desk"
        accentCode="10"
        subtitle="Submit your project dredging scope, estimated soil volumes, hydrographic survey data, or fleet charter requirements. Our marine engineering estimating team responds within 24 to 48 business hours with detailed commercial proposals."
        stats={[
          { label: 'Response Time', value: '24-48 Hours' },
          { label: 'Tender Formats', value: 'EPC / FIDIC / BoQ' },
          { label: 'Estimation Support', value: 'Full Technical Costing' },
          { label: 'Confidentiality', value: 'Strict NDA Coverage' }
        ]}
      />

      <QuoteSection />
    </div>
  );
};
