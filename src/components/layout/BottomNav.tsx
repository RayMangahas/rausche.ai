"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MarketplaceIcon,
  CommunityIcon,
  FolderIcon,
  ProfileIcon,
} from "@/components/icons";

const NAV_ITEMS = [
  { href: "/community", label: "Community", Icon: CommunityIcon },
  { href: "/folder", label: "Folder", Icon: FolderIcon },
  { href: "/marketplace", label: "Market", Icon: MarketplaceIcon },
  { href: "/profile", label: "Profile", Icon: ProfileIcon },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-soft-lavender-border z-50">
      <div className="flex items-center justify-around pt-2.5 pb-6">
        {NAV_ITEMS.map(({ href, label, Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-1 px-4 py-1 no-underline"
            >
              <Icon active={isActive} />
              <span
                className={`text-[10.5px] font-body ${
                  isActive
                    ? "font-bold text-soft-purple"
                    : "font-medium text-[#A0A0A8]"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
