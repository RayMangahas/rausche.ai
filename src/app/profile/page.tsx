"use client";

import { useState } from "react";
import { useProfile } from "@/lib/ProfileContext";

function wordCount(text: string) {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
}

export default function ProfilePage() {
  const { profile, setProfile } = useProfile();

  // Edit profile modal
  const [nameDraft, setNameDraft] = useState(profile.name);
  const [usernameDraft, setUsernameDraft] = useState(profile.username);
  const [editingProfile, setEditingProfile] = useState(false);

  // Question editing
  const [q1Draft, setQ1Draft] = useState("");
  const [q2Draft, setQ2Draft] = useState("");
  const [qualitiesDraft, setQualitiesDraft] = useState(["", "", ""]);
  const [editing, setEditing] = useState<string | null>(null);

  const handleQ1Change = (val: string) => {
    if (wordCount(val) <= 200) setQ1Draft(val);
  };

  const handleQ2Change = (val: string) => {
    if (wordCount(val) <= 200) setQ2Draft(val);
  };

  const handleQualityChange = (index: number, val: string) => {
    if (val.length <= 20) {
      const updated = [...qualitiesDraft];
      updated[index] = val;
      setQualitiesDraft(updated);
    }
  };

  const startEditing = (field: string) => {
    if (field === "q1") setQ1Draft(profile.q1);
    if (field === "q2") setQ2Draft(profile.q2);
    if (field === "q3") setQualitiesDraft([...profile.qualities]);
    setEditing(field);
  };

  const handleSave = () => {
    if (editing === "q1") setProfile({ q1: q1Draft });
    if (editing === "q2") setProfile({ q2: q2Draft });
    if (editing === "q3") setProfile({ qualities: [...qualitiesDraft] });
    setEditing(null);
  };

  const handleCancel = () => {
    setEditing(null);
  };

  const openEditProfile = () => {
    setNameDraft(profile.name);
    setUsernameDraft(profile.username);
    setEditingProfile(true);
  };

  const saveProfile = () => {
    setProfile({ name: nameDraft, username: usernameDraft });
    setEditingProfile(false);
  };

  return (
    <div className="px-5 pt-6 pb-24">
      {/* Profile header */}
      <div className="flex items-center gap-4 mb-3">
        <div className="w-16 h-16 rounded-soft bg-gradient-to-br from-soft-purple to-soft-lavender flex items-center justify-center text-white text-2xl font-bold font-display">
          {profile.name.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1">
          <h1 className="font-display font-bold text-xl text-soft-purple-deeper">
            {profile.name}
          </h1>
          <p className="text-soft-muted text-sm font-medium">@{profile.username}</p>
        </div>
      </div>

      {/* Edit Profile Button */}
      <button
        onClick={openEditProfile}
        className="w-full mb-5 py-2 rounded-xl border border-soft-lavender text-[13px] font-semibold text-soft-purple bg-white hover:bg-soft-lavender-bg transition-colors cursor-pointer"
      >
        Edit Profile
      </button>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        {[
          { label: "Calls", value: "24" },
          { label: "Circles", value: "3" },
          { label: "Communities", value: "5" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-soft border border-soft-lavender-border p-4 text-center"
          >
            <p className="font-bold text-xl text-soft-purple-deeper">
              {stat.value}
            </p>
            <p className="text-[11px] text-soft-muted font-medium mt-0.5">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Three Questions */}
      <div className="bg-white rounded-softer border border-soft-lavender-border p-5 mb-3">
        <p className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider mb-4">
          Get to know me
        </p>

        <div className="flex flex-col gap-5">
          {/* Q1 */}
          <div>
            <p className="text-[13px] font-bold text-soft-purple-deep mb-1.5">
              When you&apos;re down, what usually cheers you up?
            </p>
            {editing === "q1" ? (
              <div>
                <textarea
                  value={q1Draft}
                  onChange={(e) => handleQ1Change(e.target.value)}
                  autoFocus
                  placeholder="Type your answer..."
                  className="w-full bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] text-soft-purple-deeper leading-relaxed font-medium border-l-[3px] border-soft-lavender outline-none resize-none min-h-[80px] focus:ring-2 focus:ring-soft-purple/20"
                />
                <div className="flex items-center justify-between mt-1.5">
                  <p className="text-[10px] text-soft-muted-light">
                    {wordCount(q1Draft)} / 200 words
                  </p>
                  <div className="flex gap-2">
                    <button onClick={handleCancel} className="text-[12px] text-soft-muted font-semibold px-3 py-1 rounded-lg hover:bg-soft-lavender-bg transition-colors">Cancel</button>
                    <button onClick={handleSave} className="text-[12px] text-white font-semibold px-4 py-1 rounded-lg bg-soft-purple hover:bg-soft-purple-dark transition-colors">Save</button>
                  </div>
                </div>
              </div>
            ) : (
              <div onClick={() => startEditing("q1")} className="bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] leading-relaxed font-medium border-l-[3px] border-soft-lavender cursor-pointer hover:bg-soft-lavender-light transition-colors min-h-[44px]">
                {profile.q1 ? (
                  <span className="text-soft-purple-deeper">{profile.q1}</span>
                ) : (
                  <span className="text-soft-muted-light italic">Tap to answer...</span>
                )}
              </div>
            )}
          </div>

          {/* Q2 */}
          <div>
            <p className="text-[13px] font-bold text-soft-purple-deep mb-1.5">
              What&apos;s a non-school topic you&apos;ve explored deeply just because you were curious?
            </p>
            {editing === "q2" ? (
              <div>
                <textarea
                  value={q2Draft}
                  onChange={(e) => handleQ2Change(e.target.value)}
                  autoFocus
                  placeholder="Type your answer..."
                  className="w-full bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] text-soft-purple-deeper leading-relaxed font-medium border-l-[3px] border-soft-lavender outline-none resize-none min-h-[80px] focus:ring-2 focus:ring-soft-purple/20"
                />
                <div className="flex items-center justify-between mt-1.5">
                  <p className="text-[10px] text-soft-muted-light">
                    {wordCount(q2Draft)} / 200 words
                  </p>
                  <div className="flex gap-2">
                    <button onClick={handleCancel} className="text-[12px] text-soft-muted font-semibold px-3 py-1 rounded-lg hover:bg-soft-lavender-bg transition-colors">Cancel</button>
                    <button onClick={handleSave} className="text-[12px] text-white font-semibold px-4 py-1 rounded-lg bg-soft-purple hover:bg-soft-purple-dark transition-colors">Save</button>
                  </div>
                </div>
              </div>
            ) : (
              <div onClick={() => startEditing("q2")} className="bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] leading-relaxed font-medium border-l-[3px] border-soft-lavender cursor-pointer hover:bg-soft-lavender-light transition-colors min-h-[44px]">
                {profile.q2 ? (
                  <span className="text-soft-purple-deeper">{profile.q2}</span>
                ) : (
                  <span className="text-soft-muted-light italic">Tap to answer...</span>
                )}
              </div>
            )}
          </div>

          {/* Q3 */}
          <div>
            <p className="text-[13px] font-bold text-soft-purple-deep mb-1.5">
              What kind of person do you hope to become? Pick three qualities.
            </p>
            {editing === "q3" ? (
              <div>
                <div className="flex flex-wrap gap-2">
                  {qualitiesDraft.map((q, i) => (
                    <div key={i} className="relative">
                      <input
                        type="text"
                        value={q}
                        onChange={(e) => handleQualityChange(i, e.target.value)}
                        placeholder={`Quality ${i + 1}`}
                        maxLength={20}
                        className="bg-soft-lavender-bg rounded-full px-3.5 py-1.5 text-xs font-semibold text-soft-purple border border-soft-lavender outline-none w-[120px] text-center placeholder:text-soft-muted-light placeholder:font-medium focus:ring-2 focus:ring-soft-purple/20"
                      />
                      {q && (
                        <span className="absolute -top-1.5 -right-1.5 text-[8px] text-soft-muted-light bg-white rounded-full px-1">
                          {q.length}/20
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end gap-2 mt-2.5">
                  <button onClick={handleCancel} className="text-[12px] text-soft-muted font-semibold px-3 py-1 rounded-lg hover:bg-soft-lavender-bg transition-colors">Cancel</button>
                  <button onClick={handleSave} className="text-[12px] text-white font-semibold px-4 py-1 rounded-lg bg-soft-purple hover:bg-soft-purple-dark transition-colors">Save</button>
                </div>
              </div>
            ) : (
              <div onClick={() => startEditing("q3")} className="cursor-pointer">
                {profile.qualities.some((q) => q) ? (
                  <div className="flex flex-wrap gap-2">
                    {profile.qualities.filter((q) => q).map((q, i) => (
                      <span key={i} className="bg-soft-lavender-bg rounded-full px-3.5 py-1.5 text-xs font-semibold text-soft-purple border border-soft-lavender">{q}</span>
                    ))}
                  </div>
                ) : (
                  <div className="bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] leading-relaxed font-medium border-l-[3px] border-soft-lavender hover:bg-soft-lavender-light transition-colors min-h-[44px]">
                    <span className="text-soft-muted-light italic">Tap to add qualities...</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Settings links */}
      <div className="bg-white rounded-softer border border-soft-lavender-border overflow-hidden">
        {[
          { label: "Edit Folder", icon: "📁" },
          { label: "Notification Preferences", icon: "🔔" },
          { label: "Privacy & Safety", icon: "🔒" },
          { label: "SoftSpace+ Subscription", icon: "⭐" },
          { label: "Help & Feedback", icon: "💬" },
        ].map((item, i) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 px-4 py-3.5 cursor-pointer hover:bg-soft-lavender-bg transition-colors ${i < 4 ? "border-b border-soft-lavender-border" : ""}`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-semibold text-soft-purple-deeper flex-1">{item.label}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B0A6CC" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
          </div>
        ))}
      </div>

      <p className="text-center text-[11px] text-soft-muted-light mt-6 mb-4">
        SoftSpace v0.1.0 · Made with 💜
      </p>

      {/* Edit Profile Modal */}
      {editingProfile && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-5"
          style={{ background: "rgba(45, 34, 84, 0.6)", backdropFilter: "blur(8px)" }}
          onClick={() => setEditingProfile(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-[380px] px-5 pt-6 pb-7"
            style={{ borderRadius: "24px" }}
          >
            <h2 className="font-display font-bold text-lg text-soft-purple-deeper mb-5">Edit Profile</h2>

            <div className="flex justify-center mb-5">
              <div className="w-20 h-20 rounded-soft bg-gradient-to-br from-soft-purple to-soft-lavender flex items-center justify-center text-white text-3xl font-bold font-display">
                {nameDraft.charAt(0).toUpperCase() || "?"}
              </div>
            </div>

            <div className="mb-4">
              <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">Display Name</label>
              <input type="text" value={nameDraft} onChange={(e) => setNameDraft(e.target.value)} maxLength={30} placeholder="Your name" className="w-full bg-soft-lavender-bg rounded-xl px-4 py-3 text-[14px] text-soft-purple-deeper font-medium border border-soft-lavender-border outline-none focus:ring-2 focus:ring-soft-purple/20" />
            </div>

            <div className="mb-6">
              <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">Username</label>
              <div className="flex items-center bg-soft-lavender-bg rounded-xl border border-soft-lavender-border focus-within:ring-2 focus-within:ring-soft-purple/20">
                <span className="text-[14px] text-soft-muted pl-4 font-medium">@</span>
                <input type="text" value={usernameDraft} onChange={(e) => setUsernameDraft(e.target.value.toLowerCase().replace(/[^a-z0-9._]/g, ""))} maxLength={20} placeholder="username" className="flex-1 bg-transparent py-3 pr-4 pl-0.5 text-[14px] text-soft-purple-deeper font-medium outline-none" />
              </div>
              <p className="text-[10px] text-soft-muted-light mt-1">Letters, numbers, dots, and underscores only</p>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setEditingProfile(false)} className="flex-1 py-3 rounded-xl border border-soft-lavender text-[13px] font-semibold text-soft-muted hover:bg-soft-lavender-bg transition-colors">Cancel</button>
              <button onClick={saveProfile} className="flex-1 py-3 rounded-xl bg-soft-purple text-white text-[13px] font-semibold hover:bg-soft-purple-dark transition-colors">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
