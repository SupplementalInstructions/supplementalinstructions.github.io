import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Star, ArrowRight, ShieldCheck, CheckCircle, X, HeartHandshake, Smile, PhoneCall } from "lucide-react";
import { INITIAL_COACHES, Coach } from "../types";
import useSEO from "../hooks/useSEO";

export default function Coaching() {
  // Dynamic SEO indexing for coaching advisors
  useSEO({
    title: "Vested Performance Advisors & Peer Alignment — Advisors",
    description: "Supplemental Instruction registers and connects you with real, certified mentors who evaluate life log books, suggest curriculum reading materials, and guide you inside our WhatsApp circles.",
  });

  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
  
  // Keep track of the active coach being booked
  const [bookingCoach, setBookingCoach] = useState<Coach | null>(null);
  
  // Booking progress step
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const [userIntentionText, setUserIntentionText] = useState<string>("");

  // Handle Escape key closure & accessibility focus management
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeBookingModal();
      }
    };
    if (bookingCoach) {
      window.addEventListener("keydown", handleKeyDown);
      // Auto focus on select date input or the close trigger or default modal title
      setTimeout(() => {
        const targetElement = document.getElementById("select-booking-date") || document.getElementById("booking-modal-title");
        targetElement?.focus();
      }, 150);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [bookingCoach, bookingStep]);

  const specialtiesList = ["All", "Thrive Mode", "Reading Culture", "Alchemy Entrepreneurship", "Mental Wellness"];

  // Filter coaches based on specialty selection
  const filteredCoaches = selectedSpecialty === "All"
    ? INITIAL_COACHES
    : INITIAL_COACHES.filter(c => 
        c.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase())
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
    <div className="min-h-screen bg-[#060B13] text-slate-200 relative overflow-hidden" id="coaching-page-container">
      {/* Background soft lighting overlays */}
      <div className="absolute top-[30%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#0D9488]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-indigo-500/2 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 text-left" id="coaching-page-grid-layout">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#14B8A6] font-bold py-1.5 px-3.5 bg-[#0D9488]/15 border border-[#0D9488]/25 rounded-full">
            CERTIFIED PEER ADVISORS
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-4 mb-6" id="coaching-header-id">
            Vested Performance Advisors
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto font-sans">
            Supplemental Instruction LLC registers and connects you with real, certified mentors who evaluate your daily habits log books, suggest curriculum reading materials, and guide you inside our WhatsApp community circles.
          </p>
        </div>

        {/* ================= SPECIALTY FILTER BAR ================= */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="coaching-filters">
          {specialtiesList.map((spec) => {
            const isSelected = selectedSpecialty === spec;
            return (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-4 py-2.5 rounded-xl border text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#0d1626] border-[#14B8A6] text-[#14B8A6] shadow-lg shadow-teal-950/20 font-bold"
                    : "bg-slate-950/30 border-slate-850 text-slate-400 hover:bg-[#0d1626]/50 hover:border-slate-800"
                }`}
                id={`coach-filter-pill-${spec.replace(/\s+/g, "-")}`}
              >
                {spec}
              </button>
            );
          })}
        </div>

        {/* ================= THE COACHING DIRECTORY GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" id="coach-directory-lay">
          {filteredCoaches.map((coach) => (
            <div 
              key={coach.id}
              className="bg-[#0c1524]/40 rounded-2xl border border-slate-850 hover:border-[#14B8A6]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 relative group shadow-lg"
            >
              
              {/* Feature Badge overlay */}
              {coach.featured && (
                <span className="absolute top-4 right-4 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-slate-950 font-mono font-bold text-[9px] px-2.5 py-1 rounded-full uppercase tracking-widest z-10 shadow-md">
                  FOUNDER ADVISOR
                </span>
              )}

              {/* Card Profile Area */}
              <div>
                <div className="h-40 w-full bg-slate-950/60 flex items-center justify-center border-b border-slate-850 relative">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${coach.avatar} flex items-center justify-center font-display font-extrabold text-lg text-white shadow-2xl`}>
                    {coach.name.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>

                <div className="p-6">
                  {/* Rating line */}
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <div className="flex items-center text-amber-500 gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-bold text-slate-200">{coach.rating}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">({coach.studentsCount} candidates calibrated)</span>
                  </div>

                  <h3 className="font-display font-bold text-base text-white leading-tight mb-1">{coach.name}</h3>
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wide text-[#14B8A6] mb-4">{coach.specialty}</span>
                  
                  <p className="text-xs text-slate-350 leading-relaxed block mb-6 font-sans">
                    {coach.bio}
                  </p>
                </div>
              </div>

              {/* Price rate / Action bar */}
              <div className="p-6 pt-0 mt-auto border-t border-slate-850 bg-slate-950/40">
                <div className="flex items-center justify-between py-4 text-xs font-mono mb-2">
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase font-bold block">Advisory Rate:</span>
                    <strong className="block text-[#14B8A6] font-display text-sm mt-0.5">{coach.price}</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-cyan-400 text-[10px] font-bold block uppercase">Calendar Access:</span>
                    <strong className="block text-slate-300 font-bold text-[11px] mt-0.5">{coach.availability}</strong>
                  </div>
                </div>

                <button
                  onClick={() => startBooking(coach)}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-400 to-[#0D9488] hover:brightness-110 text-slate-950 font-extrabold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-emerald-950/10 hover:scale-[1.01]"
                  id={`book-button-coach-${coach.id}`}
                >
                  <span>Request Dynamic Session</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* ================= 4-STEP ALIGNED BOOKING ROADMAP ================= */}
        <div className="bg-[#0c1524]/40 rounded-3xl p-8 border border-slate-850/80 text-left mb-20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#14B8A6]/5 blur-[45px] pointer-events-none" />
          
          <h3 className="font-display font-extrabold text-white text-lg mb-6">Our Secure Advisory Alignment Steps</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-slate-450 leading-relaxed font-sans">
            <div>
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-[#14B8A6] flex items-center justify-center font-bold font-mono mb-3.5">01</div>
              <span className="block font-bold text-white mb-1">Audit Director Focus</span>
              <p className="text-[11px] text-slate-400">Compare advisors corresponding to sleep, reading, finance scale models, or Stoicism disciplines.</p>
            </div>
            
            <div>
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center font-bold font-mono mb-3.5">02</div>
              <span className="block font-bold text-white mb-1">Confirm Intake Time</span>
              <p className="text-[11px] text-slate-400">Choose dates on our dynamic scheduler. Summarize target roadblocks to let your advisor customize materials.</p>
            </div>

            <div>
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-amber-500 flex items-center justify-center font-bold font-mono mb-3.5">03</div>
              <span className="block font-bold text-white mb-1">Syllabus Synchronization</span>
              <p className="text-[11px] text-slate-400">Advisors message you via WhatsApp within 24 hours to schedule and initialize your custom handbook dispatch.</p>
            </div>

            <div>
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-purple-400 flex items-center justify-center font-bold font-mono mb-3.5">04</div>
              <span className="block font-bold text-white mb-1">Ongoing Accountability</span>
              <p className="text-[11px] text-slate-400">Discuss curriculum reviews inside WHATSAPP channels, keeping your streaks calibrated for accredited badge boosts.</p>
            </div>
          </div>
        </div>

        {/* ================= ACTIVE INTERACTIVE BOOKING WIZARD OVERLAY MODAL ================= */}
        <AnimatePresence>
          {bookingCoach && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              role="dialog"
              aria-modal="true"
              aria-labelledby="booking-modal-title"
              id="booking-modal-overlay"
            >
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={closeBookingModal}
                className="absolute inset-0 bg-[#020509]/80 backdrop-blur-sm"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative rounded-2xl w-full max-w-lg overflow-hidden bg-[#0c1524] border border-slate-850 p-6 md:p-8 z-10 shadow-2xl text-slate-200"
                id="booking-modal-holder"
              >
                
                {/* Close trigger */}
                <button
                  onClick={closeBookingModal}
                  className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  id="close-booking-modal-button"
                  aria-label="Close booking modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* MODAL COGNITIVE STEP 1 */}
                {bookingStep === 1 && (
                  <div>
                    <div className="flex items-center gap-3 border-b border-slate-855 pb-4 mb-6 text-left">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${bookingCoach.avatar} flex items-center justify-center font-mono font-bold text-xs text-white shrink-0`}>
                        {bookingCoach.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <span className="block text-[8.5px] uppercase font-mono tracking-widest text-[#14B8A6] font-extrabold">RESERVING INTRO INTENTION CALL</span>
                        <h4 id="booking-modal-title" className="font-display font-bold text-white text-base leading-none mt-0.5">{bookingCoach.name}</h4>
                      </div>
                    </div>

                    <p className="text-xs text-slate-350 leading-relaxed mb-6 text-left font-sans">
                      Establish consistency triggers with {bookingCoach.name}. Please select dates to schedule your 1-on-1 virtual calibration session:
                    </p>

                    <div className="space-y-4 text-left">
                      {/* Date Select */}
                      <div>
                        <label htmlFor="select-booking-date" className="block font-mono text-[9.5px] text-[#14B8A6] uppercase tracking-widest mb-2 font-bold cursor-pointer">1. CHOOSE AVAILABLE DATE:</label>
                        <select 
                          id="select-booking-date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-850 rounded-xl p-3 text-xs text-slate-100 focus:outline-none focus:border-[#14B8A6] cursor-pointer"
                        >
                          <option value="">-- Choose Calendar Date --</option>
                          <option value="2026-06-02">Tuesday, June 2, 2026</option>
                          <option value="2026-06-03">Wednesday, June 3, 2026</option>
                          <option value="2026-06-04">Thursday, June 4, 2026</option>
                        </select>
                      </div>

                      {/* Time slot select */}
                      <div>
                        <label htmlFor="select-booking-time" className="block font-mono text-[9.5px] text-[#14B8A6] uppercase tracking-widest mb-2 font-bold cursor-pointer">2. CHOOSE DESIRED SLOT (YOUR LOCAL TIME):</label>
                        <select 
                          id="select-booking-time"
                          value={selectedTimeSlot}
                          onChange={(e) => setSelectedTimeSlot(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-850 rounded-xl p-3 text-xs text-slate-100 focus:outline-none focus:border-[#14B8A6] cursor-pointer"
                        >
                          <option value="">-- Choose Time Slot --</option>
                          <option value="09:00 AM">09:00 AM - 10:00 AM EST</option>
                          <option value="11:30 AM">11:30 AM - 12:30 PM EST</option>
                          <option value="03:00 PM">03:00 PM - 04:00 PM EST</option>
                        </select>
                      </div>

                      {/* Intention roadblock */}
                      <div>
                        <label htmlFor="text-booking-intention" className="block font-mono text-[9.5px] text-slate-400 uppercase tracking-widest mb-1.5 font-bold cursor-pointer">3. DISCLOSURE ROADBLOCKS (OPTIONAL):</label>
                        <textarea
                          id="text-booking-intention"
                          rows={3}
                          value={userIntentionText}
                          onChange={(e) => setUserIntentionText(e.target.value)}
                          className="w-full bg-[#03070c] border border-slate-850 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#14B8A6] placeholder-slate-500 resize-none font-sans"
                          placeholder="Example: I struggle keeping a regular sleep rhythm..."
                        />
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-slate-850 flex gap-3 justify-end">
                      <button 
                        onClick={closeBookingModal}
                        className="px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 text-xs font-bold transition-colors cursor-pointer"
                        id="cancel-booking-flow"
                      >
                        Cancel
                      </button>
                      <button 
                        onClick={() => setBookingStep(2)}
                        disabled={!selectedDate || !selectedTimeSlot}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-[#0D9488] text-slate-950 font-extrabold text-xs tracking-wide cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                        id="submit-booking-step-1"
                      >
                        Verify details
                      </button>
                    </div>
                  </div>
                )}

                {/* MODAL COGNITIVE STEP 2 */}
                {bookingStep === 2 && (
                  <div className="text-left">
                    <div className="flex items-center gap-2 text-[#14B8A6] mb-4">
                      <HeartHandshake className="w-5 h-5" />
                      <span className="font-mono text-xs tracking-wider uppercase font-bold">STEP 2: ALLOCATION VERIFICATION</span>
                    </div>

                    <h4 className="font-display font-bold text-white text-base mb-2">Review Calibration Parameters</h4>
                    
                    <div className="p-4 bg-slate-950/60 border border-slate-855 rounded-xl space-y-3 mb-6 text-xs font-mono">
                      <div className="flex justify-between border-b border-slate-850 pb-2">
                        <span className="text-slate-400 font-bold">Advisory Advisor:</span>
                        <span className="text-white font-bold">{bookingCoach.name}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-850 pb-2">
                        <span className="text-slate-400 font-bold">Scheduled Date:</span>
                        <span className="text-white font-bold">{selectedDate}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-850 pb-2">
                        <span className="text-slate-400 font-bold">Target Slot:</span>
                        <span className="text-white font-bold">{selectedTimeSlot}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400 font-bold">Contribution Level:</span>
                        <span className="text-[#14B8A6] font-extrabold">{bookingCoach.price}</span>
                      </div>
                    </div>

                    <p className="text-[10.5px] text-slate-400 leading-relaxed mb-6 font-sans">
                      *Note: S-H doesn't capture financial payment cards directly online. An invitation coordinate link is delivered to your candidate waitlist folder within 24 hours. Your advisor will help calibrate your physical booklet dispatch during your initial intake zoom.
                    </p>

                    <div className="flex gap-3 justify-end pt-4 border-t border-slate-850">
                      <button 
                        onClick={() => setBookingStep(1)}
                        className="px-4 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-900 cursor-pointer"
                      >
                        Back
                      </button>
                      
                      <button 
                        onClick={executeBookingConfirmation}
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-[#0D9488] text-slate-950 font-extrabold text-xs tracking-wide cursor-pointer flex items-center gap-1.5 transition-all shadow-md shadow-emerald-950/10"
                        id="confirm-booking-wizard-cta"
                      >
                        <ShieldCheck className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                        <span>Confirm Slot Admissions</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* MODAL COGNITIVE STEP 3 */}
                {bookingStep === 3 && (
                  <div className="text-center py-6 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-[#0D9488]/20 border border-[#0D9488]/30 flex items-center justify-center mx-auto mb-6 text-[#14B8A6]">
                      <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                    </div>

                    <span className="font-mono text-[9px] uppercase text-[#14B8A6] tracking-widest font-extrabold block mb-1">INTAKE SEQUENCE SYNCED</span>
                    <h4 className="font-display font-bold text-white text-xl mb-3">Booking Successfully Requested!</h4>
                    
                    <p className="text-[11.5px] text-slate-300 max-w-sm mx-auto leading-relaxed mb-6 bg-[#0D9488]/15 border border-[#0D9488]/25 p-4 rounded-xl font-sans">
                      Calibration details secured. <strong>{bookingCoach?.name}</strong> has been notified of your focus roadmap and will text/email you direct coordinates inside 24 hours.
                    </p>

                    <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-500 mb-8 font-bold">
                      <Smile className="w-4 h-4 text-amber-500" />
                      <span>Prepare your workspace to receive your printed handbook guides.</span>
                    </div>

                    <button 
                      onClick={closeBookingModal}
                      className="px-8 py-3.5 bg-gradient-to-r from-emerald-400 to-[#0D9488] text-slate-950 font-extrabold rounded-xl text-xs tracking-wider uppercase cursor-pointer w-full hover:brightness-110 transition-all"
                      id="finish-booking-modal-button"
                    >
                      Return to Advisors Directory
                    </button>
                  </div>
                )}

              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Direct founder contact card on bottom */}
        <div className="p-8 rounded-3xl border border-slate-850 bg-slate-950/40 shadow-xl max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="font-display font-extrabold text-white text-lg mb-1">Direct Correspondence Line</h3>
            <p className="text-xs text-slate-400 font-sans leading-normal">
              Need immediate support or have personal enterprise inquiry coordinates? Message our founder on WhatsApp.
            </p>
          </div>
          
          <a 
            href="https://wa.me/14708125814" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-slate-950 font-extrabold text-xs tracking-wider uppercase shrink-0 flex items-center gap-2 cursor-pointer transition-all hover:scale-101"
          >
            <PhoneCall className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            <span>Chat: +1 (470) 812-5814</span>
          </a>
        </div>

      </div>
    </div>
  );
}
