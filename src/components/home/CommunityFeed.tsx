"use client";

import { CommunityPost } from "@/types";
import { HeartIcon, MicIcon, PhoneIcon } from "@/components/icons";

interface CommunityFeedProps {
  posts: CommunityPost[];
}

export default function CommunityFeed({ posts }: CommunityFeedProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-bold text-[19px] text-r-text">Trending in communities</h2>
        <span className="text-sm text-r-orange font-semibold cursor-pointer hover:underline">See all</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {posts.map((item) => (
          <div key={item.id} className="bg-r-card rounded-softer overflow-hidden border border-r-border hover:border-r-orange/20 hover:shadow-md hover:shadow-r-orange/5 transition-all">
            {/* Community header bar */}
            <div className="px-5 py-4 flex items-center justify-between" style={{ backgroundColor: item.color }}>
              <div className="flex items-center gap-3">
                <span className="text-[24px]">{item.icon}</span>
                <div>
                  <p className="font-bold text-[15px] text-white">{item.community}</p>
                  <p className="text-[11.5px] text-white/50 mt-0.5 font-medium">
                    {item.memberCount} members · {item.post.activeNow} here now
                  </p>
                </div>
              </div>
              <div className="bg-r-orange/20 rounded-[10px] px-3 py-1.5 text-[12px] font-bold text-r-orange cursor-pointer hover:bg-r-orange/30 transition-colors">Join</div>
            </div>
            {/* Post content */}
            <div className="px-5 py-4">
              <p className="font-bold text-[16px] text-r-text font-body leading-snug mb-3">&ldquo;{item.post.prompt}&rdquo;</p>
              <div className="flex flex-col gap-2 mb-4">
                {item.post.topResponses.map((resp, i) => (
                  <div key={i} className="bg-r-elevated rounded-xl px-4 py-3 text-[13.5px] text-r-text-secondary leading-snug font-medium border-l-[3px] border-r-orange/40">
                    {resp}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 text-r-text-muted text-[13px] font-semibold">
                  <HeartIcon size={17} /><span>{item.post.responseCount}</span>
                </div>
                <div className="flex items-center gap-1.5 text-r-text-muted text-[13px] font-semibold cursor-pointer hover:text-r-orange transition-colors">
                  <MicIcon size={15} /><span>Voice reply</span>
                </div>
                <div className="flex items-center gap-1.5 text-r-text-muted text-[13px] font-semibold cursor-pointer hover:text-r-orange transition-colors">
                  <PhoneIcon size={15} /><span>Join call</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
