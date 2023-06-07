'use client'

import { cn } from "@/lib/utils"
import useSafari from "@/lib/hooks/use-safari"

export default function Hyperbadge(props: any) {
    const size = props.size || 'sm'
    const isSafari = useSafari()
    return (
        <span className={cn(
            'group relative inline-block overflow-hidden rounded-full p-px',
            'dark:shadow-md shadow-none w-max'
        )}>
            {!isSafari &&
                <>
                    <span className={cn(
                        "absolute inset-[-1000%]",
                        "animate-[spin_2s_linear_infinite]",
                        "bg-[conic-gradient(#f388e4,#7000ff_25%,#58d2f2_50%,#055edb_75%,#f88fe9_100%)]",
                        "opacity-75",
                    )}></span>
                    <div className={cn("pointer-events-none absolute -inset-1 rounded-lg",
                        "bg-gradient-to-r from-blue-500 to-pink-600 opacity-10 blur",
                        "transition-all duration-1000 group-hover:opacity-100"
                    )}></div>
                </>
            }
            <span className={cn(
                "inline-flex h-full w-full items-center justify-center",
                "rounded-full px-3 py-1 text-sm font-medium leading-5",
                "backdrop-blur-md",
                'dark:bg-gray-950/80 dark:text-white/90 bg-white/95 text-gray-700',
                size === 'sm' ? 'text-sm px-3 py-1' :
                    size === 'md' ? 'text-base px-4 py-2' :
                        size === 'lg' ? 'text-lg px-5 py-3' :
                            size === 'xl' ? 'text-xl px-6 py-4' :
                                size === '2xl' ? 'text-2xl px-7 py-5' :
                                    '',
            )}>{props.children}</span>
        </span>
    )
}