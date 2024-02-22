import { geProductResponseItemTypesList, getAllProductsLength } from "@/api/product";
import { Pagination } from "@/ui/atoms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { PRODUCTS_PER_PAGE, TOTAL_PRODUCTS } from "@/variables";

export default async function Home() {
	const products = await geProductResponseItemTypesList(TOTAL_PRODUCTS);
	const productLength = await getAllProductsLength();
	const totalPages = Math.ceil(productLength / PRODUCTS_PER_PAGE);

	return (
		<>
			<ProductList products={products} />
			<Pagination totalPages={totalPages} />
		</>
	);
}
