import Link from 'next/link'

export const SmartLink = ({ children, className, href }: { children: React.ReactNode, className?: string, href: string }) => {
    if (href.startsWith("http")) {
        return (
            <a href={href} className={className}>
                {children}
            </a>
        )
    } else {
        return (
            <Link href={href} className={className}>
                {children}
            </Link>
        )
    }
}