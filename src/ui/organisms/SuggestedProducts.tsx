import { ProductList } from "./ProductList";
import { getProductLists } from "@/api/product";

export const SuggestedProducts = async () => {
	const suggestedProducts = await getProductLists();
	return (
		<section>
			<h2 className="mt-5 text-2xl font-bold">Suggested Products</h2>
			<ProductList products={suggestedProducts.slice(-3)} />
		</section>
	);
};
