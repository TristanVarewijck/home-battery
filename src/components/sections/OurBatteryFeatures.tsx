'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export function OurBatteryFeatures() {
  const features = [
    {
      title: 'Flexible Uitbreiding',
      description:
        'Tot 12 clusters parallel, met een capaciteit van 7.68kWh tot 276.48kWh.',
    },
    {
      title: 'Ultra Veilig',
      description:
        'Intelligent brandblussysteem dat binnen 5 seconden reageert.',
    },
    {
      title: 'Efficiënt',
      description: 'Vrije combinatie van modules binnen drie jaar.',
    },
    {
      title: '1C Ontlading',
      description:
        'Gelijktijdig stroom leveren aan meerdere apparaten, geen zorgen over stroomuitval.',
    },
    {
      title: 'Automatische Zelfverwarming',
      description: 'Optioneel voor een bedrijfstemperatuur van -20°C tot 55°C.',
    },
    {
      title: 'Eenvoudige Installatie',
      description:
        'Geen bedrading, installatie in 15 minuten door één persoon, bespaart tijd en arbeid.',
    },
  ];

  const scrollToForm = () => {
    const form = document.querySelector('#submission-form-container');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center lg:text-5xl font-bold text-gray-900 mb-12 lg:mb-16">
          Ontdek de voordelen van{' '}
          <span className="text-blue-600">onze thuisbatterij</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side for image */}
          <div className="relative h-full bg-none rounded-lg overflow-hidden my-auto">
            {/* Placeholder for image - you can replace this with a specific image */}
            <Image
              src="/our-battery.png" // Replace with your actual battery image path
              alt="Onze thuisbatterij"
              fill
              className="object-contain shadow-lg"
            />
          </div>

          {/* Right side for bullet points and CTA */}
          <div>
            <ul className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-6 h-6  text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-l font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-right">
              <Button
                size="lg"
                onClick={scrollToForm}
                className="bg-brand-blue-600 text-white hover:bg-brand-blue-700 font-semibold px-8 py-3 text-lg"
              >
                Vraag een gratis berekening aan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
