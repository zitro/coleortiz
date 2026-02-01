'use client';

import NextLink from 'next/link';
import { Container, Section, Button } from '@/components/ui';
import { RevealOnScroll, MagneticButton } from '@/components/animations';

export function AboutPreview() {
  return (
    <Section>
      <Container size="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll direction="left">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/cole-ortiz.jpg"
                alt="Cole Ortiz"
                className="w-full h-full object-cover"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.2}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Multidisciplinary Creative
              </h2>
              <p className="text-muted text-lg mb-4">
                I graduated from the University of Georgia with a degree in
                Financial Planning, but my passions extend far beyond spreadsheets and
                financial models.
              </p>
              <p className="text-muted text-lg mb-8">
                Today, I work at the intersection of venture capital and
                technology while pursuing creative projects in music, film, and
                acting. I believe the best ideas emerge when different worlds
                collide.
              </p>
              <MagneticButton>
                <NextLink href="/about">
                  <Button>Read My Story</Button>
                </NextLink>
              </MagneticButton>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </Section>
  );
}
