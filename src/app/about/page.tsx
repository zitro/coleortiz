import type { Metadata } from 'next';
import { Container, Section, SectionHeader, Badge } from '@/components/ui';
import { PageWrapper } from '@/components/layout';
import { RevealOnScroll } from '@/components/animations';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Cole Ortiz - UGA Finance graduate, venture capital associate, and creative professional.',
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <Section>
        <Container size="md">
          <RevealOnScroll>
            <SectionHeader
              title="About Me"
              subtitle="Finance professional by training, creative by nature."
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <RevealOnScroll delay={0.1}>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted text-lg leading-relaxed">
                    I&apos;m Cole Ortiz, a University of Georgia graduate with a
                    degree in Financial Planning from the College of Family and Consumer Sciences.
                    While my academic background is rooted in helping individuals and families
                    achieve their financial goals, my passions span far beyond the world of spreadsheets.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Professional Journey
                </h3>
                <p className="text-muted text-lg leading-relaxed">
                  Currently, I serve as an Associate at Zitro Capital, a venture
                  capital firm where I help identify and support promising early-stage
                  companies. I also work with OrbioCloud, a portfolio company building
                  innovative cloud solutions. This dual role allows me to operate at
                  both the investment and operational levels of the startup ecosystem.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Creative Pursuits
                </h3>
                <p className="text-muted text-lg leading-relaxed">
                  Beyond finance, I&apos;m deeply passionate about the creative arts.
                  As a music producer, I craft sounds that blend genres and push
                  boundaries. In film, I&apos;ve had the honor of creating award-winning
                  short films that explore meaningful narratives. And as an actor,
                  I continue to bring characters to life across various productions.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.4}>
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Philosophy
                </h3>
                <p className="text-muted text-lg leading-relaxed">
                  I believe the best ideas emerge at the intersection of disciplines.
                  My analytical training in finance complements my creative work,
                  while artistic thinking enhances my approach to business. This
                  multidisciplinary perspective shapes everything I do.
                </p>
              </RevealOnScroll>
            </div>

            <div className="space-y-6">
              <RevealOnScroll delay={0.2} direction="right">
                <div className="aspect-square bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">👤</span>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3} direction="right">
                <div className="p-6 bg-surface rounded-2xl">
                  <h4 className="font-semibold text-foreground mb-4">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Finance</Badge>
                    <Badge variant="secondary">Venture Capital</Badge>
                    <Badge variant="accent">Music Production</Badge>
                    <Badge>Filmmaking</Badge>
                    <Badge variant="secondary">Acting</Badge>
                    <Badge variant="outline">Strategy</Badge>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.4} direction="right">
                <div className="p-6 bg-surface rounded-2xl">
                  <h4 className="font-semibold text-foreground mb-4">Education</h4>
                  <p className="text-muted">
                    <span className="text-foreground font-medium">
                      University of Georgia
                    </span>
                    <br />
                    BS in Family and Consumer Sciences
                    <br />
                    Financial Planning
                    <br />
                    <span className="text-sm">Class of 2024</span>
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
