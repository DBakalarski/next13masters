import { redirect } from "next/navigation";
import { getProductsLengthByCategory, getProductsListByCategory } from "@/api/product";
import { Pagination } from "@/ui/atoms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { PRODUCTS_PER_PAGE } from "@/constant";

export default async function Products({
	params,
}: {
	params: { pageNumber: string; categorySlug: string };
}) {
	const pageNumber = Number(params.pageNumber);
	const categorySlug = params.categorySlug;
	const productLength = await getProductsLengthByCategory(categorySlug);
	const totalPages = Math.ceil(productLength / PRODUCTS_PER_PAGE);

	if (
		!pageNumber ||
		pageNumber < 1 ||
		pageNumber > totalPages ||
		isNaN(pageNumber) ||
		!categorySlug
	) {
		redirect("/products/1");
	}

	const offset = (pageNumber - 1) * PRODUCTS_PER_PAGE;
	const allProducts = await getProductsListByCategory(categorySlug);
	const products = allProducts.slice(offset, offset + PRODUCTS_PER_PAGE);

	return (
		<>
			<ProductList products={products} />
			{totalPages > 1 && <Pagination totalPages={totalPages} path={`category/${categorySlug}`} />}
		</>
	);
}
