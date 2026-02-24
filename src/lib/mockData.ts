import { OnlineUser, LiveRoom, CommunityPost } from "@/types";

// ─── Online Users ─────────────────────────────────────────

export const ONLINE_USERS: OnlineUser[] = [
  {
    id: 1,
    name: "Maya",
    username: "maya.lune",
    vibe: "into late-night philosophy",
    interest: "Philosophy",
    color: "#B87FD6",
    initials: "M",
    online: true,
    inCircle: true,
  },
  {
    id: 2,
    name: "Jordan",
    username: "jordan.k",
    vibe: "stressed about midterms",
    interest: "Study buddy",
    color: "#7FB8D6",
    initials: "J",
    online: true,
    inCircle: true,
  },
  {
    id: 3,
    name: "Sam",
    username: "sam.nite",
    vibe: "can't sleep again",
    interest: "Night owl",
    color: "#D6A87F",
    initials: "S",
    online: true,
    inCircle: false,
  },
  {
    id: 4,
    name: "Alex",
    username: "alex.new",
    vibe: "new in town, looking for friends",
    interest: "Newcomer",
    color: "#7FD6A8",
    initials: "A",
    online: true,
    inCircle: true,
  },
  {
    id: 5,
    name: "Rin",
    username: "rin.echo",
    vibe: "needs someone to vent to",
    interest: "Listener needed",
    color: "#D67FA8",
    initials: "R",
    online: true,
    inCircle: false,
  },
  {
    id: 6,
    name: "Drew",
    username: "drew.beats",
    vibe: "making music at 2am",
    interest: "Music",
    color: "#A87FD6",
    initials: "D",
    online: true,
    inCircle: false,
  },
];

// ─── Friend Profiles (for profile pages) ────────────────

export interface FriendProfile {
  username: string;
  name: string;
  color: string;
  initials: string;
  emoji: string;
  vibe: string;
  interest: string;
  communities: string[];
  stats: { calls: number; circles: number; communities: number };
  q1: string;
  q2: string;
  qualities: string[];
  echoes: { id: number; type: "text" | "voice"; content: string; hoursAgo: number }[];
}

export const FRIEND_PROFILES: FriendProfile[] = [
  {
    username: "maya.lune",
    name: "Maya",
    color: "#B87FD6",
    initials: "M",
    emoji: "🌙",
    vibe: "into late-night philosophy",
    interest: "Philosophy",
    communities: ["Can't Sleep Club", "Anxious but Trying"],
    stats: { calls: 47, circles: 5, communities: 3 },
    q1: "A good playlist and a long walk at night. Something about the quiet makes everything feel manageable.",
    q2: "Stoicism. I went down a Marcus Aurelius rabbit hole and now I journal every morning.",
    qualities: ["Thoughtful", "Resilient", "Curious"],
    echoes: [
      { id: 1, type: "text", content: "Anyone else feel like 2am is when the real thinking happens? 🌙", hoursAgo: 3 },
      { id: 2, type: "voice", content: "Voice echo · 0:22", hoursAgo: 10 },
    ],
  },
  {
    username: "jordan.k",
    name: "Jordan",
    color: "#7FB8D6",
    initials: "J",
    emoji: "📚",
    vibe: "stressed about midterms",
    interest: "Study buddy",
    communities: ["First Gen Students", "Anxious but Trying"],
    stats: { calls: 31, circles: 4, communities: 4 },
    q1: "Shooting hoops. Even just 10 minutes clears my head completely.",
    q2: "Sports analytics — I've been building my own models to predict NBA outcomes.",
    qualities: ["Driven", "Loyal", "Focused"],
    echoes: [
      { id: 1, type: "text", content: "Midterm szn is brutal. Study group anyone? 📖", hoursAgo: 1 },
    ],
  },
  {
    username: "sam.nite",
    name: "Sam",
    color: "#D6A87F",
    initials: "S",
    emoji: "☕",
    vibe: "can't sleep again",
    interest: "Night owl",
    communities: ["Can't Sleep Club"],
    stats: { calls: 18, circles: 2, communities: 2 },
    q1: "Making pour-over coffee while it's still dark outside. That ritual grounds me.",
    q2: "Coffee origins — I can tell you the difference between Ethiopian and Colombian beans blind.",
    qualities: ["Calm", "Observant", "Kind"],
    echoes: [
      { id: 1, type: "text", content: "3am crew check in ☕", hoursAgo: 2 },
      { id: 2, type: "text", content: "Found the best late night coffee spot downtown", hoursAgo: 14 },
    ],
  },
  {
    username: "alex.new",
    name: "Alex",
    color: "#7FD6A8",
    initials: "A",
    emoji: "🌿",
    vibe: "new in town, looking for friends",
    interest: "Newcomer",
    communities: ["Rausche", "Anxious but Trying"],
    stats: { calls: 6, circles: 1, communities: 2 },
    q1: "Exploring a new neighborhood. Every time I move, I make myself find one new favorite spot.",
    q2: "Urban planning — I'm fascinated by how cities shape the way people connect.",
    qualities: ["Open", "Adventurous", "Genuine"],
    echoes: [
      { id: 1, type: "text", content: "Just moved here! Anyone want to grab coffee and explore? 🌿", hoursAgo: 5 },
    ],
  },
  {
    username: "rin.echo",
    name: "Rin",
    color: "#D67FA8",
    initials: "R",
    emoji: "🦋",
    vibe: "needs someone to vent to",
    interest: "Listener needed",
    communities: ["Anxious but Trying", "Can't Sleep Club"],
    stats: { calls: 22, circles: 3, communities: 3 },
    q1: "Rewatching comfort shows. There's something healing about already knowing how it ends.",
    q2: "Butterfly migration patterns — it started as a random YouTube video and now I'm obsessed.",
    qualities: ["Empathetic", "Creative", "Brave"],
    echoes: [
      { id: 1, type: "voice", content: "Voice echo · 0:15", hoursAgo: 6 },
    ],
  },
  {
    username: "drew.beats",
    name: "Drew",
    color: "#A87FD6",
    initials: "D",
    emoji: "🎸",
    vibe: "making music at 2am",
    interest: "Music",
    communities: ["Can't Sleep Club", "Founder Therapy"],
    stats: { calls: 35, circles: 4, communities: 3 },
    q1: "Playing guitar until my fingers hurt. Sounds dramatic but it works.",
    q2: "Lo-fi production — I've been making beats and I just hit 500 plays on one.",
    qualities: ["Creative", "Honest", "Passionate"],
    echoes: [
      { id: 1, type: "text", content: "New beat dropping tonight 🎧 who's listening?", hoursAgo: 4 },
      { id: 2, type: "voice", content: "Voice echo · 0:30", hoursAgo: 12 },
    ],
  },
];

