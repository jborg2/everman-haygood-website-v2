import { cn } from "@/lib/utils"

export const badgeColors = [
    'bg-blue-100 dark:bg-blue-400',
    'bg-green-100 dark:bg-green-400 ',
    'bg-yellow-100 dark:bg-yellow-400',
    'bg-red-100 dark:bg-red-400',
    'bg-purple-100 dark:bg-purple-400',
    'bg-pink-100 dark:bg-pink-400',
    'bg-indigo-100 dark:bg-indigo-400',
    'bg-gray-100 dark:bg-gray-300',
]

export const badgeTextColors = [
    'text-blue-600 dark:text-blue-700',
    'text-green-600 dark:text-green-700',
    'text-yellow-600 dark:text-yellow-700',
    'text-red-600 dark:text-red-700',
    'text-purple-600 dark:text-purple-700',
    'text-pink-600 dark:text-pink-700',
    'text-indigo-600 dark:text-indigo-700',
    'text-gray-600 dark:text-gray-800',
]

export function Badge({ children, ...props }: any) {
    // const randomColor = badgeColors[Math.floor(Math.random() * badgeColors.length)]
    return (
        <p
            {...props}
            className={cn('px-2 py-1 transition-all rounded-lg text-white font-medium translate-y-[0rem] flex flex-row items-center justify-center',
                props.className,
                badgeColors[props.color], badgeTextColors[props.color]
            )}
        >
            {children}
        </p>
    )
}