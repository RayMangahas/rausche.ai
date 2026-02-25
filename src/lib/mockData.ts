import { OnlineUser, LiveRoom, Community } from "@/types";

// ─── Online Users ─────────────────────────────────────────

export const ONLINE_USERS: OnlineUser[] = [
  {
    id: 1, name: "Maya", username: "maya.lune",
    vibe: "into late-night philosophy", interest: "Philosophy",
    color: "#E88B3E", initials: "M", online: true, inCircle: true,
  },
  {
    id: 2, name: "Jordan", username: "jordan.k",
    vibe: "stressed about midterms", interest: "Study buddy",
    color: "#D4924A", initials: "J", online: true, inCircle: true,
  },
  {
    id: 3, name: "Sam", username: "sam.nite",
    vibe: "can't sleep again", interest: "Night owl",
    color: "#CC5C3F", initials: "S", online: true, inCircle: false,
  },
  {
    id: 4, name: "Alex", username: "alex.new",
    vibe: "new in town, looking for friends", interest: "Newcomer",
    color: "#B86E3A", initials: "A", online: true, inCircle: true,
  },
  {
    id: 5, name: "Rin", username: "rin.echo",
    vibe: "needs someone to vent to", interest: "Listener needed",
    color: "#F5A623", initials: "R", online: true, inCircle: false,
  },
  {
    id: 6, name: "Drew", username: "drew.beats",
    vibe: "making music at 2am", interest: "Music",
    color: "#9B5C3A", initials: "D", online: true, inCircle: false,
  },
];

// ─── Friend Profiles (for profile pages) ────────────────

export interface FriendProfile {
  username: string; name: string; color: string; initials: string;
  emoji: string; vibe: string; interest: string; communities: string[];
  stats: { following: number; followers: number; circles: number; communities: number };
  q1: string; q2: string; qualities: string[];
  echoes: { id: number; type: "text" | "voice"; content: string; hoursAgo: number }[];
}

export const FRIEND_PROFILES: FriendProfile[] = [
  {
    username: "maya.lune", name: "Maya", color: "#E88B3E", initials: "M", emoji: "🌙",
    vibe: "into late-night philosophy", interest: "Philosophy",
    communities: ["Can't Sleep Club", "Anxious but Trying"],
    stats: { following: 38, followers: 124, circles: 5, communities: 3 },
    q1: "A good playlist and a long walk at night. Something about the quiet makes everything feel manageable.",
    q2: "Stoicism. I went down a Marcus Aurelius rabbit hole and now I journal every morning.",
    qualities: ["Thoughtful", "Resilient", "Curious"],
    echoes: [
      { id: 1, type: "text", content: "Anyone else feel like 2am is when the real thinking happens? 🌙", hoursAgo: 3 },
      { id: 2, type: "voice", content: "Voice echo · 0:22", hoursAgo: 10 },
    ],
  },
  {
    username: "jordan.k", name: "Jordan", color: "#D4924A", initials: "J", emoji: "📚",
    vibe: "stressed about midterms", interest: "Study buddy",
    communities: ["First Gen Students", "Anxious but Trying"],
    stats: { following: 22, followers: 89, circles: 4, communities: 4 },
    q1: "Shooting hoops. Even just 10 minutes clears my head completely.",
    q2: "Sports analytics — I've been building my own models to predict NBA outcomes.",
    qualities: ["Driven", "Loyal", "Focused"],
    echoes: [{ id: 1, type: "text", content: "Midterm szn is brutal. Study group anyone? 📖", hoursAgo: 1 }],
  },
  {
    username: "sam.nite", name: "Sam", color: "#CC5C3F", initials: "S", emoji: "☕",
    vibe: "can't sleep again", interest: "Night owl",
    communities: ["Can't Sleep Club"],
    stats: { following: 15, followers: 42, circles: 2, communities: 2 },
    q1: "Making pour-over coffee while it's still dark outside. That ritual grounds me.",
    q2: "Coffee origins — I can tell you the difference between Ethiopian and Colombian beans blind.",
    qualities: ["Calm", "Observant", "Kind"],
    echoes: [
      { id: 1, type: "text", content: "3am crew check in ☕", hoursAgo: 2 },
      { id: 2, type: "text", content: "Found the best late night coffee spot downtown", hoursAgo: 14 },
    ],
  },
  {
    username: "alex.new", name: "Alex", color: "#B86E3A", initials: "A", emoji: "🌿",
    vibe: "new in town, looking for friends", interest: "Newcomer",
    communities: ["Rausche", "Anxious but Trying"],
    stats: { following: 8, followers: 14, circles: 1, communities: 2 },
    q1: "Exploring a new neighborhood. Every time I move, I make myself find one new favorite spot.",
    q2: "Urban planning — I'm fascinated by how cities shape the way people connect.",
    qualities: ["Open", "Adventurous", "Genuine"],
    echoes: [{ id: 1, type: "text", content: "Just moved here! Anyone want to grab coffee and explore? 🌿", hoursAgo: 5 }],
  },
  {
    username: "rin.echo", name: "Rin", color: "#F5A623", initials: "R", emoji: "🦋",
    vibe: "needs someone to vent to", interest: "Listener needed",
    communities: ["Anxious but Trying", "Can't Sleep Club"],
    stats: { following: 19, followers: 67, circles: 3, communities: 3 },
    q1: "Rewatching comfort shows. There's something healing about already knowing how it ends.",
    q2: "Butterfly migration patterns — it started as a random YouTube video and now I'm obsessed.",
    qualities: ["Empathetic", "Creative", "Brave"],
    echoes: [{ id: 1, type: "voice", content: "Voice echo · 0:15", hoursAgo: 6 }],
  },
  {
    username: "drew.beats", name: "Drew", color: "#9B5C3A", initials: "D", emoji: "🎸",
    vibe: "making music at 2am", interest: "Music",
    communities: ["Can't Sleep Club", "Founder Therapy"],
    stats: { following: 41, followers: 203, circles: 4, communities: 3 },
    q1: "Playing guitar until my fingers hurt. Sounds dramatic but it works.",
    q2: "Lo-fi production — I've been making beats and I just hit 500 plays on one.",
    qualities: ["Creative", "Honest", "Passionate"],
    echoes: [
      { id: 1, type: "text", content: "New beat dropping tonight 🎧 who's listening?", hoursAgo: 4 },
      { id: 2, type: "voice", content: "Voice echo · 0:30", hoursAgo: 12 },
    ],
  },
];

