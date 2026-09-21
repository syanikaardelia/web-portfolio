import React from 'react';
import { ArrowRight, FileDown, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { FloralMotif } from './FloralMotif';
import { LinkedInIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-20 right-10 text-brand-200 pointer-events-none hidden lg:block">
        <FloralMotif size={96} opacity={0.35} />
      </div>
      <div className="absolute bottom-10 left-1/4 text-brand-100 pointer-events-none hidden md:block">
        <FloralMotif size={64} opacity={0.25} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-800 text-xs sm:text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
              <span>{portfolioData.personal.headline}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-950 leading-[1.12] mb-6">
              Understanding people.{' '}
              <span className="text-brand-600 block sm:inline">Developing potential.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-navy-600 leading-relaxed max-w-2xl mb-8">
              Psychology graduate from <span className="font-semibold text-navy-800">Universitas Airlangga</span> with practical exposure from the <span className="font-semibold text-navy-800">PT PLN (Persero) Assessment Center</span>. Experienced in supporting standardized assessment processes, coordinating assessors and participants, managing candidate records, and supporting competency-based talent development initiatives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#case-study"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-brand-700 text-white font-semibold text-sm hover:bg-brand-800 shadow-md hover:shadow-lg shadow-brand-700/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 w-full sm:w-auto"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={portfolioData.personal.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-white text-navy-700 font-semibold text-sm border border-navy-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800 shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 w-full sm:w-auto"
              >
                <FileDown className="w-4 h-4 text-brand-600" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick Contact Icons / Links */}
            <div className="flex items-center space-x-6 text-sm text-navy-500 pt-2 border-t border-navy-100 w-full max-w-md">
              <span className="text-xs uppercase tracking-wider font-semibold text-navy-400">Direct Links</span>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-navy-600 hover:text-brand-700 font-medium transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-brand-600" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center space-x-1.5 text-navy-600 hover:text-brand-700 font-medium transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-600" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Portrait with Rounded Geometric Backdrop */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              {/* Blue Geometric Backdrop Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 sm:w-80 sm:h-80 bg-brand-100/70 rounded-3xl -rotate-6 transition-transform duration-500 group-hover:rotate-0"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 sm:w-80 sm:h-80 bg-brand-600/10 rounded-3xl rotate-6"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500/15 rounded-full blur-2xl"></div>

              {/* Main Portrait Frame */}
              <div className="relative z-10 bg-gradient-to-b from-brand-50/80 to-white p-3 sm:p-4 rounded-3xl shadow-card border border-brand-100/60 overflow-hidden">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-navy-100">
                  <img
                    src={portfolioData.personal.portraitMain}
                    alt="Syanika Ardelia Erwanto"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle gradient overlay at bottom for smooth contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/60 to-transparent"></div>
                  
                  {/* Name badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-base font-bold tracking-tight">{portfolioData.personal.name}</p>
                    <p className="text-xs text-brand-200">Universitas Airlangga · Psychology</p>
                  </div>
                </div>
              </div>

              {/* Understated Floating Badges */}
              <div className="absolute -top-3 right-4 z-20 hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur shadow-card border border-brand-100 text-xs font-semibold text-navy-800">
                <span className="w-2 h-2 rounded-full bg-brand-600"></span>
                <span>Talent Assessment</span>
              </div>

              <div className="absolute top-1/3 -left-5 z-20 hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur shadow-card border border-brand-100 text-xs font-semibold text-navy-800">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>People Development</span>
              </div>

              <div className="absolute -bottom-3 left-8 z-20 hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur shadow-card border border-brand-100 text-xs font-semibold text-navy-800">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span>Organizational Psychology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
