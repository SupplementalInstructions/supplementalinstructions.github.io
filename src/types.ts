/**
 * Supplemental Instruction LLC (S-H) - TypeScript Declarations and Shared Core Mock Data
 */

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // Map to Lucide Icon string
  accentColor: string;
  metric: string;
  completionRate: number;
}

export interface Coach {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  availability: string;
  price: string;
  avatar: string; // Gradient class
  bio: string;
  studentsCount: number;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  avatar: string;
  rating: number;
  focus: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  unlockedAt: string | null;
  requirement: string;
  iconType: string; // "star" | "fire" | "trophy" | "shield"
}

export interface NFTCertificate {
  id: string;
  title: string;
  issueDate: string;
  recipient: string;
  hash: string;
  skills: string[];
  type: "growth" | "mindset";
}

// ==========================================
// SEED MOCK DATA (AUTHENTIC & VALUE-DRIVEN)
// ==========================================

export const INITIAL_FOCUS_AREAS: FocusArea[] = [
  {
    id: "thrive-mode",
    title: "Thrive Mode",
    description: "Align your physical vitality, master circadian sleep logs, curate clean macro nutrition, and cultivate daily training consistency.",
    longDescription: "Thrive Mode is the physical engine of psychological transformation. It transitions candidates away from erratic survival fatigue into sustained systemic energy, supported by daily biometric tracking systems.",
    iconName: "Flame",
    accentColor: "#0D9488", // Teal/Emerald Green Accent
    metric: "7-Day Energy Calibration Complete",
    completionRate: 94
  },
  {
    id: "reading-culture",
    title: "Reading Culture & Compound Authors",
    description: "Build deep intellectual capital. Learn ideas from classic and modern authors that compound mental assets over time.",
    longDescription: "Our book clubs, accountability circles, and verified reading reviews turn cognitive literature into active, applied wisdom. No shallow scrolling, just compound intellectual assets.",
    iconName: "BookOpen",
    accentColor: "#4F46E5", // Indigo/Grape Accent
    metric: "Stoicism Syllabus Mastered",
    completionRate: 88
  },
  {
    id: "alchemy-entrepreneurship",
    title: "Alchemy Entrepreneurship",
    description: "Master early wealth models, compound saving structures, and systematic budget automation to fund a life of freedom and travel.",
    longDescription: "Reject toxic burnout hustle. Leverage structured asset-compounding principles and lightweight digital business engineering to achieve financial autonomy, security, and world adventure.",
    iconName: "TrendingUp",
    accentColor: "#D97706", // Solar Gold Accent
    metric: "Compounding Models Completed",
    completionRate: 76
  },
  {
    id: "mental-wellness",
    title: "Mental Wellness & Resilience",
    description: "Cultivate robust emotional grounding, compound gratitude frameworks, practice aligned focus stillness, and forge stoic resilience.",
    longDescription: "A scientific and human-first approach to emotional wellbeing. Build mental resilience, cultivate present-moment awareness, and define your personal virtue models under certified guide supervision.",
    iconName: "Compass",
    accentColor: "#7C3AED", // Royal Purple Accent
    metric: "Daily Core Alignment Logged",
    completionRate: 82
  },
];

