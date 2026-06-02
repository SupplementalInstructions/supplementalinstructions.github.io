import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Flame, 
  Users, 
  Award, 
  Zap, 
  CheckCircle, 
  FileCheck,
  Sparkles
} from "lucide-react";
import useSEO from "../hooks/useSEO";

export default function Features() {
  // Feature Tab selection state
  const [activeFeatureTab, setActiveFeatureTab] = useState<string>("book-programs");

  // Dynamic SEO indexing for features
  useSEO({
    title: activeFeatureTab === "book-programs"
      ? "Shipped Physical Workbooks & Books — Syllabi"
      : activeFeatureTab === "habit-tracking"
      ? "Interactive Habits Verification Simulator — Syllabi"
      : "Active Counselor Messenger circles — Syllabi",
    description: "Navigate our 3-tiered growth systems: custom-printed journals, real-time checklist tracking, and professional Peer Advisor feedback lines.",
  });

  // State for MOCK CAROUSEL/INTERACTION 1: Custom Physical Booklet cover chooser
  const [bookSelection, setBookSelection] = useState({
    theme: "Circadian sleep & macros journal",
    coverColor: "from-[#14B8A6] to-slate-950 border-[#14B8A6]/40",
    coverGlow: "rgba(20, 184, 166, 0.25)",
    selectedLevel: "Level 1: Foundation Sprints"
  });

  // State for MOCK CAROUSEL/INTERACTION 2: Live interactive habit checklist tracker
  const [habitsData, setHabitsData] = useState([
    { id: "h1", name: "Perform waked alignment breathwork", done: true, xp: 20 },
    { id: "h2", name: "Read 10 pages of Stoic literature", done: false, xp: 25 },
    { id: "h3", name: "Log daily budget ratios in spreadsheet", done: true, xp: 15 },
    { id: "h4", name: "15-minute present-moment stills", done: false, xp: 20 },
  ]);

  const toggleHabit = (id: string) => {
    setHabitsData(prev => prev.map(item => 
      item.id === id ? { ...item, done: !item.done } : item
    ));
  };
  
  const habitsCompleted = habitsData.filter(h => h.done).length;
  const habitsProgressPercent = Math.round((habitsCompleted / habitsData.length) * 100);

  // State for MOCK CAROUSEL/INTERACTION 3: Active Coaching Peer counselor chat simulation
  const [chatLog, setChatLog] = useState([
    { sender: "mentor", text: "Greetings, Candidate. I am Coach Ethos, your active Habit Architect. Are you maintaining consistency on your circadian sleep log loops today?", time: "10:14 AM" }
  ]);

  const sendSimulatedMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg = { sender: "user", text: textToSend, time: "Just Now" };
    setChatLog(prev => [...prev, userMsg]);

    // Simulate reactive responses
    setTimeout(() => {
      let mentorReplyText = "";
      if (textToSend.toLowerCase().includes("exhausted") || textToSend.toLowerCase().includes("tired")) {
        mentorReplyText = "[COACH ETHOS] Energetic dips are completely expected when adjusting circadian tempos. Do not attempt a multi-hour focus sprint. Instead, resolve your current task into a tiny 10-minute sprint. Open custom booklet Page 4, log one line. Action breeds confidence.";
      } else if (textToSend.toLowerCase().includes("ready") || textToSend.toLowerCase().includes("focused")) {
        mentorReplyText = "[COACH ETHOS] Outstanding alignment registered. Set dynamic screen boundaries now, open your physical workbook, and log your calibration score upon completion of this session. Complete momentum loop.";
      } else {
        mentorReplyText = "[COACH ETHOS] Received. Committing this metric sequence is critical. Ensure you log your checklist outcomes inside the official WhatsApp community group to get peer verification counters.";
      }

      setChatLog(prev => [...prev, {
        sender: "mentor",
        text: mentorReplyText,
        time: "Just Now"
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#060B13] text-slate-200 relative overflow-hidden" id="features-page-container">
      {/* Background organic glow overlays */}
      <div className="absolute top-[15%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#0D9488]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-indigo-500/3 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 text-left" id="features-grid-lay">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#14B8A6] font-bold">
            THE SYSTEM SYLLABI
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-3 mb-6" id="features-page-title">
            Our Growth Infrastructure
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto font-sans">
            Supplemental Instruction LLC (S-H) provides a unified physical-digital experience designed with complete fidelity to turn focus into an automated lifestyle.
          </p>
        </div>

        {/* ================= COMPONENT SWITCHER TAB BAR ================= */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="features-tabs-row">
          {[
            { id: "book-programs", name: "1. Shipped Books", icon: <BookOpen className="w-4 h-4" /> },
            { id: "habit-tracking", name: "2. Habits Simulator", icon: <Flame className="w-4 h-4" /> },
            { id: "coaching-mentorship", name: "3. Advisor Messenger", icon: <Users className="w-4 h-4" /> },
            { id: "points-rewards", name: "4. Accreditation Milestones", icon: <Award className="w-4 h-4" /> },
          ].map((tab) => {
            const isSelected = activeFeatureTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFeatureTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#0d1626] border-[#14B8A6] text-[#14B8A6] shadow-lg shadow-teal-950/20 font-bold"
                    : "bg-slate-950/30 border-slate-850 text-slate-400 hover:bg-[#0d1626]/50 hover:border-slate-800"
                }`}
                id={`feature-pill-button-${tab.id}`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* ================= ACTIVE TAB RENDERING PANEL CONTAINER ================= */}
        <div className="premium-card rounded-3xl bg-[#0c1524]/50 border border-slate-850/80 shadow-2xl p-6 sm:p-10 mb-20 text-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#14B8A6]/5 rounded-full blur-2xl pointer-events-none" />
          
          <AnimatePresence mode="wait">
            
            {/* TAB 1: SHIP PHYSICAL PROGRAMS */}
            {activeFeatureTab === "book-programs" && (
              <motion.div
                key="book-programs"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-4 text-[#14B8A6]">
                    <BookOpen className="w-5 h-5" />
                    <span className="font-mono text-xs tracking-wider uppercase font-bold">PHYSICAL HANDBOOKS</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
                    Beautifully Printed Study Booklets
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                    We ship bound, high-quality tactile track handbooks direct to your doorstep. Designed to act as an offline workstation shield, they require deliberate physical log entry to verify your daily biometrics and reading comments.
                  </p>
                  
                  <div className="space-y-4 mb-8 text-xs text-slate-400 font-sans leading-relaxed">
                    <div className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6] mt-1.5 shrink-0" />
                      <span><strong>Complete Screen Defiance Bounds:</strong> Physical logging bypasses endless phone notifications, reinforcing sensory focus memory.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6] mt-1.5 shrink-0" />
                      <span><strong>Calibration Intake Integration:</strong> Every shipped handbook maps directly to your custom growth parameters.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#14B8A6] mt-1.5 shrink-0" />
                      <span><strong>Premium Editorial layout:</strong> Elegant matte covers, curated spacing, and clean grids designed to look pristine on your desk.</span>
                    </div>
                  </div>

                  {/* Template choosing controls */}
                  <div className="p-4 bg-slate-950/60 border border-slate-850 rounded-2xl text-left">
                    <span className="block font-mono text-[9px] text-[#14B8A6] uppercase tracking-widest font-extrabold mb-3">CUSTOMIZE BOOK VISUALS:</span>
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => setBookSelection({
                          theme: "Circadian sleep & macros journal",
                          coverColor: "from-[#14B8A6] to-slate-950 border-[#14B8A6]/40",
                          coverGlow: "rgba(20, 184, 166, 0.25)",
                          selectedLevel: "Level 1: Foundation Sprints"
                        })}
                        className="p-3.5 bg-[#0c1524] border border-slate-850 text-[11px] font-bold rounded-xl text-left hover:bg-slate-900 text-slate-300 hover:border-[#14B8A6]/30 cursor-pointer transition-colors"
                      >
                        📊 Thrive Booklet
                      </button>
                      
                      <button 
                        onClick={() => setBookSelection({
                          theme: "Compound Financial Assets tracker",
                          coverColor: "from-[#D97706] to-slate-950 border-amber-500/40",
                          coverGlow: "rgba(217, 119, 6, 0.22)",
                          selectedLevel: "Level 2: Leveraged Budget Models"
                        })}
                        className="p-3.5 bg-[#0c1524] border border-slate-850 text-[11px] font-bold rounded-xl text-left hover:bg-slate-900 text-slate-300 hover:border-amber-500/30 cursor-pointer transition-colors"
                      >
                        💰 Budget Booklet
                      </button>
                    </div>
                  </div>
                </div>

                {/* Interactive Dynamic Cover Customizer graphic */}
                <div className="flex flex-col items-center justify-center p-8 bg-slate-900/40 rounded-2xl border border-slate-850 relative">
                  
                  {/* booklet mock canvas */}
                  <div 
                    className={`w-52 h-72 bg-gradient-to-br ${bookSelection.coverColor} rounded-2xl border p-6 flex flex-col justify-between shadow-2xl relative transform transition-transform duration-500 hover:rotate-1`}
                    style={{ boxShadow: `0 12px 30px ${bookSelection.coverGlow}` }}
                  >
                    {/* Spine shading */}
                    <div className="absolute top-0 bottom-0 left-0 w-3 bg-white/5 rounded-l" />

                    <div className="flex items-center justify-between text-[8px] font-mono text-white/50 pl-3">
                      <span>SUPP_INSTR.2026</span>
                      <span>PRINT_SYS_MEMBER</span>
                    </div>

                    <div className="flex flex-col pl-3 text-left">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-display font-extrabold text-xs text-white tracking-tight leading-snug uppercase">
                        {bookSelection.theme}
                      </h4>
                      <span className="font-mono text-[9px] text-[#14B8A6] font-bold mt-1.5 block">
                        {bookSelection.selectedLevel}
                      </span>
                    </div>

                    <div className="border-t border-white/10 pt-4 text-left pl-3 flex items-center justify-between text-[8px] font-mono text-white/45">
                      <span>DISPATCHED GLOBALLY</span>
                      <span>S-H ADM-ALPHA</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 mt-6 flex items-center gap-1.5 font-mono">
                    <FileCheck className="w-4 h-4 text-[#14B8A6]" />
                    <span>Real books printed and shipped upon waitlist qualification.</span>
                  </p>
                </div>
              </motion.div>
            )}

            {/* TAB 2: HABIT TRACKER INTERACTION */}
            {activeFeatureTab === "habit-tracking" && (
              <motion.div
                key="habit-tracking"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-4 text-[#14B8A6]">
                    <Flame className="w-5 h-5" />
                    <span className="font-mono text-xs tracking-wider uppercase font-bold">DIGITAL CALIBRATOR PLATFORM</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
                    Unified Habit Tracking Simulators
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                    Keep track of daily biometric checks. Check items consecutively on our clean dashboard portal to observe your progress indicators scale up.
                  </p>

                  <div className="space-y-4 text-xs text-slate-400 font-sans leading-relaxed mb-6">
                    <p>
                      <strong>Biometric mapping logs:</strong> Enter daily intervals of sleep hours, macro nutrient balances, and aerobic minutes to frame your monthly progress records.
                    </p>
                    <p>
                      <strong>Human peer feedback channels:</strong> Sync digital reports with your designated advisor inside WhatsApp groups to get accredited achievement badges.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-[#14B8A6]/20 bg-[#0D9488]/10 flex gap-3 text-xs leading-relaxed text-slate-300">
                    <CheckCircle className="w-5 h-5 text-[#14B8A6] shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">Consistency Simulator Armed:</strong> Toggle the sample checklist inputs on the console card to observe your calibration progress index respond!
                    </div>
                  </div>
                </div>

                {/* Habits tracking console card mock */}
                <div className="p-6 bg-slate-900/30 border border-slate-850 rounded-2xl relative text-left">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-850 pb-3">
                    <span className="font-mono text-[9px] text-[#14B8A6] font-bold uppercase tracking-wider">LIVE CALIBRATION STATS</span>
                    <span className="font-mono text-xs text-[#14B8A6] font-bold">Consolidated Levels: 4</span>
                  </div>

                  {/* Dashboard stats widget */}
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-850 mb-4">
                    <div className="flex justify-between items-center mb-1.5 text-xs text-slate-300">
                      <span>Calibration Progress Index</span>
                      <span className="font-bold text-[#14B8A6]">{habitsProgressPercent}%</span>
                    </div>
                    {/* Progress slider bar */}
                    <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-[#14B8A6] to-emerald-400 h-full transition-all duration-300" 
                        style={{ width: `${habitsProgressPercent}%` }}
                      />
                    </div>
                    <span className="block text-[9.5px] font-mono text-slate-500 mt-2 font-bold">
                      {habitsCompleted} of {habitsData.length} checkpoints registered
                    </span>
                  </div>

                  {/* Item selections */}
                  <div className="space-y-2">
                    {habitsData.map((h) => (
                      <button
                        key={h.id}
                        onClick={() => toggleHabit(h.id)}
                        className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left border cursor-pointer text-xs font-semibold select-none transition-all ${
                          h.done 
                            ? "bg-[#0D9488]/15 border-[#0D9488]/30 text-[#14B8A6]" 
                            : "bg-[#060B13]/60 border-slate-850 text-slate-400 hover:bg-slate-905"
                        }`}
                        id={`habit-feature-item-${h.id}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                            h.done ? "bg-[#14B8A6] text-slate-950" : "border border-slate-700"
                          }`}>
                            {h.done && <CheckCircle className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span className={h.done ? "line-through text-slate-500" : "text-slate-200"}>
                            {h.name}
                          </span>
                        </div>
                        <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded ${
                          h.done ? "bg-[#0D9488]/20 text-[#14B8A6]" : "bg-slate-900 text-slate-500"
                        }`}>
                          +{h.xp} XP
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: MOCK ADVISOR MESSENGER */}
            {activeFeatureTab === "coaching-mentorship" && (
              <motion.div
                key="coaching-mentorship"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-4 text-[#14B8A6]">
                    <Users className="w-5 h-5" />
                    <span className="font-mono text-xs tracking-wider uppercase font-bold">ADVISORY NETWORKS</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
                    Daily Calibration Advisors
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                    Never get lost trying to figure out routines. Connect directly with our certified peer focus mentors who evaluate your wellness checklists, suggest literature tracks, and suggest adjustments to print syllabus coordinates.
                  </p>

                  <div className="space-y-4 mb-8 text-xs text-slate-400 font-sans leading-relaxed">
                    <p>
                      <strong>Active biweekly alignment calls:</strong> Book diagnostic slots to inspect your focus ratios. Your assigned director updates your syllabus checklists program directly.
                    </p>
                    <p>
                      <strong>Small Candidate discussion circles:</strong> Discuss and parse books with small groups (4-6 builders) doing corresponding habit sittings.
                    </p>
                  </div>

                  <Link to="/coaching" className="px-5 py-3 rounded-lg border border-slate-800 bg-[#060B13] hover:bg-slate-900 text-slate-200 font-bold text-xs tracking-wide cursor-pointer transition-colors">
                    Search Advisors Directory
                  </Link>
                </div>

                {/* Direct Messenger Simulation Box */}
                <div className="p-4 bg-[#0a1120] rounded-2xl relative border border-slate-850 flex flex-col h-[320px] text-left">
                  
                  {/* Chat Header */}
                  <div className="flex items-center gap-3 border-b border-slate-850 pb-3 mb-3 shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#0D9488]/20 flex items-center justify-center text-xs font-bold font-mono text-[#14B8A6] border border-[#0D9488]/30">
                      CE
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white">Coach Ethos (Director)</span>
                      <span className="block text-[9px] font-mono text-[#14B8A6] font-bold">Online & Standing By</span>
                    </div>
                  </div>

                  {/* Chat dialog logs */}
                  <div className="grow overflow-y-auto space-y-3 p-1 text-xs" id="feature-chat-scrollable">
                    {chatLog.map((msg, index) => (
                      <div 
                        key={index}
                        className={`max-w-[85%] rounded-xl p-3 shadow-md ${
                          msg.sender === "mentor"
                            ? "bg-slate-900 border border-slate-850 text-slate-300 mr-auto rounded-tl-none"
                            : "bg-[#0D9488]/15 border border-[#0D9488]/30 text-[#14B8A6] ml-auto rounded-tr-none"
                        }`}
                      >
                        <p className="leading-relaxed text-[11px] font-sans">{msg.text}</p>
                        <span className="block text-right text-[8.5px] text-slate-500 mt-1 font-mono">{msg.time}</span>
                      </div>
                    ))}
                  </div>

                  {/* Send Triggers */}
                  <div className="pt-3 border-t border-slate-850 flex items-center justify-items-stretch gap-1.5 shrink-0 overflow-x-auto">
                    <button
                      onClick={() => sendSimulatedMessage("I feel exhausted and cannot log my active focus tasks today.")}
                      className="px-2.5 py-2 bg-slate-950 border border-slate-850 hover:border-slate-700 text-slate-300 text-[10px] font-mono font-semibold rounded-lg shrink-0 cursor-pointer transition-colors"
                    >
                      💡 "I'm exhausted..."
                    </button>
                    <button
                      onClick={() => sendSimulatedMessage("I am focused today! Send me calibration data parameters.")}
                      className="px-2.5 py-2 bg-slate-950 border border-slate-850 hover:border-slate-700 text-slate-300 text-[10px] font-mono font-semibold rounded-lg shrink-0 cursor-pointer transition-colors"
                    >
                      🚀 "I'm ready!"
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: MILESTONES & ACCREDITATION */}
            {activeFeatureTab === "points-rewards" && (
              <motion.div
                key="points-rewards"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div className="text-left">
                  <div className="flex items-center gap-2 mb-4 text-purple-400">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span className="font-mono text-xs tracking-wider uppercase font-bold">ACCREDITATION METRICS</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
                    Verified Milestones & Portfolios
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                    Every daily checklist routine completed compiles points into your secure platform candidate file. Overcoming core checkpoints unlocks verified visual achievements endorsing your development bounds.
                  </p>

                  <div className="space-y-4 mb-8 text-xs text-slate-400 font-sans leading-relaxed">
                    <p>
                      <strong>The Badge Portfolio:</strong> Overcome target benchmarks to unlock custom achievements: (1) Thrive Mode Starter, (2) Compound Reader, (3) Integration Master badges.
                    </p>
                    <p>
                      <strong>Vested Platform Credentials:</strong> Accumulate sufficient calibration checkpoints to claim printable certificates verifying your focus limits. Complete validation files safely.
                    </p>
                  </div>

                  <Link to="/rewards" className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:brightness-110 text-white font-extrabold text-xs tracking-wider uppercase inline-block cursor-pointer transition-all">
                    Explore Rewards Space
                  </Link>
                </div>

                {/* Achievements collectibles display */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-900/40 rounded-2xl border border-slate-850 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#0D9488]/15 border border-[#0D9488]/25 flex items-center justify-center mb-3 text-[#14B8A6]">
                      <Flame className="w-6 h-6" />
                    </div>
                    <span className="block font-display font-bold text-xs text-white">Thrive Starter</span>
                    <span className="block font-mono text-[9px] text-[#14B8A6] font-extrabold mt-1.5 uppercase tracking-wide">VERIFIED</span>
                  </div>

                  <div className="p-4 bg-slate-900/40 rounded-2xl border border-slate-850 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center mb-3 text-cyan-405">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <span className="block font-display font-bold text-xs text-white">Sovereign Reader</span>
                    <span className="block font-mono text-[9px] text-cyan-400 font-extrabold mt-1.5 uppercase tracking-wide">VERIFIED</span>
                  </div>

                  <div className="p-4 bg-slate-900/30 rounded-2xl border border-slate-850 text-center flex flex-col items-center justify-center opacity-45">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-850 flex items-center justify-center mb-3 text-slate-500">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="block font-display font-bold text-xs text-slate-350">Integration Pro</span>
                    <span className="block font-mono text-[9px] text-slate-500 mt-1.5 uppercase tracking-wide">LOCKED</span>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
