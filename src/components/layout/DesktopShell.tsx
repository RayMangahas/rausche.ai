"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { OnlineUser, PingState } from "@/types";
import { ONLINE_USERS } from "@/lib/mockData";
import { useAuth } from "@/lib/AuthContext";
import TopNav from "@/components/layout/TopNav";
import Sidebar from "@/components/layout/Sidebar";
import FriendsPanel from "@/components/home/FriendsPanel";
import PingModal from "@/components/home/PingModal";

export default function DesktopShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, loading } = useAuth();
  const [friendsOpen, setFriendsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<OnlineUser | null>(null);
  const [pingState, setPingState] = useState<PingState>({});

  const isAuthPage = pathname === "/login" || pathname === "/signup";

  const handlePing = (userId: number, prompt: string) => {
    setPingState((prev) => ({ ...prev, [userId]: prompt }));
    setSelectedUser(null);
  };

  // Auth pages get no shell
  if (isAuthPage) {
    return <>{children}</>;
  }

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-full border-3 border-[#9B6BC2] border-t-transparent animate-spin" />
          <p className="text-sm text-[#8B7BA8] font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  // Not logged in (middleware should redirect, but just in case)
  if (!user) {
    return <>{children}</>;
  }

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
