"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CommunityIcon, ProfileIcon } from "@/components/icons";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Home",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#E88B3E" : "none"} stroke={active ? "#E88B3E" : "#666"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  { href: "/community", label: "Community", icon: (active: boolean) => <CommunityIcon active={active} /> },
  { href: "/profile", label: "Profile", icon: (active: boolean) => <ProfileIcon active={active} /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[200px] flex-shrink-0 bg-r-surface border-r border-r-border h-[calc(100vh-57px)] sticky top-[57px] overflow-y-auto">
      <nav className="flex flex-col gap-1 p-3 pt-4">
        {NAV_ITEMS.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl no-underline transition-all duration-150
                ${isActive
                  ? "bg-r-orange/10 text-r-orange font-bold"
                  : "text-r-text-muted hover:bg-r-card hover:text-r-text font-medium"
                }`}
            >
              {icon(isActive)}
              <span className="text-[13px] font-body">{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="h-px bg-r-border mx-4 my-2" />

      <div className="px-4 pt-2">
        <p className="text-[10px] font-bold text-r-text-muted uppercase tracking-wider mb-2">Your communities</p>
        <div className="flex flex-col gap-1">
          {[
            "Can't Sleep Club",
            "First Gen Students",
            "Founder Therapy",
            "Anxious but Trying",
            "Rausche",
          ].map((name) => (
            <button key={name}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-left cursor-pointer border-none bg-transparent hover:bg-r-card transition-colors">
              <span className="text-[12.5px] font-body text-r-text-secondary truncate">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
