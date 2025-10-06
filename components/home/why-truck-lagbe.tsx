'use client';

import Image from 'next/image';
import { Rocket, ThumbsUp, Shield, User } from 'lucide-react';
import enposter from '@/public/banner/en-poster.webp';
import { useTranslations } from 'next-intl';
import { ReactElement } from 'react';

interface Feature {
  title: string;
  description: string;
}

interface FeatureWithIcon extends Feature {
  icon: ReactElement;
}

interface RawFeature {
  title: string;
  description: string;
}

const icons = [
  <Rocket key="rocket" className="w-6 h-6 text-red-500" />,
  <ThumbsUp key="thumbs-up" className="w-6 h-6 text-red-500" />,
  <Shield key="shield" className="w-6 h-6 text-red-500" />,
  <User key="user" className="w-6 h-6 text-red-500" />,
];

export default function WhyTruckLagbe() {
  const t = useTranslations('home.whyTruckKoi');
  const rawFeatures = t.raw('features') as RawFeature[];

  const features: FeatureWithIcon[] = rawFeatures.map((feature, index) => ({
    icon: icons[index],
    title: feature.title,
    description: feature.description,
  }));

  return (
    <section className="container mx-auto px-4 py-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {t('title')}
        </h2>
        <p className="text-gray-600 text-lg">{t('subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Banner */}
        <div className="relative w-full md:h-[470px] rounded-2xl overflow-hidden bg-gradient-to-b from-red-600 to-red-700">
          <Image
            src={enposter}
            alt={t('title')}
            width={600}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Right Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border"
            >
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
