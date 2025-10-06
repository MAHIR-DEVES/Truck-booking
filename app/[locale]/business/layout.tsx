import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { MainNav } from '@/components/dashboard/main-nav';
import { SideNav } from '@/components/dashboard/side-nav';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Business Dashboard',
  description: 'Business Management Dashboard',
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (err) {
    console.error(`Failed to load messages for locale ${locale}:`, err);
    notFound();
  }
}

export default async function BusinessLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-screen bg-white">
            <MainNav />
            <div className="flex">
              <div className="hidden lg:block">
                <SideNav />
              </div>
              <main className="p-6 flex-1">{children}</main>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
