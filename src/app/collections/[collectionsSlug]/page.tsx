import { notFound, redirect } from "next/navigation";
import { type Metadata } from "next";
import { getCollectionsData, getProductsListByCollections } from "@/api/product";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateMetadata = async ({
	params,
}: {
	params: { collectionsSlug: string };
}): Promise<Metadata> => {
	const collections = await getCollectionsData();
	const currentCollection = collections.find(
		(collection) => collection.slug === params.collectionsSlug,
	);
	return {
		title: currentCollection?.name || "",
	};
};

export default async function Collection({ params }: { params: { collectionsSlug: string } }) {
	const collectionsSlug = params.collectionsSlug;

	if (!collectionsSlug) {
		redirect("/");
	}
	const products = await getProductsListByCollections(collectionsSlug);
	const collections = await getCollectionsData();
	const currentCollection = collections.find((collection) => collection.slug === collectionsSlug);

	if (!products || !products.length) return notFound();

	return (
		<>
			<h2 className="pb-4 text-2xl font-bold">{currentCollection?.name}</h2>
			<ProductList products={products} />
		</>
	);
}
