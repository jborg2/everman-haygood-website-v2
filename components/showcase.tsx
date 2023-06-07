'use client'

import { cn, getRandomInt } from "@/lib/utils"
import UserStory from "@/components/user-story";
import { StudioCard } from "./ui/studiocard";
import { Icons } from "./icons";
import Link from 'next/link'
import { Badge, badgeColors, badgeTextColors } from '@/components/ui/badge'
import ExternalLink from "./ui/ExternalLink";
import { SmartLink } from "./smartlink";
import { allProjects, Project, allPosts, Post } from "@/.contentlayer/generated";

const generatedProjectNavItems = allProjects
    .filter((project: Project) => project.slugAsParams).map((project) => {

        return {
            type: "project",
            title: project.title,
            desc: project.desc,
            href: `/projects/${project.slugAsParams}`,
            badges: project?.tags?.split("."),
            published: project.published
        }
    })

const generatedBlogNavItems = allPosts
    .filter((post) => post.published)
    .filter((post: Post) => post.slugAsParams).map((post) => {
        return {
            type: "blog",
            title: post.title,
            desc: post.desc,
            href: `/blog/${post.slugAsParams}`,
            badges: post?.tags?.split(","),
            published: post.published
        }
    })


const gridItemsData = [
    ...generatedBlogNavItems,
    ...generatedProjectNavItems
]

const sortOrder = ["project", "blog"]

export const ShowcaseGrid = () => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-8 md:px-12 lg:px-24",
            )}
            id="showcase"
        >
            {gridItemsData
                .sort((a, b) => {
                    const orderA = sortOrder.indexOf(a.type);
                    const orderB = sortOrder.indexOf(b.type);
                    return orderA - orderB;
                })
                .filter((item) => item.published !== false)
                .map((item, i) => {
                    return (
                        <SmartLink key={i} href={item.href}>
                            <StudioCard
                                key={i}
                                gradient={ item.type === "project" ? 2 : item.type === "blog" ? 1 : 3 }
                                className={cn(
                                    "flex flex-col justify-between",
                                    "w-full h-full",
                                    'px-8 py-8 lg:py-6',
                                    // 'hover:shadow-sm dark:hover:shadow-none',
                                    item.type === "project" ? "min-h-[250px]" : item.type === "blog" ? `min-h-[100px]` : `min-h-[0px]`,
                                )}
                                onHoverOnly={true}
                            >
                                <div className='flex flex-col justify-between h-full'>
                                    <div>
                                        <h3 className={cn(
                                            item.type === "project" ? "font-semibold text-2xl" : item.type === "blog" ? "font-semibold text-xl" : "font-medium text-xl",
                                            "mb-2",
                                            "flex flex-row items-center"
                                        )}>
                                            {item.title}
                                            {item.type === 'project' && <Icons.gitHub
                                                className='h-6 w-6 ml-3'
                                            />}
                                        </h3>
                                        <p className='text-zinc-600 dark:text-zinc-400 mb-2'>
                                            {item.desc}
                                        </p>
                                    </div>
                                    {item.type &&
                                        <div className='w-full flex flex-row pt-2 gap-2'>
                                            {item.type === "project" &&
                                                <Badge color={2} className='w-max text-sm'>
                                                    Project
                                                </Badge>
                                            }
                                            {item.type === "blog" &&
                                                <Badge color={0} className='w-max text-sm'>
                                                    Blog
                                                </Badge>
                                            }
                                            {item.badges && item.badges
                                                .filter((badge) => badge !== "project" && badge !== "blog")
                                                .map((badge, i) => {
                                                    return (
                                                        <Badge
                                                            key={i}
                                                            color={i + 1}
                                                            textColor={0}
                                                            className='w-max text-sm'
                                                        >
                                                            {badge}
                                                        </Badge>
                                                    )
                                                })}
                                        </div>
                                    }
                                </div>
                            </StudioCard>
                        </SmartLink>
                    );
                })}
        </div>
    )
}

export default function Showcase() {
    return (
        <div>
            <div className={cn(
                "px-8",
                "w-full min-h-screen mx-auto",
                // "max-w-5xl"",
                // "from-white via-zinc-400/20 to-white",
                // "dark:from-black dark:via-zinc-600/20 dark:to-black",
                "pt-36 pb-24"
            )}>
                <div className='flex flex-col items-center'>
                    <div className='flex w-full flex-col justify-center items-center'>
                        <h3
                            className={cn(
                                "text-xl font-medium",
                                "text-blue-500",
                                "mb-4",
                            )}>
                            What is GrokIt?
                        </h3>
                        <h2 className={cn(
                            "text-4xl font-bold text-center",
                            "text-zinc-800 dark:text-zinc-200",
                            "mb-20 max-w-2xl",
                        )}>
                            We craft intuitive solutions from complex technologies. 
                        </h2>
                    </div>
                    <ShowcaseGrid />
                </div>
            </div>
        </div>
    )
}