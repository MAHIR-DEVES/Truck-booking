"use client";

import { CreateTripForm } from "@/components/dashboard/create-trip-form";
import { MapView } from "@/components/dashboard/map-view";
import { useTranslations } from "next-intl";

export default function CreateTripPage() {
    const t = useTranslations("dashboard.createTrip");

    return (
        <div className="flex flex-col sm:flex-row h-[calc(100vh-64px)] min-h-screen">
            <div className="w-full sm:w-1/2">
                <CreateTripForm />
            </div>
            <div className="w-full sm:w-1/2">
                <MapView />
            </div>
        </div>
    );
}
