"use client"

import { useState } from "react"
import { Clock, Plus, Settings, Ticket, Smartphone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"
import { usePathname, useParams } from "next/navigation"
import { useTranslations } from "next-intl"

export function SideNav() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const pathname = usePathname()
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations("dashboard.sideNav")

  const isActive = (path: string) => {
    if (path.includes('/settings')) {
      return pathname.includes('/settings')
    }
    return pathname === path
  }

  const menuItemClass = (path: string) =>
    `w-full justify-start gap-2 flex items-center p-2 rounded-md ${isActive(path) ? "bg-red-50 text-red-600" : ""}`

  return (
    <div className={`${sidebarOpen ? "w-64" : "w-20"} transition-all duration-300 border-r h-screen`}>
      <div className="flex flex-col h-full">
        {/* Sidebar toggle button */}
        <Button
          variant="ghost"
          className="lg:hidden absolute top-4 left-4"
          onClick={() => setSidebarOpen((prev) => !prev)}
        >
          {sidebarOpen ? t("toggleMenu.close") : t("toggleMenu.open")}
        </Button>

        <div className="flex-1 py-2">
          <nav className="space-y-1 px-2">
            <Link href={`/${locale}/dashboard`} className="text-lg ml-4 font-medium bg-pink-100 text-pink-600 px-2 py-0.5 rounded">
              {t("title")}
            </Link>
            <Link href={`/${locale}/dashboard/create-trip`} className={menuItemClass(`/${locale}/dashboard/create-trip`)}>
              <Plus className="h-5 w-5" />
              {sidebarOpen && t("menu.createTrip")}
            </Link>

            <Link href={`/${locale}/dashboard/mytrip`} className={menuItemClass(`/${locale}/dashboard/mytrip`)}>
              <Clock className="h-5 w-5" />
              {sidebarOpen && t("menu.myTrips")}
            </Link>

            <Link href={`/${locale}/dashboard/kamkoreni`} className={menuItemClass(`/${locale}/dashboard/kamkoreni`)}>
              <Ticket className="h-5 w-5" />
              {sidebarOpen && t("menu.promoCode")}
            </Link>

            <Collapsible>
              <CollapsibleTrigger asChild>
                <Link
                  href={`/${locale}/dashboard/settings`}
                  className={`${menuItemClass(`/${locale}/dashboard/settings`)} ${sidebarOpen ? "justify-between" : "justify-center"}`}
                >
                  <div className="flex items-center gap-x-2">
                    <Settings className="h-5 w-5" />
                    {sidebarOpen && <span className="text-left flex-1">{t("menu.settings")}</span>}
                  </div>
                  {sidebarOpen && <ChevronDown className="h-4 w-4" />}
                </Link>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-2 space-y-2 flex flex-col">
                <Link
                  href={`/${locale}/dashboard/settings/general`}
                  className={`w-full text-sm p-2 rounded-md ${isActive(`/${locale}/dashboard/settings/general`) ? "bg-red-50 text-red-600" : ""}`}
                >
                  {t("menu.settingsSubmenu.general")}
                </Link>
                <Link
                  href={`/${locale}/dashboard/settings/addressbook`}
                  className={`w-full text-sm p-2 rounded-md ${isActive(`/${locale}/dashboard/settings/addressbook`) ? "bg-red-50 text-red-600" : ""}`}
                >
                  {t("menu.settingsSubmenu.addressBook")}
                </Link>
                <Link
                  href={`/${locale}/dashboard/settings/managedriver`}
                  className={`w-full text-sm p-2 rounded-md ${isActive(`/${locale}/dashboard/settings/managedriver`) ? "bg-red-50 text-red-600" : ""}`}
                >
                  {t("menu.settingsSubmenu.manageDriver")}
                </Link>
              </CollapsibleContent>
            </Collapsible>
          </nav>
        </div>

        <div className="p-2 border-t">
          <div className="space-y-1">
            <div>
              <h3 className="font-medium">{sidebarOpen && t("mobileApp.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {sidebarOpen && t("mobileApp.description")}
              </p>
            </div>
            <Button variant="outline" className="w-full gap-2">
              <Smartphone className="h-5 w-5" />
              {sidebarOpen && t("mobileApp.installButton")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

