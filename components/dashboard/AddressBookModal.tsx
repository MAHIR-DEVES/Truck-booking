"use client"

import { X, Plus, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { AddLocationModal } from "./AddLocationModal"

interface AddressBookModalProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (address: string) => void
}

export function AddressBookModal({ isOpen, onClose, onSelect }: AddressBookModalProps) {
  const [isAddLocationOpen, setIsAddLocationOpen] = useState(false)

  const handleAddLocation = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent event bubbling
    setIsAddLocationOpen(true)
  }

  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
        onClick={(e) => {
          // Only close if clicking the backdrop
          if (e.target === e.currentTarget) {
            onClose()
          }
        }}
      >
        <div className="bg-white rounded-lg w-[480px] flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-medium">একটি অ্যাড্রেস সিলেক্ট করুন</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Empty State Content */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-32 h-32 mb-6">
              <img src="/placeholder.svg?height=128&width=128" alt="No addresses" className="w-full h-full" />
            </div>
            <p className="text-lg mb-2">কোনো সংরক্ষিত অ্যাড্রেস নেই</p>
            <p className="text-sm text-gray-500 mb-6">নতুন ঠিকানা সংযুক্ত করুন যা পরবর্তীতে ব্যবহার করবেন</p>
            <Button
              onClick={handleAddLocation}
              className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2"
            >
              <Plus className="h-5 w-5" />
              নতুন অ্যাড্রেস যোগ করুন
            </Button>
          </div>

          {/* Footer */}
          <div className="p-4 border-t">
            <Button variant="outline" className="w-full" onClick={onClose}>
              বাতিল করুন
            </Button>
          </div>
        </div>
      </div>

      <AddLocationModal
        isOpen={isAddLocationOpen}
        onClose={() => setIsAddLocationOpen(false)}
        onSelect={(address) => {
          onSelect(address)
          setIsAddLocationOpen(false)
          onClose()
        }}
      />
    </>
  )
}

// Parent component usage
export function ParentComponent() {
  const [isAddressBookOpen, setIsAddressBookOpen] = useState(false)

  const handleLocationSelect = (address: string) => {
    // Handle the selected address
    console.log('Selected address:', address)
  }

  return (
    <>
      <Button
        variant="outline"
        className={`flex items-center gap-1 ${isAddressBookOpen ? "bg-accent" : ""}`}
        onClick={() => setIsAddressBookOpen(true)}
      >
        <Star className="h-4 w-4" />
        অ্যাড্রেসবুক
      </Button>

      <AddressBookModal
        isOpen={isAddressBookOpen}
        onClose={() => setIsAddressBookOpen(false)}
        onSelect={(address) => {
          handleLocationSelect(address)
          setIsAddressBookOpen(false)
        }}
      />
    </>
  )
}