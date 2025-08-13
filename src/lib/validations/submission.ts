import { z } from 'zod';

export const submissionSchema = z.object({
  // Step 1: Address fields
  postcode: z
    .string()
    .regex(
      /^[1-9][0-9]{3}\s?[A-Z]{2}$/,
      'Voer een geldige Nederlandse postcode in'
    ),
  huisnummer: z.string().min(1, 'Huisnummer is verplicht'),
  straat: z.string().min(1, 'Straatnaam is verplicht'),
  plaatsnaam: z.string().min(1, 'Plaatsnaam is verplicht'),
  toevoeging: z.string().optional(),

  // Step 2: Solar panels
  hasSolarPanels: z.boolean(),

  // Step 3: Energy consumption
  yearlyConsumption: z.string().min(4, 'Jaarlijks verbruik is verplicht'),

  // Step 4: Daytime usage
  daytimeUsage: z.enum(['weinig', 'gemiddeld', 'veel']),

  // Step 5: Personal details
  firstName: z.string().min(2, 'Voornaam moet minimaal 2 karakters bevatten'),
  lastName: z.string().min(2, 'Achternaam moet minimaal 2 karakters bevatten'),
  email: z.string().email('Voer een geldig e-mailadres in'),
  phone: z.string().min(1, 'Telefoonnummer is verplicht'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Je moet akkoord gaan met het gebruik van je gegevens',
  }),
});

export type SubmissionFormData = z.infer<typeof submissionSchema>;
