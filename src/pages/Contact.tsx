import { useState, useEffect, FormEvent } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  Mail, 
  User, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle, 
  Sparkles,
  PhoneCall,
  ExternalLink
} from "lucide-react";
import useSEO from "../hooks/useSEO";

export default function Contact() {
  useSEO({
    title: "Join Waitlist & Admissions Applications — Apply",
    description: "Secure your place in the next Supplemental Instruction intake. Register details and disclose target roadblocks to initiate advisor alignment.",
  });

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

  // Handle escape key closure for success modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && submitSuccess) {
        resetContactForm();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [submitSuccess]);

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
      setFormErr("Please select a primary focus area.");
      return;
    }

    if (!isHumanVerified) {
      setFormErr("Please check the Anti-Spam human verification box.");
      return;
    }

    // Generate simulated Priority Key
    const priorityKey = `SH-2026-${Math.floor(1000 + Math.random() * 9000)}`;
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
    <div className="min-h-screen bg-[#060B13] text-slate-200 relative overflow-hidden" id="contact-page-container">
      {/* Background blurs */}
      <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#0D9488]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-indigo-500/2 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 text-left" id="contact-layout">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#14B8A6] font-bold py-1.5 px-3.5 bg-[#0D9488]/15 border border-[#0D9488]/25 rounded-full">
            ADMISSIONS PORTAL
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-4 mb-6" id="contact-title-id">
            Early Intake Admissions
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto font-sans">
            Supplemental Instruction LLC allocates candidate openings based on alignment motivation profiles. Submit your focus targets to secure admissions prioritization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-grid-wrap">
          
          {/* Left Column (7 Columns) — Waitlist submission form */}
          <div className="lg:col-span-7">
            
            <div className="bg-[#0c1524]/60 rounded-3xl p-6 sm:p-8 border border-slate-850 shadow-2xl relative text-left">
              
              <div className="flex items-center gap-2 mb-6 border-b border-slate-850 pb-4">
                <Sparkles className="w-5 h-5 text-[#14B8A6]" />
                <span className="font-mono text-xs uppercase tracking-widest text-white font-extrabold">INTAKE SPECIFICATION PROFILE</span>
              </div>

              {/* Error Alert panel */}
              {formErr && (
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-800 text-xs text-red-400 font-mono mb-6">
                  ⚠ Error: {formErr}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleFormSubmission} className="space-y-5" id="waitlist-registry-form">
                
                {/* Full name input */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-450 font-bold uppercase tracking-wider mb-2">FULL NAME / RECIPIENT NOMINATIVE DETAILS:</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Johnathan Doe"
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 pl-11 pr-4 text-xs text-white placeholder-slate-550 focus:outline-none focus:border-[#14B8A6] font-semibold"
                      id="input-waitlist-name"
                    />
                  </div>
                </div>

                {/* Email address input */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-450 font-bold uppercase tracking-wider mb-2">VERIFIED RECIPIENT EMAIL ADDRESS:</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. j.doe@organization.com"
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl py-3 pl-11 pr-4 text-xs text-white placeholder-slate-550 focus:outline-none focus:border-[#14B8A6] font-semibold"
                      id="input-waitlist-email"
                    />
                  </div>
                </div>

                {/* Focus area select triggers */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-450 font-bold uppercase tracking-wider mb-2.5">PRIMARY INTELLECTUAL FOCUS ROADMAP:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="contact-focus-selectors">
                    {[
                      { id: "thrive-mode", label: "Thrive Mode: Bio-wellness" },
                      { id: "reading-culture", label: "Reading Culture: Studies" },
                      { id: "alchemy-entrepreneurship", label: "Alchemy: Sustainable Business" },
                      { id: "mental-wellness", label: "Wellness: Stoic Stillness" }
                    ].map((opt) => {
                      const isSelected = focusArea === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFocusArea(opt.id)}
                          className={`p-3.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                            isSelected 
                              ? "bg-[#0d1626] border-[#14B8A6] text-[#14B8A6] shadow-md shadow-teal-950/20" 
                              : "bg-slate-950/40 border-slate-850 text-slate-400 hover:bg-[#0d1626]/40 hover:border-slate-850 hover:text-slate-350"
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
                <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl mt-6">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={isHumanVerified}
                      onChange={(e) => setIsHumanVerified(e.target.checked)}
                      className="mt-1 accent-[#14B8A6] h-4 w-4 shrink-0 rounded bg-[#060B13] border border-slate-800"
                      id="checkbox-anti-spam"
                    />
                    <div className="text-left font-sans">
                      <span className="block text-xs font-mono font-bold text-white uppercase">GATE 01 - SECURE VERIFICATION TRIGGER</span>
                      <span className="block text-[10.5px] text-slate-400 mt-1 leading-relaxed">
                        I confirm this is an active candidate application registry. I am prepared to keep my commitments and receive custom booklets.
                      </span>
                    </div>
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-emerald-400 to-[#0D9488] hover:brightness-110 text-slate-950 font-extrabold tracking-wider uppercase rounded-xl transition-all hover:scale-101 cursor-pointer mt-6"
                  id="submit-waitlist-form-button"
                >
                  <ShieldCheck className="w-5 h-5 text-slate-950 stroke-[2.5]" />
                  <span>Submit Client Intake Profile</span>
                </button>

              </form>
            </div>
          </div>

          {/* Right Column (5 Columns) */}
          <div className="lg:col-span-5 space-y-8" id="contact-details-panel">
            
            {/* Context details */}
            <div className="bg-[#0c1524]/40 rounded-3xl p-6.5 border border-slate-850 shadow-lg text-left">
              <h3 className="font-display font-bold text-base text-white mb-3">Onboarding Calibration</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4 font-sans">
                Thank you for taking deliberate custody of your self-growth schedules. All admissions registries are processed by our priority queue system.
              </p>
              <p className="text-xs text-[#14B8A6] font-bold leading-relaxed font-sans">
                Selected candidates are allocated slot coordinates, virtual introductory invitations, and custom track handbooks within 24 hours.
              </p>
            </div>

            {/* Support Widget */}
            <div className="bg-[#0c1524]/40 rounded-3xl p-6.5 border border-slate-850 shadow-lg text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#0D9488]/15 rounded-xl border border-[#0D9488]/25 shrink-0 text-[#14B8A6]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-[#14B8A6] tracking-widest font-extrabold uppercase">FOUNDER DESK DESPATCH</span>
                  <h4 className="font-display font-bold text-sm text-white leading-none mt-1">Direct Personal Whatsapp Line</h4>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed mb-5 font-sans">
                Prefer direct communication coordinates or have specific institutional alignment questions? Link up with our administrator immediately on WhatsApp:
              </p>

              <a 
                href="https://wa.me/14708125814" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center p-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-[#0D9488] hover:brightness-110 text-slate-950 font-extrabold text-xs tracking-wider uppercase transition-all shadow-md"
                id="whatsapp-direct-link"
              >
                <PhoneCall className="w-4 h-4 text-slate-950 stroke-[2.5] mr-2" />
                <span>Direct Chat: +1 (470) 812-5814</span>
              </a>
            </div>

            {/* Official resources URLs */}
            <div className="text-left font-sans">
              <span className="font-mono text-[9.5px] font-bold tracking-wider text-slate-500 uppercase block mb-3">OFFICIAL NETWORK GROUNDS:</span>
              <div className="grid grid-cols-1 gap-2.5 text-xs text-slate-400">
                <a 
                  href="https://chat.whatsapp.com/Cv5VheVyx0U91bIc8H0Vqi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4.5 rounded-xl bg-[#0c1524]/50 border border-slate-850 hover:border-[#14B8A6]/40 transition-all font-semibold"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-white">S-H WhatsApp Member Hub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-550" />
                </a>
                
                <a 
                  href="https://whatsapp.com/channel/0029VbCz7sK6mYPQwzf08t2w" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4.5 rounded-xl bg-[#0c1524]/50 border border-slate-850 hover:border-[#14B8A6]/40 transition-all font-semibold"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                    <span className="text-white">S-H Official Announcement Channel</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-550" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* ================= SUCCESS APPLICATION MODAL OVERLAY ================= */}
        <AnimatePresence>
          {submitSuccess && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="success-modal-title"
              id="success-modal-overlay"
            >
              
              {/* Backdrop overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={resetContactForm}
                className="absolute inset-0 bg-[#020509]/80 backdrop-blur-sm"
              />

              {/* Modal Window details */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative rounded-2xl w-full max-w-md overflow-hidden bg-[#0c1524] border border-slate-855 p-8 z-10 text-center shadow-2xl text-slate-200"
                id="contact-success-modal"
              >
                
                <div className="w-16 h-16 rounded-full bg-[#0D9488]/20 border border-[#0D9488]/30 flex items-center justify-center mx-auto mb-6 text-[#14B8A6]">
                  <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                </div>

                <span className="font-mono text-[9px] uppercase text-[#14B8A6] tracking-widest font-extrabold block mb-1">CANDIDATE ADMISSIONS LOGGED</span>
                <h3 id="success-modal-title" className="font-display font-extrabold text-white text-2xl mb-2">Registration Secured!</h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed mb-6 font-sans">
                  Excellent, <strong>{name}</strong>! Your transformative admissions file has successfully passed security gates and registered with your selected focus track.
                </p>

                {/* Priority queue number holder */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 text-center mb-6">
                  <span className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest font-extrabold">YOUR PRIORITY SYLLABUS ID:</span>
                  <strong className="block font-mono text-xl text-[#14B8A6] mt-1 tracking-widest">{queuePriority}</strong>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed mb-6 font-sans">
                  We have catalogued and queued your details. Our founder or a performance director will text you coordinates regarding introductory appointments inside 24 hours.
                </p>

                <button 
                  onClick={resetContactForm}
                  className="w-full py-4 bg-gradient-to-r from-emerald-400 to-[#0D9488] text-slate-950 font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all cursor-pointer hover:brightness-110"
                  id="success-return-button"
                >
                  Return to Admissions Portal
                </button>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
