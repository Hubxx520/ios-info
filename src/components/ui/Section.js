import { jsx as _jsx } from "react/jsx-runtime";
export function Section({ children, id, className = '', background = 'default', ...props }) {
    const backgroundStyles = {
        default: '',
        muted: 'bg-secondary-50 dark:bg-secondary-900/20',
        gradient: 'bg-gradient-to-b from-background via-secondary-50/50 to-background dark:via-secondary-900/20',
    };
    return (_jsx("section", { id: id, className: `py-16 sm:py-24 ${backgroundStyles[background]} ${className}`, ...props, children: children }));
}
