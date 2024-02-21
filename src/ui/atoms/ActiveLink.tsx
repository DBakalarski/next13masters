"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

export const ActiveLink = <T extends string>({
	href,
	children,
}: {
	href: Route<T> | URL;
	children: ReactNode;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link className={clsx(`hover:text-red-600`, isActive && `underline`)} href={href}>
			{children}
		</Link>
	);
};
