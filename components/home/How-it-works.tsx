"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Minus } from "lucide-react"
import image from "@/assests/banner/poster-0-en.webp"
import image2 from "@/assests/footer/google-play-badge.png"
import { useTranslations } from "next-intl"

interface Step {
    title: string;
    content: string;
    hasPlayStore: boolean;
}

export default function HowItWorks() {
    const [openStep, setOpenStep] = useState(0)
    const t = useTranslations("home.howItWorks");

    const steps = t.raw("steps") as Step[];

    return (
        <section className="container mx-auto px-4 py-16 max-w-7xl ">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{t("title")}</h2>
                <p className="text-gray-600">{t("subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left: Steps */}
                <div className="space-y-4">
                    {steps.map((step, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                            <button
                                onClick={() => setOpenStep(openStep === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                            >
                                <span className="font-medium">
                                    {index + 1}. {step.title}
                                </span>
                                {openStep === index ? (
                                    <Minus className="w-5 h-5 text-red-500" />
                                ) : (
                                    <Plus className="w-5 h-5 text-red-500" />
                                )}
                            </button>

                            {openStep === index && step.content && (
                                <div className="p-4 pt-0">
                                    <p className="text-gray-600 mb-4">{step.content}</p>
                                    {step.hasPlayStore && (
                                        <a
                                            href="https://play.google.com/store/apps/details?id=com.trucklagbe"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block"
                                        >
                                            <Image
                                                src={image2}
                                                alt={t("playStoreAlt")}
                                                width={162}
                                                height={48}
                                                className="h-12 w-auto"
                                            />
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right: Phone Mockup */}
                <div className="rounded-md">
                    <Image
                        src={image}
                        alt={t("appInterfaceAlt")}
                        width={500}
                        height={900}
                        className="w-full h-auto rounded-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

