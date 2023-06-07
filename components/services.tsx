import { cn } from "@/lib/utils"
import useScrollY from "@/lib/hooks/use-scrollY"
import UserStory from "@/components/user-story";
import { calculateOpacity } from "@/lib/utils";

export default function Services() {
    const { scrollY, scrollYPercent } = useScrollY();
    const opacity = calculateOpacity(scrollYPercent)

    const products = [
        {
            title: "Product 1",
            description: "Description 1",
            tags: ["tag1", "tag2", "tag3"],
        },
        {
            title: "Product 2",
            description: "Description 2",
            tags: ["tag1", "tag2", "tag3"],
        },
        {
            title: "Product 3",
            description: "Description 3",
            tags: ["tag1", "tag2", "tag3"],
        },
    ]

    return (
        <div>
            <div className={cn(
                "px-8",
                "w-full min-h-screen mx-auto max-w-5xl",
                "pt-36"
            )}
                style={{ opacity: calculateOpacity(scrollYPercent) }}
            >
                <div className='flex flex-col items-center'>
                    <div className='flex w-full flex-col justify-center items-center'>
                        <h3
                            className={cn(
                                "text-xl font-medium",
                                "text-blue-500",
                                "mb-4",
                            )}>
                            Consulting & Solutions
                        </h3>
                        <h2 className={cn(
                            "text-4xl font-bold",
                            "text-zinc-800 dark:text-zinc-200",
                            "mb-0",
                        )}>
                            We use ML and AI to solve <span className='underline underline-offset-2'>real world problems</span>.
                        </h2>
                    </div>
                    <UserStory/>
                </div>
            </div>
            <div className={cn(
                "px-8",
                "w-full min-h-screen mx-auto max-w-5xl",
                // "from-white via-zinc-400/20 to-white",
                // "dark:from-black dark:via-zinc-600/20 dark:to-black",
                "pt-36"
            )}
                style={{ opacity: calculateOpacity(scrollYPercent) }}
            >
                <div className='flex flex-col items-center'>
                    <div className='flex w-full flex-col justify-center items-center'>
                        <h3
                            className={cn(
                                "text-xl font-medium",
                                "text-blue-500",
                                "mb-4",
                            )}>
                            Products
                        </h3>
                        <h2 className={cn(
                            "text-4xl font-bold",
                            "text-zinc-800 dark:text-zinc-200",
                            "mb-16",
                        )}>
                            We build products that do stuff.
                        </h2>
                    </div>
                    {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
                        {products.map((product, i) => (
                            <Card
                                className={cn(
                                    'w-full h-96 shadow-lg',
                                    "flex flex-col justify-center-items-center",
                                    "bg-white dark:bg-neutral-900 dark:bg-gradient-to-tr from-neutral-900 via-zinc-500/20 to-neutral-900",
                                    "dark:border-neutral-700",
                                    "rounded-xl",
                                    "p-8",
                                    "mb-16",
                                )}
                                key={i}
                            >
                                <div>
                                    <h3 className={cn(
                                        "text-2xl font-bold",
                                        "text-zinc-800 dark:text-zinc-200",
                                        "mb-4",
                                        "font-sans",
                                    )}>
                                        {product.title}
                                    </h3>
                                    <p className={cn(
                                        "text-lg font-medium",
                                        "text-zinc-800 dark:text-zinc-200",
                                        "mb-4",
                                        "font-sans",
                                    )}>
                                        {product.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    )
}