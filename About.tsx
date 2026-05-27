@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
@import "tailwindcss";

@theme {
  --color-primary: #0D1B2A;
  --color-secondary: #2ECC71;
  --color-accent: #00D1FF;
  --color-background: #08111F;
  --color-card-bg: rgba(255, 255, 255, 0.05);
  --color-border-rgba: rgba(255, 255, 255, 0.1);
  --color-text-primary: #F8FAFC;
  --color-text-secondary: #94A3B8;

  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Outfit", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}

@layer utilities {
  .glass-panel {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .glow-cyan {
    box-shadow: 0 0 25px rgba(0, 209, 255, 0.35);
  }

  .glow-cyan-sm {
    box-shadow: 0 0 15px rgba(0, 209, 255, 0.2);
  }

  .glow-green {
    box-shadow: 0 0 25px rgba(46, 204, 113, 0.3);
  }

  .text-shadow-glow {
    text-shadow: 0 0 10px rgba(0, 209, 255, 0.6);
  }
}

/* Custom background pattern - Elegant top-lit atmospheric glow instead of dot grids */
.bg-grid-pattern {
  background-image: radial-gradient(100% 70% at 50% 0%, rgba(0, 209, 255, 0.1), rgba(8, 17, 31, 0));
  pointer-events: none;
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #08111F;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 209, 255, 0.3);
}

html {
  scroll-behavior: smooth;
  background-color: #08111F;
  color: #F8FAFC;
  -webkit-tap-highlight-color: transparent;
}
