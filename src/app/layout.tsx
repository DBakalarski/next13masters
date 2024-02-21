import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next13",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="bg-gray-800 p-4 text-white">
					<ul className="flex justify-between">
						<li>
							<Link href="/">Logo</Link>
						</li>
						<li>
							<ul className="flex">
								<li className="mx-2">
									<ActiveLink href="/">Homepage</ActiveLink>
								</li>
								<li>
									<ActiveLink href="/products">All</ActiveLink>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer className="text-center text-gray-500"> © 2021 Next13</footer>
			</body>
		</html>
	);
}
