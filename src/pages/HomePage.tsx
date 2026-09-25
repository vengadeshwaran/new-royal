import React from 'react';
import { Hero } from '../components/Hero';
import { CompanyIntro } from '../components/CompanyIntro';
import { CoreBusiness } from '../components/CoreBusiness';
import { MissionVision } from '../components/MissionVision';
import { CompanyEthics } from '../components/CompanyEthics';
import { ProductCatalog } from '../components/ProductCatalog';
import { ServicesExplorer } from '../components/ServicesExplorer';
import { DredgerMarketplace } from '../components/DredgerMarketplace';
import { AccessoriesCatalog } from '../components/AccessoriesCatalog';
import { WhySwalf } from '../components/WhySwalf';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { ResourcesSection } from '../components/ResourcesSection';
import { CareersSection } from '../components/CareersSection';
import { QuoteSection } from '../components/QuoteSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onOpenQuote: (item?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote }) => {
  const handleExploreServices = () => {
    const srvElem = document.getElementById('services');
    if (srvElem) {
      srvElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Hero
        onOpenQuote={() => onOpenQuote('Turnkey Dredging Operations')}
        onExploreServices={handleExploreServices}
      />

      {/* Company Intro & Legacy */}
      <CompanyIntro />

      {/* Core Business Pillars */}
      <CoreBusiness onSelectBusinessItem={(title) => onOpenQuote(title)} />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Company Ethics */}
      <CompanyEthics />

      {/* Maritime Equipment & Fleet */}
      <ProductCatalog onSelectProductForQuote={(prod) => onOpenQuote(prod)} />

      {/* Specialized Services */}
      <ServicesExplorer onSelectServiceForQuote={(srv) => onOpenQuote(srv)} />

      {/* Dredger Marketplace */}
      <DredgerMarketplace onOpenMarketplaceInquiry={(intent) => onOpenQuote(intent)} />

      {/* Dredging Accessories */}
      <AccessoriesCatalog onSelectAccessoryForQuote={(acc) => onOpenQuote(acc)} />

      {/* Why Choose Swalf */}
      <WhySwalf />

      {/* Capabilities & Track Record */}
      <CapabilitiesSection onOpenProjectQuote={(cat) => onOpenQuote(cat)} />

      {/* Resources & Lexicon */}
      <ResourcesSection />

      {/* Maritime Careers */}
      <CareersSection />

      {/* Enquiries & Quote Builder */}
      <QuoteSection />

      {/* Contact & Global Desks */}
      <ContactSection />
    </>
  );
};
