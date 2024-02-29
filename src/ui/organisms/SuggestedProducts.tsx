import { ProductList } from "./ProductList";
import { PRODUCTS_PER_PAGE } from "@/constant";
import { getProductLists } from "@/api/product";

export const SuggestedProducts = async () => {
	const suggestedProducts = await getProductLists(PRODUCTS_PER_PAGE, 0);
	return (
		<section>
			<h2 className="mt-5 text-2xl font-bold">Suggested Products</h2>
			<ProductList products={suggestedProducts.slice(-3)} />
		</section>
	);
};
