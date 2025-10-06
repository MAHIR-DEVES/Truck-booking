"use client"

import { ChevronRight } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="w-full w-[1200px] mx-auto min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">সেটিংস</h1>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="w-full flex justify-start mb-8">
            <TabsTrigger value="personal" className="flex-1">
              নিজস্ব সেটিংস
            </TabsTrigger>
            <TabsTrigger value="security" className="flex-1">
              নিরাপত্তা
            </TabsTrigger>
            <TabsTrigger value="payment" className="flex-1">
              পেমেন্ট
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-6">
            <h2 className="text-lg font-medium">নিজস্ব সেটিংস</h2>

            <div className="space-y-4">
              {/* Language Selection */}
              <div className="flex items-center justify-between py-4 border-b">
                <div>
                  <h3 className="font-medium">ভাষা</h3>
                  <p className="text-sm text-muted-foreground">আপনার পছন্দের ভাষায় অ্যাপটি ব্যবহার করুন</p>
                </div>
                <Select defaultValue="bangla">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="ভাষা নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bangla">বাংলা</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Notification Settings */}
              <div className="flex items-center justify-between py-4 border-b">
                <div>
                  <h3 className="font-medium">নোটিফিকেশন সেটিংস</h3>
                  <p className="text-sm text-muted-foreground">নোটিফিকেশনগুলো চালু বা বন্ধ করে দিন</p>
                </div>
                <Switch />
              </div>

              {/* Terms & Conditions */}
              <button className="w-full flex items-center justify-between py-4 border-b hover:bg-accent rounded-lg">
                <div>
                  <h3 className="font-medium">নিয়ম ও শর্তাবলী</h3>
                  <p className="text-sm text-muted-foreground">নিয়ম ও শর্তাবলী পড়ুন</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>

              {/* Privacy Policy */}
              <button className="w-full flex items-center justify-between py-4 border-b hover:bg-accent rounded-lg">
                <div>
                  <h3 className="font-medium">গোপনীয়তা নীতিমালা</h3>
                  <p className="text-sm text-muted-foreground">গোপনীয়তা নীতিমালা পড়ুন</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <h2 className="text-lg font-medium">নিরাপত্তা সেটিংস</h2>

            <div className="space-y-4">
              {/* Security Settings */}
              <button className="w-full flex items-center justify-between py-4 border-b hover:bg-accent rounded-lg">
                <div>
                  <h3 className="font-medium">পাসওয়ার্ড পরিবর্তন</h3>
                  <p className="text-sm text-muted-foreground">আপনার পাসওয়ার্ড পরিবর্তন করুন</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>

              <button className="w-full flex items-center justify-between py-4 border-b hover:bg-accent rounded-lg">
                <div>
                  <h3 className="font-medium">দুই-ফ্যাক্টর প্রমাণীকরণ</h3>
                  <p className="text-sm text-muted-foreground">আপনার অ্যাকাউন্টের নিরাপত্তা বাড়ান</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
          </TabsContent>

          <TabsContent value="payment" className="space-y-6">
            <h2 className="text-lg font-medium">পেমেন্ট সেটিংস</h2>

            <div className="space-y-4">
              {/* Payment Settings */}
              <button className="w-full flex items-center justify-between py-4 border-b hover:bg-accent rounded-lg">
                <div>
                  <h3 className="font-medium">পেমেন্ট পদ্ধতি</h3>
                  <p className="text-sm text-muted-foreground">��পনার পেমেন্ট পদ্ধতি পরিবর্তন করুন</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>

              <button className="w-full flex items-center justify-between py-4 border-b hover:bg-accent rounded-lg">
                <div>
                  <h3 className="font-medium">বিলিং ইতিহাস</h3>
                  <p className="text-sm text-muted-foreground">আপনার পূর্ববর্তী লেনদেন দেখুন</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

