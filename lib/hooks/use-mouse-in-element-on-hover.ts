import { useRef, useState, useEffect } from 'react';

interface MouseInElement {
    elementRef: React.RefObject<HTMLElement>;
    elementX: number;
    elementY: number;
    isActive: boolean;
}

export const useMouseInElementOnHover = (): MouseInElement => {
    const elementRef = useRef<HTMLElement>(null);
    const [elementX, setElementX] = useState(0);
    const [elementY, setElementY] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const currentElement = elementRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            if (currentElement) {
                const rect = currentElement.getBoundingClientRect();
                setElementX(e.clientX - rect.left);
                setElementY(e.clientY - rect.top);
                setIsActive(true);
            }
        };

        const handleMouseLeave = () => {
            setIsActive(false);
        };

        if (currentElement) {
            currentElement.addEventListener('mousemove', handleMouseMove);
            currentElement.addEventListener('mouseleave', handleMouseLeave);
        }
        return () => {
            if (currentElement) {
                currentElement.removeEventListener('mousemove', handleMouseMove);
                currentElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    return { elementRef, elementX, elementY, isActive };
};