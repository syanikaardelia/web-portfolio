import React from 'react';
import { Layers, Users, FileText, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { FloralMotif } from './FloralMotif';

export const FeaturedCaseStudy: React.FC = () => {
  const { featuredCaseStudy } = portfolioData;

  const icons = [Layers, Users, FileText, Compass];

  return (
    <section id="case-study" className="py-20 md:py-28 bg-gradient-to-b from-brand-900 to-navy-950 text-white relative overflow-hidden">
      {/* Subtle background decorative shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-700/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Top Bar */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="text-brand-300">
            <FloralMotif size={24} opacity={0.9} />
          </div>
          <span className="text-xs uppercase tracking-widest font-bold text-brand-300">Featured Case Study</span>
          <div className="h-px bg-white/20 flex-1 max-w-xs"></div>
        </div>

        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              {featuredCaseStudy.title}
            </h2>
            <p className="text-xl sm:text-2xl text-brand-200 font-medium">
              {featuredCaseStudy.subtitle}
            </p>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-navy-200 leading-relaxed">
              Standardized assessment center methodologies demand operational rigor, objective multi-assessor synchronization, and strict participant data fidelity.
            </p>
          </div>
        </div>

        {/* Horizontal Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 mb-16 shadow-2xl">
          {featuredCaseStudy.stats.map((stat, sIdx) => (
            <div key={sIdx} className="space-y-1 border-l border-brand-400/30 pl-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-brand-300 tracking-tight block">
                {stat.value}
              </span>
              <p className="text-sm font-semibold text-white">{stat.label}</p>
              <p className="text-xs text-navy-300 leading-snug">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Exposure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {featuredCaseStudy.pillars.map((pillar, pIdx) => {
            const Icon = icons[pIdx] || Layers;
            return (
              <div
                key={pIdx}
                className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-600/30 border border-brand-400/30 flex items-center justify-center text-brand-300 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-mono font-bold text-brand-300/80">{pillar.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-200 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-navy-200 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
