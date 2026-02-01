import type { Metadata } from 'next';
import { Container, Section, SectionHeader, Card, CardTitle, Badge } from '@/components/ui';
import { PageWrapper } from '@/components/layout';
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/animations';

export const metadata: Metadata = {
  title: 'Acting',
  description:
    'Cole Ortiz is an actor bringing characters to life across film, television, and stage productions.',
};

const actingCredits = [
  {
    title: 'Production Title 1',
    role: 'Lead Role',
    type: 'Film',
    year: 2024,
    director: 'Director Name',
  },
  {
    title: 'Production Title 2',
    role: 'Supporting Role',
    type: 'Film',
    year: 2023,
    director: 'Director Name',
  },
  {
    title: 'Stage Production',
    role: 'Character Name',
    type: 'Theater',
    year: 2023,
    director: 'Director Name',
  },
  {
    title: 'Short Film Project',
    role: 'Lead Role',
    type: 'Short Film',
    year: 2022,
    director: 'Director Name',
  },
];

export default function ActingPage() {
  return (
    <PageWrapper>
      <Section>
        <Container>
          <RevealOnScroll>
            <SectionHeader
              title="Acting"
              subtitle="Bringing characters to life across film, television, and stage."
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <RevealOnScroll delay={0.1}>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Demo Reel
                  </h3>
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl block mb-4">🎭</span>
                      <p className="text-muted">Demo reel coming soon</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Credits
                </h3>
              </RevealOnScroll>

              <StaggerContainer className="space-y-4" staggerDelay={0.1} initialDelay={0.3}>
                {actingCredits.map((credit, index) => (
                  <StaggerItem key={index}>
                    <Card className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <CardTitle className="text-lg">{credit.title}</CardTitle>
                          <Badge variant="outline">{credit.year}</Badge>
                        </div>
                        <p className="text-muted">
                          <span className="text-secondary font-medium">
                            {credit.role}
                          </span>
                          {' • '}
                          {credit.type}
                          {credit.director && ` • Dir. ${credit.director}`}
                        </p>
                      </div>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div className="space-y-6">
              <RevealOnScroll delay={0.2} direction="right">
                <div className="aspect-[3/4] bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">👤</span>
                </div>
                <p className="text-sm text-muted text-center mt-2">Headshot</p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3} direction="right">
                <div className="p-6 bg-surface rounded-2xl">
                  <h4 className="font-semibold text-foreground mb-4">
                    Physical Stats
                  </h4>
                  <div className="space-y-2 text-muted">
                    <p>
                      <span className="text-foreground">Height:</span> TBD
                    </p>
                    <p>
                      <span className="text-foreground">Hair:</span> TBD
                    </p>
                    <p>
                      <span className="text-foreground">Eyes:</span> TBD
                    </p>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.4} direction="right">
                <div className="p-6 bg-surface rounded-2xl">
                  <h4 className="font-semibold text-foreground mb-4">Training</h4>
                  <ul className="space-y-2 text-muted">
                    <li>Acting training details TBD</li>
                  </ul>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
