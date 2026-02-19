"use client";

import { useState } from "react";

interface Community {
  name: string;
  members: string;
  icon: string;
  color: string;
  desc: string;
  isOwned: boolean;
}

const DEFAULT_COMMUNITIES: Community[] = [
  { name: "Cats", members: "5.2K", icon: "🐱", color: "#4A3070", desc: "Everything cats — pics, stories, and purrs", isOwned: false },
  { name: "Dogs", members: "4.7K", icon: "🐶", color: "#2D4A30", desc: "Good boys, good girls, good vibes", isOwned: false },
  { name: "Photos", members: "4.1K", icon: "📸", color: "#4A3040", desc: "Share what you see through your lens", isOwned: false },
];

const ICON_OPTIONS = ["🎵", "🎮", "🏀", "🎨", "🌍", "💪", "📚", "🎬", "🍕", "🐾", "🌙", "☕", "🧠", "💬", "🎓", "✨", "🌸", "🔥", "💛", "🎧"];

const COLOR_OPTIONS = [
  "#4A3070", "#2D4A30", "#4A3040", "#1E3A4A",
  "#3A2E1E", "#2E2A3A", "#1E2A3A", "#4A2030",
  "#2A4A3A", "#3A3A1E", "#2D2654", "#4A3A1E",
];

