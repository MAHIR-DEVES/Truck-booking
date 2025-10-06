'use client';

import Image from 'next/image';
import { StaticImageData } from 'next/image';
import img1 from '@/public/keyicons/icon-1.svg';
import img2 from '@/public/keyicons/icon-2.svg';
import img3 from '@/public/keyicons/icon-3.svg';
import img4 from '@/public/keyicons/icon-4.svg';
import img5 from '@/public/keyicons/icon-5.svg';
import { useTranslations } from 'next-intl';

interface Client {
  name: string;
  alt: string;
  src: StaticImageData;
  width: number;
  height: number;
}

interface TranslatedClient {
  name: string;
  alt: string;
}

const clientImages = [
  { src: img1, width: 120, height: 60 },
  { src: img2, width: 120, height: 60 },
  { src: img3, width: 120, height: 60 },
  { src: img4, width: 120, height: 60 },
  { src: img5, width: 150, height: 60 },
];

const KeyClients = () => {
  const t = useTranslations('home.keyClients');

  const clients: Client[] = t
    .raw('clients')
    .map((client: TranslatedClient, index: number) => ({
      ...client,
      ...clientImages[index],
    }));

  return (
    <div className="text-center py-10 bg-white max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold">{t('title')}</h2>
      <p className="text-gray-600 max-w-xl mx-auto mt-2">{t('description')}</p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-6 justify-items-center">
        {clients.map(client => (
          <div key={client.name} className="flex justify-center">
            <Image
              src={client.src}
              alt={client.alt}
              width={client.width}
              height={client.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyClients;
