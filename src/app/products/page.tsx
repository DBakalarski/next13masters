import { geProductResponseItemTypesList } from "@/api/product";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Home() {
	const products = await geProductResponseItemTypesList();

	return <ProductList products={products} />;
}
