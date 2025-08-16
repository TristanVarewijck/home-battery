import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';
import Script from 'next/script';

const faqData = [
  {
    question: 'Wat is een thuisbatterij en hoe werkt het?',
    answer:
      'Een thuisbatterij slaat de elektriciteit op die je zelf opwekt, bijvoorbeeld met zonnepanelen. In plaats van dat deze stroom onmiddellijk naar het net gaat, kan je de batterij opladen en later gebruiken wanneer je energie nodig hebt. Zo verbruik je meer van je eigen groene stroom en minder van het net.',
  },
  {
    question: 'Hoeveel kan ik besparen met een thuisbatterij?',
    answer:
      'De besparing hangt af van je verbruik, de grootte van de batterij en hoeveel zonne-energie je opwekt. Gemiddeld kan een huishouden 70% van de opgewekte stroom zelf gebruiken. Dit betekent vaak een lagere energiefactuur en meer onafhankelijkheid van stijgende elektriciteitsprijzen.',
  },
  {
    question: 'Welke capaciteit thuisbatterij heb ik nodig?',
    answer:
      'De ideale capaciteit hangt af van je verbruikspatroon en de grootte van je zonnepaneleninstallatie. Voor een gemiddeld gezin ligt dit meestal tussen de 15 en 23 kWh. Een installateur kan via een verbruiksanalyse berekenen welke capaciteit het meest rendabel is.',
  },
  {
    question: 'Kan ik een thuisbatterij combineren met zonnepanelen?',
    answer:
      "Ja, dat is zelfs de meest rendabele toepassing. Overdag laad je de batterij met zonne-energie op, en 's avonds of 's nachts gebruik je die stroom opnieuw. Ook zonder zonnepanelen kan een thuisbatterij interessant zijn, bijvoorbeeld om te profiteren van goedkopere nachttarieven.",
  },
  {
    question: 'Wat zijn de kosten voor thuisbatterijen?',
    answer:
      'De prijs van een thuisbatterij varieert doorgaans tussen de €7.000 en €13.000, afhankelijk van de capaciteit en het merk.',
  },
  {
    question: 'Kan ik btw terugkrijgen bij de aankoop van een thuisbatterij?',
    answer:
      'Ja, bij de aankoop van onze slimme thuisbatterij kunt u in aanmerking komen voor teruggave van de btw, op voorwaarde dat u aan bepaalde criteria voldoet. Wilt u meer weten over deze voorwaarden? Neem gerust contact met ons op.',
  },
];

export function FAQ() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-brand-blue-600 mr-2 text-blue-600" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Veelgestelde vragen
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over thuisbatterijen en hoe
            ze jou kunnen helpen besparen op je energiekosten.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-xl text-gray-700">
              Alles wat je moet weten over thuisbatterijen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium text-gray-900 hover:text-brand-blue-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
