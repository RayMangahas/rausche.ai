"use client";

import { ACTIVE_ROOMS, TRENDING_COMMUNITIES } from "@/lib/mockData";
import LiveRooms from "@/components/home/LiveRooms";
import CommunityFeed from "@/components/home/CommunityFeed";

export default function HomePage() {
  return (
    <>
      {/* Live Rooms */}
      <LiveRooms rooms={ACTIVE_ROOMS} />

      {/* Divider */}
      <div className="h-px bg-soft-lavender-border my-6" />

      {/* Community Feed */}
      <CommunityFeed communities={TRENDING_COMMUNITIES} />
    </>
  );
}
