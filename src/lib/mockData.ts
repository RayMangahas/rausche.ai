import { OnlineUser, LiveRoom, CommunityPost } from "@/types";

// ─── Online Users ─────────────────────────────────────────

export const ONLINE_USERS: OnlineUser[] = [
  {
    id: 1,
    name: "Maya",
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
    vibe: "making music at 2am",
    interest: "Music",
    color: "#A87FD6",
    initials: "D",
    online: true,
    inCircle: false,
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
