import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, ArrowUpRight, Sparkles, Layers, Check } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Decorative gradients for card banners
  const bannerGradients = [
    'from-purple-900/60 via-indigo-950/60 to-slate-900',
    'from-indigo-900/60 via-blue-950/60 to-slate-900',
    'from-cyan-900/60 via-teal-950/60 to-slate-900'
  ];

  return (
    <section id="projects" className="py-20 relative bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Endeavors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical, impactful software engineering projects developed to solve real problems and explore cutting-edge technologies.
          </p>
        </div>

        {/* Project Cards Grid - 3 Core Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-purple-500/40"
            >
              <div>
                {/* Visual Preview Header */}
                <div className={`relative h-48 bg-gradient-to-br ${bannerGradients[idx % bannerGradients.length]} p-6 flex flex-col justify-between overflow-hidden border-b border-white/10`}>
                  
                  {/* Category Pill & ID */}
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 backdrop-blur-md text-white border border-white/10">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-white/50">
                      0{project.id}
                    </span>
                  </div>

                  {/* Visual Graphic Representation */}
                  <div className="z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-2 shadow-inner group-hover:scale-110 transition-transform">
                      <Sparkles className="w-6 h-6 text-cyan-300" />
                    </div>
                    <p className="text-xs text-slate-300 font-medium line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Ambient decorative circle */}
                  <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-purple-500/20 blur-2xl group-hover:bg-purple-500/30 transition-colors pointer-events-none" />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies Tags */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 sm:p-7 sm:pt-0 border-t border-white/5 mt-4">
                <div className="flex items-center gap-3 pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs shadow-md shadow-purple-600/20 transition-all hover:shadow-purple-600/40"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
