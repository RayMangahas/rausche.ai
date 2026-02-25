"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
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
  avatarColor: "#E88B3E",
  avatarType: "emoji",
  avatarText: "",
  avatarPhoto: "",
  q1: "",
  q2: "",
  qualities: ["", "", ""],
};

const ProfileContext = createContext<ProfileContextType | null>(null);

const supabase = createClient();

export function ProfileProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const [profile, setProfileState] = useState<ProfileData>(defaultProfile);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setProfileState(defaultProfile);
      setLoaded(true);
      return;
    }

    const loadProfile = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error loading profile:", error);
          if (error.code === "PGRST116") {
            await supabase.from("profiles").insert({
              id: user.id,
              display_name: user.user_metadata?.full_name || "",
              username: user.email?.split("@")[0] || "",
              avatar_emoji: "😊",
              avatar_color: "#E88B3E",
              avatar_type: "emoji",
              avatar_text: "",
              avatar_photo: "",
              q1: "",
              q2: "",
              qualities: ["", "", ""],
            });
          }
        }

        if (data) {
          setProfileState({
            name: data.display_name || "",
            username: data.username || "",
            avatarEmoji: data.avatar_emoji || "😊",
            avatarColor: data.avatar_color || "#E88B3E",
            avatarType: data.avatar_type || "emoji",
            avatarText: data.avatar_text || "",
            avatarPhoto: data.avatar_photo || "",
            q1: data.q1 || "",
            q2: data.q2 || "",
            qualities: data.qualities || ["", "", ""],
          });
        }
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
      setLoaded(true);
    };

    loadProfile();
  }, [user, authLoading]);

  const setProfile = (data: Partial<ProfileData>) => {
    setProfileState((prev) => ({ ...prev, ...data }));
  };

  const saveProfile = useCallback(async () => {
    if (!user) return;

    let currentProfile: ProfileData = defaultProfile;
    setProfileState((prev) => {
      currentProfile = prev;
      return prev;
    });

    try {
      const { error } = await supabase.from("profiles").upsert({
        id: user.id,
        display_name: currentProfile.name,
        username: currentProfile.username,
        avatar_emoji: currentProfile.avatarEmoji,
        avatar_color: currentProfile.avatarColor,
        avatar_type: currentProfile.avatarType,
        avatar_text: currentProfile.avatarText,
        avatar_photo: currentProfile.avatarPhoto,
        q1: currentProfile.q1,
        q2: currentProfile.q2,
        qualities: currentProfile.qualities,
        updated_at: new Date().toISOString(),
      });
      if (error) console.error("Error saving profile:", error);
    } catch (err) {
      console.error("Failed to save profile:", err);
    }
  }, [user]);

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
