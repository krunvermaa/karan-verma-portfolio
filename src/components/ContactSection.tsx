import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check, Send, Clock, Plus, Minus, Sparkles, ShieldCheck } from 'lucide-react';

interface CollaborationOption {
  id: string;
  label: string;
  category: string;
  defaultMessage: string;
  avatarBg: string;
  avatarText: string;
}

export const ContactSection: React.FC = () => {
  const [selectedOptionId, setSelectedOptionId] = useState<string>('fun');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  const collaborationOptions: CollaborationOption[] = [
    {
      id: 'work',
      label: 'for Work',
      category: 'Full-Time / High-Impact Role',
      defaultMessage: "Hi Karan, I'm reaching out regarding a full-stack engineering role on our team...",
      avatarBg: 'bg-slate-200 dark:bg-slate-800',
      avatarText: '💼',
    },
    {
      id: 'fun',
      label: 'for Fun',
      category: 'Creative Product / Hackathon',
      defaultMessage: "Hey Karan, loved your portfolio! Let's build something wild and creative together...",
      avatarBg: 'bg-emerald-100 dark:bg-emerald-950/60',
      avatarText: '🧝',
    },
    {
      id: 'learning',
      label: 'for Learning',
      category: 'Architecture Review & Systems Chat',
      defaultMessage: "Hi Karan, I wanted to discuss local-first architectures and your Wasm implementation...",
      avatarBg: 'bg-indigo-100 dark:bg-indigo-950/60',
      avatarText: '🧙‍♂️',
    },
    {
      id: 'study',
      label: 'for Study',
      category: 'Mentorship & Campus Talks',
      defaultMessage: 'Hi Karan, we would love to invite you to speak with student developers at our university...',
      avatarBg: 'bg-rose-100 dark:bg-rose-950/60',
      avatarText: '📚',
    },
    {
      id: 'dont-know',
      label: "I Don't Know",
      category: 'Exploratory Coffee Chat',
      defaultMessage: 'Hey Karan, no fixed agenda yet, just wanted to connect and say hello...',
      avatarBg: 'bg-amber-100 dark:bg-amber-950/60',
      avatarText: '🕶️',
    },
    {
      id: 'routine',
      label: 'Ahh... for Systems',
      category: 'Sub-50ms Performance / Wasm',
      defaultMessage: 'Hi Karan, we have a performance-critical bottleneck and would love your engineering perspective...',
      avatarBg: 'bg-purple-100 dark:bg-purple-950/60',
      avatarText: '⚡',
    },
  ];

  // Update default message when option changes
  useEffect(() => {
    const selected = collaborationOptions.find((opt) => opt.id === selectedOptionId);
    if (selected && !formData.message) {
      setFormData((prev) => ({ ...prev, message: selected.defaultMessage }));
    }
  }, [selectedOptionId]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOptionToggle = (opt: CollaborationOption) => {
    if (selectedOptionId === opt.id) {
      setSelectedOptionId('');
    } else {
      setSelectedOptionId(opt.id);
      setFormData((prev) => ({ ...prev, message: opt.defaultMessage }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    const currentOpt = collaborationOptions.find((opt) => opt.id === selectedOptionId);
    const subjectPrefix = currentOpt ? `[${currentOpt.label}]` : '[Project Inquiry]';
    const subject = encodeURIComponent(`${subjectPrefix} Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Karan,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none bg-[#FAF7FE] dark:bg-[#0D0717] text-theme-primary border-t border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      {/* Subtle Electric Violet & Fuchsia Radar Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-violet-300/35 dark:from-violet-900/30 via-fuchsia-200/20 dark:via-fuchsia-950/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[650px] h-[400px] bg-indigo-200/25 dark:bg-purple-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs text-xs font-mono text-slate-700 dark:text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>07 / COLLABORATION</span>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <span>DIRECT INBOX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] transition-colors">
            What will you <br className="sm:hidden" />
            <span className="inline-block relative">
              <span className="underline decoration-indigo-400 dark:decoration-indigo-500 decoration-wavy decoration-2 underline-offset-8">
                build
              </span>
            </span>{' '}
            with me?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans max-w-md mx-auto transition-colors">
            Pick a scope below to tailor your message, or draft a direct note to my terminal.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* THE PLAYFUL APP DESIGN PILL SELECTOR (Reference: Playful App Design) */}
        {/* ========================================================================= */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: The Floating Dashed Pill Capsule Stack */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-md space-y-3.5">
              {collaborationOptions.map((opt) => {
                const isSelected = selectedOptionId === opt.id;

                return (
                  <div
                    key={opt.id}
                    onClick={() => handleOptionToggle(opt)}
                    className={`cursor-pointer group relative w-full min-h-[60px] sm:h-[68px] py-2 sm:py-0 rounded-full px-3.5 sm:px-5 flex items-center justify-between transition-all duration-300 ${
                      isSelected
                        ? 'bg-white dark:bg-[#1A2130] border-2 border-indigo-600 dark:border-indigo-400 shadow-xl scale-[1.01] sm:scale-[1.02] z-20 text-slate-950 dark:text-white font-bold'
                        : 'bg-white dark:bg-[#121622] hover:bg-slate-50 dark:hover:bg-[#171D2B] border-2 border-dashed border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-500 text-slate-800 dark:text-slate-200 shadow-xs'
                    }`}
                  >
                    {/* Left: Avatar Circle */}
                    <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1 pr-2">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-center text-lg sm:text-2xl transition-transform group-hover:scale-110 ${opt.avatarBg}`}
                      >
                        {opt.avatarText}
                      </div>

                      {/* Center: Label Text */}
                      <div className="space-y-0.5 min-w-0 flex-1">
                        <span className="font-display text-sm sm:text-base md:text-lg tracking-tight block text-slate-950 dark:text-white truncate">
                          {opt.label}
                        </span>
                        <span className="text-[10px] font-mono text-slate-600 dark:text-slate-400 block truncate font-medium">
                          {opt.category}
                        </span>
                      </div>
                    </div>

                    {/* Right: Plus / Minus Toggle Button */}
                    <div
                      className={`w-7 h-7 sm:w-9 sm:h-9 shrink-0 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'bg-slate-200 dark:bg-slate-800 group-hover:bg-slate-300 dark:group-hover:bg-slate-700 text-slate-700 dark:text-slate-200'
                      }`}
                    >
                      {isSelected ? (
                        <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-4 text-xs font-mono text-slate-600 dark:text-slate-400 font-medium">
              Select any pill to auto-configure transmission payload
            </div>
          </div>

          {/* Right Column: Transmission Desk, Live IST Clock, and Form */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Email & Live Clock Card */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Direct Email Card */}
              <div className="p-5 rounded-3xl bg-surface border border-slate-300 dark:border-slate-800 shadow-lg space-y-3 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                  <span className="font-bold text-slate-800 dark:text-slate-200 uppercase">OFFICIAL EMAIL</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="font-mono text-xs text-slate-950 dark:text-white font-bold truncate">
                  {PERSONAL_INFO.email}
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="w-full py-2.5 rounded-xl bg-slate-950 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Direct Email'}</span>
                </button>
              </div>

              {/* Live IST Clock Card */}
              <div className="p-5 rounded-3xl bg-surface border border-slate-300 dark:border-slate-800 shadow-lg space-y-2 font-mono transition-colors">
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span className="font-bold uppercase">LOCAL TIME (IST)</span>
                  <Clock className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                </div>

                <div className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white tabular-nums">
                  {currentTime || 'Loading Time...'}
                </div>

                <div className="text-[11px] text-slate-600 dark:text-slate-400 font-sans font-medium">
                  {PERSONAL_INFO.location} · UTC +5:30
                </div>
              </div>
            </div>

            {/* Transmission Form */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-slate-300 dark:border-slate-800 shadow-xl space-y-6 transition-colors">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 mx-auto flex items-center justify-center shadow-sm">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-display font-black text-slate-950 dark:text-white">
                    Draft Prepared!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-sm mx-auto font-sans leading-relaxed">
                    Your email client has opened with your note. You can also write directly to{' '}
                    <strong className="text-slate-950 dark:text-white font-mono">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition cursor-pointer"
                  >
                    Draft Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                    <span className="font-display font-bold text-base text-slate-950 dark:text-white">
                      Transmit a Message
                    </span>
                    <span className="text-[10px] font-mono text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800 font-bold">
                      &lt; 12H Response
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label htmlFor="playful-name" className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Your Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="playful-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maya Lin"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-600 dark:focus:ring-indigo-400 text-xs sm:text-sm outline-none transition bg-surface-subtle dark:bg-[#0E121B] text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 font-sans"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="playful-email" className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Your Email <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="playful-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="maya@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-600 dark:focus:ring-indigo-400 text-xs sm:text-sm outline-none transition bg-surface-subtle dark:bg-[#0E121B] text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label htmlFor="playful-message" className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        Message Payload <span className="text-rose-600">*</span>
                      </label>
                      {selectedOptionId && (
                        <span className="text-[10px] font-mono text-indigo-700 dark:text-indigo-400 font-bold">
                          Scope: {collaborationOptions.find((o) => o.id === selectedOptionId)?.label}
                        </span>
                      )}
                    </div>
                    <textarea
                      id="playful-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about what you are building, the scope, or the role..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 focus:border-indigo-600 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-600 dark:focus:ring-indigo-400 text-xs sm:text-sm outline-none transition bg-surface-subtle dark:bg-[#0E121B] text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-y font-sans leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-950 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-950 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Social Signal Links */}
            <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5 text-slate-800 dark:text-slate-200" />
                <span>GitHub</span>
              </a>
              <span>·</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <span>·</span>
              <span>Available for Fall '26</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
