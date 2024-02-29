import { ProductListItem } from "../molecules/ProductListItem";
import { PRODUCTS_PER_PAGE } from "@/constant";
import { getProductLists } from "@/api/product";
import { getRandomElements } from "@/utils";
import { type ProductListItemFragment } from "@/gql/graphql";

export const SuggestedProducts = async () => {
	const pruducts = await getProductLists(PRODUCTS_PER_PAGE, 0);
	const suggestedProducts: ProductListItemFragment[] = getRandomElements(
		pruducts,
		4,
	) as ProductListItemFragment[];
	return (
		<section data-testid="related-products">
			<h2 className="mt-5 text-2xl font-bold">Suggested Products</h2>
			<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{suggestedProducts.map((product) => {
					return <ProductListItem key={product.id} product={product} />;
				})}
			</ul>
		</section>
	);
};
