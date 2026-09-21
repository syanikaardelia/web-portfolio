import React, { useState } from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { portfolioData, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { FloralMotif } from './FloralMotif';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-y border-navy-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="text-brand-600">
            <FloralMotif size={28} opacity={0.9} />
          </div>
          <h2 className="text-sm uppercase tracking-widest font-bold text-brand-700">Selected Projects</h2>
          <div className="h-px bg-navy-200 flex-1 max-w-xs"></div>
        </div>

        <div className="max-w-3xl mb-14">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight mb-3">
            Applied projects in assessment, training design, and organizational systems.
          </h3>
          <p className="text-navy-600 text-base sm:text-lg">
            Academic work exploring people, teams, leadership, training, and organizational development conducted during Psychology degree coursework at Universitas Airlangga.
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-[#fcfdfd] border border-navy-100/90 hover:border-brand-300 p-6 flex flex-col justify-between hover:shadow-card transition-all duration-300 relative overflow-hidden"
            >
              {/* Project Card Image Preview if available */}
              {project.image && (
                <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 bg-navy-100 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-0.5 rounded-full text-xs font-mono font-bold text-brand-700 shadow-sm">
                    {project.number}
                  </div>
                  <div className="absolute top-3 right-3 bg-navy-900/80 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              )}

              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs text-navy-500 mb-2">
                  <span className="font-semibold text-brand-600 uppercase tracking-wider text-[11px]">
                    {project.category}
                  </span>
                  <span className="font-mono">{project.year}</span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-navy-950 group-hover:text-brand-700 transition-colors mb-2 leading-snug">
                  {project.title}
                </h4>

                {/* Course Name */}
                <p className="text-xs text-navy-500 italic mb-3 flex items-center space-x-1">
                  <BookOpen className="w-3.5 h-3.5 flex-shrink-0 text-navy-400" />
                  <span className="truncate">{project.course}</span>
                </p>

                {/* Short Description */}
                <p className="text-sm text-navy-600 leading-relaxed line-clamp-3 mb-6">
                  {project.shortDescription}
                </p>
              </div>

              {/* Tags and CTA footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-navy-50 text-[11px] font-medium text-navy-600 border border-navy-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-navy-100 flex items-center justify-between text-xs font-semibold text-brand-700 group-hover:text-brand-800">
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