// ─── Ping Prompts ────────────────────────────────────────

export const PING_PROMPTS = [
  "Want to talk?",
  "Same vibe ✨",
  "Let's chat about music",
  "Need a study buddy?",
  "Can't sleep either?",
];

// ─── Active Rooms ────────────────────────────────────────

export const ACTIVE_ROOMS: LiveRoom[] = [
  { id: 1, name: "Late Night Chill", people: 7, icon: "🎵", community: "Can't Sleep Club" },
  { id: 2, name: "Study Together", people: 4, icon: "📚", community: "First Gen Students" },
  { id: 3, name: "New here 👋", people: 3, icon: "✨", community: "Rausche" },
];

// ─── Community Posts ─────────────────────────────────────

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 1,
    community: "Can't Sleep Club",
    memberCount: "2.3K",
    icon: "🌙",
    color: "#2D2654",
    post: {
      prompt: "What's keeping you up tonight?",
      responseCount: 47,
      activeNow: 12,
      topResponses: [
        "Overthinking a conversation from 3 days ago",
        "My brain decided now is the time to plan my whole future",
      ],
    },
  },
  {
    id: 2,
    community: "First Gen Students",
    memberCount: "1.8K",
    icon: "🎓",
    color: "#1E3A2F",
    post: {
      prompt: "What's something you wish someone told you before college?",
      responseCount: 83,
      activeNow: 8,
      topResponses: [
        "It's okay to not know the unwritten rules",
        "Office hours are literally free mentoring",
      ],
    },
  },
  {
    id: 3,
    community: "Founder Therapy",
    memberCount: "956",
    icon: "🧠",
    color: "#3A2E1E",
    post: {
      prompt: "Biggest lesson from your last failure?",
      responseCount: 31,
      activeNow: 5,
      topResponses: [
        "The idea wasn't the problem, the timing was",
        "I confused being busy with making progress",
      ],
    },
  },
  {
    id: 4,
    community: "Anxious but Trying",
    memberCount: "4.1K",
    icon: "💛",
    color: "#2E2A3A",
    post: {
      prompt: "One small win from today?",
      responseCount: 112,
      activeNow: 22,
      topResponses: [
        "Made a phone call I'd been avoiding for 2 weeks",
        "Went to the gym even though I almost didn't",
      ],
    },
  },
];
