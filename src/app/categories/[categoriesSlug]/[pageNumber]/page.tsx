import { notFound, redirect } from "next/navigation";
import { type Metadata } from "next";
import {
	getProductsCategoryList,
	getProductsLengthByCategory,
	getProductsListByCategory,
} from "@/api/product";
import { Pagination } from "@/ui/atoms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { PRODUCTS_PER_PAGE } from "@/constant";

export const generateMetadata = async ({
	params,
}: {
	params: { categoriesSlug: string };
}): Promise<Metadata> => {
	const productList = await getProductsCategoryList();
	const category = productList.find((category) => category.slug === params.categoriesSlug);
	return {
		title: category?.name || "",
	};
};

export default async function Products({
	params,
}: {
	params: { pageNumber: string; categoriesSlug: string };
}) {
	const pageNumber = Number(params.pageNumber);
	const categoriesSlug = params.categoriesSlug;
	const productLength = await getProductsLengthByCategory(categoriesSlug);
	const totalPages = Math.ceil(productLength / PRODUCTS_PER_PAGE);
	const productList = await getProductsCategoryList();
	const category = productList.find((category) => category.slug === params.categoriesSlug);

	if (
		!pageNumber ||
		pageNumber < 1 ||
		pageNumber > totalPages ||
		isNaN(pageNumber) ||
		!categoriesSlug
	) {
		redirect("/categories/1");
	}

	const offset = (pageNumber - 1) * PRODUCTS_PER_PAGE;
	const allProducts = await getProductsListByCategory(categoriesSlug);
	const products = allProducts.slice(offset, offset + PRODUCTS_PER_PAGE);

	if (!products || !products.length) return notFound();

	return (
		<>
			<h2 className="pb-4 text-2xl font-bold">{category?.name || ""}</h2>
			<ProductList products={products} />
			{totalPages > 1 && (
				<Pagination totalPages={totalPages} path={`categories/${categoriesSlug}`} />
			)}
		</>
	);
}
