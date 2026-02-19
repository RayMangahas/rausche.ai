export default function CommunityPage() {
  const communities = [
    {
      name: "Cats",
      members: "5.2K",
      icon: "🐱",
      color: "#4A3070",
      desc: "Everything cats — pics, stories, and purrs",
    },
    {
      name: "Dogs",
      members: "4.7K",
      icon: "🐶",
      color: "#2D4A30",
      desc: "Good doggos and good vibes",
    },
    {
      name: "Photos",
      members: "4.1K",
      icon: "📸",
      color: "#4A3040",
      desc: "Share what you see through your lens",
    },
  ];

  return (
    <div className="px-5 pt-6 pb-24">
      <h1 className="font-display font-bold text-2xl text-soft-purple-deeper mb-1">
        Communities
      </h1>
      <p className="text-soft-muted text-sm font-medium mb-5">
        Find your people
      </p>

      {/* Search */}
      <div className="bg-white rounded-soft border border-soft-lavender-border px-4 py-3 mb-5">
        <p className="text-soft-muted-light text-sm">Search communities...</p>
      </div>

      {/* Community grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {communities.map((c, i) => (
          <div
            key={i}
            className="rounded-softer overflow-hidden border border-soft-lavender-border cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="p-4 pb-3" style={{ backgroundColor: c.color }}>
              <span className="text-2xl">{c.icon}</span>
              <p className="font-bold text-sm text-white mt-2">{c.name}</p>
              <p className="text-[11px] text-white/60 mt-0.5">
                {c.members} members
              </p>
            </div>
            <div className="bg-white p-3">
              <p className="text-xs text-soft-muted font-medium leading-snug">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
