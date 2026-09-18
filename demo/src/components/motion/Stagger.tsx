import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';
import { easeOut, viewportOnce } from '../../lib/motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={viewportOnce} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...rest
}: { children: ReactNode; className?: string } & Omit<HTMLMotionProps<'div'>, 'variants' | 'className' | 'children'>) {
  return (
    <motion.div variants={item} className={className} {...rest}>
      {children}
    </motion.div>
  );
}
