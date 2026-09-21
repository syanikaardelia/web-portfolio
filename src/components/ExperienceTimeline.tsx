import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { FloralMotif } from './FloralMotif';

export const ExperienceTimeline: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#fcfdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="text-brand-600">
            <FloralMotif size={28} opacity={0.9} />
          </div>
          <h2 className="text-sm uppercase tracking-widest font-bold text-brand-700">Professional Experience</h2>
          <div className="h-px bg-navy-200 flex-1 max-w-xs"></div>
        </div>

        <div className="max-w-3xl mb-12">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mb-4">
            Hands-on exposure in corporate assessment center operations.
          </h3>
          <p className="text-navy-600 text-base sm:text-lg">
            Practical operational experience at <strong className="text-navy-900 font-semibold">PT PLN (Persero) Assessment Center</strong>, supporting large-scale standardized competency assessments, multi-assessor coordination, and employee development workflows.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-brand-200 ml-4 sm:ml-6 space-y-12 pl-6 sm:pl-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-brand-600 shadow-sm flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
              </div>

              {/* Card Container */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-navy-100 shadow-subtle hover:shadow-card transition-all duration-300">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 text-xs font-semibold mb-2">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.type}</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-navy-950">{exp.title}</h4>
                    <p className="text-brand-700 font-semibold text-base">{exp.organization}</p>
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs sm:text-sm font-medium text-navy-500 bg-navy-50 px-3 py-1.5 rounded-xl self-start sm:self-auto border border-navy-100">
                    <Calendar className="w-4 h-4 text-navy-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Visual Highlight Metrics Row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 pt-2">
                  {exp.keyMetrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-brand-50/70 border border-brand-100 rounded-2xl p-3.5 flex flex-col justify-center"
                    >
                      <span className="text-2xl sm:text-3xl font-extrabold text-brand-700 tracking-tight">
                        {metric.value}
                      </span>
                      <span className="text-xs font-medium text-navy-600 mt-1 leading-snug">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-2.5 pt-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-2">Core Contributions</h5>
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-3 text-navy-600 text-sm leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-navy-100">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full bg-navy-50 text-navy-600 text-xs font-medium border border-navy-200/60"
                    >
                      {tag}
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
