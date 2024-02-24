import { Suspense } from "react";
import { type Metadata } from "next";
import { geProductResponseItemTypeById } from "@/api/product";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImg";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { ProductDescription } from "@/ui/atoms/ProductDescription";

export async function generateStaticParams() {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const products = (await res.json()) as { id: string; title: string }[];

	return products.map((product) => ({ productId: product.id })).slice(0, 20);
}

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await geProductResponseItemTypeById(params.productId);
	return {
		title: `Produkt - ${product.name}`,
		description: product.description,
	};
};

export default async function SingleProduct({ params }: { params: { productId: string } }) {
	const product = await geProductResponseItemTypeById(params.productId);
	return (
		<>
			<article className="max-w-lg">
				<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
				<ProductListItemDescription product={product} />
				<ProductDescription product={product} />
				<Suspense fallback={<div>Loading...</div>}>
					<SuggestedProducts />
				</Suspense>
			</article>
		</>
	);
}
