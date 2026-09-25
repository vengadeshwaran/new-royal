import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ScrollToTop } from './components/ScrollToTop';

// Route Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { MarketplacePage } from './pages/MarketplacePage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { CareersPage } from './pages/CareersPage';
import { EthicsPage } from './pages/EthicsPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedQuoteItem, setSelectedQuoteItem] = useState('');

  const handleOpenQuote = (prefillItem?: string) => {
    if (prefillItem) {
      setSelectedQuoteItem(prefillItem);
    }
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#102A43] selection:bg-[#0B5CAB] selection:text-white flex flex-col">
      {/* Dynamic Scroll Restorer */}
      <ScrollToTop />

      {/* 1. Global Sticky Corporate Navigation with MegaMenu & Side Drawer */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* 2. Routed Content Area */}
      <main className="flex-1">
        <Routes>
          {/* Home Landing Page */}
          <Route path="/" element={<HomePage onOpenQuote={handleOpenQuote} />} />

          {/* Company & Governance */}
          <Route path="/about" element={<AboutPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/company" element={<AboutPage onOpenQuote={handleOpenQuote} />} />

          {/* Equipment & Fleet */}
          <Route path="/products" element={<ProductsPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/fleet" element={<ProductsPage onOpenQuote={handleOpenQuote} />} />

          {/* Specialized Services */}
          <Route path="/services" element={<ServicesPage onOpenQuote={handleOpenQuote} />} />

          {/* Dredger Marketplace */}
          <Route path="/marketplace" element={<MarketplacePage onOpenQuote={handleOpenQuote} />} />

          {/* Dredging Accessories & OEM Spares */}
          <Route path="/accessories" element={<AccessoriesPage onOpenQuote={handleOpenQuote} />} />

          {/* Capabilities & Track Record */}
          <Route path="/capabilities" element={<CapabilitiesPage onOpenQuote={handleOpenQuote} />} />
          <Route path="/projects" element={<CapabilitiesPage onOpenQuote={handleOpenQuote} />} />

          {/* Resources & Lexicon */}
          <Route path="/resources" element={<ResourcesPage />} />

          {/* Careers */}
          <Route path="/careers" element={<CareersPage />} />

          {/* Ethics & Governance */}
          <Route path="/ethics" element={<EthicsPage />} />

          {/* Quotation & Tenders */}
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/tenders" element={<QuotePage />} />

          {/* Contact Us */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Fallback to Home */}
          <Route path="*" element={<HomePage onOpenQuote={handleOpenQuote} />} />
        </Routes>
      </main>

      {/* 3. Deep Corporate Blue Footer */}
      <Footer />

      {/* Reusable Global Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        prefillItem={selectedQuoteItem}
      />
    </div>
  );
}
