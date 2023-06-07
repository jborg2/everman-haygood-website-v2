import { Card } from '@/components/shadcn-ui/card'
import { cn } from '@/lib/utils'
import { Popsy } from '@/components/popsy'

export default function UserStory() {
    return (
        <div
            className={cn(
                'flex flux-col sm:flex-row w-full justify-center items-center'
            )}
        >
            <div className='flex flex-row items-center'>
                <Popsy.CreativeWork
                    className='h-full w-full rounded-full'
                    // stroke='#ffffff'
                />
                <div className='flex flex-col p-8 ml-16'>
                    {/* <h3 className="text-2xl text-foreground dark:text-foreground mb-4 font-semibold">
                        User Story: some company
                    </h3> */}
                    <p>
                        This company came to us with a problem. They had a lot of data, and they wanted to do stuff with it.
                    </p>
                </div>
            </div>
        </div>
    )
}