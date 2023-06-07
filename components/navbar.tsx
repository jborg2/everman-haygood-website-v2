'use client'

import Link from 'next/link'
import { navItems } from '@/config/navbar'

import { cn } from "@/lib/utils"
import { buttonVariants } from './shadcn-ui/button'
import useScrollY from "@/lib/hooks/use-scrollY";

export default function NavBar(props: any) {

    const { scrollY, scrollYPercent } = useScrollY();

    function ease(x: number): number {
        return x * x * x * x;
    }

    const calculateOpacity = (scrollYPercent: number) => {
        const easedPercentY = ease(scrollYPercent);
        const opacity = Math.min(easedPercentY, 1);
        return opacity;
    };

    const opacity = calculateOpacity(scrollYPercent);

    return (
        <nav
            style={{ opacity: calculateOpacity(scrollYPercent) }}
            className={cn(
                'fixed top-0 flex flex-row justify-center items-center bg-transparent z-50 max-w-5xl',
                'mt-6',
            )}>
            <div
                className={cn(
                    'px-4 py-1 flex flex-row justify-center items-center w-full',
                    'border-[1px] rounded-full border-zinc-500 dark:border-zinc-700',
                    // 'bg-transparent dark:bg-transparent',
                    'bg-white dark:bg-zinc-800',
                    // 'backdrop-filter backdrop-blur-xl',
                )}>
                <ul
                    className='flex flex-row items-center justify-center w-full gap-4'
                >
                    {navItems.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={cn(
                                    // buttonVariants({ variant: "link" }),
                                    'p-2',
                                    'text-sm text-foreground dark:text-foreground',
                                    'hover:text-zinc-500 dark:hover:text-zinc-500',
                                    'transition-colors duration-100',
                                    'min-w-[70px]',
                                    'text-center',
                                    // handle the case where its "invisible" but still clickable, before user has scrolled down
                                    opacity > 0.08 ? "block" : "hidden"
                                )}
                            >
                                <li>
                                    {item.name}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}