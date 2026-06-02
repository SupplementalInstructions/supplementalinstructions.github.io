import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  TrendingUp, 
  Compass, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Users, 
  Award, 
  CheckCircle, 
  Flame, 
  ShieldCheck, 
  Zap,
  PhoneCall,
  Inbox
} from "lucide-react";
import { 
  INITIAL_FOCUS_AREAS, 
  MOCK_TESTIMONIALS,
  FocusArea
} from "../types";
import useSEO from "../hooks/useSEO";

export default function Home() {
  // Interactive sample Thrive Mode checklist matching Version 1 screenshot values
  const [thriveTasks, setThriveTasks] = useState([
    { id: 1, text: "Perform 12-min high intense cardio", done: true, value: 15, category: "Thrive Mode" },
    { id: 2, text: "Compounding value calculators checked", done: false, value: 25, category: "Alchemy Entrepreneurship" },
    { id: 3, text: "Active deep focus sprint: 25 mins", done: true, value: 20, category: "Reading Culture" },
    { id: 4, text: "Stoic gratitude reflection logged", done: false, value: 15, category: "Mental Wellness" }
  ]);

  const toggleTask = (id: number) => {
    setThriveTasks(prev => prev.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const completedCount = thriveTasks.filter(t => t.done).length;
  const currentLevelXP = thriveTasks.reduce((sum, t) => sum + (t.done ? t.value : 0), 0);
  const totalXP = thriveTasks.reduce((sum, t) => sum + t.value, 0);
  const progressPercent = Math.round((currentLevelXP / totalXP) * 100);

  // Active Highlight State for Focus Areas Section
  const [selectedFocus, setSelectedFocus] = useState<FocusArea>(INITIAL_FOCUS_AREAS[0]);

  // Dynamic SEO and social-tag generation utility for concepts
  useSEO({
    title: selectedFocus 
      ? `${selectedFocus.title} Focus System — Personal Growth Lab` 
      : "Supplemental Instruction LLC — Personal Growth Laboratory",
    description: selectedFocus 
      ? `Calibrate your consistency under the S-H ${selectedFocus.title} framework: ${selectedFocus.description}`
      : "Evolving human development. S-H designs premium education systems, physical log books, and peer networks to guide you from survival fatigue to creative sovereignty.",
    ogTitle: selectedFocus ? `S-H | Calibrating ${selectedFocus.title}` : undefined,
    ogDescription: selectedFocus ? selectedFocus.description : undefined,
  });

  // Helper mapping string to Lucide icon beautifully
  const getFocusIcon = (iconName: string, id: string) => {
    const defaultColor = "w-5 h-5";
    switch (id) {
      case "thrive-mode": return <Flame className={`${defaultColor} text-[#14B8A6]`} />;
      case "reading-culture": return <BookOpen className={`${defaultColor} text-cyan-400`} />;
      case "alchemy-entrepreneurship": return <TrendingUp className={`${defaultColor} text-amber-500`} />;
      case "mental-wellness": return <Compass className={`${defaultColor} text-purple-400`} />;
      default: return <Sparkles className={`${defaultColor} text-[#14B8A6]`} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#060B13] text-slate-100 overflow-hidden relative" id="home-page-container">
      
      {/* Background elegant silk mesh curves to match original glows */}
      <div className="absolute top-[8%] left-[2%] w-[32rem] h-[32rem] rounded-full bg-[#0D9488]/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-[35%] right-[2%] w-[38rem] h-[38rem] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[12%] left-[10%] w-[32rem] h-[32rem] rounded-full bg-emerald-500/5 blur-[90px] pointer-events-none" />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 md:pt-20 lg:pt-28 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10" id="hero-segment">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Description Detail */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Live alert onboarding pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D9488]/15 border border-[#0D9488]/30 text-xs font-mono font-bold text-[#14B8A6] mb-6 shadow-[0_0_15px_rgba(13,148,136,0.15)]"
              id="hero-banner-tag"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>THE PERSONAL GROWTH LABORATORY ENGINE</span>
            </motion.div>

            {/* Display Headings with rich cyan gradient matches first version layout */}
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] mb-6"
              id="hero-headline"
            >
              Your Personal <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-300 drop-shadow-md">
                Growth Laboratory.
              </span>
            </motion.h1>

            {/* Subhead narrative alignment */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-10 font-sans"
              id="hero-subheadline"
            >
              Build discipline, habits, mindset, fitness, financial intelligence, and spiritual growth through structured systems designed for long-term transformation. Beautiful physical track logs delivered globally.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
              id="hero-ctas"
            >
              <Link
                to="/contact"
                className="px-7 py-4 bg-gradient-to-r from-emerald-400 to-[#0D9488] text-slate-950 font-extrabold text-xs tracking-wider uppercase text-center rounded-xl shadow-lg hover:brightness-110 hover:scale-[1.01] transition-all cursor-pointer flex items-center justify-center gap-2"
                id="hero-primary-cta"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
              
              <Link
                to="/about"
                className="px-7 py-4 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-900 font-bold text-xs tracking-wider uppercase text-center rounded-xl transition-all cursor-pointer"
                id="hero-secondary-cta"
              >
                See How It Works &rarr;
              </Link>
            </motion.div>

            {/* Small trust validation bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-12 flex flex-wrap items-center gap-5 border-t border-slate-800/80 pt-6 text-[10.5px] font-mono text-slate-500 text-left"
              id="hero-trust-metrics"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-slate-300 font-semibold uppercase tracking-wider">94% goal overachieve</span>
              </div>
              <div className="block text-slate-800">|</div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-cyan-400" />
                <span className="text-slate-300 font-semibold uppercase tracking-wider">4.9/5 Advisor Rating</span>
              </div>
              <div className="block text-slate-800">|</div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                <span className="text-slate-300 font-semibold uppercase tracking-wider">1.2M+ XP Earned Globally</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Thrive Check-In Simulation (Right 5 Columns) with glorious dark glass */}
          <div className="lg:col-span-5 relative" id="hero-interactive-demo-cell">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#018073]/20 to-indigo-500/10 rounded-3xl blur-lg opacity-70 -z-10" />
            
            <div className="premium-card rounded-2xl bg-slate-950/75 border border-slate-800/90 p-6 shadow-2xl relative text-left">
              
              {/* Header Box */}
              <div className="flex items-center justify-between border-b border-slate-850 pb-4 mb-4">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#14B8A6] font-bold block">Thrive Mode Simulator</span>
                  <h3 className="font-display font-extrabold text-white text-sm mt-0.5">Laboratory Efficiency</h3>
                </div>
                <div className="px-2.5 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-[9px] font-mono text-[#14B8A6] font-extrabold">
                  35 XP / SECURE
                </div>
              </div>

              {/* Progress Panel */}
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-850/70 mb-4 text-left">
                <div className="flex justify-between items-center mb-1.5 text-xs">
                  <span className="font-semibold text-slate-300 font-display">Optimization Progress</span>
                  <span className="font-mono font-bold text-[#14B8A6]">{progressPercent}%</span>
                </div>
                
                {/* Visual score slider */}
                <div className="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-[#14B8A6] to-emerald-400 h-full transition-all duration-500 relative" 
                    style={{ width: `${progressPercent}%` }} 
                  >
                    <span className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-2.5 text-[10px] text-slate-400 font-mono">
                  <span>Logged: <strong className="text-slate-200">{completedCount} of {thriveTasks.length} cycles</strong></span>
                  <span>XP Accumulation: <strong className="text-[#14B8A6]">{currentLevelXP} XP</strong></span>
                </div>
              </div>

              {/* Checklist list matches First Version layout */}
              <div className="space-y-2 mb-4" id="hero-habits-console">
                {thriveTasks.map((task) => (
                  <button
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left border cursor-pointer text-xs font-semibold select-none transition-all duration-200 outline-none ${
                      task.done 
                        ? "bg-[#0D9488]/15 border-[#0D9488]/40 shadow-[0_0_12px_rgba(13,148,136,0.1)] text-[#14B8A6]" 
                        : "bg-slate-950/40 border-slate-800 text-slate-400 hover:bg-slate-900 hover:border-slate-700"
                    }`}
                    id={`hero-interactive-task-${task.id}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4.5 h-4.5 rounded-md flex items-center justify-center transition-all ${
                        task.done ? "bg-[#0D9488] text-slate-950" : "border border-slate-700"
                      }`}>
                        {task.done && <CheckCircle className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className={task.done ? "line-through text-slate-400" : "text-slate-200"}>
                        {task.text}
                      </span>
                    </div>
                    <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded ${
                      task.done ? "bg-[#0D9488]/20 text-[#14B8A6]" : "bg-slate-900 text-slate-500"
                    }`}>
                      +{task.value} XP
                    </span>
                  </button>
                ))}
              </div>

              <div className="text-center pt-2">
                <span className="text-[10px] font-mono text-slate-500">
                  ⚡ Click checkmarks inside console to observe active progression logic.
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= THE COMMITTED PLATFORM OVERVIEW ================= */}
      <section className="relative py-20 bg-slate-950/80 text-slate-100 border-t border-b border-slate-900/60" id="platform-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Descriptive Content (7 columns) */}
            <div className="lg:col-span-7 text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-[#14B8A6] font-bold">
                ESTABLISHING LEGITIMACY
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-3 mb-6" id="overview-heading">
                "Transforming Minds From Survival To Thrive"
              </h2>
              
              <div className="space-y-4 text-slate-350 text-xs sm:text-sm leading-relaxed font-sans">
                <p>
                  Most modern self-development is a digital illusion. We scroll through short videos, store digital checklists on random apps, and remain perpetually overwhelmed by distraction. This is <strong>Survival Mode</strong>—exhausted, fragmented, and passive.
                </p>
                <p>
                  Supplemental Instruction LLC rejects this paradigm entirely. We believe that true transformation requires physical anchors, cognitive space, and vetted peer accountability communities. 
                </p>
                <p>
                  We compile classic letters of stoicism, finance budget systems, biological sleep metrics, and reading schedules into gorgeous shipped materials. With our verified support channels, you are guided away from superficial distractions toward genuine <strong>Thrive Mode</strong>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/about" className="px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-xs tracking-wide cursor-pointer text-center">
                  Explore Our Manifesto
                </Link>
                <Link to="/contact" className="px-5 py-3 rounded-lg bg-gradient-to-r from-emerald-400 to-[#0D9488] hover:brightness-110 text-slate-950 font-extrabold text-xs tracking-wide uppercase cursor-pointer text-center">
                  Join the Next Intake
                </Link>
              </div>
            </div>

            {/* Quick Informational Cards (5 columns) */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4 text-left" id="story-pillars-summary">
              <div className="p-5 rounded-xl bg-[#0d1626]/40 border border-slate-850 flex gap-4">
                <div className="p-2 w-9 h-9 rounded bg-[#0D9488]/15 text-[#14B8A6] border border-[#0D9488]/25 flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">1. Core Biomarker Habits</h4>
                  <p className="text-[11px] text-slate-400 leading-normal mt-1">Circadian rhythm mapping, sleep quality logs, and cardiovascular discipline patterns.</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0d1626]/40 border border-slate-850 flex gap-4">
                <div className="p-2 w-9 h-9 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">2. Applied Literature Syllabi</h4>
                  <p className="text-[11px] text-slate-400 leading-normal mt-1">Active reading logs on psychology, philosophy, and wealth generation that compound assets over years.</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#0d1626]/40 border border-slate-850 flex gap-4">
                <div className="p-2 w-9 h-9 rounded bg-amber-500/10 text-amber-500 border border-amber-500/25 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">3. Freedom Funding Models</h4>
                  <p className="text-[11px] text-slate-400 leading-normal mt-1">Sustainable asset budget algorithms and lightweight entrepreneurship to fund organic global travel.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= DETAILED FOCUS DISCIPLINARY PATHS ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative" id="focus-disciplines-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Interactive selection triggers */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#14B8A6] font-bold">
              THE DEVELOPMENT SPECS
            </span>
            <h2 className="font-display font-extrabold text-3xl text-white tracking-tight mt-3 mb-6" id="focus-section-heading">
              Custom-Crafted Focus Fields
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed max-w-lg mb-8">
              Supplemental Instruction covers four foundational cognitive disciplines. Click on any discipline below to view the detailed syllabus highlights:
            </p>

            <div className="space-y-2.5" id="focus-selection-trigger-list">
              {INITIAL_FOCUS_AREAS.map((area) => {
                const isSelected = selectedFocus.id === area.id;
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedFocus(area)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl text-left border cursor-pointer transition-all duration-350 ${
                      isSelected 
                        ? "bg-[#0d1626] border-[#14B8A6] shadow-lg shadow-teal-950/20 text-[#14B8A6] font-bold" 
                        : "bg-slate-950/20 border-slate-850 text-slate-400 hover:bg-[#0d1626]/50 hover:border-slate-700"
                    }`}
                    id={`focus-selector-item-${area.id}`}
                  >
                    <div className="flex items-center gap-3">
                      {getFocusIcon(area.iconName, area.id)}
                      <span className="text-xs font-bold leading-none">{area.title}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 text-slate-550 transition-transform ${isSelected ? "translate-x-1" : ""}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Render specific chosen data in luxurious card */}
          <div className="lg:col-span-7" id="focus-viewer-render">
            <div className="premium-card rounded-2xl bg-[#0c1524]/50 border border-slate-800/80 p-8 shadow-2xl relative min-h-[380px] flex flex-col justify-between overflow-hidden">
              <div className="absolute top-[-25%] right-[-10%] w-[18rem] h-[18rem] rounded-full bg-[#0D9488]/10 blur-[70px] pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between border-b border-slate-850 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-850 block shrink-0">
                      {getFocusIcon(selectedFocus.iconName, selectedFocus.id)}
                    </span>
                    <div>
                      <span className="font-mono text-[9px] text-[#14B8A6] font-bold uppercase block tracking-wider">ACTIVE DISCIPLINE SYLLABUS</span>
                      <h3 className="font-display font-extrabold text-white text-base mt-1">{selectedFocus.title}</h3>
                    </div>
                  </div>
                  
                  <span className="font-mono text-[10px] py-1 px-2.5 bg-slate-900 border border-slate-850 text-slate-400 rounded-full font-bold">
                    S-H REF: {selectedFocus.id.toUpperCase().replace("-", "_")}
                  </span>
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                  {selectedFocus.description}
                </p>

                <div className="p-4 bg-slate-950/60 border border-slate-850 rounded-xl mb-6">
                  <h4 className="font-display font-bold text-xs text-[#14B8A6] uppercase tracking-wide mb-2">Curriculum Intent & Goals:</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                    {selectedFocus.longDescription}
                  </p>
                </div>
              </div>

              {/* Sample indicator */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between pt-4 border-t border-slate-850 mt-auto gap-4">
                <div className="flex items-center gap-2.5 font-mono text-[10px] text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6]" />
                  <span>Metric Tracker: <strong className="text-slate-350">{selectedFocus.metric}</strong></span>
                </div>
                
                <Link to="/features" className="text-xs text-[#14B8A6] font-bold flex items-center gap-1 hover:underline shrink-0">
                  <span>Explore Programs Syllabi</span>
                  <ArrowRight className="w-3 px-0 h-3" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= RE-CONFIGURED VALUE PROPOSITIONS CARD GRID ================= */}
      <section className="relative py-24 bg-slate-950/65 border-t border-slate-900/40 text-left" id="features-highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#14B8A6] font-bold">
              SYSTEM MODULE INFORMATION
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3" id="key-systems-heading">
              Our Core Personal Transformation Pillars
            </h2>
            <p className="text-xs sm:text-sm text-slate-450 mt-3 leading-relaxed">
              Explore the premium resources prepared for candidate members. Shipped materials and human networks designed to remove technological clutter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="transformation-pillars-grid">
            
            {/* CARD 1: BOOK PROGRAMS */}
            <div className="p-6 rounded-2xl bg-[#0c1524]/40 border border-slate-850 hover:border-[#0D9488]/50 transition-all duration-300 relative group flex flex-col justify-between min-h-[290px]">
              <div>
                <span className="absolute top-4 right-4 font-mono text-[10px] text-slate-605 font-bold">01</span>
                <div className="w-10 h-10 rounded-lg bg-[#0D9488]/15 border border-[#0D9488]/25 flex items-center justify-center mb-5">
                  <BookOpen className="w-5 h-5 text-[#14B8A6]" />
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2">Book Programs</h3>
                <p className="text-xs text-slate-400 leading-normal mb-6">
                  Step-by-step physical, high-aesthetic daily journals and study syllabi shipped directly to your address. Force friction-free paper habits.
                </p>
              </div>
              <Link to="/features" className="text-xs text-[#14B8A6] font-bold inline-flex items-center gap-1 hover:underline">
                Explore Syllabi <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* CARD 2: HABIT TRACKING */}
            <div className="p-6 rounded-2xl bg-[#0c1524]/40 border border-slate-850 hover:border-[#14B8A6]/50 transition-all duration-300 relative group flex flex-col justify-between min-h-[290px]">
              <div>
                <span className="absolute top-4 right-4 font-mono text-[10px] text-slate-605 font-bold">02</span>
                <div className="w-10 h-10 rounded-lg bg-[#0D9488]/15 border border-[#0D9488]/25 flex items-center justify-center mb-5">
                  <Flame className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2">Habit Tracking</h3>
                <p className="text-xs text-slate-400 leading-normal mb-6">
                  Simulate core biomarker checklists, energy cycles, and nutrition schedules on-grid. High-accountability check-in milestones to measure persistence.
                </p>
              </div>
              <Link to="/features" className="text-xs text-[#14B8A6] font-bold inline-flex items-center gap-1 hover:underline">
                Try Simulator <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* CARD 3: COACH DIRECTORY */}
            <div className="p-6 rounded-2xl bg-[#0c1524]/40 border border-slate-850 hover:border-amber-500/50 transition-all duration-300 relative group flex flex-col justify-between min-h-[290px]">
              <div>
                <span className="absolute top-4 right-4 font-mono text-[10px] text-slate-605 font-bold">03</span>
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5">
                  <Users className="w-5 h-5 text-amber-450" />
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2">Advisor Guidance</h3>
                <p className="text-xs text-slate-400 leading-normal mb-6">
                  Gain direct scheduling access to certified peer advisors across fitness rhythms, stoicism, budgeting, and focus architecture in dedicated rooms.
                </p>
              </div>
              <Link to="/coaching" className="text-xs text-amber-400 font-bold inline-flex items-center gap-1 hover:underline">
                Find Your Coach <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* CARD 4: REWARDS HUB */}
            <div className="p-6 rounded-2xl bg-[#0c1524]/40 border border-slate-850 hover:border-purple-500/50 transition-all duration-300 relative group flex flex-col justify-between min-h-[290px]">
              <div>
                <span className="absolute top-4 right-4 font-mono text-[10px] text-slate-605 font-bold">04</span>
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                  <Award className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2">Rewards System</h3>
                <p className="text-xs text-slate-400 leading-normal mb-6">
                  Earn accredited digital certificate documents, lock historical streak badges, and claim actual physical tokens celebrating completed checkpoints.
                </p>
              </div>
              <Link to="/rewards" className="text-xs text-purple-400 font-bold inline-flex items-center gap-1 hover:underline">
                Observe Badges <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3-STEP FLOW PROCESS TIMELINE ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left" id="flow-timeline">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#14B8A6] font-bold">
            THE SYSTEM STEPS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3" id="how-it-works-heading">
            How S-H Calibrates Growth
          </h2>
          <p className="text-xs text-slate-455 mt-3 max-w-md mx-auto leading-relaxed">
            Three intentional steps that transition your daily focus from fragmented and exhausted to sovereign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Subtle line connecting steps on desktop */}
          <div className="hidden md:block absolute top-[25px] left-[15%] right-[15%] h-[1px] bg-slate-850 -z-10" />

          {/* STEP 1 */}
          <div className="flex flex-col items-start bg-[#0d1626]/40 p-6.5 rounded-2xl border border-slate-850 shadow-sm relative text-left">
            <span className="w-10 h-10 rounded-full bg-[#14B8A6] text-slate-950 font-mono font-bold text-xs flex items-center justify-center mb-5 border-2 border-slate-900 shadow-md">
              1
            </span>
            <span className="font-mono text-[9px] text-[#14B8A6] font-bold uppercase block tracking-wider">INTAKE PHASE</span>
            <h4 className="font-display font-bold text-base text-white mt-1 mb-2.5">Admissions Waiting Queue</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Submit your waitlist file identifying your target fields. Selected candidates undergo a detailed habits intake calibration to design their initial curriculum booklets.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="flex flex-col items-start bg-[#0d1626]/40 p-6.5 rounded-2xl border border-slate-850 shadow-sm relative text-left">
            <span className="w-10 h-10 rounded-full bg-cyan-500 text-slate-950 font-mono font-bold text-xs flex items-center justify-center mb-5 border-2 border-slate-900 shadow-md">
              2
            </span>
            <span className="font-mono text-[9px] text-cyan-400 font-bold uppercase block tracking-wider">PREPARATION PHASE</span>
            <h4 className="font-display font-bold text-base text-white mt-1 mb-2.5">Custom Booklets Shipped</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Your customized physical log booklets are beautifully printed and shipped to your address. They operate as standard offline work environments requiring daily tactile logging.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="flex flex-col items-start bg-[#0d1626]/40 p-6.5 rounded-2xl border border-slate-850 shadow-sm relative text-left">
            <span className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-mono font-bold text-xs flex items-center justify-center mb-5 border-2 border-slate-900 shadow-md">
              3
            </span>
            <span className="font-mono text-[9px] text-amber-400 font-bold uppercase block tracking-wider">EXECUTION PHASE</span>
            <h4 className="font-display font-bold text-base text-white mt-1 mb-2.5">Accountability Calibration</h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Log daily checkpoints, sync with advisors in feedback circles, and compound discussion lessons. Overcome benchmarks to earn discipline credentials.
            </p>
          </div>

        </div>
      </section>

      {/* ================= VERIFIED HIGH-CONVERSION COMMUNITY SECTION ================= */}
      <section className="relative py-24 bg-slate-950/40 border-t border-b border-slate-900" id="community-connection-block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Social Graphic on Left (5 columns) with beautiful dark mockups */}
            <div className="lg:col-span-5 relative" id="social-visuals">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488]/15 to-cyan-500/5 rounded-3xl blur-lg pointer-events-none" />
              
              <div className="bg-[#0c1524] border border-slate-800 rounded-3xl p-6.5 shadow-2xl relative overflow-hidden">
                <span className="font-mono text-[9px] text-[#14B8A6] font-bold uppercase block tracking-widest mb-4">ACTIVE ONBOARDING HUD</span>
                
                {/* Simulated messages list */}
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850 flex gap-3 text-left">
                    <div className="w-7 h-7 rounded-lg bg-[#0D9488]/20 flex items-center justify-center text-xs font-bold font-mono text-[#14B8A6] border border-[#0D9488]/20 shrink-0">
                      JS
                    </div>
                    <div>
                      <span className="font-bold text-[11px] text-white">Julian S. (Administrator)</span>
                      <p className="text-[10px] text-slate-400 leading-tight mt-1 font-sans">"Welcome to the Supplemental Instruction active intake queue! Candidates please check your email files for booklets confirmation."</p>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-850 flex gap-3 text-left">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-xs font-bold font-mono text-indigo-400 border border-indigo-500/20 shrink-0">
                      MK
                    </div>
                    <div>
                      <span className="font-bold text-[11px] text-white">Marta K. (Level 2 Candidate)</span>
                      <p className="text-[10px] text-slate-400 leading-tight mt-1 font-sans">"Logged my compound reading review and circadian sleep hours index. Streak is armed!"</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-850 pt-4 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                  <span>Direct Communication Line</span>
                  <span className="text-emerald-400 font-bold">ESTABLISHED</span>
                </div>
              </div>
            </div>

            {/* Direct Channel Access on Right (7 columns) */}
            <div className="lg:col-span-7">
              <span className="font-mono text-xs uppercase tracking-widest text-[#14B8A6] font-bold">
                COMMUNITY CHANNELS
              </span>
              <h2 className="font-display font-extrabold text-3xl text-white tracking-tight mt-3 mb-6" id="community-headline">
                Active Channels & Support Nodes
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                Supplemental Instruction LLC represents a unified movement. Connect directly with other candidates and administrators across our real, official communication spaces immediately:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="real-community-links-grid">
                
                {/* 1. WhatsApp Core Group */}
                <a 
                  href="https://chat.whatsapp.com/Cv5VheVyx0U91bIc8H0Vqi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-[#0c1524]/60 border border-slate-850 hover:border-[#14B8A6]/40 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between text-left group cursor-pointer"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500/20 transition-colors">
                      <Inbox className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-sm text-white block">Official Community Group</span>
                    <p className="text-[11px] text-slate-400 leading-normal mt-1.5 font-sans">
                      Join active accountability challenges, view daily reviews, and discuss lesson tracks with other members.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[#14B8A6] font-bold uppercase mt-4 block group-hover:underline">Join WHATSAPP GROUP &rarr;</span>
                </a>

                {/* 2. Official Announcement Channel */}
                <a 
                  href="https://whatsapp.com/channel/0029VbCz7sK6mYPQwzf08t2w" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-[#0c1524]/60 border border-slate-850 hover:border-[#14B8A6]/40 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between text-left group cursor-pointer"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-405 mb-4 group-hover:bg-cyan-500/20 transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span className="font-display font-bold text-sm text-white block">Official S-H Channel</span>
                    <p className="text-[11px] text-slate-400 leading-normal mt-1.5 font-sans">
                      Subscribe to core announcements, physical booklet dispatch updates, and newly published reading curriculum checklists.
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-[#14B8A6] font-bold uppercase mt-4 block group-hover:underline">SUBSCRIBE TO CHANNEL &rarr;</span>
                </a>

              </div>

              {/* Founder direct contact box holding premium values */}
              <div className="p-4.5 rounded-xl border border-slate-850 bg-slate-900/60 text-xs text-slate-300 mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-[#0D9488]/10 text-[#14B8A6] border border-[#0D9488]/20">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white text-[11px] block leading-snug">Founder Direct Correspondence Line</span>
                    <span className="text-[10px] font-mono text-slate-500">Direct Message Support is Active</span>
                  </div>
                </div>
                
                <a 
                  href="https://wa.me/14708125814" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-slate-950 font-extrabold text-[10px] tracking-wider uppercase inline-block shrink-0 cursor-pointer transition-colors"
                >
                  +1 (470) 812-5814
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-24 bg-slate-950/20 border-t border-b border-slate-900" id="testimonials-block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#14B8A6] font-bold">
              VERIFIED SUCCESS STORIES
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-3" id="testimonials-heading">
              Validated Candidate Reviews
            </h2>
            <p className="text-xs text-slate-400 mt-2 font-sans">
              Authentic reports registered by software designers, fintech operators, and students globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="p-6.5 rounded-2xl border border-slate-850 bg-[#0d1626]/40 relative flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-[#14B8A6]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>

                  <p className="text-xs sm:text-[12.5px] text-slate-300 leading-relaxed italic mb-6 font-serif">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-850 mt-auto">
                  <div className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-extrabold text-[#14B8A6] font-mono shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <span className="block font-bold text-xs text-white">{testimonial.name}</span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">{testimonial.role} ({testimonial.location})</span>
                    <span className="text-[9px] font-mono font-bold text-[#14B8A6] mt-2.5 inline-block px-2 py-0.5 rounded-full bg-[#0D9488]/15 border border-[#0D9488]/25">
                      Focus: {testimonial.focus}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FINAL CORE BANNER CALL-TO-ACTION ================= */}
      <section className="relative py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="home-final-banner">
        
        <div className="relative glass-panel rounded-3xl p-10 md:p-14 border border-slate-850 bg-[#0d1626]/40 shadow-2xl overflow-hidden">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#0D9488]/8 blur-[70px] pointer-events-none" />

          {/* Badge indicator */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0D9488]/15 border border-[#0D9488]/25 text-[10px] font-mono font-extrabold text-[#14B8A6] mb-6 animate-pulse">
            <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
            <span>ADMISSIONS INTAKE ACTIVE</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-[1.12] mb-6" id="final-cta-headline">
            Ready to Transition Your Life <br/>
            From Survival to Thrive?
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 font-sans">
            Submit your candidate application to join the Supplemental Instruction LLC waiting list. Secure your initial calibration evaluation call immediately today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-sm mx-auto">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-[#0D9488] hover:brightness-110 text-slate-950 font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all w-full text-center cursor-pointer"
              id="final-cta-enroll-button"
            >
              Get Early Access
            </Link>
            
            <Link
              to="/about"
              className="px-8 py-4 rounded-xl border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-900 font-semibold text-xs tracking-wider uppercase transition-all w-full text-center cursor-pointer"
              id="final-cta-about-button"
            >
              Read Philosophy
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
