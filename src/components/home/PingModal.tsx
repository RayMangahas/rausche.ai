"use client";

import { OnlineUser } from "@/types";
import { MicIcon } from "@/components/icons";
import { PING_PROMPTS } from "@/lib/mockData";

interface PingModalProps {
  user: OnlineUser;
  onPing: (userId: number, prompt: string) => void;
  onClose: () => void;
}

export default function PingModal({ user, onPing, onClose }: PingModalProps) {
  return (
    <div
      className="fixed inset-0 bg-soft-purple-deeper/60 backdrop-blur-sm z-[100] flex items-end justify-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-t-softest w-full max-w-[430px] px-5 pt-6 pb-9 animate-slideUp"
      >
        {/* User info */}
        <div className="flex items-center gap-3.5 mb-5">
          <div
            className="w-[52px] h-[52px] rounded-soft flex items-center justify-center text-white text-xl font-bold font-display"
            style={{
              background: `linear-gradient(135deg, ${user.color}, ${user.color}88)`,
            }}
          >
            {user.initials}
          </div>
          <div>
            <p className="font-bold text-lg text-soft-purple-deeper">{user.name}</p>
            <p className="text-[13px] text-soft-muted mt-0.5 font-medium">{user.vibe}</p>
          </div>
        </div>

        {/* Ping prompts */}
        <p className="text-[13px] font-bold text-soft-purple-deep mb-3">Send a ping</p>
        <div className="flex flex-col gap-2">
          {PING_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              onClick={() => onPing(user.id, prompt)}
              className="bg-soft-lavender-bg border-[1.5px] border-soft-lavender-border rounded-[14px] px-4 py-3.5 text-sm font-semibold text-soft-purple-deep text-left font-body cursor-pointer hover:bg-soft-lavender-light hover:border-soft-lavender transition-all"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Voice message option */}
        <div className="mt-4 text-center">
          <button className="bg-gradient-to-br from-soft-purple to-soft-purple-dark border-none rounded-soft px-7 py-3.5 text-white text-sm font-bold cursor-pointer inline-flex items-center gap-2 font-body shadow-lg shadow-soft-purple/30 hover:shadow-xl hover:shadow-soft-purple/40 transition-all">
            <MicIcon size={16} />
            Send voice message instead
          </button>
        </div>
      </div>
    </div>
  );
}
