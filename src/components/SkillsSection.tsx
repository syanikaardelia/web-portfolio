import React from 'react';
import { Sparkles, Globe, AlertCircle, Wrench, Users, BookOpen, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { FloralMotif } from './FloralMotif';

export const SkillsSection: React.FC = () => {
  const { skills } = portfolioData;

  const categoryIcons = [Layers, BookOpen, Users, Wrench, Sparkles];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#fcfdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="text-brand-600">
            <FloralMotif size={28} opacity={0.9} />
          </div>
          <h2 className="text-sm uppercase tracking-widest font-bold text-brand-700">Skills & Expertise</h2>
          <div className="h-px bg-navy-200 flex-1 max-w-xs"></div>
        </div>

        <div className="max-w-3xl mb-14">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mb-3">
            Competencies grouped by functional domain.
          </h3>
          <p className="text-navy-600 text-base sm:text-lg">
            Structured into clear operational disciplines without arbitrary percentage progress bars.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {skills.categories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Sparkles;
            const isAssessmentExposure = cat.name.includes('Psychological Assessment');

            return (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isAssessmentExposure
                    ? 'bg-brand-50/50 border-brand-200 md:col-span-2 lg:col-span-2'
                    : 'bg-white border-navy-100 shadow-subtle hover:shadow-card'
                }`}
              >
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-navy-950">{cat.name}</h4>
                      <p className="text-xs text-navy-500 font-medium">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-colors ${
                          isAssessmentExposure
                            ? 'bg-white border border-brand-200 text-brand-900 shadow-xs'
                            : 'bg-navy-50/80 text-navy-700 border border-navy-200/60 hover:bg-brand-50 hover:text-brand-800 hover:border-brand-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {isAssessmentExposure && (
                  <div className="mt-6 pt-4 border-t border-brand-200/80 flex items-start space-x-2 text-xs text-brand-800">
                    <AlertCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Academic & Administrative Exposure:</strong> Familiarity gained through university laboratory coursework and standardized assessment support, non-licensed for independent clinical administration.
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Languages Block */}
          <div className="rounded-3xl p-6 sm:p-7 bg-white border border-navy-100 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy-950">Languages</h4>
                  <p className="text-xs text-navy-500 font-medium">Communication proficiency</p>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                {skills.languages.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    className="p-3 rounded-2xl bg-navy-50/80 border border-navy-200/60 flex items-center justify-between"
                  >
                    <span className="text-sm font-bold text-navy-900">{lang.name}</span>
                    <span className="px-2.5 py-1 rounded-full bg-white border border-navy-200 text-xs font-semibold text-brand-700">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-navy-400 mt-4 italic">
              Fluent communication in bilingual professional contexts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
