import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Shield, Target, Compass, Zap, Sparkles, Quote } from "lucide-react";
import useSEO from "../hooks/useSEO";

export default function About() {
  useSEO({
    title: "Philosophy & Core Values — S-H Calibration Models",
    description: "Discover our educational ethos: secular Stoicism, compounding biometric rituals, literature-first reading circles, and peer-to-peer calibrated milestones.",
  });

  const coreValues = [
    {
      icon: <Target className="w-5 h-5 text-[#14B8A6]" />,
      title: "Scientific Rigor",
      desc: "No quick motivation chips or content trends. We ground personal expansion in proven cognitive habits, biometric indicators, and consistent daily practice loops."
    },
    {
      icon: <Shield className="w-5 h-5 text-cyan-400" />,
      title: "Unyielding Integrity",
      desc: "Authentic milestone verification. Achievement criteria are validated by physical paper tracking loops and peer accountability discussion circles."
    },
    {
      icon: <Compass className="w-5 h-5 text-[#14B8A6]" />,
      title: "Secular Stoicism",
      desc: "Intentional focus training. Learn to manage impulses, welcome necessary discomfort, and build unwavering emotional grounding in a fast work ecosystem."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Compounding Growth",
      desc: "Miniscule compound multipliers create tectonic final results. Consistently read 15 pages daily or automate minor savings, and watch the math scale."
    }
  ];

  const teamList = [
    {
      name: "Marcus Aurelius Sterling",
      role: "Chief of Focus & Cognitive Architecture",
      avatar: "MS",
      gradient: "from-[#0D9488] to-indigo-600",
      quote: "Discipline is not a rare genetic talent — it is simply an optimized, structured set of daily physical environments."
    },
    {
      name: "Amina Al-Mansoor",
      role: "Dean of Sustainable Business & Budget Models",
      avatar: "AM",
      gradient: "from-[#0D9488] to-amber-600",
      quote: "Sovereign financial models are the essential prerequisites to personal freedom and worldwide adventure."
    },
    {
      name: "Dr. Ethan Vance",
      role: "Dean of Biological Habits & Circadian Rhythms",
      avatar: "EV",
      gradient: "from-indigo-600 to-purple-650",
      quote: "Biological vitality rules psychological endurance. Align your sleep rhythms first, and your cognitive focus will compound naturally."
    }
  ];

  return (
    <div className="min-h-screen bg-[#060B13] text-slate-200 relative overflow-hidden" id="about-page-container">
      {/* Delicate organic glow backdrops */}
      <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#0D9488]/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-indigo-500/3 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 text-left">
        
        {/* ================= SECTION 1: HEADER & PHILOSOPHY ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase tracking-widest text-[#14B8A6] font-bold">
              THE S-H MANIFESTO
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-[1.12] mt-3 mb-6" id="about-headline">
              We Treat Human Transformation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#14B8A6] to-emerald-300">
                As An Aligned Science
              </span>
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-350 leading-relaxed mb-6 font-sans">
              Supplemental Instruction LLC (S-H) was conceived by an aligned group of educators, personal finance consultants, and physiological health mentors who realized standard self-help is broken. Video recommendations give transient motivation peaks, but fail to provide the tangible sheets, books, and verified support loops needed to lock in daily consistency.
            </p>

            <p className="text-xs sm:text-sm text-slate-350 leading-relaxed mb-6 font-sans">
              We design structured print notebooks and compound syllabi delivered globally. By establishing physical friction-free workspaces and connecting with vetted small accountability networks, you transition away from passive anxiety into creative sovereignty.
            </p>

            <blockquote className="border-l-4 border-[#14B8A6] bg-[#0d1626]/60 p-5 rounded-r-2xl font-serif text-sm font-medium italic text-slate-350 leading-relaxed mb-6 flex gap-3.5 shadow-md">
              <Quote className="w-8 h-8 text-[#14B8A6]/40 shrink-0" />
              <div>
                "Sovereignty means having command over your attention, your vitality, and your time. At Supplemental Instruction, we replace modern screen distraction with beautifully styled physical trackers and elite advisor channels that make growth inevitable."
              </div>
            </blockquote>
          </div>

          {/* Right Column Visual Mock */}
          <div className="lg:col-span-5">
            <div className="premium-card rounded-2xl p-6.5 bg-[#0c1524]/40 border border-slate-800 shadow-2xl overflow-hidden relative text-left">
              <div className="absolute top-0 right-0 p-4">
                <Sparkles className="w-5 h-5 text-[#14B8A6]" />
              </div>

              <div className="flex items-center gap-2.5 mb-5 border-b border-slate-850 pb-4">
                <span className="h-2 w-2 rounded-full bg-[#14B8A6] animate-pulse" />
                <span className="font-mono text-[9px] uppercase text-slate-400 tracking-widest font-extrabold">ECOSYSTEM BLUEPRINT</span>
              </div>

              <div className="space-y-4.5 font-mono text-[11px]">
                <div>
                  <span className="text-white font-bold block">01 / BASELINE CALIBRATION</span>
                  <p className="text-slate-400 text-[10.5px] mt-1.5 font-sans leading-normal">Submit your initial admissions file. Our mentors evaluate your sleep rhythms and reading habits to frame your personal curriculum.</p>
                </div>
                <div className="border-t border-slate-850 pt-3.5">
                  <span className="text-white font-bold block">02 / PRINT BOOKLETS COMPILERS</span>
                  <p className="text-slate-400 text-[10.5px] mt-1.5 font-sans leading-normal">Beautifully styled daily track journals are custom-arranged and shipped globally to build screen-free accountability loops.</p>
                </div>
                <div className="border-t border-slate-850 pt-3.5">
                  <span className="text-white font-bold block">03 / VERIFIED MULTIPLIER NETWORKS</span>
                  <p className="text-slate-400 text-[10.5px] mt-1.5 font-sans leading-normal">Compare daily reviews with certified advisors and small peer groups, unlocking verified achievement badges on your record.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 2: MISSION & VISION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 text-left">
          <div className="p-8 rounded-2xl border border-slate-850 bg-[#0d1626]/30 shadow-2xl">
            <span className="font-mono text-[10px] tracking-widest text-[#14B8A6] uppercase font-bold">THE ROADMAP DIRECTION</span>
            <h2 className="font-display font-extrabold text-2xl text-white mt-2.5 mb-4">Our Mission</h2>
            <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-sans">
              To democratize high-trust, systematic human development. By integrating the finest behavioral habits, passive compounding finance structures, circadian energy optimization, and classic stoicism into gorgeous tangible print materials, we build focus systems that help candidates thrive.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-slate-850 bg-[#0d1626]/30 shadow-2xl">
            <span className="font-mono text-[10px] tracking-widest text-cyan-400 uppercase font-bold">THE CORE VISUALIZATION</span>
            <h2 className="font-display font-extrabold text-2xl text-white mt-2.5 mb-4">Our Vision</h2>
            <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-sans">
              To build a global, highly credible peer development ecosystem. Where your verified consistency records, completed book checklists, and advisor calibrations generate professional certificates—providing physical-meets-digital endorsement of your creative limits and reliability.
            </p>
          </div>
        </div>

        {/* ================= SECTION 3: CORE VALUES ================= */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#14B8A6] font-bold">
              THE CONSTITUTION OF PROGRESS
            </span>
            <h2 className="font-display font-extrabold text-3xl text-white mt-3 mb-4">Core Operational Guidelines</h2>
            <p className="text-xs text-slate-400 font-sans">
              The foundational values guiding our software modules, custom print guides, and active coaching protocol validations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-850 bg-[#0d1626]/40 hover:border-[#14B8A6]/40 transition-all duration-300 shadow-md text-left">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4">
                  {val.icon}
                </div>
                <h3 className="font-display font-bold text-white text-sm mb-2">{val.title}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 4: TEAM DETAILS ================= */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#14B8A6] font-bold">
              PEER ADVISORS DIRECTORS
            </span>
            <h2 className="font-display font-extrabold text-3xl text-white mt-3" id="about-team-heading">
              Our Professional Architects
            </h2>
            <p className="text-xs text-slate-400 mt-2.5 font-sans">
              Meet the system directors certifying consistency across neural routines, budget scale models, and stillness disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {teamList.map((tm, idx) => (
              <div 
                key={idx}
                className="bg-[#0c1524]/40 rounded-2xl border border-slate-850 shadow-lg hover:shadow-2xl hover:border-slate-800 transition-all overflow-hidden relative group"
              >
                {/* Visual Avatar Placeholder */}
                <div className="h-44 w-full bg-slate-950/60 flex items-center justify-center relative border-b border-slate-850">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${tm.gradient} flex items-center justify-center text-xl font-bold font-mono text-white shadow-2xl`}>
                    {tm.avatar}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-full bg-[#0D9488]/15 border border-[#0D9488]/25 text-[9px] font-mono text-[#14B8A6] font-bold">
                    CERTIFIED DIRECTOR
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-base text-white mb-1">{tm.name}</h3>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold mb-4">{tm.role}</span>
                  <p className="text-xs text-slate-430 leading-relaxed italic border-t border-slate-850 pt-4 font-serif">
                    "{tm.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 5: FINAL CTA OUTLET ================= */}
        <div className="relative p-10 md:p-12 border border-slate-850 bg-[#0d1626]/40 shadow-2xl rounded-3xl overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-[#14B8A6]/8 blur-[60px] pointer-events-none" />
          
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight mb-4">
            Begin Your Active Transformation Today
          </h2>
          <p className="text-xs text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8 font-sans">
            Supplemental Instruction LLC (S-H) provides the direct material assets and real, non-distracting community WhatsApp groups you need to thrive. Apply for early admissions and schedule your alignment call.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-400 to-[#0D9488] hover:brightness-110 text-slate-950 font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all shadow-lg hover:scale-[1.01] cursor-pointer"
            id="join-movement-button"
          >
            <span>Begin Integration Admissions</span>
            <Zap className="w-3.5 h-3.5 text-slate-950 stroke-[2.5]" />
          </Link>
        </div>

      </div>
    </div>
  );
}
