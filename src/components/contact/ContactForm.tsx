'use client';

import { useState, useRef } from 'react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { Button, Input, Textarea } from '@/components/ui';
import { submitContactForm, type ContactActionResult } from '@/lib/actions/contact';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ContactActionResult | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const turnstileRef = useRef<TurnstileInstance>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      turnstileToken,
    };

    const response = await submitContactForm(data);
    setResult(response);

    if (response.errors) {
      const newErrors: Record<string, string> = {};
      Object.entries(response.errors).forEach(([key, messages]) => {
        newErrors[key] = messages[0];
      });
      setErrors(newErrors);
    }

    if (response.success) {
      formRef.current?.reset();
      setTurnstileToken('');
      turnstileRef.current?.reset();
    }

    setIsSubmitting(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <Input
        id="name"
        name="name"
        label="Name"
        placeholder="Your name"
        error={errors.name}
        required
      />

      <Input
        id="email"
        name="email"
        type="email"
        label="Email"
        placeholder="your@email.com"
        error={errors.email}
        required
      />

      <Input
        id="subject"
        name="subject"
        label="Subject"
        placeholder="What's this about?"
        error={errors.subject}
        required
      />

      <Textarea
        id="message"
        name="message"
        label="Message"
        placeholder="Your message..."
        rows={6}
        error={errors.message}
        required
      />

      {siteKey && (
        <Turnstile
          ref={turnstileRef}
          siteKey={siteKey}
          onSuccess={setTurnstileToken}
          onError={() => setTurnstileToken('')}
          onExpire={() => setTurnstileToken('')}
        />
      )}

      {!siteKey && (
        <p className="text-sm text-muted">
          Note: CAPTCHA is disabled in development mode.
        </p>
      )}

      {errors.turnstileToken && (
        <p className="text-sm text-red-500">{errors.turnstileToken}</p>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}
        disabled={isSubmitting || (!turnstileToken && !!siteKey)}
      >
        Send Message
      </Button>

      {result && (
        <div
          className={`p-4 rounded-lg ${
            result.success
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {result.message}
        </div>
      )}
    </form>
  );
}
