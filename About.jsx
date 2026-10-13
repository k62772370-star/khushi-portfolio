import React from 'react';
import { User, Sparkles, BookOpen, Target, Heart, Compass, Laptop, Cpu, Rocket } from 'lucide-react';
import { personalInfo, aboutMe } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Khushi</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A curious mind, engineering student, and builder exploring the intersection of modern web development and intelligent systems.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Story (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <Rocket className="w-6 h-6 text-purple-400" />
                <span>My Journey & Vision</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {aboutMe.intro}
              </p>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {aboutMe.story}
              </p>

              <div className="border-t border-white/10 pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {aboutMe.stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="block text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Values Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/40 to-slate-900 border border-purple-500/20 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                  🎯
                </div>
                <h4 className="text-white font-semibold text-sm">Pragmatic Learning</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Believing that true understanding comes from applying textbook concepts into real, working applications.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/20 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  ⚡
                </div>
                <h4 className="text-white font-semibold text-sm">Productivity Obsessed</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Continually optimizing workflows, digital routines, and developer tools to maximize focused output.
                </p>
              </div>
            </div>
          </div>

          {/* Area of Interests (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 px-1">
              What Excites Me Most
            </h4>

            {aboutMe.interests.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-4 sm:p-5 border border-white/5 hover:border-purple-500/30 transition-all group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-purple-600/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-semibold text-white text-sm group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
