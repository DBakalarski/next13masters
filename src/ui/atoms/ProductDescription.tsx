import { type ProductItemType } from "@/types/productTypes";
import { formatMoney } from "@/utils";

export const ProductDescription = ({ product }: { product: ProductItemType }) => {
	return (
		<div className="ml-4 max-w-md">
			<h1 className="pb-4 text-4xl font-bold">{product.name}</h1>
			<p className="pb-4 text-lg font-medium text-gray-900">
				<span className="sr-only">Cena</span> {formatMoney(product.price / 100)}$
			</p>
			<p>{product.description}</p>
		</div>
	);
};
