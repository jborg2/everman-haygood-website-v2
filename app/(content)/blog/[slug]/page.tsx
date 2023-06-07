import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import { cn } from '@/lib/utils'

import { Mdx } from '@/components/mdx-components'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/shadcn-ui/button'


export const generateStaticParams = async () => allPosts
    .filter((post) => post.published === true)
    .map((post) => ({ slug: post.slugAsParams }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    // console.log("all posts", allPosts)
    const post = allPosts
        .filter((post) => post.published === true)
        .find((post) => post.slugAsParams === (params.slug))

    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
    return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
    // const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    const post = allPosts
        .filter((post) => post.published === true)
        .find((post) => post.slugAsParams === (params.slug))

    if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

    return (
        <article className="container relative max-w-3xl py-6 lg:py-10">
            <Link
                href="/blog"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute left-[-200px] top-14 hidden xl:inline-flex"
                )}
            >
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                See all posts
            </Link>
            <div>
                {post.date && (
                    <time
                        dateTime={post.date}
                        className="block text-sm text-muted-foreground"
                    >
                        Published on {format(parseISO(post.date), 'LLLL d, yyyy')}
                    </time>
                )}
                <h1 className="mt-2 mb-4 inline-block font-bold text-4xl leading-tight lg:text-5xl">
                    {post.title}
                </h1>
            </div>
            <Mdx code={post.body.code} />
            <hr className="mt-12" />
            <div className="flex justify-center py-6 lg:py-10">
                <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                    See all posts
                </Link>
            </div>
        </article>
    )
}

export default PostLayout