// ─── SoftSpace Icons ─────────────────────────────────────────────
// All icons as React components for the SoftSpace app

interface IconProps {
  size?: number;
  color?: string;
  active?: boolean;
}

// ─── Logo ────────────────────────────────────────────────────────

export function SoftSpaceLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.72} viewBox="0 0 100 72" fill="none">
      {/* Outer gold cloud */}
      <path
        d="M50 8C30 8 18 18 14 28C6 30 0 38 0 48C0 58 8 66 18 66H82C92 66 100 58 100 48C100 38 94 30 86 28C82 18 70 8 50 8Z"
        fill="#F5D580"
      />
      {/* Inner purple cloud */}
      <path
        d="M50 14C33 14 23 22 20 30C13 32 8 38 8 46C8 54 14 60 22 60H78C86 60 92 54 92 46C92 38 87 32 80 30C77 22 67 14 50 14Z"
        fill="#C9A0DC"
      />
      {/* White interior */}
      <path
        d="M50 20C36 20 28 26 25 33C19 35 15 40 15 46C15 52 20 56 26 56H74C80 56 85 52 85 46C85 40 81 35 75 33C72 26 64 20 50 20Z"
        fill="white"
      />
      {/* House */}
      <path d="M52 30L62 38V52H56V44H48V52H42V38L52 30Z" stroke="#C9A0DC" strokeWidth="2.5" fill="none" />
      {/* Window */}
      <rect x="50" y="34" width="4" height="4" fill="#C9A0DC" rx="0.5" />
      {/* Tree */}
      <polygon points="36,48 30,48 33,43 31,43 33,39 31,39 33,34" fill="#F5D580" />
      <rect x="32" y="48" width="2" height="4" fill="#C9A0DC" />
      {/* Sun */}
      <circle cx="58" cy="28" r="4" fill="#F5D580" />
    </svg>
  );
}

// ─── Navigation Icons ────────────────────────────────────────────

export function SearchIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#9B8EC2" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

export function MarketplaceIcon({ active }: IconProps) {
  const color = active ? "#9B6BC2" : "#A0A0A8";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9h18l-1.5-4.5A1 1 0 0018.55 4H5.45a1 1 0 00-.95.5L3 9z" />
      <path d="M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9" />
      <path d="M9 21V14h6v7" />
    </svg>
  );
}

export function CommunityIcon({ active }: IconProps) {
  const color = active ? "#9B6BC2" : "#A0A0A8";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

export function FolderIcon({ active }: IconProps) {
  const color = active ? "#9B6BC2" : "#A0A0A8";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </svg>
  );
}

export function ProfileIcon({ active }: IconProps) {
  const color = active ? "#9B6BC2" : "#A0A0A8";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

// ─── Action Icons ────────────────────────────────────────────────

export function PhoneIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function MicIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2H3v2a9 9 0 008 8.94V23h2v-2.06A9 9 0 0021 12v-2h-2z" />
    </svg>
  );
}

export function HeartIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

export function HeadphonesIcon({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0118 0v6" />
      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
    </svg>
  );
}
