import { useRef, useState, useEffect } from 'react';

interface MouseInElement {
    elementRef: React.RefObject<HTMLElement>;
    elementX: number;
    elementY: number;
}

export const useMouseInElement = (): MouseInElement => {
    const elementRef = useRef<HTMLElement>(null);
    const [elementX, setElementX] = useState(0);
    const [elementY, setElementY] = useState(0);

    useEffect(() => {
        const currentElement = elementRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            if (currentElement) {
                const rect = currentElement.getBoundingClientRect();
                setElementX(e.clientX - rect.left);
                setElementY(e.clientY - rect.top);
            }
        };

        if (currentElement) {
            currentElement.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            if (currentElement) {
                currentElement.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return { elementRef, elementX, elementY };
};