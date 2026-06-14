import { Variants } from 'framer-motion';

// Premium spring physics
export const springPhysics = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 20,
  mass: 0.8,
};

// Layout variants for seamless transitions
export const layoutVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.995 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { ...springPhysics }
  },
  exit: { opacity: 0, y: -12, scale: 0.995, transition: { duration: 0.18 } }
};

// Fade variants
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { opacity: 0, transition: { duration: 0.15 } }
};

// Scale variants
export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { ...springPhysics }
  },
  tap: { scale: 0.97 }
};

// Slide variants
export const slideVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { ...springPhysics }
  }
};

// Stagger children for lists
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05,
    }
  }
};

// Card stagger item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...springPhysics }
  }
};

// Modal variants with scale + fade
export const modalVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.96,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { ...springPhysics }
  },
  exit: { 
    opacity: 0, 
    scale: 0.96,
    y: 20,
    transition: { duration: 0.18 }
  }
};

// Tab transition variants
export const tabVariants: Variants = {
  inactive: { opacity: 0.6, scale: 0.98 },
  active: { opacity: 1, scale: 1 },
  hover: { scale: 1.03, opacity: 0.9 }
};

// Swipe variants for horizontal navigation
export const swipeVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0
  })
};

// Skeleton loading shimmer
export const skeletonPulse: Variants = {
  pulse: {
    opacity: [0.4, 0.8, 0.4],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut' as const
    }
  }
};