"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone } from "lucide-react"

export default function MobileLogin() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6 space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-medium">আপনার মোবাইল নাম্বার</h1>
          <div className="space-y-1">
            <label className="text-sm text-gray-600">মোবাইল নাম্বার</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <Phone className="h-5 w-5" />
              </div>
              <Input type="tel" placeholder="আপনার মোবাইল নাম্বার" className="pl-10" />
            </div>
          </div>
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg">এগিয়ে যান</Button>
          <p className="text-sm text-center text-gray-500">এই নাম্বারে একটি ভেরিফিকেশন কোড পাঠানো হবে</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">Or</span>
          </div>
        </div>

        <div className="space-y-3">
          <Button variant="outline" className="w-full py-6 border border-gray-300">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
              className="h-5 w-5 mr-2"
            />
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full py-6 border border-gray-300">
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="Facebook logo"
              className="h-5 w-5 mr-2"
            />
            Continue with Facebook
          </Button>
        </div>

        <p className="text-sm text-center text-gray-600">
          এগিয়ে যাওয়ার দ্বারা আপনি আমাদের{" "}
          <a href="#" className="text-blue-600 hover:underline">
            শর্তাবলী
          </a>{" "}
          এবং{" "}
          <a href="#" className="text-blue-600 hover:underline">
            গোপনীয়তা নীতিমালা
          </a>{" "}
          মেনে নিচ্ছেন
        </p>
      </div>
    </div>
  )
}

