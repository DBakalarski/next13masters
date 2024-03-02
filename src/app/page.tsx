import { getProductLists } from "@/api/product";
import { CollectionsList } from "@/ui/molecules/CollectionsList";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Home() {
	const products = await getProductLists(4, 0);
	return (
		<>
			<CollectionsList />
			<ProductList products={products} />
		</>
	);
}
