"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Phone, Menu } from "lucide-react"
import Image from "next/image"
import logo from "@/assests/icon.png"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const locale = useLocale()
  const router = useRouter()
  const t = useTranslations("header")

  const handleLanguageChange = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(currentPath)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoginOpen(false)
  }

  return (
    <header className="bg-[#8B0000] text-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 grid grid-cols-3 items-center">
        <div className="flex items-center gap-2 col-span-2 md:col-span-1">
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo || "/placeholder.svg"} alt={t("brandName")} width={60} height={80} className="rounded-full" />
            <span className="md:text-xl sm:text-sm font-bold">{t("brandName")}</span>
          </Link>
        </div>

        <div className={`md:flex gap-6 ${isMenuOpen ? 'flex flex-col absolute bg-[#8B0000] w-full left-0 top-16 p-1  z-10' : 'hidden'}`}>
          <Link href="/business" className="hover:text-gray-200">{t("business")}</Link>
          <Link href="#" className="hover:text-gray-200">{t("shipping")}</Link>
          <Link href="#" className="hover:text-gray-200">{t("truckOwner")}</Link>
          <Link href="#" className="hover:text-gray-200">{t("blog")}</Link>
        </div>

        <div className="flex items-center gap-4 justify-end col-span-1">
          <Button variant="outline" className="bg-white text-[#8B0000] hover:bg-gray-100">
            <span 
              className={`cursor-pointer ${locale === "bn" ? "font-bold" : ""}`}
              onClick={() => handleLanguageChange("bn")}
            >
              বাংলা
            </span>
            <span className="mx-2 text-gray-300">|</span>
            <span 
              className={`cursor-pointer ${locale === "en" ? "font-bold" : ""}`}
              onClick={() => handleLanguageChange("en")}
            >
              English
            </span>
          </Button>
          <Button onClick={() => setIsLoginOpen(true)} className="bg-red-600 hover:bg-red-700 text-white">
            {t("login")}
          </Button>
        </div>
      </nav>

      {/* Login Modal */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <div className="space-y-6">
            <h1 className="text-2xl font-medium">{t("mobileNumber")}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm text-gray-600">{t("mobileLabel")}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <Input type="tel" placeholder={t("mobileNumberPlaceholder")} className="pl-10" />
                </div>
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg">
                {t("proceed")}
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  )
}

export default Header