"use client";

import { OnlineUser, PingState } from "@/types";
import { MicIcon } from "@/components/icons";

interface WhosHereProps {
  users: OnlineUser[];
  pingState: PingState;
  onUserTap: (user: OnlineUser) => void;
}

export default function WhosHere({
  users,
  pingState,
  onUserTap,
}: WhosHereProps) {
  const circleOnlineCount = users.filter((u) => u.inCircle).length;

  return (
    <section className="px-5 pt-5 pb-1">
      <div className="flex items-center justify-between mb-3.5">
        <div>
          <h2 className="font-display font-bold text-[17px] text-soft-purple-deeper m-0">
            Who&apos;s here right now
          </h2>
          <p className="text-xs text-soft-text-secondary mt-0.5 font-medium">
            {circleOnlineCount} {circleOnlineCount === 1 ? "friend" : "friends"} in your circle {circleOnlineCount === 1 ? "is" : "are"} online
          </p>
        </div>
        <div className="bg-gradient-to-br from-soft-lavender/10 to-soft-gold/10 rounded-full px-3 py-1 text-[11px] font-bold text-soft-purple tracking-wide">
          🟢 LIVE
        </div>
      </div>

      {/* 2x2 pages, swipe to see more */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2">
        {Array.from({ length: Math.ceil(users.length / 4) }).map(
          (_, pageIdx) => (
            <div
              key={pageIdx}
              className="grid grid-cols-2 gap-2.5 min-w-full snap-center"
            >
              {users.slice(pageIdx * 4, pageIdx * 4 + 4).map((user) => {
                const isPinged = !!pingState[user.id];
                return (
                  <button
                    key={user.id}
                    onClick={() => !isPinged && onUserTap(user)}
                    disabled={isPinged}
                    className={`
                      text-left rounded-soft p-3.5 py-2.5 border transition-all duration-200
                      ${
                        isPinged
                          ? "bg-gradient-to-br from-soft-lavender-light to-soft-lavender-bg border-soft-lavender cursor-default"
                          : "bg-white border-soft-lavender-border cursor-pointer hover:border-soft-lavender hover:shadow-sm"
                      }
                    `}
                  >
                    <div className="flex justify-end mb-1">
                      <div className="w-2 h-2 rounded-full bg-soft-online shadow-[0_0_0_3px_rgba(76,175,80,0.2)]" />
                    </div>
                    <div
                      className="w-9 h-9 rounded-[13px] flex items-center justify-center text-white text-base font-bold font-display mb-1.5"
                      style={{
                        background: `linear-gradient(135deg, ${user.color}, ${user.color}88)`,
                      }}
                    >
                      {user.initials}
                    </div>
                    <p className="font-bold text-sm text-soft-purple-deeper font-body mb-0.5">
                      {user.name}
                    </p>
                    <p className="text-[11.25px] text-soft-muted mb-1 leading-snug font-medium">
                      {user.vibe}
                    </p>
                    <span className="inline-flex items-center gap-1 bg-soft-lavender-bg rounded-lg px-2 py-0.5 text-[10.5px] font-semibold text-soft-purple">
                      {user.interest}
                    </span>
                    {isPinged && (
                      <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-soft-purple">
                        <MicIcon size={12} />
                        <span>Ping sent</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          ),
        )}
      </div>
    </section>
  );
}
