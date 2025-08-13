import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ClipboardCheck,
  Wrench,
  CheckCircle,
  Clock,
  Users,
  Shield,
} from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: ClipboardCheck,
    title: 'Gratis adviesgesprek',
    description:
      'Onze expert komt bij u langs voor een gratis adviesgesprek en inspectie van uw woning en energievraag.',
    duration: '1-2 uur',
    badge: 'Gratis',
  },
  {
    step: '02',
    icon: Wrench,
    title: 'Professionele installatie',
    description:
      'Onze gecertificeerde installateurs installeren uw thuisbatterij veilig en efficiënt binnen één dag.',
    duration: '4-6 uur',
    badge: 'Gecertificeerd',
  },
  {
    step: '03',
    icon: CheckCircle,
    title: 'Testen en oplevering',
    description:
      'We testen het systeem uitgebreid en geven u een complete uitleg over het gebruik van uw thuisbatterij.',
    duration: '1-2 uur',
    badge: 'Getest',
  },
];

const features = [
  {
    icon: Users,
    title: 'Ervaren team',
    description:
      'Onze installateurs hebben jarenlange ervaring met thuisbatterijen en zonnepanelen.',
  },
  {
    icon: Shield,
    title: 'Veiligheid voorop',
    description:
      'Alle installaties voldoen aan de hoogste veiligheidsnormen en worden uitgevoerd volgens de geldende wetgeving.',
  },
  {
    icon: Clock,
    title: 'Snelle installatie',
    description:
      'De meeste installaties zijn binnen één dag voltooid, met minimale overlast voor u.',
  },
];

export function Installation() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Wrench className="w-4 h-4 mr-2" />
            Installatie
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professionele installatie in 3 stappen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van advies tot oplevering: wij zorgen voor een soepele en
            professionele installatie van uw thuisbatterij.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="relative border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <Badge variant="outline">{step.badge}</Badge>
                  </div>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {step.description}
                  </CardDescription>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{step.duration}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Wilt u meer weten over de installatie?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Onze experts staan klaar om al uw vragen te beantwoorden en u te
              helpen met de beste oplossing voor uw situatie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Plan gratis adviesgesprek
              </button>
              <button className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-medium transition-colors">
                Bekijk certificeringen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
