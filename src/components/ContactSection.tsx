import React from 'react';
import { Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { FloralMotif } from './FloralMotif';
import { LinkedInIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-navy-100/80 relative overflow-hidden">
      {/* Decorative floral accents */}
      <div className="absolute top-10 right-10 text-brand-100 pointer-events-none hidden md:block">
        <FloralMotif size={80} opacity={0.4} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-brand-900 via-brand-800 to-navy-900 rounded-4xl text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle geometric circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Narrative & CTAs */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-brand-200 border border-white/15">
                <FloralMotif size={14} opacity={0.9} />
                <span>Get In Touch</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Let's connect.
              </h2>

              <p className="text-base sm:text-xl text-brand-100/90 max-w-2xl font-normal leading-relaxed">
                "I'm always open to conversations around talent, people development, and opportunities to grow."
              </p>

              {/* Direct Primary Contact Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-2xl bg-white text-navy-950 font-bold text-sm hover:bg-brand-50 shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Mail className="w-4 h-4 text-brand-700" />
                  <span>Send an Email</span>
                  <ArrowRight className="w-4 h-4 text-navy-400 ml-1" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <LinkedInIcon className="w-4 h-4 text-brand-300" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-4 h-4 text-brand-300 ml-1" />
                </a>
              </div>

              {/* Direct Email Address Display */}
              <div className="pt-4 text-xs sm:text-sm text-brand-200/80">
                <span>Direct email: </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-mono text-white underline underline-offset-4 hover:text-brand-200"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            {/* Right Side: Portrait Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-48 sm:w-56 aspect-[3/4] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-white/10 backdrop-blur-md p-2">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img
                    src={personal.portraitSecondary}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-3">
                    <p className="text-xs font-semibold text-white">{personal.shortName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
