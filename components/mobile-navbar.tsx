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

export default function MobileNavBar(props: any) {
    const handleResize = () => {
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

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
                    <DropdownMenuContent className="w-screen h-screen animate-slide-right text-2xl mt-2 p-4 bg-background text-foreground dark:bg-background dark:text-foreground border-0 border-t-2 border-b-2 rounded-none border-border dark:border-neutral-700">
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
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}