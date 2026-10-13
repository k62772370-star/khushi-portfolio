import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Globe, 
  Zap, 
  Layers, 
  Check 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon names to Lucide icons
const iconMap = {
  Code2: Code2,
  Palette: Palette,
  FileCode: FileCode,
  Terminal: Terminal,
  Cpu: Cpu,
  Sparkles: Sparkles,
  Globe: Globe,
  Zap: Zap
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Programming', 'Emerging Tech', 'Productivity & Systems'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category.includes(activeCategory) || (activeCategory === 'Web Development' && (s.category === 'Web Development' || s.category === 'Frontend Stack')));

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Expertise</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Technologies, programming languages, and productivity workflows I actively practice and build with.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid - 8 Required Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;

            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 relative flex flex-col justify-between group"
              >
                {/* Top header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/40 transition-transform">
                      <IconComponent className="w-6 h-6 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Proficiency Indicator */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="text-purple-400">{skill.level}</span>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.levelPercent}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
