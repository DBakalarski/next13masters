import { type ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({
	product: { categories, name, price, rating },
}: ProductListItemDescriptionProps) => {
	return (
		<>
			<div className="mt-2 flex justify-between">
				<div>
					<h3 className="text-sm font-semibold text-gray-700">{name}</h3>

					<p className="text-sm text-gray-500">
						or
						<span className="sr-only">Kategoria:</span> {categories[0]?.name || "Brak kategorii"}
					</p>
				</div>
				<p className="text-sm font-medium text-gray-900">
					<span className="sr-only">Cena</span>
					<span data-testid="product-price"> {formatMoney(price / 100)}$</span>
				</p>
			</div>
			<div className="flex items-center">
				<p className="text-sm font-medium text-gray-900">
					<span data-testid="product-rating">{rating?.toFixed(1)}</span>/5
				</p>
			</div>
		</>
	);
};
