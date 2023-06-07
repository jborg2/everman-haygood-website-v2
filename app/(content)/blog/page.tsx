import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Blog",
}

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="container max-w-3xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-bold tracking-tight dark:text-white text-slate-800 lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Learn more about what we&apos;re up to.
          </p>
        </div>
      </div>
      <hr className="my-8 border-slate-200" />
      {posts?.length ? (
        <div className="flex gap-10 flex-col">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {/* {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
                  priority={index <= 1}
                />
              )} */}
              <h2 className="text-xl font-semibold">{post.title}</h2>
              {post?.desc && (
                <p className="text-slate-600 dark:text-slate-400">{post?.desc}</p>
              )}
              {post.date && (
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={post.url} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}
