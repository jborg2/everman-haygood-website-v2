import React from "react";
import { cn } from "@/lib/utils"
import { ShowcaseGrid } from "@/components/showcase-2";

export default async function Home() {

  return (
    <div className={cn("flex flex-col w-screen items-center justify-center",
      "gap-4",
      "py-16",
      "px-16 lg:px-32"
    )}>
      <div className='flex w-full flex-col max-w-[1100px]'>
        <h1 className={cn(
          "z-10",
          "text-7xl text-transparent",
          "font-display md:text-7xl lg:text-8xl xl:text-8xl 2xl-text-9xl",
          "tracking-wide",
          "text-foreground dark:text-foreground",
          "mb-6 lg:mb-6 xl:mb-4"
        )}
        >
          Everman - Haygood
        </h1>
        <h3 className={cn(
          "text-2xl",
          "text-foreground dark:text-foreground",
          "mb-8 sm:mb-8"
        )}>
          We build open source software. 
        </h3>
        <ShowcaseGrid />
      </div>
    </div>
  );
}
