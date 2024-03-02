import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Pagination = ({ totalPages, path }: { totalPages: number; path: string }) => {
	const totalPagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<nav className="mt-5" aria-label="pagination">
			<ul className="flex justify-center">
				{totalPagesArray.map((page) => (
					<li className="px-2" key={page}>
						<ActiveLink href={`/${path}/${page}`}>{page}</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
