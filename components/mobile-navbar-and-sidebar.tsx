'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/shadcn-ui/dropdown-menu"
import { Menu as MenuIcon } from "lucide-react"

import Link from 'next/link'
import { navItems } from '@/config/navbar'
import { useEffect } from "react"
import { DocsSidebarNav } from "./sidebar-nav"
import { allProjects } from '@/.contentlayer/generated';
import { SidebarNavItem } from '@/components/sidebar-nav';

export default function MobileNavBar(props: any) {
    const handleResize = () => {
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const generatedProjectNavItems: SidebarNavItem[] = allProjects
        .filter((project) => project.published)
        .filter((project) => project.slugAsParams).map((project) => {

            return {
                title: project.title,
                href: `/projects/${project.slugAsParams}`,
            }
        })

    const generatedSidebarItems = [
        {
            title: "Overview",
            items: [
                {
                    title: "Introduction",
                    href: "/projects",
                },
            ],
        },
        {
            title: "Projects",
            items: generatedProjectNavItems,
        }
    ]

    return (
        <nav
            className='top-0 flex flex-row justify-between items-center w-full z-50 h-16'
        >
            <div
                className='container p-4 flex flex-row justify-between items-center w-screen bg-transparent dark:bg-transparent'
            >
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            className="cursor-pointer focus:outline-none z-50"
                        >
                            <MenuIcon />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-screen h-screen animate-slide-right text-2xl mt-2 p-4 text-foreground dark:text-foreground bg-silverbird dark:bg-pianoblack border-0 border-t-2 border-b-2 rounded-none border-border dark:border-neutral-700">
                        <DropdownMenuGroup>
                            {navItems.map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.href}
                                    className='cursor-pointer'
                                >
                                    <DropdownMenuItem
                                        className='cursor-pointer text-2xl font-medium'
                                    >
                                        <span>{item.name}</span>
                                    </DropdownMenuItem>
                                </Link>
                            ))}
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator className='my-4 bg-[hsl(var(--border))]'/>
                        <DropdownMenuGroup>
                            <DocsSidebarNav items={generatedSidebarItems} />
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}