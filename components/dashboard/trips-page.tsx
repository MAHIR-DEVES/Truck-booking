"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function TripsPage() {
  const [activeTab, setActiveTab] = useState("current");
  const t = useTranslations("dashboard.trips");

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
        <button
          onClick={() => setActiveTab("current")}
          className={cn(
            "py-4 px-6 text-base font-medium relative whitespace-nowrap",
            activeTab === "current" ? "text-red-600" : "text-gray-600"
          )}
        >
          {t("tabs.current")}
          {activeTab === "current" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={cn(
            "py-4 px-6 text-base font-medium relative whitespace-nowrap",
            activeTab === "history" ? "text-red-600" : "text-gray-600"
          )}
        >
          {t("tabs.history")}
          {activeTab === "history" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600" />
          )}
        </button>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-48 h-48 sm:w-64 sm:h-64 mb-8">
          {/* <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l2n1IjNSG1Bgvl8vTp32PTAXGkbiUv.png"
            alt="Empty trips illustration"
            className="w-full h-full object-contain"
          /> */}
        </div>
        <h2 className="text-lg sm:text-xl text-gray-900 mb-6">
          {t("emptyState.title")}
        </h2>
        <Link
          href="/dashboard/create-trip"
          className="bg-red-600 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-md hover:bg-red-700 transition-colors"
        >
          {t("emptyState.createButton")}
        </Link>
      </div>
    </div>
  );
}
