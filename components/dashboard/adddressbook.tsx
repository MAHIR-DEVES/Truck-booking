"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { MapModal } from "./MapModal"

const AddressBookPage = () => {
  const [isMapOpen, setIsMapOpen] = useState(false)

  return (
    <div className=" mx-auto py-10 md:w-[1200px]">
      {/* Header */}
      <div className="flex justify-between items-center pb-4 border-b">
        <h2 className="text-xl font-semibold">অ্যাড্রেসবুক</h2>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center mt-8">
        {/* Illustration */}
        <div className="relative w-48 h-48 mb-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-16 bg-gray-200"></div>
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-24 h-24 border-2 border-gray-200 rounded-lg"></div>
        </div>

        {/* Message */}
        <p className="text-gray-600 text-lg mb-6">কোনো অ্যাড্রেস যোগ করা হয় নি</p>

        {/* Add New Address Button */}
        <Button
          onClick={() => setIsMapOpen(true)}
          className="inline-flex items-center gap-2 bg-red-500 text-white hover:bg-red-600"
        >
          <Plus className="w-5 h-5" />
          নতুন অ্যাড্রেস যোগ করুন
        </Button>
      </div>

      {/* Map Modal */}
      <MapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        onSelect={(location) => {
          console.log("Selected location:", location)
          setIsMapOpen(false)
        }}
      />
    </div>
  )
}

export default AddressBookPage
