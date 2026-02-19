import type { Metadata } from "next";
import TopNav from "@/components/layout/TopNav";
import BottomNav from "@/components/layout/BottomNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoftSpace",
  description: "Where real conversations happen. Voice-first social for people who want genuine connection.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">
        <div className="max-w-[430px] mx-auto min-h-screen flex flex-col bg-soft-lavender-bg relative">
          <TopNav />
          <main className="flex-1 overflow-y-auto pb-20">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
