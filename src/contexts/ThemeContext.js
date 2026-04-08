import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
const ThemeContext = createContext(undefined);
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = stored || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
        setIsLoading(false);
    }, []);
    useEffect(() => {
        if (isLoading)
            return;
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        }
        else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme, isLoading]);
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };
    return (_jsx(ThemeContext.Provider, { value: { theme, toggleTheme, isLoading }, children: children }));
}
export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
