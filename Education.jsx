import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Building rigorous theoretical knowledge and practical software engineering capabilities.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden border border-white/10"
            >
              {/* Subtle accent border at top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Degree Program</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300">
                    <span className="font-semibold text-purple-400">{edu.institution}</span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                {edu.description}
              </p>

              {/* Relevant Learning Areas */}
              <div className="mt-8 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span>Key Coursework & Learning Areas</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {edu.learningAreas.map((area, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/20 transition-all text-xs sm:text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold text-slate-400">Academic Highlights:</span>
                {edu.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    <Award className="w-3 h-3 text-cyan-400" />
                    <span>{highlight}</span>
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
