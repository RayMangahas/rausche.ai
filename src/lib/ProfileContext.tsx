"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/lib/AuthContext";

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
  saveProfile: () => Promise<void>;
  loaded: boolean;
}

const defaultProfile: ProfileData = {
  name: "",
  username: "",
  avatarEmoji: "😊",
  avatarColor: "#9B6BC2",
  avatarType: "emoji",
  avatarText: "",
  avatarPhoto: "",
  q1: "",
  q2: "",
  qualities: ["", "", ""],
};

const ProfileContext = createContext<ProfileContextType | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [profile, setProfileState] = useState<ProfileData>(defaultProfile);
  const [loaded, setLoaded] = useState(false);
  const supabase = createClient();

  // Load profile from Supabase when user is available
  useEffect(() => {
    if (!user) {
      setProfileState(defaultProfile);
      setLoaded(false);
      return;
    }

    const loadProfile = async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (data && !error) {
        setProfileState({
          name: data.display_name || "",
          username: data.username || "",
          avatarEmoji: data.avatar_emoji || "😊",
          avatarColor: data.avatar_color || "#9B6BC2",
          avatarType: data.avatar_type || "emoji",
          avatarText: data.avatar_text || "",
          avatarPhoto: data.avatar_photo || "",
          q1: data.q1 || "",
          q2: data.q2 || "",
          qualities: data.qualities || ["", "", ""],
        });
      }
      setLoaded(true);
    };

    loadProfile();
  }, [user]);

  const setProfile = (data: Partial<ProfileData>) => {
    setProfileState((prev) => ({ ...prev, ...data }));
  };

  // Save profile changes to Supabase
  const saveProfile = async () => {
    if (!user) return;

    await supabase.from("profiles").update({
      display_name: profile.name,
      username: profile.username,
      avatar_emoji: profile.avatarEmoji,
      avatar_color: profile.avatarColor,
      avatar_type: profile.avatarType,
      avatar_text: profile.avatarText,
      avatar_photo: profile.avatarPhoto,
      q1: profile.q1,
      q2: profile.q2,
      qualities: profile.qualities,
      updated_at: new Date().toISOString(),
    }).eq("id", user.id);
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile, saveProfile, loaded }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
}
