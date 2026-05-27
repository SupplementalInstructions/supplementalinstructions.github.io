import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Award, 
  Flame, 
  Target, 
  ShieldAlert, 
  ChevronRight, 
  Coins, 
  QrCode, 
  Blocks, 
  HelpCircle, 
  Sparkles, 
  CheckCircle, 
  ShoppingBag,
  Zap
} from "lucide-react";
import { 
  INITIAL_BADGES, 
  INITIAL_CERTIFICATES, 
  Badge, 
  NFTCertificate 
} from "../types";

export default function Rewards() {
  // Gamified states
  const [userXP, setUserXP] = useState<number>(650);
  const [userStreaks, setUserStreaks] = useState<number>(12);
  const [unlockedBadges, setUnlockedBadges] = useState<Badge[]>(INITIAL_BADGES);
  const [selectedNFT, setSelectedNFT] = useState<NFTCertificate>(INITIAL_CERTIFICATES[0]);

  // Mock Store item list for spending XP points
  const [storeItems, setStoreItems] = useState([
    { id: "s1", name: "Alpha Candidate Metal Pin (Shipped)", cost: 200, icon: "🎖️", stock: 12, redeemed: false },
    { id: "s2", name: "SaaS Finance Tracking Sheet (Digital Copy)", cost: 350, icon: "📊", stock: 99, redeemed: false },
    { id: "s3", name: "Rigid Cognitive Focus Booklet Buffer", cost: 500, icon: "📓", stock: 3, redeemed: false }
  ]);

  const [notification, setNotification] = useState<string | null>(null);

  const redeemStoreItem = (itemId: string, cost: number) => {
    if (userXP < cost) {
      triggerNotification("❌ Error: Insufficient laboratory XP points available.");
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
    triggerNotification("🔥 Daily Streak Calibrated! +15 XP Granted.");
  };

  return (
    <div className="min-h-screen bg-[#08111F] text-[#F8FAFC] relative overflow-hidden" id="rewards-page-container">
      {/* Background glow structures */}
      <div className="absolute top-[25%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-[#00D1FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#2ECC71]/3 blur-[140px] pointer-events-none" />
      {/* Smooth top-lit ambient glow overlay */}
      <div className="absolute inset-x-0 top-0 h-[100vh] bg-grid-pattern opacity-80 pointer-events-none" />

      {/* Floating success notification widget */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl border border-white/10 bg-black/85 backdrop-blur-md shadow-2xl text-xs font-mono font-semibold tracking-wide text-[#00D1FF]"
            id="floating-notification-widget"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 z-10 text-left" id="rewards-workspace">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#2ECC71] font-bold">
            THE GAMIFICATION SYSTEM
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mt-3 mb-6" id="rewards-heading">
            XP Points & Growth Rewards
          </h1>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            Every focus task completed, cardio run logged, and value savings compound achieved compiles virtual XP into your secure file — qualifying you to order custom physical assets or claim Web3 credentials.
          </p>
        </div>

        {/* ================= GAMIFIED STATS DISPLAY ROW ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* XP BALANCE CARD */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#0D1B2A]/40 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="font-mono text-[10px] uppercase text-[#94A3B8] tracking-widest font-bold">CURRENT BALANCE</span>
                <h3 className="font-display font-extrabold text-3xl text-white mt-1">{userXP} XP</h3>
              </div>
              <div className="p-3 bg-[#00D1FF]/10 rounded-xl border border-[#00D1FF]/20">
                <Coins className="w-5 h-5 text-[#00D1FF]" />
              </div>
            </div>
            
            <div className="border-t border-white/5 pt-4 text-[10px] font-mono text-[#94A3B8] flex justify-between">
              <span>Next Reward Slot: <strong>1000 XP</strong></span>
              <span className="text-emerald-400">Level 4 Candidate</span>
            </div>
          </div>

          {/* DAILY STREAK CARD */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#0D1B2A]/40 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="font-mono text-[10px] uppercase text-[#94A3B8] tracking-widest font-bold">ACTIVE LOOP STREAK</span>
                <h3 className="font-display font-bold text-3xl text-white mt-1">{userStreaks} Days</h3>
              </div>
              <div className="p-3 bg-[#2ECC71]/10 rounded-xl border border-[#2ECC71]/20">
                <Flame className="w-5 h-5 text-[#2ECC71]" />
              </div>
            </div>

            <div className="border-t border-white/5 pt-3.5 flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#94A3B8]">Multiplier: <strong>1.5x active</strong></span>
              <button
                onClick={incrementDailyStreakTester}
                className="px-2.5 py-1 text-[9px] font-mono uppercase bg-white/5 hover:bg-white/10 rounded font-bold text-[#2ECC71] cursor-pointer"
                id="streaks-test-button"
              >
                ⚡ TEST DAILY CHECK-IN
              </button>
            </div>
          </div>

          {/* COMPLETION METRIC EXPLANATION */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-[#0D1B2A]/40 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="font-mono text-[10px] uppercase text-[#94A3B8] tracking-widest font-bold">LOOP EFFICIENCY RATING</span>
                <h3 className="font-display font-bold text-3xl text-[#00D1FF] mt-1">92.4%</h3>
              </div>
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <Target className="w-5 h-5 text-purple-400" />
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 text-[10px] font-mono text-[#94A3B8]">
              <span>Based on last 30 daily laboratory trackers logged</span>
            </div>
          </div>

        </div>

        {/* ================= REWARDS SECTION 2: PHYSICAL STORE REDEMPTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-24">
          
          {/* Store items lists (Left 7 Columns) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-5 h-5 text-[#00D1FF]" />
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white">Spent Laboratory XP Points</h2>
            </div>
            
            <p className="text-xs text-[#94A3B8] mb-6 leading-relaxed">
              Have you accumulated sufficient consistency metrics? Spend your virtual laboratory tokens below to order actual shipped items:
            </p>

            <div className="space-y-4" id="rewards-store-list">
              {storeItems.map((item) => (
                <div 
                  key={item.id}
                  className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-lg bg-[#0D1B2A] border border-white/10 flex items-center justify-center text-xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-white">{item.name}</h4>
                      <span className="font-mono text-[10px] text-[#94A3B8] block mt-0.5">
                        In stock: {item.stock} items available
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#00D1FF] bg-[#00D1FF]/10 border border-[#00D1FF]/20 px-2.5 py-1 rounded-full">
                      {item.cost} XP
                    </span>
                    <button
                      onClick={() => redeemStoreItem(item.id, item.cost)}
                      disabled={item.redeemed || userXP < item.cost}
                      className={`px-4 py-2 rounded-lg font-bold text-xs tracking-wide transition-all cursor-pointer ${
                        item.redeemed 
                          ? "bg-emerald-500/20 text-[#2ECC71] border border-[#2ECC71]/30" 
                          : "bg-[#0D1B2A] text-white hover:bg-gradient-to-r hover:from-[#00D1FF] hover:to-[#2ECC71] hover:text-black border border-white/10 hover:border-transparent cursor-pointer disabled:opacity-40 disabled:hover:from-transparent disabled:hover:to-transparent disabled:hover:text-[#94A3B8] disabled:hover:border-white/10"
                      }`}
                      id={`redeem-store-button-${item.id}`}
                    >
                      {item.redeemed ? "Redeemed √" : "Claim Item"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges Portfolio Showcase (Right 5 Columns) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#2ECC71]" />
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white">Collectible Badges Portfolio</h2>
            </div>

            <p className="text-xs text-[#94A3B8] mb-6 leading-relaxed">
              Earned credentials that highlight your growth trajectory and are archived on your platform resume:
            </p>

            <div className="glass-panel rounded-2xl p-5 border border-white/5 bg-[#0D1B2A]/30 space-y-4">
              {unlockedBadges.map((badge) => {
                const isUnlocked = badge.unlockedAt !== null;
                return (
                  <div 
                    key={badge.id}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-4 transition-all ${
                      isUnlocked 
                        ? "bg-white/[0.02] border-[#2ECC71]/30 opacity-100" 
                        : "bg-white/[0.01] border-white/5 opacity-50"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isUnlocked ? "bg-[#2ECC71]/10 text-[#2ECC71]" : "bg-white/5 text-[#94A3B8]"}`}>
                      {badge.iconType === "fire" ? <Flame className="w-5 h-5" /> : badge.iconType === "shield" ? <CheckCircle className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-xs text-white flex items-center gap-2">
                        <span>{badge.title}</span>
                        {isUnlocked && <span className="text-[10px] font-mono text-[#2ECC71]">★ ACCREDITED</span>}
                      </h4>
                      <p className="text-[10px] text-[#94A3B8] mt-1 leading-relaxed">{badge.description}</p>
                      <span className="block text-[8px] font-mono text-[#94A3B8]/60 mt-1 uppercase">
                        {isUnlocked ? `Unlocked: ${badge.unlockedAt}` : `Pending: ${badge.requirement}`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ================= REWARDS SECTION 3: NFT FUTURISTIC CERTIFICATES ================= */}
        <div className="mb-24">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00D1FF] font-bold">
              CRYPTOGRAPHIC CREDENTIALS
            </span>
            <h2 className="font-display font-bold text-3xl text-white mt-2">
              Futuristic Ledger Certificates
            </h2>
            <p className="text-xs text-[#94A3B8] mt-2">
              Select a earned credential below to audit its cryptographic ledger values inside the interactive 3D mockup viewer:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* List selectors (Left 5 Columns) */}
            <div className="lg:col-span-5 space-y-3" id="nft-certificates-list">
              {INITIAL_CERTIFICATES.map((cert) => {
                const isSelected = selectedNFT.id === cert.id;
                return (
                  <button
                    key={cert.id}
                    onClick={() => setSelectedNFT(cert)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected 
                        ? "bg-[#0D1B2A] border-[#00D1FF]/40 text-white" 
                        : "bg-white/[0.01] border-white/5 text-[#94A3B8] hover:bg-white/5"
                    }`}
                    id={`nft-cert-selector-button-${cert.id}`}
                  >
                    <span className="font-mono text-[9px] text-[#2ECC71] tracking-wider uppercase font-bold">VERIFIED DIPLOMA</span>
                    <h4 className="font-display font-semibold text-sm text-white mt-1">{cert.title}</h4>
                    <span className="block font-mono text-[9px] text-[#94A3B8]/60 mt-0.5">Hash: {cert.hash}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Card Display Mockup (Right 7 Columns) */}
            <div className="lg:col-span-7" id="nft-certificate-mock-card">
              <div className="relative glass-panel rounded-2xl border border-white/10 bg-gradient-to-b from-[#0D1B2A]/90 to-[#050B14] overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent" />
                
                {/* Visual Certificate Details */}
                <div className="p-8 relative z-10 text-left">
                  
                  <div className="flex justify-between items-start border-b border-white/5 pb-5 mb-6">
                    <div>
                      <span className="font-mono text-[9px] text-[#2ECC71] tracking-widest font-bold uppercase">SUPPLEMENTAL INSTRUCTION COGNITIVE INDEX</span>
                      <h3 className="font-display font-bold text-xl text-white mt-1">{selectedNFT.title}</h3>
                    </div>
                    <div className="p-2.5 bg-white/5 border border-white/10 rounded-lg shrink-0">
                      <QrCode className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 text-xs font-mono text-left">
                    <div>
                      <span className="text-[#94A3B8] block text-[10px]">RECIPIENT:</span>
                      <span className="text-white font-semibold block mt-0.5">{selectedNFT.recipient}</span>
                    </div>
                    <div>
                      <span className="text-[#94A3B8] block text-[10px]">REGISTRY DATE:</span>
                      <span className="text-white font-semibold block mt-0.5">{selectedNFT.issueDate}</span>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <span className="text-[#94A3B8] block text-[10px]">LEDGER HASH:</span>
                      <span className="text-[#00D1FF] font-semibold block mt-0.5">{selectedNFT.hash}</span>
                    </div>
                  </div>

                  {/* Certified skills check lists */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] text-[#94A3B8] tracking-wider uppercase block mb-2.5">ACCREDITED SKILLS PORTFOLIO:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedNFT.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 rounded bg-[#00D1FF]/10 border border-[#00D1FF]/20 text-[10px] font-mono text-[#00D1FF] font-medium"
                        >
                          ✔ {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Authenticator note */}
                  <div className="flex items-center gap-2 p-3 bg-white/[0.02] border border-white/5 rounded-lg text-[10px] font-mono text-[#94A3B8]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#2ECC71]" />
                    <span>Cryptographic credential record verified on secure, smart-contract test ledger.</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= WEB3 CONTEXT TEASER AND ADVICE INFO ================= */}
        <div className="relative glass-panel rounded-2xl p-8 border border-[#00D1FF]/20 overflow-hidden bg-gradient-to-r from-[#0D1B2A]/60 to-[#050B14]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#00D1FF]/3 blur-[80px] pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-[#00D1FF]/10 border border-[#00D1FF]/20 flex items-center justify-center shrink-0">
                <Blocks className="w-6 h-6 text-[#00D1FF] animate-bounce" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[#2ECC71] font-bold block uppercase">TESTNET LAUNCH BLUEPRINTS</span>
                <h4 className="font-display font-semibold text-white text-lg">Web3 Discipline Ledger Sandbox Integration</h4>
                <p className="text-xs text-[#94A3B8] leading-relaxed max-w-xl mt-1">
                  We are actively building secure Web3 links. Soon, your verified physical booklet QR codes can mint credentials as sovereign evidence for job recruiters.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-[#00D1FF] to-[#2ECC71] hover:scale-[1.02] active:scale-[0.98] text-black font-extrabold text-xs tracking-wide rounded-xl shrink-0 transition-all cursor-pointer flex items-center gap-1.5"
              id="start-earning-today-cta"
            >
              <Zap className="w-3.5 h-3.5 fill-black" />
              <span>Start Earning Today</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
