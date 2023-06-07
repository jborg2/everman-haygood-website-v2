import React from 'react'
import { getRepo } from '@/lib/github'
import { Card } from './shadcn-ui/card'
import { Icons } from './icons'
import Link from 'next/link'
import { Badge } from './ui/badge'
import { formatDate } from '@/lib/utils'

const fetchData = async (url: string | URL) => {
    let urlObj: URL
    if (typeof url === 'string') {
        urlObj = new URL(url)
    } else {
        urlObj = url
    }
    const data = await getRepo(urlObj)
    return data
}

export default async function RepoCard({ children, url }: { children: React.ReactNode, url: string | URL }) {

    const repo = await fetchData(url)
    // console.log(gitHubData)
    return (
        <Card
            className='my-6 py-4 px-4 max-w-xl shadow-none border-[1px] border-zinc-200 dark:border-zinc-700 bg-white dark:bg-neutral-800'
        >
            <div className='flex flex-col justify-between'>
                <Link
                    href={repo["html_url"]}
                    className='flex flex-row items-center text-blue-600 dark:text-blue-500 hover:underline hover:underline-offset-2'
                    target='_blank'
                >
                    <h3 className='text-xl mb-2'>
                        <span className='font-semibold'>{repo["name"]}</span>
                    </h3>
                </Link>
                <p
                    className='text-gray-700 dark:text-gray-300 text-sm mb-2'
                >
                    {repo["description"]}
                </p>
                <div className='flex flex-row gap-4 mt-2 items-center'>
                    <Badge color={7} className='flex flex-col items-center justify-center text-xs'>{repo['language']}</Badge>
                    <div
                        className='flex flex-row gap-2'
                    >
                        <Link
                            href={`${repo['html_url']}/fork`}
                            className='flex flex-row items-center text-gray-500 text-xs'
                        >
                            <Icons.gitFork className='h4 w-4 mr-1' /> {repo['forks_count']}
                        </Link>
                        <Link
                            href={`${repo['html_url']}`}
                            className='flex flex-row items-center text-gray-500 text-xs'
                        >
                            <Icons.star className='h-4 w-4 mr-1' /> {repo['stargazers_count']}
                        </Link>
                    </div>
                    <p
                        className='text-gray-500 text-xs italic'
                    >  Last updated:{' '}
                        {formatDate(repo['updated_at'])}
                    </p>
                </div>
            </div>
        </Card>
    )
}