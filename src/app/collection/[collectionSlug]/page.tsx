import { notFound, redirect } from "next/navigation";
import { getProductsListByCollections } from "@/api/product";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Collection({ params }: { params: { collectionSlug: string } }) {
	const collectionSlug = params.collectionSlug;

	if (!collectionSlug) {
		redirect("/");
	}
	const products = await getProductsListByCollections(collectionSlug);

	if (!products || !products.length) return notFound();

	return (
		<>
			<ProductList products={products} />
		</>
	);
}
