'use client';

import { animated, useInView } from '@react-spring/web';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sun, TrendingUp, Zap, ArrowUp, BatteryCharging } from 'lucide-react';

export function HomeBatteryInfo() {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 50,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      config: {
        tension: 300,
        friction: 30,
      },
    }),
    {
      once: true,
      rootMargin: '-300px 0px',
    }
  );

  const scrollToForm = () => {
    const form = document.querySelector('#submission-form-container');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: Sun,
      title: 'Maximaliseer zonne-energie',
      description:
        'Sla overtollige zonne-energie op en gebruik deze wanneer de zon niet schijnt.',
    },
    {
      icon: TrendingUp,
      title: 'Bespaar tot €2000 per jaar',
      description:
        'Verminder uw energierekening door slim gebruik van opgeslagen energie.',
    },
    {
      icon: Zap,
      title: 'Onafhankelijkheid',
      description:
        'Word minder afhankelijk van energieleveranciers en prijsstijgingen.',
    },
  ];

  return (
    <section
      className="py-10 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <animated.div style={springs} className="text-center mb-8 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Wat is een <span className="text-blue-600">thuisbatterij</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Een thuisbatterij is een slimme energieopslag die uw zonne-energie
            bewaart voor later gebruik. Perfect voor huishoudens met
            zonnepanelen die hun energieverbruik willen optimaliseren.
          </p>
        </animated.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-8 lg:mb-16">
          {/* Left: Image */}
          <animated.div style={springs} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/solar-panel-home.avif"
                alt="Zonnepanelen op een woning"
                width={800}
                height={400}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="lg:absolute lg:-bottom-6 lg:-right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100 mt-4 lg:mt-0">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <BatteryCharging className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Gemiddelde besparing</p>
                  <p className="text-xl font-bold text-green-600">€1200/jaar</p>
                </div>
              </div>
            </div>
          </animated.div>

          {/* Right: Content */}
          <animated.div style={springs} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Waarom een thuisbatterij met zonnepanelen?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Zonnepanelen produceren de meeste energie overdag, maar u
                verbruikt vaak meer energie &apos;s avonds. Een thuisbatterij
                slaat deze overtollige energie op, zodat u deze kunt gebruiken
                wanneer u het nodig heeft.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <animated.div
                  key={index}
                  style={springs}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </animated.div>
              ))}
            </div>

            {/* Key features */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Sun className="w-5 h-5 text-yellow-500 mr-2" />
                  Perfect voor zonnepanelen
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Verhoog uw zelfverbruik tot 80%
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Gebruik zonne-energie ook &apos;s nachts
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Maximale ROI op uw zonnepanelen
                  </li>
                </ul>
              </CardContent>
            </Card>
          </animated.div>
        </div>

        {/* CTA Section */}
        <animated.div style={springs} className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Klaar om te besparen op uw energierekening?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Ontdek binnen 1 minuut hoeveel een thuisbatterij u kan besparen.
              Vul het formulier in en ontvang een persoonlijke berekening.
            </p>
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
            >
              <ArrowUp className="w-5 h-5 lg:mr-2" />
              <span className="hidden lg:block">
                Gratis berekening aanvragen
              </span>
            </Button>
          </div>
        </animated.div>
      </div>
    </section>
  );
}
