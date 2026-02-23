"use client";

import { useState, useRef } from "react";
import { useProfile } from "@/lib/ProfileContext";

function wordCount(text: string) {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
}

const POPULAR_EMOJIS = [
  "😊", "😎", "🤓", "🥰", "😴", "🤔", "😇", "🤗", "😏", "🥳",
  "🤩", "😌", "🫠", "🙃", "😤", "🫡", "🤭", "🥶", "🤯", "😈",
  "👻", "🤖", "👽", "💀", "🎃", "🥺", "😭", "🫶", "✌️", "🤙",
  "🌙", "🌸", "🔥", "⭐", "🎵", "🎮", "📚", "🎨", "🐱", "🐶",
  "🦋", "🌊", "☕", "🍕", "🏀", "🎧", "💜", "✨", "🌈", "🍀",
  "🧠", "💡", "🎯", "🏔️", "🌻", "🍂", "🎭", "🪐", "🦊", "🐻",
  "🐼", "🦄", "🌮", "🍣", "🎸", "🎹", "🏄", "🧘", "🚀", "💎",
  "🌺", "🍄", "🦩", "🐝", "🦈", "🐙", "🦕", "🐢", "🦜", "🐸",
  "🍉", "🍑", "🥑", "🌶️", "🧁", "🍩", "🎂", "🍿", "🥤", "🧋",
  "⚽", "🏈", "🎾", "🏐", "🎳", "🛹", "🏂", "🎿", "🏊", "🚲",
  "🎪", "🎠", "🎡", "🎢", "🗺️", "🏝️", "🌋", "🏰", "🗽", "🌁",
  "💐", "🌷", "🌹", "🪷", "🌿", "🍃", "🎋", "🎍", "🪴", "🌵",
];

const PRESET_COLORS = [
  "#9B6BC2", "#B87FD6", "#7FB8D6", "#D6A87F",
  "#7FD6A8", "#D67FA8", "#A87FD6", "#6B9BC2",
  "#C27F7F", "#7FC2A8", "#E8A0BF", "#A0C4E8",
  "#B5E8A0", "#E8D4A0",
];

