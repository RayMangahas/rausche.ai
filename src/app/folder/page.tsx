export default function FolderPage() {
  return (
    <div className="px-5 pt-6">
      <h1 className="font-display font-bold text-2xl text-soft-purple-deeper mb-1">
        Your Folder
      </h1>
      <p className="text-soft-muted text-sm font-medium mb-6">
        Your digital identity — who you are without photos
      </p>

      {/* Vibe line */}
      <div className="bg-white rounded-softer border border-soft-lavender-border p-5 mb-3">
        <p className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider mb-2">
          Your vibe right now
        </p>
        <p className="text-lg text-soft-purple-deeper font-bold font-body">
          &ldquo;Trying to figure out what I actually want&rdquo;
        </p>
      </div>

      {/* Currently into */}
      <div className="bg-white rounded-softer border border-soft-lavender-border p-5 mb-3">
        <p className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider mb-3">
          Currently into
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            "Late-night walks",
            "Hip-hop beats",
            "Startup culture",
            "Philosophy",
            "Cooking for one",
          ].map((tag) => (
            <span
              key={tag}
              className="bg-soft-lavender-bg rounded-full px-3.5 py-1.5 text-xs font-semibold text-soft-purple"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Voice intro */}
      <div className="bg-white rounded-softer border border-soft-lavender-border p-5 mb-3">
        <p className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider mb-2">
          Voice intro
        </p>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-soft-purple to-soft-purple-dark flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-soft-purple-deeper">
              30 sec intro
            </p>
            <p className="text-xs text-soft-muted">Tap to listen</p>
          </div>
        </div>
      </div>

      {/* My circles */}
      <div className="bg-white rounded-softer border border-soft-lavender-border p-5">
        <p className="text-[11px] text-soft-text-secondary font-semibold uppercase tracking-wider mb-3">
          My circles
        </p>
        <div className="flex gap-3">
          {[
            { name: "Close friends", count: 4, color: "#B87FD6" },
            { name: "Study group", count: 6, color: "#7FB8D6" },
            { name: "Night owls", count: 12, color: "#D6A87F" },
          ].map((circle) => (
            <div
              key={circle.name}
              className="flex flex-col items-center gap-1.5"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold"
                style={{ backgroundColor: circle.color }}
              >
                {circle.count}
              </div>
              <span className="text-[10px] text-soft-muted font-medium text-center max-w-[64px]">
                {circle.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
