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
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-5"
      style={{ background: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(8px)" }}
      onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}
        className="bg-r-elevated w-full max-w-[380px] px-5 pt-6 pb-7 animate-slideUp border border-r-border"
        style={{ borderRadius: "24px" }}>
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-[52px] h-[52px] rounded-soft flex items-center justify-center text-white text-xl font-bold font-display"
            style={{ background: `linear-gradient(135deg, ${user.color}, ${user.color}88)` }}>
            {user.initials}
          </div>
          <div>
            <p className="font-bold text-lg text-r-text">{user.name}</p>
            <p className="text-[13px] text-r-text-muted mt-0.5 font-medium">{user.vibe}</p>
          </div>
        </div>
        <p className="text-[13px] font-bold text-r-orange mb-3">Send a ping</p>
        <div className="flex flex-col gap-2">
          {PING_PROMPTS.map((prompt) => (
            <button key={prompt} onClick={() => onPing(user.id, prompt)}
              className="bg-r-card border-[1.5px] border-r-border rounded-[14px] px-4 py-3.5 text-sm font-semibold text-r-text text-left font-body cursor-pointer hover:bg-r-card-hover hover:border-r-orange/30 transition-all">
              {prompt}
            </button>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="bg-gradient-to-br from-r-orange to-r-orange-dark border-none rounded-soft px-7 py-3.5 text-white text-sm font-bold cursor-pointer inline-flex items-center gap-2 font-body shadow-lg shadow-r-orange/20 hover:shadow-xl hover:shadow-r-orange/30 transition-all">
            <MicIcon size={16} /> Send voice message instead
          </button>
        </div>
      </div>
    </div>
  );
}
