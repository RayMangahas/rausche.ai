"use client";

import Link from "next/link";
import Image from "next/image";
import { SearchIcon } from "@/components/icons";

export default function TopNav() {
  return (
    <header className="bg-white border-b border-soft-lavender-border sticky top-0 z-50 px-5 py-3.5">
      <div className="flex items-center max-w-[430px] mx-auto">
        {/* Left spacer to balance the search button */}
        <div className="w-10 h-10 flex-shrink-0" />

        {/* Centered Logo + Name (also home button) */}
        <Link href="/" className="flex items-center gap-2 no-underline flex-1 justify-center">
          <Image
            src="/logo.png"
            alt="Rausche Ai logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="font-display font-bold text-[22px] text-soft-purple-deep tracking-tight">
            Rausche Ai
          </span>
        </Link>

        {/* Search */}
        <button className="bg-soft-lavender-bg border-none rounded-xl w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-soft-lavender-light transition-colors flex-shrink-0">
          <SearchIcon />
        </button>
      </div>
    </header>
  );
}
