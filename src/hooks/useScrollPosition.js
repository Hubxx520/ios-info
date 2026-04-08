import { useState, useEffect } from 'react';
export function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return scrollPosition;
}
export function useActiveSection(sectionIds) {
    const [activeSection, setActiveSection] = useState('');
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 });
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element)
                observer.observe(element);
        });
        return () => {
            observer.disconnect();
        };
    }, [sectionIds]);
    return activeSection;
}
