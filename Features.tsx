import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Shield, Target, Compass, Zap, Users, Sparkles, AlertCircle, Quote } from "lucide-react";

export default function About() {
  const coreValues = [
    {
      icon: <Target className="w-5 h-5 text-[#00D1FF]" />,
      title: "Scientific Rigor",
      desc: "No shallow motivation. We treat self-improvement as an engineering problem that requires specific inputs, triggers, and metric feedback loops."
    },
    {
      icon: <Shield className="w-5 h-5 text-[#2ECC71]" />,
      title: "Unyielding Integrity",
      desc: "Daily habit verification. Our rewards and completions are certified by real human logging audits and peer accountability checkpoints."
    },
    {
      icon: <Compass className="w-5 h-5 text-purple-400" />,
      title: "Secular Stoicism",
      desc: "Deliberate adversity training. We focus on building internal endurance limits, spiritual resilience, and deliberate focus controls."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Compounding Growth",
      desc: "Small additions create massive multipliers. Whether saving 5% of earnings or 10 mins of focus sprints, we let the mathematics of scale operate."
    }
  ];

  const teamList = [
    {
      name: "Marcus Aurelius Sterling",
      role: "Chief of Focus & Neuroscience Architect",
      avatar: "MS",
      gradient: "from-cyan-500 to-blue-600",
      quote: "Discipline isn't a state of mind — it's an optimized series of neural equations."
    },
    {
      name: "Amina Al-Mansoor",
      role: "Dean of Investing & Money Models",
      avatar: "AM",
      gradient: "from-emerald-400 to-teal-600",
      quote: "Financial intelligence is the absolute prerequisite to personal sovereignty."
    },
    {
      name: "Dr. Ethan Vance",
      role: "Dean of Cognitive Habits & Bio-Tracking",
      avatar: "EV",
      gradient: "from-amber-400 to-orange-500",
      quote: "If you don't record the telemetry of your body, you cannot optimize its performance."
    }
  ];

  return (
    <div className="min-h-screen bg-[#08111F] text-[#F8FAFC] relative overflow-hidden" id="about-page-container">
      {/* Glow Backdrops */}
      <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#00D1FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-[#2ECC71]/3 blur-[140px] pointer-events-none" />
      {/* Smooth top-lit ambient glow overlay */}
      <div className="absolute inset-x-0 top-0 h-[100vh] bg-grid-pattern opacity-80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 text-left">
        
        {/* ================= SECTION 1: HEADER & PHILOSOPHY ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D1FF]">
              THE LAB MANIFESTO
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight mt-3 mb-6" id="about-headline">
              We Treat Personal Development <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D1FF] to-[#2ECC71]">
                As A Scientific Discipline
              </span>
            </h1>
            
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              Supplemental Instruction was built by a collective of software engineers, venture capital investors, ex-athletic trainers, and medical researchers who grew exhausted with the self-help industry. We realized that books and speeches create emotional high peaks, but fail to provide the actual blueprints, daily charts, and structural friction reduction needed to sustain long-term transformation.
            </p>

            <blockquote className="border-l-3 border-[#00D1FF] bg-[#0D1B2A]/40 p-5 rounded-r-xl font-medium italic text-xs text-white leading-relaxed mb-6 flex gap-3">
              <Quote className="w-8 h-8 text-[#00D1FF] opacity-30 shrink-0" />
              <div>
                "You do not rise to the level of your goals. You sink to the level of your systems. At Supplemental Instruction, we engineer the physical templates and atomic triggers that make success inevitable."
              </div>
            </blockquote>
          </div>

          {/* Right Column Visual Mock */}
          <div className="lg:col-span-5">
            <div className="relative glass-panel rounded-2xl p-6 border border-white/10 overflow-hidden bg-gradient-to-b from-[#0D1B2A]/60 to-[#08111F]">
              <div className="absolute top-0 right-0 p-4">
                <Sparkles className="w-5 h-5 text-[#2ECC71] animate-pulse" />
              </div>

              <div className="flex items-center gap-2.5 mb-5 border-b border-white/5 pb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="font-mono text-[10px] uppercase text-[#94A3B8] tracking-widest font-bold">LABORATORY BLUEPRINT</span>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-white font-semibold">01 / INPUT CALIBRATION</span>
                  <p className="text-[#94A3B8] text-[11px] mt-0.5">Determine current baseline values through systematic cognitive, physical, spiritual and investment diagnostic surveys.</p>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <span className="text-white font-semibold">02 / INTERACTIVE DAILY ENGINE</span>
                  <p className="text-[#94A3B8] text-[11px] mt-0.5">Physical tracking journals integrated with certified coach peer rooms to hold you accountable daily.</p>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <span className="text-white font-semibold">03 / CONTINUOUS MULTIPLIER</span>
                  <p className="text-[#94A3B8] text-[11px] mt-0.5">Claim collectible badges, XP milestones, and cryptographic Web3 certs that demonstrate your real-life abilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 2: MISSION & VISION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-[#0D1B2A]/30">
            <span className="font-mono text-[10px] tracking-widest text-[#00D1FF] uppercase font-bold">THE ROADMAP DIRECTION</span>
            <h2 className="font-display font-bold text-2xl text-white mt-2 mb-4">Our Mission</h2>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              To democratize high-performance human operating systems. We integrate the finest behavioral neuroscience research, financial accumulation frameworks, athletic rigor, and secular wisdom into affordable, gamified, physically tangible products that force discipline in a fractured world.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-[#0D1B2A]/30">
            <span className="font-mono text-[10px] tracking-widest text-[#2ECC71] uppercase font-bold">THE LONG-TERM PLAN</span>
            <h2 className="font-display font-bold text-2xl text-white mt-2 mb-4">Our Vision</h2>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              To build a global, decentralized self-improvement ecosystem. Where your habits, financial index assets, and spiritual focus generate actual certified credentials verified on public ledger platforms — serving as trusted endpoints for hiring managers, venture partners, and elite athletic academies globally.
            </p>
          </div>
        </div>

        {/* ================= SECTION 3: CORE VALUES ================= */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-purple-400 font-bold">
              THE CONSTITUTION OF PROGRESS
            </span>
            <h2 className="font-display font-bold text-3xl text-white mt-2 mb-4">Our Core Values</h2>
            <p className="text-xs text-[#94A3B8]">
              The operational rules of engagement that direct every software pipeline, booklet syllabus, and coaching protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-[#0D1B2A]/40 hover:border-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#0D1B2A] border border-white/10 flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="font-display font-semibold text-[#F8FAFC] text-base mb-2">{val.title}</h3>
                <p className="text-[11px] text-[#94A3B8] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 4: TEAM PLACEHOLDERS ================= */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D1FF] font-bold">
              ADVISORY COUNCIL
            </span>
            <h2 className="font-display font-bold text-3xl text-white mt-2" id="about-team-heading">
              The Performance Architects
            </h2>
            <p className="text-xs text-[#94A3B8] mt-2">
              Learn from fully certified systems experts with deep professional experience in neurobiology, capital assets, and mindfulness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamList.map((tm, idx) => (
              <div 
                key={idx}
                className="glass-panel rounded-2xl border border-white/5 bg-[#0D1B2A]/40 overflow-hidden relative group"
              >
                {/* Visual Avatar Placeholder */}
                <div className="h-44 w-full bg-gradient-to-br from-[#0D1B2A] to-[#050B14] flex items-center justify-center relative border-b border-white/5">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${tm.gradient} flex items-center justify-center text-xl font-bold font-mono text-white shadow-xl shadow-black/40`}>
                    {tm.avatar}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 border border-white/10 text-[9px] font-mono text-emerald-400">
                    CERTIFIED ARCHITECT
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-white mb-1">{tm.name}</h3>
                  <span className="block text-xs font-mono text-[#00D1FF] mb-4">{tm.role}</span>
                  <p className="text-xs text-[#94A3B8] leading-relaxed italic border-t border-white/5 pt-4">
                    "{tm.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 5: FINAL CTA OUTLET ================= */}
        <div className="relative glass-panel rounded-2xl p-10 md:p-12 border border-white/10 bg-gradient-to-tr from-[#0D1B2A] to-[#050B14] overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-[#2ECC71]/5 blur-[60px] pointer-events-none" />
          
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight mb-4">
            Become A Verified Growth Candidate
          </h2>
          <p className="text-xs text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-8">
            Join thousands of students and builders internationally who have integrated Supplemental Instruction into their daily routine, creating unstoppable, compound self-improvement loops.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#00D1FF] to-[#2ECC71] text-black font-bold tracking-wide rounded-xl shadow-lg hover:shadow-[#00D1FF]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            id="join-movement-button"
          >
            <span>Join the Movement</span>
            <Zap className="w-4 h-4 fill-black" />
          </Link>
        </div>

      </div>
    </div>
  );
}
