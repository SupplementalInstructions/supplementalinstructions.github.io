import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Activity, 
  TrendingUp, 
  Target, 
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
  ArrowBigRightDash,
  MessageSquare
} from "lucide-react";
import { 
  INITIAL_FOCUS_AREAS, 
  MOCK_TESTIMONIALS,
  FocusArea
} from "../types";

export default function Home() {
  // Let the user interact with live laboratory checklist onHero to see progress increase!
  const [labTasks, setLabTasks] = useState([
    { id: 1, text: "Perform 12-min high intense cardio", done: true, points: 15, category: "Fitness" },
    { id: 2, text: "Compounding value calculators checked", done: false, points: 25, category: "Finance" },
    { id: 3, text: "Active deep focus sprint: 25 mins", done: true, points: 20, category: "Improvement" },
    { id: 4, text: "Stoic gratitude reflection logged", done: false, points: 15, category: "Spiritual" }
  ]);

  const toggleTask = (id: number) => {
    setLabTasks(prev => prev.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const doneTasks = labTasks.filter(t => t.done).length;
  // Calculate simulated XP based on done tasks
  const earnedXP = labTasks.reduce((sum, t) => sum + (t.done ? t.points : 0), 0);
  const totalXPAvailable = labTasks.reduce((sum, t) => sum + t.points, 0);
  const progressPercent = Math.round((earnedXP / totalXPAvailable) * 100);

  // Active Highlight State for Focus Areas Demo
  const [selectedFocus, setSelectedFocus] = useState<FocusArea>(INITIAL_FOCUS_AREAS[2]);

  // Container motion presets
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Helper mapping string to Lucide icon
  const getFocusIcon = (iconName: string) => {
    switch (iconName) {
      case "Activity": return <Activity className="w-6 h-6 text-[#2ECC71]" />;
      case "TrendingUp": return <TrendingUp className="w-6 h-6 text-[#00D1FF]" />;
      case "Target": return <Target className="w-6 h-6 text-amber-500" />;
      case "Compass": return <Compass className="w-6 h-6 text-purple-500" />;
      default: return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#08111F] text-white overflow-hidden relative" id="home-page-container">
      
      {/* BACKGROUND EFFECTS */}
      {/* Glowing atmospheric lights */}
      <div className="absolute top-[10%] left-[5%] w-[35rem] h-[35rem] rounded-full bg-[#00D1FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[5%] w-[40rem] h-[40rem] rounded-full bg-[#2ECC71]/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[15%] w-[30rem] h-[30rem] rounded-full bg-purple-500/3 blur-[120px] pointer-events-none" />
      
      {/* Smooth top-lit ambient glow overlay */}
      <div className="absolute inset-x-0 top-0 h-[100vh] bg-grid-pattern opacity-80 pointer-events-none" />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 md:pt-20 lg:pt-32 pb-16 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10" id="hero-segment">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live alert tag */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00D1FF]/10 border border-[#00D1FF]/20 text-xs font-mono font-medium text-[#00D1FF] mb-6"
              id="hero-banner-tag"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>THE PERSONAL GROWTH LABORATORY ENGINE</span>
            </motion.div>

            {/* Dynamic display typography heading */}
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] mb-6"
              id="hero-headline"
            >
              Your Personal <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] via-[#2ECC71] to-[#00D1FF] bg-300% animate-pulse">
                Growth Laboratory
              </span>
            </motion.h1>

            {/* Subheading matching requested copy */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-[#94A3B8] leading-relaxed max-w-2xl mb-10"
              id="hero-subheadline"
            >
              Build discipline, habits, mindset, fitness, financial intelligence, and spiritual growth through structured systems designed for long-term transformation.
            </motion.p>

            {/* Interactive Call to Action buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
              id="hero-ctas"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#00D1FF] to-[#2ECC71] text-[#0D1B2A] font-bold tracking-wide rounded-xl text-center shadow-lg hover:shadow-[#00D1FF]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                id="hero-primary-cta"
              >
                Get Early Access
              </Link>
              
              <a
                href="#manifesto"
                className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 text-[#F8FAFC] font-semibold tracking-wide text-center bg-white/5 hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
                id="hero-secondary-cta"
              >
                <span>See How It Works</span>
                <ArrowRight className="w-4 h-4 text-[#00D1FF] group-hover:translate-x-1.5 transition-transform" />
              </a>
            </motion.div>

            {/* Lab stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 sm:gap-10 mt-12 pt-8 border-t border-white/5 w-full text-left"
              id="hero-stats"
            >
              <div>
                <span className="block font-display font-bold text-2xl text-white">94%</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8]">Goal Overachieve</span>
              </div>
              <div>
                <span className="block font-display font-bold text-2xl text-white">4.9/5</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8]">Advisor Rating</span>
              </div>
              <div>
                <span className="block font-display font-bold text-2xl text-[#2ECC71]">1.2M+ XP</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#94A3B8]">Earned Globally</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column Interactive Floating Widget */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            className="lg:col-span-5 relative"
            id="hero-interactive-laboratory-panel"
          >
            {/* The Floating UI Laboratory Card */}
            <div className="relative glass-panel rounded-2xl p-6 border border-white/10 shadow-2xl relative overflow-hidden bg-[#0D1B2A]/50 glow-cyan-sm">
              
              {/* Card top flare */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent" />
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#2ECC71]/10 border border-[#2ECC71]/20">
                    <Flame className="w-4 h-4 text-[#2ECC71]" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-white">Your Growth Catalyst</h3>
                    <p className="font-mono text-[10px] text-[#94A3B8]">Workspace Sandbox</p>
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/5 text-white flex items-center gap-1 border border-white/10">
                  ⚡ <strong className="text-white">{earnedXP} XP</strong>
                </span>
              </div>

              {/* Lab master progress tracking display */}
              <div className="mb-6 p-4 rounded-xl bg-black/30 border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-[#94A3B8]">Laboratory Efficiency</span>
                  <span className="font-mono text-xs text-[#00D1FF] font-bold">{progressPercent}% Completed</span>
                </div>
                {/* Visual Progress bar */}
                <div className="w-full bg-[#08111F] rounded-full h-2.5 overflow-hidden border border-white/5">
                  <motion.div 
                    className="bg-gradient-to-r from-[#00D1FF] to-[#2ECC71] h-full" 
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ ease: "easeOut", duration: 0.6 }}
                  />
                </div>
                <div className="flex justify-between items-center mt-2.5 text-[10px] font-mono text-[#94A3B8]">
                  <span>{doneTasks} of {labTasks.length} active trials logged</span>
                  <span className="text-emerald-400">Level 4 Candidate</span>
                </div>
              </div>

              {/* The Interactive Interactive Habit Checklist */}
              <div className="space-y-3 mb-6">
                <span className="block font-mono text-[10px] text-white/50 uppercase tracking-widest text-[#94A3B8] font-bold">
                  TEST DRIVE DAILY LAB TASKS (CLICK TO TOGGLE):
                </span>
                
                {labTasks.map((task) => (
                  <button
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-300 border cursor-pointer ${
                      task.done 
                        ? "bg-[#2ECC71]/5 border-[#2ECC71]/30 text-white" 
                        : "bg-white/5 border-white/5 hover:bg-white/10 text-[#94A3B8]"
                    }`}
                    id={`hero-task-toggle-${task.id}`}
                  >
                    <div className="flex items-center gap-2.5 pr-2">
                      <div className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                        task.done ? "bg-[#2ECC71] text-[#0D1B2A]" : "border border-[#94A3B8]/30"
                      }`}>
                        {task.done && <CheckCircle className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-medium leading-tight">{task.text}</span>
                    </div>
                    
                    <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded shrink-0 ${
                      task.done ? "bg-[#2ECC71]/20 text-[#2ECC71]" : "bg-white/5 text-[#94A3B8]"
                    }`}>
                      +{task.points} XP
                    </span>
                  </button>
                ))}
              </div>

              {/* Bottom advice notification */}
              <div className="flex items-center gap-2 text-[11px] text-[#94A3B8] stroke-1">
                <ShieldCheck className="w-4 h-4 text-[#2ECC71]" />
                <span>Interact with tasks to see simulated gamified engine level calibration!</span>
              </div>
            </div>

            {/* Glowing accents behind laboratory */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D1FF] to-[#2ECC71] rounded-2xl blur opacity-15" />
          </motion.div>
        </div>
      </section>

      {/* ================= PLATFORM OVERVIEW & MANIFESTO ================= */}
      <section className="relative py-20 bg-[#050B14] border-y border-white/5" id="manifesto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D1FF] font-bold">
              PLATFORM OVERVIEW
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 mb-6" id="overview-header">
              The Technology of Human Acceleration
            </h2>
            <p className="text-[#94A3B8] leading-relaxed">
              Most self-help systems fail because they rely solely on fleeting motivation. At <span className="text-white font-semibold">Supplemental Instruction</span>, we construct a calibrated personal engine combining professional accountability, science-backed biometric systems, and smart daily triggers to turn growth from an aspiration into an automated habit.
            </p>
          </div>

          {/* Key foundational components of Supplemental Instruction */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-white/5 bg-[#0D1B2A]/40 hover:bg-[#0D1B2A]/60 hover:border-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center mb-5 border border-[#00D1FF]/20">
                <BookOpen className="w-5 h-5 text-[#00D1FF]" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">Systems Over Hype</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Unlock structured growth sequences customized to your exact neurotype. We reject shallow inspiration; we provide formulas, routines, and tracker tools.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/5 bg-[#0D1B2A]/40 hover:bg-[#0D1B2A]/60 hover:border-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#2ECC71]/10 flex items-center justify-center mb-5 border border-[#2ECC71]/20">
                <Users className="w-5 h-5 text-[#2ECC71]" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">Certified Guidance</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Connect directly with certified performance architects, expert personal bankers, health scientists, and stoic mentors who hold you to extreme standards.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/5 bg-[#0D1B2A]/40 hover:bg-[#0D1B2A]/60 hover:border-white/10 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-5 border border-purple-500/20">
                <Award className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">Gamified Accountability</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Earn actual XP, unlock collectible achievements, build daily streak badges, and claim verified blockchain NFT credentials that endorse your growth level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILED FOCUS AREAS ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left" id="focus-disciplines-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Copy and selection triggers */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#2ECC71] font-bold">
              THE INTELLECTUAL DISCIPLINES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 mb-6" id="disciplines-title">
              What Are You Eager to Calibrate Today?
            </h2>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-8">
              Supplemental Instruction covers the four primary pillars of high-potential existence. Select an intelligence vector below to observe your laboratory tracking roadmap:
            </p>

            {/* Selection Buttons list */}
            <div className="space-y-3.5" id="focus-selectors-menu">
              {INITIAL_FOCUS_AREAS.map((focus) => {
                const isActive = selectedFocus.id === focus.id;
                return (
                  <button
                    key={focus.id}
                    onClick={() => setSelectedFocus(focus)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? "bg-[#0D1B2A] border-[#00D1FF]/40 text-white glow-cyan-sm" 
                        : "bg-white/[0.02] border-white/5 hover:bg-white/5 text-[#94A3B8]"
                    }`}
                    id={`focus-selector-button-${focus.id}`}
                  >
                    <div className="p-2.5 rounded-lg bg-black/40">
                      {getFocusIcon(focus.iconName)}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-white">{focus.title}</h4>
                      <p className="font-mono text-[10px] text-[#94A3B8]">{focus.metric}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Large Dynamic Interactive Mockup Card */}
          <div className="lg:col-span-7" id="disciplines-interactive-viewer">
            <div className="relative glass-panel rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-b from-[#0D1B2A]/70 to-[#050B14]">
              
              {/* Dynamic Accent Glow */}
              <div 
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-15 transition-all duration-700"
                style={{ backgroundColor: selectedFocus.accentColor }}
              />

              <div className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                    {getFocusIcon(selectedFocus.iconName)}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] tracking-widest text-[#00D1FF] uppercase font-bold">FOCUS ROADMAP</span>
                    <h3 className="font-display font-bold text-2xl text-white">{selectedFocus.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {selectedFocus.longDescription}
                </p>

                {/* Simulated Program Syllabus Checklist */}
                <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-4 mb-6 text-xs">
                  <span className="block font-mono text-[10px] tracking-wide text-white uppercase font-semibold">
                    PREVIEW CURRICULUM SEQUENCES:
                  </span>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-[10px] shrink-0 mt-0.5">01</div>
                    <div>
                      <span className="font-semibold text-white block">Base System Foundation Level</span>
                      <p className="text-[11px] text-[#94A3B8] mt-0.5">Biometric assessments, behavioral diagnosis blueprints, and baseline streak triggers.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-[10px] shrink-0 mt-0.5">02</div>
                    <div>
                      <span className="font-semibold text-white block">Active Daily Execution Mechanics</span>
                      <p className="text-[11px] text-[#94A3B8] mt-0.5">Coaching accountability sessions, weekly milestone reviews, and digital distraction blocks.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-mono text-[10px] shrink-0 mt-0.5">03</div>
                    <div>
                      <span className="font-semibold text-white block">Vested Credential Validation</span>
                      <p className="text-[11px] text-[#94A3B8] mt-0.5">Unlock collectible badges, achieve verified NFT awards, and access advanced peer networks.</p>
                    </div>
                  </div>
                </div>

                {/* Metric overview */}
                <div className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-lg text-xs leading-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2ECC71] animate-pulse" />
                    <span className="text-[#94A3B8]">Est. Growth Efficiency: <strong>{selectedFocus.completionRate}% Avg Score</strong></span>
                  </div>
                  
                  <Link 
                    to="/features" 
                    className="text-[#00D1FF] hover:underline font-semibold flex items-center gap-1.5"
                    id="disciplines-learn-more"
                  >
                    <span>View Feature Mockups</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= KEY SYSTEMS FEATURE PREVIEW ================= */}
      <section className="relative py-24 bg-[#050B14] border-t border-white/5" id="features-highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D1FF] font-bold">
              SYSTEM MODULE CARDS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3" id="key-systems-heading">
              Our Core Personal Transformation Pillars
            </h2>
            <p className="text-sm text-[#94A3B8] mt-4">
              Explore the premium services prepared for candidate members. Click on any section below or move to the Laboratory page for interactive mockups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Cards for key features */}
            <div className="glass-panel p-6 rounded-xl border border-white/5 relative group hover:-translate-y-1 hover:border-[#00D1FF]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 font-mono text-[11px] text-white/20">01</div>
              <div className="w-12 h-12 rounded-lg bg-[#00D1FF]/10 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-[#00D1FF]" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">Book Programs</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Step-by-step physical booklets and digital programs containing interactive trackers, calendar logs, and habit guides shipped to your home.
              </p>
              <Link to="/features" className="text-xs text-[#00D1FF] font-semibold mt-4 inline-flex items-center gap-1 group-hover:underline">
                Explore Syllabi <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-white/5 relative group hover:-translate-y-1 hover:border-[#2ECC71]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 font-mono text-[11px] text-white/20">02</div>
              <div className="w-12 h-12 rounded-lg bg-[#2ECC71]/10 flex items-center justify-center mb-6">
                <Flame className="w-6 h-6 text-[#2ECC71]" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">Habit Tracking</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Log diagnostic checklists, active sprints, and nutritional logs. Gamified with chain streak multipliers that penalize failures severely.
              </p>
              <Link to="/features" className="text-xs text-[#2ECC71] font-semibold mt-4 inline-flex items-center gap-1 group-hover:underline">
                Try Simulator <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-white/5 relative group hover:-translate-y-1 hover:border-amber-500/30 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 font-mono text-[11px] text-white/20">03</div>
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">Coaching & Guidance</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Gain direct real-time access to fully certified advisors across fitness, investing, cognitive focus, and stoicism fields via peer rooms.
              </p>
              <Link to="/coaching" className="text-xs text-amber-500 font-semibold mt-4 inline-flex items-center gap-1 group-hover:underline">
                Find Your Coach <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="glass-panel p-6 rounded-xl border border-white/5 relative group hover:-translate-y-1 hover:border-purple-500/30 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 font-mono text-[11px] text-white/20">04</div>
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">Rewards System</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Collect verifiable achievement levels, secure physical laboratory pins, and claim decentralized Web3 crypto certificates of completion.
              </p>
              <Link to="/rewards" className="text-xs text-purple-400 font-semibold mt-4 inline-flex items-center gap-1 group-hover:underline">
                Observe Badges <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3-STEP VISUAL SYSTEM FLOW ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left" id="flow-timeline">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-[#2ECC71] font-bold">
            THE SYSTEM PROCESS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3" id="how-it-works-heading">
            How The Laboratory Calibrates Growth
          </h2>
          <p className="text-xs text-[#94A3B8] mt-2 mb-8">
            Three scientific steps that transition your aspirations into long-term discipline.
          </p>
        </div>

        {/* Responsive Horizontal / Vertical Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          
          {/* Connector Line overlay for large displays */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-[#00D1FF]/40 via-[#2ECC71]/40 to-[#00D1FF]/40 -translate-y-12 z-0" />

          {/* Step 1 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
            <div className="w-14 h-14 rounded-full bg-[#00D1FF] text-black font-display font-extrabold text-xl flex items-center justify-center mb-6 outline outline-8 outline-[#00D1FF]/10 shadow-lg glow-cyan-sm shadow-[#00D1FF]/20 shrink-0">
              01
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-3">Choose a Focus Area</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Identify your primary development vulnerability — physical, investing, cognitive, or spiritual. Calibrate active starting parameters and custom biometric benchmarks.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
            <div className="w-14 h-14 rounded-full bg-[#2ECC71] text-black font-display font-extrabold text-xl flex items-center justify-center mb-6 outline outline-8 outline-[#2ECC71]/10 shadow-lg glow-green shadow-[#2ECC71]/20 shrink-0">
              02
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-3">Build Daily Habits</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Activate program pathways, log tasks interactive grids, chat with certified coaching buddies, and accumulate level multipliers by executing consecutive loops.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
            <div className="w-14 h-14 rounded-full bg-purple-500 text-black font-display font-extrabold text-xl flex items-center justify-center mb-6 outline outline-8 outline-purple-500/10 shadow-lg glow-cyan-sm shadow-purple-500/20 shrink-0">
              03
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-3">Track & Grow</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Assess progress on scientific dashboards, harvest XP bonuses, claim verified NFT diplomas, and unlock elite professional networking channels with fellow developers.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SOCIAL ECOSYSTEM & COMMUNITY INTEGRATION ================= */}
      <section className="relative py-24 bg-[#08111F]" id="social-community-ecosystem">
        {/* Soft atmospheric gradient glows inside the section */}
        <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#2ECC71]/4 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#00D1FF]/4 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#2ECC71] font-bold">
              THE SOCIAL ECOSYSTEM
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-3" id="community-main-title">
              Not Just Training — A Living Growth Movement
            </h2>
            <p className="text-sm text-[#94A3B8] mt-4 leading-relaxed">
              Most habits collapse in isolation. Supplemental Instruction solves this by binding you into active, high-expectation peer rooms on WhatsApp, Discord, and Telegram where daily progress is non-negotiable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            
            {/* Left: Interactive WhatsApp Quick Access & Group Preview (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col justify-between glass-panel rounded-2xl p-6 md:p-8 border border-white/10 bg-gradient-to-b from-[#0D1B2A]/70 to-[#08111F] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>WHATSAPP INTENSITY DESK ACTIVE</span>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-wider text-[#00D1FF] uppercase font-bold">ACTIVE COMMUNITY CHAMBER</span>
                <h3 className="font-display font-bold text-2xl text-white mt-1.5 mb-3">Our Dedicated WhatsApp Cohorts</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                  Get premium, direct access to active WhatsApp groups where certified mentors and peers monitor, review, and double-check daily biometrics, financial indicators, and focus sprints.
                </p>

                {/* Simulated WhatsApp Chat Room Preview */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3 mb-6 font-sans">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#2ECC71]/20 border border-[#2ECC71]/30 flex items-center justify-center font-mono text-xs text-[#2ECC71] font-bold shrink-0 mt-0.5">
                      WA
                    </div>
                    <div className="text-left text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white">Supplemental Instruction Group 04</span>
                        <span className="text-[10px] text-white/40">08:14 AM</span>
                      </div>
                      <p className="text-[#94A3B8] mt-1 leading-relaxed bg-[#08111F]/60 p-2.5 rounded-lg border border-white/5">
                        <strong className="text-[#2ECC71]">Coach Marcus:</strong> Morning cohort. Let's record focus sprint metrics today. Remeber, the streak multiplier resets in 4 hours. No candidates left behind.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center font-mono text-xs text-[#00D1FF] font-bold shrink-0 mt-0.5">
                      DK
                    </div>
                    <div className="text-left text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-white">David K. [Nigeria Coordinator]</span>
                        <span className="text-[10px] text-white/40">08:15 AM</span>
                      </div>
                      <p className="text-[#94A3B8] mt-1 leading-relaxed bg-[#08111F]/60 p-2.5 rounded-lg border border-white/5">
                        Logged 25-min high intense cardio loop and compiled my stoic reading checklist! Current streak: 24 Days. Multiplier active at 1.8x.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glowing CTA for WhatsApp */}
              <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left text-xs text-[#94A3B8]">
                  <span>Ready to join? Active support is online 24/7.</span>
                  <strong className="block text-white mt-1">Get instant feedback loops inside seconds.</strong>
                </div>
                
                <a 
                  href="https://wa.me/254700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#2ECC71] hover:bg-[#2ECC71]/90 hover:scale-[1.02] active:scale-[0.98] text-[#08111F] font-extrabold tracking-wide rounded-xl flex items-center justify-center gap-2 transition-all self-stretch sm:self-auto shadow-lg shadow-[#2ECC71]/20 cursor-pointer"
                  id="community-whatsapp-cta"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Join WhatsApp Community</span>
                </a>
              </div>
            </div>

            {/* Right: Community Statistics, Activity Visuals & Badges (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between glass-panel rounded-2xl p-6 md:p-8 border border-white/10 bg-gradient-to-b from-[#0D1B2A]/70 to-[#08111F]">
              <div>
                <span className="font-mono text-[10px] tracking-wider text-[#2ECC71] uppercase font-bold">GROWTH DASHBOARD TELEMETRY</span>
                <h3 className="font-display font-bold text-2xl text-white mt-1.5 mb-4">Ecosystem Milestones</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                  Experience true accountability. Members from Nairobi to London log metric completions validated by blockchain signatures.
                </p>

                {/* Stat Cards Grid Column */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between">
                    <span className="text-xs text-[#94A3B8] font-medium">Verified Active Members</span>
                    <span className="font-display font-extrabold text-[#00D1FF] text-base">4,821+ Builders</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between">
                    <span className="text-xs text-[#94A3B8] font-medium">Daily Habits Logged</span>
                    <span className="font-display font-extrabold text-[#2ECC71] text-base">94% Consistency</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between">
                    <span className="text-xs text-[#94A3B8] font-medium">Coaching Sprints Finished</span>
                    <span className="font-display font-extrabold text-amber-500 text-base">12,450 Cycles</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between">
                    <span className="text-xs text-[#94A3B8] font-medium">Global Regions Engaged</span>
                    <span className="font-display font-extrabold text-purple-400 text-base">45+ Countries</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-left">
                <span className="block font-mono text-[9px] text-[#94A3B8]/60 uppercase">MEMBER ACCOUNTABILITY RATING</span>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <div className="flex gap-0.5 text-amber-400 text-xs">★ ★ ★ ★ ★</div>
                  <span className="text-xs font-semibold text-white">4.9/5 Certified Review Scores</span>
                </div>
              </div>
            </div>

          </div>

          {/* Social Icons Interactive Strip Footer of Ecosystem */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#00D1FF] border border-white/10 shrink-0">
                <Users className="w-5 h-5 text-[#00D1FF]" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-sm text-white">Follow Supplemental Instruction Everywhere</h4>
                <p className="text-[11px] text-[#94A3B8]">Join active discussions and track daily content vectors across channels.</p>
              </div>
            </div>

            {/* Glowing Social Buttons Strip */}
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-[#0D1B2A] hover:bg-[#00D1FF]/10 text-xs font-semibold rounded-lg border border-white/10 hover:border-[#00D1FF]/40 hover:text-[#00D1FF] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>X / Twitter</span>
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-[#0D1B2A] hover:bg-violet-500/10 text-xs font-semibold rounded-lg border border-white/10 hover:border-violet-500/40 hover:text-violet-400 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Discord</span>
              </a>
              <a 
                href="https://telegram.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-[#0D1B2A] hover:bg-sky-500/10 text-xs font-semibold rounded-lg border border-white/10 hover:border-sky-500/40 hover:text-sky-400 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Telegram</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-[#0D1B2A] hover:bg-pink-500/10 text-xs font-semibold rounded-lg border border-white/10 hover:border-pink-500/40 hover:text-pink-400 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-24 bg-[#050B14] border-t border-white/5" id="testimonials-block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D1FF] font-bold">
              VERIFIED MEMBERS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3" id="testimonials-heading">
              Validated Transformed Candidates
            </h2>
            <p className="text-xs text-[#94A3B8] mt-2">
              Discover feedback loops recorded by actual developers, founders, and students globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="glass-panel p-6 rounded-2xl border border-white/5 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-4 text-[#00D1FF]">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>

                  <p className="text-xs text-[#A1B0CB] leading-relaxed italic mb-6">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-white/5 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D1FF] to-[#2ECC71] flex items-center justify-center text-xs font-bold text-black font-mono shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <span className="block font-semibold text-xs text-white">{testimonial.name}</span>
                    <span className="block text-[10px] text-[#94A3B8]">{testimonial.role}</span>
                    <span className="text-[9px] font-mono font-medium text-[#2ECC71] mt-0.5 inline-block px-1.5 py-0.5 rounded bg-[#2ECC71]/10">
                      Focus: {testimonial.focus}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FINAL LAB CALL-TO-ACTION ================= */}
      <section className="relative py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" id="home-final-banner">
        
        <div className="relative glass-panel rounded-2xl p-10 md:p-16 border border-white/10 overflow-hidden bg-gradient-to-b from-[#0D1B2A]/50 to-[#050B14]">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#00D1FF]/5 blur-[80px] pointer-events-none" />

          {/* Badge indicator */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20 text-[11px] font-mono font-medium text-[#2ECC71] mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>ENROLLMENT QUEUE NOW IN OPERATION</span>
          </div>

          <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight leading-[1.12] mb-6" id="final-cta-headline">
            Ready to Accelerate Your <br/>
            Personal Growth Blueprint?
          </h2>

          <p className="text-sm text-[#94A3B8] leading-relaxed max-w-2xl mx-auto mb-10">
            Submit your application to the waitlist queue of Supplemental Instruction and lock in Level 1 candidate credentials. The next intake slot is allocating shortly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#00D1FF] to-[#2ECC71] text-black font-extrabold tracking-wide rounded-xl shadow-lg hover:shadow-[#00D1FF]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto"
              id="final-cta-enroll-button"
            >
              Sign Up For Early Access
            </Link>
            
            <Link
              to="/about"
              className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 text-[#F8FAFC] font-semibold bg-white/5 hover:bg-white/10 transition-all w-full sm:w-auto"
              id="final-cta-about-button"
            >
              Read Our Manifesto
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
