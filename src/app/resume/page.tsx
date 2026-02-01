import type { Metadata } from 'next';
import NextLink from 'next/link';
import { Container, Section, SectionHeader, Card, Button } from '@/components/ui';
import { PageWrapper } from '@/components/layout';
import { RevealOnScroll } from '@/components/animations';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Professional resume for Cole Ortiz.',
};

export default function ResumePage() {
  return (
    <PageWrapper>
      <Section>
        <Container size="md">
          <RevealOnScroll>
            <SectionHeader
              title="Resume"
              subtitle="Professional experience and qualifications."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <Card className="text-center py-12">
              <div className="text-6xl mb-6">📄</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Resume Coming Soon
              </h3>
              <p className="text-muted text-lg mb-8 max-w-md mx-auto">
                My detailed resume and CV will be available here shortly. In the
                meantime, feel free to reach out directly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <NextLink href="/contact">
                  <Button>Contact Me</Button>
                </NextLink>
                <NextLink href="/about">
                  <Button variant="outline">Learn About Me</Button>
                </NextLink>
              </div>
            </Card>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <h4 className="font-semibold text-foreground mb-4">Experience</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">
                      Associate, Zitro Capital
                    </p>
                    <p className="text-muted text-sm">Venture Capital</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Associate, OrbioCloud
                    </p>
                    <p className="text-muted text-sm">Technology</p>
                  </div>
                </div>
              </Card>

              <Card>
                <h4 className="font-semibold text-foreground mb-4">Education</h4>
                <div>
                  <p className="font-medium text-foreground">
                    University of Georgia
                  </p>
                  <p className="text-muted text-sm">
                    Bachelor of Business Administration, Finance
                  </p>
                </div>
              </Card>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>
    </PageWrapper>
  );
}
