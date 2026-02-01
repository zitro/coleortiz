import type { Metadata } from 'next';
import { Container, Section, SectionHeader, Card, CardTitle, CardDescription } from '@/components/ui';
import { PageWrapper } from '@/components/layout';
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/animations';

export const metadata: Metadata = {
  title: 'Music',
  description:
    'Cole Ortiz is a music producer creating sounds that blend genres and push creative boundaries.',
};

const musicProjects = [
  {
    title: 'Project Title 1',
    description: 'A genre-blending production exploring electronic and organic sounds.',
    year: 2024,
  },
  {
    title: 'Project Title 2',
    description: 'Collaborative work featuring innovative beat production.',
    year: 2024,
  },
  {
    title: 'Project Title 3',
    description: 'Experimental soundscape pushing the boundaries of modern production.',
    year: 2023,
  },
  {
    title: 'Project Title 4',
    description: 'A fusion of classical elements with contemporary electronic music.',
    year: 2023,
  },
];

export default function MusicPage() {
  return (
    <PageWrapper>
      <Section>
        <Container>
          <RevealOnScroll>
            <SectionHeader
              title="Music"
              subtitle="Producing sounds that blend genres and push creative boundaries."
            />
          </RevealOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.15}>
            {musicProjects.map((project, index) => (
              <StaggerItem key={index}>
                <Card hover className="h-full">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-4xl">🎵</span>
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="mt-4 text-sm text-muted">{project.year}</div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <RevealOnScroll delay={0.4}>
            <div className="mt-16 text-center p-8 bg-surface rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Listen & Connect
              </h3>
              <p className="text-muted text-lg mb-6 max-w-2xl mx-auto">
                My music is available across all major streaming platforms. Follow
                along for new releases and behind-the-scenes content.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Spotify', 'Apple Music', 'SoundCloud', 'YouTube'].map(
                  (platform) => (
                    <div
                      key={platform}
                      className="px-6 py-3 bg-background rounded-lg text-foreground font-medium hover:bg-secondary hover:text-white transition-colors cursor-pointer"
                    >
                      {platform}
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