export const INITIAL_COACHES: Coach[] = [
  {
    id: "c1",
    name: "Dr. Ethan Vance",
    specialty: "Cognitive Performance & Habit Loop Architecture",
    rating: 4.9,
    availability: "Available Next Tuesday",
    price: "$120/hr",
    avatar: "from-[#0F766E] to-[#0D9488]",
    bio: "Former neuroscience researcher focused on turning neuroplasticity research into practical daily routines for builders, creators, and engineers.",
    studentsCount: 142,
    featured: true
  },
  {
    id: "c2",
    name: "Amina Al-Mansoor",
    specialty: "Alchemy Entrepreneurship & Wealth Compounds",
    rating: 4.8,
    availability: "Available Tomorrow",
    price: "$150/hr",
    avatar: "from-indigo-600 to-indigo-800",
    bio: "Growth consultant and personal finance mentor. Specializes in leverage models, compound budget loops, and sustainable digital freedom strategies.",
    studentsCount: 98,
    featured: true
  },
  {
    id: "c3",
    name: "Marcus Aurel Sterling",
    specialty: "Thrive Mode Catalyst & Peak Vitality Systems",
    rating: 5.0,
    availability: "3 Slots Open This Week",
    price: "$180/hr",
    avatar: "from-amber-600 to-amber-800",
    bio: "Ex-athletics coach and certified endurance trainer. Empowers candidates to optimize biological performance rhythms and build bulletproof mental endurance.",
    studentsCount: 210,
    featured: true
  },
  {
    id: "c4",
    name: "Rev. Sister Beatrice",
    specialty: "Mental Wellness Guide & Timeless Stoicism",
    rating: 4.7,
    availability: "Bookings Open Now",
    price: "$95/hr",
    avatar: "from-purple-600 to-purple-850",
    bio: "Mindfulness facilitator integrating classic stoic scripts with modern emotional resilience models to establish daily workspace stillness.",
    studentsCount: 75,
    featured: false
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Devin Kimbrough",
    role: "Senior Software Engineer",
    location: "Nairobi, Kenya",
    text: "Supplemental Instruction provided the systematic guardrails I desperately needed. Combining applied financial compounding with cognitive focus routines led to my most productive, stress-free year.",
    avatar: "DK",
    rating: 5,
    focus: "Mental Wellness & Resilience"
  },
  {
    id: "t2",
    name: "Olivia Chen",
    role: "Fintech Growth Lead",
    location: "Singapore",
    text: "The beautifully structured physical booklets and active community groups keep me extremely grounded. It's a next-generation growth ecosystem that has completely transformed my relationship with work.",
    avatar: "OC",
    rating: 5,
    focus: "Alchemy Entrepreneurship"
  },
  {
    id: "t3",
    name: "Tariq Sowande",
    role: "Medical Student",
    location: "Lagos, Nigeria",
    text: "Medical studies are exhausting, but integrating Thrive Mode circadian tracking with peer accountability book clubs has kept my health and focus at their highest possible levels.",
    avatar: "TS",
    rating: 5,
    focus: "Reading Culture & Books"
  }
];

export const INITIAL_BADGES: Badge[] = [
  {
    id: "b1",
    title: "Thrive Mode Starter",
    description: "Complete 7 consecutive daily physical training and sleep logs.",
    unlockedAt: "2026-05-22",
    requirement: "Complete 7 days of biometrics",
    iconType: "fire"
  },
  {
    id: "b2",
    title: "Compound Reader",
    description: "Submit 5 reviewed core chapter summaries on wisdom literature.",
    unlockedAt: "2026-05-23",
    requirement: "Log 5 validated reading reviews",
    iconType: "shield"
  },
  {
    id: "b3",
    title: "Integration Master",
    description: "Achieve a 90% calibration score across nutrition, focus, and reading lists.",
    unlockedAt: null,
    requirement: "Sustain 90% consistency across three verticals",
    iconType: "trophy"
  }
];

export const INITIAL_CERTIFICATES: NFTCertificate[] = [
  {
    id: "nft-1",
    title: "Thrive Mode Calibration Professional",
    issueDate: "2026-05-20",
    recipient: "Alpha Candidate",
    hash: "RECIP-4821-DEC",
    skills: ["Circadian Integration", "Macro Nutrition Metrics", "Cardiovascular Fitness Sprints"],
    type: "growth"
  },
  {
    id: "nft-2",
    title: "Discipline Ledger Credential",
    issueDate: "2026-05-24",
    recipient: "Alpha Candidate",
    hash: "RECIP-8793-DIS",
    skills: ["Daily Aligned Stillness", "Compound Literature Audits", "Value Asset Engineering"],
    type: "mindset"
  }
];
