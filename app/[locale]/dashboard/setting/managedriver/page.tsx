"use client"

import { Button } from "@/components/ui/button"
import { Plus, User } from "lucide-react"
import { useTranslations } from 'next-intl'

const ManageDriverPage = () => {
  const t = useTranslations('dashboard.settings.manageDriver')

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold mb-2">{t('title')}</h1>
              <p className="text-gray-600">{t('description')}</p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Plus className="w-5 h-5 mr-2" />
              {t('addButton')}
            </Button>
          </div>

          {/* Driver List */}
          <div className="bg-white rounded-lg shadow p-6">
            {/* Empty State */}
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">{t('emptyState.title')}</h3>
              <p className="text-gray-600 mb-4">{t('emptyState.description')}</p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Plus className="w-5 h-5 mr-2" />
                {t('emptyState.addFirstButton')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageDriverPage