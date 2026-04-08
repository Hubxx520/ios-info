import { motion, type Variants } from 'framer-motion';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, secure payments, and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d79?w=800&h=600&fit=crop',
    tags: ['TypeScript', 'Next.js', 'Prisma', 'WebSocket'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content generation platform with multiple templates, tone customization, and export capabilities.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['Python', 'FastAPI', 'React', 'OpenAI'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Finance Dashboard',
    description: 'Real-time financial data visualization dashboard with interactive charts, alerts, and portfolio tracking.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'D3.js', 'Firebase', 'TailwindCSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Social Media Analytics',
    description: 'Comprehensive social media analytics tool with multi-platform integration, sentiment analysis, and reporting.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    tags: ['React', 'GraphQL', 'MongoDB', 'Chart.js'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Health & Fitness Tracker',
    description: 'Mobile-first fitness tracking app with workout plans, progress tracking, and nutrition logging.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    tags: ['React Native', 'Express', 'PostgreSQL', 'Redux'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

export function ProjectsSection() {
  return (
    <Section id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            A selection of projects showcasing my skills and passion for building great products
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hover={false} className="h-full overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700 dark:bg-primary-950/30 dark:text-primary-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href={project.demoUrl}>
                      <Button
                        variant="primary"
                        size="sm"
                        className="flex-1"
                        leftIcon={
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        }
                      >
                        Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl}>
                      <Button
                        variant="outline"
                        size="sm"
                        leftIcon={
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                        }
                      >
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
