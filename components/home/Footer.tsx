import Image from "next/image"
import Link from "next/link"
import { Facebook, Youtube, Linkedin, Instagram, Twitter } from "lucide-react"
import paymentmode from '@/assests/footer/google-play-badge.png'
import logo from '@/assests/icon.png'
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations("footer");
  const categories = {
    pickup: t.raw("categories.pickup.items") as string[],
    medium: t.raw("categories.medium.items") as string[],
    large: t.raw("categories.large.items") as string[],
    trailer: t.raw("categories.trailer.items") as string[],
    attachment: t.raw("categories.attachment.items") as string[],
  };

  return (
    <footer className="bg-white pt-10 pb-2 p-2 max-w-8xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-200 py-4 mt-4">
          <h3 className="font-bold text-xs mb-2">{t("categories.title")}</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <h4 className="font-semibold mb-3 text-xs">{t("categories.pickup.title")}</h4>
              <ul className="space-y-1 text-xs text-gray-600">
                {categories.pickup.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-xs">{t("categories.medium.title")}</h4>
              <ul className="space-y-1 text-xs text-gray-600">
                {categories.medium.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-xs">{t("categories.large.title")}</h4>
              <ul className="space-y-1 text-xs text-gray-600">
                {categories.large.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-xs">{t("categories.trailer.title")}</h4>
              <ul className="space-y-1 text-xs text-gray-600">
                {categories.trailer.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-xs">{t("categories.attachment.title")}</h4>
              <ul className="space-y-1 text-xs text-gray-600">
                {categories.attachment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-4 mt-4">
            {/* Services */}
            <div>
              <h3 className="font-bold mb-2 text-xs">{t("links.services.title")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 text-xs hover:text-gray-900">
                    {t("links.services.items.shipper")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-xs hover:text-gray-900">
                    {t("links.services.items.business")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-xs hover:text-gray-900">
                    {t("links.services.items.shipping")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-xs hover:text-gray-900">
                    {t("links.services.items.truckOwner")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-xs hover:text-gray-900">
                    {t("links.services.items.faq")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-xs mb-4">{t("links.company.title")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 text-xs hover:text-gray-900">
                    {t("links.company.items.blog")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-xs hover:text-gray-900">
                    {t("links.company.items.career")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-xs hover:text-gray-900">
                    {t("links.company.items.contact")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-xs hover:text-gray-900">
                    {t("links.company.items.categories")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Rules */}
            <div>
              <h3 className="font-bold text-xs mb-2">{t("links.rules.title")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 text-xs hover:text-gray-900">
                    {t("links.rules.items.termsShipper")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-xs hover:text-gray-900">
                    {t("links.rules.items.termsOwner")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 text-xs hover:text-gray-900">
                    {t("links.rules.items.privacy")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Parts */}
            <div>
              <h3 className="font-bold text-xs mb-4">{t("links.parts.title")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 text-xs hover:text-gray-900">
                    {t("links.parts.items.truckParts")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-xs mb-4">{t("contact.title")}</h3>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${t("contact.email")}`} className="text-gray-600 hover:text-gray-900">
                    {t("contact.email")}
                  </a>
                </li>
                <li>
                  <a href={`tel:${t("contact.phone")}`} className="text-gray-600 hover:text-gray-900">
                    {t("contact.phone")}
                  </a>
                </li>
                <li className="flex gap-4 pt-4">
                  <Link href="#" className="text-red-600 hover:text-red-700">
                    <Facebook className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="text-red-600 hover:text-red-700">
                    <Youtube className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="text-red-600 hover:text-red-700">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="text-red-600 hover:text-red-700">
                    <Instagram className="w-4 h-4" />
                  </Link>
                  <Link href="#" className="text-red-600 hover:text-red-700">
                    <Twitter className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center lg:items-start gap-4 mb-4">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt={t("brandName")}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="text-sm font-bold">{t("brandName")}</span>
              </Link>
              <p className="text-sm text-gray-600">{t("copyright")}</p>
            </div>

            {/* Download Apps */}
            <div className="flex flex-col items-center gap-4 mt-4">
              <p className="font-semibold text-xs">{t("download.title")}</p>
              <div className="flex gap-4">
                <div>
                  <p className="mb-2 text-xs">{t("download.shipper")}</p>
                  <Link href="#">
                    <Image
                      src={paymentmode}
                      alt={t("download.playStoreAlt")}
                      width={135}
                      height={40}
                      className="h-10"
                    />
                  </Link>
                </div>
                <div>
                  <p className="mb-2 text-xs">{t("download.truckOwner")}</p>
                  <Link href="#">
                    <Image
                      src={paymentmode}
                      alt={t("download.playStoreAlt")}
                      width={135}
                      height={40}
                      className="h-10"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}