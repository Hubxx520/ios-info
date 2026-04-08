import { useEffect, useState } from 'react';
export function useScrollAnimation({ threshold = 0.1, rootMargin = '0px', triggerOnce = true, } = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [ref, setRef] = useState(null);
    useEffect(() => {
        if (!ref)
            return;
        if (hasAnimated && triggerOnce)
            return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                if (triggerOnce) {
                    setHasAnimated(true);
                    observer.unobserve(entry.target);
                }
            }
            else if (!triggerOnce) {
                setIsIntersecting(false);
            }
        }, { threshold, rootMargin });
        observer.observe(ref);
        return () => {
            observer.disconnect();
        };
    }, [ref, threshold, rootMargin, triggerOnce, hasAnimated]);
    return { ref: setRef, isIntersecting, hasAnimated };
}
