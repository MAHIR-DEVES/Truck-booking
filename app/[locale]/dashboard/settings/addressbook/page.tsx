"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTranslations } from 'next-intl'
import { Plus } from "lucide-react"

const AddressBookPage = () => {
  const t = useTranslations('dashboard.settings')

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold mb-2">Address Book</h1>
              <p className="text-gray-600">Manage your frequently used addresses</p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Plus className="w-5 h-5 mr-2" />
              Add New Address
            </Button>
          </div>

          {/* Address List */}
          <div className="bg-white rounded-lg shadow p-6">
            {/* Empty State */}
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No addresses yet</h3>
              <p className="text-gray-600 mb-4">Add your frequently used addresses for quick access</p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Plus className="w-5 h-5 mr-2" />
                Add Your First Address
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressBookPage 