import { useTranslations } from "next-intl"

export default function About() {
  const t = useTranslations("about")

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
      <p className="text-lg">{t("description")}</p>
    </div>
  )
}

