'use server';

import { contactSchema, type ContactFormData } from '@/lib/schemas/contact';

interface TurnstileResponse {
  success: boolean;
  'error-codes': string[];
}

async function verifyTurnstile(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.warn('Turnstile secret key not configured');
    return true; // Allow in development
  }

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      }
    );

    const data: TurnstileResponse = await response.json();
    return data.success;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

async function checkRateLimit(identifier: string): Promise<boolean> {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!redisUrl || !redisToken) {
    console.warn('Upstash Redis not configured, skipping rate limit');
    return true; // Allow in development
  }

  try {
    const { Ratelimit } = await import('@upstash/ratelimit');
    const { Redis } = await import('@upstash/redis');

    const redis = new Redis({
      url: redisUrl,
      token: redisToken,
    });

    const ratelimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '1 h'), // 3 requests per hour
      analytics: true,
    });

    const { success } = await ratelimit.limit(identifier);
    return success;
  } catch (error) {
    console.error('Rate limit check error:', error);
    return true; // Allow on error
  }
}

export interface ContactActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactActionResult> {
  // Validate form data
  const result = contactSchema.safeParse(formData);

  if (!result.success) {
    return {
      success: false,
      message: 'Please fix the errors below',
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const { name, email, subject, message, turnstileToken } = result.data;

  // Verify Turnstile token
  const turnstileValid = await verifyTurnstile(turnstileToken);
  if (!turnstileValid) {
    return {
      success: false,
      message: 'Security verification failed. Please try again.',
    };
  }

  // Check rate limit
  const rateLimitOk = await checkRateLimit(email);
  if (!rateLimitOk) {
    return {
      success: false,
      message: 'Too many requests. Please try again later.',
    };
  }

  // TODO: Send email or save to database
  // For now, just log the submission
  console.log('Contact form submission:', { name, email, subject, message });

  return {
    success: true,
    message: 'Thank you for your message! I\'ll get back to you soon.',
  };
}
