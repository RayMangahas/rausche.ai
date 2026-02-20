"use client";

export interface LinkEmbed {
  platform: "youtube" | "tiktok" | "twitter" | "facebook" | "instagram" | "other";
  url: string;
  embedUrl?: string;
  label: string;
  icon: string;
  color: string;
}

export function parseLink(url: string): LinkEmbed | null {
  if (!url.trim()) return null;
  let cleaned = url.trim();
  if (!cleaned.startsWith("http")) cleaned = "https://" + cleaned;

  // YouTube
  const ytMatch = cleaned.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch) {
    return {
      platform: "youtube",
      url: cleaned,
      embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}`,
      label: "YouTube",
      icon: "▶️",
      color: "#FF0000",
    };
  }

  // TikTok
  if (cleaned.includes("tiktok.com")) {
    const ttMatch = cleaned.match(/\/video\/(\d+)/);
    return {
      platform: "tiktok",
      url: cleaned,
      embedUrl: ttMatch ? `https://www.tiktok.com/embed/v2/${ttMatch[1]}` : undefined,
      label: "TikTok",
      icon: "🎵",
      color: "#000000",
    };
  }

  // Twitter/X
  if (cleaned.includes("twitter.com") || cleaned.includes("x.com")) {
    return { platform: "twitter", url: cleaned, label: "X (Twitter)", icon: "𝕏", color: "#000000" };
  }

  // Facebook
  if (cleaned.includes("facebook.com") || cleaned.includes("fb.watch")) {
    return { platform: "facebook", url: cleaned, label: "Facebook", icon: "📘", color: "#1877F2" };
  }

  // Instagram
  if (cleaned.includes("instagram.com")) {
    return { platform: "instagram", url: cleaned, label: "Instagram", icon: "📸", color: "#E4405F" };
  }

  // Generic
  try {
    const domain = new URL(cleaned).hostname.replace("www.", "");
    return { platform: "other", url: cleaned, label: domain, icon: "🔗", color: "#6B7280" };
  } catch {
    return null;
  }
}
