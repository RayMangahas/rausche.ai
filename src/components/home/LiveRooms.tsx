"use client";

import { LiveRoom } from "@/types";

interface LiveRoomsProps {
  rooms: LiveRoom[];
}

export default function LiveRooms({ rooms }: LiveRoomsProps) {
  return (
    <section>
      <h2 className="font-display text-[19px] text-r-text mb-4">Live rooms</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {rooms.map((room) => (
          <button key={room.id}
            className="bg-r-card rounded-[14px] p-4 border border-r-border cursor-pointer text-left hover:border-r-orange/30 hover:shadow-sm hover:shadow-r-orange/5 transition-all">

            {/* Top section: Info left, avatar right */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 min-w-0">
                <p className="text-[15px] text-r-text truncate">{room.name}</p>
                <p className="text-[12px] text-r-text-muted mt-0.5">Hosted by {room.host}</p>
                <p className="text-[11px] text-r-text-dim mt-0.5">{room.community}</p>
              </div>
              <div
                className="w-12 h-12 rounded-[12px] flex-shrink-0 flex items-center justify-center text-white text-lg"
                style={{ background: `linear-gradient(135deg, ${room.hostColor}, ${room.hostColor}88)` }}
              >
                {room.hostInitials}
              </div>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-4 mb-3 text-[11px] text-r-text-muted">
              {/* Listeners */}
              <div className="flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0118 0v6" />
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                </svg>
                <span>{room.listeners}</span>
              </div>

              {/* Guests on video */}
              <div className="flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
                <span>{room.guests}/{room.maxGuests} guests</span>
              </div>
            </div>

            {/* Likes + Comments + Join */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-[11px] text-r-text-dim">
                <div className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                  <span>{room.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                  <span>{room.comments}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-r-orange/10 rounded-lg px-2.5 py-1 text-[11px] text-r-orange">
                Join
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
