"use client";

import { useState } from "react";
import { OnlineUser, PingState } from "@/types";
import { ONLINE_USERS, ACTIVE_ROOMS, COMMUNITY_POSTS } from "@/lib/mockData";
import WhosHere from "@/components/home/WhosHere";
import LiveRooms from "@/components/home/LiveRooms";
import CommunityFeed from "@/components/home/CommunityFeed";
import PingModal from "@/components/home/PingModal";

export default function HomePage() {
  const [selectedUser, setSelectedUser] = useState<OnlineUser | null>(null);
  const [pingState, setPingState] = useState<PingState>({});

  const handlePing = (userId: number, prompt: string) => {
    setPingState((prev) => ({ ...prev, [userId]: prompt }));
    setSelectedUser(null);
  };

  return (
    <>
      {/* Who's Here - Algorithm matched online users */}
      <WhosHere
        users={ONLINE_USERS}
        pingState={pingState}
        onUserTap={setSelectedUser}
      />

      {/* Live Rooms */}
      <LiveRooms rooms={ACTIVE_ROOMS} />

      {/* Divider */}
      <div className="h-px bg-soft-lavender-border mx-5 my-4" />

      {/* Community Feed */}
      <CommunityFeed posts={COMMUNITY_POSTS} />

      {/* Ping Modal */}
      {selectedUser && (
        <PingModal
          user={selectedUser}
          onPing={handlePing}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </>
  );
}
