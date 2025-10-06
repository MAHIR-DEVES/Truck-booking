'use client';

import { useState, useEffect } from "react"
import { Search, X } from 'lucide-react'
import { Input } from "@/components/ui/input"

interface Port {
  id: number
  name: string
  details: string
  category: string
}

const ports: Port[] = [
  {
    id: 1,
    name: "আশুগঞ্জ",
    details: "আশুগঞ্জ (৫৪), আশুগঞ্জ, ব্রাহ্মণবাড়িয়া",
    category: "আশুগঞ্জ টার্মিনাল",
  },
  {
    id: 2,
    name: "চট্টগ্রাম বন্দর",
    details: "চট্টগ্রাম, চট্টগ্রাম, ব্রাহ্মণবাড়িয়া",
    category: "চট্টগ্রাম টার্মিনাল/পোর্ট এরিয়া",
  },
  {
    id: 3,
    name: "খুলনা",
    details: "খুলনা, কুলনাহাট, খুলিয়া",
    category: "খুলনা টার্মিনাল",
  },
  {
    id: 4,
    name: "বাংলাবান্ধা",
    details: "বাংলাবান্ধা, তেতুলিয়া, পঞ্চগড়",
    category: "বাংলাবান্ধা টার্মিনাল",
  },
]

interface PortMenuProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (port: string) => void
  position: { top: number; left: number }
}

export function PortMenu({ isOpen, onClose, onSelect, position }: PortMenuProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  if (!isOpen) return null

  const filteredPorts = ports.filter(
    (port) =>
      port.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      port.details.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div
      className={`fixed z-50 bg-white rounded-lg shadow-lg ${
        isMobile ? 'inset-x-4 top-20 w-auto' : 'w-[500px]'
      }`}
      style={isMobile ? {} : { top: `${position.top}px`, left: `${position.left}px` }}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h3 className="text-lg font-medium">একটি বন্দর নির্বাচন করুন</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Search */}
      <div className="p-4 border-b">
        <div className="relative">
          <Input
            type="text"
            placeholder="বন্দর খুঁজুন"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-full"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Port List */}
      <div className={`overflow-y-auto ${isMobile ? 'max-h-[50vh]' : 'max-h-[400px]'}`}>
        {filteredPorts.map((port) => (
          <button
            key={port.id}
            className="w-full text-left p-4 hover:bg-gray-50 border-b last:border-b-0 flex items-start gap-3"
            onClick={() => {
              onSelect(port.name)
              onClose()
            }}
          >
            <div className="mt-1 flex-shrink-0">
              <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-sm">⚓</span>
              </div>
            </div>
            <div>
              <h4 className="font-medium">{port.name}</h4>
              <p className="text-sm text-gray-500">{port.details}</p>
              <p className="text-xs text-gray-400 mt-1">{port.category}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
