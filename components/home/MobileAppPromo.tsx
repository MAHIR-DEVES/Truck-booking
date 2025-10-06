'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import poster from '@/public/banner/poster.webp';
import { useTranslations } from 'next-intl';

export default function MobileAppPromo() {
  const t = useTranslations('home.mobileApp');
  const features = t.raw('features') as string[];

  return (
    <section className="container px-4 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight text-[#1A1A1A] whitespace-pre-line">
            {t('title')}
          </h2>

          <p className="text-gray-600 text-lg">{t('description')}</p>

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="text-green-500 w-5 h-5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src={poster}
            alt={t('imageAlt')}
            width={400}
            height={400}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
