import "@styles/global.css";
import "@/styles/mdx.css"
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import Providers from "@/components/providers";
import { siteConfig } from "@/config/site";

import { cn } from '@/lib/utils'

const siteUrl = process.env.NEXT_PUBLIC_APP_URL;

export const metadata: Metadata = {
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.title}`,
	},
	description: siteConfig.description,
	openGraph: {
		title: siteConfig.title,
		description:
			siteConfig.description,
		url: process.env.NEXT_PUBLIC_APP_URL,
		siteName: siteConfig.title,
		images: [
			{
				url: `${siteUrl}/images/og.png`,
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: siteConfig.title,
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.ico",
		icon: "/favicon.ico",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={cn(inter.variable, calSans.variable)}>
			<body
				className="min-h-screen w-screen bg-background dark:bg-background text-foreground dark:text-foreground motion-reduce:transform-none motion-reduce:transition-none"
			>
				<Providers>
					{children}
					<Analytics />
				</Providers>
			</body>
		</html>
	);
}