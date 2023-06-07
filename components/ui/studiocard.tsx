import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { useMouseInElementOnInteract } from '@/lib/hooks/use-mouse-in-element-on-interact';

export const StudioCard = (
    { children, className, gradient = 0, onHoverOnly = false }:
        { children: React.ReactNode, className?: string, gradient?: number | boolean, onHoverOnly?: boolean }
) => {
    // const { elementRef, elementX, elementY } = useMouseInElement();
    const { elementRef, elementX, elementY, isActive } = useMouseInElementOnInteract()
    const borderGradient = gradient !== 0 ? `border-gradient-${gradient}` : ''

    return (
        <div
            ref={elementRef as React.RefObject<HTMLDivElement>}
            style={{
                '--x': `${elementX}px`,
                '--y': `${elementY}px`,
            } as React.CSSProperties}
            className={cn(
                (onHoverOnly && !isActive) ? '' : borderGradient,
                'transition-300',
                'group relative h-full rounded-xl',
                // 'bg-gray-700',
                'p-4 before:absolute before:-inset-px before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-2xl lg:p-8',
                className
            )}
        >
            <div
                className={cn(
                    "absolute inset-0 rounded-[15px]",
                    "bg-white dark:bg-neutral-800",
                    (onHoverOnly && !isActive) ? 'border-[1px] border-zinc-200 dark:border-zinc-700' : '',
                    // "shadow-md dark:shadow-none",
                    "transition-colors duration-100",
                    // "group-hover:bg-neutral-100 dark:group-hover:bg-[#27272a]",
                )}
            ></div>
            <div className={cn(
                "relative z-10 h-full"
            )}>{children}</div>
        </div>
    );
};