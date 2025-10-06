"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X, Maximize, Minus, Plus, Compass } from "lucide-react"

export default function AddressBook() {
    const [open, setOpen] = useState(false)

    return (
        <div className="max-w-screen-xl mx-auto px-2">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-medium -mt-4">অ্যাড্রেসবুক</h1>
                <Input placeholder="সর্বশেষ অ্যাড্রেস খুঁজুন" className="max-w-xs" type="search" />
            </div>

            {/* Empty State */}
            <div className="flex flex-col items-center justify-center py-4">
                <div className="w-64 h-64 mb-8">
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FrcrJcVObX5rJY3Kw01Ok83mAl8GCw.png"
                        alt="Empty address book illustration"
                        className="w-full h-full object-contain"
                    />
                </div>
                <h2 className="text-xl text-gray-900 mb-6">কোনো অ্যাড্রেস যোগ করা হয় নি</h2>
                <Button onClick={() => setOpen(true)} className="bg-red-600 text-white hover:bg-red-700">
                    + নতুন অ্যাড্রেস যোগ করুন
                </Button>
            </div>

            {/* Add Location Modal */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-[600px] p-0 gap-0">
                    <DialogHeader className="p-4 flex flex-row items-center justify-between border-b">
                        <DialogTitle className="text-lg">লোকেশন যোগ করুন</DialogTitle>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setOpen(false)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </DialogHeader>

                    <div className="p-4">
                        {/* Search Input */}
                        <div className="relative mb-4">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                            <Input placeholder="সার্চ লোকেশন" className="pl-10" />
                        </div>

                        {/* Map Container */}
                        <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-01%20at%2018.00.41_10938c6a.jpg-U3v8ebAu3HThT5ZVZyVejGccl14jni.jpeg"
                                alt="Map"
                                className="w-full h-full object-cover"
                            />

                            {/* Map Controls */}
                            <div className="absolute right-4 top-4 flex flex-col gap-2">
                                <Button variant="secondary" size="icon" className="h-8 w-8 bg-white shadow-md">
                                    <Maximize className="h-4 w-4" />
                                </Button>
                                <Button variant="secondary" size="icon" className="h-8 w-8 bg-white shadow-md">
                                    <Plus className="h-4 w-4" />
                                </Button>
                                <Button variant="secondary" size="icon" className="h-8 w-8 bg-white shadow-md">
                                    <Minus className="h-4 w-4" />
                                </Button>
                            </div>

                            {/* Current Location Button */}
                            <Button variant="secondary" size="icon" className="h-8 w-8 bg-white shadow-md absolute right-4 bottom-4">
                                <Compass className="h-4 w-4" />
                            </Button>

                            {/* Attribution */}
                            <div className="absolute left-2 bottom-2 text-xs text-gray-600">© OpenStreetMap contributors</div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

