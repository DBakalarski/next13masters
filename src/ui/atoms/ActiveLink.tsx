"use client";

import clsx from "clsx";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ActiveLink<T extends string>({
	href,
	children,
}: {
	href: Route<T> | URL;
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	const hrefPath = typeof href === "object" ? href.pathname : href;

	const isRootLinkActive = hrefPath === "/" && pathname === "/";
	const isActive =
		isRootLinkActive ||
		(!isRootLinkActive &&
			pathname.startsWith(hrefPath) &&
			(pathname === hrefPath || pathname.startsWith(`${hrefPath}/`)));

	return (
		<Link
			className={clsx(
				`border-blue-400 pb-1 hover:border-b-2`,
				isActive && `border-b-2 border-blue-600`,
			)}
			href={href}
			{...(isActive ? { "aria-current": "page" } : {})}
		>
			{children}
		</Link>
	);
}
