import { POST } from '../route';
import { NextRequest } from 'next/server';

// Mock the database
jest.mock('@/lib/db', () => ({
  db: {
    insert: jest.fn().mockReturnThis(),
    values: jest.fn().mockReturnThis(),
    returning: jest.fn().mockResolvedValue([{ id: 1 }]),
  },
}));

// Mock crypto
jest.mock('crypto', () => ({
  createHash: jest.fn().mockReturnValue({
    update: jest.fn().mockReturnValue({
      digest: jest.fn().mockReturnValue('hashed-ip'),
    }),
  }),
}));

interface MockRequest {
  json: jest.Mock;
  headers: {
    get: jest.Mock;
  };
}

interface ValidationError {
  field: string;
  message: string;
}

describe('/api/submit', () => {
  const mockValidData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '0612345678',
    postcode: '1234 AB',
    annualUsageKWh: 3000,
    hasSolar: 'yes' as const,
    consent: true,
  };

  const createMockRequest = (body: unknown): MockRequest => ({
    json: jest.fn().mockResolvedValue(body),
    headers: {
      get: jest.fn().mockReturnValue('test-user-agent'),
    },
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should successfully submit valid data', async () => {
    const mockRequest = createMockRequest(
      mockValidData
    ) as unknown as NextRequest;
    const response = await POST(mockRequest);
    const result = await response.json();

    expect(result.ok).toBe(true);
    expect(result.id).toBe(1);
  });

  it('should return validation errors for invalid data', async () => {
    const invalidData = {
      name: '',
      email: 'invalid-email',
      phone: '123',
      postcode: 'invalid',
      annualUsageKWh: 50,
      hasSolar: 'maybe' as 'yes' | 'no' | 'interested',
      consent: false,
    };

    const mockRequest = createMockRequest(
      invalidData
    ) as unknown as NextRequest;
    const response = await POST(mockRequest);
    const result = await response.json();

    expect(result.ok).toBe(false);
    expect(result.errors).toBeDefined();
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it('should handle missing required fields', async () => {
    const incompleteData = {
      name: 'John Doe',
      // Missing other required fields
    };

    const mockRequest = createMockRequest(
      incompleteData
    ) as unknown as NextRequest;
    const response = await POST(mockRequest);
    const result = await response.json();

    expect(result.ok).toBe(false);
    expect(result.errors).toBeDefined();
  });

  it('should handle database errors gracefully', async () => {
    const { db } = await import('@/lib/db');
    (db.insert as jest.Mock).mockImplementation(() => {
      throw new Error('Database error');
    });

    const mockRequest = createMockRequest(
      mockValidData
    ) as unknown as NextRequest;
    const response = await POST(mockRequest);
    const result = await response.json();

    expect(result.ok).toBe(false);
    expect(result.errors[0].message).toContain('fout opgetreden');
  });

  it('should validate postcode format', async () => {
    const invalidPostcodeData = {
      ...mockValidData,
      postcode: '12345', // Invalid format
    };

    const mockRequest = createMockRequest(
      invalidPostcodeData
    ) as unknown as NextRequest;
    const response = await POST(mockRequest);
    const result = await response.json();

    expect(result.ok).toBe(false);
    expect(
      result.errors.some((err: ValidationError) => err.field === 'postcode')
    ).toBe(true);
  });

  it('should validate annual usage range', async () => {
    const invalidUsageData = {
      ...mockValidData,
      annualUsageKWh: 50, // Too low
    };

    const mockRequest = createMockRequest(
      invalidUsageData
    ) as unknown as NextRequest;
    const response = await POST(mockRequest);
    const result = await response.json();

    expect(result.ok).toBe(false);
    expect(
      result.errors.some(
        (err: ValidationError) => err.field === 'annualUsageKWh'
      )
    ).toBe(true);
  });

  it('should require consent', async () => {
    const noConsentData = {
      ...mockValidData,
      consent: false,
    };

    const mockRequest = createMockRequest(
      noConsentData
    ) as unknown as NextRequest;
    const response = await POST(mockRequest);
    const result = await response.json();

    expect(result.ok).toBe(false);
    expect(
      result.errors.some((err: ValidationError) => err.field === 'consent')
    ).toBe(true);
  });
});
