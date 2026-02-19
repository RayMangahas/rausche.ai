"use client";

import { CommunityPost } from "@/types";
import { HeartIcon, MicIcon, PhoneIcon } from "@/components/icons";

interface CommunityFeedProps {
  posts: CommunityPost[];
}

export default function CommunityFeed({ posts }: CommunityFeedProps) {
  return (
    <section className="px-5 pt-1 pb-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-3.5">
        <h2 className="font-display font-bold text-[17px] text-soft-purple-deeper">
          Trending in communities
        </h2>
        <span className="text-xs text-soft-purple font-semibold cursor-pointer hover:underline">
          See all
        </span>
      </div>

      {/* Posts */}
      <div className="flex flex-col gap-3">
        {posts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-softer overflow-hidden border border-soft-lavender-border"
          >
            {/* Community header bar */}
            <div
              className="px-4 py-3.5 flex items-center justify-between"
              style={{ backgroundColor: item.color }}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-[22px]">{item.icon}</span>
                <div>
                  <p className="font-bold text-sm text-white">{item.community}</p>
                  <p className="text-[11px] text-white/65 mt-0.5 font-medium">
                    {item.memberCount} members · {item.post.activeNow} here now
                  </p>
                </div>
              </div>
              <div className="bg-white/15 rounded-[10px] px-2.5 py-1 text-[11px] font-bold text-white cursor-pointer hover:bg-white/25 transition-colors">
                Join
              </div>
            </div>

            {/* Post content */}
            <div className="px-4 py-3.5">
              {/* Prompt */}
              <p className="font-bold text-[15px] text-soft-purple-deeper font-body leading-snug mb-2.5">
                &ldquo;{item.post.prompt}&rdquo;
              </p>

              {/* Top responses */}
              <div className="flex flex-col gap-1.5 mb-3">
                {item.post.topResponses.map((resp, i) => (
                  <div
                    key={i}
                    className="bg-soft-lavender-bg rounded-xl px-3.5 py-2.5 text-[13px] text-soft-purple-deep leading-snug font-medium border-l-[3px] border-soft-lavender"
                  >
                    {resp}
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-1.5 text-soft-muted text-xs font-semibold">
                  <HeartIcon size={16} />
                  <span>{item.post.responseCount}</span>
                </div>
                <div className="flex items-center gap-1.5 text-soft-muted text-xs font-semibold cursor-pointer hover:text-soft-purple transition-colors">
                  <MicIcon size={14} />
                  <span>Voice reply</span>
                </div>
                <div className="flex items-center gap-1.5 text-soft-muted text-xs font-semibold cursor-pointer hover:text-soft-purple transition-colors">
                  <PhoneIcon size={14} />
                  <span>Join call</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
