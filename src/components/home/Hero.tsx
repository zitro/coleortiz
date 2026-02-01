'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Container, Button } from '@/components/ui';
import { FadeIn, MagneticButton } from '@/components/animations';
import NextLink from 'next/link';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-300/20 blur-3xl animate-float"
        style={{ y }}
      />
      <motion.div
        className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-violet-400/25 to-purple-300/20 blur-3xl animate-float-delayed"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[20%] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-pink-400/20 to-rose-300/15 blur-3xl animate-pulse-slow"
        style={{ y: y3 }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-teal-400/20 to-emerald-300/15 blur-3xl animate-float"
        style={{ y: y2 }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <Container className="relative z-10">
        <motion.div style={{ opacity }} className="text-center max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 animate-pulse" />
              <p className="text-muted text-sm font-medium">Finance + Tech + Creative</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Cole Ortiz
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-8">
              UGA Finance graduate. Associate at{' '}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Zitro Capital
              </span>{' '}
              &{' '}
              <span className="font-semibold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                OrbioCloud
              </span>
              . Music producer, award-winning filmmaker, and actor.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <NextLink href="/about">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-500/25"
                  >
                    Learn More
                  </Button>
                </NextLink>
              </MagneticButton>
              <MagneticButton>
                <NextLink href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/50 backdrop-blur-sm border-slate-200 hover:bg-white/80"
                  >
                    Get in Touch
                  </Button>
                </NextLink>
              </MagneticButton>
            </div>
          </FadeIn>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-slate-300 rounded-full p-1 bg-white/30 backdrop-blur-sm"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1.5 h-1.5 bg-gradient-to-b from-blue-500 to-violet-500 rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
