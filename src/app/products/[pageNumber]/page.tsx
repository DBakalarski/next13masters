import { redirect } from "next/navigation";
import { getAllProductsLength, getProductLists } from "@/api/product";
import { Pagination } from "@/ui/atoms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { PRODUCTS_PER_PAGE } from "@/constant";
import { type ProductSortBy } from "@/gql/graphql";
import { SelectSortBy } from "@/ui/atoms/SelectSortBy";

export default async function Products({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { sortBy: string };
}) {
	const productLength = await getAllProductsLength();
	const totalPages = Math.ceil(productLength / PRODUCTS_PER_PAGE);
	const pageNumber = Number(params.pageNumber);

	if (!pageNumber || pageNumber < 1 || pageNumber > totalPages || isNaN(pageNumber)) {
		redirect("/products/1");
	}

	const offset = (pageNumber - 1) * PRODUCTS_PER_PAGE;

	const query: ProductSortBy = ["DEFAULT", "NAME", "PRICE", "RATING"].includes(searchParams.sortBy)
		? (searchParams.sortBy as ProductSortBy)
		: "DEFAULT";

	const products = await getProductLists(PRODUCTS_PER_PAGE, offset, query);

	return (
		<>
			<div className="my-4 flex justify-end space-x-4">
				<SelectSortBy />
			</div>
			<ProductList products={products} />
			{totalPages > 1 && <Pagination totalPages={totalPages} path="products" sortBy={query} />}
		</>
	);
}
