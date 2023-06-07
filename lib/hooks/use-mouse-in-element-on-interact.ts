import { useRef, useState, useEffect } from 'react';

interface MouseInElement {
    elementRef: React.RefObject<HTMLElement>;
    elementX: number;
    elementY: number;
    isActive: boolean;
}

export const useMouseInElementOnInteract = (): MouseInElement => {
    const elementRef = useRef<HTMLElement>(null);
    const [elementX, setElementX] = useState(0);
    const [elementY, setElementY] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const currentElement = elementRef.current;

        const handleEvent = (e: MouseEvent | TouchEvent) => {
            if (currentElement) {
                const rect = currentElement.getBoundingClientRect();
                const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
                const clientY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
                setElementX(clientX - rect.left);
                setElementY(clientY - rect.top);
                setIsActive(true);
            }
        };

        const handleMouseLeave = () => {
            setIsActive(false);
        };

        if (currentElement) {
            currentElement.addEventListener('mousemove', handleEvent);
            currentElement.addEventListener('mouseleave', handleMouseLeave);
            currentElement.addEventListener('touchmove', handleEvent);
            currentElement.addEventListener('touchend', handleMouseLeave);
            currentElement.addEventListener('touchcancel', handleMouseLeave);
        }
        return () => {
            if (currentElement) {
                currentElement.removeEventListener('mousemove', handleEvent);
                currentElement.removeEventListener('mouseleave', handleMouseLeave);
                currentElement.removeEventListener('touchmove', handleEvent);
                currentElement.removeEventListener('touchend', handleMouseLeave);
                currentElement.removeEventListener('touchcancel', handleMouseLeave);
            }
        };
    }, []);

    return { elementRef, elementX, elementY, isActive };
};