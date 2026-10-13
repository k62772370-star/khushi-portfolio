import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ExternalLink, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission / create mailto trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Construct mailto link
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formState.subject || 'Portfolio Inquiry from ' + formState.name
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in collaboration, internship opportunities, or discussing AI and web development? Reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Copy Button */}
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-slate-400">
                      Official Email
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white break-all">
                      {personalInfo.email}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-purple-400" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white shadow-md shadow-purple-600/25 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* LinkedIn & GitHub Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-card rounded-2xl p-5 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400">LinkedIn</h4>
                  <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {personalInfo.linkedinHandle}
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card rounded-2xl p-5 border border-white/10 hover:border-purple-500/40 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <Github className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400">GitHub</h4>
                  <p className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    @{personalInfo.githubHandle}
                  </p>
                </div>
              </a>
            </div>

            {/* Location & Academic Base Card */}
            <div className="glass-panel rounded-2xl p-5 border border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase font-bold text-slate-400">Based in</h4>
                <p className="text-sm font-bold text-white">
                  {personalInfo.location} • {personalInfo.college}
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Form (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <p className="text-xs text-slate-400">
                  Fill out this quick form to send me an email directly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                    Your email client is opening with your message details for Khushi.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="Collaboration / Project Inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Khushi, I came across your portfolio and would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:opacity-95 shadow-lg shadow-purple-600/30 transition-all text-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Khushi</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
