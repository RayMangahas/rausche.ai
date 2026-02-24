"use client";

import { useParams, useRouter } from "next/navigation";
import { FRIEND_PROFILES } from "@/lib/mockData";
import { useState } from "react";

function timeRemaining(hoursAgo: number): string {
  const h = Math.max(0, 24 - hoursAgo);
  if (h <= 0) return "expired";
  const m = Math.round((24 - hoursAgo - Math.floor(24 - hoursAgo)) * 60);
  return `${Math.floor(h)}h ${m}m left`;
}

export default function FriendProfilePage() {
  const params = useParams();
  const router = useRouter();
  const username = params.username as string;
  const friend = FRIEND_PROFILES.find((f) => f.username === username);
  const [pinged, setPinged] = useState(false);
  const [viewingEcho, setViewingEcho] = useState<typeof friend extends undefined ? never : NonNullable<typeof friend>["echoes"][number] | null>(null);

  if (!friend) {
    return (
      <div className="px-5 pt-20 text-center">
        <p className="text-4xl mb-4">👻</p>
        <h1 className="font-display font-bold text-xl text-soft-purple-deeper mb-2">User not found</h1>
        <p className="text-soft-muted text-sm font-medium mb-6">@{username} doesn&apos;t exist or hasn&apos;t joined yet.</p>
        <button
          onClick={() => router.back()}
          className="px-6 py-2.5 rounded-xl bg-soft-purple text-white text-sm font-semibold hover:bg-soft-purple-dark transition-colors"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <div className="px-5 pt-6 pb-24">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-soft-muted text-sm font-medium mb-4 hover:text-soft-purple transition-colors cursor-pointer bg-transparent border-none"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Back
      </button>

      {/* Profile banner */}
      <div
        className="rounded-softer p-5 mb-5 -mx-1"
        style={{ background: `linear-gradient(135deg, ${friend.color}20, ${friend.color}08)` }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-16 h-16 rounded-soft flex items-center justify-center shadow-lg"
            style={{ background: `linear-gradient(135deg, ${friend.color}, ${friend.color}88)` }}
          >
            <span className="text-3xl">{friend.emoji}</span>
          </div>
          <div className="flex-1">
            <h1 className="font-display font-bold text-xl text-soft-purple-deeper">{friend.name}</h1>
            <p className="text-soft-muted text-sm font-medium">@{friend.username}</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-soft-online" />
              <p className="text-[11px] text-soft-muted font-medium">{friend.vibe}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setPinged(true)}
            disabled={pinged}
            className={`flex-1 py-2.5 rounded-xl text-[13px] font-semibold transition-colors cursor-pointer border-none ${
              pinged
                ? "bg-soft-lavender-light text-soft-purple"
                : "bg-soft-purple text-white hover:bg-soft-purple-dark"
            }`}
          >
            {pinged ? "👋 Ping sent!" : "👋 Send Ping"}
          </button>
          <button className="flex-1 py-2.5 rounded-xl border text-[13px] font-semibold text-soft-purple bg-white/80 hover:bg-white transition-colors cursor-pointer" style={{ borderColor: `${friend.color}40` }}>
            🎙️ Voice message
          </button>
        </div>
      </div>

      {/* Echoes */}
      {friend.echoes.length > 0 && (
        <div className="bg-white rounded-softer border border-soft-lavender-border p-5 mb-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display font-bold text-[15px] text-soft-purple-deeper flex items-center gap-2">
                🔊 {friend.name}&apos;s Echoes
              </h2>
              <p className="text-[11px] text-soft-muted font-medium mt-0.5">Fades in 24h</p>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
            {friend.echoes.map((echo) => (
              <button
                key={echo.id}
                onClick={() => setViewingEcho(echo)}
                className="flex-shrink-0 w-[140px] h-[130px] rounded-2xl p-3 flex flex-col justify-between text-left cursor-pointer border border-soft-lavender-border hover:shadow-md transition-all relative overflow-hidden"
                style={{ background: echo.type === "voice" ? `linear-gradient(135deg, ${friend.color}22, ${friend.color}08)` : "white" }}
              >
                <div>
                  <span className="text-sm">{echo.type === "voice" ? "🎙️" : "💬"}</span>
                  <p className="text-[11.5px] font-medium text-soft-purple-deeper mt-1.5 line-clamp-3 leading-snug">
                    {echo.content}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-soft-lavender animate-pulse" />
                  <p className="text-[9px] text-soft-muted font-medium">{timeRemaining(echo.hoursAgo)}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        {[
          { label: "Following", value: friend.stats.following },
          { label: "Followers", value: friend.stats.followers },
          { label: "Communities", value: friend.stats.communities },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-soft border border-soft-lavender-border p-4 text-center">
            <p className="font-bold text-xl text-soft-purple-deeper">{stat.value}</p>
            <p className="text-[11px] text-soft-muted font-medium mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Get to know me */}
      <div className="bg-white rounded-softer border border-soft-lavender-border p-5 mb-5">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
            style={{ background: `linear-gradient(135deg, ${friend.color}33, ${friend.color}18)` }}
          >
            {friend.emoji}
          </div>
          <p className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider">Get to know {friend.name}</p>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <p className="text-[13px] font-bold text-soft-purple-deep mb-1.5">When you&apos;re down, what usually cheers you up?</p>
            <div className="bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] leading-relaxed font-medium border-l-[3px] border-soft-lavender">
              <span className="text-soft-purple-deeper">{friend.q1}</span>
            </div>
          </div>

          <div>
            <p className="text-[13px] font-bold text-soft-purple-deep mb-1.5">What&apos;s a non-school topic you&apos;ve explored deeply just because you were curious?</p>
            <div className="bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] leading-relaxed font-medium border-l-[3px] border-soft-lavender">
              <span className="text-soft-purple-deeper">{friend.q2}</span>
            </div>
          </div>

          <div>
            <p className="text-[13px] font-bold text-soft-purple-deep mb-1.5">Three qualities they aspire to</p>
            <div className="flex flex-wrap gap-2">
              {friend.qualities.map((q, i) => (
                <span key={i} className="bg-soft-lavender-bg rounded-full px-3.5 py-1.5 text-xs font-semibold text-soft-purple border border-soft-lavender">{q}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Communities */}
      <div className="bg-white rounded-softer border border-soft-lavender-border p-5">
        <p className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider mb-3">Communities</p>
        <div className="flex flex-wrap gap-2">
          {friend.communities.map((c) => (
            <span key={c} className="bg-soft-lavender-bg rounded-xl px-3.5 py-2 text-[12px] font-semibold text-soft-purple-deep">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Echo Viewer Modal */}
      {viewingEcho && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-5" style={{ background: "rgba(45, 34, 84, 0.85)", backdropFilter: "blur(12px)" }} onClick={() => setViewingEcho(null)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full max-w-[380px] text-center">
            <div className="w-full bg-white/20 rounded-full h-1 mb-6">
              <div className="bg-white rounded-full h-1" style={{ width: `${Math.max(0, ((24 - viewingEcho.hoursAgo) / 24) * 100)}%` }} />
            </div>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${friend.color}, ${friend.color}88)` }}>
                <span className="text-xl">{friend.emoji}</span>
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">{friend.name}</p>
                <p className="text-white/50 text-[11px] font-medium">{timeRemaining(viewingEcho.hoursAgo)}</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
              {viewingEcho.type === "text" ? (
                <p className="text-white text-lg font-medium leading-relaxed">{viewingEcho.content}</p>
              ) : (
                <div>
                  <span className="text-5xl mb-4 block">🎙️</span>
                  <p className="text-white/70 text-sm font-medium">{viewingEcho.content}</p>
                </div>
              )}
            </div>

            <p className="text-white/30 text-[11px] font-medium mt-4">Tap outside to close</p>
          </div>
        </div>
      )}
    </div>
  );
}
