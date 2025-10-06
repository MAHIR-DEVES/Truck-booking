import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import logo from "@/assests/icon.png";
import { useTranslations } from "next-intl";

export function MainNav() {
  const t = useTranslations("dashboard.nav");

  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 gap-4  mx-auto">
        {/* Logo & Beta tag */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Image src={logo} className="h-10 w-20 min-w-[3rem]" alt="Logo" />
          
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notification Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            aria-label={t("notifications.title")}
          >
            <Bell className="h-5 w-5" />
            <span 
              className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full" 
              aria-label={t("notifications.newNotification")}
            />
          </Button>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <Avatar className="h-8 w-8 bg-neutral-600">
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
                <span className="hidden sm:inline">Nurany Jannat</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex flex-col items-center gap-2 p-4">
                <Avatar className="h-20 w-20 bg-neutral-600">
                  <AvatarFallback>N</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="font-medium">Nurany Jannat</p>
                  <p className="text-sm text-muted-foreground">
                    01747335232
                  </p>
                </div>
              </div>
              <DropdownMenuItem>
                <span>{t("profile.editProfile")}</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                <span>{t("profile.logout")}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
