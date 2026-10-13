import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Calendar, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-purple-400">
            {project.tagline}
          </p>
        </div>

        {/* Main Details */}
        <div className="mt-6 space-y-6">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Key Features */}
          {project.features && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
                Key Features & Highlights
              </h4>
              <div className="space-y-2">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
              Technologies & Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-purple-300 border border-purple-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            <a
              href={project.demo !== '#' ? project.demo : '#'}
              onClick={(e) => {
                if (project.demo === '#') {
                  e.preventDefault();
                  alert(`Project demo for "${project.title}" is actively showcased here!`);
                }
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-sm shadow-lg shadow-purple-600/30 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Explore Demo</span>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:text-white text-sm transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Source</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
