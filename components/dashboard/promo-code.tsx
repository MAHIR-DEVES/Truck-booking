"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import { CreatePromoModal } from "./create-promo-modal"
import { useTranslations } from "next-intl"

export function PromoCode() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const t = useTranslations("dashboard.promoCode")

    const handlePromoSubmit = (promoCode: string) => {
        console.log("Promo code submitted:", promoCode)
        // Handle the promo code submission here
    }

    return (
        <div className="flex-1 p-4 md:p-8 max-w-[1200px] mx-auto">
            <div className="mb-6 md:mb-8">
                <h1 className="text-xl md:text-2xl font-semibold text-center md:text-left">{t("title")}</h1>
            </div>

            <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-0">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-100 rounded-lg mb-6 flex items-center justify-center">
                    {/* Placeholder for illustration */}
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full" />
                </div>

                <h2 className="text-lg md:text-xl font-semibold mb-2">{t("emptyState.title")}</h2>
                <p className="text-sm md:text-base text-muted-foreground text-center mb-6">
                    {t("emptyState.description")}
                </p>

                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-red-600 hover:bg-red-700 text-white gap-2 px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base"
                >
                    <Plus className="h-4 w-4 md:h-5 md:w-5" />
                    {t("actions.addPromo")}
                </Button>
                <CreatePromoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handlePromoSubmit} />
            </div>
        </div>
    )
}
