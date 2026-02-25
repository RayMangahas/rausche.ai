"use client";

import { LiveRoom } from "@/types";
import { HeadphonesIcon } from "@/components/icons";

interface LiveRoomsProps {
  rooms: LiveRoom[];
}

export default function LiveRooms({ rooms }: LiveRoomsProps) {
  return (
    <section>
      <h2 className="font-display font-bold text-[19px] text-r-text mb-4">Live rooms</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {rooms.map((room) => (
          <button key={room.id}
            className="bg-r-card rounded-[14px] p-4 border border-r-border cursor-pointer text-left hover:border-r-orange/30 hover:shadow-sm hover:shadow-r-orange/5 transition-all">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xl">{room.icon}</span>
              <span className="font-bold text-[14px] text-r-text">{room.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-r-text-muted font-medium">{room.people} listening</span>
              <div className="flex items-center gap-1 bg-r-orange/10 rounded-lg px-2.5 py-1 text-[11px] font-bold text-r-orange">
                <HeadphonesIcon size={12} />
                Join
              </div>
            </div>
            <p className="text-[11px] text-r-text-dim mt-2 font-medium">{room.community}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
