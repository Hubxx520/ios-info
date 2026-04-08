import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
export const Button = forwardRef(({ variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, children, disabled, className = '', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95';
    const variants = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-soft hover:shadow-medium',
        secondary: 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 focus:ring-secondary-500 shadow-soft dark:bg-secondary-800 dark:text-secondary-200 dark:hover:bg-secondary-700',
        outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500 dark:hover:bg-primary-950/20',
        ghost: 'text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500 dark:text-secondary-200 dark:hover:bg-secondary-800',
    };
    const sizes = {
        sm: 'px-4 py-2 text-sm gap-1.5',
        md: 'px-6 py-3 text-base gap-2',
        lg: 'px-8 py-4 text-lg gap-2.5',
    };
    return (_jsxs(motion.button, { ref: ref, className: `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`, disabled: disabled || isLoading, whileHover: { scale: disabled || isLoading ? 1 : 1.02 }, whileTap: { scale: disabled || isLoading ? 1 : 0.98 }, children: [isLoading && (_jsxs("svg", { className: "animate-spin h-5 w-5", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4", fill: "none" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] })), !isLoading && leftIcon && _jsx("span", { className: "flex-shrink-0", children: leftIcon }), children, !isLoading && rightIcon && _jsx("span", { className: "flex-shrink-0", children: rightIcon })] }));
});
Button.displayName = 'Button';
