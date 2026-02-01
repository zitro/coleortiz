import type { Metadata } from 'next';
import { Container, Section, SectionHeader } from '@/components/ui';
import { PageWrapper } from '@/components/layout';
import { RevealOnScroll } from '@/components/animations';
import { PostList } from '@/components/journal';
import { getPosts } from '@/lib/orbio/client';

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Thoughts on finance, technology, and creative pursuits from Cole Ortiz.',
};

export default async function JournalPage() {
  const posts = await getPosts();

  return (
    <PageWrapper>
      <Section>
        <Container>
          <RevealOnScroll>
            <SectionHeader
              title="Journal"
              subtitle="Thoughts on finance, technology, and creative pursuits."
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <PostList posts={posts} />
          </RevealOnScroll>
        </Container>
      </Section>
    </PageWrapper>
  );
}
