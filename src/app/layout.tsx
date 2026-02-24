import type { Metadata } from "next";
import DesktopShell from "@/components/layout/DesktopShell";
import { ProfileProvider } from "@/lib/ProfileContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rausche",
  description:
    "Where real conversations happen. Voice-first social for people who want genuine connection.",
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
      <body className="font-body bg-[#F0ECF6]">
        <ProfileProvider>
          <DesktopShell>{children}</DesktopShell>
        </ProfileProvider>
      </body>
    </html>
  );
}
