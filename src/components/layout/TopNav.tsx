"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useProfile } from "@/lib/ProfileContext";
import { useAuth } from "@/lib/AuthContext";

export default function TopNav({
  onToggleFriends,
  friendsOpen,
}: {
  onToggleFriends: () => void;
  friendsOpen: boolean;
}) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { profile } = useProfile();
  const { user, signOut } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="bg-r-surface border-b border-r-border sticky top-0 z-50 px-6 py-2.5">
      <div className="flex items-center gap-6 w-full">
        {/* Name + Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <span className="font-display font-bold text-xl text-r-text tracking-tight">
            Rausche
          </span>
          <Image src="/logo.png" alt="Rausche logo" width={44} height={44} className="object-contain" />
        </Link>

        {/* Center Search Bar */}
        <div className="flex-1 max-w-[520px] mx-auto">
          <div className={`flex items-center gap-3 px-5 py-2.5 rounded-full transition-all duration-200
            ${searchFocused
              ? "bg-r-card border-2 border-r-orange/40 shadow-md shadow-r-orange/5"
              : "bg-r-card border-2 border-transparent hover:bg-r-card-hover"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={searchFocused ? "#E88B3E" : "#666"} strokeWidth="2.2" strokeLinecap="round" className="flex-shrink-0">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search communities, rooms, people..."
              className="bg-transparent border-none outline-none text-sm text-r-text placeholder:text-r-text-muted font-body font-medium w-full"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={onToggleFriends}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold font-body transition-all duration-200 cursor-pointer border-none
              ${friendsOpen
                ? "bg-r-orange text-white shadow-md shadow-r-orange/20"
                : "bg-r-card text-r-orange hover:bg-r-card-hover"
              }`}
          >
            <span className="relative flex items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={friendsOpen ? "white" : "#E88B3E"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-soft-online rounded-full border-2 border-r-surface" />
            </span>
            <span>Friends</span>
          </button>

          {/* Profile Avatar with Dropdown */}
          <div className="relative" ref={menuRef}>
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex-shrink-0 border-none bg-transparent p-0 cursor-pointer">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden hover:shadow-md hover:shadow-r-orange/20 transition-shadow"
                style={{ background: user ? `linear-gradient(135deg, ${profile.avatarColor}, ${profile.avatarColor}88)` : "linear-gradient(135deg, #666, #44444488)" }}
              >
                {user ? (
                  profile.avatarType === "photo" && profile.avatarPhoto ? (
                    <img src={profile.avatarPhoto} alt="Profile" className="w-full h-full object-cover" />
                  ) : profile.avatarType === "text" && profile.avatarText ? (
                    <span className="text-xs font-bold text-white font-display">{profile.avatarText}</span>
                  ) : (
                    <span className="text-lg">{profile.avatarEmoji}</span>
                  )
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                )}
              </div>
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-12 w-48 bg-r-elevated rounded-2xl shadow-xl shadow-black/40 border border-r-border py-2 z-50">
                {user ? (
                  <>
                    <Link href="/profile" onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-r-text hover:bg-r-card-hover transition-colors no-underline">
                      <span>👤</span> My Profile
                    </Link>
                    <div className="border-t border-r-border my-1" />
                    <button onClick={() => { setMenuOpen(false); signOut(); }}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors w-full border-none bg-transparent cursor-pointer text-left">
                      <span>🚪</span> Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-r-text hover:bg-r-card-hover transition-colors no-underline">
                      <span>🔑</span> Log In
                    </Link>
                    <Link href="/signup" onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-r-text hover:bg-r-card-hover transition-colors no-underline">
                      <span>✨</span> Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
