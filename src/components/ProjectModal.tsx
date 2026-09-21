import React, { useEffect } from 'react';
import { X, CheckCircle, Tag, BookOpen, Layers } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-navy-100 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-navy-100 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-bold text-brand-600 px-2 py-0.5 rounded bg-brand-50 border border-brand-100">
              PROJECT {project.number}
            </span>
            <span className="text-xs text-navy-400">•</span>
            <span className="text-xs font-semibold text-navy-600">{project.course}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-navy-400 hover:text-navy-900 hover:bg-navy-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Metadata */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">{project.category}</span>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-1">
              {project.title}
            </h3>
            <p className="text-xs text-navy-500 mt-1 font-medium">Academic Applied Project · {project.year}</p>
          </div>

          {/* Project Screenshot / Visual Documentation */}
          {project.image && (
            <div className="rounded-2xl overflow-hidden border border-navy-100 bg-navy-50 max-h-80 shadow-sm">
              <img
                src={project.image}
                alt={`${project.title} documentation from portfolio`}
                className="w-full h-full object-cover object-center"
              />
              <div className="px-4 py-2 bg-navy-50 border-t border-navy-100">
                <p className="text-[11px] text-navy-500 font-medium">
                  Source Documentation: Portfolio Submission · Universitas Airlangga
                </p>
              </div>
            </div>
          )}

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-navy-900 flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-brand-600" />
              <span>Project Overview</span>
            </h4>
            <p className="text-navy-600 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Methodology / Framework */}
          {project.methodology && (
            <div className="p-4 rounded-2xl bg-brand-50/70 border border-brand-100 space-y-1">
              <div className="flex items-center space-x-2 text-brand-800 text-xs font-bold uppercase tracking-wider">
                <Layers className="w-4 h-4 text-brand-600" />
                <span>Core Framework & Methodology</span>
              </div>
              <p className="text-sm font-semibold text-navy-900 pl-6">{project.methodology}</p>
            </div>
          )}

          {/* Key Deliverables & Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-navy-900">Key Deliverables & Analysis</h4>
            <div className="space-y-2.5">
              {project.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm text-navy-600">
                  <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Competency Tags */}
          <div className="pt-4 border-t border-navy-100">
            <div className="flex items-center space-x-2 text-xs font-semibold text-navy-500 mb-3">
              <Tag className="w-3.5 h-3.5 text-navy-400" />
              <span>Competencies & Topics Covered</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-semibold border border-brand-200/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-navy-50/60 border-t border-navy-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-navy-900 text-white font-medium text-sm hover:bg-navy-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
