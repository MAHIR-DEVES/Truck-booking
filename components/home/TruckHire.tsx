"use client";

import { MapPin, LocateFixed, ArrowDownCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const TruckHire = () => {
    const t = useTranslations("home");

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{t("truckHire.title")}</h2>
            <hr className="my-2" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Load Location */}
                <div className="flex-1 w-full">
                    <label className="text-sm font-medium">
                        {t("truckHire.loadLocation.label")}
                    </label>
                    <div className="flex items-center border rounded-lg p-2 mt-1">
                        <MapPin className="text-blue-500" size={20} />
                        <input
                            type="text"
                            placeholder={t("truckHire.loadLocation.placeholder")}
                            className="w-full outline-none px-2 text-gray-600"
                        />
                        <LocateFixed className="text-gray-500" size={20} />
                    </div>
                </div>

                {/* Unload Location */}
                <div className="flex-1 w-full">
                    <label className="text-sm font-medium">
                        {t("truckHire.unloadLocation.label")}
                    </label>
                    <div className="flex items-center border rounded-lg p-2 mt-1">
                        <ArrowDownCircle className="text-green-500" size={20} />
                        <input
                            type="text"
                            placeholder={t("truckHire.unloadLocation.placeholder")}
                            className="w-full outline-none px-2 text-gray-600"
                        />
                    </div>
                </div>
            </div>

            {/* Hire Truck Button */}
            <div className="mt-4 flex justify-center sm:justify-end">
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold w-full sm:w-auto">
                    {t("truckHire.hireButton")}
                </button>
            </div>
        </div>
    );
};

export default TruckHire;
