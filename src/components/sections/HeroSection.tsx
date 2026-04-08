import { motion, type Variants } from 'framer-motion';
import { Button } from '../ui/Button';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium dark:bg-primary-950/30 dark:text-primary-300 mb-6">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="block text-foreground mb-2">Hello, I&apos;m</span>
            <span className="gradient-text">Your Name</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mb-10"
          >
            A passionate developer crafting beautiful, performant, and accessible 
            digital experiences. Specializing in modern web technologies and user-centered design.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects">
              <Button size="lg">
                View My Work
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="secondary">
                Get In Touch
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <motion.div
              className="w-72 h-72 sm:w-96 sm:h-96 mx-auto relative"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl -rotate-6 opacity-20" />
              <div className="relative w-full h-full bg-card rounded-3xl shadow-large border border-border/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
                <svg className="w-32 h-32 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
