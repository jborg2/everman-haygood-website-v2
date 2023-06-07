'use client'

import { useEffect } from "react"


// ! this is so that the hero animation doesn't run every time the user clicks the back button to go back to the home page
export default function PopStateControl({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const onPopState = (event: PopStateEvent) => {
            const currentPath = window.location.pathname;

            if (currentPath === '/') {
                const newUrl = new URL(window.location.href);
                newUrl.hash = 'showcase';
                window.history.replaceState(null, '', newUrl.toString());
            }
        };

        window.addEventListener('popstate', onPopState);

        return () => {
            window.removeEventListener('popstate', onPopState);
        };
    }, []);


    return (
        <>
            {children}
        </>
    )
} 