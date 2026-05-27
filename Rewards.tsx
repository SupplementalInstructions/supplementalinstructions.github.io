import { useState, FormEvent } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  Mail, 
  User, 
  Compass, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Cpu, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  Zap
} from "lucide-react";

export default function Contact() {
  // Waitlist form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [focusArea, setFocusArea] = useState("");
  const [isHumanVerified, setIsHumanVerified] = useState(false);
  
  // Validation / Error alerts
  const [formErr, setFormErr] = useState<string | null>(null);
  
  // Submit Priority output modal
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [queuePriority, setQueuePriority] = useState("");

  const handleFormSubmission = (e: FormEvent) => {
    e.preventDefault();
    setFormErr(null);

    // 1. Basic Validation
    if (!name.trim()) {
      setFormErr("Applicant Name cannot be blank.");
      return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setFormErr("Please provide a valid, verified Email address.");
      return;
    }

    if (!focusArea) {
      setFormErr("Please select a primary intellectual focus area.");
      return;
    }

    if (!isHumanVerified) {
      setFormErr("Please check the Anti-Spam human verification box.");
      return;
    }

    // Generate simulated Priority Key
    const priorityKey = `SI-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setQueuePriority(priorityKey);
    setSubmitSuccess(true);
  };

  const resetContactForm = () => {
    setName("");
    setEmail("");
    setFocusArea("");
    setIsHumanVerified(false);
    setFormErr(null);
    setSubmitSuccess(false);
  };

  return (
    <div className="min-h-screen bg-[#08111F] text-[#F8FAFC] relative overflow-hidden" id="contact-page-container">
      {/* Background radial blurs */}
      <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#00D1FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-[#2ECC71]/3 blur-[140px] pointer-events-none" />
      {/* Smooth top-lit ambient glow overlay */}
      <div className="absolute inset-x-0 top-0 h-[100vh] bg-grid-pattern opacity-80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 text-left" id="contact-layout">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00D1FF] font-bold">
            APPLICATION PORTAL
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-3 mb-6" id="contact-title-id">
            Apply For early laboratory Access
          </h1>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Supplemental Instruction allocates limited slots based on candidate motivation profiles. Submit your application parameters to claim secure entry and queue for physical booklets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-grid-wrap">
          
          {/* Left Column (7 Columns) — Waitlist submission form */}
          <div className="lg:col-span-7">
            
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 bg-gradient-to-b from-[#0D1B2A]/70 to-[#050B14]">
              
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <Sparkles className="w-5 h-5 text-[#2ECC71]" />
                <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">REGISTRY SPECIFICATION FORM</span>
              </div>

              {/* Error Alert panel */}
              {formErr && (
                <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-400 font-mono mb-6">
                  ⚠ Error: {formErr}
                </div>
              )}

              {/* Contact / Waitlist submission Form */}
              <form onSubmit={handleFormSubmission} className="space-y-5" id="waitlist-registry-form">
                
                {/* Full name input */}
                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">FULL NAME / NOMINATIVE DETAILS:</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#94A3B8]/60">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#00D1FF] font-medium"
                      id="input-waitlist-name"
                    />
                  </div>
                </div>

                {/* Email address input */}
                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2">VERIFIED CONTACT EMAIL ADDRESS:</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[#94A3B8]/60">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. j.doe@laboratory.com"
                      className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#00D1FF] font-medium"
                      id="input-waitlist-email"
                    />
                  </div>
                </div>

                {/* Focus area select triggers */}
                <div>
                  <label className="block text-xs font-mono text-[#94A3B8] uppercase tracking-wider mb-2.5">PRIMARY INTELLECTUAL FOCUS ROADMAP:</label>
                  <div className="grid grid-cols-2 gap-3" id="contact-focus-selectors">
                    {[
                      { id: "health-fitness", label: "Health & Daily Fitness", color: "hover:border-[#2ECC71]/40" },
                      { id: "investing-finance", label: "Investing compound assets", color: "hover:border-[#00D1FF]/40" },
                      { id: "self-improvement", label: "Cognitive Focus & habits", color: "hover:border-amber-500/40" },
                      { id: "spiritual-growth", label: "Spiritual fortitude", color: "hover:border-purple-500/40" }
                    ].map((opt) => {
                      const isSelected = focusArea === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFocusArea(opt.id)}
                          className={`p-3 rounded-lg border text-left text-xs font-medium transition-all cursor-pointer ${
                            isSelected 
                              ? "bg-[#0D1B2A] border-[#00D1FF] text-[#00D1FF] glow-cyan-sm shadow-[#00D1FF]/5" 
                              : `bg-white/5 border-white/5 text-[#94A3B8] ${opt.color}`
                          }`}
                          id={`contact-focus-pill-${opt.id}`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Anti-spam humanity verification gateway */}
                <div className="p-4 bg-black/30 rounded-xl border border-white/5 mt-6">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isHumanVerified}
                      onChange={(e) => setIsHumanVerified(e.target.checked)}
                      className="mt-1 accent-[#00D1FF] h-4 w-4 shrink-0 rounded bg-black/50 border border-white/10"
                      id="checkbox-anti-spam"
                    />
                    <div className="text-left">
                      <span className="block text-xs font-mono font-bold text-white uppercase">GATE 01 - SPAM PROTECTION SECURE TRIGGER</span>
                      <span className="block text-[10px] text-[#94A3B8] mt-0.5 leading-relaxed">
                        I confirm I am an active human applicant fully prepared to audit habits metrics and take physical booklet custody.
                      </span>
                    </div>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#00D1FF] to-[#2ECC71] text-black font-extrabold tracking-wide rounded-xl shadow-lg hover:shadow-[#00D1FF]/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer mt-6"
                  id="submit-waitlist-form-button"
                >
                  <ShieldCheck className="w-5 h-5 fill-black" />
                  <span>Submit Intake Application details</span>
                </button>

              </form>
            </div>
          </div>

          {/* Right Column (5 Columns) — Motivational details and Alternate WhatsApp desk */}
          <div className="lg:col-span-5 space-y-8" id="contact-details-panel">
            
            {/* Motivational Banner and information block */}
            <div className="glass-panel rounded-2xl p-6 border border-white/5 bg-[#0D1B2A]/40 text-left">
              <h3 className="font-display font-bold text-lg text-white mb-3">Your Strategic Transformation Ahead</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                Thank you for taking physical ownership of your growth roadmap. Upon submission, our priority sorting engine registers your candidate file.
              </p>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Level 1 index materials, scheduled virtual calendar invitation details, and direct QR credentials are allocated to compliant candidates inside 24 hours.
              </p>
            </div>

            {/* DIRECT CONNECT DESK WIDGET (WhatsApp link) */}
            <div className="glass-panel rounded-2xl p-6 border border-white/5 bg-black/40 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#2ECC71]/10 rounded-lg border border-[#2ECC71]/20 shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#2ECC71]" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-[#2ECC71] tracking-widest font-bold">24H TELEMETRY DESK</span>
                  <h4 className="font-display font-semibold text-sm text-white leading-none mt-1">Direct Help Desk Connect</h4>
                </div>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-5">
                Have specific institutional questions or custom integration needs? Direct WhatsApp connection is active to speak with an onboarding administrator immediately:
              </p>

              <a 
                href="https://wa.me/254700000000" // Simulated premium WhatsApp placeholder target
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center p-3.5 rounded-xl bg-[#2ECC71]/10 hover:bg-[#2ECC71]/20 border border-[#2ECC71]/20 text-xs font-bold text-[#2ECC71] tracking-wide transition-all uppercase"
                id="whatsapp-direct-link"
              >
                <span>Chat Direct via WhatsApp</span>
              </a>
            </div>

            {/* Social Media grid list layout */}
            <div className="text-left">
              <span className="font-mono text-[9px] tracking-wider text-[#94A3B8] uppercase block mb-3 font-semibold">GLOBAL ADVISORY ADRESS LINES:</span>
              <div className="grid grid-cols-2 gap-3.5 text-xs text-[#F8FAFC]">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub Node</span>
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                  <span>LinkedIn Hub</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* ================= OUTLET SUCCESS APPLICATION MODAL OVERLAY ================= */}
        <AnimatePresence>
          {submitSuccess && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Dark backdrop overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                exit={{ opacity: 0 }}
                onClick={resetContactForm}
                className="absolute inset-0 bg-[#050B14]/90 backdrop-blur-sm"
              />

              {/* The Success prioritizing alert */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative glass-panel rounded-2xl w-full max-w-md overflow-hidden bg-gradient-to-b from-[#0D1B2A] to-[#08111F] border border-white/10 p-8 z-10 text-center shadow-2xl"
                id="contact-success-modal"
              >
                
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-6 text-emerald-400 glow-green">
                  <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                </div>

                <span className="font-mono text-[10px] uppercase text-[#2ECC71] tracking-widest font-bold block mb-1">CANDIDATE INTAKE SUBMITTED</span>
                <h3 className="font-display font-bold text-white text-2xl mb-2">Application Logged!</h3>
                <p className="text-xs text-[#94A3B8] max-w-sm mx-auto leading-relaxed mb-6">
                  Thank you, <strong>{name}</strong>! Your transformative profile sequence has bypassed spam check gates and registered with your chosen focus node.
                </p>

                {/* Priority queue number holder */}
                <div className="p-4 rounded-xl bg-black/40 border border-[#00D1FF]/20 text-center mb-6">
                  <span className="block font-mono text-[9px] text-[#94A3B8]/60 uppercase tracking-wide">YOUR PRIORITY RESERVATION ID:</span>
                  <strong className="block font-mono text-xl text-[#00D1FF] mt-1 tracking-widest">{queuePriority}</strong>
                </div>

                <p className="text-[10px] text-[#94A3B8] leading-relaxed mb-6">
                  We have dispatched confirmed receipt signals to {email}. A certified performance architect will evaluate your roadblocks list within 24 hours.
                </p>

                <button 
                  onClick={resetContactForm}
                  className="w-full py-3.5 bg-gradient-to-r from-[#00D1FF] to-[#2ECC71] text-black font-extrabold text-xs tracking-semibold rounded-xl uppercase transition-transform cursor-pointer"
                  id="success-return-button"
                >
                  Return to portal
                </button>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
