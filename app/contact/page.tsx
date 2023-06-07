import ExternalLink from '@components/ExternalLink'

export default function Contact() {
    return (
        <div className="container max-w-3xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block text-4xl font-bold tracking-tight dark:text-white text-slate-800 lg:text-5xl">
                        Contact
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300">
                        We&apos;d love to work with you.
                    </p>
                </div>
            </div>
            <hr className="my-8 border-slate-200" />
            <div className="flex flex-col">
                <p className="text-base text-slate-600 dark:text-slate-300">
                    We are currently accepting new clients under our consulting firm, Everman - Haygood. You can reach us at{' '}
                    <ExternalLink href='mailto:evermanhaygood@gmail.com'>
                        evermanhaygood@gmail.com
                    </ExternalLink>
                </p>
            </div>
        </div>
    )
}