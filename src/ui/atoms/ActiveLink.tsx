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
	const isActive = pathname === href;
	return (
		<Link className={clsx(`hover:text-red-600`, isActive && `font-bold underline`)} href={href}>
			{children}
		</Link>
	);
}
