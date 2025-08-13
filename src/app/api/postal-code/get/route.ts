import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { postal_code, house_number } = body;

    // Validate required fields
    if (!postal_code || !house_number) {
      return NextResponse.json(
        { error: 'Postal code and house number are required' },
        { status: 400 }
      );
    }

    // Sanitize postal code (remove spaces)
    const sanitizedPostalCode = postal_code.replace(/\s+/g, '');

    console.log(sanitizedPostalCode, house_number);

    console.log(process.env.POSTCODE_API_KEY);

    // Check if API key is available
    if (!process.env.POSTCODE_API_KEY) {
      return NextResponse.json(
        { error: 'Postal code API key not configured' },
        { status: 500 }
      );
    }

    // Make request to external API
    const response = await fetch(
      `https://api.postcodeapi.nu/v3/lookup/${sanitizedPostalCode}/${house_number}`,
      {
        headers: {
          'x-api-key': process.env.POSTCODE_API_KEY,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch address data' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Postal code API error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
