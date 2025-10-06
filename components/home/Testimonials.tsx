"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import img1 from "@/assests/review/icon-0 (1).webp"
import img2 from "@/assests/review/icon-0.webp"
import img3 from "@/assests/review/icon-4.webp"
import { useTranslations } from "next-intl"

const avatarImages = [img1, img2, img3, img2, img3];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const t = useTranslations("home");

    const testimonials = t.raw("testimonials.items").map((item: any, index: number) => ({
        id: index + 1,
        quote: item.quote,
        author: item.author,
        role: item.role,
        avatar: avatarImages[index % avatarImages.length]
    }));

    const nextTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="bg-background text-foreground max-w-[1200px] mx-auto px-4 py-16">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{t("testimonials.title")}</h2>
            </div>

            {/* Testimonials */}
            <div className="relative">
                {/* Testimonial Cards */}
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {testimonials.slice(activeIndex, activeIndex + 3).map((testimonial, idx) => (
                        <div key={testimonial.id} className={`w-full md:w-1/3 ${idx === 1 ? "block" : "hidden md:block"}`}>
                            <div className="text-center bg-card p-6 rounded-lg shadow-md">
                                <p className="text-card-foreground mb-8 text-sm md:text-base leading-relaxed">{testimonial.quote}</p>
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-border">
                                        <Image
                                            src={testimonial.avatar || "/placeholder.svg"}
                                            alt={`Avatar of ${testimonial.author}`}
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-sm md:text-base mb-1">{testimonial.author}</h3>
                                    {testimonial.role && <p className="text-muted-foreground text-xs md:text-sm">{testimonial.role}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center items-center gap-4 mt-8">
                    <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={prevTestimonial} 
                        aria-label={t("testimonials.navigation.previous")}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={nextTestimonial} 
                        aria-label={t("testimonials.navigation.next")}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center items-center gap-2 mt-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === activeIndex ? "w-6 bg-primary" : "w-2 bg-muted"
                            }`}
                            aria-label={`${t("testimonials.navigation.viewSet")} ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

