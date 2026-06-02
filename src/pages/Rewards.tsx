import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Award, 
  Flame, 
  Target, 
  Coins, 
  QrCode, 
  CheckCircle, 
  ShoppingBag
} from "lucide-react";
import { 
  INITIAL_BADGES, 
  INITIAL_CERTIFICATES, 
  Badge, 
  NFTCertificate 
} from "../types";
import useSEO from "../hooks/useSEO";

export default function Rewards() {
  useSEO({
    title: "Gamified Habit Badges & Milestones — Rewards Hub",
    description: "Review your active growth badges, verified Stoic study milestones, and redeemable certificates built to keep you focused on your target metrics.",
  });

  // Stats
  const [userXP, setUserXP] = useState<number>(650);
  const [userStreaks, setUserStreaks] = useState<number>(12);
  const [unlockedBadges] = useState<Badge[]>(INITIAL_BADGES);
  const [selectedNFT, setSelectedNFT] = useState<NFTCertificate>(INITIAL_CERTIFICATES[0]);

  // Premium store items list for using accumulated points
  const [storeItems, setStoreItems] = useState([
    { id: "s1", name: "S-H Sovereign Member Medal Pin (Shipped)", cost: 200, icon: "🎖️", stock: 12, redeemed: false },
    { id: "s2", name: "Structured Travel Financial Ledger (Print Copy)", cost: 350, icon: "📓", stock: 8, redeemed: false },
    { id: "s3", name: "Curated Present-Focus Bookmarks pack", cost: 150, icon: "🔖", stock: 24, redeemed: false }
  ]);

  const [notification, setNotification] = useState<string | null>(null);

  const redeemStoreItem = (itemId: string, cost: number) => {
    if (userXP < cost) {
      triggerNotification("❌ Error: Insufficient consistency XP points logged.");
      return;
    }

    setUserXP(prev => prev - cost);
    setStoreItems(prev => prev.map(item => 
      item.id === itemId ? { ...item, redeemed: true, stock: item.stock - 1 } : item
    ));
    triggerNotification(`🎉 Success! Redeemed: ${storeItems.find(i => i.id === itemId)?.name}`);
  };

  const triggerNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  const incrementDailyStreakTester = () => {
    setUserStreaks(prev => prev + 1);
    setUserXP(prev => prev + 15);
    triggerNotification("🔥 Daily Check-In Calibrated! +15 XP Granted.");
  };

  return (
    <div className="min-h-screen bg-[#060B13] text-slate-200 relative overflow-hidden" id="rewards-page-container">
      {/* Delicate background curves */}
      <div className="absolute top-[25%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-[#0D9488]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-indigo-500/1 blur-[140px] pointer-events-none" />

      {/* Floating alert notification modal */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl border border-[#14B8A6]/30 bg-slate-900 shadow-2xl text-xs font-mono font-bold tracking-wide text-white"
            id="floating-notification-widget"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 text-left" id="rewards-workspace">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#14B8A6] font-bold">
            THE ACCREDITATION HUD
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-3 mb-6" id="rewards-heading">
            Sovereign XP & Milestones
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto font-sans">
            Every daily consistency routine, physical log entry, and reading circle discussion registered on-grid accrues XP points to order physical assets or claim diplomas.
          </p>
        </div>

        {/* ================= STATS PANEL ROW ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* XP BALANCE */}
          <div className="premium-card p-6 rounded-2xl bg-[#0c1524]/40 border border-slate-850 flex flex-col justify-between shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="font-mono text-[9px] uppercase text-slate-500 tracking-widest font-extrabold">ACCUMULATED BALANCE</span>
                <h3 className="font-display font-extrabold text-3xl text-white mt-1">{userXP} XP</h3>
              </div>
              <div className="p-3 bg-teal-500/10 rounded-xl border border-[#0D9488]/20 text-[#14B8A6]">
                <Coins className="w-5 h-5 animate-pulse" />
              </div>
            </div>
            
            <div className="border-t border-slate-850 pt-4 text-[10px] font-mono text-slate-400 flex justify-between font-bold">
              <span>Next Core Voucher: <strong className="text-slate-350">1000 XP</strong></span>
              <span className="text-[#14B8A6]">Active Candidate</span>
            </div>
          </div>

          {/* DAILY CHECK-IN STREAK */}
          <div className="premium-card p-6 rounded-2xl bg-[#0c1524]/40 border border-slate-850 flex flex-col justify-between shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="font-mono text-[9px] uppercase text-slate-500 tracking-widest font-extrabold">CONSISTENCY STREAK</span>
                <h3 className="font-display font-extrabold text-3xl text-white mt-1">{userStreaks} Days</h3>
              </div>
              <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-400">
                <Flame className="w-5 h-5" />
              </div>
            </div>

            <div className="border-t border-slate-850 pt-3 flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-slate-450">Multiplier: <strong className="text-slate-350">1.5x active</strong></span>
              <button
                onClick={incrementDailyStreakTester}
                className="px-3 py-1.5 text-[9px] font-mono uppercase bg-slate-950 border border-slate-850 hover:border-slate-705 rounded-lg font-bold text-slate-300 hover:text-white cursor-pointer transition-colors"
                id="streaks-test-button"
              >
                ⚡ TEST CHECK-IN
              </button>
            </div>
          </div>

          {/* ACCURACY RATING */}
          <div className="premium-card p-6 rounded-2xl bg-[#0c1524]/40 border border-slate-850 flex flex-col justify-between shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="font-mono text-[9px] uppercase text-slate-500 tracking-widest font-extrabold">CALIBRATION INDEX</span>
                <h3 className="font-display font-extrabold text-3xl text-[#14B8A6] mt-1">94.8%</h3>
              </div>
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
                <Target className="w-5 h-5" />
              </div>
            </div>

            <div className="border-t border-slate-850 pt-4 text-[10px] font-mono text-slate-400 font-bold">
              <span>Sustained across latest 15 physical submissions</span>
            </div>
          </div>

        </div>

        {/* ================= REDEMPTION STORE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
          
          {/* Shipped physical products lists (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4 text-white">
              <ShoppingBag className="w-5 h-5 text-[#14B8A6]" />
              <h2 className="font-display font-extrabold text-xl sm:text-2xl">Acquisition Voucher Registry</h2>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed font-sans">
              Have you compiled sufficient consistency multipliers on-grid? Redeem your XP points below to order custom printed materials and crafted assets:
            </p>

            <div className="space-y-4" id="rewards-store-list">
              {storeItems.map((item) => (
                <div 
                  key={item.id}
                  className="p-4 rounded-2xl border border-slate-850 bg-[#0c1524]/40 hover:border-slate-800 flex items-center justify-between transition-all shadow-md"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-850 flex items-center justify-center text-xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-white">{item.name}</h4>
                      <span className="font-mono text-[9px] text-slate-500 block mt-1 uppercase tracking-wider font-extrabold">
                        Vested Stock: {item.stock} items remaining
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#14B8A6] bg-[#0D9488]/15 border border-[#0D9488]/25 px-2.5 py-1 rounded-full shrink-0">
                      {item.cost} XP
                    </span>
                    <button
                      onClick={() => redeemStoreItem(item.id, item.cost)}
                      disabled={item.redeemed || userXP < item.cost}
                      className={`px-4 py-2 rounded-xl font-extrabold text-xs tracking-wider transition-all cursor-pointer shrink-0 ${
                        item.redeemed 
                          ? "bg-slate-900 text-slate-300 border border-slate-800" 
                          : "bg-gradient-to-r from-emerald-400 to-[#0D9488] text-slate-950 hover:brightness-110 disabled:opacity-45"
                      }`}
                      id={`redeem-store-button-${item.id}`}
                    >
                      {item.redeemed ? "Claimed ✓" : "Redeem Item"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges Portfolio (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Award className="w-5 h-5 text-[#14B8A6]" />
              <h2 className="font-display font-extrabold text-xl sm:text-2xl">Accredited Badge Portfolio</h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed font-sans">
              Achievement records verifying your resilience levels, directly published to your profile:
            </p>

            <div className="bg-slate-950/40 rounded-2xl p-5 border border-slate-850 space-y-4">
              {unlockedBadges.map((badge) => {
                const isUnlocked = badge.unlockedAt !== null;
                return (
                  <div 
                    key={badge.id}
                    className={`p-4 rounded-xl border text-left flex items-start gap-4 transition-all ${
                      isUnlocked 
                        ? "bg-[#0c1524]/60 border-[#14B8A6]/20 shadow-sm" 
                        : "bg-[#0b121f]/30 border-slate-900 opacity-45"
                    }`}
                  >
                    <div className={`p-2 rounded-lg shrink-0 ${isUnlocked ? "bg-[#0D9488]/15 text-[#14B8A6]" : "bg-slate-900 text-slate-500"}`}>
                      {badge.iconType === "fire" ? <Flame className="w-5 h-5" /> : badge.iconType === "shield" ? <CheckCircle className="w-5 h-5 fill-transparent text-[#14B8A6]" /> : <Award className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-xs text-white flex items-center gap-1.5 flex-wrap">
                        <span>{badge.title}</span>
                        {isUnlocked && <span className="text-[9.5px] font-mono text-[#14B8A6] font-bold">★ VERIFIED MASTER</span>}
                      </h4>
                      <p className="text-[10.5px] text-slate-400 mt-1 leading-normal font-sans">{badge.description}</p>
                      <span className="block text-[8.5px] font-mono text-slate-500 mt-2 font-bold uppercase tracking-wider">
                        {isUnlocked ? `Calibrated: ${badge.unlockedAt}` : `Requirement: ${badge.requirement}`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ================= PLATFORM REWARD SLIDESHOWS ================= */}
        <div className="mb-24">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#14B8A6] font-bold">
              VERIFIED RESUME ENDORSEMENTS
            </span>
            <h2 className="font-display font-extrabold text-3xl text-white mt-2">
              Diplomas & Professional Transcripts
            </h2>
            <p className="text-xs text-slate-400 mt-2 font-sans">
              Select an endorsed discipline credential below to view its verified registration records dynamically:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left side Buttons selector list (5 cols) */}
            <div className="lg:col-span-5 space-y-2.5" id="nft-certificates-list">
              {INITIAL_CERTIFICATES.map((cert) => {
                const isSelected = selectedNFT.id === cert.id;
                return (
                  <button
                    key={cert.id}
                    onClick={() => setSelectedNFT(cert)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected 
                        ? "bg-[#0d1626] border-[#14B8A6] shadow-lg shadow-teal-950/20 text-[#14B8A6] font-bold" 
                        : "bg-[#0c1524]/20 border-slate-850 text-slate-400 hover:bg-[#0d1626]/50"
                    }`}
                    id={`nft-cert-selector-button-${cert.id}`}
                  >
                    <span className="font-mono text-[9px] text-[#14B8A6] tracking-wider uppercase font-bold">ACCREDITED DIPLOMA</span>
                    <h4 className={`font-display font-bold text-sm mt-1 ${isSelected ? "text-white" : "text-slate-300"}`}>{cert.title}</h4>
                    <span className="block font-mono text-[9px] text-slate-550 mt-1">S-H Registration: {cert.hash}</span>
                  </button>
                );
              })}
            </div>

            {/* Right side Certificate display transcript card (7 cols) */}
            <div className="lg:col-span-7" id="nft-certificate-mock-card">
              <div className="relative p-8 rounded-2xl bg-[#0c1524]/50 border border-slate-850 shadow-2xl overflow-hidden text-left">
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#14B8A6] to-transparent" />
                
                <div className="flex justify-between items-start border-b border-slate-850 pb-5 mb-6">
                  <div>
                    <span className="font-mono text-[9px] text-[#14B8A6] tracking-widest font-extrabold uppercase">SUPPLEMENTAL INSTRUCTION DISCIPLINE ACCREDITING INDEX</span>
                    <h3 className="font-display font-extrabold text-base text-white mt-1">{selectedNFT.title}</h3>
                  </div>
                  <div className="p-2.5 bg-slate-950 border border-slate-850 rounded-xl shrink-0">
                    <QrCode className="w-10 h-10 text-[#14B8A6]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 text-xs font-mono">
                  <div>
                    <span className="text-slate-500 block text-[9.5px] uppercase font-bold">RECIPIENT CALIBRATION ID</span>
                    <span className="text-slate-100 font-extrabold block mt-1">{selectedNFT.recipient}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[9.5px] uppercase font-bold">REGISTRY DATE</span>
                    <span className="text-slate-100 font-extrabold block mt-1">{selectedNFT.issueDate}</span>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-slate-500 block text-[9.5px] uppercase font-bold">DIPLOMA BLOCK HASH</span>
                    <span className="text-[#14B8A6] font-extrabold block mt-1">{selectedNFT.hash}</span>
                  </div>
                </div>

                {/* Skills list */}
                <div className="mb-6">
                  <span className="font-mono text-[9px] text-slate-500 tracking-wider uppercase block mb-2.5 font-extrabold">ACCREDITED EX-SKILLS:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedNFT.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded bg-[#0D9488]/15 border border-[#0D9488]/25 text-[10px] font-mono text-[#14B8A6] font-bold"
                      >
                        ✔ {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Audit verification tag */}
                <div className="flex items-center gap-2.5 p-3.5 bg-slate-950/50 border border-slate-850 rounded-xl text-[10px] font-mono text-slate-450 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-emerald-450 shrink-0" />
                  <span>Credential record audits verified by senior S-H directors upon completion of booklet logs discuss. </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
