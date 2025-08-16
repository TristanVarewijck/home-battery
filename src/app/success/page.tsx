import { CheckCircle, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-blue-900/95 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          {/* Hoofdkaart */}
          <Card className="bg-white max-w-2xl">
            <CardContent className="pt-6 h-full flex flex-col">
              <div className="text-center space-y-6 flex-1">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />

                <div className="space-y-4">
                  <h1 className="text-2xl font-bold text-gray-900">
                    Bedankt voor je aanvraag!
                  </h1>

                  <p className="text-gray-600 leading-relaxed">
                    We hebben je aanvraag succesvol ontvangen en gaan er direct
                    mee aan de slag.
                  </p>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
                    <h2 className="font-semibold text-blue-900 text-lg">
                      Wat gebeurt er nu?
                    </h2>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      Ons team neemt <strong>zo snel mogelijk</strong> contact
                      met je op via telefoon of e-mail om je persoonlijke
                      berekening te bespreken.
                    </p>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-blue-700">
                      <a
                        href="tel:+31624570564"
                        className="flex items-center gap-2 hover:text-blue-900 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">Telefoon</span>
                      </a>
                      <a
                        href="mailto:thuisbatterijen@gmail.com"
                        className="flex items-center gap-2 hover:text-blue-900 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">E-mail</span>
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm">
                    Je kunt deze pagina nu sluiten. We nemen binnen 1 uur
                    contact met je op.
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/"
                    className="text-blue-600 hover:text-blue-800 text-sm underline"
                  >
                    Terug naar homepage
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
