import { redirect } from "next/navigation";
import { geProductResponseItemTypesList, getAllProductsLength } from "@/api/product";
import { Pagination } from "@/ui/atoms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { PRODUCTS_PER_PAGE } from "@/variables";

export default async function Products({ params }: { params: { pageNumber: string } }) {
	const productLength = await getAllProductsLength();
	const totalPages = Math.ceil(productLength / PRODUCTS_PER_PAGE);
	const pageNumber = Number(params.pageNumber);

	if (!pageNumber || pageNumber < 1 || pageNumber > totalPages || isNaN(pageNumber)) {
		redirect("/products/1");
	}

	const offset = (pageNumber - 1) * PRODUCTS_PER_PAGE;
	const products = await geProductResponseItemTypesList(PRODUCTS_PER_PAGE, offset);

	return (
		<>
			<ProductList products={products} />
			<Pagination totalPages={totalPages} />
		</>
	);
}