export default function ProfilePage() {
  const { profile, setProfile } = useProfile();

  const [nameDraft, setNameDraft] = useState(profile.name);
  const [usernameDraft, setUsernameDraft] = useState(profile.username);
  const [emojiDraft, setEmojiDraft] = useState(profile.avatarEmoji);
  const [colorDraft, setColorDraft] = useState(profile.avatarColor);
  const [avatarTypeDraft, setAvatarTypeDraft] = useState(profile.avatarType);
  const [avatarTextDraft, setAvatarTextDraft] = useState(profile.avatarText);
  const [avatarPhotoDraft, setAvatarPhotoDraft] = useState(profile.avatarPhoto);
  const [editingProfile, setEditingProfile] = useState(false);
  const [customEmojiInput, setCustomEmojiInput] = useState("");

  const [q1Draft, setQ1Draft] = useState("");
  const [q2Draft, setQ2Draft] = useState("");
  const [qualitiesDraft, setQualitiesDraft] = useState(["", "", ""]);
  const [editing, setEditing] = useState<string | null>(null);

  const [q1Media, setQ1Media] = useState<{ url: string; type: "image" | "video" } | null>(null);
  const [q2Media, setQ2Media] = useState<{ url: string; type: "image" | "video" } | null>(null);
  const [q1MediaDraft, setQ1MediaDraft] = useState<{ url: string; type: "image" | "video" } | null>(null);
  const [q2MediaDraft, setQ2MediaDraft] = useState<{ url: string; type: "image" | "video" } | null>(null);

  const q1FileRef = useRef<HTMLInputElement>(null);
  const q2FileRef = useRef<HTMLInputElement>(null);
  const colorPickerRef = useRef<HTMLInputElement>(null);
  const avatarPhotoRef = useRef<HTMLInputElement>(null);

  const handleQ1Change = (val: string) => { if (wordCount(val) <= 200) setQ1Draft(val); };
  const handleQ2Change = (val: string) => { if (wordCount(val) <= 200) setQ2Draft(val); };
  const handleQualityChange = (index: number, val: string) => {
    if (val.length <= 20) {
      const updated = [...qualitiesDraft];
      updated[index] = val;
      setQualitiesDraft(updated);
    }
  };

  const handleFileSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    setDraft: (m: { url: string; type: "image" | "video" } | null) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const type = file.type.startsWith("video") ? "video" : "image";
    setDraft({ url, type });
  };

  const handleAvatarPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAvatarPhotoDraft(url);
    setAvatarTypeDraft("photo");
    if (avatarPhotoRef.current) avatarPhotoRef.current.value = "";
  };

  const handleCustomEmoji = () => {
    const emojiMatch = customEmojiInput.match(/\p{Emoji_Presentation}|\p{Emoji}\uFE0F/u);
    if (emojiMatch) {
      setEmojiDraft(emojiMatch[0]);
      setAvatarTypeDraft("emoji");
      setCustomEmojiInput("");
    }
  };

  const startEditing = (field: string) => {
    if (field === "q1") { setQ1Draft(profile.q1); setQ1MediaDraft(q1Media); }
    if (field === "q2") { setQ2Draft(profile.q2); setQ2MediaDraft(q2Media); }
    if (field === "q3") setQualitiesDraft([...profile.qualities]);
    setEditing(field);
  };

  const handleSave = () => {
    if (editing === "q1") { setProfile({ q1: q1Draft }); setQ1Media(q1MediaDraft); }
    if (editing === "q2") { setProfile({ q2: q2Draft }); setQ2Media(q2MediaDraft); }
    if (editing === "q3") setProfile({ qualities: [...qualitiesDraft] });
    setEditing(null);
  };

  const handleCancel = () => setEditing(null);

  const openEditProfile = () => {
    setNameDraft(profile.name);
    setUsernameDraft(profile.username);
    setEmojiDraft(profile.avatarEmoji);
    setColorDraft(profile.avatarColor);
    setAvatarTypeDraft(profile.avatarType);
    setAvatarTextDraft(profile.avatarText);
    setAvatarPhotoDraft(profile.avatarPhoto);
    setEditingProfile(true);
  };

  const saveProfile = () => {
    setProfile({
      name: nameDraft, username: usernameDraft,
      avatarEmoji: emojiDraft, avatarColor: colorDraft,
      avatarType: avatarTypeDraft, avatarText: avatarTextDraft,
      avatarPhoto: avatarPhotoDraft,
    });
    setEditingProfile(false);
  };

  const Avatar = ({ size, fontSize }: { size: string; fontSize: string }) => {
    const base = `${size} rounded-soft flex items-center justify-center overflow-hidden shadow-lg`;
    if (profile.avatarType === "photo" && profile.avatarPhoto) {
      return <div className={base}><img src={profile.avatarPhoto} alt="Avatar" className="w-full h-full object-cover" /></div>;
    }
    if (profile.avatarType === "text" && profile.avatarText) {
      return <div className={base} style={{ background: `linear-gradient(135deg, ${profile.avatarColor}, ${profile.avatarColor}88)` }}><span className={`${fontSize} font-bold text-white font-display`}>{profile.avatarText}</span></div>;
    }
    return <div className={base} style={{ background: `linear-gradient(135deg, ${profile.avatarColor}, ${profile.avatarColor}88)` }}><span className={fontSize}>{profile.avatarEmoji}</span></div>;
  };

  const AvatarPreview = ({ size, fontSize }: { size: string; fontSize: string }) => {
    const base = `${size} rounded-soft flex items-center justify-center overflow-hidden shadow-lg`;
    if (avatarTypeDraft === "photo" && avatarPhotoDraft) {
      return <div className={base}><img src={avatarPhotoDraft} alt="Avatar" className="w-full h-full object-cover" /></div>;
    }
    if (avatarTypeDraft === "text" && avatarTextDraft) {
      return <div className={base} style={{ background: `linear-gradient(135deg, ${colorDraft}, ${colorDraft}88)` }}><span className={`${fontSize} font-bold text-white font-display`}>{avatarTextDraft}</span></div>;
    }
    return <div className={base} style={{ background: `linear-gradient(135deg, ${colorDraft}, ${colorDraft}88)` }}><span className={fontSize}>{emojiDraft}</span></div>;
  };

  const MediaPreview = ({ media, small }: { media: { url: string; type: "image" | "video" } | null; small?: boolean }) => {
    if (!media) return null;
    const cls = small ? "w-full h-32 rounded-xl mt-2" : "w-full h-40 rounded-xl mt-2";
    if (media.type === "video") return <video src={media.url} className={`${cls} object-cover bg-black`} controls />;
    return <img src={media.url} alt="Uploaded" className={`${cls} object-cover`} />;
  };

  return (
    <div className="px-5 pt-6 pb-24">
      {/* Profile banner */}
      <div className="rounded-softer p-5 mb-5 -mx-1" style={{ background: `linear-gradient(135deg, ${profile.avatarColor}20, ${profile.avatarColor}08)` }}>
        <div className="flex items-center gap-4 mb-3">
          <Avatar size="w-16 h-16" fontSize="text-3xl" />
          <div className="flex-1">
            <h1 className="font-display font-bold text-xl text-soft-purple-deeper">{profile.name}</h1>
            <p className="text-soft-muted text-sm font-medium">@{profile.username}</p>
          </div>
        </div>
        <button onClick={openEditProfile} className="w-full py-2 rounded-xl border text-[13px] font-semibold text-soft-purple bg-white/80 hover:bg-white transition-colors cursor-pointer" style={{ borderColor: `${profile.avatarColor}40` }}>
          Edit Profile
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        {[{ label: "Calls", value: "24" }, { label: "Circles", value: "3" }, { label: "Communities", value: "5" }].map((stat) => (
          <div key={stat.label} className="bg-white rounded-soft border border-soft-lavender-border p-4 text-center">
            <p className="font-bold text-xl text-soft-purple-deeper">{stat.value}</p>
            <p className="text-[11px] text-soft-muted font-medium mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Three Questions */}
      <div className="bg-white rounded-softer border border-soft-lavender-border p-5 mb-3">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg overflow-hidden" style={{ background: `linear-gradient(135deg, ${profile.avatarColor}33, ${profile.avatarColor}18)` }}>
            {profile.avatarType === "photo" && profile.avatarPhoto ? <img src={profile.avatarPhoto} alt="" className="w-full h-full object-cover" /> : profile.avatarType === "text" && profile.avatarText ? <span className="text-xs font-bold" style={{ color: profile.avatarColor }}>{profile.avatarText}</span> : profile.avatarEmoji}
          </div>
          <p className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider">Get to know me</p>
        </div>

        <div className="flex flex-col gap-5">
          {/* Q1 */}
          <div>
            <p className="text-[13px] font-bold text-soft-purple-deep mb-1.5">When you&apos;re down, what usually cheers you up?</p>
            {editing === "q1" ? (
              <div>
                <textarea value={q1Draft} onChange={(e) => handleQ1Change(e.target.value)} autoFocus placeholder="Type your answer..." className="w-full bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] text-soft-purple-deeper leading-relaxed font-medium border-l-[3px] border-soft-lavender outline-none resize-none min-h-[80px] focus:ring-2 focus:ring-soft-purple/20" />
                {q1MediaDraft && (<div className="relative"><MediaPreview media={q1MediaDraft} /><button onClick={() => setQ1MediaDraft(null)} className="absolute top-4 right-2 bg-black/50 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✕</button></div>)}
                <div className="flex items-center justify-between mt-1.5">
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] text-soft-muted-light">{wordCount(q1Draft)} / 200 words</p>
                    <button onClick={() => q1FileRef.current?.click()} className="text-[11px] text-soft-purple font-semibold flex items-center gap-1 hover:text-soft-purple-dark transition-colors">📷 Add photo/video</button>
                    <input ref={q1FileRef} type="file" accept="image/*,video/*" className="hidden" onChange={(e) => handleFileSelect(e, setQ1MediaDraft)} />
                  </div>
                  <div className="flex gap-2">
                    <button onClick={handleCancel} className="text-[12px] text-soft-muted font-semibold px-3 py-1 rounded-lg hover:bg-soft-lavender-bg transition-colors">Cancel</button>
                    <button onClick={handleSave} className="text-[12px] text-white font-semibold px-4 py-1 rounded-lg bg-soft-purple hover:bg-soft-purple-dark transition-colors">Save</button>
                  </div>
                </div>
              </div>
            ) : (
              <div onClick={() => startEditing("q1")} className="cursor-pointer">
                <div className="bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] leading-relaxed font-medium border-l-[3px] border-soft-lavender hover:bg-soft-lavender-light transition-colors min-h-[44px]">
                  {profile.q1 ? <span className="text-soft-purple-deeper">{profile.q1}</span> : <span className="text-soft-muted-light italic">Tap to answer...</span>}
                </div>
                <MediaPreview media={q1Media} small />
              </div>
            )}
          </div>

          {/* Q2 */}
          <div>
            <p className="text-[13px] font-bold text-soft-purple-deep mb-1.5">What&apos;s a non-school topic you&apos;ve explored deeply just because you were curious?</p>
            {editing === "q2" ? (
              <div>
                <textarea value={q2Draft} onChange={(e) => handleQ2Change(e.target.value)} autoFocus placeholder="Type your answer..." className="w-full bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] text-soft-purple-deeper leading-relaxed font-medium border-l-[3px] border-soft-lavender outline-none resize-none min-h-[80px] focus:ring-2 focus:ring-soft-purple/20" />
                {q2MediaDraft && (<div className="relative"><MediaPreview media={q2MediaDraft} /><button onClick={() => setQ2MediaDraft(null)} className="absolute top-4 right-2 bg-black/50 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">✕</button></div>)}
                <div className="flex items-center justify-between mt-1.5">
                  <div className="flex items-center gap-2">
                    <p className="text-[10px] text-soft-muted-light">{wordCount(q2Draft)} / 200 words</p>
                    <button onClick={() => q2FileRef.current?.click()} className="text-[11px] text-soft-purple font-semibold flex items-center gap-1 hover:text-soft-purple-dark transition-colors">📷 Add photo/video</button>
                    <input ref={q2FileRef} type="file" accept="image/*,video/*" className="hidden" onChange={(e) => handleFileSelect(e, setQ2MediaDraft)} />
                  </div>
                  <div className="flex gap-2">
                    <button onClick={handleCancel} className="text-[12px] text-soft-muted font-semibold px-3 py-1 rounded-lg hover:bg-soft-lavender-bg transition-colors">Cancel</button>
                    <button onClick={handleSave} className="text-[12px] text-white font-semibold px-4 py-1 rounded-lg bg-soft-purple hover:bg-soft-purple-dark transition-colors">Save</button>
                  </div>
                </div>
              </div>
            ) : (
              <div onClick={() => startEditing("q2")} className="cursor-pointer">
                <div className="bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] leading-relaxed font-medium border-l-[3px] border-soft-lavender hover:bg-soft-lavender-light transition-colors min-h-[44px]">
                  {profile.q2 ? <span className="text-soft-purple-deeper">{profile.q2}</span> : <span className="text-soft-muted-light italic">Tap to answer...</span>}
                </div>
                <MediaPreview media={q2Media} small />
              </div>
            )}
          </div>

          {/* Q3 */}
          <div>
            <p className="text-[13px] font-bold text-soft-purple-deep mb-1.5">What kind of person do you hope to become? Pick three qualities.</p>
            {editing === "q3" ? (
              <div>
                <div className="flex flex-wrap gap-2">
                  {qualitiesDraft.map((q, i) => (
                    <div key={i} className="relative">
                      <input type="text" value={q} onChange={(e) => handleQualityChange(i, e.target.value)} placeholder={`Quality ${i + 1}`} maxLength={20} className="bg-soft-lavender-bg rounded-full px-3.5 py-1.5 text-xs font-semibold text-soft-purple border border-soft-lavender outline-none w-[120px] text-center placeholder:text-soft-muted-light placeholder:font-medium focus:ring-2 focus:ring-soft-purple/20" />
                      {q && <span className="absolute -top-1.5 -right-1.5 text-[8px] text-soft-muted-light bg-white rounded-full px-1">{q.length}/20</span>}
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
                  <div className="flex flex-wrap gap-2">{profile.qualities.filter((q) => q).map((q, i) => (<span key={i} className="bg-soft-lavender-bg rounded-full px-3.5 py-1.5 text-xs font-semibold text-soft-purple border border-soft-lavender">{q}</span>))}</div>
                ) : (
                  <div className="bg-soft-lavender-bg rounded-xl px-3.5 py-3 text-[13px] leading-relaxed font-medium border-l-[3px] border-soft-lavender hover:bg-soft-lavender-light transition-colors min-h-[44px]"><span className="text-soft-muted-light italic">Tap to add qualities...</span></div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-softer border border-soft-lavender-border overflow-hidden">
        {[{ label: "Edit Folder", icon: "📁" }, { label: "Notification Preferences", icon: "🔔" }, { label: "Privacy & Safety", icon: "🔒" }, { label: "Rausche Ai+ Subscription", icon: "⭐" }, { label: "Help & Feedback", icon: "💬" }].map((item, i) => (
          <div key={item.label} className={`flex items-center gap-3 px-4 py-3.5 cursor-pointer hover:bg-soft-lavender-bg transition-colors ${i < 4 ? "border-b border-soft-lavender-border" : ""}`}>
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-semibold text-soft-purple-deeper flex-1">{item.label}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B0A6CC" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
          </div>
        ))}
      </div>
      <p className="text-center text-[11px] text-soft-muted-light mt-6 mb-4">Rausche Ai v0.1.0 · Made with 💜</p>

      {/* ────── Edit Profile Modal ────── */}
      {editingProfile && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-5" style={{ background: "rgba(45, 34, 84, 0.6)", backdropFilter: "blur(8px)" }} onClick={() => setEditingProfile(false)}>
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-[380px] px-5 pt-6 pb-7 max-h-[85vh] overflow-y-auto" style={{ borderRadius: "24px" }}>
            <h2 className="font-display font-bold text-lg text-soft-purple-deeper mb-5">Edit Profile</h2>

            <div className="flex justify-center mb-4">
              <AvatarPreview size="w-20 h-20" fontSize="text-4xl" />
            </div>

            {/* Tabs */}
            <div className="flex gap-1.5 mb-4 bg-soft-lavender-bg rounded-xl p-1">
              {[{ key: "emoji" as const, label: "Emoji" }, { key: "text" as const, label: "Letters" }, { key: "photo" as const, label: "Photo" }].map((tab) => (
                <button key={tab.key} onClick={() => setAvatarTypeDraft(tab.key)}
                  className={`flex-1 py-2 rounded-lg text-[12px] font-semibold transition-all ${avatarTypeDraft === tab.key ? "bg-white text-soft-purple shadow-sm" : "text-soft-muted hover:text-soft-purple-deep"}`}>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* ── Emoji mode ── */}
            {avatarTypeDraft === "emoji" && (
              <>
                <div className="mb-3">
                  <div className="overflow-x-auto pb-2 -mx-1 px-1" style={{ scrollbarWidth: "none" }}>
                    <div className="grid grid-rows-3 grid-flow-col gap-1.5 w-max">
                      {POPULAR_EMOJIS.map((emoji) => (
                        <button key={emoji} onClick={() => { setEmojiDraft(emoji); setAvatarTypeDraft("emoji"); }}
                          className={`w-10 h-10 rounded-lg text-xl flex items-center justify-center transition-all flex-shrink-0 ${emojiDraft === emoji && avatarTypeDraft === "emoji" ? "bg-soft-purple scale-110 shadow-md" : "bg-soft-lavender-bg hover:bg-soft-lavender-light"}`}>{emoji}</button>
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] text-soft-muted-light mt-1">← Swipe for more →</p>
                </div>
                <div className="mb-4">
                  <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">Or type any emoji</label>
                  <div className="flex gap-2">
                    <input type="text" value={customEmojiInput} onChange={(e) => setCustomEmojiInput(e.target.value)} placeholder="Paste or type an emoji..." className="flex-1 bg-soft-lavender-bg rounded-xl px-3 py-2.5 text-[14px] text-center border border-soft-lavender-border outline-none focus:ring-2 focus:ring-soft-purple/20" />
                    <button onClick={handleCustomEmoji} className="bg-soft-purple text-white text-[12px] font-semibold px-4 rounded-xl hover:bg-soft-purple-dark transition-colors">Use</button>
                  </div>
                </div>
              </>
            )}

            {/* ── Text mode ── */}
            {avatarTypeDraft === "text" && (
              <div className="mb-4">
                <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">Type up to 3 characters</label>
                <input type="text" value={avatarTextDraft} onChange={(e) => { if (e.target.value.length <= 3) setAvatarTextDraft(e.target.value.toUpperCase()); }} placeholder="e.g. RAY" maxLength={3} className="w-full bg-soft-lavender-bg rounded-xl px-4 py-3 text-[20px] text-soft-purple-deeper font-bold text-center border border-soft-lavender-border outline-none focus:ring-2 focus:ring-soft-purple/20 font-display tracking-wider" />
                <p className="text-[10px] text-soft-muted-light mt-1 text-center">{avatarTextDraft.length}/3 characters</p>
              </div>
            )}

            {/* ── Photo mode ── */}
            {avatarTypeDraft === "photo" && (
              <div className="mb-4">
                <button onClick={() => avatarPhotoRef.current?.click()}
                  className="w-full py-3 rounded-xl border-2 border-dashed text-[13px] font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2 border-soft-lavender text-soft-purple bg-soft-lavender-bg hover:bg-soft-lavender-light">
                  📷 Upload a photo
                </button>
                <input ref={avatarPhotoRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarPhotoUpload} />

                {/* Photo preview */}
                {avatarPhotoDraft && (
                  <div className="mt-2.5 relative">
                    <img src={avatarPhotoDraft} alt="Preview" className="w-full h-32 rounded-xl object-cover" />
                    <button onClick={() => setAvatarPhotoDraft("")} className="absolute top-2 right-2 bg-black/50 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-black/70">✕</button>
                  </div>
                )}
              </div>
            )}

            {/* Color picker */}
            <div className="mb-4">
              <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">{avatarTypeDraft === "photo" ? "Profile accent color" : "Avatar color"}</label>
              <div className="flex flex-wrap gap-2 mb-2.5">
                {PRESET_COLORS.map((color) => (
                  <button key={color} onClick={() => setColorDraft(color)} className={`w-9 h-9 rounded-lg transition-all ${colorDraft === color ? "scale-110 shadow-md ring-2 ring-soft-purple ring-offset-2" : "hover:scale-105"}`} style={{ backgroundColor: color }} />
                ))}
                <button onClick={() => colorPickerRef.current?.click()} className="w-9 h-9 rounded-lg transition-all hover:scale-105 flex items-center justify-center" style={{ background: "conic-gradient(from 0deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)" }}>
                  <span className="bg-white rounded-md px-0.5 text-[8px] font-bold text-soft-purple">+</span>
                </button>
                <input ref={colorPickerRef} type="color" value={colorDraft} onChange={(e) => setColorDraft(e.target.value)} className="hidden" />
              </div>
              <input type="range" min="0" max="360"
                value={(() => { const hex = colorDraft.replace("#", ""); const r = parseInt(hex.substring(0, 2), 16) / 255; const g = parseInt(hex.substring(2, 4), 16) / 255; const b = parseInt(hex.substring(4, 6), 16) / 255; const max = Math.max(r, g, b), min = Math.min(r, g, b); let h = 0; if (max !== min) { const d = max - min; if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) * 60; else if (max === g) h = ((b - r) / d + 2) * 60; else h = ((r - g) / d + 4) * 60; } return Math.round(h); })()}
                onChange={(e) => { const h = parseInt(e.target.value); const s = 0.45, l = 0.60; const hueToRgb = (p: number, q: number, t: number) => { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1/6) return p + (q-p)*6*t; if (t < 1/2) return q; if (t < 2/3) return p + (q-p)*(2/3-t)*6; return p; }; const q = l < 0.5 ? l*(1+s) : l+s-l*s; const p = 2*l-q; const r = Math.round(hueToRgb(p,q,h/360+1/3)*255); const g = Math.round(hueToRgb(p,q,h/360)*255); const b = Math.round(hueToRgb(p,q,h/360-1/3)*255); setColorDraft(`#${r.toString(16).padStart(2,"0")}${g.toString(16).padStart(2,"0")}${b.toString(16).padStart(2,"0")}`); }}
                className="w-full h-8 rounded-lg appearance-none cursor-pointer"
                style={{ background: "linear-gradient(to right, hsl(0,45%,60%), hsl(30,45%,60%), hsl(60,45%,60%), hsl(90,45%,60%), hsl(120,45%,60%), hsl(150,45%,60%), hsl(180,45%,60%), hsl(210,45%,60%), hsl(240,45%,60%), hsl(270,45%,60%), hsl(300,45%,60%), hsl(330,45%,60%), hsl(360,45%,60%))" }}
              />
              <p className="text-[10px] text-soft-muted-light mt-1">Slide to pick any color</p>
            </div>

            {/* Name */}
            <div className="mb-3">
              <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">Display Name</label>
              <input type="text" value={nameDraft} onChange={(e) => setNameDraft(e.target.value)} maxLength={30} placeholder="Your name" className="w-full bg-soft-lavender-bg rounded-xl px-4 py-3 text-[14px] text-soft-purple-deeper font-medium border border-soft-lavender-border outline-none focus:ring-2 focus:ring-soft-purple/20" />
            </div>

            {/* Username */}
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
