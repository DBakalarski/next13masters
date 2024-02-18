import { geProductResponseItemTypeById } from "@/api/product";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImg";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export default async function SingleProduct({ params }: { params: { productId: string } }) {
	const product = await geProductResponseItemTypeById(params.productId);
	return (
		<>
			<h1 className="text-4xl font-bold">{product.name}</h1>
			<article>
				<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
				<ProductListItemDescription product={product} />
			</article>
		</>
	);
}
