import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function Card({ children, hover = true, padding = 'md', className = '' }) {
    const paddingStyles = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };
    return (_jsx(motion.div, { className: `bg-card rounded-xl border border-border/50 transition-all duration-300 ${paddingStyles[padding]} ${hover ? 'hover:shadow-medium cursor-pointer' : 'shadow-soft'} ${className}`, whileHover: hover ? { y: -4 } : undefined, transition: { type: 'spring', stiffness: 300, damping: 20 }, children: children }));
}
