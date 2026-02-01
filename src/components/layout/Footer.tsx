import NextLink from 'next/link';
import { Container } from '@/components/ui';
import { navLinks } from '@/data/navigation';
import { socialLinks } from '@/data/social';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <NextLink href="/" className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
              <span className="logo-text text-2xl">Cole Ortiz</span>
            </NextLink>
            <p className="mt-4 text-muted max-w-md">
              Finance professional, entrepreneur, and creative. Bridging the
              worlds of venture capital, technology, and the arts.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <NextLink
                    href={link.href}
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            &copy; {currentYear} Cole Ortiz. All rights reserved.
          </p>
          <div className="flex gap-6">
            <NextLink
              href="/resume"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Resume
            </NextLink>
            <NextLink
              href="/contact"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Contact
            </NextLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}
