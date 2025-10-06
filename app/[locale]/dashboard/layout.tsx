import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import React from "react"; // Import React
import { MainNav } from "@/components/dashboard/main-nav";
import { SideNav } from "@/components/dashboard/side-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <MainNav />
          <div className="flex">
            <div className="hidden lg:block">
              <SideNav />
            </div>
            <main className="p-6 flex-1">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
