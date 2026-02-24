"use client";

import { useState } from "react";
import { OnlineUser, PingState } from "@/types";
import { ONLINE_USERS } from "@/lib/mockData";
import TopNav from "@/components/layout/TopNav";
import Sidebar from "@/components/layout/Sidebar";
import FriendsPanel from "@/components/home/FriendsPanel";
import PingModal from "@/components/home/PingModal";

export default function DesktopShell({ children }: { children: React.ReactNode }) {
  const [friendsOpen, setFriendsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<OnlineUser | null>(null);
  const [pingState, setPingState] = useState<PingState>({});

  const handlePing = (userId: number, prompt: string) => {
    setPingState((prev) => ({ ...prev, [userId]: prompt }));
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen">
      <TopNav
        onToggleFriends={() => setFriendsOpen(!friendsOpen)}
        friendsOpen={friendsOpen}
      />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-6 pb-12">
          <div className="max-w-[1100px]">
            {children}
          </div>
        </main>
      </div>

      {/* Friends Panel */}
      {friendsOpen && (
        <FriendsPanel
          users={ONLINE_USERS}
          pingState={pingState}
          onUserTap={setSelectedUser}
          onClose={() => setFriendsOpen(false)}
        />
      )}

      {/* Ping Modal */}
      {selectedUser && (
        <PingModal
          user={selectedUser}
          onPing={handlePing}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
}
