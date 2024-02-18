"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode, useMemo } from "react";

export const ActiveLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	const urlObject = useMemo(() => {
		if (typeof href === "string") {
			return { pathname: href };
		}
		return href;
	}, [href]);

	return (
		<Link className={clsx(`hover:text-red-600`, isActive && `underline`)} href={urlObject}>
			{children}
		</Link>
	);
};
