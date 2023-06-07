'use client'

import Link from 'next/link'
import { navItems } from '@/config/navbar'

import { cn } from "@/lib/utils"
import { buttonVariants } from './shadcn-ui/button'

export default function NavBar(props: any) {
    return (
        <nav
            className='sticky top-0 flex flex-row justify-between items-center bg-transparent z-50 w-full h-16'
        >
            <div
                className='container p-4 flex flex-row justify-between items-center w-full'
            >
                <ul
                    className='flex flex-row items-center w-full gap-4'
                >
                    {navItems.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={cn(
                                    buttonVariants({ variant: "link" }),
                                    "font-medium"
                                )}
                            >
                                <li>
                                    {item.name}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}