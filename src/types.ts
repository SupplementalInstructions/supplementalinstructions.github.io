/**
 * Supplemental Instruction - TypeScript Declarations and Shared Core Mock Data
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
// SEED MOCK DATA
// ==========================================

export const INITIAL_FOCUS_AREAS: FocusArea[] = [
  {
    id: "health-fitness",
    title: "Health & Fitness",
    description: "Build robust physical health, optimize nutrition, master circadian rhythms, and foster daily workout discipline.",
    longDescription: "Physical health is the engine of high achievement. Engage with biometric tracking metrics, tailored workout discipline sequences, and clean energy optimization guides.",
    iconName: "Activity",
    accentColor: "#2ECC71", // Green
    metric: "4 Consecutive Workouts Done",
    completionRate: 85
  },
  {
    id: "investing-finance",
    title: "Investing & Finance",
    description: "Accelerate wealth builders, compound saving plans, decode market index essentials, and master money models.",
    longDescription: "Financial autonomy is key. We integrate structured micro-sessions in value investing, tax asset management, compound models, and systematic budget automation.",
    iconName: "TrendingUp",
    accentColor: "#00D1FF", // Electric Cyan
    metric: "Asset Allocation Calibrated",
    completionRate: 64
  },
  {
    id: "self-improvement",
    title: "Self-Improvement",
    description: "Enhance mental focus patterns, maximize active focus sprints, block digital distractions, and craft clear thinking.",
    longDescription: "Your personal laboratory for building active mindfulness, habit automation, deliberate study routines, and deep flow states on command.",
    iconName: "Target",
    accentColor: "#F39C12", // Amber/Gold
    metric: "12-Day Focus Active Streak",
    completionRate: 92
  },
  {
    id: "spiritual-growth",
    title: "Spiritual Growth",
    description: "Foster inner stillness, compound gratitude loops, align baseline virtues, and develop profound stoic resilience.",
    longDescription: "A secular, scientific space to connect with deep purpose, calibrate moral framework integrity, practice mindful self-reflection, and form intentional community links.",
    iconName: "Compass",
    accentColor: "#9B59B6", // Purple
    metric: "10m Deep Stillness Completed Today",
    completionRate: 78
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
    avatar: "from-cyan-500 to-blue-600",
    bio: "Former neuroscience researcher focused on turning neuroplasticity research into practical daily routines for builders and engineers.",
    studentsCount: 142,
    featured: true
  },
  {
    id: "c2",
    name: "Amina Al-Mansoor",
    specialty: "SaaS Systems & Compound Financial Growth",
    rating: 4.8,
    availability: "Available Tomorrow",
    price: "$150/hr",
    avatar: "from-emerald-400 to-teal-600",
    bio: "Venture partner and personal finance mentor. Specializes in budgeting frameworks, scale models, and early wealth compounds.",
    studentsCount: 98,
    featured: true
  },
  {
    id: "c3",
    name: "Marcus Aurel Sterling",
    specialty: "Stoic Resilience & Extreme Discipline Systems",
    rating: 5.0,
    availability: "3 Slots Open This Week",
    price: "$180/hr",
    avatar: "from-amber-500 to-orange-600",
    bio: "Ex-athletics coach and certified mindfulness trainer. Empowers elite performers to master internal impulse controls and forge bulletproof focus.",
    studentsCount: 210,
    featured: true
  },
  {
    id: "c4",
    name: "Rev. Sister Beatrice",
    specialty: "Spiritual Alignment & Secular Stoicism",
    rating: 4.7,
    availability: "Bookings Open Now",
    price: "$95/hr",
    avatar: "from-purple-500 to-indigo-600",
    bio: "Theology master and meditation facilitator integrating timeless mindfulness tools with daily action and professional alignment.",
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
    text: "Supplemental Instruction provided the systematic guardrails I desperately needed. Combining active financial compounds with cognitive work led to my most productive year.",
    avatar: "DK",
    rating: 5,
    focus: "Self-Improvement"
  },
  {
    id: "t2",
    name: "Olivia Chen",
    role: "Fintech Growth Lead",
    location: "Singapore",
    text: "The gamified rewards and NFT credential validation make progress incredibly addictive. It's a next-generation laboratory that has completely redefined how I plan my quarters.",
    avatar: "OC",
    rating: 5,
    focus: "Investing & Finance"
  },
  {
    id: "t3",
    name: "Tariq Sowande",
    role: "Medical Student",
    location: "Lagos, Nigeria",
    text: "Studying medicine is exhausting, but the daily focus tracks and stoic resilience systems kept my physical health and spiritual grounding completely aligned. Highly recommend!",
    avatar: "TS",
    rating: 5,
    focus: "Spiritual Growth"
  }
];

export const INITIAL_BADGES: Badge[] = [
  {
    id: "b1",
    title: "Streak Star",
    description: "Maintain a uninterrupted 7-day habits completion loop in any category.",
    unlockedAt: "2026-05-22",
    requirement: "Complete 7 days of items",
    iconType: "fire"
  },
  {
    id: "b2",
    title: "Habit Hero",
    description: "Complete more than 50 micro-routines in any laboratory field.",
    unlockedAt: "2026-05-23",
    requirement: "Log 50 routine completions",
    iconType: "shield"
  },
  {
    id: "b3",
    title: "Goal Master",
    description: "Fully master three concurrent focus areas with a 90% execution score.",
    unlockedAt: null,
    requirement: "Achieve 90% completion rate in 3 categories",
    iconType: "trophy"
  }
];

export const INITIAL_CERTIFICATES: NFTCertificate[] = [
  {
    id: "nft-1",
    title: "Growth Master Certificate",
    issueDate: "2026-05-20",
    recipient: "Alpha Builder",
    hash: "0x8fa4...cd3e",
    skills: ["Habit Loops", "Neuroscience of Discipline", "Stoic Sprints"],
    type: "growth"
  },
  {
    id: "nft-2",
    title: "Mindset Alignment Credential",
    issueDate: "2026-05-24",
    recipient: "Alpha Builder",
    hash: "0xac20...eb81",
    skills: ["Active Stillness", "Stoic Meditation", "Purpose Calibration"],
    type: "mindset"
  }
];
