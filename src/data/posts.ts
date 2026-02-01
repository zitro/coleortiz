import type { BlogPost } from '@/types';

// Fallback posts for development or when API is unavailable
export const fallbackPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'welcome-to-my-journal',
    title: 'Welcome to My Journal',
    excerpt:
      'An introduction to my thoughts on finance, technology, and the creative arts.',
    content: `
# Welcome to My Journal

This is where I share my thoughts on the intersection of finance, technology, and creative pursuits.

## What to Expect

I'll be writing about:
- Insights from the venture capital world
- Technology trends and innovations
- Creative projects in music and film
- Lessons learned along the way

Stay tuned for more content!
    `.trim(),
    publishedAt: '2024-01-15',
    author: 'Cole Ortiz',
    tags: ['introduction', 'personal'],
  },
  {
    id: '2',
    slug: 'bridging-finance-and-creativity',
    title: 'Bridging Finance and Creativity',
    excerpt:
      'How my background in finance informs my creative work, and vice versa.',
    content: `
# Bridging Finance and Creativity

Many people see finance and creativity as opposite ends of a spectrum. I've found they complement each other in unexpected ways.

## The Analytical Mind in Creative Work

Understanding market dynamics, audience behavior, and resource allocation has proven invaluable in producing music and film projects.

## Creative Thinking in Finance

Conversely, creative problem-solving and storytelling skills have been essential in venture capital, where we're constantly evaluating new ideas and helping founders communicate their vision.
    `.trim(),
    publishedAt: '2024-02-01',
    author: 'Cole Ortiz',
    tags: ['finance', 'creativity', 'insights'],
  },
];
