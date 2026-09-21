import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FloralMotif } from './FloralMotif';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <footer className="py-12 bg-white border-t border-navy-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Positioning */}
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="text-brand-600">
              <FloralMotif size={24} opacity={0.9} />
            </div>
            <div>
              <p className="font-bold text-navy-950 text-base">{personal.name}</p>
              <p className="text-xs text-navy-500 font-medium">
                Psychology · Talent · People Development
              </p>
            </div>
          </div>

          {/* Copyright & Links */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-navy-500">
            <p>© 2026 {personal.name}. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-navy-600 hover:text-brand-700 transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href={`mailto:${personal.email}`}
                className="font-medium text-navy-600 hover:text-brand-700 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
