"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CommunityIcon, ProfileIcon } from "@/components/icons";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#9B6BC2" : "none"} stroke={active ? "#9B6BC2" : "#A0A0A8"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    href: "/community",
    label: "Community",
    icon: (active: boolean) => <CommunityIcon active={active} />,
  },
  {
    href: "/profile",
    label: "Profile",
    icon: (active: boolean) => <ProfileIcon active={active} />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[200px] flex-shrink-0 bg-white border-r border-soft-lavender-border h-[calc(100vh-57px)] sticky top-[57px] overflow-y-auto">
      <nav className="flex flex-col gap-1 p-3 pt-4">
        {NAV_ITEMS.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-xl no-underline transition-all duration-150
                ${
                  isActive
                    ? "bg-soft-lavender-bg text-soft-purple font-bold"
                    : "text-[#A0A0A8] hover:bg-soft-lavender-bg/50 hover:text-soft-purple-deep font-medium"
                }
              `}
            >
              {icon(isActive)}
              <span className="text-[13px] font-body">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="h-px bg-soft-lavender-border mx-4 my-2" />

      {/* Your Communities */}
      <div className="px-4 pt-2">
        <p className="text-[10px] font-bold text-soft-muted-light uppercase tracking-wider mb-2">
          Your communities
        </p>
        <div className="flex flex-col gap-1">
          {[
            { icon: "🌙", name: "Can't Sleep Club" },
            { icon: "📚", name: "First Gen Students" },
            { icon: "✨", name: "Rausche Ai" },
          ].map((c) => (
            <button
              key={c.name}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-left cursor-pointer border-none bg-transparent hover:bg-soft-lavender-bg/50 transition-colors"
            >
              <span className="text-base">{c.icon}</span>
              <span className="text-[12.5px] font-body font-medium text-soft-purple-deep truncate">
                {c.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
