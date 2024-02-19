import { ProductList } from "./ProductList";
import { geProductResponseItemTypesList } from "@/api/product";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProducts = async () => {
	const suggestedProducts = await geProductResponseItemTypesList();
	await sleep(5000);
	return (
		<section>
			<h2 className="text-2xl font-bold">Suggested Products</h2>
			<ProductList products={suggestedProducts.slice(-3)} />
		</section>
	);
};
