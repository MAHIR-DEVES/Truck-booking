"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTranslations } from 'next-intl'

const GeneralSettingsPage = () => {
  const t = useTranslations('dashboard.settings')

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">{t('general.title')}</h1>
            <p className="text-gray-600">{t('general.description')}</p>
          </div>

          {/* Profile Settings */}
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Profile Settings</h2>
              <p className="text-sm text-gray-600">Update your personal information</p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Enter your company name" />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Notification Settings</h2>
              <p className="text-sm text-gray-600">Manage your notification preferences</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-gray-600">Receive email updates about your trips</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SMS Notifications</Label>
                  <p className="text-sm text-gray-600">Receive SMS updates about your trips</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-gray-600">Receive push notifications on your mobile device</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          {/* Language and Region */}
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Language and Region</h2>
              <p className="text-sm text-gray-600">Set your language and regional preferences</p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <select 
                  id="language" 
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="en">English</option>
                  <option value="bn">বাংলা</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Time Zone</Label>
                <select 
                  id="timezone" 
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="asia/dhaka">Asia/Dhaka (GMT+6)</option>
                  <option value="utc">UTC</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralSettingsPage