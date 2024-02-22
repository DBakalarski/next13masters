import { geProductResponseItemTypesList } from "@/api/product";
import { ProductList } from "@/ui/organisms/ProductList";
import { TOTAL_PRODUCTS } from "@/variables";

export default async function Home() {
	const products = await geProductResponseItemTypesList(TOTAL_PRODUCTS);

	return <ProductList products={products} />;
}
