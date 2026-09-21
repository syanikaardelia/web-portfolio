import React from 'react';
import { Award, Calendar, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { FloralMotif } from './FloralMotif';

export const CertificationsSection: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section className="py-20 md:py-28 bg-[#fcfdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="text-brand-600">
            <FloralMotif size={28} opacity={0.9} />
          </div>
          <h2 className="text-sm uppercase tracking-widest font-bold text-brand-700">Continuous Learning</h2>
          <div className="h-px bg-navy-200 flex-1 max-w-xs"></div>
        </div>

        <div className="max-w-3xl mb-14">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mb-3">
            Targeted professional upskilling.
          </h3>
          <p className="text-navy-600 text-base sm:text-lg">
            Structured bootcamps and certifications completed in 2026 to enhance practical HR execution and international workplace communication.
          </p>
        </div>

        {/* Minimal Horizontal Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-3xl border border-navy-100 p-6 sm:p-7 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Certificate Image Frame */}
                {cert.image && (
                  <div className="w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-6 bg-navy-50 border border-navy-100 relative">
                    <img
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full text-xs font-semibold text-brand-700 shadow-sm flex items-center space-x-1">
                      <Award className="w-3.5 h-3.5 text-brand-600" />
                      <span>Verified</span>
                    </div>
                  </div>
                )}

                {/* Details */}
                <div className="flex items-center space-x-2 text-xs font-semibold text-navy-500 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-navy-400" />
                  <span>{cert.year}</span>
                  <span>•</span>
                  <span className="text-brand-600">{cert.issuer}</span>
                </div>

                <h4 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-brand-700 transition-colors">
                  {cert.title}
                </h4>

                {/* Focus skills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-brand-50 text-xs font-medium text-brand-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-100 flex items-center text-xs text-navy-500 font-medium">
                <CheckCircle className="w-4 h-4 text-brand-600 mr-1.5" />
                <span>Documented in official portfolio</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
