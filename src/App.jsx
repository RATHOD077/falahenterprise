import React, { useState, useEffect } from 'react';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import QuoteModal from './components/common/QuoteModal';

import HomePage from './pages/HomePage';
import PackagingPage from './pages/PackagingPage';
import HospitalityPage from './pages/HospitalityPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#/');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (href) => {
    window.location.hash = href;
    setCurrentRoute(href);
  };

  const handleOpenQuote = (product = null) => {
    setSelectedProductForQuote(product);
    setQuoteModalOpen(true);
  };

  const renderPage = () => {
    switch (currentRoute) {
      case '#/packaging':
        return <PackagingPage onOpenQuote={handleOpenQuote} />;
      case '#/hotels-hospitals':
        return <HospitalityPage onOpenQuote={handleOpenQuote} />;
      case '#/about':
        return <AboutPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
      case '#/contact':
        return <ContactPage />;
      case '#/':
      default:
        return <HomePage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      {/* Top Contact Bar */}
      <TopBar />

      {/* Main Sticky Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Dynamic Page Content */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloat />

      {/* Global Quotation Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedProduct={selectedProductForQuote}
      />
    </div>
  );
}
