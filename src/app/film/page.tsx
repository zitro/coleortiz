import type { Metadata } from 'next';
import { Container, Section, SectionHeader, Card, CardTitle, CardDescription, Badge } from '@/components/ui';
import { PageWrapper } from '@/components/layout';
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/animations';

export const metadata: Metadata = {
  title: 'Film',
  description:
    'Cole Ortiz is an award-winning filmmaker creating compelling short films and visual narratives.',
};

const filmProjects = [
  {
    title: 'Award-Winning Short 1',
    role: 'Director / Producer',
    description:
      'A compelling narrative exploring themes of identity and connection in the modern age.',
    year: 2024,
    awards: ['Best Short Film - Festival Name', 'Audience Choice Award'],
  },
  {
    title: 'Film Project 2',
    role: 'Director',
    description:
      'An experimental piece blending documentary and narrative storytelling techniques.',
    year: 2023,
    awards: ['Official Selection - Film Festival'],
  },
  {
    title: 'Film Project 3',
    role: 'Producer / Writer',
    description:
      'A dramatic short exploring the complexities of family relationships.',
    year: 2023,
    awards: [],
  },
];

export default function FilmPage() {
  return (
    <PageWrapper>
      <Section>
        <Container>
          <RevealOnScroll>
            <SectionHeader
              title="Film"
              subtitle="Award-winning shorts exploring compelling narratives and visual storytelling."
            />
          </RevealOnScroll>

          <StaggerContainer className="space-y-8" staggerDelay={0.2}>
            {filmProjects.map((project, index) => (
              <StaggerItem key={index}>
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                      <span className="text-6xl">🎬</span>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="outline">{project.year}</Badge>
                        <Badge variant="secondary">{project.role}</Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base mb-4">
                        {project.description}
                      </CardDescription>
                      {project.awards.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-foreground">
                            Awards & Recognition
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.awards.map((award, i) => (
                              <Badge key={i} variant="accent">
                                🏆 {award}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <RevealOnScroll delay={0.4}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-surface rounded-2xl text-center">
                <div className="text-4xl font-bold text-secondary mb-2">5+</div>
                <div className="text-muted">Short Films</div>
              </div>
              <div className="p-6 bg-surface rounded-2xl text-center">
                <div className="text-4xl font-bold text-accent mb-2">3+</div>
                <div className="text-muted">Film Festival Selections</div>
              </div>
              <div className="p-6 bg-surface rounded-2xl text-center">
                <div className="text-4xl font-bold text-secondary mb-2">2+</div>
                <div className="text-muted">Awards Won</div>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>
    </PageWrapper>
  );
}
