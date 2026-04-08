import { motion, type Variants } from 'framer-motion';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from 'recharts';

const skillsData = [
  { skill: 'React', level: 95, fullMark: 100 },
  { skill: 'TypeScript', level: 90, fullMark: 100 },
  { skill: 'Node.js', level: 85, fullMark: 100 },
  { skill: 'UI/UX Design', level: 80, fullMark: 100 },
  { skill: 'Python', level: 75, fullMark: 100 },
  { skill: 'DevOps', level: 70, fullMark: 100 },
];

const experiences = [
  {
    year: '2022 - Present',
    title: 'Senior Frontend Developer',
    company: 'Tech Company',
    description: 'Leading frontend architecture and mentoring junior developers.',
  },
  {
    year: '2020 - 2022',
    title: 'Frontend Developer',
    company: 'Startup Inc',
    description: 'Built scalable web applications using React and TypeScript.',
  },
  {
    year: '2018 - 2020',
    title: 'Junior Developer',
    company: 'Digital Agency',
    description: 'Developed responsive websites and learned modern web technologies.',
  },
];

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
  hidden: { opacity: 0, y: 20 },
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

export function AboutSection() {
  const { ref: chartRef, isIntersecting: isChartVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <Section id="about" background="muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Get to know more about my background, skills, and professional journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            ref={chartRef}
            variants={containerVariants}
            initial="hidden"
            animate={isChartVisible ? 'visible' : 'hidden'}
          >
            <Card padding="lg" className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
                  <PolarGrid stroke="currentColor" className="text-secondary-200 dark:text-secondary-700" />
                  <PolarAngleAxis 
                    dataKey="skill" 
                    tick={{ fill: 'currentColor', fontSize: 12 }}
                    className="text-foreground"
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 100]} 
                    tick={{ fill: 'currentColor', fontSize: 10 }}
                    className="text-secondary-500"
                  />
                  <Radar
                    name="Skill Level"
                    dataKey="level"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fill="#3b82f6"
                    fillOpacity={0.5}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    }}
                    labelStyle={{ color: '#0f172a', fontWeight: 600 }}
                    itemStyle={{ color: '#3b82f6' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card padding="lg">
              <h3 className="text-xl font-semibold mb-6 text-foreground">My Journey</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative pl-6 pb-6 last:pb-0 border-l-2 border-primary-200 dark:border-primary-800"
                  >
                    <div className="absolute left-0 top-0 w-3 h-3 bg-primary-500 rounded-full transform -translate-x-1/2" />
                    <span className="text-sm text-primary-600 font-medium">{exp.year}</span>
                    <h4 className="text-lg font-semibold text-foreground mt-1">{exp.title}</h4>
                    <p className="text-secondary-500 dark:text-secondary-400 text-sm">{exp.company}</p>
                    <p className="text-secondary-600 dark:text-secondary-300 mt-2">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
