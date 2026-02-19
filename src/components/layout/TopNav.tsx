"use client";

import Link from "next/link";
import { SoftSpaceLogo, SearchIcon } from "@/components/icons";

export default function TopNav() {
  return (
    <header className="bg-white border-b border-soft-lavender-border sticky top-0 z-50 px-5 py-3.5">
      <div className="flex items-center justify-between max-w-[430px] mx-auto">
        {/* Logo + Name (also home button) */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span className="font-display font-bold text-[22px] text-soft-purple-deep tracking-tight">
            SoftSpace
          </span>
          <SoftSpaceLogo size={36} />
        </Link>

        {/* Search */}
        <button className="bg-soft-lavender-bg border-none rounded-xl w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-soft-lavender-light transition-colors">
          <SearchIcon />
        </button>
      </div>
    </header>
  );
}
