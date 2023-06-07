import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export default function DesignCard ({ children }: PropsWithChildren<any>) {
	return (
		<div
			className={cn("overflow-hidden relative duration-700 border rounded-lg hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600",
			"p-4 md:p-8"
			)}
		>
			{children}
		</div>
	);
};
