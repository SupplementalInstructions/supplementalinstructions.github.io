import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Star, Calendar, DollarSign, ArrowRight, ShieldCheck, CheckCircle, Sparkles, X, HeartHandshake, Smile } from "lucide-react";
import { INITIAL_COACHES, Coach } from "../types";

export default function Coaching() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
  
  // Keep track of the active coach being booked
  const [bookingCoach, setBookingCoach] = useState<Coach | null>(null);
  
  // Booking progress step
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [userIntentionText, setUserIntentionText] = useState<string>("");

  const specialtiesList = ["All", "Cognitive Performance", "SaaS Systems & Finance", "Stoic Resilience & Discipline", "Spiritual Alignment"];

  // Filter coaches based on selection keyword
  const filteredCoaches = selectedSpecialty === "All"
    ? INITIAL_COACHES
    : INITIAL_COACHES.filter(c => 
        c.specialty.toLowerCase().includes(selectedSpecialty.split(" ")[0].toLowerCase()) ||
        c.specialty.toLowerCase().includes(selectedSpecialty.split(" ")[1]?.toLowerCase())
      );

  const startBooking = (coach: Coach) => {
    setBookingCoach(coach);
    setBookingStep(1);
    setSelectedDate("");
    setSelectedTimeSlot("");
    setUserIntentionText("");
  };

  const closeBookingModal = () => {
    setBookingCoach(null);
  };

  const executeBookingConfirmation = () => {
    setBookingStep(3); // Success Screen
  };

  return (
    <div className="min-h-screen bg-[#08111F] text-[#F8FAFC] relative overflow-hidden" id="coaching-page-container">
      {/* Background radial effects */}
      <div className="absolute top-[30%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#00D1FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-[#2ECC71]/3 blur-[120px] pointer-events-none" />
      {/* Smooth top-lit ambient glow overlay */}
      <div className="absolute inset-x-0 top-0 h-[100vh] bg-grid-pattern opacity-80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 text-left" id="coaching-page-grid-layout">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00D1FF] font-bold">
            CERTIFIED SYSTEM GUIDES
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-3 mb-6" id="coaching-header-id">
            Certified Performance Architects
          </h1>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Supplemental Instruction recruits and certifies highly qualified mentors who verify your laboratory output checklists, calibrate trackers, and maintain extreme standard guidelines.
          </p>
        </div>

        {/* ================= SPECIALTY MENTOR FILTER TAB BAR ================= */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="coaching-filters">
          {specialtiesList.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-4 py-2 rounded-lg border text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedSpecialty === spec
                  ? "bg-[#0D1B2A] border-[#00D1FF] text-[#00D1FF]"
                  : "bg-white/[0.02] border-white/5 text-[#94A3B8] hover:bg-white/5"
              }`}
              id={`coach-filter-pill-${spec.replace(/\s+/g, "-")}`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* ================= THE COACHING CARDS DIRECTORY ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" id="coach-directory-lay">
          {filteredCoaches.map((coach) => (
            <div 
              key={coach.id}
              className="glass-panel rounded-2xl border border-white/5 hover:border-[#00D1FF]/30 bg-[#0D1B2A]/30 overflow-hidden flex flex-col justify-between transition-all duration-300 relative group"
            >
              
              {/* Feature Badge overlay */}
              {coach.featured && (
                <span className="absolute top-4 right-4 bg-gradient-to-r from-[#00D1FF] to-[#2ECC71] text-black font-semibold font-mono text-[9px] px-2 py-0.5 rounded uppercase tracking-widest z-10">
                  TOP INTELLECT
                </span>
              )}

              {/* Card Profile Area */}
              <div>
                <div className="h-40 w-full bg-gradient-to-br from-[#0D1B2A] to-[#050B14] flex items-center justify-center border-b border-white/5 relative">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${coach.avatar} flex items-center justify-center font-display font-extrabold text-lg text-white shadow-xl shadow-black/30`}>
                    {coach.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>

                <div className="p-6">
                  {/* Rating line */}
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <div className="flex items-center text-amber-400 gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-bold text-white">{coach.rating}</span>
                    </div>
                    <span className="text-[10px] text-[#94A3B8]">({coach.studentsCount} candidates certified)</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white leading-tight mb-1">{coach.name}</h3>
                  <span className="block text-xs font-mono font-medium text-[#2ECC71] mb-4 h-8 overflow-hidden">{coach.specialty}</span>
                  
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6 block h-14 overflow-hidden">
                    {coach.bio}
                  </p>
                </div>
              </div>

              {/* Price rate / Action bar */}
              <div className="p-6 pt-0 mt-auto border-t border-white/5 bg-black/10">
                <div className="flex items-center justify-between py-4 text-xs font-mono mb-2">
                  <div className="text-[#94A3B8]">
                    <span>Rate / Session:</span>
                    <strong className="block text-white font-display text-sm mt-0.5">{coach.price}</strong>
                  </div>
                  <div className="text-right text-[#94A3B8]">
                    <span>System Availability:</span>
                    <strong className="block text-emerald-400 font-medium text-[11px] mt-1">{coach.availability}</strong>
                  </div>
                </div>

                <button
                  onClick={() => startBooking(coach)}
                  className="w-full py-3 bg-white/5 hover:bg-[#00D1FF] hover:text-black font-bold text-xs tracking-wide rounded-lg flex items-center justify-center gap-2 border border-white/10 hover:border-transparent transition-all cursor-pointer"
                  id={`book-button-coach-${coach.id}`}
                >
                  <span>Book Initial Calibrations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* ================= REUSABLE EXPLANATORY BOOKING FLOW ROADMAP AREA ================= */}
        <div className="glass-panel rounded-2xl p-8 border border-white/5 text-left mb-20 bg-gradient-to-b from-[#0D1B2A]/40 to-[#050B14]">
          <h3 className="font-display font-semibold text-xl text-white mb-6">The Multi-Step Certified Booking Method</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-[#94A3B8] leading-relaxed">
            <div>
              <div className="w-8 h-8 rounded bg-[#00D1FF]/10 text-[#00D1FF] flex items-center justify-center font-bold font-mono mb-3">01</div>
              <span className="block font-semibold text-white mb-1">Discover Coach Specialities</span>
              <p className="text-[11px]">Audit active specialities such as neuroscience habit architecture or compound finance and choose your architect.</p>
            </div>
            
            <div>
              <div className="w-8 h-8 rounded bg-[#2ECC71]/10 text-[#2ECC71] flex items-center justify-center font-bold font-mono mb-3">02</div>
              <span className="block font-semibold text-white mb-1">Book Integration Session</span>
              <p className="text-[11px]">Select open slot dates. Outline your current roadblocks so your advisor can prepare customized parameters list.</p>
            </div>

            <div>
              <div className="w-8 h-8 rounded bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold font-mono mb-3">03</div>
              <span className="block font-semibold text-white mb-1">Receive Initial Message</span>
              <p className="text-[11px]">Advisors message you directly inside 24 hours to schedule and initialize your physical program booklet dispatch.</p>
            </div>

            <div>
              <div className="w-8 h-8 rounded bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold font-mono mb-3">04</div>
              <span className="block font-semibold text-white mb-1">Continuous Feedback Hub</span>
              <p className="text-[11px]">Submit weekly metrics check-ins. Your advisor evaluates streak progress scores to allocate bonuses.</p>
            </div>
          </div>
        </div>

        {/* ================= ACTIVE INTERACTIVE BOOKING WIZARD OVERLAY MODAL ================= */}
        <AnimatePresence>
          {bookingCoach && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Dark backdrop overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                onClick={closeBookingModal}
                className="absolute inset-0 bg-[#050B14]/90 backdrop-blur-sm"
              />

              {/* The Modal Window details */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative glass-panel rounded-2xl w-full max-w-lg overflow-hidden bg-gradient-to-b from-[#0D1B2A] to-[#08111F] border border-white/10 p-6 md:p-8 z-10 shadow-2xl"
                id="booking-modal-holder"
              >
                
                {/* Close Trigger Button */}
                <button
                  onClick={closeBookingModal}
                  className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/5 text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                  id="close-booking-modal-button"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* MODAL COGNITIVE STEP 1: Date, slot and road blocks */}
                {bookingStep === 1 && (
                  <div>
                    <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${bookingCoach.avatar} flex items-center justify-center font-mono font-bold text-xs text-white shrink-0`}>
                        {bookingCoach.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="text-left">
                        <span className="block text-[10px] uppercase font-mono tracking-widest text-[#00D1FF] font-bold">RESERVING MENTOR DIRECTORY</span>
                        <h4 className="font-display font-bold text-white text-base leading-none mt-0.5">{bookingCoach.name}</h4>
                      </div>
                    </div>

                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-6 text-left">
                      Great selection. Please select dates to schedule your 1-on-1 virtual laboratory intake meeting:
                    </p>

                    <div className="space-y-4 text-left">
                      {/* Date Select */}
                      <div>
                        <label className="block font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider mb-2">1. SELECT AVAILABLE DATE:</label>
                        <select 
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-[#00D1FF]"
                          id="select-booking-date"
                        >
                          <option value="">-- Choose Calendar Date --</option>
                          <option value="2026-05-26">Tuesday, May 26, 2026</option>
                          <option value="2026-05-27">Wednesday, May 27, 2026</option>
                          <option value="2026-05-28">Thursday, May 28, 2026</option>
                        </select>
                      </div>

                      {/* Time slot select */}
                      <div>
                        <label className="block font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider mb-2">2. CHOOSE CORRESPONDING TIME SLOT:</label>
                        <select 
                          value={selectedTimeSlot}
                          onChange={(e) => setSelectedTimeSlot(e.target.value)}
                          className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-[#00D1FF]"
                          id="select-booking-time"
                        >
                          <option value="">-- Choose Slot (Your Local Time) --</option>
                          <option value="09:00 AM">09:00 AM - 10:00 AM EST</option>
                          <option value="11:30 AM">11:30 AM - 12:30 PM EST</option>
                          <option value="03:00 PM">03:00 PM - 04:00 PM EST</option>
                        </select>
                      </div>

                      {/* Roadblocks outline input */}
                      <div>
                        <label className="block font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider mb-2">3. OUTLINE FOCUS ROADBLOCKS (OPTIONAL):</label>
                        <textarea
                          rows={3}
                          value={userIntentionText}
                          onChange={(e) => setUserIntentionText(e.target.value)}
                          className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-[#00D1FF] placeholder-[#94A3B8]/30 resize-none"
                          placeholder="Example: I struggle with consistency..."
                          id="text-booking-intention"
                        />
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/5 flex gap-3.5 justify-end">
                      <button 
                        onClick={closeBookingModal}
                        className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-white cursor-pointer"
                        id="cancel-booking-flow"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={() => setBookingStep(2)}
                        disabled={!selectedDate || !selectedTimeSlot}
                        className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#00D1FF] to-[#2ECC71] text-black font-extrabold text-xs tracking-wide cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        id="submit-booking-step-1"
                      >
                        Proceed to confirmation
                      </button>
                    </div>
                  </div>
                )}

                {/* MODAL COGNITIVE STEP 2: Pre-execution pricing details */}
                {bookingStep === 2 && (
                  <div className="text-left">
                    <div className="flex items-center gap-2.5 text-[#00D1FF] mb-4">
                      <HeartHandshake className="w-5 h-5" />
                      <span className="font-mono text-xs tracking-wider uppercase font-bold">STEP 2: CONFIRM PARAMETERS</span>
                    </div>

                    <h4 className="font-display font-bold text-white text-lg mb-2">Review Your Intake Parameters</h4>
                    
                    <div className="p-4 bg-black/40 border border-white/5 rounded-xl space-y-3 mb-6 text-xs font-mono">
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-[#94A3B8]">Selected Architect:</span>
                        <span className="text-white font-semibold">{bookingCoach.name}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-[#94A3B8]">Scheduled Date:</span>
                        <span className="text-white font-semibold">{selectedDate}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-[#94A3B8]">Selected Time Slot:</span>
                        <span className="text-white font-semibold">{selectedTimeSlot}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#94A3B8]">Session Cost:</span>
                        <span className="text-[#2ECC71] font-bold">{bookingCoach.price}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#94A3B8] leading-relaxed mb-6">
                      *Note: No upfront payment is processed. An invitation link with access keys is synchronized to your registered candidate profile folder inside 24 hours. Your advisor will calibrate your booklet triggers directly upon intake conclusion.
                    </p>

                    <div className="flex gap-3 justify-end pt-4 border-t border-white/10">
                      <button 
                        onClick={() => setBookingStep(1)}
                        className="px-4 py-2 rounded-lg bg-white/5 text-xs text-white"
                      >
                        Back
                      </button>
                      
                      <button 
                        onClick={executeBookingConfirmation}
                        className="px-6 py-2.5 rounded-lg bg-[#2ECC71] text-black font-extrabold text-xs tracking-wide cursor-pointer flex items-center gap-1.5"
                        id="confirm-booking-wizard-cta"
                      >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Confirm Intake Session</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* MODAL COGNITIVE STEP 3: Booking Success */}
                {bookingStep === 3 && (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-6 text-emerald-400 glow-green">
                      <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                    </div>

                    <span className="font-mono text-[10px] uppercase text-[#2ECC71] tracking-widest font-bold block mb-1">INTAKE SEQUENCE ALLOCATED</span>
                    <h4 className="font-display font-bold text-white text-2xl mb-3">Intake Successfully Reserved!</h4>
                    
                    <p className="text-xs text-[#94A3B8] max-w-sm mx-auto leading-relaxed mb-6 bg-[#00D1FF]/5 border border-[#00D1FF]/10 p-3.5 rounded-xl">
                      We have logged your selection, candidate. <strong>{bookingCoach?.name}</strong> has been notified of your focus roadmap and will transmit direct scheduling instructions within 24 hours.
                    </p>

                    <div className="flex items-center justify-center gap-2 text-xs font-mono text-white/50 mb-8">
                      <Smile className="w-4 h-4 text-amber-400" />
                      <span>Prepare your workstation for automated growth loops!</span>
                    </div>

                    <button 
                      onClick={closeBookingModal}
                      className="px-8 py-3 bg-gradient-to-r from-[#00D1FF] to-[#2ECC71] text-black font-extrabold rounded-xl text-xs tracking-wide cursor-pointer w-full sm:w-auto hover:grayscale-20"
                      id="finish-booking-modal-button"
                    >
                      Return to Directory
                    </button>
                  </div>
                )}

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
