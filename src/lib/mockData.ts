import { OnlineUser, LiveRoom, CommunityPost } from "@/types";

// ─── Online Users (matched by algorithm) ─────────────────────────

export const ONLINE_USERS: OnlineUser[] = [
  {
    id: 1,
    name: "Maya",
    vibe: "into late-night philosophy",
    interest: "Philosophy",
    color: "#B87FD6",
    initials: "M",
    online: true,
  },
  {
    id: 2,
    name: "Jordan",
    vibe: "stressed about midterms",
    interest: "Study buddy",
    color: "#7FB8D6",
    initials: "J",
    online: true,
  },
  {
    id: 3,
    name: "Sam",
    vibe: "can't sleep again",
    interest: "Night owl",
    color: "#D6A87F",
    initials: "S",
    online: true,
  },
  {
    id: 4,
    name: "Alex",
    vibe: "new in town, looking for friends",
    interest: "Newcomer",
    color: "#7FD6A8",
    initials: "A",
    online: true,
  },
  {
    id: 5,
    name: "Rin",
    vibe: "needs someone to vent to",
    interest: "Listener needed",
    color: "#D67FA8",
    initials: "R",
    online: true,
  },
  {
    id: 6,
    name: "Drew",
    vibe: "making music at 2am",
    interest: "Music",
    color: "#A87FD6",
    initials: "D",
    online: true,
  },
];

// ─── Ping Prompts ────────────────────────────────────────────────

export const PING_PROMPTS = [
  "Want to talk?",
  "Same vibe ✨",
  "Let's chat about music",
  "Need a study buddy?",
  "Can't sleep either?",
];

// ─── Active Rooms ────────────────────────────────────────────────

export const ACTIVE_ROOMS: LiveRoom[] = [
  {
    id: 1,
    name: "Cute Pets Show & Tell",
    people: 12,
    icon: "🐾",
    community: "Cats",
  },
  {
    id: 2,
    name: "Happiest Memories",
    people: 8,
    icon: "🐶",
    community: "Dogs",
  },
  {
    id: 3,
    name: "Golden Hour Photos",
    people: 5,
    icon: "📸",
    community: "Photos",
  },
];

// ─── Community Posts ─────────────────────────────────────────────

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: 1,
    community: "Cats",
    memberCount: "5.2K",
    icon: "🐱",
    color: "#4A3070",
    post: {
      prompt: "Show us your cat's most dramatic sleeping position",
      responseCount: 214,
      activeNow: 18,
      topResponses: [
        "Mine sleeps like a croissant on the keyboard every single time",
        "My cat claimed the entire couch and I'm on the floor now",
      ],
    },
  },
  {
    id: 2,
    community: "Dogs",
    memberCount: "4.7K",
    icon: "🐶",
    color: "#2D4A30",
    post: {
      prompt: "What's your happiest memory with your dog?",
      responseCount: 156,
      activeNow: 14,
      topResponses: [
        "The day I brought him home and he fell asleep in my lap on the car ride",
        "Teaching her to swim at the lake — she was so proud of herself",
      ],
    },
  },
  {
    id: 3,
    community: "Photos",
    memberCount: "4.1K",
    icon: "📸",
    color: "#4A3040",
    post: {
      prompt: "Best photo you took this week — what's the story behind it?",
      responseCount: 89,
      activeNow: 9,
      topResponses: [
        "Caught the sunset reflecting off a puddle on my walk home",
        "My friend didn't know I was taking a photo and it turned out perfect",
      ],
    },
  },
];
