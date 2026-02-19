"use client";

import { useState } from "react";
import { PhoneIcon } from "@/components/icons";

const AVAILABLE_PEOPLE = [
  {
    id: 1,
    name: "Maya",
    initials: "M",
    color: "#B87FD6",
    vibe: "into late-night philosophy",
    rate: "$5/hr",
    q1: "Listening to old vinyl records with the lights off",
    q2: "The history of dream interpretation across different cultures",
    qualities: ["Empathetic", "Curious", "Grounded"],
  },
  {
    id: 2,
    name: "Jordan",
    initials: "J",
    color: "#7FB8D6",
    vibe: "stressed about midterms",
    rate: "$5/hr",
    q1: "Playing basketball until I forget what I was worried about",
    q2: "How memory works and why we forget things we want to remember",
    qualities: ["Resilient", "Honest", "Driven"],
  },
  {
    id: 3,
    name: "Sam",
    initials: "S",
    color: "#D6A87F",
    vibe: "can't sleep again",
    rate: "$5/hr",
    q1: "Cooking something new with whatever's in the fridge",
    q2: "Why certain songs give you chills — the science behind frisson",
    qualities: ["Warm", "Creative", "Patient"],
  },
];

export default function MarketplacePage() {
  const [selectedPerson, setSelectedPerson] = useState<(typeof AVAILABLE_PEOPLE)[0] | null>(null);

  return (
    <div className="px-5 pt-6 pb-24">
      <h1 className="font-display font-bold text-2xl text-soft-purple-deeper mb-1">
        Marketplace
      </h1>
      <p className="text-soft-muted text-sm font-medium mb-5">
        Talk to someone who gets it
      </p>

      {/* People available */}
      <div className="flex flex-col gap-3">
        {AVAILABLE_PEOPLE.map((person) => (
          <div
            key={person.id}
            onClick={() => setSelectedPerson(person)}
            className="bg-white rounded-softer border border-soft-lavender-border p-4 flex items-center gap-4 cursor-pointer hover:border-soft-lavender hover:shadow-sm transition-all"
          >
            {/* Avatar */}
            <div
              className="w-14 h-14 rounded-soft flex items-center justify-center text-white text-xl font-bold font-display flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${person.color}, ${person.color}88)`,
              }}
            >
              {person.initials}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[15px] text-soft-purple-deeper">
                {person.name}
              </p>
              <p className="text-[12px] text-soft-muted font-medium mt-0.5">
                {person.vibe}
              </p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="w-2 h-2 rounded-full bg-soft-online" />
                <span className="text-[11px] text-soft-online font-semibold">Available now</span>
              </div>
            </div>

            {/* Rate */}
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <span className="text-[15px] font-bold text-soft-purple">{person.rate}</span>
              <div className="bg-soft-purple rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                <PhoneIcon size={12} />
                <span className="text-[11px] font-bold text-white">Talk</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Profile Popup - Centered */}
      {selectedPerson && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-5"
          style={{ background: "rgba(45, 34, 84, 0.6)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelectedPerson(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-[380px] px-5 pt-6 pb-7"
            style={{ borderRadius: "24px" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-5">
              <div
                className="w-14 h-14 rounded-soft flex items-center justify-center text-white text-xl font-bold font-display"
                style={{
                  background: `linear-gradient(135deg, ${selectedPerson.color}, ${selectedPerson.color}88)`,
                }}
              >
                {selectedPerson.initials}
              </div>
              <div>
                <p className="font-bold text-lg text-soft-purple-deeper">
                  {selectedPerson.name}
                </p>
                <p className="text-[13px] text-soft-muted font-medium">
                  {selectedPerson.vibe}
                </p>
              </div>
            </div>

            {/* Three Questions */}
            <div className="flex flex-col gap-4 mb-5">
              <div>
                <p className="text-[12px] font-bold text-soft-purple-deep mb-1">
                  When you&apos;re down, what usually cheers you up?
                </p>
                <div className="bg-soft-lavender-bg rounded-xl px-3.5 py-2.5 text-[13px] text-soft-purple-deeper leading-relaxed font-medium border-l-[3px] border-soft-lavender">
                  {selectedPerson.q1}
                </div>
              </div>

              <div>
                <p className="text-[12px] font-bold text-soft-purple-deep mb-1">
                  A non-school topic explored deeply?
                </p>
                <div className="bg-soft-lavender-bg rounded-xl px-3.5 py-2.5 text-[13px] text-soft-purple-deeper leading-relaxed font-medium border-l-[3px] border-soft-lavender">
                  {selectedPerson.q2}
                </div>
              </div>

              <div>
                <p className="text-[12px] font-bold text-soft-purple-deep mb-1">
                  Three qualities they aspire to
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPerson.qualities.map((q) => (
                    <span
                      key={q}
                      className="bg-soft-lavender-bg rounded-full px-3 py-1 text-[11px] font-semibold text-soft-purple border border-soft-lavender"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedPerson(null)}
                className="flex-1 py-3 rounded-xl border border-soft-lavender text-[13px] font-semibold text-soft-muted hover:bg-soft-lavender-bg transition-colors"
              >
                Close
              </button>
              <button className="flex-1 py-3 rounded-xl bg-soft-purple text-white text-[13px] font-semibold hover:bg-soft-purple-dark transition-colors flex items-center justify-center gap-2">
                <PhoneIcon size={14} />
                Talk · {selectedPerson.rate}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
