'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  Euro,
  Leaf,
  Shield,
  Zap,
  Clock,
  House,
} from 'lucide-react';
import { animated } from '@react-spring/web';
import { useBenefitsAnimations } from '@/lib/animations';

const benefits = [
  {
    icon: Euro,
    title: 'Bespaar op energiekosten',
    description:
      'Gebruik uw opgeslagen zonne-energie tijdens dure piekuren en bespaar tot €2000 per jaar op uw energierekening.',
    badge: 'Financieel voordeel',
  },
  {
    icon: Leaf,
    title: 'Duurzame keuze',
    description:
      'Verminder uw CO2-uitstoot en draag bij aan een groenere toekomst door meer van uw eigen zonne-energie te gebruiken.',
    badge: 'Milieuvriendelijk',
  },
  {
    icon: Shield,
    title: 'Energieonafhankelijkheid',
    description:
      'Wees minder afhankelijk van het energienet en geniet van een stabiele energievoorziening, ook tijdens stroomuitval.',
    badge: 'Betrouwbaar',
  },
  {
    icon: Zap,
    title: 'Maximaliseer zonnepanelen',
    description:
      'Benut uw zonnepanelen optimaal door overtollige energie op te slaan in plaats van terug te leveren tegen lage tarieven.',
    badge: 'Efficiënt',
  },
  {
    icon: Clock,
    title: 'Flexibele energie',
    description:
      'Gebruik uw energie wanneer het u uitkomt, niet alleen wanneer de zon schijnt. Perfect voor avond- en nachtverbruik.',
    badge: 'Flexibel',
  },
  {
    icon: House,
    title: 'Verhoog woningwaarde',
    description:
      'Een thuisbatterij verhoogt de waarde van uw woning en maakt deze aantrekkelijker voor potentiële kopers.',
    badge: 'Investering',
  },
];

export function Benefits() {
  const { headerSpring, badgeSpring, titleSpring, descriptionSpring } =
    useBenefitsAnimations();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <animated.div className="text-center mb-16" style={headerSpring}>
          <animated.div style={badgeSpring}>
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Voordelen
            </Badge>
          </animated.div>
          <animated.h2
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            style={titleSpring}
          >
            Waarom kiezen voor een thuisbatterij?
          </animated.h2>
          <animated.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={descriptionSpring}
          >
            Ontdek hoe een thuisbatterij uw energierekening kan verlagen en uw
            duurzaamheidsdoelen kan helpen bereiken.
          </animated.p>
        </animated.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <animated.div key={index}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {benefit.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </animated.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Klaar om te besparen?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Laat onze experts u helpen de juiste thuisbatterij te kiezen
                voor uw specifieke situatie en energievraag.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    24u
                  </div>
                  <div className="text-gray-600">Reactietijd</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Tevreden klanten</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    10j
                  </div>
                  <div className="text-gray-600">Garantie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