export const PING_PROMPTS = [
  "Want to talk?", "Same vibe ✨", "Let's chat about music",
  "Need a study buddy?", "Can't sleep either?",
];

export const ACTIVE_ROOMS: LiveRoom[] = [
  { id: 1, name: "Late Night Chill", host: "Maya", hostColor: "#E88B3E", hostInitials: "M", listeners: 47, guests: 2, maxGuests: 4, likes: 128, comments: 34, community: "Can't Sleep Club" },
  { id: 2, name: "Study Together", host: "Jordan", hostColor: "#D4924A", hostInitials: "J", listeners: 23, guests: 1, maxGuests: 3, likes: 56, comments: 12, community: "First Gen Students" },
  { id: 3, name: "New here", host: "Alex", hostColor: "#B86E3A", hostInitials: "A", listeners: 15, guests: 0, maxGuests: 5, likes: 22, comments: 8, community: "Rausche" },
];

export const TRENDING_COMMUNITIES: Community[] = [
  {
    id: 1, name: "Can't Sleep Club", members: "2.3K",
    liveListeners: 89, liveHosts: 3, liveGuests: 7,
    topRooms: [
      { id: 10, name: "Late Night Chill", host: "Maya", hostColor: "#E88B3E", hostInitials: "M", listeners: 47, guests: 2, maxGuests: 4, likes: 128, comments: 34, community: "Can't Sleep Club" },
      { id: 11, name: "3am Thoughts", host: "Sam", hostColor: "#CC5C3F", hostInitials: "S", listeners: 28, guests: 1, maxGuests: 3, likes: 64, comments: 19, community: "Can't Sleep Club" },
    ],
  },
  {
    id: 2, name: "First Gen Students", members: "1.8K",
    liveListeners: 54, liveHosts: 2, liveGuests: 4,
    topRooms: [
      { id: 20, name: "Study Together", host: "Jordan", hostColor: "#D4924A", hostInitials: "J", listeners: 23, guests: 1, maxGuests: 3, likes: 56, comments: 12, community: "First Gen Students" },
      { id: 21, name: "Office Hours Q&A", host: "Rin", hostColor: "#F5A623", hostInitials: "R", listeners: 18, guests: 2, maxGuests: 4, likes: 41, comments: 8, community: "First Gen Students" },
    ],
  },
  {
    id: 3, name: "Founder Therapy", members: "956",
    liveListeners: 31, liveHosts: 1, liveGuests: 3,
    topRooms: [
      { id: 30, name: "Failure Stories", host: "Drew", hostColor: "#9B5C3A", hostInitials: "D", listeners: 19, guests: 2, maxGuests: 4, likes: 37, comments: 11, community: "Founder Therapy" },
      { id: 31, name: "Pitch Practice", host: "Alex", hostColor: "#B86E3A", hostInitials: "A", listeners: 12, guests: 1, maxGuests: 2, likes: 18, comments: 5, community: "Founder Therapy" },
    ],
  },
  {
    id: 4, name: "Anxious but Trying", members: "4.1K",
    liveListeners: 112, liveHosts: 4, liveGuests: 9,
    topRooms: [
      { id: 40, name: "Small Wins Circle", host: "Maya", hostColor: "#E88B3E", hostInitials: "M", listeners: 52, guests: 3, maxGuests: 5, likes: 203, comments: 67, community: "Anxious but Trying" },
      { id: 41, name: "Vent Session", host: "Rin", hostColor: "#F5A623", hostInitials: "R", listeners: 34, guests: 2, maxGuests: 3, likes: 89, comments: 28, community: "Anxious but Trying" },
    ],
  },
];
