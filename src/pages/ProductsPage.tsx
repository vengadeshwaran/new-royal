import React from 'react';
import { PageBanner } from './PageBanner';
import { ProductCatalog } from '../components/ProductCatalog';

interface ProductsPageProps {
  onOpenQuote: (item?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuote }) => {
  return (
    <div>
      <PageBanner
        category="EQUIPMENT & FLEET"
        title="MARITIME FLEET & DREDGING SYSTEMS"
        badge="IRS / BV Certified Fleet"
        accentCode="02"
        subtitle="Explore our heavy-duty dredging spreads including Cutter Suction Dredgers (CSD), Amphibious Multipurpose Units, Trailing Suction Hopper Dredgers (TSHD), and Backhoe Mechanical Dredgers engineered for demanding marine environments."
        stats={[
          { label: 'Dredging Depths', value: 'Up to 32m' },
          { label: 'Slurry Capacity', value: '1,500 - 8,500 m³/h' },
          { label: 'Classification', value: 'IRS / BV' },
          { label: 'Discharge Distance', value: 'Up to 6,000m' }
        ]}
        onPrimaryCta={() => onOpenQuote('Cutter Suction Dredger (CSD)')}
        primaryCtaLabel="Request Fleet Spec Sheet"
      />

      <ProductCatalog onSelectProductForQuote={(prod) => onOpenQuote(prod)} />
    </div>
  );
};
