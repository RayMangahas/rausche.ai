"use client";

import { Community } from "@/types";

interface CommunityFeedProps {
  communities: Community[];
}

export default function CommunityFeed({ communities }: CommunityFeedProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-[19px] text-r-text">Trending in communities</h2>
        <span className="text-sm text-r-orange cursor-pointer hover:underline">See all</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {communities.map((community) => (
          <div key={community.id} className="bg-r-card rounded-softer overflow-hidden border border-r-border hover:border-r-orange/20 transition-all">
            {/* Community header - orange tinted */}
            <div className="px-5 py-4 bg-r-orange/5 border-b border-r-border">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[15px] text-r-text">{community.name}</p>
                <div className="bg-r-orange/15 rounded-[10px] px-3 py-1.5 text-[11px] text-r-orange cursor-pointer hover:bg-r-orange/25 transition-colors">
                  Join
                </div>
              </div>
              <div className="flex items-center gap-4 text-[11px] text-r-text-muted">
                <span>{community.members} members</span>
                <span className="flex items-center gap-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0118 0v6" />
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                  </svg>
                  {community.liveListeners} listening
                </span>
                <span className="flex items-center gap-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                  {community.liveHosts} live · {community.liveGuests} guests
                </span>
              </div>
            </div>

            {/* Top rooms in this community */}
            <div className="p-3 flex flex-col gap-2">
              {community.topRooms.map((room) => (
                <div key={room.id}
                  className="bg-r-elevated rounded-[12px] p-3 border border-r-border hover:border-r-orange/20 cursor-pointer transition-all">
                  {/* Info left, avatar right */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] text-r-text truncate">{room.name}</p>
                      <p className="text-[11px] text-r-text-muted mt-0.5">Hosted by {room.host}</p>
                    </div>
                    <div
                      className="w-10 h-10 rounded-[10px] flex-shrink-0 flex items-center justify-center text-white text-sm"
                      style={{ background: `linear-gradient(135deg, ${room.hostColor}, ${room.hostColor}88)` }}
                    >
                      {room.hostInitials}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[10px] text-r-text-dim">
                      <div className="flex items-center gap-1">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 18v-6a9 9 0 0118 0v6" />
                          <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                        </svg>
                        <span>{room.listeners}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="23 7 16 12 23 17 23 7" />
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                        <span>{room.guests}/{room.maxGuests}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                        </svg>
                        <span>{room.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                        </svg>
                        <span>{room.comments}</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-r-orange bg-r-orange/10 rounded-md px-2 py-0.5">Join</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
