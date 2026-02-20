"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ProfileData {
  name: string;
  username: string;
  avatarEmoji: string;
  avatarColor: string;
  avatarType: "emoji" | "text" | "photo";
  avatarText: string;
  avatarPhoto: string;
  q1: string;
  q2: string;
  qualities: string[];
}

interface ProfileContextType {
  profile: ProfileData;
  setProfile: (data: Partial<ProfileData>) => void;
}

const ProfileContext = createContext<ProfileContextType | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfileState] = useState<ProfileData>({
    name: "Ray",
    username: "you",
    avatarEmoji: "😊",
    avatarColor: "#9B6BC2",
    avatarType: "emoji",
    avatarText: "",
    avatarPhoto: "",
    q1: "",
    q2: "",
    qualities: ["", "", ""],
  });

  const setProfile = (data: Partial<ProfileData>) => {
    setProfileState((prev) => ({ ...prev, ...data }));
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
}
