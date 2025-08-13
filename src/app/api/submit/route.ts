import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { submissions } from '@/lib/db/schema';
import { submissionSchema } from '@/lib/validations/submission';
import { createHash } from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = submissionSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          ok: false,
          errors: validationResult.error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Get user agent and IP for tracking
    const userAgent = request.headers.get('user-agent') || '';
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ip = forwardedFor?.split(',')[0] || realIp || 'unknown';

    // Hash the IP for privacy
    const ipHash = createHash('sha256').update(ip).digest('hex');

    // Insert into database
    const result = await db.insert(submissions).values({
      postcode: data.postcode,
      huisnummer: data.huisnummer,
      straat: data.straat,
      plaatsnaam: data.plaatsnaam,
      toevoeging: data.toevoeging,
      hasSolarPanels: data.hasSolarPanels,
      yearlyConsumption: data.yearlyConsumption,
      daytimeUsage: data.daytimeUsage,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      userAgent,
      ipHash,
    });

    return NextResponse.json({ ok: true, id: 'success' }, { status: 201 });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json(
      {
        ok: false,
        errors: [
          {
            field: 'general',
            message: 'Er is een fout opgetreden. Probeer het later opnieuw.',
          },
        ],
      },
      { status: 500 }
    );
  }
}
