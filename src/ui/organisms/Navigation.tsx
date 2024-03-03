import { Suspense } from "react";
import Link from "next/link";
import { SearchInput } from "../atoms/SearchInput";
import { CartCounter } from "@/ui/atoms/CartCounter";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { getProductsCategoryList } from "@/api/product";

export const Navigation = async () => {
	const categories = await getProductsCategoryList();

	return (
		<nav className="fixed left-0 right-0 top-0 z-10 bg-gray-600 p-2 text-white">
			<div className="container mx-auto flex justify-between">
				<ul className="flex justify-between">
					<li className="flex items-center">
						<ul className="flex">
							<li className="mx-2">
								<ActiveLink href="/">Home</ActiveLink>
							</li>
							<li className="mx-2">
								<ActiveLink href="/products">All</ActiveLink>
							</li>
							{categories.reverse().map((category) => (
								<li key={category.id} className="mx-2">
									<ActiveLink href={`/categories/${category.slug}`}>{category.name}</ActiveLink>
								</li>
							))}
						</ul>
					</li>
				</ul>
				<Suspense fallback="Loading...">
					<SearchInput />
				</Suspense>
				<Link className="flex items-center" href="/cart">
					<CartCounter />
				</Link>
			</div>
		</nav>
	);
};
