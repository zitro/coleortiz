import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NextLink from 'next/link';
import { Container, Section, Badge, Button } from '@/components/ui';
import { PageWrapper } from '@/components/layout';
import { RevealOnScroll } from '@/components/animations';
import { getPostBySlug, getPostSlugs } from '@/lib/orbio/client';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author] : undefined,
    },
  };
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <PageWrapper>
      <Section>
        <Container size="md">
          <RevealOnScroll>
            <NextLink
              href="/journal"
              className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Journal
            </NextLink>
          </RevealOnScroll>

          <article>
            <RevealOnScroll delay={0.1}>
              <header className="mb-12">
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {post.title}
                </h1>

                <div className="flex items-center gap-4 text-muted">
                  <time dateTime={post.publishedAt}>{formattedDate}</time>
                  {post.author && (
                    <>
                      <span>•</span>
                      <span>By {post.author}</span>
                    </>
                  )}
                </div>
              </header>
            </RevealOnScroll>

            {post.coverImage && (
              <RevealOnScroll delay={0.2}>
                <div className="aspect-video rounded-2xl overflow-hidden mb-12">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </RevealOnScroll>
            )}

            <RevealOnScroll delay={0.3}>
              <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted prose-a:text-secondary prose-strong:text-foreground">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                        {paragraph.replace('# ', '')}
                      </h1>
                    );
                  }
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="text-muted ml-4">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-muted mb-4">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <div className="mt-16 pt-8 border-t border-border">
                <NextLink href="/journal">
                  <Button variant="outline">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Back to Journal
                  </Button>
                </NextLink>
              </div>
            </RevealOnScroll>
          </article>
        </Container>
      </Section>
    </PageWrapper>
  );
}
