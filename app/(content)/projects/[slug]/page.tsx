// app/posts/[slug]/page.tsx
import { Project, allProjects } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import { Mdx } from "@/components/mdx-components"

export const generateStaticParams = async () => allProjects.map((project) => ({ slug: project.slugAsParams }))

export default async function Page({ params }: { params: { slug: string } }) {
    // Find the project for the current page.
    // this is matching the "computed fields"
    // ! if i log this object i see the computed fields (slugAsParams) but it still throws a type error because of the weird syntax I had to use in the .contentlayer.config file
    const project = allProjects.find((project: Project) => project.slugAsParams === params.slug)

    // 404 if the project does not exist.
    if (!project) notFound()

    return (
        <div>
            <div>
                {project.date && (
                    <time
                        dateTime={project.date}
                        className="block text-sm text-muted-foreground"
                    >
                        Last updated on {format(parseISO(project.date), 'LLLL d, yyyy')}
                    </time>
                )}
                <h1 className="mt-2 mb-4 inline-block font-bold text-4xl leading-tight lg:text-5xl">
                    {project.title}
                </h1>
                <p>
                    {project?.desc}
                </p>
            </div>
            <hr className="mb-4 mt-4" />
            <article>
                <Mdx code={project.body.code} />
            </article>
        </div>
    )
}