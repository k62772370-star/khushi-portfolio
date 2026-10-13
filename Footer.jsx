import React from 'react';
import { ArrowUp, Heart, Mail, Linkedin, Github, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#07090e] pt-14 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 items-center">
          
          {/* Brand & Tagline (Left 6 cols) */}
          <div className="md:col-span-6 space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#07090e] rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-sm">
                    KV
                  </span>
                </div>
              </div>
              <span className="font-bold text-white text-lg tracking-wide">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              B.Tech Student at {personalInfo.college}. Exploring the frontiers of Artificial Intelligence, Web Development, and Digital Productivity.
            </p>
          </div>

          {/* Quick Navigation Links (Right 6 cols) */}
          <div className="md:col-span-6 flex flex-col md:items-end items-center space-y-4">
            <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Icons & Back to Top */}
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-purple-400 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-purple-400 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600 border border-purple-500/30 text-purple-300 hover:text-white transition-all ml-2"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span>using React, Vite & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
