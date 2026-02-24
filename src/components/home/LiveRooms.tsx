"use client";

import { LiveRoom } from "@/types";
import { HeadphonesIcon } from "@/components/icons";

interface LiveRoomsProps {
  rooms: LiveRoom[];
}

export default function LiveRooms({ rooms }: LiveRoomsProps) {
  return (
    <section>
      <h2 className="font-display font-bold text-[19px] text-soft-purple-deeper mb-4">
        Live rooms
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {rooms.map((room) => (
          <button
            key={room.id}
            className="bg-white rounded-[14px] p-4 border border-soft-lavender-border cursor-pointer text-left hover:border-soft-lavender hover:shadow-sm transition-all"
          >
            {/* Room name */}
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xl">{room.icon}</span>
              <span className="font-bold text-[14px] text-soft-purple-deeper">
                {room.name}
              </span>
            </div>

            {/* People count + Join */}
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-soft-muted font-medium">
                {room.people} listening
              </span>
              <div className="flex items-center gap-1 bg-soft-lavender-bg rounded-lg px-2.5 py-1 text-[11px] font-bold text-soft-purple">
                <HeadphonesIcon size={12} />
                Join
              </div>
            </div>

            {/* Community name */}
            <p className="text-[11px] text-soft-muted-light mt-2 font-medium">
              {room.community}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
