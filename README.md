# Supplemental Instructions Engine

Official Repository For Supplemental Instructions powering the Personal Growth Laboratory ecosystem. This repository contains the core UI schemas, TypeScript definitions, and foundational systems for tracking habits, discipline, and user metrics.

## 🚀 Quick Start

1. **Clone the configuration template:**
   ```bash
   cp .env.example .env
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Launch the local development engine:**
   ```bash
   npm run dev
   ```

## 🛠️ Tech Stack & Core Libraries

- **Framework:** React with TypeScript (Vite bundler)
- **Styling:** Tailwind CSS (with custom utility layers)
- **Animations:** Framer Motion (`framer-motion`)
- **Icons:** Lucide React (`lucide-react`)

## 📦 Project Architecture

```text
src/
├── components/     # Reusable UI elements (Buttons, Inputs, Cards)
├── pages/          # Page views & layout segments (Home, Contact)
├── types/          # Global TypeScript data schemas (FocusArea, Task)
└── utils/          # Math engines, XP calculators, & safe fallbacks
```

## 💡 Codebase Best Practices

- **Zero-Division Guards:** Always wrap progress and percentage calculations in safety fallbacks to prevent `NaN` or `Infinity` rendering bugs.
- **Clean Imports:** Prune unused icon nodes and asset links aggressively to keep the bundle footprint minimal.
- **Framer Motion:** Import explicitly from the standard `"framer-motion"` package path.
