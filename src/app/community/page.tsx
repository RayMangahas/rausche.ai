"use client";

import { useState, useRef, useEffect } from "react";
import { parseLink, LinkEmbed } from "@/lib/linkEmbed";

interface Community {
  name: string;
  members: string;
  icon: string;
  color: string;
  desc: string;
  isOwned: boolean;
}

interface CommunityPost {
  id: number;
  author: string;
  emoji: string;
  color: string;
  text: string;
  link?: LinkEmbed;
  timeAgo: string;
  likes: number;
  liked: boolean;
}

const DEFAULT_COMMUNITIES: Community[] = [
  { name: "Can't Sleep Club", members: "2.3K", icon: "🌙", color: "#2D2254", desc: "For the ones whose brains won't turn off at night", isOwned: false },
  { name: "First Gen Students", members: "1.8K", icon: "📚", color: "#1B5E20", desc: "Navigating college when nobody showed you how", isOwned: false },
  { name: "Founder Therapy", members: "956", icon: "🧠", color: "#4A3040", desc: "Real talk about the startup grind", isOwned: false },
  { name: "Anxious but Trying", members: "4.1K", icon: "💛", color: "#2E4A3A", desc: "One small win at a time", isOwned: false },
  { name: "Rausche", members: "512", icon: "✨", color: "#4A3070", desc: "Welcome — share feedback and connect", isOwned: false },
];

const ICON_OPTIONS = ["🎵", "🎮", "🏀", "🎨", "🌍", "💪", "📚", "🎬", "🍕", "🐾", "🌙", "☕", "🧠", "💬", "🎓", "✨", "🌸", "🔥", "💛", "🎧"];

const COLOR_OPTIONS = [
  "#4A3070", "#2D4A30", "#4A3040", "#1E3A4A",
  "#3A2E1E", "#2E2A3A", "#1E2A3A", "#4A2030",
  "#2A4A3A", "#3A3A1E", "#2D2654", "#4A3A1E",
];

// Mock posts per community
function getMockPosts(communityName: string): CommunityPost[] {
  if (communityName === "Can't Sleep Club") return [
    { id: 1, author: "Maya", emoji: "🌙", color: "#B87FD6", text: "What's keeping you up tonight?", timeAgo: "2m ago", likes: 47, liked: false },
    { id: 2, author: "Sam", emoji: "☕", color: "#D6A87F", text: "Overthinking a conversation from 3 days ago", timeAgo: "15m ago", likes: 24, liked: true },
    { id: 3, author: "Alex", emoji: "🌿", color: "#7FD6A8", text: "My brain decided now is the time to plan my whole future", timeAgo: "1h ago", likes: 31, liked: false },
  ];
  if (communityName === "First Gen Students") return [
    { id: 1, author: "Jordan", emoji: "🏀", color: "#7FB8D6", text: "What's something you wish someone told you before college?", timeAgo: "5m ago", likes: 83, liked: true },
    { id: 2, author: "Rin", emoji: "🦋", color: "#D67FA8", text: "It's okay to not know the unwritten rules", timeAgo: "30m ago", likes: 19, liked: false },
    { id: 3, author: "Drew", emoji: "🎸", color: "#A87FD6", text: "Office hours are literally free mentoring", timeAgo: "2h ago", likes: 56, liked: true },
  ];
  if (communityName === "Founder Therapy") return [
    { id: 1, author: "Sam", emoji: "☕", color: "#D6A87F", text: "Biggest lesson from your last failure?", timeAgo: "10m ago", likes: 31, liked: false },
    { id: 2, author: "Alex", emoji: "🌿", color: "#7FD6A8", text: "The idea wasn't the problem, the timing was", timeAgo: "45m ago", likes: 15, liked: false },
    { id: 3, author: "Maya", emoji: "🌙", color: "#B87FD6", text: "I confused being busy with making progress", timeAgo: "3h ago", likes: 27, liked: true },
  ];
  if (communityName === "Anxious but Trying") return [
    { id: 1, author: "Jordan", emoji: "🏀", color: "#7FB8D6", text: "One small win from today?", timeAgo: "3m ago", likes: 112, liked: false },
    { id: 2, author: "Rin", emoji: "🦋", color: "#D67FA8", text: "Made a phone call I'd been avoiding for 2 weeks", timeAgo: "20m ago", likes: 44, liked: true },
    { id: 3, author: "Drew", emoji: "🎸", color: "#A87FD6", text: "Went to the gym even though I almost didn't", timeAgo: "1h ago", likes: 38, liked: false },
  ];
  if (communityName === "Rausche") return [
    { id: 1, author: "Ray", emoji: "✨", color: "#9B6BC2", text: "Welcome to Rausche! Introduce yourself 👋", timeAgo: "1h ago", likes: 8, liked: false },
    { id: 2, author: "Maya", emoji: "🌙", color: "#B87FD6", text: "Love the vibe here already", timeAgo: "3h ago", likes: 12, liked: true },
  ];
  return [
    { id: 1, author: "You", emoji: "😊", color: "#9B6BC2", text: "Welcome to this community! Share something cool.", timeAgo: "just now", likes: 0, liked: false },
  ];
}

