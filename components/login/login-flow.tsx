"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Phone } from "lucide-react"

export default function LoginFlow() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isVerifyOpen, setIsVerifyOpen] = useState(false)
  const [otp, setOtp] = useState(["", "", "", ""])
  const [timer, setTimer] = useState(28)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoginOpen(false)
    setIsVerifyOpen(true)
  }

  const handleVerifyClose = () => {
    setIsVerifyOpen(false)
    setOtp(["", "", "", ""])
    setTimer(28)
  }

  return (
    <div>
      {/* <Button onClick={() => setIsLoginOpen(true)} className="bg-red-600 hover:bg-red-700">
        Open Login
      </Button> */}

      {/* Login Modal */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-2xl font-medium">আপনার মোবাইল নাম্বার</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-600">মোবাইল নাম্বার</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <Input type="tel" placeholder="আপনার মোবাইল নাম্বার" className="pl-10" />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg">
                  এগিয়ে যান
                </Button>
              </form>
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
        </DialogContent>
      </Dialog>

      {/* Verification Modal */}
      <Dialog open={isVerifyOpen} onOpenChange={handleVerifyClose}>
        <DialogContent className="sm:max-w-md">
          <div className="space-y-6">
            <h1 className="text-2xl font-medium">মোবাইল নাম্বার ভেরিফাই করুন</h1>

            <p className="text-gray-600">০১২৭৭০০২১০১ নম্বরে ভেরিফিকেশন কোড পাঠানো হয়েছে</p>

            <div className="flex gap-3 justify-between">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => {
                    const newOtp = [...otp]
                    newOtp[index] = e.target.value
                    setOtp(newOtp)
                    if (e.target.value && index < 3) {
                      const nextInput = document.querySelector(`input[name="otp-${index + 1}"]`) as HTMLInputElement
                      if (nextInput) nextInput.focus()
                    }
                  }}
                  name={`otp-${index}`}
                  className="w-16 h-16 text-center text-2xl p-0"
                />
              ))}
            </div>

            <Button variant="ghost" className="w-full text-gray-500 hover:text-gray-700" disabled={timer > 0}>
              পুনরায় কোড {timer > 0 ? `${timer} সেকেন্ড` : ""}
            </Button>

            <Button
              className="w-full py-6 bg-gray-100 hover:bg-gray-200 text-gray-600"
              onClick={() => {
                // Handle verification here
                handleVerifyClose()
              }}
            >
              ভেরিফাই করুন
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

