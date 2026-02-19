# SoftSpace

**Where real conversations happen.**

SoftSpace is a voice-first social platform designed to combat loneliness by fostering genuine human connection. No photos, no text messaging, no doom scrolling — just real conversations.

## Core Philosophy

- **Voice-first**: Text is just the doorbell. Voice is the house.
- **No photos**: Identity is built through words, interests, and voice — not appearance.
- **Anti-loneliness loop**: Lonely → conversation → feel better → come back.
- **Community-driven**: Content comes from communities, not individual broadcasts.

## Features

- **Who's Here**: Algorithm-matched online users shown as cards (no photos). One-tap ping system with structured prompts or a single voice message.
- **Live Rooms**: Drop-in voice rooms hosted by communities.
- **Community Feed**: Trending prompts and discussions from communities you follow.
- **Folder**: Your digital identity — vibe line, interests, voice intro, circles. No photo required.
- **Marketplace**: Premium community experiences, workshops, and facilitated sessions.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Quicksand (display) + Nunito (body)
- **Deployment**: Vercel
- **Database**: Supabase (planned)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with nav
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── marketplace/        # Marketplace page
│   ├── community/          # Community browser
│   ├── folder/             # Personal identity folder
│   └── profile/            # User profile & settings
├── components/
│   ├── layout/
│   │   ├── TopNav.tsx      # SoftSpace logo + search
│   │   └── BottomNav.tsx   # Market, Community, Folder, Profile
│   ├── home/
│   │   ├── WhosHere.tsx    # Online user cards
│   │   ├── LiveRooms.tsx   # Active voice rooms
│   │   ├── CommunityFeed.tsx # Trending community posts
│   │   └── PingModal.tsx   # Ping/voice message sheet
│   └── icons/
│       └── index.tsx       # All SVG icons
├── lib/
│   └── mockData.ts         # Development mock data
└── types/
    └── index.ts            # TypeScript interfaces
```

## Revenue Model

1. **B2B University Contracts** — Campus wellness tool
2. **SoftSpace+ Subscription** — Premium features
3. **Community Paid Tiers** — Creator economy (Patreon model)
4. **Paid Experiences** — Facilitated workshops and events
