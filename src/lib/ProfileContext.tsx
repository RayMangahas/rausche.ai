"use client";

import { createContext, useContext, useState, useEffect, useRef, useCallback, ReactNode } from "react";
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
  saveProfile: (overrideData?: Partial<ProfileData>) => Promise<void>;
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
  
  // Keep a ref that always has the latest profile
  const profileRef = useRef<ProfileData>(defaultProfile);

  useEffect(() => {
    if (authLoading) return;

    if (!user) {
      setProfileState(defaultProfile);
      profileRef.current = defaultProfile;
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
          const loaded: ProfileData = {
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
          };
          setProfileState(loaded);
          profileRef.current = loaded;
        }
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
      setLoaded(true);
    };

    loadProfile();
  }, [user, authLoading]);

  const setProfile = (data: Partial<ProfileData>) => {
    setProfileState((prev) => {
      const updated = { ...prev, ...data };
      profileRef.current = updated;
      return updated;
    });
  };

  // Save profile — optionally pass override data to merge before saving
  const saveProfile = useCallback(async (overrideData?: Partial<ProfileData>) => {
    if (!user) return;

    // If override data passed, merge it first
    if (overrideData) {
      const updated = { ...profileRef.current, ...overrideData };
      profileRef.current = updated;
      setProfileState(updated);
    }

    const p = profileRef.current;
    console.log("Saving profile to Supabase:", p);

    try {
      const { error } = await supabase.from("profiles").upsert({
        id: user.id,
        display_name: p.name,
        username: p.username,
        avatar_emoji: p.avatarEmoji,
        avatar_color: p.avatarColor,
        avatar_type: p.avatarType,
        avatar_text: p.avatarText,
        avatar_photo: p.avatarPhoto,
        q1: p.q1,
        q2: p.q2,
        qualities: p.qualities,
        updated_at: new Date().toISOString(),
      });
      if (error) console.error("Error saving profile:", error);
      else console.log("Profile saved successfully");
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
