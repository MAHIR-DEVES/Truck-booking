"use client"

import { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'

export default function SettingsPage() {
  const router = useRouter()
  const params = useParams()
  const locale = params.locale as string

  useEffect(() => {
    router.push(`/${locale}/dashboard/settings/general`)
  }, [router, locale])

  return null
} 