import { Icons } from "@/components/icons"
import { siteConfig } from "@/config/site"
import ExternalLink from "@/components/ExternalLink"

export default function ContactButton() {
    return (
        <div className='flex flex-row items-center justify-center gap-4 text-zinc-800 dark:text-zinc-300'>
            <a
                href={`mailto:${siteConfig.contact.email}`}
            >
                <Icons.mail
                    className='w-6 h-6 hover:text-zinc-600 dark:hover-text-zinc-300'
                />
            </a>
            <ExternalLink
                href={`mailto:${siteConfig.contact.email}`}
                arrow={true}
            >
                {siteConfig.contact.email}
            </ExternalLink>
        </div>
    )
}