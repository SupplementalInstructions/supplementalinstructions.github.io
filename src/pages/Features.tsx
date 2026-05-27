import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Flame, 
  Users, 
  MessageSquare, 
  Award, 
  Cpu, 
  ShieldAlert, 
  Zap, 
  CheckCircle, 
  Compass,
  FileCheck,
  Send
} from "lucide-react";

export default function Features() {
  // Feature Tab selection state
  const [activeFeatureTab, setActiveFeatureTab] = useState<string>("book-programs");

  // State for MOCK CAROUSEL/INTERACTION 1: Custom Physical Booklet customizer
  const [bookSelection, setBookSelection] = useState({
    theme: "Self-Improvement Focus Tracker",
    coverColor: "from-[#0D1B2A] to-blue-900 border-[#00D1FF]/50",
    coverGlow: "rgba(0, 209, 255, 0.4)",
    selectedLevel: "Level 1 (Foundational Sprints)"
  });

  // State for MOCK CAROUSEL/INTERACTION 2: Live interactive Habit tracker inside Features page
  const [habitsData, setHabitsData] = useState([
    { id: "h1", name: "Read 10 pages of Stoic literature", done: false, xp: 20 },
    { id: "h2", name: "Configure $10 recurring asset savings index", done: false, xp: 25 },
    { id: "h3", name: "Log biometrics & meal macros", done: false, xp: 15 },
    { id: "h4", name: "Complete 15-min alignment meditation", done: false, xp: 20 },
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
    { sender: "mentor", text: "Greetings, Candidate. I am Coach Ethos, your active Habit Architect. What is holding you back today?", time: "10:14 AM" }
  ]);
  const [userReplyInput, setUserReplyInput] = useState("");

  const sendSimulatedMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg = { sender: "user", text: textToSend, time: "Just Now" };
    setChatLog(prev => [...prev, userMsg]);
    setUserReplyInput("");

    // Simulate reactive bot answers
    setTimeout(() => {
      let mentorReplyText = "";
      if (textToSend.toLowerCase().includes("exhausted") || textToSend.toLowerCase().includes("tired")) {
        mentorReplyText = "[COACH ARCHITECT] Exertion fluctuations are scientifically predictable. Reduce your target task into a micro-sprint. Set a timer for is just 10 minutes, and write just one line. Trigger the momentum loop.";
      } else if (textToSend.toLowerCase().includes("focus") || textToSend.toLowerCase().includes("ready")) {
        mentorReplyText = "[COACH ARCHITECT] Tremendous mindset parameters registered! Calibrate your active workstation, block distracting tabs immediately, and earn your +20 XP. Let's initiate flow.";
      } else {
        mentorReplyText = "[COACH ARCHITECT] Recorded. Maintain systematic consistency. Your streak counts are vested when you log this block on your active dashboard. Let us compound today.";
      }

      setChatLog(prev => [...prev, {
        sender: "mentor",
        text: mentorReplyText,
        time: "Just Now"
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#08111F] text-[#F8FAFC] relative overflow-hidden" id="features-page-container">
      {/* Background glow structures */}
      <div className="absolute top-[15%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#00D1FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-[#2ECC71]/3 blur-[140px] pointer-events-none" />
      {/* Smooth top-lit ambient glow overlay */}
      <div className="absolute inset-x-0 top-0 h-[100vh] bg-grid-pattern opacity-80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 text-left" id="features-grid-lay">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#2ECC71] font-bold">
            THE SYSTEM FEATURES
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-3 mb-6" id="features-page-title">
            The Personal Growth Infrastructure
          </h1>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Supplemental Instruction is not just a digital catalog; it is an integrated physical-digital system designed with complete fidelity to turn focus into an automated lifestyle.
          </p>
        </div>

        {/* ================= INTERACTIVE COMPONENT SWITCHER TAB BAR ================= */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16" id="features-tabs-row">
          {[
            { id: "book-programs", name: "1. Book Programs", icon: <BookOpen className="w-4 h-4" /> },
            { id: "habit-tracking", name: "2. Habit Tracking", icon: <Flame className="w-4 h-4" /> },
            { id: "coaching-mentorship", name: "3. Coaching System", icon: <Users className="w-4 h-4" /> },
            { id: "points-rewards", name: "4. Rewards & NFTs", icon: <Award className="w-4 h-4" /> },
            { id: "web3-integrations", name: "5. Web3 Future teaser", icon: <Cpu className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFeatureTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border font-semibold text-xs transition-all duration-300 cursor-pointer ${
                activeFeatureTab === tab.id
                  ? "bg-[#0D1B2A] border-[#00D1FF] text-[#00D1FF] glow-cyan-sm shadow-[#00D1FF]/10 text-shadow-glow"
                  : "bg-white/[0.02] border-white/5 hover:bg-white/5 text-[#94A3B8]"
              }`}
              id={`feature-pill-button-${tab.id}`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* ================= ACTIVE TAB RENDERING PANEL CONTAINER ================= */}
        <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-b from-[#0D1B2A]/40 to-[#050B14] p-6 sm:p-10 mb-20">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: BOOK PROGRAMS */}
            {activeFeatureTab === "book-programs" && (
              <motion.div
                key="book-programs"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 text-[#00D1FF]">
                    <BookOpen className="w-5 h-5" />
                    <span className="font-mono text-xs tracking-wider uppercase font-bold">PHYSICAL LAB COMPONENT</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                    Shipped Scientific Book Programs
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                    We ship beautifully bound, high-quality physical notebooks and daily track guides direct to your home. They are designed as standard labs: each book maps to one habit-focus (e.g., Compound finance or cardio biometrics).
                  </p>
                  
                  <div className="space-y-4 mb-8 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00D1FF] mt-1.5" />
                      <span><strong>Rigid accountability blocks:</strong> Shipped pages force paper-logging loops, bypassing digital distractions.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00D1FF] mt-1.5" />
                      <span><strong>Monthly intake calibration:</strong> Each book includes custom QR elements feeding your digital XP profile.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00D1FF] mt-1.5" />
                      <span><strong>High-quality aesthetic material:</strong> Soft premium covers designed to look pristine on your workspace.</span>
                    </div>
                  </div>

                  {/* Program Selector control */}
                  <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-left">
                    <span className="block font-mono text-[10px] text-white/40 uppercase mb-3">CUSTOMIZE BOOK MOCKUP DETAILS:</span>
                    <div className="grid grid-cols-2 gap-3.5">
                      <button 
                        onClick={() => setBookSelection({
                          theme: "Health & Daily Strength Focus",
                          coverColor: "from-emerald-900 to-[#08111F] border-emerald-500/50",
                          coverGlow: "rgba(46, 204, 113, 0.4)",
                          selectedLevel: "Level 2 (Biometric Tuning)"
                        })}
                        className="py-2 px-3 bg-white/5 border border-white/5 text-[11px] rounded text-left hover:bg-white/10"
                      >
                        ⚡ Health Cover
                      </button>
                      
                      <button 
                        onClick={() => setBookSelection({
                          theme: "Asset Compounding Models",
                          coverColor: "from-[#0D1B2A] to-[#08111F] border-cyan-500/50",
                          coverGlow: "rgba(0, 209, 255, 0.4)",
                          selectedLevel: "Level 1 (Compound Math)"
                        })}
                        className="py-2 px-3 bg-white/5 border border-white/5 text-[11px] rounded text-left hover:bg-white/10"
                      >
                        ⚡ Finance Cover
                      </button>
                    </div>
                  </div>
                </div>

                {/* Live Customizer Visualizer Render */}
                <div className="flex flex-col items-center justify-center p-6 bg-black/40 rounded-2xl relative border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00D1FF]/5 to-transparent pointer-events-none" />
                  
                  {/* The Simulated Booklet Graphic */}
                  <div 
                    className={`w-52 h-72 bg-gradient-to-br ${bookSelection.coverColor} rounded-xl border p-6 flex flex-col justify-between shadow-2xl relative transform hover:rotate-2 transition-transform duration-500`}
                    style={{ boxShadow: `0 10px 40px ${bookSelection.coverGlow}` }}
                  >
                    {/* Spine strip effect */}
                    <div className="absolute top-0 bottom-0 left-0 w-3 bg-white/10 rounded-l" />

                    <div className="flex items-center justify-between text-[10px] font-mono text-white/60 pl-3">
                      <span>SUPP_INSTR.2026</span>
                      <span>LAB_SYS_EDITION</span>
                    </div>

                    <div className="flex flex-col pl-3">
                      <div className="w-8 h-8 rounded bg-white/15 flex items-center justify-center mb-4">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-display font-extrabold text-sm text-white tracking-tight leading-tight uppercase">
                        {bookSelection.theme}
                      </h4>
                      <span className="font-mono text-[9px] text-[#2ECC71] mt-1 block">
                        {bookSelection.selectedLevel}
                      </span>
                    </div>

                    <div className="border-t border-white/10 pt-4 text-left pl-3 flex items-center justify-between text-[8px] font-mono text-white/50">
                      <span>STATUS: ENROLLED</span>
                      <span>MEMB_ID: ALPHA_B</span>
                    </div>
                  </div>

                  <p className="text-[10px] font-mono text-[#94A3B8] mt-6 flex items-center gap-1">
                    <FileCheck className="w-3.5 h-3.5 text-[#00D1FF]" />
                    <span>Real book shipped globally upon waitlist qualification.</span>
                  </p>
                </div>
              </motion.div>
            )}

            {/* TAB 2: HABIT TRACKING */}
            {activeFeatureTab === "habit-tracking" && (
              <motion.div
                key="habit-tracking"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 text-[#2ECC71]">
                    <Flame className="w-5 h-5 text-[#2ECC71]" />
                    <span className="font-mono text-xs tracking-wider uppercase font-bold">GAMIFIED INTERACTIVE PLATFORM</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                    Zero-Friction Habit Tracking 
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                    Our dynamic tracking interface is forged to make check-in loops frictionless. Complete habits consecutively to increase your laboratory efficiency scores and multiplier streaks.
                  </p>

                  <div className="space-y-3.5 text-xs text-[#94A3B8] leading-relaxed mb-6">
                    <p>
                      <strong>Chain streak multipliers:</strong> Missing single days cuts your multi-day multipliers in half. Our platform utilizes behavioral anchoring to keep users honest.
                    </p>
                    <p>
                      <strong>Biometric mapping:</strong> Log deep sleep intervals, macronutrient indexes, and daily cardiovascular minutes to generate automatic productivity suggestions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-[#2ECC71]/20 bg-[#2ECC71]/5 flex gap-3 text-xs">
                    <ShieldAlert className="w-5 h-5 text-[#2ECC71] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Active Streak Armed:</strong> Complete the simulated habits on the right console block to test the immediate XP reward trigger system!
                    </div>
                  </div>
                </div>

                {/* Interactive Habit Console Mock */}
                <div className="p-6 bg-black/40 border border-white/5 rounded-2xl relative">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[10px] text-[#2ECC71] font-bold">LIVE STREAK SIMULATOR Widget</span>
                    <span className="font-mono text-xs text-emerald-400">Total Available XP: 80 XP</span>
                  </div>

                  {/* Dashboard stats panel */}
                  <div className="p-4 rounded-xl bg-[#08111F]/60 border border-white/5 mb-5 text-left">
                    <div className="flex justify-between items-center mb-1 text-xs">
                      <span className="text-[#94A3B8]">Habit Efficiency Rate</span>
                      <span className="font-bold text-[#2ECC71]">{habitsProgressPercent}%</span>
                    </div>
                    {/* Progress Slider bar */}
                    <div className="w-full bg-black/50 rounded-full h-1.5 overflow-hidden border border-white/5">
                      <div 
                        className="bg-[#2ECC71] h-full" 
                        style={{ width: `${habitsProgressPercent}%` }}
                      />
                    </div>
                    <span className="block text-[10px] font-mono text-[#94A3B8]/60 mt-1">
                      {habitsCompleted} of {habitsData.length} items achieved
                    </span>
                  </div>

                  {/* Intersecting checklists */}
                  <div className="space-y-2.5 mb-2">
                    {habitsData.map((h) => (
                      <button
                        key={h.id}
                        onClick={() => toggleHabit(h.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-left border cursor-pointer text-xs font-medium transition-all ${
                          h.done 
                            ? "bg-[#2ECC71]/10 border-[#2ECC71]/40 text-white" 
                            : "bg-white/5 border-white/5 text-[#94A3B8] hover:bg-white/10"
                        }`}
                        id={`habit-feature-item-${h.id}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                            h.done ? "bg-[#2ECC71] text-black" : "border border-[#94A3B8]/30"
                          }`}>
                            {h.done && <CheckCircle className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span className={h.done ? "line-through text-white/50" : "text-white"}>
                            {h.name}
                          </span>
                        </div>
                        <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                          h.done ? "bg-[#2ECC71]/20 text-[#2ECC71]" : "bg-white/5 text-[#94A3B8]"
                        }`}>
                          +{h.xp} XP
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: COACHING & MENTORSHIP */}
            {activeFeatureTab === "coaching-mentorship" && (
              <motion.div
                key="coaching-mentorship"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 text-purple-400">
                    <Users className="w-5 h-5" />
                    <span className="font-mono text-xs tracking-wider uppercase font-bold">ADVISOR SYSTEM GATEWAY</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                    Advisors & Certified Peer Forums
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                    Connect directly with certified performance architects, wealth mentors, and focus facilitators who evaluate your biweekly laboratory metrics logs.
                  </p>

                  <div className="space-y-4 mb-8 text-xs text-[#94A3B8] leading-relaxed">
                    <p>
                      <strong>Active biweekly calibration:</strong> Book a slot to audit your macro patterns. Your advisor will modify your program booklets parameter triggers directly.
                    </p>
                    <p>
                      <strong>Peer Accountability Teams:</strong> Engage with small clusters of fellow candidates (4-6 builders) doing corresponding focus sprints.
                    </p>
                  </div>

                  <Link to="/coaching" className="px-5 py-3 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 inline-block text-xs font-semibold text-white tracking-wide">
                    Search Advisors directory
                  </Link>
                </div>

                {/* Interactive Messenger Mockup */}
                <div className="p-4 bg-black/60 rounded-2xl relative border border-white/5 flex flex-col h-[320px]">
                  
                  {/* Chat top header bar */}
                  <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-3 shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-[10px] font-bold font-mono text-white">
                      CE
                    </div>
                    <div className="text-left">
                      <span className="block text-xs font-semibold text-white">Coach Ethos [Architect]</span>
                      <span className="block text-[9px] font-mono text-emerald-400">Online & Listening</span>
                    </div>
                  </div>

                  {/* Scrollable conversation box */}
                  <div className="grow overflow-y-auto space-y-3 p-1.5 text-xs text-left" id="feature-chat-scrollable">
                    {chatLog.map((msg, index) => (
                      <div 
                        key={index}
                        className={`max-w-[85%] rounded-lg p-3 ${
                          msg.sender === "mentor"
                            ? "bg-white/5 border border-white/5 text-white mr-auto"
                            : "bg-[#00D1FF]/10 border border-[#00D1FF]/20 text-white ml-auto"
                        }`}
                      >
                        <p className="leading-relaxed text-[11px] font-mono whitespace-pre-line">{msg.text}</p>
                        <span className="block text-right text-[8px] text-[#94A3B8]/60 mt-1">{msg.time}</span>
                      </div>
                    ))}
                  </div>

                  {/* Chat quick triggers selection */}
                  <div className="pt-3 border-t border-white/5 flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => sendSimulatedMessage("I feel exhausted and cannot log my active focus tasks today.")}
                      className="px-2.5 py-1.5 bg-white/5 border border-white/5 hover:bg-white/10 rounded text-[10px] font-mono text-white cursor-pointer"
                    >
                      💡 "I am exhausted..."
                    </button>
                    <button
                      onClick={() => sendSimulatedMessage("I am focused today! Send me calibration data parameters.")}
                      className="px-2.5 py-1.5 bg-white/5 border border-white/5 hover:bg-white/10 rounded text-[10px] font-mono text-white cursor-pointer"
                    >
                      🚀 "I'm ready!"
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: POINTS, REWARDS, NFT CERTIFICATES */}
            {activeFeatureTab === "points-rewards" && (
              <motion.div
                key="points-rewards"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 text-emerald-400">
                    <Award className="w-5 h-5" />
                    <span className="font-mono text-xs tracking-wider uppercase font-bold">REWARD SYSTEMS DISCLOSURE</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                    Verified XP Milestones & Badges
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                    Each daily checklist completion compiles XP direct into your candidate file. Overcoming core checkpoints unlocks verified visual badges endorsing your achievements.
                  </p>

                  <div className="space-y-4 mb-8 text-xs text-[#94A3B8] leading-relaxed">
                    <p>
                      <strong>The Badge Portfolio:</strong> Overcome specific thresholds to unlock collectible assets: (1) Streak Star, (2) Habit Hero, (3) Goal Master.
                    </p>
                    <p>
                      <strong>Vested Ledger Diplomas:</strong> Accumulate 1000 XP to qualify for your professional level certificate. Available as elegant cryptographic files.
                    </p>
                  </div>

                  <Link to="/rewards" className="px-5 py-3 rounded-lg bg-gradient-to-r from-[#00D1FF] to-[#2ECC71] hover:scale-[1.02] active:scale-[0.98] text-black font-extrabold text-xs inline-block transition-transform duration-200">
                    Tour Rewards Hub
                  </Link>
                </div>

                {/* Collectible badging showcase graphic layout */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#00D1FF]/10 border border-[#00D1FF]/20 flex items-center justify-center mb-3">
                      <Flame className="w-6 h-6 text-[#00D1FF]" />
                    </div>
                    <span className="block font-display font-bold text-xs text-white">Streak Star</span>
                    <span className="block font-mono text-[9px] text-[#2ECC71] mt-1">UNLOCKED</span>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/20 flex items-center justify-center mb-3">
                      <CheckCircle className="w-6 h-6 text-[#2ECC71]" />
                    </div>
                    <span className="block font-display font-bold text-xs text-white">Habit Hero</span>
                    <span className="block font-mono text-[9px] text-[#2ECC71] mt-1">UNLOCKED</span>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 opacity-50 text-center flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                      <Award className="w-6 h-6 text-[#94A3B8]" />
                    </div>
                    <span className="block font-display font-bold text-xs text-white">Goal Master</span>
                    <span className="block font-mono text-[9px] text-[#94A3B8] mt-1">LOCKED</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 5: WEB3 FUTURE INTEGRATION TEASER */}
            {activeFeatureTab === "web3-integrations" && (
              <motion.div
                key="web3-integrations"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 text-[#00D1FF]">
                    <Cpu className="w-5 h-5 animate-spin" />
                    <span className="font-mono text-xs tracking-wider uppercase font-bold">FUTURE BLOCKCHAIN ROADMAP</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                    Decentralized Web3 Integrations
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                    Our long-term architectural layout plans future smart integrations. We are designing a framework where confirmed self-improvement records create unstoppable meritocratic qualifications.
                  </p>

                  <div className="space-y-4 mb-8 text-xs text-[#94A3B8] leading-relaxed">
                    <p>
                      <strong>Proof-Of-Discipline records:</strong> Turn your daily cardio streaks, savings metrics, and cognitive sprint completions into digital signatures that prove credentials.
                    </p>
                    <p>
                      <strong>Vested Token Rewards:</strong> Future candidates would earn community-backed tokens corresponding to real metrics logged, enabling redemption for actual health equipment.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-white/5 border border-white/5 rounded-lg text-[11px] font-mono text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>SECURE INTEGRATIONS PIPELINE REVIEWS PENDING</span>
                  </div>
                </div>

                {/* Futuristic Blockchain Visual representation */}
                <div className="p-6 bg-[#050B14] rounded-2xl relative border border-[#00D1FF]/20 flex flex-col items-center justify-center text-center">
                  <div className="absolute top-0 right-0 p-3 font-mono text-[9px] text-[#00D1FF]/40">TESTNET.GEN_2</div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-[#00D1FF] to-[#2ECC71] flex items-center justify-center text-black shadow-xl shrink-0 mb-6 font-mono font-bold">
                    Web3
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">Proof of Discipline</h4>
                  <p className="text-[11px] text-[#94A3B8] max-w-sm">
                    Cryptographic credentials under the ERC-1155 protocol. Verifiable records that hold dynamic metadata corresponding directly to your physical book QR verifications.
                  </p>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
