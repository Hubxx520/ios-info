import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};
const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 12,
        },
    },
};
const floatingVariants = {
    animate: {
        y: [-10, 10, -10],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};
export function HeroSection() {
    return (_jsxs("section", { id: "home", className: "min-h-screen flex items-center justify-center relative overflow-hidden pt-16", children: [_jsxs("div", { className: "absolute inset-0 z-0", children: [_jsx("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" }), _jsx("div", { className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow", style: { animationDelay: '2s' } })] }), _jsx(motion.div, { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10", variants: containerVariants, initial: "hidden", animate: "visible", children: _jsxs("div", { className: "text-center", children: [_jsx(motion.div, { variants: itemVariants, children: _jsx("span", { className: "inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium dark:bg-primary-950/30 dark:text-primary-300 mb-6", children: "Welcome to my portfolio" }) }), _jsxs(motion.h1, { variants: itemVariants, className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6", children: [_jsx("span", { className: "block text-foreground mb-2", children: "Hello, I'm" }), _jsx("span", { className: "gradient-text", children: "Your Name" })] }), _jsx(motion.p, { variants: itemVariants, className: "text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mb-10", children: "A passionate developer crafting beautiful, performant, and accessible digital experiences. Specializing in modern web technologies and user-centered design." }), _jsxs(motion.div, { variants: itemVariants, className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "#projects", children: _jsxs(Button, { size: "lg", children: ["View My Work", _jsx("svg", { className: "w-5 h-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })] }) }), _jsx("a", { href: "#contact", children: _jsx(Button, { size: "lg", variant: "secondary", children: "Get In Touch" }) })] }), _jsx(motion.div, { variants: itemVariants, className: "mt-16", children: _jsxs(motion.div, { className: "w-72 h-72 sm:w-96 sm:h-96 mx-auto relative", variants: floatingVariants, animate: "animate", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl rotate-6 opacity-20" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl -rotate-6 opacity-20" }), _jsxs("div", { className: "relative w-full h-full bg-card rounded-3xl shadow-large border border-border/50 flex items-center justify-center overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" }), _jsx("svg", { className: "w-32 h-32 text-primary-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }) })] })] }) })] }) }), _jsx(motion.div, { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-10", animate: { y: [0, 10, 0] }, transition: { duration: 2, repeat: Infinity }, children: _jsx("svg", { className: "w-6 h-6 text-secondary-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) }) })] }));
}
