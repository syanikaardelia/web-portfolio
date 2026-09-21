import React from 'react';
import { GraduationCap, BookOpen, Target, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { FloralMotif } from './FloralMotif';

export const About: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-navy-100/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-12">
          <div className="text-brand-600">
            <FloralMotif size={28} opacity={0.9} />
          </div>
          <h2 className="text-sm uppercase tracking-widest font-bold text-brand-700">About Me</h2>
          <div className="h-px bg-navy-200 flex-1 max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 leading-snug">
              Bridging psychological insights with practical human resources and organizational operations.
            </h3>

            <p className="text-navy-600 leading-relaxed text-base sm:text-lg">
              I am a Psychology graduate from <strong className="text-navy-900 font-semibold">Universitas Airlangga</strong> with practical exposure in human resource administration, assessment center operations, and organizational coordination.
            </p>

            <p className="text-navy-600 leading-relaxed text-base sm:text-lg">
              During my time at the <strong className="text-navy-900 font-semibold">PT PLN (Persero) Assessment Center</strong>, I facilitated assessment sessions, coordinated assessors and role players, and managed candidate documentation across large-scale recruitment and assessment cycles. My academic foundation in Industrial and Organizational Psychology complements my hands-on exposure to competency-based evaluation, stakeholder communication, and organizational projects.
            </p>

            <p className="text-navy-600 leading-relaxed text-base sm:text-lg">
              Detail-oriented, adaptable, and collaborative, I am eager to apply my analytical mindset and interpersonal skills across <span className="text-brand-700 font-semibold">human resources operations</span>.
            </p>

            {/* Core Pillars List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                "Human Resources & Administration",
                "Assessment Center Coordination",
                "Competency-Based Evaluation",
                "Cross-Functional Collaboration"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-navy-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Structured Information Blocks */}
          <div className="lg:col-span-5 space-y-8 bg-[#f8fafc] p-6 sm:p-8 rounded-3xl border border-navy-100">
            {/* Education Block */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5 text-brand-700 font-semibold text-sm">
                <GraduationCap className="w-5 h-5" />
                <span>Education</span>
              </div>
              <div className="pl-7 space-y-1 border-l-2 border-brand-200">
                <h4 className="text-lg font-bold text-navy-950">{education.institution}</h4>
                <p className="text-sm font-medium text-navy-700">{education.degree}</p>
                <div className="flex items-center space-x-3 text-xs text-navy-500 pt-1">
                  <span>{education.period}</span>
                  <span>•</span>
                  <span className="font-semibold text-brand-700">GPA {education.gpa}</span>
                  <span>•</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-brand-100 text-brand-800 font-semibold">
                    {education.honors}
                  </span>
                </div>
              </div>
            </div>

            <div className="h-px bg-navy-200"></div>

            {/* Focus Areas Block */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2.5 text-brand-700 font-semibold text-sm">
                <Target className="w-5 h-5" />
                <span>Focus Areas</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {education.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 rounded-xl bg-white border border-navy-200/80 text-xs font-semibold text-navy-800 inline-flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mr-2 flex-shrink-0"></span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px bg-navy-200"></div>

            {/* Relevant Coursework */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2.5 text-brand-700 font-semibold text-sm">
                <BookOpen className="w-5 h-5" />
                <span>Relevant Coursework</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {education.relevantCourses.map((course, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-2.5 py-1 rounded-lg bg-white border border-navy-200 text-xs text-navy-600 font-medium"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
