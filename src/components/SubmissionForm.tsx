'use client';

import { useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Home,
  Sun,
  Zap,
  User,
  Calculator,
  Loader2,
  X,
  HelpCircle,
} from 'lucide-react';
import axios from 'axios';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface FormData {
  // Step 1: Address
  postcode: string;
  huisnummer: string;
  straat: string;
  plaatsnaam: string;
  toevoeging: string;

  // Step 2: Solar panels
  hasSolarPanels: boolean | null;

  // Step 3: Energy consumption
  yearlyConsumption: string;

  // Step 4: Daytime usage
  daytimeUsage: string;

  // Step 5: Personal details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
}

const daytimeOptions = [
  { value: 'weinig', label: 'Weinig thuis overdag' },
  { value: 'gemiddeld', label: 'Gemiddeld thuis overdag' },
  { value: 'veel', label: 'Veel thuis overdag' },
];

export function SubmissionForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [addressError, setAddressError] = useState('');
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    postcode: '',
    huisnummer: '',
    straat: '',
    plaatsnaam: '',
    toevoeging: '',
    hasSolarPanels: null,
    yearlyConsumption: '',
    daytimeUsage: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consent: false,
  });

  const fetchPostcodeData = useCallback(async () => {
    if (formData.postcode && formData.huisnummer) {
      const sanitizedPostalCode = formData.postcode.replace(/\s+/g, '');

      setIsLoadingAddress(true);
      setAddressError('');

      try {
        const response = await axios.post('/api/postal-code/get', {
          postal_code: sanitizedPostalCode,
          house_number: formData.huisnummer,
        });

        const result = await response.data;

        setFormData((prev) => ({
          ...prev,
          postcode: result.postcode,
          huisnummer: result.number,
          straat: result.street || '',
          plaatsnaam: result.city || '',
          toevoeging: '',
        }));

        setAddressError('');
      } catch (error) {
        console.error(error);
        setAddressError(
          'Kon adresgegevens niet ophalen. Controleer je postcode en huisnummer.'
        );
      } finally {
        setIsLoadingAddress(false);
      }
    }
  }, [formData]);

  const updateFormData = (
    field: keyof FormData,
    value: string | boolean | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare submission data
      const submissionData = {
        postcode: formData.postcode,
        huisnummer: String(formData.huisnummer),
        straat: formData.straat,
        plaatsnaam: formData.plaatsnaam,
        toevoeging: formData.toevoeging,
        hasSolarPanels: formData.hasSolarPanels,
        yearlyConsumption: formData.yearlyConsumption,
        daytimeUsage: formData.daytimeUsage,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        consent: formData.consent,
      };

      // Submit to API with minimum 1 second delay
      const startTime = Date.now();
      const response = await axios.post('/api/submit', submissionData);

      // Ensure minimum 1 second loading time
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 1000 - elapsedTime);

      if (remainingTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingTime));
      }

      if (response.status === 201) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
      // Handle error - you might want to show an error message to the user
    } finally {
      setIsSubmitting(false);
    }
  };

  // Remove the useEffect that triggers on every keystroke

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.postcode &&
          formData.huisnummer &&
          formData.straat &&
          formData.plaatsnaam
        );
      case 2:
        return formData.hasSolarPanels !== null;
      case 3:
        return formData.yearlyConsumption.length >= 4;
      case 4:
        return formData.daytimeUsage;
      case 5:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone &&
          formData.consent
        );
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">
              Bedankt voor je aanvraag!
            </h3>
            <p className="text-gray-600">
              We nemen binnen 24 uur telefonisch of per e-mail contact met je op
              om je persoonlijke berekening te bespreken.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full bg-gray-50 h-[600px] flex flex-col">
      <CardHeader className="text-sm border-b border-gray-200 mb-4">
        <CardTitle className="flex items-center justify-between text-2xl">
          <div className="flex items-center gap-2">
            {currentStep === 1 && <Home className="w-5 h-5 text-green-600" />}
            {currentStep === 2 && <Sun className="w-5 h-5 text-green-600" />}
            {currentStep === 3 && <Zap className="w-5 h-5 text-green-600" />}
            {currentStep === 4 && (
              <Calculator className="w-5 h-5 text-green-600" />
            )}
            {currentStep === 5 && <User className="w-5 h-5 text-green-600" />}
            <span className="text-xl">
              {currentStep === 1 && 'Check je gegevens'}
              {currentStep === 2 && 'Zonnepanelen'}
              {currentStep === 3 && 'Energieverbruik'}
              {currentStep === 4 && 'Dagelijks gebruik'}
              {currentStep === 5 && 'Persoonlijke gegevens'}
            </span>
          </div>
          <div className="text-sm text-gray-500">Stap {currentStep} van 5</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 flex-1 flex flex-col"
        >
          {/* Step 1: Address */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <p className="text-base  mb-4 ">
                Vul je adres in en ontdek binnen 1 minuut van een slimme
                thuisbatterij jou geld oplevert.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="postcode">Postcode</Label>
                  <Input
                    id="postcode"
                    value={formData.postcode}
                    onChange={(e) => updateFormData('postcode', e.target.value)}
                    onBlur={() => {
                      if (formData.postcode && formData.huisnummer) {
                        fetchPostcodeData();
                      }
                    }}
                    placeholder="1234 AB"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="huisnummer">Huisnummer</Label>
                  <Input
                    id="huisnummer"
                    value={formData.huisnummer}
                    onChange={(e) =>
                      updateFormData('huisnummer', e.target.value)
                    }
                    onBlur={() => {
                      if (formData.postcode && formData.huisnummer) {
                        fetchPostcodeData();
                      }
                    }}
                    placeholder="42"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="toevoeging">Toevoeging</Label>
                  <Input
                    id="toevoeging"
                    value={formData.toevoeging}
                    onChange={(e) =>
                      updateFormData('toevoeging', e.target.value)
                    }
                    placeholder="A"
                    className="mt-1"
                  />
                </div>
              </div>
              {addressError && (
                <div className="text-red-500 text-sm mt-2">{addressError}</div>
              )}
              <div>
                <Label htmlFor="straat" className="flex items-center gap-2">
                  Straatnaam
                  {isLoadingAddress && (
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                  )}
                </Label>
                <Input
                  id="straat"
                  value={formData.straat}
                  onChange={(e) => updateFormData('straat', e.target.value)}
                  placeholder="Hoofdstraat"
                  className="mt-1"
                  disabled={isLoadingAddress}
                />
              </div>
              <div>
                <Label htmlFor="plaatsnaam" className="flex items-center gap-2">
                  Plaatsnaam
                  {isLoadingAddress && (
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                  )}
                </Label>
                <Input
                  id="plaatsnaam"
                  value={formData.plaatsnaam}
                  onChange={(e) => updateFormData('plaatsnaam', e.target.value)}
                  placeholder="Amsterdam"
                  className="mt-1"
                  disabled={isLoadingAddress}
                />
              </div>
            </div>
          )}

          {/* Step 2: Solar panels */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <p className=" mb-4">Heb je zonnepanelen?</p>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant={
                    formData.hasSolarPanels === true ? 'default' : 'outline'
                  }
                  onClick={() => updateFormData('hasSolarPanels', true)}
                  className="h-12 flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Ja
                </Button>
                <Button
                  type="button"
                  variant={
                    formData.hasSolarPanels === false ? 'default' : 'outline'
                  }
                  onClick={() => updateFormData('hasSolarPanels', false)}
                  className="h-12 flex items-center gap-2"
                >
                  <X className="w-5 h-5 text-red-500" />
                  Nee
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Energy consumption */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <p className="mb-0">
                  Hoeveel energie verbruik je jaarlijks? (in kWh)
                </p>
                <Tooltip open={isTooltipOpen} onOpenChange={setIsTooltipOpen}>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      onClick={() => setIsTooltipOpen(!isTooltipOpen)}
                      className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                    >
                      <HelpCircle className="w-4 h-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-sm p-3 bg-white border border-gray-200">
                    <p className="text-sm leading-relaxed text-gray-900">
                      Je jaarlijkse stroomverbruik (in kWh) kun je vinden op je
                      jaarlijkse energierekening die je van je
                      energieleverancier ontvangt. Deze rekening geeft een
                      overzicht van je verbruik gedurende het jaar. Daarnaast
                      kun je je verbruik ook inzien via een online klantportaal
                      of app van je energieleverancier, of door je slimme
                      meterstanden af te lezen, als je die hebt.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div>
                <Label htmlFor="yearlyConsumption">
                  Jaarlijks verbruik (kWh)
                </Label>
                <Input
                  id="yearlyConsumption"
                  type="number"
                  value={formData.yearlyConsumption}
                  onChange={(e) =>
                    updateFormData('yearlyConsumption', e.target.value)
                  }
                  placeholder="0000"
                  className="mt-1 md:max-w-[200px] text-2xl"
                />
              </div>
            </div>
          )}

          {/* Step 4: Daytime usage */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <p className=" mb-4">Hoeveel stroom verbruik jij overdag?</p>
              <div className="space-y-3">
                {daytimeOptions.map((option) => (
                  <Button
                    key={option.value}
                    type="button"
                    variant={
                      formData.daytimeUsage === option.value
                        ? 'default'
                        : 'outline'
                    }
                    onClick={() => updateFormData('daytimeUsage', option.value)}
                    className="w-full justify-start h-12"
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Personal details */}
          {currentStep === 5 && (
            <div className="space-y-4">
              <p className=" mb-4">
                Bijna gelukt! Vul je gegevens in om je persoonlijke berekening
                te ontvangen.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Voornaam</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      updateFormData('firstName', e.target.value)
                    }
                    placeholder="Jan"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Achternaam</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    placeholder="Jansen"
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">E-mailadres</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="jan.jansen@email.nl"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefoonnummer</Label>
                <PhoneInput
                  international
                  defaultCountry="NL"
                  value={formData.phone}
                  onChange={(value) => updateFormData('phone', value || '')}
                  placeholder="06 12345678"
                  className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="flex items-start space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => updateFormData('consent', e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <Label
                  htmlFor="consent"
                  className="text-sm text-gray-700 leading-relaxed"
                >
                  Ik ga akkoord dat mijn gegevens worden gebruikt voor het
                  opnemen van contact en voor marketingdoeleinden
                </Label>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between pt-4 mt-auto">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Vorige
              </Button>
            )}

            {currentStep < 5 ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={!canProceed()}
                className="flex items-center gap-2 ml-auto"
              >
                Volgende
                <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!canProceed() || isSubmitting}
                className="flex items-center gap-2 ml-auto"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Versturen...
                  </>
                ) : (
                  <>
                    Bereken besparing
                    <Calculator className="w-4 h-4" />
                  </>
                )}
              </Button>
            )}
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center space-x-2 pt-4">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`w-2 h-2 rounded-full ${
                  step <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
