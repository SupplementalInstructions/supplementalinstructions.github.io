import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Atom, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Lab Home", path: "/" },
    { name: "Philosophy", path: "/about" },
    { name: "Laboratory Systems", path: "/features" },
    { name: "Coach Directory", path: "/coaching" },
    { name: "Rewards Hub", path: "/rewards" },
    { name: "Apply / Access", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0D1B2A]/80 backdrop-blur-md border-b border-white/10" id="main-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" id="nav-logo">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#0D1B2A] to-[#08111F] border border-white/10 group-hover:border-[#00D1FF]/50 transition-all duration-300">
              <Atom className="w-5 h-5 text-[#00D1FF] group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00D1FF] to-[#2ECC71] rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-lg tracking-tight text-white leading-none">
                Supplemental
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[#2ECC71] uppercase font-bold mt-0.5">
                Instruction
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5" id="desktop-links">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive 
                      ? "text-[#00D1FF]" 
                      : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                  }`}
                  id={`nav-link-${item.path.replace("/", "home")}`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#00D1FF] to-[#2ECC71]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action Button & Indicator Widget */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[11px] font-mono font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              2026 LAB ACTIVE
            </div>
            
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold tracking-wide text-white overflow-hidden group border border-white/10"
              id="cta-launch-lab"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D1FF]/20 to-[#2ECC71]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Zap className="w-3.5 h-3.5 text-[#00D1FF] mr-2 group-hover:animate-pulse" />
              <span className="relative z-10">Get Early Access</span>
            </Link>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono text-[#00D1FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              ACTIVE
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-[#94A3B8] hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-t border-white/5 bg-[#08111F]/95 backdrop-blur-lg overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-md text-base font-medium tracking-wide transition-colors ${
                      isActive 
                        ? "bg-[#00D1FF]/10 text-[#00D1FF] border-l-2 border-[#00D1FF]" 
                        : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                    }`}
                    id={`mobile-nav-link-${item.path.replace("/", "home")}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                <div className="flex items-center justify-between px-4 text-xs text-[#94A3B8] font-mono">
                  <span>Network Node</span>
                  <span className="text-[#2ECC71]">Online (2026)</span>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-[#00D1FF] to-[#2ECC71] text-black font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-[#00D1FF]/20 transition-all duration-300"
                  id="mobile-cta-get-access"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Get Early Access
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
