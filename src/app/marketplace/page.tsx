"use client";

import { useState } from "react";
import { PhoneIcon } from "@/components/icons";
import { useProfile } from "@/lib/ProfileContext";

interface Person {
  id: number;
  name: string;
  emoji: string;
  color: string;
  vibe: string;
  rate: string;
  q1: string;
  q2: string;
  qualities: string[];
  isYou: boolean;
}

const DEFAULT_PEOPLE: Person[] = [
  {
    id: 1, name: "Maya", emoji: "🌙", color: "#B87FD6",
    vibe: "into late-night philosophy", rate: "$5/hr",
    q1: "Listening to old vinyl records with the lights off",
    q2: "The history of dream interpretation across different cultures",
    qualities: ["Empathetic", "Curious", "Grounded"], isYou: false,
  },
  {
    id: 2, name: "Jordan", emoji: "🏀", color: "#7FB8D6",
    vibe: "stressed about midterms", rate: "$5/hr",
    q1: "Playing basketball until I forget what I was worried about",
    q2: "How memory works and why we forget things we want to remember",
    qualities: ["Resilient", "Honest", "Driven"], isYou: false,
  },
  {
    id: 3, name: "Sam", emoji: "☕", color: "#D6A87F",
    vibe: "can't sleep again", rate: "$5/hr",
    q1: "Cooking something new with whatever's in the fridge",
    q2: "Why certain songs give you chills — the science behind frisson",
    qualities: ["Warm", "Creative", "Patient"], isYou: false,
  },
];

