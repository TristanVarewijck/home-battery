'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, TrendingUp, ArrowRight, BatteryCharging } from 'lucide-react';
import { animated } from '@react-spring/web';
import { useHeroAnimations } from '@/lib/animations';
import { SubmissionForm } from '@/components/SubmissionForm';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { formatLocaleCurrency } from '@/lib/formatCurrency';

export function Hero() {
  const [isFormWiggling, setIsFormWiggling] = useState(false);

  const {
    leftContentSpring,
    badgeSpring,
    titleSpring,
    descriptionSpring,
    buttonsSpring,
    featuresSpring,
    rightContentSpring,
  } = useHeroAnimations();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Only auto-focus on screens larger than md (768px)
      if (window.innerWidth >= 768) {
        const postcodeInput = document.getElementById('postcode');
        if (postcodeInput) {
          postcodeInput.focus();
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleQuoteButtonClick = () => {
    setIsFormWiggling(true);
    setTimeout(() => setIsFormWiggling(false), 600);

    // On mobile, scroll to the form
    if (window.innerWidth < 768) {
      setTimeout(() => {
        const formContainer = document.getElementById(
          'submission-form-container'
        );
        if (formContainer) {
          formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    } else {
      // On desktop, auto-focus the postcode input
      setTimeout(() => {
        const postcodeInput = document.getElementById(
          'postcode'
        ) as HTMLInputElement;
        if (postcodeInput) {
          if (!postcodeInput.value) {
            postcodeInput.focus();
          }
        }
      }, 300);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden pb-16 lg:pt-38 pt-10">
      <div className="absolute inset-0">
        <Image
          src="/solar-panel-field.avif"
          alt="Zonnepanelen veld achtergrond"
          fill
          priority
          fetchPriority="high"
          className="object-cover opacity-75"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <animated.div
            className="space-y-4 lg:space-y-8 text-white"
            style={leftContentSpring}
          >
            <div className="space-y-4">
              <animated.div style={badgeSpring}>
                <Badge
                  variant="secondary"
                  className="w-fit bg-white/20 text-white border-white/30"
                >
                  <BatteryCharging className="w-4 h-4 mr-2" />
                  Duurzame energieopslag
                </Badge>
              </animated.div>

              <animated.h1
                className="text-4xl lg:text-6xl font-bold leading-tight"
                style={titleSpring}
              >
                Bespaar op uw{' '}
                <span className="text-yellow-400">energierekening</span> met een
                thuisbatterij
              </animated.h1>

              <animated.p
                className="text-xl text-blue-100 leading-relaxed"
                style={descriptionSpring}
              >
                Sla uw energie op en gebruik deze wanneer het u uitkomt.{' '}
                <span className="bg-yellow-400 text-blue-900 px-2 py-1 rounded font-semibold inline-block">
                  Bespaar gemiddeld{' '}
                  {formatLocaleCurrency({
                    amount: 2000,
                    currency: 'EUR',
                    locale: 'nl',
                  })}
                </span>{' '}
                per jaar en draag bij aan een duurzame toekomst.
              </animated.p>
            </div>

            <animated.div
              className="flex flex-col sm:flex-row gap-4"
              style={buttonsSpring}
            >
              <div>
                <Button
                  size="lg"
                  onClick={handleQuoteButtonClick}
                  className="lg:w-auto w-full"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Gratis adviesgesprek
                </Button>
              </div>
              <div>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleQuoteButtonClick}
                  className="lg:w-auto w-full"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Bekijk besparingen
                </Button>
              </div>
            </animated.div>

            <animated.div
              className="flex items-center space-x-8 text-sm text-blue-100 justify-center lg:justify-start"
              style={featuresSpring}
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span>Gratis app voor inzicht</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span>10 jaar garantie</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                <span>Installatie binnen 6 weken</span>
              </div>
            </animated.div>
          </animated.div>

          <animated.div
            className="relative"
            style={rightContentSpring}
            id={'submission-form-container'}
          >
            <div className="hidden lg:block absolute -left-20 top-1/2 transform -translate-y-1/2 z-20">
              <ArrowRight className="w-10 h-10 text-yellow-400" />
            </div>

            <div
              className={`bg-white rounded-2xl px-3 py-6 lg:px-6 lg:py-8 shadow-2xl transition-transform duration-300 ${
                isFormWiggling ? 'animate-wiggle' : ''
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Gratis adviesgesprek
                </h3>
                <p className="text-gray-600">
                  Vul het formulier in voor een een vrijblijvend adviesgesprek
                </p>
              </div>
              <SubmissionForm />
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
}
