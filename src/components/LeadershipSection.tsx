import React from 'react';
import { Users2, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { FloralMotif } from './FloralMotif';

export const LeadershipSection: React.FC = () => {
  const { leadership } = portfolioData;

  return (
    <section id="leadership" className="py-20 md:py-28 bg-white border-y border-navy-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="text-brand-600">
            <FloralMotif size={28} opacity={0.9} />
          </div>
          <h2 className="text-sm uppercase tracking-widest font-bold text-brand-700">Leadership & Community</h2>
          <div className="h-px bg-navy-200 flex-1 max-w-xs"></div>
        </div>

        <div className="max-w-3xl mb-14">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mb-3">
            Leading teams and community interventions.
          </h3>
          <p className="text-navy-600 text-base sm:text-lg">
            Organizational leadership experience spanning large-scale student orientation management, community outreach, and inter-university social welfare campaigns.
          </p>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {leadership.map((item) => (
            <div
              key={item.id}
              className="bg-[#fcfdfd] rounded-3xl p-6 sm:p-7 border border-navy-100 hover:border-brand-300 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image if available */}
                {item.image && (
                  <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 bg-navy-100 relative">
                    <img
                      src={item.image}
                      alt={item.role}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-0.5 rounded-full text-xs font-mono font-bold text-brand-700 shadow-sm">
                      {item.number}
                    </div>
                  </div>
                )}

                {/* Role & Org */}
                <div className="flex items-center space-x-2 text-xs font-semibold text-brand-600 mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>

                <h4 className="text-xl font-bold text-navy-950 mb-1 group-hover:text-brand-700 transition-colors">
                  {item.role}
                </h4>
                <p className="text-xs font-medium text-navy-500 mb-4">{item.organization}</p>

                {/* Highlights Badges */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-1.5 mb-4">
                    {item.highlights.map((hl, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-brand-50 border border-brand-100 text-xs font-bold text-brand-800 mr-2 mb-1"
                      >
                        <Users2 className="w-3.5 h-3.5 text-brand-600" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-navy-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Focus tags */}
              <div className="pt-4 border-t border-navy-100">
                <p className="text-[11px] font-bold uppercase tracking-wider text-navy-400 mb-2">Key Competencies</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.focus.map((f, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-white border border-navy-200/60 text-[11px] font-medium text-navy-600"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
