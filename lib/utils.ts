import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function ease(x: number): number {
    return x * x * x * x;
}

export const calculateOpacity = (scrollYPercent: number) => {
    const easedPercentY = ease(scrollYPercent * 1.5);
    const opacity = Math.min(easedPercentY, 1);
    return opacity;
};

export function getRandomColor500(): string {
    const tailwindColors500: { [key: string]: string } = {
        gray: '#9CA3AF',
        red: '#EF4444',
        yellow: '#F59E0B',
        green: '#10B981',
        blue: '#3B82F6',
        indigo: '#6366F1',
        purple: '#8B5CF6',
        pink: '#EC4899',
    };

    const colorKeys = Object.keys(tailwindColors500);
    const randomIndex = Math.floor(Math.random() * colorKeys.length);
    const randomColor = tailwindColors500[colorKeys[randomIndex]];

    return randomColor;
}

export function getRandomInt(range: number): number {
    return Math.floor(Math.random() * (range + 1));
}

export function formatDate(input: string | number): string {
    const date = new Date(input)
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })
}