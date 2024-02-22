import { ActiveLink } from "./ActiveLink";

export const Pagination = ({ totalPages }: { totalPages: number }) => {
	const totalPagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<nav className="mt-5" aria-label="pagination">
			<ul className="flex justify-center">
				{totalPagesArray.map((page) => (
					<li className="px-2" key={page}>
						<ActiveLink href={`/products/${page}`}>{page}</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