export default function MarketplacePage() {
  const { profile } = useProfile();
  const [people, setPeople] = useState<Person[]>(DEFAULT_PEOPLE);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [showAddSelf, setShowAddSelf] = useState(false);
  const [isListed, setIsListed] = useState(false);
  const [selfVibe, setSelfVibe] = useState("");
  const [selfRate, setSelfRate] = useState("");

  const handleAddSelf = () => {
    if (!selfRate.trim()) return;
    const rate = selfRate.startsWith("$") ? selfRate : `$${selfRate}`;
    const newPerson: Person = {
      id: Date.now(),
      name: profile.name,
      emoji: profile.avatarEmoji,
      color: profile.avatarColor,
      vibe: selfVibe.trim() || "Available to chat",
      rate: `${rate}/hr`,
      q1: profile.q1,
      q2: profile.q2,
      qualities: profile.qualities.filter((q) => q.trim()),
      isYou: true,
    };
    setPeople([newPerson, ...people]);
    setIsListed(true);
    setShowAddSelf(false);
  };

  const handleRemoveSelf = () => {
    setPeople(people.filter((p) => !p.isYou));
    setIsListed(false);
    setSelfVibe("");
    setSelfRate("");
  };

  return (
    <div className="px-5 pt-6 pb-24">
      <h1 className="font-display font-bold text-2xl text-soft-purple-deeper mb-1">Marketplace</h1>
      <p className="text-soft-muted text-sm font-medium mb-5">Talk to someone who gets it</p>

      {isListed ? (
        <button onClick={handleRemoveSelf} className="w-full mb-5 py-3 rounded-xl border border-red-300 text-[14px] font-semibold text-red-500 bg-white hover:bg-red-50 transition-colors cursor-pointer flex items-center justify-center gap-2">
          Remove yourself from marketplace
        </button>
      ) : (
        <button onClick={() => setShowAddSelf(true)} className="w-full mb-5 py-3 rounded-xl border-2 border-dashed border-soft-lavender text-[14px] font-semibold text-soft-purple bg-white hover:bg-soft-lavender-bg transition-colors cursor-pointer flex items-center justify-center gap-2">
          <span className="text-lg">+</span>
          Add yourself to marketplace
        </button>
      )}

      <div className="flex flex-col gap-3">
        {people.map((person) => (
          <div
            key={person.id}
            onClick={() => setSelectedPerson(person)}
            className={`bg-white rounded-softer border p-4 flex items-center gap-4 cursor-pointer hover:shadow-sm transition-all ${person.isYou ? "border-soft-purple/40 ring-1 ring-soft-purple/10" : "border-soft-lavender-border hover:border-soft-lavender"}`}
          >
            <div
              className="w-14 h-14 rounded-soft flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${person.color}, ${person.color}88)` }}
            >
              {person.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-bold text-[15px] text-soft-purple-deeper">{person.name}</p>
                {person.isYou && <span className="text-[9px] font-bold text-soft-purple bg-soft-lavender-bg px-1.5 py-0.5 rounded-full uppercase tracking-wider">You</span>}
              </div>
              <p className="text-[12px] text-soft-muted font-medium mt-0.5">{person.vibe}</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="w-2 h-2 rounded-full bg-soft-online" />
                <span className="text-[11px] text-soft-online font-semibold">Available now</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <span className="text-[15px] font-bold text-soft-purple">{person.rate}</span>
              {!person.isYou && (
                <div className="bg-soft-purple rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                  <PhoneIcon size={12} />
                  <span className="text-[11px] font-bold text-white">Talk</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Profile Popup */}
      {selectedPerson && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-5" style={{ background: "rgba(45, 34, 84, 0.6)", backdropFilter: "blur(8px)" }} onClick={() => setSelectedPerson(null)}>
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-[380px] px-5 pt-6 pb-7" style={{ borderRadius: "24px" }}>
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-14 h-14 rounded-soft flex items-center justify-center text-2xl" style={{ background: `linear-gradient(135deg, ${selectedPerson.color}, ${selectedPerson.color}88)` }}>
                {selectedPerson.emoji}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-lg text-soft-purple-deeper">{selectedPerson.name}</p>
                  {selectedPerson.isYou && <span className="text-[9px] font-bold text-soft-purple bg-soft-lavender-bg px-1.5 py-0.5 rounded-full uppercase tracking-wider">You</span>}
                </div>
                <p className="text-[13px] text-soft-muted font-medium">{selectedPerson.vibe}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-5">
              {selectedPerson.q1 && (
                <div>
                  <p className="text-[12px] font-bold text-soft-purple-deep mb-1">When you&apos;re down, what usually cheers you up?</p>
                  <div className="bg-soft-lavender-bg rounded-xl px-3.5 py-2.5 text-[13px] text-soft-purple-deeper leading-relaxed font-medium border-l-[3px] border-soft-lavender">{selectedPerson.q1}</div>
                </div>
              )}
              {selectedPerson.q2 && (
                <div>
                  <p className="text-[12px] font-bold text-soft-purple-deep mb-1">A non-school topic explored deeply?</p>
                  <div className="bg-soft-lavender-bg rounded-xl px-3.5 py-2.5 text-[13px] text-soft-purple-deeper leading-relaxed font-medium border-l-[3px] border-soft-lavender">{selectedPerson.q2}</div>
                </div>
              )}
              {selectedPerson.qualities.length > 0 && (
                <div>
                  <p className="text-[12px] font-bold text-soft-purple-deep mb-1">Three qualities they aspire to</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPerson.qualities.map((q) => (
                      <span key={q} className="bg-soft-lavender-bg rounded-full px-3 py-1 text-[11px] font-semibold text-soft-purple border border-soft-lavender">{q}</span>
                    ))}
                  </div>
                </div>
              )}
              {!selectedPerson.q1 && !selectedPerson.q2 && selectedPerson.qualities.length === 0 && (
                <p className="text-[13px] text-soft-muted-light italic text-center py-4">No answers shared yet</p>
              )}
            </div>

            <div className="flex gap-3">
              <button onClick={() => setSelectedPerson(null)} className="flex-1 py-3 rounded-xl border border-soft-lavender text-[13px] font-semibold text-soft-muted hover:bg-soft-lavender-bg transition-colors">Close</button>
              {!selectedPerson.isYou && (
                <button className="flex-1 py-3 rounded-xl bg-soft-purple text-white text-[13px] font-semibold hover:bg-soft-purple-dark transition-colors flex items-center justify-center gap-2">
                  <PhoneIcon size={14} />Talk · {selectedPerson.rate}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Add Self Modal */}
      {showAddSelf && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-5" style={{ background: "rgba(45, 34, 84, 0.6)", backdropFilter: "blur(8px)" }} onClick={() => setShowAddSelf(false)}>
          <div onClick={(e) => e.stopPropagation()} className="bg-white w-full max-w-[380px] px-5 pt-6 pb-7 max-h-[85vh] overflow-y-auto" style={{ borderRadius: "24px" }}>
            <h2 className="font-display font-bold text-lg text-soft-purple-deeper mb-5">List yourself</h2>

            {/* Avatar + name from profile */}
            <div className="flex items-center gap-3 mb-4 bg-soft-lavender-bg rounded-xl px-4 py-3 border border-soft-lavender-border">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center text-xl" style={{ background: `linear-gradient(135deg, ${profile.avatarColor}, ${profile.avatarColor}88)` }}>
                {profile.avatarEmoji}
              </div>
              <div>
                <p className="font-bold text-[14px] text-soft-purple-deeper">{profile.name}</p>
                <p className="text-[11px] text-soft-muted">@{profile.username}</p>
              </div>
            </div>

            <div className="mb-3">
              <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">Your Vibe</label>
              <input type="text" value={selfVibe} onChange={(e) => setSelfVibe(e.target.value)} maxLength={40} placeholder="What are you about right now?" className="w-full bg-soft-lavender-bg rounded-xl px-4 py-3 text-[14px] text-soft-purple-deeper font-medium border border-soft-lavender-border outline-none focus:ring-2 focus:ring-soft-purple/20" />
            </div>

            <div className="mb-4">
              <label className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider block mb-1.5">Your Rate (per hour)</label>
              <div className="flex items-center bg-soft-lavender-bg rounded-xl border border-soft-lavender-border focus-within:ring-2 focus-within:ring-soft-purple/20">
                <span className="text-[14px] text-soft-muted pl-4 font-medium">$</span>
                <input type="number" value={selfRate} onChange={(e) => setSelfRate(e.target.value)} placeholder="5" min="1" className="flex-1 bg-transparent py-3 pr-4 pl-1 text-[14px] text-soft-purple-deeper font-medium outline-none" />
              </div>
            </div>

            <div className="h-px bg-soft-lavender-border my-4" />
            <p className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider mb-3">From your profile</p>

            <div className="flex flex-col gap-3 mb-5">
              <div>
                <p className="text-[12px] font-bold text-soft-purple-deep mb-1">When you&apos;re down, what cheers you up?</p>
                <div className="bg-soft-lavender-bg rounded-xl px-3.5 py-2.5 text-[13px] text-soft-purple-deeper font-medium border-l-[3px] border-soft-lavender min-h-[36px]">
                  {profile.q1 || <span className="text-soft-muted-light italic">Not answered yet — add it in Profile</span>}
                </div>
              </div>
              <div>
                <p className="text-[12px] font-bold text-soft-purple-deep mb-1">A non-school topic you&apos;ve explored deeply?</p>
                <div className="bg-soft-lavender-bg rounded-xl px-3.5 py-2.5 text-[13px] text-soft-purple-deeper font-medium border-l-[3px] border-soft-lavender min-h-[36px]">
                  {profile.q2 || <span className="text-soft-muted-light italic">Not answered yet — add it in Profile</span>}
                </div>
              </div>
              <div>
                <p className="text-[12px] font-bold text-soft-purple-deep mb-1">Three qualities you aspire to</p>
                {profile.qualities.some((q) => q) ? (
                  <div className="flex flex-wrap gap-1.5">
                    {profile.qualities.filter((q) => q).map((q, i) => (
                      <span key={i} className="bg-soft-lavender-bg rounded-full px-3 py-1 text-[11px] font-semibold text-soft-purple border border-soft-lavender">{q}</span>
                    ))}
                  </div>
                ) : (
                  <div className="bg-soft-lavender-bg rounded-xl px-3.5 py-2.5 text-[13px] font-medium border-l-[3px] border-soft-lavender min-h-[36px]">
                    <span className="text-soft-muted-light italic">Not answered yet — add it in Profile</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setShowAddSelf(false)} className="flex-1 py-3 rounded-xl border border-soft-lavender text-[13px] font-semibold text-soft-muted hover:bg-soft-lavender-bg transition-colors">Cancel</button>
              <button onClick={handleAddSelf} className={`flex-1 py-3 rounded-xl text-[13px] font-semibold transition-colors ${selfRate.trim() ? "bg-soft-purple text-white hover:bg-soft-purple-dark" : "bg-soft-lavender-light text-soft-muted-light cursor-not-allowed"}`} disabled={!selfRate.trim()}>
                List me
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
