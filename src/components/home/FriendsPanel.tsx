"use client";

import Link from "next/link";
import { OnlineUser, PingState } from "@/types";
import { MicIcon } from "@/components/icons";

interface FriendsPanelProps {
  users: OnlineUser[];
  pingState: PingState;
  onUserTap: (user: OnlineUser) => void;
  onClose: () => void;
}

export default function FriendsPanel({ users, pingState, onUserTap, onClose }: FriendsPanelProps) {
  const circleOnlineCount = users.filter((u) => u.inCircle).length;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40 animate-fadeIn" onClick={onClose} />
      <div className="fixed top-[57px] right-0 w-[340px] h-[calc(100vh-57px)] bg-r-surface border-l border-r-border z-50 overflow-y-auto shadow-xl shadow-black/40 animate-slideInRight">
        <div className="px-5 pt-5 pb-3 border-b border-r-border">
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-display font-bold text-[17px] text-r-text">Friends online</h2>
            <div className="bg-r-orange/10 rounded-full px-3 py-1 text-[11px] font-bold text-r-orange tracking-wide">🟢 LIVE</div>
          </div>
          <p className="text-xs text-r-text-muted font-medium">
            {circleOnlineCount} {circleOnlineCount === 1 ? "friend" : "friends"} in your circle {circleOnlineCount === 1 ? "is" : "are"} online
          </p>
        </div>
        <div className="flex flex-col gap-2 p-4">
          {users.map((user) => {
            const isPinged = !!pingState[user.id];
            return (
              <div key={user.id} className={`rounded-soft p-3.5 border transition-all duration-200 w-full
                ${isPinged ? "bg-r-orange/5 border-r-orange/20" : "bg-r-card border-r-border hover:border-r-orange/20 hover:shadow-sm"}`}>
                <div className="flex items-center gap-3">
                  <Link href={`/profile/${user.username}`} onClick={onClose} className="relative flex-shrink-0 no-underline">
                    <div className="w-10 h-10 rounded-[13px] flex items-center justify-center text-white text-base font-bold font-display hover:shadow-md transition-shadow"
                      style={{ background: `linear-gradient(135deg, ${user.color}, ${user.color}88)` }}>
                      {user.initials}
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-soft-online border-2 border-r-surface" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/profile/${user.username}`} onClick={onClose} className="no-underline block group">
                      <p className="font-bold text-sm text-r-text font-body group-hover:text-r-orange transition-colors">{user.name}</p>
                      <p className="text-[10.5px] text-r-text-dim font-medium">@{user.username}</p>
                    </Link>
                    <p className="text-[11px] text-r-text-muted leading-snug font-medium truncate mt-0.5">{user.vibe}</p>
                  </div>
                  {!isPinged ? (
                    <button onClick={() => onUserTap(user)}
                      className="inline-flex items-center bg-r-orange/10 rounded-lg px-2.5 py-1.5 text-[10.5px] font-semibold text-r-orange flex-shrink-0 hover:bg-r-orange/20 transition-colors cursor-pointer border-none">
                      👋 Ping
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-r-orange flex-shrink-0">
                      <MicIcon size={12} /> Sent
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
