'use client'

import { cn, getRandomInt } from "@/lib/utils"
import UserStory from "@/components/user-story";
import DesignCard from "@/components/ui/designcard";
import { Icons } from "./icons";
import Link from 'next/link'
import { Badge, badgeColors, badgeTextColors } from '@/components/ui/badge'
import ExternalLink from "./ui/ExternalLink";
import { SmartLink } from "./smartlink";
import { allProjects, Project, allPosts, Post } from "@/.contentlayer/generated";
import { PropsWithChildren } from "react";

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

export const GridCard = ({ children }: PropsWithChildren<any>) => {
    return (
        <div
            className={cn(
                "overflow-hidden relative border",
                "rounded-lg group",
                "dark:hover:border-zinc-500 dark:hover:border-[1px]",
                "p-4 md:p-8 md:gap-8",
                "hover:shadow-sm dark:hover:shadow-none",
                "hover:scale-[1.01]",
                "transition-all"
            )}
        >
            {children}
        </div>
    )
}

export const ShowcaseGrid = () => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4",
                // "px-4 sm:px-8 md:px-12 lg:px-24",
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
                            <GridCard
                                key={i}
                                gradient={item.type === "project" ? 2 : item.type === "blog" ? 1 : 3}
                                className={cn(
                                    "flex flex-col justify-between",
                                    "w-full h-full",
                                    'px-8 py-8 lg:py-6',
                                    item.type === "project" ? "min-h-[250px]" : item.type === "blog" ? `min-h-[100px]` : `min-h-[0px]`,
                                )}
                                onHoverOnly={true}
                            >
                                <div className='flex flex-col justify-between h-full'>
                                    <div>
                                        <div className='flex flex-row items-center w-full mb-2'>
                                            <h3 className={cn(
                                                item.type === "project" ? "font-semibold text-2xl" : item.type === "blog" ? "font-semibold text-xl" : "font-medium text-xl",
                                            )}>
                                                {item.title}
                                            </h3>
                                            {item.type === 'project' && <Icons.gitHub
                                                className='md:flex hidden h-6 w-6 ml-3 items-center justify-center'
                                            />}
                                        </div>
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
                            </GridCard>
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
                "w-full"
            )}>
                <ShowcaseGrid />
            </div>
        </div>
    )
}