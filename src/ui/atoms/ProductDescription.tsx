import { cookies } from "next/headers";
import { AddToCartButton } from "./AddToCartButton";
import { type ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";
import { addProductToCart, getCartById, getOrCreateCart } from "@/api/cart";
import { changeItemQuantity } from "@/app/cart/action";

export const ProductDescription = ({ product }: { product: ProductListItemFragment }) => {
	async function addProductToCartAction() {
		"use server";
		const cartId = cookies().get("cartId")?.value;
		if (!cartId) {
			await getOrCreateCart(product.id);
		} else {
			const cart = await getCartById(cartId);
			const isItemInCart = cart.cart?.items.find((item) => item.product.id === product.id);
			if (isItemInCart) {
				await changeItemQuantity(product.id, isItemInCart.quantity + 1, cartId);
				return;
			}

			await addProductToCart(cartId, product.id);
		}
	}
	return (
		<div className="ml-4 max-w-md">
			<h1 className="pb-4 text-4xl font-bold">{product.name}</h1>
			<p className="pb-4 text-lg font-medium text-gray-900">
				<span className="sr-only">Cena</span> {formatMoney(product.price / 100)}$
			</p>
			<p>{product.description}</p>
			<form action={addProductToCartAction}>
				<input type="text" name="productId" hidden defaultValue={product.id} />
				<AddToCartButton />
			</form>
		</div>
	);
};
