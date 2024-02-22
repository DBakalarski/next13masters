import { ProductList } from "./ProductList";
import { geProductResponseItemTypesList } from "@/api/product";

export const SuggestedProducts = async () => {
	const suggestedProducts = await geProductResponseItemTypesList(3);
	return (
		<section>
			<h2 className="mt-5 text-2xl font-bold">Suggested Products</h2>
			<ProductList products={suggestedProducts} />
		</section>
	);
};
