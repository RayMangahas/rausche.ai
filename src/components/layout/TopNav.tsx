"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useProfile } from "@/lib/ProfileContext";

export default function TopNav({
  onToggleFriends,
  friendsOpen,
}: {
  onToggleFriends: () => void;
  friendsOpen: boolean;
}) {
  const [searchFocused, setSearchFocused] = useState(false);
  const { profile } = useProfile();

  return (
    <header className="bg-white border-b border-soft-lavender-border sticky top-0 z-50 px-6 py-2.5">
      <div className="flex items-center gap-6 w-full">
        {/* Name + Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <span className="font-display font-bold text-xl text-soft-purple-deep tracking-tight">
            Rausche
          </span>
          <Image
            src="/logo.png"
            alt="Rausche logo"
            width={34}
            height={34}
            className="object-contain"
          />
        </Link>

        {/* Center Search Bar */}
        <div className="flex-1 max-w-[520px] mx-auto">
          <div
            className={`
              flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-200
              ${
                searchFocused
                  ? "bg-white border-2 border-soft-lavender shadow-md"
                  : "bg-soft-lavender-bg border-2 border-transparent hover:bg-soft-lavender-light/50"
              }
            `}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke={searchFocused ? "#9B6BC2" : "#B0A6CC"}
              strokeWidth="2.2"
              strokeLinecap="round"
              className="flex-shrink-0"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search communities, rooms, people..."
              className="bg-transparent border-none outline-none text-sm text-soft-purple-deep placeholder:text-soft-muted-light font-body font-medium w-full"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Friends Online Button */}
          <button
            onClick={onToggleFriends}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold font-body transition-all duration-200 cursor-pointer border-none
              ${
                friendsOpen
                  ? "bg-soft-purple text-white shadow-md"
                  : "bg-soft-lavender-bg text-soft-purple hover:bg-soft-lavender-light"
              }
            `}
          >
            <span className="relative flex items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={friendsOpen ? "white" : "#9B6BC2"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-soft-online rounded-full border-2 border-white" />
            </span>
            <span>Friends</span>
          </button>

          {/* Profile Avatar - dynamic from profile context */}
          <Link href="/profile" className="flex-shrink-0 no-underline">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              style={{ background: `linear-gradient(135deg, ${profile.avatarColor}, ${profile.avatarColor}88)` }}
            >
              {profile.avatarType === "photo" && profile.avatarPhoto ? (
                <img src={profile.avatarPhoto} alt="Profile" className="w-full h-full object-cover" />
              ) : profile.avatarType === "text" && profile.avatarText ? (
                <span className="text-xs font-bold text-white font-display">{profile.avatarText}</span>
              ) : (
                <span className="text-lg">{profile.avatarEmoji}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
