"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function PromoCodePage() {
    const [open, setOpen] = useState(false)
    const [promoCode, setPromoCode] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle promo code submission here
        setOpen(false)
        setPromoCode("")
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <h1 className="text-2xl font-medium mb-8">প্রোমো কোড</h1>

            {/* Empty State */}
            <div className="flex flex-col items-center justify-center py-16">
                <div className="w-64 h-64 mb-8">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-agwIXfdyKsR91W1L2BcgoaU4VbgmvM.png"
                        alt="Empty promo codes illustration"
                        className="w-full h-full object-contain"
                    />
                </div>
                <h2 className="text-xl text-gray-900 mb-2">কোনো প্রোমো নেই</h2>
                <p className="text-gray-600 mb-6">টাকা বাঁচাতে এখনই নতুন প্রোমো কোড যোগ করুন</p>
                <Button onClick={() => setOpen(true)} className="bg-red-600 text-white hover:bg-red-700">
                    + প্রোমো যোগ করুন
                </Button>
            </div>

            {/* Add Promo Code Modal */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-[400px] p-0 gap-0">
                    <DialogHeader className="p-4 flex flex-row items-center justify-between border-b">
                        <DialogTitle className="text-lg">প্রোমো যোগ করুন</DialogTitle>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setOpen(false)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="p-4 space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-600">প্রোমো কোড</label>
                            <Input
                                placeholder="প্রোমো কোড লিখুন"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                                className="w-full"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white">
                            যোগ করুন
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

