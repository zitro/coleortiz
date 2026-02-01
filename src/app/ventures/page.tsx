import type { Metadata } from 'next';
import { Container, Section, SectionHeader, Card, CardTitle, CardDescription, CardContent, Button } from '@/components/ui';
import { PageWrapper } from '@/components/layout';
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/animations';
import { ventures } from '@/data/ventures';

export const metadata: Metadata = {
  title: 'Ventures',
  description:
    'Cole Ortiz works as an Associate at Zitro Capital and OrbioCloud, operating at the intersection of venture capital and technology.',
};

export default function VenturesPage() {
  return (
    <PageWrapper>
      <Section>
        <Container>
          <RevealOnScroll>
            <SectionHeader
              title="Ventures"
              subtitle="Operating at the intersection of venture capital and technology."
            />
          </RevealOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.2}>
            {ventures.map((venture) => (
              <StaggerItem key={venture.name}>
                <Card className="h-full">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-secondary">
                      {venture.name.charAt(0)}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{venture.name}</CardTitle>
                  <CardDescription className="text-secondary font-medium">
                    {venture.role}
                  </CardDescription>
                  <CardContent className="mt-4">
                    <p className="text-muted">{venture.description}</p>
                  </CardContent>
                  <div className="mt-6">
                    <a
                      href={venture.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        Visit Website
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Button>
                    </a>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <RevealOnScroll delay={0.4}>
            <div className="mt-16 p-8 bg-surface rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Investment Focus
              </h3>
              <p className="text-muted text-lg mb-6">
                At Zitro Capital, we focus on early-stage technology companies
                with strong founding teams and innovative solutions to real
                problems. Our portfolio spans fintech, enterprise software, and
                emerging technologies.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Fintech', 'Enterprise SaaS', 'AI/ML', 'Cloud Infrastructure'].map(
                  (focus) => (
                    <div
                      key={focus}
                      className="p-4 bg-background rounded-xl text-center"
                    >
                      <span className="text-foreground font-medium">{focus}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>
    </PageWrapper>
  );
}
