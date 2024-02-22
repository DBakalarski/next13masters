import { type ProductItemType } from "@/types/productTypes";

export const ProductDescription = ({ product }: { product: ProductItemType }) => {
	return (
		<div>
			<h1 className="text-4xl font-bold">{product.name}</h1>
			<p>{product.description}</p>
		</div>
	);
};
