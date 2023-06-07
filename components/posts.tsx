// app/page.tsx
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { StudioCard } from '@/components/ui/studiocard'
import { cn } from '@/lib/utils'
import useScrollY from '@/lib/hooks/use-scrollY'
import { calculateOpacity } from '@/lib/utils'
import { Mdx } from './mdx-components'
import { Skeleton } from './shadcn-ui/skeleton'
import { useMounted } from '@/lib/hooks/use-mounted'

export function Posts({ posts }: { posts: Post[] }) {
    const { scrollY, scrollYPercent } = useScrollY();
    const opacity = calculateOpacity(scrollYPercent)
    const mounted = useMounted()

    return (
        <div className={cn(
            "px-8",
            "w-full min-h-screen mx-auto max-w-5xl",
            "pt-36",

        )}
            style={{ opacity: calculateOpacity(scrollYPercent) }}
        >
            <h1 className="mb-8 text-center text-5xl font-bold">Ship Feed</h1>
            <div className='flex flex-col gap-4'>
                {posts.map((post, idx) => (
                    <Link href={post.url} key={idx} className='flex flex-col w-full h-full'>
                        <StudioCard key={idx}>
                            <div className="">
                                {/* <h2 className="mb-1 text-2xl font-medium">
                                {post.title}
                            </h2> */}
                                <time dateTime={post.date} className="mb-1 block text-sm text-zinc-600 dark:text-zinc-400">
                                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                                </time>
                                {/* <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
                                {/* <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0 max-h-[200px] overflow-hidden">
                                    {mounted ?
                                        <Mdx code={post.body.code} /> :
                                        <Skeleton />
                                    }
                                </div> */}
                                <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0 max-h-[200px] overflow-hidden">
                                    {post.title}
                                </div>
                            </div>
                        </StudioCard>
                    </Link>
                ))}
            </div>
        </div>
    )
}