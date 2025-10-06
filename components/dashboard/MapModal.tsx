"use client"

import { useState } from "react"
import { X, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

interface MapModalProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (location: string) => void
}

export function MapModal({ isOpen, onClose, onSelect }: MapModalProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const t = useTranslations("dashboard.createTrip.mapView")

  if (!isOpen) return null

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  const handleSelect = () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a location before selecting.")
      return
    }
    onSelect(searchQuery)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-[800px] h-[90vh] max-h-[700px] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium">{t("title")}</h3>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </form>
        </div>

        {/* Map Section */}
        <div className="flex-1 p-4 bg-gray-100 overflow-hidden">
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14475.259566651797!2d91.88062475!3d24.90429495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1738833668532!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title={t("title")}
            ></iframe>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <Button onClick={handleSelect} className="w-full">
            {t("confirmLocation")}
          </Button>
        </div>
      </div>
    </div>
  )
}

