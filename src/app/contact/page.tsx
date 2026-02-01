import type { Metadata } from 'next';
import { Container, Section, SectionHeader, Card } from '@/components/ui';
import { PageWrapper } from '@/components/layout';
import { RevealOnScroll } from '@/components/animations';
import { ContactForm } from '@/components/contact/ContactForm';
import { socialLinks } from '@/data/social';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Cole Ortiz for collaboration, opportunities, or just to say hello.',
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <Section>
        <Container>
          <RevealOnScroll>
            <SectionHeader
              title="Get in Touch"
              subtitle="Have a question or want to work together? I'd love to hear from you."
              align="center"
            />
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <RevealOnScroll delay={0.1}>
              <Card>
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Send a Message
                </h3>
                <ContactForm />
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2} direction="right">
              <div className="space-y-8">
                <Card>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Let&apos;s Connect
                  </h3>
                  <p className="text-muted mb-6">
                    Whether you&apos;re interested in collaboration, investment
                    opportunities, creative projects, or just want to say hello,
                    I&apos;m always open to new conversations.
                  </p>
                  <div className="space-y-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted hover:text-secondary transition-colors"
                      >
                        <span className="w-10 h-10 rounded-full bg-surface flex items-center justify-center">
                          {link.icon === 'linkedin' && '💼'}
                          {link.icon === 'instagram' && '📸'}
                          {link.icon === 'twitter' && '🐦'}
                          {link.icon === 'film' && '🎬'}
                        </span>
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-secondary/10 to-accent/10 border-0">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Quick Response
                  </h3>
                  <p className="text-muted">
                    I typically respond to messages within 24-48 hours. For
                    urgent matters, please indicate so in your subject line.
                  </p>
                </Card>
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
