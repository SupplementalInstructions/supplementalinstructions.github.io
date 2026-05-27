/**
 * Supplemental Instruction — Your Personal Growth Laboratory
 */

import { useEffect, useState } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Coaching from "./pages/Coaching";
import Rewards from "./pages/Rewards";
import Contact from "./pages/Contact";
import { 
  MessageSquare, 
  X, 
  Users, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Automatically scrolls window to top when navigating routes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Floating WhatsApp and Community Accountability Widget
function FloatingCommunityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasScrolled) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="floating-social-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="w-80 md:w-96 rounded-2xl border border-white/10 bg-[#0D1B2A]/90 p-5 md:p-6 shadow-2xl backdrop-blur-xl mb-4 text-left relative overflow-hidden"
          >
            {/* Visual Mesh inside float */}
            <div className="absolute top-[-30%] right-[-10%] w-40 h-40 rounded-full bg-[#00D1FF]/10 blur-[35px] pointer-events-none" />
            <div className="absolute bottom-[-35%] left-[-10%] w-40 h-40 rounded-full bg-[#2ECC71]/10 blur-[35px] pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#2ECC71]/10 flex items-center justify-center text-[#2ECC71] border border-[#2ECC71]/20">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-medium text-white text-sm">Ecosystem Accountability</h4>
                  <span className="text-[10px] font-mono text-[#2ECC71] font-bold block leading-none mt-0.5">● 1,240+ MEMBERS ONLINE</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white p-1 rounded-full hover:bg-white/5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
              Supplemental Instruction isn't just an app—it's a living movement. Join active chat channels, find micro-streaking partners, share real-time progress screenshots, and keep your commitments locked.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-left">
                <span className="block text-[8px] font-mono text-[#94A3B8] uppercase">Completed Sprints</span>
                <span className="block font-display font-bold text-sm text-white mt-0.5">48,251 Cycles</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-left">
                <span className="block text-[8px] font-mono text-[#94A3B8] uppercase">Intake Channels</span>
                <span className="block font-display font-bold text-sm text-[#2ECC71] mt-0.5">WhatsApp Active</span>
              </div>
            </div>

            {/* Action Targets */}
            <div className="space-y-2">
              <a 
                href="https://wa.me/254700000000" // Simulated premium WhatsApp community invite
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#2ECC71] hover:bg-[#2ECC71]/90 text-[#08111F] font-bold rounded-xl text-xs tracking-wide flex items-center justify-center gap-2 transition-all transition-transform duration-200 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Join WhatsApp Accountability Space</span>
              </a>

              <a 
                href="https://t.me" // Public Telegram group placeholder
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/5 text-white font-bold rounded-xl text-xs tracking-wide flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00D1FF]" />
                <span>Join Global Telegram Channel</span>
              </a>
            </div>

            <div className="mt-3 text-center">
              <span className="text-[9px] font-mono text-[#94A3B8]/60 leading-none">
                Direct peer invitations are delivered upon waitlist registry.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 py-3.5 rounded-full bg-[#0D1B2A] border border-[#2ECC71]/40 hover:border-[#2ECC71] text-[#2ECC71] hover:text-white font-bold text-xs tracking-wider flex items-center gap-2.5 shadow-2xl shadow-[#2ECC71]/10 flex-row relative select-none"
        id="trigger-social-float-button"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <MessageSquare className="w-4 h-4 text-[#2ECC71]" />
        <span>Ecosystem Assist</span>
        {/* Simple Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-1.5 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 font-mono text-[8px] font-extrabold text-white animate-pulse">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#08111F] text-white selection:bg-[#00D1FF]/30 selection:text-white relative overflow-hidden" id="laboratory-app-shell">
        
        {/* Soft atmospheric gradient glows instead of excessive dot grids */}
        <div className="absolute top-[-5%] right-[-5%] w-[45rem] h-[45rem] rounded-full bg-[radial-gradient(circle,rgba(0,209,255,0.08)_0%,transparent_65%)] pointer-events-none blur-[60px]" />
        <div className="absolute bottom-[15%] left-[-10%] w-[55rem] h-[55rem] rounded-full bg-[radial-gradient(circle,rgba(46,204,113,0.06)_0%,transparent_65%)] pointer-events-none blur-[80px]" />
        <div className="absolute top-[35%] left-[15%] w-[45rem] h-[45rem] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.03)_0%,transparent_65%)] pointer-events-none blur-[100px]" />
        
        {/* Sleek top-lit atmospheric soft light glow aura */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-grid-pattern" />

        {/* Sticky Header Nav */}
        <Navbar />

        {/* Dynamic Route View outlet */}
        <main className="flex-grow scroll-smooth" id="laboratory-router-viewport">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Interactive social & support assistant floating globally */}
        <FloatingCommunityWidget />

        {/* Brand Footer Signature */}
        <Footer />
        
      </div>
    </HashRouter>
  );
}
