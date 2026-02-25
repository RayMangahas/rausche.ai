"use client";

import { useState } from "react";

interface CommunityItem {
  name: string;
  members: string;
  desc: string;
  liveListeners: number;
  liveHosts: number;
  liveGuests: number;
}

const DEFAULT_COMMUNITIES: CommunityItem[] = [
  { name: "Can't Sleep Club", members: "2.3K", desc: "For the ones whose brains won't turn off at night", liveListeners: 89, liveHosts: 3, liveGuests: 7 },
  { name: "First Gen Students", members: "1.8K", desc: "Navigating college when nobody showed you how", liveListeners: 54, liveHosts: 2, liveGuests: 4 },
  { name: "Founder Therapy", members: "956", desc: "Real talk about the startup grind", liveListeners: 31, liveHosts: 1, liveGuests: 3 },
  { name: "Anxious but Trying", members: "4.1K", desc: "One small win at a time", liveListeners: 112, liveHosts: 4, liveGuests: 9 },
  { name: "Rausche", members: "512", desc: "Welcome — share feedback and connect", liveListeners: 15, liveHosts: 1, liveGuests: 2 },
];

export default function CommunityPage() {
  const [communities] = useState<CommunityItem[]>(DEFAULT_COMMUNITIES);

  return (
    <div className="px-5 pt-6 pb-24">
      <h1 className="font-display text-2xl text-r-text mb-1">Communities</h1>
      <p className="text-r-text-muted text-sm mb-5">Find your people</p>

      <button className="w-full mb-5 py-3 rounded-xl border-2 border-dashed border-r-border-light text-[14px] text-r-orange bg-transparent hover:bg-r-card transition-colors cursor-pointer flex items-center justify-center gap-2">
        <span className="text-lg">+</span> Create a Community
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {communities.map((c, i) => (
          <div key={`${c.name}-${i}`} className="bg-r-card rounded-softer overflow-hidden border border-r-border hover:border-r-orange/20 cursor-pointer transition-all">
            {/* Header */}
            <div className="px-5 py-4 bg-r-orange/5 border-b border-r-border">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[15px] text-r-text">{c.name}</p>
                <div className="bg-r-orange/15 rounded-[10px] px-3 py-1.5 text-[11px] text-r-orange cursor-pointer hover:bg-r-orange/25 transition-colors">
                  Join
                </div>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-r-text-muted">
                <span>{c.members} members</span>
                <span className="flex items-center gap-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0118 0v6" />
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                  </svg>
                  {c.liveListeners} listening
                </span>
                <span className="flex items-center gap-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  {c.liveHosts} live · {c.liveGuests} guests
                </span>
              </div>
            </div>
            {/* Description */}
            <div className="px-5 py-3">
              <p className="text-[12px] text-r-text-secondary leading-snug">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
