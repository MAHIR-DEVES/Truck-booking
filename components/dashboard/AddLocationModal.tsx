"use client"

import { X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"

interface AddLocationModalProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (location: string) => void
}

export function AddLocationModal({ isOpen, onClose, onSelect }: AddLocationModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[800px] h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">লোকেশন যোগ করুন</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input type="text" placeholder="সার্চ লোকেশন" className="pl-10" />
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 p-4">
          <MapContainer
            center={[23.8103, 90.4125]} // Dhaka coordinates
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            className="rounded-lg"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <Button
            className="w-full"
            onClick={() => {
              onSelect("Selected Location")
              onClose()
            }}
          >
            এই লোকেশন সিলেক্ট করুন
          </Button>
        </div>
      </div>
    </div>
  )
}

