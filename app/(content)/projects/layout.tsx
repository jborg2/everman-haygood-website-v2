import { Toggle } from '@/components/darkmodetoggle';
import NavBar from '@/components/navbar-2';
import { cn } from '@/lib/utils'
import MobileNavBar from "@/components/mobile-navbar";
import { DocsSidebarNav } from '@/components/sidebar-nav';
import { docsConfig } from "@/config/docs"
import { allProjects } from '@/.contentlayer/generated';
import { SidebarNavItem } from '@/components/sidebar-nav';

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {

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
        <div className={cn(
            "flex min-h-screen flex-col",
            "from-zinc-100 via-zinc-600/10 to-zinc-100",
            "dark:from-zinc-900 dark:via-zinc-400/10 dark:to-zinc-900",
        )}>
            <div className="fixed bottom-0 right-0 mb-4 mr-4 z-50">
                <Toggle />
            </div>
            <main className={cn(
                "flex-1",
                // "min-h-[calc(100vh-4rem)]",
                "min-h-screen",
                "w-screen",
            )}>

                <div className='block sticky sm:hidden top-0 z-50'>
                    <MobileNavBar />
                </div>
                <div className='hidden relative sm:block w-full z-50 border-b border-zinc-200 dark:border-zinc-700'>
                    <NavBar />
                </div>
                <div className='container w-full'>
                    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
                        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r border-zinc-200 dark:border-zinc-700 py-6 pr-2 md:sticky md:block lg:py-10">
                            <DocsSidebarNav items={generatedSidebarItems} />
                        </aside>
                        <div className='py-6 lg:py-10 max-w-3xl'>
                            {children}
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
}