// ─── Link Embed Card Component ───

function LinkEmbedCard({ link }: { link: LinkEmbed }) {
  const [expanded, setExpanded] = useState(false);

  // YouTube — show iframe embed
  if (link.platform === "youtube" && link.embedUrl) {
    return (
      <div className="mt-2 rounded-xl overflow-hidden border border-soft-lavender-border">
        {expanded ? (
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={`${link.embedUrl}?autoplay=1`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        ) : (
          <button
            onClick={() => setExpanded(true)}
            className="w-full bg-black/90 flex items-center justify-center py-8 cursor-pointer hover:bg-black/80 transition-colors"
          >
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-2xl ml-1">▶</span>
              </div>
              <p className="text-white/80 text-[12px] font-medium">Tap to play</p>
            </div>
          </button>
        )}
        <div className="bg-white px-3 py-2 flex items-center gap-2">
          <span className="text-sm">{link.icon}</span>
          <span className="text-[11px] font-semibold text-soft-purple-deep">{link.label}</span>
        </div>
      </div>
    );
  }

  // TikTok — show iframe embed
  if (link.platform === "tiktok" && link.embedUrl) {
    return (
      <div className="mt-2 rounded-xl overflow-hidden border border-soft-lavender-border">
        {expanded ? (
          <iframe
            src={link.embedUrl}
            className="w-full"
            style={{ height: "400px" }}
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setExpanded(true)}
            className="w-full bg-gradient-to-br from-black to-gray-900 flex items-center justify-center py-8 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="text-center">
              <span className="text-4xl">🎵</span>
              <p className="text-white/80 text-[12px] font-medium mt-2">Tap to play TikTok</p>
            </div>
          </button>
        )}
        <div className="bg-white px-3 py-2 flex items-center gap-2">
          <span className="text-sm">{link.icon}</span>
          <span className="text-[11px] font-semibold" style={{ color: link.color }}>{link.label}</span>
        </div>
      </div>
    );
  }

  // All other platforms — clickable link card
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 rounded-xl border border-soft-lavender-border overflow-hidden flex items-center gap-3 bg-white hover:bg-soft-lavender-bg transition-colors cursor-pointer block"
    >
      <div
        className="w-14 h-14 flex-shrink-0 flex items-center justify-center text-xl"
        style={{ backgroundColor: `${link.color}15` }}
      >
        <span>{link.icon}</span>
      </div>
      <div className="py-2 pr-3 flex-1 min-w-0">
        <p className="text-[12px] font-semibold text-soft-purple-deeper truncate">{link.label}</p>
        <p className="text-[10px] text-soft-muted truncate">{link.url}</p>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B0A6CC" strokeWidth="2" strokeLinecap="round" className="mr-3 flex-shrink-0">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15,3 21,3 21,9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  );
}

// ─── Main Component ───