export default function CommunityPage() {
  const [communities, setCommunities] = useState<Community[]>(DEFAULT_COMMUNITIES);
  const [showCreate, setShowCreate] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  // Create form state
  const [newName, setNewName] = useState("");
  const [newIcon, setNewIcon] = useState("🎵");
  const [newColor, setNewColor] = useState("#4A3070");
  const [newDesc, setNewDesc] = useState("");

  const handleCreate = () => {
    if (!newName.trim()) return;
    const newCommunity: Community = {
      name: newName.trim(),
      members: "0",
      icon: newIcon,
      color: newColor,
      desc: newDesc.trim() || "A new community",
      isOwned: true,
    };
    setCommunities([...communities, newCommunity]);
    setNewName("");
    setNewIcon("🎵");
    setNewColor("#4A3070");
    setNewDesc("");
    setShowCreate(false);
  };

  const handleDelete = (index: number) => {
    setCommunities(communities.filter((_, i) => i !== index));
    setConfirmDelete(null);
  };

  return (
    <div className="px-5 pt-6 pb-24">
      <div className="flex items-center justify-between mb-1">
        <h1 className="font-display font-bold text-2xl text-soft-purple-deeper">
          Communities
        </h1>
      </div>
      <p className="text-soft-muted text-sm font-medium mb-5">
        Find your people
      </p>

      {/* Search */}
      <div className="bg-white rounded-soft border border-soft-lavender-border px-4 py-3 mb-4">
        <p className="text-soft-muted-light text-sm">Search communities...</p>
      </div>

      {/* Create Community Button */}
      <button
        onClick={() => setShowCreate(true)}
        className="w-full mb-5 py-3 rounded-xl border-2 border-dashed border-soft-lavender text-[14px] font-semibold text-soft-purple bg-white hover:bg-soft-lavender-bg transition-colors cursor-pointer flex items-center justify-center gap-2"
      >
        <span className="text-lg">+</span>
        Create a Community
      </button>

      {/* Community grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {communities.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="rounded-softer overflow-hidden border border-soft-lavender-border cursor-pointer hover:shadow-md transition-shadow relative"
          >
            <div className="p-4 pb-3" style={{ backgroundColor: c.color }}>
              <div className="flex items-start justify-between">
                <span className="text-2xl">{c.icon}</span>
                {c.isOwned && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setConfirmDelete(i);
                    }}
                    className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-white/80 text-xs hover:bg-white/30 transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>
              <p className="font-bold text-sm text-white mt-2">{c.name}</p>
              <p className="text-[11px] text-white/60 mt-0.5">{c.members} members</p>
            </div>
            <div className="bg-white p-3">
              <p className="text-xs text-soft-muted font-medium leading-snug">{c.desc}</p>
              {c.isOwned && (
                <p className="text-[9px] text-soft-purple font-bold mt-1.5 uppercase tracking-wider">
                  Your community
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Create Community Modal */}
      {showCreate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-5"
          style={{ background: "rgba(45, 34, 84, 0.6)", backdropFilter: "blur(8px)" }}
          onClick={() => setShowCreate(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-[380px] px-5 pt-6 pb-7 max-h-[85vh] overflow-y-auto"
            style={{ borderRadius: "24px" }}
          >
            <h2 className="font-display font-bold text-lg text-soft-purple-deeper mb-5">
              Create a Community
            </h2>

            {/* Preview */}
            <div className="rounded-softer overflow-hidden border border-soft-lavender-border mb-5">
              <div className="p-4 pb-3" style={{ backgroundColor: newColor }}>
                <span className="text-2xl">{newIcon}</span>
                <p className="font-bold text-sm text-white mt-2">
                  {newName || "Community Name"}
                </p>
                <p className="text-[11px] text-white/60 mt-0.5">0 members</p>
              </div>
              <div className="bg-white p-3">
                <p className="text-xs text-soft-muted font-medium leading-snug">
                  {newDesc || "Your community description"}
                </p>
              </div>
            </div>

            {/* Community Name */}
            <div className="mb-4">
              <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">
                Community Name
              </label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                maxLength={30}
                placeholder="Name your community"
                className="w-full bg-soft-lavender-bg rounded-xl px-4 py-3 text-[14px] text-soft-purple-deeper font-medium border border-soft-lavender-border outline-none focus:ring-2 focus:ring-soft-purple/20"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">
                Description
              </label>
              <input
                type="text"
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                maxLength={60}
                placeholder="What's this community about?"
                className="w-full bg-soft-lavender-bg rounded-xl px-4 py-3 text-[14px] text-soft-purple-deeper font-medium border border-soft-lavender-border outline-none focus:ring-2 focus:ring-soft-purple/20"
              />
            </div>

            {/* Icon Picker */}
            <div className="mb-4">
              <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">
                Choose an Icon
              </label>
              <div className="flex flex-wrap gap-2">
                {ICON_OPTIONS.map((icon) => (
                  <button
                    key={icon}
                    onClick={() => setNewIcon(icon)}
                    className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center transition-all ${
                      newIcon === icon
                        ? "bg-soft-purple text-white scale-110 shadow-md"
                        : "bg-soft-lavender-bg hover:bg-soft-lavender-light"
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Picker */}
            <div className="mb-6">
              <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">
                Choose a Color
              </label>
              <div className="flex flex-wrap gap-2">
                {COLOR_OPTIONS.map((color) => (
                  <button
                    key={color}
                    onClick={() => setNewColor(color)}
                    className={`w-10 h-10 rounded-xl transition-all ${
                      newColor === color
                        ? "scale-110 shadow-md ring-2 ring-soft-purple ring-offset-2"
                        : "hover:scale-105"
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowCreate(false)}
                className="flex-1 py-3 rounded-xl border border-soft-lavender text-[13px] font-semibold text-soft-muted hover:bg-soft-lavender-bg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className={`flex-1 py-3 rounded-xl text-[13px] font-semibold transition-colors ${
                  newName.trim()
                    ? "bg-soft-purple text-white hover:bg-soft-purple-dark"
                    : "bg-soft-lavender-light text-soft-muted-light cursor-not-allowed"
                }`}
                disabled={!newName.trim()}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {confirmDelete !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-5"
          style={{ background: "rgba(45, 34, 84, 0.6)", backdropFilter: "blur(8px)" }}
          onClick={() => setConfirmDelete(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-[320px] px-5 pt-6 pb-6 text-center"
            style={{ borderRadius: "24px" }}
          >
            <div className="text-4xl mb-3">
              {communities[confirmDelete].icon}
            </div>
            <h3 className="font-display font-bold text-[16px] text-soft-purple-deeper mb-1.5">
              Delete &ldquo;{communities[confirmDelete].name}&rdquo;?
            </h3>
            <p className="text-[13px] text-soft-muted font-medium mb-5">
              This can&apos;t be undone. Your community and all its content will be removed.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 py-2.5 rounded-xl border border-soft-lavender text-[13px] font-semibold text-soft-muted hover:bg-soft-lavender-bg transition-colors"
              >
                Keep it
              </button>
              <button
                onClick={() => handleDelete(confirmDelete)}
                className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-[13px] font-semibold hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
