// ─── User Types ──────────────────────────────────────────

export interface OnlineUser {
  id: number;
  name: string;
  username: string;
  vibe: string;
  interest: string;
  color: string;
  initials: string;
  online: boolean;
  inCircle: boolean;
}

export interface PingState {
  [userId: number]: string;
}

// ─── Room Types ──────────────────────────────────────────

export interface LiveRoom {
  id: number;
  name: string;
  host: string;
  listeners: number;
  guests: number;
  maxGuests: number;
  likes: number;
  comments: number;
  community: string;
}

// ─── Community Types ─────────────────────────────────────

export interface CommunityPost {
  id: number;
  community: string;
  memberCount: string;
  icon: string;
  color: string;
  post: {
    prompt: string;
    responseCount: number;
    activeNow: number;
    topResponses: string[];
  };
}

// ─── Navigation ──────────────────────────────────────────

export type NavTab = "home" | "marketplace" | "community" | "folder" | "profile";
