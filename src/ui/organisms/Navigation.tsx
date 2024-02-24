import Link from "next/link";
import { CartCounter } from "@/ui/atoms/CartCounter";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Navigation = () => {
	return (
		<nav className="fixed left-0 right-0 top-0 z-10 bg-gray-600 p-4 text-white">
			<div className="container mx-auto flex justify-between">
				<ul className="flex justify-between">
					<li>
						<ul className="flex">
							<li className="mx-2">
								<ActiveLink href="/">Home</ActiveLink>
							</li>
							<li className="mx-2">
								<ActiveLink href="/products">All</ActiveLink>
							</li>
						</ul>
					</li>
				</ul>
				<Link href="/cart">
					<CartCounter />
				</Link>
			</div>
		</nav>
	);
};