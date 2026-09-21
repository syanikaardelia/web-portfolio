import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Case Study', href: '#case-study' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-navy-100 shadow-sm py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center space-x-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-md py-1"
          >
            <span className="font-semibold text-xl tracking-tight text-navy-950 group-hover:text-brand-700 transition-colors">
              {portfolioData.personal.shortName}
            </span>
            <span className="w-2 h-2 rounded-full bg-brand-600 inline-block"></span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-navy-600 hover:text-brand-700 transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={portfolioData.personal.cvUrl}
              download
              className="inline-flex items-center space-x-2 text-sm font-semibold px-4 py-2 rounded-full bg-brand-50 text-brand-700 hover:bg-brand-600 hover:text-white border border-brand-200 hover:border-brand-600 shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy-700 hover:text-brand-700 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-navy-100 px-4 pt-3 pb-6 shadow-xl transition-all duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-navy-700 hover:text-brand-700 hover:bg-brand-50 px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-navy-100 mt-2">
              <a
                href={portfolioData.personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 text-sm font-semibold px-4 py-2.5 rounded-xl bg-brand-600 text-white hover:bg-brand-700 shadow transition-all duration-200"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