export default function CommunityPage() {
  const [communities, setCommunities] = useState<Community[]>(DEFAULT_COMMUNITIES);
  const [showCreate, setShowCreate] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);
  const [openCommunity, setOpenCommunity] = useState<number | null>(null);

  // Feed state
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [newPostText, setNewPostText] = useState("");
  const [newPostLink, setNewPostLink] = useState("");
  const [detectedLink, setDetectedLink] = useState<LinkEmbed | null>(null);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const feedEndRef = useRef<HTMLDivElement>(null);

  // Create form state
  const [newName, setNewName] = useState("");
  const [newIcon, setNewIcon] = useState("🎵");
  const [newColor, setNewColor] = useState("#4A3070");
  const [newDesc, setNewDesc] = useState("");

  // Load posts when opening a community
  useEffect(() => {
    if (openCommunity !== null) {
      setPosts(getMockPosts(communities[openCommunity].name));
      setNewPostText("");
      setNewPostLink("");
      setDetectedLink(null);
      setShowLinkInput(false);
    }
  }, [openCommunity, communities]);

  // Auto-detect links in link input
  useEffect(() => {
    if (newPostLink.trim()) {
      const parsed = parseLink(newPostLink);
      setDetectedLink(parsed);
    } else {
      setDetectedLink(null);
    }
  }, [newPostLink]);

  const handleCreatePost = () => {
    if (!newPostText.trim() && !detectedLink) return;
    const newPost: CommunityPost = {
      id: Date.now(),
      author: "You",
      emoji: "😊",
      color: "#9B6BC2",
      text: newPostText.trim(),
      link: detectedLink ?? undefined,
      timeAgo: "just now",
      likes: 0,
      liked: false,
    };
    setPosts([newPost, ...posts]);
    setNewPostText("");
    setNewPostLink("");
    setDetectedLink(null);
    setShowLinkInput(false);
  };

  const toggleLike = (postId: number) => {
    setPosts(posts.map((p) =>
      p.id === postId ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p
    ));
  };

  const handleCreate = () => {
    if (!newName.trim()) return;
    setCommunities([...communities, { name: newName.trim(), members: "0", icon: newIcon, color: newColor, desc: newDesc.trim() || "A new community", isOwned: true }]);
    setNewName(""); setNewIcon("🎵"); setNewColor("#4A3070"); setNewDesc("");
    setShowCreate(false);
  };

  const handleDelete = (index: number) => {
    setCommunities(communities.filter((_, i) => i !== index));
    setConfirmDelete(null);
  };

  // ─── Community Feed View ───
  if (openCommunity !== null) {
    const c = communities[openCommunity];
    return (
      <div className="flex flex-col h-[100dvh]">
        {/* Header */}
        <div className="px-4 pt-5 pb-3" style={{ backgroundColor: c.color }}>
          <div className="flex items-center gap-3 mb-2">
            <button onClick={() => setOpenCommunity(null)} className="text-white/80 hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <span className="text-2xl">{c.icon}</span>
            <div className="flex-1">
              <h2 className="font-display font-bold text-base text-white">{c.name}</h2>
              <p className="text-[11px] text-white/60">{c.members} members</p>
            </div>
          </div>
        </div>

        {/* Feed */}
        <div className="flex-1 overflow-y-auto px-4 py-3 bg-soft-lavender-bg/30">
          <div ref={feedEndRef} />

          {posts.length === 0 ? (
            <div className="text-center py-12">
              <span className="text-4xl">{c.icon}</span>
              <p className="text-soft-muted text-sm font-medium mt-3">No posts yet. Be the first!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-softer border border-soft-lavender-border p-4">
                  {/* Author row */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base" style={{ background: `linear-gradient(135deg, ${post.color}, ${post.color}88)` }}>
                      {post.emoji}
                    </div>
                    <div className="flex-1">
                      <p className="text-[13px] font-semibold text-soft-purple-deeper">{post.author}</p>
                    </div>
                    <p className="text-[10px] text-soft-muted-light">{post.timeAgo}</p>
                  </div>

                  {/* Text */}
                  {post.text && <p className="text-[13px] text-soft-purple-deeper leading-relaxed font-medium">{post.text}</p>}

                  {/* Link embed */}
                  {post.link && <LinkEmbedCard link={post.link} />}

                  {/* Actions */}
                  <div className="flex items-center gap-4 mt-3 pt-2 border-t border-soft-lavender-border/50">
                    <button onClick={() => toggleLike(post.id)} className="flex items-center gap-1.5 group">
                      <span className={`text-base transition-transform group-hover:scale-110 ${post.liked ? "" : "grayscale"}`}>
                        {post.liked ? "💜" : "🤍"}
                      </span>
                      <span className={`text-[11px] font-semibold ${post.liked ? "text-soft-purple" : "text-soft-muted"}`}>{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-soft-muted hover:text-soft-purple transition-colors">
                      <span className="text-base">💬</span>
                      <span className="text-[11px] font-semibold">Reply</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Compose bar */}
        <div className="bg-white border-t border-soft-lavender-border px-4 pt-3 pb-6">
          {/* Link preview */}
          {detectedLink && (
            <div className="mb-2 flex items-center gap-2 bg-soft-lavender-bg rounded-lg px-3 py-2">
              <span>{detectedLink.icon}</span>
              <span className="text-[11px] font-semibold text-soft-purple-deep flex-1 truncate">{detectedLink.label}</span>
              <button onClick={() => { setNewPostLink(""); setDetectedLink(null); }} className="text-soft-muted text-xs hover:text-red-400">✕</button>
            </div>
          )}

          {/* Link input */}
          {showLinkInput && (
            <div className="mb-2">
              <input
                type="url"
                value={newPostLink}
                onChange={(e) => setNewPostLink(e.target.value)}
                placeholder="Paste a YouTube, TikTok, X, or any link..."
                className="w-full bg-soft-lavender-bg rounded-xl px-3.5 py-2.5 text-[13px] text-soft-purple-deeper font-medium border border-soft-lavender-border outline-none focus:ring-2 focus:ring-soft-purple/20"
                autoFocus
              />
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowLinkInput(!showLinkInput)}
              className={`w-9 h-9 rounded-xl flex items-center justify-center text-base transition-colors flex-shrink-0 ${
                showLinkInput ? "bg-soft-purple text-white" : "bg-soft-lavender-bg hover:bg-soft-lavender-light"
              }`}
            >
              🔗
            </button>
            <input
              type="text"
              value={newPostText}
              onChange={(e) => setNewPostText(e.target.value)}
              placeholder="Share something..."
              className="flex-1 bg-soft-lavender-bg rounded-xl px-3.5 py-2.5 text-[13px] text-soft-purple-deeper font-medium border border-soft-lavender-border outline-none focus:ring-2 focus:ring-soft-purple/20"
              onKeyDown={(e) => { if (e.key === "Enter") handleCreatePost(); }}
            />
            <button
              onClick={handleCreatePost}
              disabled={!newPostText.trim() && !detectedLink}
              className={`w-9 h-9 rounded-xl flex items-center justify-center text-base transition-colors flex-shrink-0 ${
                newPostText.trim() || detectedLink
                  ? "bg-soft-purple text-white hover:bg-soft-purple-dark"
                  : "bg-soft-lavender-light text-soft-muted-light cursor-not-allowed"
              }`}
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Community Grid View ───
  return (
    <div className="px-5 pt-6 pb-24">
      <h1 className="font-display font-bold text-2xl text-soft-purple-deeper mb-1">Communities</h1>
      <p className="text-soft-muted text-sm font-medium mb-5">Find your people</p>

      <button onClick={() => setShowCreate(true)} className="w-full mb-5 py-3 rounded-xl border-2 border-dashed border-soft-lavender text-[14px] font-semibold text-soft-purple bg-white hover:bg-soft-lavender-bg transition-colors cursor-pointer flex items-center justify-center gap-2">
        <span className="text-lg">+</span> Create a Community
      </button>

      <div className="grid grid-cols-2 gap-2.5">
        {communities.map((c, i) => (
          <div key={`${c.name}-${i}`} onClick={() => setOpenCommunity(i)} className="rounded-softer overflow-hidden border border-soft-lavender-border cursor-pointer hover:shadow-md transition-shadow relative">
            <div className="p-4 pb-3" style={{ backgroundColor: c.color }}>
              <div className="flex items-start justify-between">
                <span className="text-2xl">{c.icon}</span>
                {c.isOwned && (
                  <button onClick={(e) => { e.stopPropagation(); setConfirmDelete(i); }} className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-white/80 text-xs hover:bg-white/30 transition-colors">✕</button>
                )}
              </div>
              <p className="font-bold text-sm text-white mt-2">{c.name}</p>
              <p className="text-[11px] text-white/60 mt-0.5">{c.members} members</p>
            </div>
            <div className="bg-white p-3">
              <p className="text-xs text-soft-muted font-medium leading-snug">{c.desc}</p>
              {c.isOwned && <p className="text-[9px] text-soft-purple font-bold mt-1.5 uppercase tracking-wider">Your community</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Create Community Modal */}
      {showCreate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-5" style={{ background: "rgba(45, 34, 84, 0.6)", backdropFilter: "blur(8px)" }} onClick={() => setShowCreate(false)}>
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-[380px] px-5 pt-6 pb-7 max-h-[85vh] overflow-y-auto" style={{ borderRadius: "24px" }}>
            <h2 className="font-display font-bold text-lg text-soft-purple-deeper mb-5">Create a Community</h2>

            {/* Preview */}
            <div className="rounded-softer overflow-hidden border border-soft-lavender-border mb-5">
              <div className="p-4 pb-3" style={{ backgroundColor: newColor }}>
                <span className="text-2xl">{newIcon}</span>
                <p className="font-bold text-sm text-white mt-2">{newName || "Community Name"}</p>
                <p className="text-[11px] text-white/60 mt-0.5">0 members</p>
              </div>
              <div className="bg-white p-3">
                <p className="text-xs text-soft-muted font-medium leading-snug">{newDesc || "Your community description"}</p>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">Community Name</label>
              <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} maxLength={30} placeholder="Name your community" className="w-full bg-soft-lavender-bg rounded-xl px-4 py-3 text-[14px] text-soft-purple-deeper font-medium border border-soft-lavender-border outline-none focus:ring-2 focus:ring-soft-purple/20" />
            </div>

            <div className="mb-4">
              <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">Description</label>
              <input type="text" value={newDesc} onChange={(e) => setNewDesc(e.target.value)} maxLength={60} placeholder="What's this community about?" className="w-full bg-soft-lavender-bg rounded-xl px-4 py-3 text-[14px] text-soft-purple-deeper font-medium border border-soft-lavender-border outline-none focus:ring-2 focus:ring-soft-purple/20" />
            </div>

            <div className="mb-4">
              <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">Choose an Icon</label>
              <div className="flex flex-wrap gap-2">
                {ICON_OPTIONS.map((icon) => (
                  <button key={icon} onClick={() => setNewIcon(icon)} className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center transition-all ${newIcon === icon ? "bg-soft-purple text-white scale-110 shadow-md" : "bg-soft-lavender-bg hover:bg-soft-lavender-light"}`}>{icon}</button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">Choose a Color</label>
              <div className="flex flex-wrap gap-2">
                {COLOR_OPTIONS.map((color) => (
                  <button key={color} onClick={() => setNewColor(color)} className={`w-10 h-10 rounded-xl transition-all ${newColor === color ? "scale-110 shadow-md ring-2 ring-soft-purple ring-offset-2" : "hover:scale-105"}`} style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setShowCreate(false)} className="flex-1 py-3 rounded-xl border border-soft-lavender text-[13px] font-semibold text-soft-muted hover:bg-soft-lavender-bg transition-colors">Cancel</button>
              <button onClick={handleCreate} className={`flex-1 py-3 rounded-xl text-[13px] font-semibold transition-colors ${newName.trim() ? "bg-soft-purple text-white hover:bg-soft-purple-dark" : "bg-soft-lavender-light text-soft-muted-light cursor-not-allowed"}`} disabled={!newName.trim()}>Create</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {confirmDelete !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-5" style={{ background: "rgba(45, 34, 84, 0.6)", backdropFilter: "blur(8px)" }} onClick={() => setConfirmDelete(null)}>
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-[320px] px-5 pt-6 pb-6 text-center" style={{ borderRadius: "24px" }}>
            <div className="text-4xl mb-3">{communities[confirmDelete].icon}</div>
            <h3 className="font-display font-bold text-[16px] text-soft-purple-deeper mb-1.5">Delete &ldquo;{communities[confirmDelete].name}&rdquo;?</h3>
            <p className="text-[13px] text-soft-muted font-medium mb-5">This can&apos;t be undone. Your community and all its content will be removed.</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirmDelete(null)} className="flex-1 py-2.5 rounded-xl border border-soft-lavender text-[13px] font-semibold text-soft-muted hover:bg-soft-lavender-bg transition-colors">Keep it</button>
              <button onClick={() => handleDelete(confirmDelete)} className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-[13px] font-semibold hover:bg-red-600 transition-colors">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
