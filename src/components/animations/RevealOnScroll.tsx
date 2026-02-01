'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils/cn';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
  threshold?: number;
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 40,
  once = true,
  threshold = 0.2,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const directions: Record<string, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const directionValues = directions[direction];

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{
        opacity: 0,
        ...directionValues,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : (directionValues.x ?? 0),
        y: isInView ? 0 : (directionValues.y ?? 0),
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
