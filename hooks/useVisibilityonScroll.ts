import { useState, useEffect, useRef } from 'react';

const useVisibilityOnScroll = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const checkVisibility = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    setIsVisible(true);
                }
            }
        };

        checkVisibility();  // Initial check
        window.addEventListener('scroll', checkVisibility);
        
        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    return { isVisible, sectionRef };
}

export default useVisibilityOnScroll;
