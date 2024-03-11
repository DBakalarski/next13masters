import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { getProductItemById } from "./product";
import { CartAddItemDocument, CartFindOrCreateDocument, CartGetByIdDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/apiGraphql";

export async function getOrCreateCart(productId: string) {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await executeGraphql({
			query: CartFindOrCreateDocument,
			variables: {
				id: cartId,
				input: { items: [{ productId, quantity: 1 }] },
			},
		});
		if (cart) return cart;
	}

	const newCart = await executeGraphql({
		query: CartFindOrCreateDocument,
		variables: {
			input: { items: [{ productId, quantity: 1 }] },
		},
	});

	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.cartFindOrCreate.id);
	return newCart;
}

export async function addProductToCart(cartId: string, productId: string) {
	const product = await getProductItemById(productId);
	if (!product) {
		throw new Error(`Product with ${productId} not found`);
	}
	await executeGraphql({
		query: CartAddItemDocument,
		variables: {
			id: cartId,
			input: { item: { productId, quantity: 1 } },
		},
		next: { tags: ["cart"] },
	});
	revalidateTag("cart");
}

export async function getCartById(cartId: string) {
	const cart = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			id: cartId,
		},
	});
	if (!cart) {
		throw new Error(`Cart with ${cartId} not found`);
	}

	return cart;
}
