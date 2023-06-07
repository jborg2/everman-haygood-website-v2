import { Toggle } from '@/components/darkmodetoggle';
import { cn } from '@/lib/utils'

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
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
            )}>{children}</main>
        </div>
    );
}