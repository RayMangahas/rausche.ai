"use client";

import { LiveRoom } from "@/types";
import { HeadphonesIcon } from "@/components/icons";

interface LiveRoomsProps {
  rooms: LiveRoom[];
}

export default function LiveRooms({ rooms }: LiveRoomsProps) {
  return (
    <section className="px-5 pt-4 pb-2">
      <h2 className="font-display font-bold text-[17px] text-soft-purple-deeper mb-3">
        Live rooms
      </h2>

      <div className="flex gap-2.5 overflow-x-auto scrollbar-hide">
        {rooms.map((room) => (
          <button
            key={room.id}
            className="bg-white rounded-[14px] p-3 px-4 border border-soft-lavender-border min-w-[160px] flex-shrink-0 cursor-pointer text-left hover:border-soft-lavender hover:shadow-sm transition-all"
          >
            {/* Room name */}
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-lg">{room.icon}</span>
              <span className="font-bold text-[13px] text-soft-purple-deeper">
                {room.name}
              </span>
            </div>

            {/* People count + Join */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-soft-muted font-medium">
                {room.people} listening
              </span>
              <div className="flex items-center gap-1 bg-soft-lavender-bg rounded-lg px-2 py-0.5 text-[10px] font-bold text-soft-purple">
                <HeadphonesIcon size={11} />
                Join
              </div>
            </div>

            {/* Community name */}
            <p className="text-[10px] text-soft-muted-light mt-1.5 font-medium">
              {room.community}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
