'use client';

import NextLink from 'next/link';
import { Container, Section, SectionHeader, CardTitle, CardDescription } from '@/components/ui';
import { RevealOnScroll, StaggerContainer, StaggerItem } from '@/components/animations';

const featuredItems = [
  {
    title: 'Ventures',
    description:
      'Associate at Zitro Capital and OrbioCloud, working at the intersection of finance and technology.',
    href: '/ventures',
    icon: '📊',
    gradient: 'from-blue-500/10 via-blue-400/5 to-cyan-400/10',
    borderGradient: 'from-blue-500/20 to-cyan-400/20',
    hoverGradient: 'group-hover:from-blue-500/20 group-hover:to-cyan-400/20',
  },
  {
    title: 'Music',
    description:
      'Producing beats and sounds that blend genres and push creative boundaries.',
    href: '/music',
    icon: '🎵',
    gradient: 'from-violet-500/10 via-purple-400/5 to-pink-400/10',
    borderGradient: 'from-violet-500/20 to-pink-400/20',
    hoverGradient: 'group-hover:from-violet-500/20 group-hover:to-pink-400/20',
  },
  {
    title: 'Film',
    description:
      'Award-winning short films exploring compelling narratives and visual storytelling.',
    href: '/film',
    icon: '🎬',
    gradient: 'from-amber-500/10 via-orange-400/5 to-rose-400/10',
    borderGradient: 'from-amber-500/20 to-rose-400/20',
    hoverGradient: 'group-hover:from-amber-500/20 group-hover:to-rose-400/20',
  },
  {
    title: 'Acting',
    description:
      'Bringing characters to life across film, television, and stage productions.',
    href: '/acting',
    icon: '🎭',
    gradient: 'from-emerald-500/10 via-teal-400/5 to-cyan-400/10',
    borderGradient: 'from-emerald-500/20 to-cyan-400/20',
    hoverGradient: 'group-hover:from-emerald-500/20 group-hover:to-cyan-400/20',
  },
];

export function FeaturedWork() {
  return (
    <Section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <Container className="relative z-10">
        <RevealOnScroll>
          <SectionHeader
            title="What I Do"
            subtitle="Bridging finance, technology, and creative arts across multiple disciplines."
            align="center"
          />
        </RevealOnScroll>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          staggerDelay={0.15}
          initialDelay={0.2}
        >
          {featuredItems.map((item) => (
            <StaggerItem key={item.title}>
              <NextLink href={item.href} className="block h-full">
                <div className={`h-full group relative rounded-2xl bg-gradient-to-br ${item.gradient} p-[1px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.borderGradient} ${item.hoverGradient} transition-all duration-300`} />
                  <div className="relative h-full rounded-2xl bg-white/80 backdrop-blur-sm p-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center mb-4 shadow-sm">
                      <span className="text-3xl">{item.icon}</span>
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="mt-2">{item.description}</CardDescription>
                    <div className="mt-4 text-blue-600 text-sm font-medium flex items-center gap-2">
                      Learn more
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </NextLink>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
