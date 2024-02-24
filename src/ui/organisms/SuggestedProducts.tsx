import { ProductList } from "./ProductList";
import { getProductResponseItemTypesList } from "@/api/product";

export const SuggestedProducts = async () => {
	const suggestedProducts = await getProductResponseItemTypesList(3);
	return (
		<section>
			<h2 className="mt-5 text-2xl font-bold">Suggested Products</h2>
			<ProductList products={suggestedProducts} />
		</section>
	);
};
