import React from 'react';
import { Award, Trophy, BookOpen, Star, PlusCircle, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const iconComponents = {
  Award,
  Trophy,
  BookOpen,
  Star
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Certifications, hackathons, completed specializations, and academic recognitions achieved throughout my engineering journey.
          </p>
        </div>

        {/* 4 Categorized Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((category, idx) => {
            const Icon = iconComponents[category.icon] || Award;

            return (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {category.category}
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-300 font-medium">
                    {category.items.length} Records
                  </span>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all space-y-2 group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-mono text-slate-400 shrink-0">
                          {item.date}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-purple-400 font-medium">
                        <span>{item.issuer}</span>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed pt-1">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Extensibility Notice Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-900/20 via-slate-900 to-cyan-900/20 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <PlusCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Ready for Future Achievements</h4>
              <p className="text-xs text-slate-400">
                You can easily add new hackathons, certificates, and awards at any time inside the structured data file.
              </p>
            </div>
          </div>
          <span className="text-xs px-4 py-2 rounded-xl bg-white/5 text-slate-300 border border-white/10 font-mono">
            src/data/portfolioData.js
          </span>
        </div>

      </div>
    </section>
  );
}
