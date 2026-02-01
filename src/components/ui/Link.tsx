'use client';

import NextLink from 'next/link';
import { cn } from '@/lib/utils/cn';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'muted' | 'nav';
  external?: boolean;
}

export function Link({
  href,
  children,
  className,
  variant = 'default',
  external,
  ...props
}: LinkProps) {
  const variants = {
    default:
      'text-secondary hover:text-secondary/80 underline-offset-4 hover:underline',
    muted: 'text-muted hover:text-foreground transition-colors',
    nav: 'text-foreground/80 hover:text-foreground font-medium transition-colors',
  };

  const isExternal = external || href.startsWith('http');

  if (isExternal) {
    return (
      <a
        href={href}
        className={cn(variants[variant], className)}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={cn(variants[variant], className)} {...props}>
      {children}
    </NextLink>
  );
}
