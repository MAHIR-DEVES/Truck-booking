"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import img1 from "@/assests/banner/home_banner_1.webp";
import img2 from "@/assests/banner/home_banner_2.webp";
import img3 from "@/assests/banner/home_banner_3.webp";
import Image, { StaticImageData } from "next/image";
import TruckHire from "./TruckHire";
import { useTranslations } from "next-intl";

interface BannerSlide {
  title: string;
  subtitle: string;
  buttonText: string;
  image: StaticImageData;
}

interface TranslatedSlide {
  title: string;
  subtitle: string;
  buttonText: string;
}

const bannerImages = [img1, img2, img3];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations("home.banner");

  const slides = t.raw("slides") as TranslatedSlide[];
  const bannerSlides: BannerSlide[] = slides.map((slide, index) => ({
    ...slide,
    image: bannerImages[index],
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length
    );
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      {bannerSlides.map((slide: BannerSlide, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className="object-cover w-full h-full"
            layout="fill"
          />

          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="mx-auto px-4 h-full flex items-center relative z-10">
            {/* Right Content (Titles and Button) */}
            <div className="w-full md:w-1/2 text-white p-16">
              <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-8">{slide.subtitle}</p>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                {slide.buttonText}
              </Button>
            </div>
            <div className="hidden md:block w-full md:w-1/2 mr-4">
              <TruckHire />
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {bannerSlides.map((_: BannerSlide, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
