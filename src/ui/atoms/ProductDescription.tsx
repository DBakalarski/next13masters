import { AddToCartButton } from "./AddToCartButton";
import { type ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";
import { addProductToCart, getOrCreateCart } from "@/api/cart";

export const ProductDescription = ({ product }: { product: ProductListItemFragment }) => {
	async function addProductToCartAction() {
		"use server";

		const cart = await getOrCreateCart(product.id);
		await addProductToCart(cart.cartFindOrCreate.id, product.id);
	}
	return (
		<div className="ml-4 max-w-md">
			<h1 className="pb-4 text-4xl font-bold">{product.name}</h1>
			<p className="pb-4 text-lg font-medium text-gray-900">
				<span className="sr-only">Cena</span> {formatMoney(product.price / 100)}$
			</p>
			<p>{product.description}</p>
			<form action={addProductToCartAction}>
				<input type="text" name="productId" value={product.id} hidden />
				<AddToCartButton />
			</form>
		</div>
	);
};
