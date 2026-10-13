import React from 'react';
import { ArrowRight, Sparkles, MapPin, GraduationCap, Github, Linkedin, Mail, Code2, Bot, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Dynamic Background Glow Blobs */}
      <div className="glow-blob w-96 h-96 bg-purple-600/20 top-20 -left-20 animate-pulse-slow" />
      <div className="glow-blob w-96 h-96 bg-cyan-600/15 top-40 -right-20 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="glow-blob w-80 h-80 bg-indigo-600/20 bottom-10 left-1/3" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content (Left/Center) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-purple-500/10 border border-purple-500/30 text-purple-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>{personalInfo.status}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-800/80 border border-slate-700 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-semibold text-purple-400 tracking-wider uppercase">
                Hello, Welcome to my Portfolio
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
                I am{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                  {personalInfo.name}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200">
                {personalInfo.role}
              </h2>
            </div>

            {/* University Tag */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-400 font-medium">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span>{personalInfo.college}</span>
            </div>

            {/* Introduction Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:-translate-y-0.5 transition-all text-sm sm:text-base"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 hover:text-white transition-all text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Contact Mini Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-5 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Connect:
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                title="Send an Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hero Visual Card (Right Column) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative gradient border frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 opacity-30 blur-lg transition duration-1000 group-hover:opacity-100 animate-pulse-slow" />
              
              <div className="relative glass-panel rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-white/10">
                {/* Header card preview */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Khushi Vinaykumar</h3>
                      <p className="text-xs text-purple-300">B.Tech Student @ JECRC</p>
                    </div>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium">
                    Jaipur, IN
                  </span>
                </div>

                {/* Core Focus Badges */}
                <div className="space-y-3">
                  <p className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                    Core Technical Pillars
                  </p>
                  <div className="grid grid-cols-1 gap-2.5">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all">
                      <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xs font-semibold text-white">Artificial & GenAI</h4>
                        <p className="text-[11px] text-slate-400">LLMs, intelligent workflows & systems</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all">
                      <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xs font-semibold text-white">Modern Web Engineering</h4>
                        <p className="text-[11px] text-slate-400">React, Tailwind, JavaScript & Python</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xs font-semibold text-white">Digital Productivity</h4>
                        <p className="text-[11px] text-slate-400">High efficiency systems & automated tools</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Quote Banner */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/20 text-center">
                  <p className="text-xs text-purple-200 italic">
                    "Transforming complex technologies into accessible, impactful digital reality."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
