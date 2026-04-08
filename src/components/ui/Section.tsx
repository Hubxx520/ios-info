import type { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'default' | 'muted' | 'gradient';
}

export function Section({ children, id, className = '', background = 'default', ...props }: SectionProps) {
  const backgroundStyles = {
    default: '',
    muted: 'bg-secondary-50 dark:bg-secondary-900/20',
    gradient: 'bg-gradient-to-b from-background via-secondary-50/50 to-background dark:via-secondary-900/20',
  };

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 ${backgroundStyles[background]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}
