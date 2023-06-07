import { StudioCard } from "@/components/ui/studiocard"
import { cn } from "@/lib/utils"
import useScrollY from "@/lib/hooks/use-scrollY"
import { calculateOpacity } from "@/lib/utils"

export default function Projects() {
    const { scrollY, scrollYPercent } = useScrollY();
    const opacity = calculateOpacity(scrollYPercent)

    return (
        <div className={cn(
            "px-8",
            "w-full min-h-screen mx-auto max-w-5xl",
            "pt-36"
        )}
            style={{ opacity: calculateOpacity(scrollYPercent) }}
        >
            <h1
                className={cn(
                    "text-5xl font-semibold",
                    "text-zinc-800 dark:text-zinc-200",
                    "mb-0",
                    "text-center",
                )}>
                Featured Projects
            </h1>
        </div>
    )
}