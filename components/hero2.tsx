import Link from "next/link";
import React from "react";
import Particles from "@/components/particles";
import { cn } from "@/lib/utils"
import { navItems } from '@/config/navbar'
import BigText from "./bigtext";

export default function Hero2() {
    return (
        <div className={cn("flex flex-col items-center w-screen min-h-screen overflow-hidden justify-center",
            // "bg-gradient-to-b",
            "max-h-screen",
            "from-white via-zinc-400/20 to-white",
            "dark:from-black dark:via-zinc-600/20 dark:to-neutral-900",
            "gap-12"
        )}>
            <div className={cn(
                "hidden w-screen h-px animate-glow md:block animate-fade-left",
                "bg-gradient-to-r",
                "from-zinc-700/0 via-zinc-700/50 to-zinc-700/0",
                "dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0"
            )} />
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={200}
            />
            <h1 className={cn(
                "text-4xl font-bold text-center",
                "text-zinc-800 dark:text-zinc-200",
                "mb-4",
            )}></h1>
                Create
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        </div>
    );
}
