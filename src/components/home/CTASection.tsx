'use client';

import NextLink from 'next/link';
import { Container, Section, Button } from '@/components/ui';
import { RevealOnScroll, MagneticButton } from '@/components/animations';

export function CTASection() {
  return (
    <Section className="bg-primary text-white">
      <Container>
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Whether you&apos;re interested in collaboration, investment
              opportunities, or just want to say hello, I&apos;d love to hear
              from you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <NextLink href="/contact">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Get in Touch
                  </Button>
                </NextLink>
              </MagneticButton>
              <MagneticButton>
                <NextLink href="/journal">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                  >
                    Read My Journal
                  </Button>
                </NextLink>
              </MagneticButton>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
