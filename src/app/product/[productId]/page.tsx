import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductItemById } from "@/api/product";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImg";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { ProductDescription } from "@/ui/atoms/ProductDescription";

// export async function generateStaticParams() {
// 	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
// 	const products = (await res.json()) as { id: string; title: string }[];

// 	return products.map((product) => ({ productId: product.id })).slice(0, 20);
// }

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductItemById(params.productId);
	return {
		title: `Produkt - ${product?.name || ""}`,
		description: product?.description || "",
	};
};

export default async function SingleProduct({ params }: { params: { productId: string } }) {
	const product = await getProductItemById(params.productId);
	if (!product) return notFound();

	return (
		<>
			<article className="flex">
				<div className="max-w-xl flex-shrink-0">
					{product.images[0] && <ProductCoverImage src={product.images[0].url} alt="" />}
				</div>
				<div>
					<ProductDescription product={product} />
				</div>
			</article>
			<Suspense fallback={<div>Loading...</div>}>
				<SuggestedProducts />
			</Suspense>
		</>
	);
}
