'use client';

import { Badge } from '@/components/ui/badge';
import { SubmissionForm } from '@/components/SubmissionForm';
import { Zap, CircleCheckBig, Battery } from 'lucide-react';
import { animated } from '@react-spring/web';
import { useCTABannerAnimations } from '@/lib/animations';
import { formatLocaleCurrency } from '@/lib/formatCurrency';

export function CTABanner() {
  const { leftContentSpring, badgeSpring } = useCTABannerAnimations();

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <animated.div className="space-y-8" style={leftContentSpring}>
            <div className="space-y-4">
              <animated.div style={badgeSpring}>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Gratis adviesgesprek
                </Badge>
              </animated.div>

              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Klaar om te besparen op uw energierekening?
              </h2>

              <p className="text-xl text-blue-100 leading-relaxed">
                Vul het formulier in en ontvang binnen 1 uur een persoonlijke
                adviesgesprek voor uw thuisbatterij. Geen verplichtingen, alleen
                voordelen.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CircleCheckBig className="w-5 h-5 text-accent/80" />
                <span>Gratis adviesgesprek</span>
              </div>
              <div className="flex items-center space-x-3">
                <CircleCheckBig className="w-5 h-5 text-accent/80" />
                <span>Persoonlijk adviesgesprek</span>
              </div>
              <div className="flex items-center space-x-3">
                <CircleCheckBig className="w-5 h-5 text-accent/80" />
                <span>Geen verplichtingen</span>
              </div>
              <div className="flex items-center space-x-3">
                <CircleCheckBig className="w-5 h-5 text-accent/80" />
                <span>24 uur reactietijd</span>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Battery className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Gemiddelde besparing</div>
                  <div className="text-2xl font-bold text-accent/80">
                    {formatLocaleCurrency({
                      amount: 2000,
                      currency: 'EUR',
                      locale: 'nl',
                    })}
                    per jaar
                  </div>
                </div>
              </div>
            </div>
          </animated.div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <SubmissionForm />
          </div>
        </div>
      </div>
    </section>
  );
}
