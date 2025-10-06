"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useTranslations } from "next-intl"

interface CreatePromoModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (promoCode: string) => void
}

export function CreatePromoModal({ isOpen, onClose, onSubmit }: CreatePromoModalProps) {
  const [promoCode, setPromoCode] = useState("")
  const t = useTranslations("dashboard.promoCode.modal")

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (promoCode.trim()) {
      onSubmit(promoCode)
      setPromoCode("")
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[400px] p-6 relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <h2 className="text-lg font-medium mb-6">{t("title")}</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            placeholder={t("placeholder")}
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="w-full"
          />

          <Button type="submit" className="w-full bg-[#FF4D6B] hover:bg-[#FF3557] text-white">
            {t("submit")}
          </Button>
        </form>
      </div>
    </div>
  )
}

